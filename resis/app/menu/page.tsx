"use client";
import Navbar from "../../components/Navbar";

export default function MenuPage() {
  const dishes = [
    { name: "Consomé al Jerez", price: "14€", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600" },
    { name: "Solomillo Wellington", price: "32€", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=600" },
    { name: "Lubina Salvaje", price: "28€", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600" }
  ];

  return (
    <main className="bg-[#050505] text-zinc-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-12 text-center uppercase tracking-widest">Nuestra Carta</h1>
        <div className="grid gap-8">
          {dishes.map((dish, i) => (
            <div key={i} className="flex items-center gap-6 border-b border-zinc-800 pb-6">
              <img src={dish.img} className="w-24 h-24 object-cover rounded" alt={dish.name} />
              <div className="flex-1">
                <h3 className="text-xl font-bold">{dish.name}</h3>
              </div>
              <span className="text-amber-600 font-bold">{dish.price}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}