import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#050505] text-zinc-100 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center"> 
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2500" 
          alt="Cocina"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Cocina tradicional</h1>
          <p className="text-xl text-zinc-300">con ese toque de vanguardia que nos hace únicos</p>
        </div>
      </section>

      {/* Info */}
      <section className="py-24 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b border-amber-700 pb-4 inline-block">El restaurante</h2>
        <p className="text-zinc-400 leading-relaxed">
          Bienvenido a El Ejemplo. Nuestro compromiso es ofrecer una experiencia culinaria inolvidable.
        </p>
      </section>
    </main>
  );
}