export default function CitasPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Solicitar Cita</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl mb-4">Selecciona un día en el calendario</h2>
          {/* Aquí irá el componente del calendario */}
          <div className="h-48 bg-gray-100 flex items-center justify-center border-2 border-dashed">
            Calendario visual
          </div>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl mb-4">Detalles de la reserva</h2>
          <textarea placeholder="Motivo de la cita..." className="w-full p-2 border rounded h-32"></textarea>
          <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded">Confirmar Reserva</button>
        </div>
      </div>
    </div>
  );
}