"use client";

import { defaultStyles } from "@/lib/defaultStyles";

export default function ForYouSection() {
  return (
    <section id="para-ti" className="py-20 relative z-10 overflow-hidden">
      <div
        className={`absolute top-10 left-10 w-32 h-32 bg-yellow-200/10 rounded-full blur-2xl opacity-40 pointer-events-none`}
      ></div>
      <div
        className={`absolute bottom-10 right-10 w-24 h-24 bg-amber-100/10 rounded-full blur-xl opacity-50 pointer-events-none`}
      ></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold ${defaultStyles.colors.primary} mb-4 font-the-seasons`}
          >
            ¿Es para ti?
          </h2>
          <p className="text-primary text-lg mb-8 font-garet">
            Este programa está diseñado para personas que buscan una
            transformación profunda y consciente en su vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3
              className={`text-2xl font-bold ${defaultStyles.colors.primary} mb-4 font-the-seasons`}
            >
              Ideal para ti si:
            </h3>
            <ul
              className={`text-primary text-base leading-relaxed list-disc ml-6 marker:${defaultStyles.colors.accent} font-garet`}
            >
              <li>Buscás una práctica espiritual profunda y transformadora</li>
              <li>Querés reprogramar patrones limitantes en tu mente</li>
              <li>Anhelás conectar con tu propósito más profundo</li>
              <li>Necesitás herramientas prácticas para el día a día</li>
              <li>Estás listo para un cambio real en tu vida</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3
              className={`text-2xl font-bold ${defaultStyles.colors.primary} mb-4 font-the-seasons`}
            >
              Lo que obtendrás:
            </h3>
            <p className="text-primary mb-6 text-lg font-garet">
              Una experiencia de 21 días que te llevará a través de un viaje de
              autodescubrimiento y transformación, con herramientas prácticas
              que podrás aplicar inmediatamente en tu vida cotidiana.
            </p>
            <ul
              className={`text-primary text-base leading-relaxed list-disc ml-6 marker:${defaultStyles.colors.accent} font-garet`}
            >
              <li>21 meditaciones guiadas profundas</li>
              <li>Ejercicios prácticos para cada día</li>
              <li>Herramientas de integración diaria</li>
              <li>Transformación real y duradera</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
