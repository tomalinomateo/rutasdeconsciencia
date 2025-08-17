"use client";

import React, { useState, useEffect } from "react";
// import { defaultStyles } from "@/lib/defaultStyles";

export default function Spiral() {
  const [currentDay, setCurrentDay] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const topics = [
    "Propósito y Misión",
    "Abundancia y Prosperidad",
    "Vínculos y Relaciones",
    "Energía Sexual y Creativa",
    "Miedo y Transformación",
    "Amor Incondicional",
    "Gratitud y Aceptación",
    "Paz Interior",
    "Sabiduría Intuitiva",
    "Liberación Emocional",
    "Conexión Espiritual",
    "Manifestación Consciente",
    "Autenticidad",
    "Perdón y Sanación",
    "Presencia y Mindfulness",
    "Empoderamiento",
    "Comunión con la Naturaleza",
    "Expansión de Conciencia",
    "Integración Cuerpo-Mente",
    "Transformación Personal",
    "Iluminación Cotidiana",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDay((prev) => {
        if (prev >= 21) {
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), 1000);
          return 1;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSpiralPosition = (day: number) => {
    const angle = (day - 1) * (360 / 21);
    const radius = 120 + (day - 1) * 8;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y };
  };

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Centro del espiral */}
      <div className="absolute w-8 h-8 bg-[#fff3db] rounded-full flex items-center justify-center z-20 shadow-lg">
        <span className="text-black text-xs font-bold">21</span>
      </div>

      {/* Días del espiral */}
      {topics.map((topic, index) => {
        const day = index + 1;
        const position = getSpiralPosition(day);
        const isActive = day === currentDay;
        const isPast = day < currentDay;
        const isFuture = day > currentDay;

        return (
          <div
            key={day}
            className={`absolute w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${
              isActive
                ? "bg-[#f59e0b] text-white scale-125 shadow-lg"
                : isPast
                ? "bg-[#fff3db] text-black scale-100 shadow-md"
                : "bg-gray-600 text-white scale-75 opacity-50"
            }`}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
            onClick={() => setCurrentDay(day)}
          >
            <span className="text-xs font-bold">{day}</span>
          </div>
        );
      })}

      {/* Título del día actual */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-primary text-center">
          <h3 className="text-lg font-the-seasons text-[#fff3db] mb-2">
            Día {currentDay}
          </h3>
          <p className="text-sm font-garet text-[#fff3db] opacity-90">
            {topics[currentDay - 1]}
          </p>
        </div>
      </div>

      {/* Animación de pulso para el día activo */}
      {isAnimating && (
        <div className="absolute inset-0 bg-[#f59e0b]/20 rounded-full animate-ping"></div>
      )}
    </div>
  );
}
