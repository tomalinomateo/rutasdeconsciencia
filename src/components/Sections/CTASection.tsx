"use client";

import { motion } from "framer-motion";
import PurchaseButton from "../PurchaseButton";
import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";

export default function CTASection() {
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
    <section className="py-20 relative overflow-hidden z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`text-4xl font-bold ${getTitleColor()} mb-4`}
            style={fontClass.title}
          >
            ¿Listo para recordar quién sos?
          </h2>
          <p
            className="text-xl text-white mb-8 opacity-90"
            style={fontClass.text}
          >
            Cada paso hacia adentro es también un paso hacia tu libertad.
          </p>
          <div className="space-y-6">
            <div className="flex justify-center">
              <PurchaseButton variant="primary" size="large" />
            </div>
            <p className="text-lg text-white opacity-90" style={fontClass.text}>
              Reconecta con lo sagrado en lo cotidiano
              <br />
              <span className="text-sm text-white opacity-75">
                21 puertas para explorar tu universo interno
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
