import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-20 py-10">
      {/* 1. Hero Section: Impacto visual */}
      <section className="text-center space-y-6 px-4">
        <h1 className="text-6xl font-extrabold tracking-tight">
          Tu tiempo, <span className="text-primary">optimizado</span>.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          SyncSpace es la plataforma líder para gestionar reservas de espacios. 
          Desde salas de reuniones hasta pistas deportivas, todo bajo control.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild><Link href="/booking">Agendar Ahora</Link></Button>
          <Button size="lg" variant="outline">Ver Catálogo</Button>
        </div>
      </section>

      {/* 2. Catálogo / Features: La "chicha" */}
      <section className="px-8 grid md:grid-cols-3 gap-8">
        {[
          { title: "Gestión en Tiempo Real", desc: "Evita solapamientos con nuestro motor de disponibilidad." },
          { title: "Notificaciones Pro", desc: "Confirmaciones automáticas vía email 'no-reply'." },
          { title: "Asistencia IA", desc: "Pregunta a nuestro asistente por huecos disponibles." }
        ].map((feature, i) => (
          <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* 3. CTA Final: Conversión */}
      <section className="bg-primary text-primary-foreground py-16 text-center rounded-3xl mx-4">
        <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
        <p className="mb-8">Únete a cientos de usuarios que ya gestionan sus espacios con SyncSpace.</p>
        <Button variant="secondary" size="lg" asChild>
          <Link href="/register">Crear Cuenta Gratuita</Link>
        </Button>
      </section>
    </div>
  );
}