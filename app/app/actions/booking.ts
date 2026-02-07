'use server';

import prisma from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getServices() {
    try {
        return await prisma.service.findMany();
    } catch (error) {
        console.error('Error fetching services:', error);
        return [];
    }
}

export async function createAppointment(formData: FormData) {
    const date = formData.get('date') as string;
    const time = formData.get('time') as string;
    const serviceId = formData.get('serviceId') as string;
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;

    if (!date || !time || !serviceId || !name || !phone) {
        return { success: false, message: 'Todos os campos são obrigatórios.' };
    }

    // Combine date and time into a single DateTime object
    // Assumes date is YYYY-MM-DD and time is HH:mm
    const dateTimeString = `${date}T${time}:00`;
    const appointmentDate = new Date(dateTimeString);

    try {
        // Check if user exists, if not create (simplified logic for now)
        // In a real app we would have auth or look up by phone/email
        let user = await prisma.user.findFirst({
            where: { email: `${phone}@temp.com` } // Temporary placeholder email logic
        });

        if (!user) {
            user = await prisma.user.create({
                data: {
                    name,
                    email: `${phone}@temp.com`, // using phone as fake email for now
                    password: 'temp-password', // should be handled better
                    role: 'CLIENT'
                }
            });
        }

        await prisma.appointment.create({
            data: {
                date: appointmentDate,
                userId: user.id,
                serviceId: serviceId,
                status: 'PENDING'
            },
        });

        revalidatePath('/admin/agendamentos');
        return { success: true, message: 'Agendamento solicitado com sucesso!' };
    } catch (error) {
        console.error('Error creating appointment:', error);
        return { success: false, message: 'Erro ao criar agendamento. Tente novamente.' };
    }
}
