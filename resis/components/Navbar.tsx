"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-[#050505] border-b border-zinc-800">
      <Link href="/" className="font-bold text-xl uppercase tracking-widest">El Ejemplo</Link>
      <div className="flex gap-6 text-sm uppercase tracking-wider text-zinc-400">
        <Link href="/menu" className="hover:text-amber-600 transition">Menú</Link>
        <Link href="/booking" className="hover:text-amber-600 transition">Solicita Cita</Link>
        <Link href="/contact" className="hover:text-amber-600 transition">Contáctanos</Link>
      </div>
      <Button variant="outline" className="rounded-none border-amber-700 hover:bg-amber-700" asChild>
        <Link href="/login">Login / Registro</Link>
      </Button>
    </nav>
  );
}