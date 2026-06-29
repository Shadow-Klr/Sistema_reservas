import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-5xl font-bold mb-6">Bienvenido a mi Sistema</h1>
      <p className="text-xl mb-10">Gestiona tus citas de forma profesional.</p>
      
      <div className="flex gap-4">
        <Link href="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg">Login</Link>
        <Link href="/register" className="bg-green-600 text-white px-6 py-3 rounded-lg">Registro</Link>
        <Link href="/cites" className="bg-purple-600 text-white px-6 py-3 rounded-lg">Ver Calendario</Link>
      </div>
    </main>
  );
}