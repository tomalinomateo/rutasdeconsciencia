"use client";

import { defaultStyles } from "@/lib/defaultStyles";

export default function TransformationSection() {
  return (
    <section
      id="transformacion"
      className="py-20 relative z-10 overflow-hidden"
    >
      <div
        className={`absolute top-10 right-10 w-32 h-32 bg-yellow-200/10 rounded-full blur-2xl opacity-40 pointer-events-none`}
      ></div>
      <div
        className={`absolute bottom-10 left-10 w-24 h-24 bg-amber-100/10 rounded-full blur-xl opacity-50 pointer-events-none`}
      ></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${defaultStyles.colors.secondary} mb-8 font-the-seasons`}
          >
            Tu Transformación
          </h2>
          <p className="text-primary text-lg mb-8 font-garet">
            Descubre cómo este programa puede transformar tu vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-garet">
              Antes del Programa
            </h3>
            <ul className="space-y-3 text-primary font-garet">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Sensación de desconexión con tu propósito
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Patrones limitantes que se repiten
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Estrés y ansiedad en el día a día
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Dificultad para meditar por tu cuenta
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-garet">
              Después del Programa
            </h3>
            <ul className="space-y-3 text-primary font-garet">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Clara conexión con tu propósito de vida
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Patrones transformados y liberados
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Paz interior y calma mental
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Práctica de meditación establecida
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
