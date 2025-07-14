"use client";

import { motion } from "framer-motion";
import PurchaseButton from "../PurchaseButton";
import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";

export default function ForYouSection() {
  const { currentStyle } = useStyle();
  const { fontClass } = useFontClass();

  // Función para obtener el color del título principal
  const getTitleColor = () => {
    if (currentStyle.id === "silver-forest") {
      return "text-emerald-400";
    }
    return currentStyle.colors.primary;
  };

  const forYouItems = [
    "Hace tiempo querés meditar pero te cuesta sostener la práctica por tu cuenta o no sabés por dónde empezar.",
    "Estás atravesando un momento de transformación, confusión o búsqueda interna, y necesitás un espacio que te acompañe con amor y claridad.",
    "Sentís que hay partes de vos que aún no pudiste integrar del todo (tu historia, tus emociones, tu sensibilidad, tu sombra, tu deseo…) y querés herramientas para mirarlas desde una nueva perspectiva.",
    "Querés reconectar con tu alma sin desconectarte de tu humanidad.",
    "Deseas habitarte con más presencia y profundidad. Incluyendo cuerpo, emoción, energía y mente.",
    "Buscas herramientas para tu autoconocimiento.",
  ];

  return (
    <section id="para-ti" className="pt-8 pb-20 relative z-10 overflow-hidden">
      <div
        className={`absolute top-16 left-16 w-36 h-36 bg-gradient-radial ${currentStyle.colors.primary}/10 to-transparent rounded-full blur-2xl opacity-40 pointer-events-none`}
      ></div>
      <div
        className={`absolute bottom-16 right-16 w-28 h-28 bg-gradient-radial ${currentStyle.colors.accent}/10 to-transparent rounded-full blur-xl opacity-45 pointer-events-none`}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold ${getTitleColor()} mb-4`}
            style={fontClass.title}
          >
            Esta propuesta es para vos si:
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12 sm:space-y-4"
          >
            {forYouItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-white text-base leading-relaxed list-disc ml-6 marker:${currentStyle.colors.accent}`}
                style={fontClass.text}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* CTA después de para ti si */}
        <div className="text-center">
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-600/30">
            <h3
              className={`text-2xl font-bold ${currentStyle.colors.primary} mb-4`}
              style={fontClass.title}
            >
              ¿Te identificás con alguno de estos puntos?
            </h3>
            <p className="text-white mb-6 text-lg" style={fontClass.text}>
              Entonces este recorrido está hecho para vos.
            </p>
            <div className="flex justify-center">
              <PurchaseButton variant="primary" size="large" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
