export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Bienvenido al Sistema de Reservas</h1>
      <p className="mb-8 text-lg">Gestiona tus citas de forma rápida y sencilla.</p>

      <div className="flex gap-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded">Login</button>
        <button className="px-6 py-2 bg-green-600 text-white rounded">Registro</button>
      </div>

      <section className="mt-12 p-6 border rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Solicitar Cita</h2>
        {/* Aquí integraremos el calendario más adelante */}
        <div className="h-32 bg-gray-100 flex items-center justify-center border-dashed border-2">
          [ Calendario - Placeholder ]
        </div>
      </section>
    </main>
  );
}