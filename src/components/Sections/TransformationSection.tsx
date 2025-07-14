"use client";

import { motion } from "framer-motion";
import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";

export default function TransformationSection() {
  const { currentStyle } = useStyle();
  const { fontClass } = useFontClass();

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 overflow-hidden">
      {/* Background effects */}
      <div
        className={`absolute top-10 right-10 w-32 h-32 bg-gradient-radial ${currentStyle.colors.primary}/10 to-transparent rounded-full blur-2xl opacity-40 pointer-events-none`}
      ></div>
      <div
        className={`absolute bottom-10 left-10 w-24 h-24 bg-gradient-radial ${currentStyle.colors.accent}/10 to-transparent rounded-full blur-xl opacity-50 pointer-events-none`}
      ></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${currentStyle.colors.secondary} mb-8`}
            style={fontClass.title}
          >
            De la alquimia interna al enraizamiento consciente.
          </h2>

          <p
            className="text-2xl sm:text-3xl lg:text-4xl text-slate-200 font-medium leading-relaxed italic opacity-90 max-w-3xl mx-auto"
            style={fontClass.text}
          >
            Para que así puedas integrar lo humano y lo divino en vos. Porque la
            verdadera transformación sucede cuando lo espiritual se vuelve
            experiencia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
