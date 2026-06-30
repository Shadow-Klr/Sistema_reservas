"use client";

import { useState } from "react";

// Componente para el Icono de Sol (Modo Claro)
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V23M4.22 4.22l1.62 1.62m12.32 12.32l1.62 1.62M3 12h2.25m13.5 0H23m-2.22-7.78l-1.62 1.62M6.34 17.66l-1.62 1.62M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);

// Componente para el Icono de Luna (Modo Oscuro)
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

// Componente para el Icono de Candado (Input Contraseña)
const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

// Componente para el Icono de Usuario (Input Email)
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

export default function LoginPage() {
  // Estado para el tema, empezando en modo oscuro como la imagen
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`flex min-h-screen items-center justify-center p-6 transition-colors duration-300 selection:bg-blue-500/30 ${
      darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
    }`}>
      
      {/* Fondo decorativo sutil (efecto aurora, solo visible en modo oscuro) */}
      {darkMode && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
      )}

      {/* Botón flotante para cambiar de modo */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        type="button"
        className={`absolute top-6 right-6 flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 shadow-lg hover:scale-105 active:scale-95 ${
          darkMode 
            ? "bg-slate-900 border-slate-800 text-yellow-400 hover:bg-slate-800 shadow-slate-950/30" 
            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-slate-200/30"
        }`}
      >
        {darkMode ? <SunIcon /> : <MoonIcon />}
        {darkMode ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
      </button>

      {/* Tarjeta de Login Principal (Efecto Glassmorphism) */}
      <div className={`relative w-full max-w-lg rounded-3xl border p-10 shadow-2xl transition-all duration-300 md:p-14 ${
        darkMode 
          ? "border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-slate-950/50" 
          : "border-slate-200 bg-white shadow-slate-200/50"
      }`}>
        
        {/* Cabecera y Branding */}
        <div className="mb-12 text-center">
          <span className={`text-sm font-semibold uppercase tracking-widest ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
            Plataforma Corporativa
          </span>
          <h1 className={`mt-3 text-5xl font-extrabold tracking-tighter ${darkMode ? "text-white" : "text-slate-950"}`}>
            Sync<span className="text-blue-500">Space</span>
          </h1>
          <p className={`mt-4 text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Introduce tus credenciales para acceder a tu espacio de trabajo empresarial.
          </p>
        </div>

        {/* Formulario */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Input Email */}
          <div className="relative">
            <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              Correo Electrónico
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                <UserIcon />
              </div>
              <input 
                type="email" 
                placeholder="nombre@empresa.com" 
                className={`w-full rounded-xl border p-4 pl-12 text-base outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
                  darkMode 
                    ? "border-slate-700 bg-slate-950 text-white placeholder-slate-600" 
                    : "border-slate-300 bg-white text-slate-900 placeholder-slate-400"
                }`}
                required
              />
            </div>
          </div>

          {/* Input Contraseña */}
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <label className={`block text-sm font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                Contraseña
              </label>
              <a href="#" className={`text-sm transition-colors hover:underline ${darkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500"}`}>
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                <LockIcon />
              </div>
              <input 
                type="password" 
                placeholder="••••••••••••" 
                className={`w-full rounded-xl border p-4 pl-12 text-base outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
                  darkMode 
                    ? "border-slate-700 bg-slate-950 text-white placeholder-slate-600" 
                    : "border-slate-300 bg-white text-slate-900 placeholder-slate-400"
                }`}
                required
              />
            </div>
          </div>

          {/* Botón Iniciar Sesión (Estilo profesional con degradado) */}
          <div className="pt-6">
            <button 
              type="submit" 
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-lg font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:from-blue-500 hover:to-blue-400 hover:shadow-blue-500/30 active:scale-[0.99]"
            >
              Iniciar Sesión de Forma Segura
            </button>
          </div>
        </form>

        {/* Pie del formulario */}
        <div className={`mt-10 border-t pt-8 text-center text-sm ${darkMode ? "border-slate-800 text-slate-500" : "border-slate-100 text-slate-600"}`}>
          ¿Eres nuevo en la plataforma?{" "}
          <a href="/register" className={`font-semibold hover:underline transition-colors ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
            Crear una cuenta empresarial
          </a>
        </div>
      </div>
    </div>
  );
}