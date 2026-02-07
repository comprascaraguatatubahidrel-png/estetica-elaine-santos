'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Ana Paula Silva",
        procedure: "Harmonização Facial",
        text: "A Dra. Elaine é maravilhosa! O resultado ficou super natural, exatamente como eu queria. Me sinto muito mais confiante!",
        rating: 5
    },
    {
        id: 2,
        name: "Mariana Costa",
        procedure: "Botox Preventivo",
        text: "Espaço lindo e atendimento impecável. A mão da Elaine é super leve, não senti nada. Recomendo de olhos fechados!",
        rating: 5
    },
    {
        id: 3,
        name: "Carla Ferreira",
        procedure: "Limpeza de Pele Profunda",
        text: "Melhor limpeza de pele que já fiz. Sai de lá com a pele renovada e brilhante. Os produtos são de primeira linha.",
        rating: 5
    }
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 bg-[var(--secondary)]/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-[var(--primary)] mb-4">
                        O Que Dizem Nossas Clientes
                    </h2>
                    <div className="w-24 h-1 bg-[var(--secondary)] mx-auto rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-rose-100">
                    <Quote className="absolute top-8 left-8 text-rose-200 w-12 h-12 -z-0 opacity-50" />

                    <div className="relative h-[250px] md:h-[200px] flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-center z-10 w-full"
                            >
                                <div className="flex justify-center mb-4 space-x-1">
                                    {[...Array(testimonials[current].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                                    "{testimonials[current].text}"
                                </p>

                                <div>
                                    <h4 className="font-bold text-[var(--primary)] text-lg">
                                        {testimonials[current].name}
                                    </h4>
                                    <p className="text-sm text-gray-500 uppercase tracking-wide">
                                        {testimonials[current].procedure}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
                                        ? 'bg-[var(--secondary)] w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Ver depoimento ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
