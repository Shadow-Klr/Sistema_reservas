export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Iniciar Sesión</h1>
      <form className="flex flex-col gap-4 w-80">
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <input type="password" placeholder="Contraseña" className="p-2 border rounded" />
        <button className="bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}