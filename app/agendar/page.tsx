import { BookingForm } from "../components/booking/booking-form";
import { Header } from "../components/header";

export default function AgendamentoPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Header />
            <div className="container mx-auto px-4 py-24">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)]">Agende seu Horário</h1>
                        <p className="text-[var(--muted-foreground)]">Escolha o melhor momento para cuidar de você.</p>
                    </div>

                    <BookingForm />
                </div>
            </div>
        </main>
    );
}
