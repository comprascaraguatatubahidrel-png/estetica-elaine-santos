import prisma from '@/app/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default async function AgendamentosPage() {
    const appointments = await prisma.appointment.findMany({
        include: {
            user: true,
            service: true
        },
        orderBy: {
            date: 'desc'
        }
    });

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Agendamentos</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Todos os Agendamentos</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Cliente</th>
                                    <th scope="col" className="px-6 py-3">Serviço</th>
                                    <th scope="col" className="px-6 py-3">Data/Hora</th>
                                    <th scope="col" className="px-6 py-3">Status</th>
                                    <th scope="col" className="px-6 py-3">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment) => (
                                    <tr key={appointment.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            {appointment.user.name}
                                            <br />
                                            <span className="text-xs text-gray-400">{appointment.user.email}</span>
                                        </td>
                                        <td className="px-6 py-4">{appointment.service.name}</td>
                                        <td className="px-6 py-4">
                                            {format(new Date(appointment.date), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${appointment.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                                                    appointment.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' :
                                                        'bg-red-100 text-red-800'
                                                }`}>
                                                {appointment.status === 'PENDING' ? 'Pendente' :
                                                    appointment.status === 'CONFIRMED' ? 'Confirmado' :
                                                        appointment.status === 'COMPLETED' ? 'Concluído' : 'Cancelado'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {/* Add actions later */}
                                            <button className="text-blue-600 hover:underline">Detalhes</button>
                                        </td>
                                    </tr>
                                ))}
                                {appointments.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-4 text-center">Nenhum agendamento encontrado.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
