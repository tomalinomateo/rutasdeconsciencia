"use client";

import { defaultStyles } from "@/lib/defaultStyles";

export default function TematicasSection() {
  return (
    <section id="tematicas" className="py-20 relative z-10 overflow-hidden">
      <div
        className={`absolute top-10 left-10 w-32 h-32 bg-yellow-200/10 rounded-full blur-2xl opacity-40 pointer-events-none`}
      ></div>
      <div
        className={`absolute bottom-10 right-10 w-24 h-24 bg-amber-100/10 rounded-full blur-xl opacity-50 pointer-events-none`}
      ></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold text-center mb-4 ${defaultStyles.colors.primary} font-the-seasons`}
          >
            Temáticas del Programa
          </h2>
          <p className="text-primary text-center italic text-lg mb-8 font-garet">
            Explora las dimensiones más profundas de tu ser a través de 21 días
            de práctica consciente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
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
          ].map((tematica, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-700/50 transition-colors duration-300"
            >
              <h3 className="text-primary font-garet font-medium">
                Día {index + 1}
              </h3>
              <p className="text-primary font-garet mt-2">{tematica}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
