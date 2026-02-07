'use client';

import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section id="sobre" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--background)] pt-20">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--secondary-light)]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--primary-light)]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left space-y-6"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--secondary-light)]/30 text-[var(--secondary-dark)] text-sm font-medium tracking-wide">
                        Estética Avançada & Bem-estar
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-[var(--primary-dark)]">
                        Realce sua beleza <br />
                        <span className="text-[var(--secondary)] italic font-light">Natural</span>
                    </h1>
                    <p className="text-lg text-[var(--muted-foreground)] max-w-lg leading-relaxed">
                        Tratamentos personalizados que unem tecnologia e cuidado para revelar a sua melhor versão. Agende uma avaliação e descubra o poder da estética avançada.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link href="/agendar">
                            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-[var(--primary)]/20">
                                Agendar Consulta
                            </Button>
                        </Link>
                        <Link href="#servicos">
                            <Button variant="outline" size="lg" className="rounded-full px-8 gap-2 group">
                                Conhecer Serviços
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Placeholder for Hero Image - Replace with actual image later */}
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 border-8 border-white/50">
                        {/* Use a nice placeholder gradient for now */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-light)] to-[var(--secondary-light)] opacity-30"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-[var(--primary-dark)] opacity-40">
                            <span className="text-lg">Imagem da Dra. Elaine / Clínica</span>
                        </div>
                    </div>

                    {/* Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs"
                    >
                        <div className="w-12 h-12 rounded-full bg-[var(--secondary-light)]/30 flex items-center justify-center text-[var(--secondary-dark)]">
                            <span className="text-xl">✨</span>
                        </div>
                        <div>
                            <p className="font-serif font-bold text-lg text-[var(--primary-dark)]">Excelência</p>
                            <p className="text-sm text-gray-500">Profissionais qualificados</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
