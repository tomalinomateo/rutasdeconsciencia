"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTitleFont, TITLE_FONT_COMBOS } from "@/context/TitleFontContext";

const fontLabels = [
  ["Lora", "Parisienne"],
  ["Italianno", "Alegreya SC"],
  ["Dancing Script", "Libre Baskerville"],
];

const fontClassMap: Record<string, string> = {
  lora: "font-[var(--font-lora)]",
  parisienne: "font-[var(--font-parisienne)]",
  italianno: "font-[var(--font-italianno)]",
  alegreyaSC: "font-[var(--font-alegreyasc)]",
  dancingscript: "font-[var(--font-dancingscript)]",
  librebaskerville: "font-[var(--font-librebaskerville)]",
};

export default function TitleFontSelector() {
  const { titleFontCombo, setTitleFontCombo } = useTitleFont();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Botón simple con el nombre de la combinación */}
      <motion.div
        className=""
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.3, duration: 0.3 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 rounded-xl border bg-black/80 border-gray-600/30 shadow-lg hover:bg-black/90 transition-all duration-300 text-yellow-200 font-semibold text-sm"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Cambiar fuentes de títulos"
        >
          {fontLabels[titleFontCombo][0]} / {fontLabels[titleFontCombo][1]}
        </motion.button>
      </motion.div>

      {/* Menú desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 z-50"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            ref={ref}
          >
            <div className="bg-black/90 backdrop-blur-md border border-gray-600/30 rounded-2xl shadow-2xl p-4 w-72">
              <h3 className="text-white font-semibold text-lg mb-4 text-center">
                Fuentes de Título
              </h3>
              <div className="space-y-3">
                {TITLE_FONT_COMBOS.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      setTitleFontCombo(idx);
                      setIsOpen(false);
                    }}
                    className={`w-full p-3 rounded-xl transition-all duration-300 text-left group flex items-center justify-center font-semibold text-yellow-200 text-base ${
                      titleFontCombo === idx
                        ? "bg-gray-800/80 border border-gray-500/70 ring-2 ring-yellow-300"
                        : "bg-gray-900/50 hover:bg-gray-800/70 border border-gray-700/50 hover:border-yellow-300"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {fontLabels[idx][0]} / {fontLabels[idx][1]}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay para cerrar el menú */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
