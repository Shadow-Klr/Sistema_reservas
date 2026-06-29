export default function RegistroPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Crear Cuenta</h1>
      <form className="flex flex-col gap-4 w-80">
        <input type="text" placeholder="Nombre completo" className="p-2 border rounded" />
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <input type="password" placeholder="Contraseña" className="p-2 border rounded" />
        <button className="bg-green-600 text-white p-2 rounded">Registrarse</button>
      </form>
    </div>
  );
}