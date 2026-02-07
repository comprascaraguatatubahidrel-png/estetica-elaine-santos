import prisma from '@/app/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Users, Calendar, DollarSign, Clock } from "lucide-react";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default async function AdminDashboard() {
    // Fetch real stats
    const totalAppointments = await prisma.appointment.count();
    const totalClients = await prisma.user.count({ where: { role: 'CLIENT' } });

    // Calculate today's revenue (simplified)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const appointmentsToday = await prisma.appointment.findMany({
        where: {
            date: {
                gte: today,
                lt: tomorrow
            }
        },
        include: { service: true }
    });

    const revenueToday = appointmentsToday.reduce((acc, curr) => acc + Number(curr.service.price), 0);
    const revenueFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(revenueToday);

    // Recent appointments
    const recentAppointments = await prisma.appointment.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: { user: true, service: true }
    });

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500">Bem-vindo de volta, Elaine.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard title="Agendamentos Hoje" value={appointmentsToday.length.toString()} icon={Calendar} trend="Hoje" />
                <StatsCard title="Clientes Totais" value={totalClients.toString()} icon={Users} trend="Total" />
                <StatsCard title="Faturamento do Dia" value={revenueFormatted} icon={DollarSign} trend="Estimado" />
                <StatsCard title="Total Agendamentos" value={totalAppointments.toString()} icon={Clock} trend="Geral" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Últimas Solicitações</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentAppointments.map((apt) => (
                                <div key={apt.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[var(--secondary-light)]/30 flex items-center justify-center font-bold text-[var(--secondary-dark)]">
                                            {apt.user.name?.substring(0, 2).toUpperCase() || 'CL'}
                                        </div>
                                        <div>
                                            <p className="font-medium">{apt.user.name}</p>
                                            <p className="text-sm text-gray-500">{apt.service.name} - {format(new Date(apt.date), "HH:mm")}</p>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                                        {apt.status}
                                    </span>
                                </div>
                            ))}
                            {recentAppointments.length === 0 && <p className="text-gray-500 text-center py-4">Nenhuma solicitação recente.</p>}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function StatsCard({ title, value, icon: Icon, trend }: any) {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-0 pb-2">
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <Icon className="h-4 w-4 text-gray-500" />
                </div>
                <div className="flex items-center justify-between pt-2">
                    <div className="text-2xl font-bold">{value}</div>
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">{trend}</span>
                </div>
            </CardContent>
        </Card>
    );
}
