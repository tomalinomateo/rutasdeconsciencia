"use client";

import { motion } from "framer-motion";
// Importaciones removidas - no se utilizan en este componente
import PurchaseButton from "../PurchaseButton";
import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { currentStyle } = useStyle();
  const { fontClass } = useFontClass();

  return (
    <section className="relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={fontClass.title}
            >
              <span
                className={`${currentStyle.colors.primary} block text-3xl lg:text-4xl mb-4`}
              >
                21 días de reprogramación interna
              </span>
              A través de activaciones meditativas y prácticas conscientes.
            </h1>
            <p
              className="text-xl text-white font-medium mb-4"
              style={fontClass.text}
            >
              Un recorrido por 21 aspectos esenciales del ser a través de la
              meditación y la práctica consciente, para despertar la
              consciencia, conectar con lo sagrado y habitar tu vida desde una
              nueva vibración / y reprogramar la forma en la que habitás tu
              realidad.
            </p>
            <div className="flex justify-center">
              <PurchaseButton variant="primary" size="large" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              className={`w-full h-96 bg-gradient-to-br ${currentStyle.colors.background} rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden`}
            >
              <img
                src="/ceremonia2.jpeg"
                alt="María Cruz - Rutas de Consciencia"
                className="w-full h-full object-cover object-center rounded-3xl"
                style={{ objectPosition: "center 75%" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
