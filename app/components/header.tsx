'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    {/* Logo placeholder - replace with actual SVG/Image later */}
                    <div className="text-2xl font-serif text-[var(--secondary-dark)] font-bold tracking-tight">
                        Elaine Santos
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#sobre" className="text-sm font-medium hover:text-[var(--secondary)] transition-colors">
                        Sobre
                    </Link>
                    <Link href="#servicos" className="text-sm font-medium hover:text-[var(--secondary)] transition-colors">
                        Serviços
                    </Link>
                    <Link href="#depoimentos" className="text-sm font-medium hover:text-[var(--secondary)] transition-colors">
                        Depoimentos
                    </Link>
                    <Link href="#contato" className="text-sm font-medium hover:text-[var(--secondary)] transition-colors">
                        Contato
                    </Link>
                    <Link href="/agendar">
                        <Button variant="primary" size="sm" className="gap-2">
                            <Calendar className="w-4 h-4" />
                            Agendar
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-[var(--primary-dark)]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            <Link
                                href="#sobre"
                                className="text-base font-medium py-2 border-b border-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sobre
                            </Link>
                            <Link
                                href="#servicos"
                                className="text-base font-medium py-2 border-b border-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Serviços
                            </Link>
                            <Link
                                href="#depoimentos"
                                className="text-base font-medium py-2 border-b border-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Depoimentos
                            </Link>
                            <Link
                                href="#contato"
                                className="text-base font-medium py-2 border-b border-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contato
                            </Link>
                            <Button className="w-full gap-2 mt-2">
                                <Calendar className="w-4 h-4" />
                                Agendar Horário
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
