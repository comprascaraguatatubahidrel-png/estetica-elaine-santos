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
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confira algumas das transformações incríveis realizadas em nossa clínica.
              Deslize para ver o antes e depois.
            </p>
          </div>

          <BeforeAfter
            beforeImage="https://images.unsplash.com/photo-1512290923902-8a9a21635c97?q=80&w=1000&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop"
            beforeLabel="Antes"
            afterLabel="Depois"
          />
          <p className="text-center text-sm text-gray-400 mt-4 italic">
            *Fotos meramente ilustrativas para demonstração do layout.
          </p>
        </div>
      </section>

      <Services />
      <Testimonials />

      <div className="h-[100px]"></div> {/* Spacer */}
    </main>
  );
}
