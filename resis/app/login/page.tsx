export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100 selection:bg-blue-500/30">
      {/* Fondo decorativo sutil (efecto de brillo abstracto detrás del formulario) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-xl md:p-10">
        
        {/* Cabecera / Branding */}
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Plataforma Corporativa
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
            Sync<span className="text-blue-500">Space</span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Introduce tus credenciales para acceder a tu espacio de trabajo.
          </p>
        </div>

        {/* Formulario */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-slate-400 mb-1.5">
              Correo Electrónico
            </label>
            <input 
              type="email" 
              placeholder="nombre@empresa.com" 
              className="w-full rounded-lg border border-slate-800 bg-slate-950 p-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                Contraseña
              </label>
              <a href="#" className="text-xs text-blue-400 hover:underline hover:text-blue-300 transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full rounded-lg border border-slate-800 bg-slate-950 p-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              required
            />
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full rounded-lg bg-blue-600 p-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-[0.99]"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        {/* Pie del formulario opcional */}
        <div className="mt-8 text-center text-xs text-slate-500">
          ¿No tienes una cuenta?{" "}
          <a href="/register" className="font-medium text-slate-300 hover:underline transition-colors">
            Contacta con soporte
          </a>
        </div>
      </div>
    </div>
  );
}