import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { BeforeAfter } from "./components/before-after";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Seção de Transformações Reais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--primary)] mb-4">
              Resultados Reais
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Confira algumas das transformações incríveis realizadas em nossa clínica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/result-${num}.jpeg`}
                  alt={`Resultado ${num}`}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium tracking-wide">Transformação Realizada</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Testimonials />

      <div className="h-[100px]"></div> {/* Spacer */}
    </main>
  );
}
