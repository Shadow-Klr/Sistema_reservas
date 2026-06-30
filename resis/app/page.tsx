import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center p-6">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2500" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          alt="Cocina"
        />
        <div className="relative z-10 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white">Cocina Tradicional</h1>
          <p className="text-xl text-zinc-300">Con ese toque de vanguardia que nos hace únicos</p>
        </div>
      </section>

      {/* Sección Información */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-zinc-300 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">El Restaurante</h2>
        <p className="leading-relaxed">
          Bienvenido a El Ejemplo. Nuestro compromiso es ofrecer una experiencia culinaria inolvidable...
        </p>
      </section>
    </main>
  );
}