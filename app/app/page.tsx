import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <div className="h-[100px]"></div> {/* Spacer */}
    </main>
  );
}
