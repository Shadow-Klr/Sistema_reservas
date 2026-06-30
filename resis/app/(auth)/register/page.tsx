"use client";

import Link from "next/link";
import styles from "./register.module.css";

export default function RegistroPage() {
  return (
    <div className={styles.screenWrapper}>
      
      {/* Tarjeta del Formulario (Modelo 2 Desglosado) */}
      <div className={styles.cardContainer}>
        
        {/* Encabezado con la Marca */}
        <div style={{ textAlign: "center" }}>
          <h1 className={styles.titleLogo}>
            Sync<span>Space</span>
          </h1>
          <h2 className={styles.subtitle}>
            Crear Cuenta
          </h2>
        </div>

        {/* Estructura del Formulario */}
        <form className={styles.formStructure} onSubmit={(e) => e.preventDefault()}>
          
          {/* Fila de Nombre y Apellidos (Lado a Lado) */}
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label className={styles.fieldLabel}>Nombre</label>
              <input 
                type="text" 
                placeholder="Juan" 
                className={styles.textInput}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.fieldLabel}>Apellidos</label>
              <input 
                type="text" 
                placeholder="Pérez Gómez" 
                className={styles.textInput}
                required
              />
            </div>
          </div>

          {/* Input: Correo Electrónico */}
          <div className={styles.inputGroup}>
            <label className={styles.fieldLabel}>
              Correo Electrónico
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

          {/* Input: Confirmar Contraseña */}
          <div className={styles.inputGroup}>
            <label className={styles.fieldLabel}>
              Confirmar Contraseña
            </label>
            <input 
              type="password" 
              placeholder="••••••••••••" 
              className={styles.textInput}
              required
            />
          </div>

          {/* Botón de Registro Sólido */}
          <button type="submit" className={styles.submitButton}>
            Registrarse
          </button>
          
        </form>

        {/* Opción sutil para redirigir al Login */}
        <div className={styles.loginRedirect}>
          ¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link>
        </div>

      </div>
    </div>
  );
}