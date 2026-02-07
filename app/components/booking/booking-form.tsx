'use client';

import { useState, useEffect } from 'react';
import { Calendar } from '../ui/calendar';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Check, Clock, Loader2 } from 'lucide-react';
import { createAppointment, getServices } from '@/app/actions/booking';
import { Input } from '../ui/input';

const timeSlots = [
    "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

interface Service {
    id: string;
    name: string;
    price: number; // Decimal comes as string or number depending on serialization, usually number in JSON
}

export function BookingForm() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [services, setServices] = useState<Service[]>([]);
    const [userData, setUserData] = useState({ name: '', phone: '' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch services on mount
        getServices().then((data: any) => setServices(data));
    }, []);

    const handleBooking = async () => {
        if (!date || !selectedTime || !selectedService || !userData.name || !userData.phone) {
            setMessage('Preencha todos os campos.');
            return;
        }

        setLoading(true);
        setMessage('');

        const formData = new FormData();
        formData.append('date', format(date, 'yyyy-MM-dd'));
        formData.append('time', selectedTime);
        formData.append('serviceId', selectedService);
        formData.append('name', userData.name);
        formData.append('phone', userData.phone); // acting as ID/Email for now

        const result = await createAppointment(formData);
        setLoading(false);
        setMessage(result.message as string);

        if (result.success) {
            // Reset or redirect
            // For now just clear selection
            setSelectedTime(null);
            setSelectedService(null);
            setUserData({ name: '', phone: '' });
        }
    };

    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <Card className="border-none shadow-md">
                    <CardHeader>
                        <CardTitle className="text-[var(--primary-dark)]">1. Escolha a Data</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                            captionLayout="dropdown"
                            startMonth={new Date()}
                            endMonth={new Date(new Date().getFullYear() + 1, 11)}
                            disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past dates and Sundays
                        />
                    </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                    <CardHeader>
                        <CardTitle className="text-[var(--primary-dark)]">2. Seus Dados</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input
                            placeholder="Seu Nome Completo"
                            value={userData.name}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        />
                        <Input
                            placeholder="Seu Telefone (WhatsApp)"
                            value={userData.phone}
                            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                        />
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <Card className="border-none shadow-md">
                    <CardHeader>
                        <CardTitle className="text-[var(--primary-dark)]">3. Escolha o Serviço</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            {services.map((service) => (
                                <Button
                                    key={service.id}
                                    variant={selectedService === service.id ? 'primary' : 'outline'}
                                    size="sm"
                                    onClick={() => setSelectedService(service.id)}
                                    className={`justify-start ${selectedService === service.id ? 'bg-[var(--secondary)] border-[var(--secondary)]' : ''}`}
                                >
                                    {service.name} - R$ {Number(service.price)}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                    <CardHeader>
                        <CardTitle className="text-[var(--primary-dark)]">4. Escolha o Horário</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-3 gap-3">
                            {timeSlots.map((time) => (
                                <Button
                                    key={time}
                                    variant={selectedTime === time ? 'primary' : 'outline'}
                                    size="sm"
                                    onClick={() => setSelectedTime(time)}
                                    className={selectedTime === time ? 'bg-[var(--secondary)] border-[var(--secondary)]' : ''}
                                >
                                    {time}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {date && selectedTime && selectedService && (
                    <Card className="border-none shadow-md bg-[var(--muted)]/30">
                        <CardHeader>
                            <CardTitle className="text-[var(--primary-dark)]">Resumo</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-col gap-2 text-[var(--foreground)] text-sm">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[var(--secondary)]" />
                                    <span>{format(date, "EEEE, d 'de' MMMM", { locale: ptBR })} às {selectedTime}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-[var(--secondary)]" />
                                    <span>{services.find(s => s.id === selectedService)?.name}</span>
                                </div>
                            </div>

                            {message && (
                                <p className={`text-sm ${message.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
                                    {message}
                                </p>
                            )}

                            <Button className="w-full" onClick={handleBooking} disabled={loading}>
                                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Confirmar Agendamento'}
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
