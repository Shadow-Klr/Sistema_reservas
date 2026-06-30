export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4c5a0] p-10">
      <h1 className="text-4xl font-serif text-center mb-16">Carta Completa</h1>
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Aquí puedes mapear tu menú real */}
        <div className="flex justify-between border-b border-amber-900/30 pb-4">
          <span>Solomillo a la pimienta</span>
          <span className="text-amber-700">22.00€</span>
        </div>
        {/* Repetir estructura... */}
      </div>
    </div>
  );
}