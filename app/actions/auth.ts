'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Hardcoded credentials for MVP - Replace with DB check later
    if (email === 'admin@elaine.com' && password === 'admin123') {
        const cookieStore = await cookies();
        cookieStore.set('admin_session', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        });
        redirect('/admin');
    } else {
        return { success: false, message: 'Credenciais inválidas' };
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('admin_session');
    redirect('/admin/login');
}
