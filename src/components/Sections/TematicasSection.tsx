"use client";

import { defaultStyles } from "@/lib/defaultStyles";

import Spiral from "../Spiral";

export default function TematicasSection() {
  
  

  return (
    <section className="py-5 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-8">
        <h2
          className={`text-4xl font-bold text-center mb-4 ${defaultStyles.colors.primary}`}
          style={defaultStyles.title}
        >
          Mapa del recorrido
        </h2>
        <p
          className="text-white text-center italic text-lg mb-8"
          style={defaultStyles.text}
        >
          21 puertas hacia tu universo interno
        </p>
        <Spiral />
      </div>
    </section>
  );
}
