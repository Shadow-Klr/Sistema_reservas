"use client";
import Navbar from "../../components/Navbar";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  return (
    <main className="bg-[#050505] text-zinc-100 min-h-screen">
      <Navbar />
      <section className="relative h-64 flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2500" className="absolute inset-0 w-full h-full object-cover brightness-50" />
        <h1 className="relative z-10 text-4xl font-bold uppercase tracking-widest">Reserva tu mesa</h1>
      </section>
      <div className="max-w-md mx-auto py-12 px-6">
        <form className="space-y-6">
          <input type="date" className="w-full bg-zinc-900 p-3 border border-zinc-700" />
          <input type="number" placeholder="Número de comensales" className="w-full bg-zinc-900 p-3 border border-zinc-700" />
          <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white rounded-none">Confirmar Reserva</Button>
        </form>
      </div>
    </main>
  );
}