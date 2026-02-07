'use client';

import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { login } from '@/app/actions/auth';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (formData: FormData) => {
        setLoading(true);
        setError('');

        // Server action handles redirect on success
        const result = await login(formData); // result is only returned if redirect doesn't happen (error)

        if (result?.success === false) {
            setError(result.message);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
            <Card className="w-full max-w-md border-none shadow-xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-serif text-[var(--primary-dark)]">Área Administrativa</CardTitle>
                    <p className="text-sm text-[var(--muted-foreground)]">Faça login para gerenciar a clínica</p>
                </CardHeader>
                <CardContent>
                    <form action={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email"
                                required
                                className="bg-gray-50 border-gray-200"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                name="password"
                                type="password"
                                placeholder="Senha"
                                required
                                className="bg-gray-50 border-gray-200"
                            />
                        </div>

                        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Entrar'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
