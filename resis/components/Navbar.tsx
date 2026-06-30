import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-6 bg-[#050505] border-b border-zinc-800">
      <Link href="/" className="font-bold text-xl uppercase tracking-widest text-white">El Ejemplo</Link>
      <nav className="flex gap-6 text-sm uppercase text-zinc-400">
        <Link href="/menu" className="hover:text-amber-600">Menú</Link>
        <Link href="/booking" className="hover:text-amber-600">Solicita Cita</Link>
        <Link href="/contact" className="hover:text-amber-600">Contáctanos</Link>
      </nav>
      <Link href="/login" className="text-amber-600 border border-amber-600 px-4 py-2 hover:bg-amber-600 hover:text-white transition">
        Login / Registro
      </Link>
    </header>
  );
}