"use client";

import { Calendar, BookOpen, Sparkles } from "lucide-react";
import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";

export default function StatsSection() {
  const { currentStyle } = useStyle();
  const { fontClass } = useFontClass();

  // Función para obtener el color de los iconos
  const getIconColor = () => {
    if (currentStyle.id === "silver-forest") {
      return "text-emerald-400";
    }
    return currentStyle.colors.secondary;
  };

  return (
    <section className="py-16 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-center">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Sparkles className={`h-12 w-12 ${getIconColor()}`} />
            </div>
            <h3
              className="text-3xl font-bold text-white mb-2"
              style={fontClass.title}
            >
              21 temáticas
            </h3>
            <p className="text-white text-lg" style={fontClass.text}>
              que abren puertas hacia una nueva comprensión de tu realidad
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className={`h-12 w-12 ${getIconColor()}`} />
            </div>
            <h3
              className="text-3xl font-bold text-white mb-2 whitespace-nowrap"
              style={fontClass.title}
            >
              21 meditaciones
            </h3>
            <p className="text-white text-lg" style={fontClass.text}>
              para transformar tu mundo interno.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Sparkles className={`h-12 w-12 ${getIconColor()}`} />
            </div>
            <h3
              className="text-3xl font-bold text-white mb-2"
              style={fontClass.title}
            >
              Guía práctica de ejercicios
            </h3>
            <p className="text-white text-lg" style={fontClass.text}>
              para manifestar ese cambio interno en tu realidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
