"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// Importaciones removidas - no se utilizan en este componente
import PurchaseButton from "../PurchaseButton";
import { defaultStyles } from "@/lib/defaultStyles";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [fontA, fontB] = [
    defaultStyles.titleFonts.alquimia,
    defaultStyles.titleFonts.raiz,
  ];

  return (
    <section className="relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-3 w-full">
              <h1
                id="alquimia-title"
                className={`text-5xl sm:text-6xl lg:text-7xl ${defaultStyles.colors.primary} flex flex-wrap items-end text-left whitespace-nowrap`}
                style={defaultStyles.title}
              >
                <span style={{ fontFamily: `var(--font-${fontA})` }}>
                  Alquimia
                </span>
                <span
                  className="ml-2"
                  style={{ fontFamily: `var(--font-${fontB})` }}
                >
                  Raiz
                </span>
              </h1>
              <span
                className="block text-lg text-gray-400 italic text-right mt-2 pr-1"
                style={{ minWidth: "max-content" }}
              >
                de{" "}
                <a
                  href="https://instagram.com/retornoalorigen__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-300"
                >
                  @retornoalorigen__
                </a>
              </span>
            </div>
            <h2
              className={`text-2xl lg:text-3xl font-medium mb-1 ${defaultStyles.colors.primary}`}
              style={defaultStyles.text}
            >
              21 días para reprogramar por dentro y transformar por fuera
            </h2>
            <h3
              className={`text-xl font-medium mb-4 ${defaultStyles.colors.primary}`}
              style={defaultStyles.text}
            >
              Guiados por la meditacion y ejercicios conscientes
            </h3>
            <p
              className="text-xl text-white font-medium mb-4"
              style={defaultStyles.text}
            >
              Un viaje profundo por 21 aspectos esenciales del ser, trabajados
              desde la experiencia: Cada día, una activación meditativa y una
              práctica consciente para reconectar con lo sagrado, transformar tu
              mirada y empezar a habitar tu vida desde una nueva vibración.
            </p>
            <div
              id="main-purchase-btn"
              className="flex justify-center mt-6 relative"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                <div className="w-56 h-20 rounded-full bg-gradient-to-br from-yellow-300 via-pink-300 to-transparent blur-3xl opacity-80 animate-pulse"></div>
              </div>
              <PurchaseButton
                variant="primary"
                size="large"
                className="lg:px-14 lg:py-6 lg:text-2xl"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              className={`w-full h-96 bg-gradient-to-br ${defaultStyles.colors.background} rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden`}
            >
              <Image
                src="/ceremonia2.jpeg"
                alt="María Cruz - Rutas de Consciencia"
                fill
                className="object-cover object-center rounded-3xl"
                style={{ objectPosition: "center 75%" }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
