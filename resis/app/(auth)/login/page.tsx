"use client";

import Link from "next/link";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.screenWrapper}>
      
      {/* Tarjeta del Formulario (Modelo 2) */}
      <div className={styles.cardContainer}>
        
        {/* Encabezado con la Marca */}
        <div style={{ textAlign: "center" }}>
          <h1 className={styles.titleLogo}>
            Sync<span>Space</span>
          </h1>
          <h2 className={styles.subtitle}>
            Iniciar Sesión
          </h2>
        </div>

        {/* Estructura del Formulario */}
        <form className={styles.formStructure} onSubmit={(e) => e.preventDefault()}>
          
          {/* Input: Correo Electrónico / Usuario */}
          <div className={styles.inputGroup}>
            <label className={styles.fieldLabel}>
              Correo Electrónico o Usuario
            </label>
            <input 
              type="email" 
              placeholder="correo@empresa.com" 
              className={styles.textInput}
              required
            />
          </div>

          {/* Input: Contraseña */}
          <div className={styles.inputGroup}>
            <label className={styles.fieldLabel}>
              Contraseña
            </label>
            <input 
              type="password" 
              placeholder="••••••••••••" 
              className={styles.textInput}
              required
            />
          </div>

          {/* Botón de Login Sólido */}
          <button type="submit" className={styles.submitButton}>
            Iniciar Sesión
          </button>
          
        </form>

        {/* Opción sutil para redirigir al Registro */}
        <div className={styles.registerRedirect}>
          ¿No tienes una cuenta? <Link href="/register">Regístrate</Link>
        </div>

      </div>
    </div>
  );
}