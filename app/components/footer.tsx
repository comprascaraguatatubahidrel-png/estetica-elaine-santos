'use client';

import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
    return (
        <footer id="contato" className="bg-[var(--primary-dark)] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand & Description */}
                    <div>
                        <h3 className="text-2xl font-serif text-[var(--secondary)] font-bold mb-4">
                            Elaine Santos
                        </h3>
                        <p className="text-gray-300 leading-relaxed max-w-sm">
                            Realce sua beleza natural com tratamentos personalizados e tecnologia de ponta.
                            Seu bem-estar é nossa prioridade.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-[var(--secondary)] inline-block pb-2">
                            Contato
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-[var(--secondary)] mr-3 mt-1 shrink-0" />
                                <span className="text-gray-300">
                                    Rua Exemplo, 123 - Centro<br />
                                    Caraguatatuba - SP
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-[var(--secondary)] mr-3 shrink-0" />
                                <span className="text-gray-300">(12) 99715-7991</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-[var(--secondary)] mr-3 shrink-0" />
                                <span className="text-gray-300">contato@elainesantos.com.br</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours & Social */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-[var(--secondary)] inline-block pb-2">
                            Horário de Atendimento
                        </h4>
                        <ul className="space-y-2 text-gray-300 mb-8">
                            <li>Segunda a Sexta: 09h às 18h</li>
                            <li>Sábado: 09h às 13h</li>
                        </ul>

                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--secondary)] hover:text-[var(--primary-dark)] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--secondary)] hover:text-[var(--primary-dark)] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Elaine Santos Estética Avançada. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
