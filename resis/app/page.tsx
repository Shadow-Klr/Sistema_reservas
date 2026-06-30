"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#050505] text-zinc-100 min-h-screen">
      
      {/* Navbar Minimalista */}
      <nav className="flex justify-between items-center p-8 border-b border-zinc-800">
        <h2 className="font-bold text-xl uppercase tracking-widest">El Ejemplo</h2>
        <div className="hidden md:flex gap-8 text-sm uppercase">
          <Link href="#restaurante" className="hover:text-amber-600">El Restaurante</Link>
          <Link href="/menu" className="hover:text-amber-600">La Carta</Link>
          <Link href="/login" className="hover:text-amber-600">Acceso / Registro</Link>
          <Button variant="outline" className="rounded-none border-amber-700 hover:bg-amber-700">Reservas</Button>
        </div>
      </nav>

      {/* Hero Section - Estilo image_572b7b.jpg */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2500" 
          alt="Chef cocinando con fuego"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Cocina tradicional</h1>
          <p className="text-xl md:text-2xl text-zinc-300">con ese toque de vanguardia que nos hace únicos</p>
        </div>
      </section>

      {/* Información del Restaurante */}
      <section id="restaurante" className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 border-b border-amber-700 pb-4 inline-block">El restaurante</h2>
        <div className="text-zinc-400 space-y-6 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
          </p>
        </div>
      </section>

    </main>
  );
}