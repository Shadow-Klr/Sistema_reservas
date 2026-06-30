import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-3xl font-bold text-center">Acceso</h1>
        <input type="email" placeholder="Email" className="w-full bg-zinc-900 p-3 border border-zinc-700" />
        <input type="password" placeholder="Contraseña" className="w-full bg-zinc-900 p-3 border border-zinc-700" />
        <Button className="w-full bg-amber-700 hover:bg-amber-800 rounded-none">Entrar</Button>
      </div>
    </div>
  );
}