"use client";

import { useRouter } from "next/navigation";
import PurchaseButton from "./PurchaseButton";

export default function StartButton() {
  const router = useRouter();

  const handleStartJourney = () => {
    router.push("/course");
  };

  return (
    <div className="mt-8 relative z-0">
      {/* Efecto de brillo pulsante */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="w-48 h-16 rounded-full bg-gradient-to-br from-yellow-300 via-pink-300 to-transparent blur-3xl opacity-80 animate-pulse"></div>
      </div>

      <button
        onClick={handleStartJourney}
        className="text-sm px-12 py-3 shadow-lg hover:shadow-amber-200/50 relative z-20 rounded-lg font-medium font-garet btn-primary"
      >
        Comenzar el viaje
      </button>
    </div>
  );
}
