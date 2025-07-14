"use client";

import { motion } from "framer-motion";
import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";

export default function AboutCourseSection() {
  const { currentStyle } = useStyle();
  const { fontClass } = useFontClass();

  // Función para obtener el color del título principal
  const getTitleColor = () => {
    if (currentStyle.id === "silver-forest") {
      return "text-emerald-400";
    }
    return currentStyle.colors.primary;
  };

  return (
    <section id="curso" className="py-20 relative z-10 overflow-hidden">
      <div
        className={`absolute top-10 right-10 w-32 h-32 bg-gradient-radial ${currentStyle.colors.primary}/10 to-transparent rounded-full blur-2xl opacity-40 pointer-events-none`}
      ></div>
      <div
        className={`absolute bottom-10 left-10 w-24 h-24 bg-gradient-radial ${currentStyle.colors.accent}/10 to-transparent rounded-full blur-xl opacity-50 pointer-events-none`}
      ></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold ${getTitleColor()} mb-4`}
            style={fontClass.title}
          >
            ¿Qué es Alquimia Raiz?
          </h2>
          <div
            className="space-y-4 text-white text-lg leading-relaxed"
            style={fontClass.text}
          >
            <p className="text-lg">
              Un proceso de 21 días de autoexploración y reprogramación interna
              para reconectar con tu esencia, resignificar tu historia y habitar
              tu vida desde una nueva vibración.
            </p>
            <p className="text-lg">
              Cada día, vas a transitar un aspecto esencial del ser, como el
              propósito, la abundancia, los vínculos, la energía sexual y
              creativa, el miedo o el amor incondicional, abriendo puertas hacia
              nuevas dimensiones de tu conciencia.
            </p>
            <p className="text-lg">
              A través de meditaciones activadoras, movilizás memorias,
              desbloqueás emociones y sembrás una nueva frecuencia.
            </p>
            <p className="text-lg">
              Y con ejercicios creativos y prácticos, integrás cada experiencia
              en tu cuerpo, tu palabra y tu vida cotidiana.
            </p>
            <p className="text-lg">
              Para que la transformación no quede solo en lo sutil, sino que se
              vuelva forma, acción y decisión.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3
              className={`text-2xl font-bold ${currentStyle.colors.secondary} mb-6`}
              style={fontClass.title}
            >
              Un viaje desde lo sutil a lo tangible.
            </h3>
            <p
              className="w-full text-center text-3xl sm:text-4xl lg:text-5xl text-slate-200 font-medium py-8 italic opacity-70"
              style={fontClass.text}
            >
              Cada meditación te va a guiar hacia adentro, y cada ejercicio te
              va a invitar a traducir eso que sentiste en algo concreto: un
              movimiento, una escritura, una reflexión, una acción.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
