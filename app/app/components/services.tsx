'use client';

import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const services = [
    {
        title: "Harmonização Facial",
        description: "Realce seus traços naturais com procedimentos minimamente invasivos.",
        price: "A partir de R$ 1.200",
        features: ["Preenchimento", "Botox", "Fios de Sustentação"]
    },
    {
        title: "Limpeza de Pele Profunda",
        description: "Renove sua pele removendo impurezas e células mortas.",
        price: "R$ 180,00",
        features: ["Extração manual", "Peeling de diamante", "Máscara LED"]
    },
    {
        title: "Microagulhamento",
        description: "Estimule o colágeno para tratar cicatrizes e rejuvenescer.",
        price: "R$ 350,00",
        features: ["Drug delivery", "Anestésico tópico", "Sérum exclusivo"]
    },
    {
        title: "Lipo Enzimática",
        description: "Reduza medidas de forma eficaz com enzimas potentes.",
        price: "R$ 250,00 / sessão",
        features: ["Abdômen", "Papada", "Braços"]
    }
];

export function Services() {
    return (
        <section id="servicos" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <span className="text-[var(--secondary-dark)] font-medium tracking-wide text-sm uppercase">
                        Nossos Tratamentos
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--primary-dark)]">
                        Procedimentos Exclusivos
                    </h2>
                    <p className="text-[var(--muted-foreground)]">
                        Descubra uma curadoria de tratamentos pensados para sua autoestima e bem-estar.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow border-none bg-[var(--muted)]/30 hover:bg-white date-card group">
                                <CardHeader>
                                    <CardTitle className="text-xl text-[var(--primary-dark)] mb-2">
                                        {service.title}
                                    </CardTitle>
                                    <p className="text-sm text-[var(--muted-foreground)] mb-4">
                                        {service.description}
                                    </p>
                                    <p className="text-lg font-bold text-[var(--secondary-dark)]">
                                        {service.price}
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-[var(--foreground)]">
                                                <Check className="w-4 h-4 text-[var(--secondary)] mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full bg-white text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                                        Agendar
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="link" className="text-[var(--primary-dark)] hover:text-[var(--secondary)]">
                        Ver todos os serviços <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
