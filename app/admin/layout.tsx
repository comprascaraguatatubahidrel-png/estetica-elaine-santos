import { ReactNode } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Calendar, Users, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r hidden md:flex flex-col">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-serif font-bold text-[var(--primary-dark)]">Admin Painel</h2>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-[var(--primary-dark)] bg-[var(--muted)] rounded-md font-medium">
                        <LayoutDashboard className="w-5 h-5" />
                        Visão Geral
                    </Link>
                    <Link href="/admin/agendamentos" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-md transition-colors">
                        <Calendar className="w-5 h-5" />
                        Agendamentos
                    </Link>
                    <Link href="/admin/clientes" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-md transition-colors">
                        <Users className="w-5 h-5" />
                        Clientes
                    </Link>
                    <Link href="/admin/configuracoes" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-md transition-colors">
                        <Settings className="w-5 h-5" />
                        Configurações
                    </Link>
                </nav>

                <div className="p-4 border-t">
                    <form action={async () => {
                        'use server';
                        const { logout } = await import('@/app/actions/auth');
                        await logout();
                    }}>
                        <button className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-md w-full transition-colors">
                            <LogOut className="w-5 h-5" />
                            Sair
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}
