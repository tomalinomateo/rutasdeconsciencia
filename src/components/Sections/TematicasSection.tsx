"use client";

import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";
import Spiral from "../Spiral";

export default function TematicasSection() {
  const { currentStyle } = useStyle();
  const { fontClass } = useFontClass();

  return (
    <section className="py-5 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-8">
        <h2
          className={`text-4xl font-bold text-center mb-4 ${currentStyle.colors.primary}`}
          style={fontClass.title}
        >
          Mapa del recorrido
        </h2>
        <p
          className="text-white text-center italic text-lg mb-8"
          style={fontClass.text}
        >
          21 puertas hacia tu universo interno
        </p>
        <Spiral />
      </div>
    </section>
  );
}
