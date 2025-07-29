"use client";

import { BookOpen, Sparkles } from "lucide-react";
import { defaultStyles } from "@/lib/defaultStyles";


export default function StatsSection() {
  
  

  // Función para obtener el color de los iconos
  const getIconColor = () => {
    return defaultStyles.colors.secondary;
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
              style={defaultStyles.title}
            >
              <p>21 temáticas </p>
              <p>esenciales</p>
            </h3>
            <p className="text-white text-lg" style={defaultStyles.text}>
              Puertas hacia una nueva comprensión
            </p>
            <p className="text-white text-lg" style={defaultStyles.text}>
              de tu ser y tu realidad.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className={`h-12 w-12 ${getIconColor()}`} />
            </div>
            <h3
              className="text-3xl font-bold text-white mb-2 whitespace-nowrap"
              style={defaultStyles.title}
            >
              <p>21 activaciones </p>
              <p>meditativas</p>
            </h3>
            <p className="text-white text-lg" style={defaultStyles.text}>
              Para reprogramar tu mundo interno
            </p>
            <p className="text-white text-lg" style={defaultStyles.text}>
              y elevar tu frecuencia.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Sparkles className={`h-12 w-12 ${getIconColor()}`} />
            </div>
            <h3
              className="text-3xl font-bold text-white mb-2"
              style={defaultStyles.title}
            >
              Guía práctica de integración
            </h3>
            <p className="text-white text-lg" style={defaultStyles.text}>
              Ejercicios conscientes para manifestar
            </p>
            <p className="text-white text-lg" style={defaultStyles.text}>
              el cambio en tu vida cotidiana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
