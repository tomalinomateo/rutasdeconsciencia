"use client";

import { defaultStyles } from "@/lib/defaultStyles";

export default function AboutCourseSection() {
  // Función para obtener el color del título principal
  const getTitleColor = () => {
    return defaultStyles.colors.primary;
  };

  return (
    <section id="curso" className="py-20 relative z-10 overflow-hidden">
      <div
        className={`absolute top-10 right-10 w-32 h-32 bg-gradient-radial ${defaultStyles.colors.primary}/10 to-transparent rounded-full blur-2xl opacity-40 pointer-events-none`}
      ></div>
      <div
        className={`absolute bottom-10 left-10 w-24 h-24 bg-gradient-radial ${defaultStyles.colors.accent}/10 to-transparent rounded-full blur-xl opacity-50 pointer-events-none`}
      ></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-3xl lg:text-4xl font-bold ${getTitleColor()} mb-4 flex flex-wrap items-end justify-center whitespace-nowrap`}
            style={defaultStyles.title}
          >
            <span>¿Qué es Alquimia Raiz </span>
            <span>?</span>
          </h2>
          <div
            className="space-y-8 text-white text-lg leading-relaxed"
            style={defaultStyles.text}
          >
            <p className="text-xl font-bold mb-8">
              Una experiencia de autoexploración que busca reprogramar tu
              conciencia desde el encuentro sagrado, y que manifiestes ese nuevo
              movimiento en tu realidad cotidiana.
            </p>
            <p className="text-lg mb-8">
              Cada día, vas a explorar un aspecto esencial de tu ser, como el
              propósito, la abundancia, los vínculos, la energía sexual y
              creativa, el miedo o el amor incondicional, abriendo puertas hacia
              nuevas dimensiones de tu conciencia.
            </p>
            <p className="text-lg mb-8">
              Las meditaciones te invitaran a explorar la información, memorias
              y emociones ya instaladas en relacion a esa tematica, para después
              abrazar una perspectiva más sabia, amorosa y expansiva, que
              siembra una nueva vibracion en tu consciencia.
            </p>
            <p className="text-lg mb-8">
              Luego, con ejercicios creativos y prácticos, encarnás e integrás
              esa nueva información en tu cuerpo, tu palabra y tu vida
              cotidiana, facilitando que el aprendizaje se vuelva tangible.
            </p>
            <p className="text-lg">
              Para que el cambio interior pueda reflejarse en tu realidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
