"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check } from "lucide-react";
import { useStyle } from "@/context/StyleContext";

export default function StyleSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentStyle, setCurrentStyle, styleOptions } = useStyle();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const selectedStyleRef = useRef<HTMLButtonElement>(null);

  const handleStyleSelect = (styleId: string) => {
    const selectedStyleObj = styleOptions.find((style) => style.id === styleId);
    if (selectedStyleObj) {
      setCurrentStyle(selectedStyleObj);
      // Pequeña notificación visual
      console.log(`🎨 Estilo aplicado: ${selectedStyleObj.name}`);
    }
    setIsOpen(false);
  };

  // Scroll automático al estilo seleccionado cuando se abre el menú
  useEffect(() => {
    if (isOpen && selectedStyleRef.current) {
      // Pequeño delay para que el menú se renderice completamente
      const timer = setTimeout(() => {
        selectedStyleRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      {/* Botón flotante */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-black/80 backdrop-blur-md border border-gray-600/30 rounded-full shadow-lg hover:bg-black/90 transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Palette
            className={`w-6 h-6 text-white group-hover:${currentStyle.colors.accent} transition-colors duration-300`}
          />
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
          >
            <div className="bg-black/90 backdrop-blur-md border border-gray-600/30 rounded-2xl shadow-2xl p-4 w-72">
              <h3 className="text-white font-semibold text-lg mb-4 text-center">
                Elegir Estilo
              </h3>

              <div
                ref={scrollContainerRef}
                className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar"
              >
                {styleOptions.map((style) => (
                  <motion.button
                    key={style.id}
                    ref={currentStyle.id === style.id ? selectedStyleRef : null}
                    onClick={() => handleStyleSelect(style.id)}
                    className={`w-full p-3 rounded-xl transition-all duration-300 text-left group ${
                      currentStyle.id === style.id
                        ? `bg-gray-800/80 border border-gray-500/70 ring-2 ring-current ring-opacity-30 ${currentStyle.colors.accent}`
                        : "bg-gray-900/50 hover:bg-gray-800/70 border border-gray-700/50 hover:border-gray-600/70"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Los 3 colores principales */}
                        <div className="flex gap-1">
                          <div
                            className={`w-4 h-4 rounded-full ${style.colors.primary} bg-current`}
                          ></div>
                          <div
                            className={`w-4 h-4 rounded-full ${style.colors.secondary} bg-current`}
                          ></div>
                          <div
                            className={`w-4 h-4 rounded-full ${style.colors.accent} bg-current`}
                          ></div>
                        </div>

                        {/* Nombre del estilo */}
                        <h4
                          className={`text-white font-medium group-hover:${currentStyle.colors.accent} transition-colors`}
                        >
                          {style.name}
                        </h4>
                      </div>

                      {currentStyle.id === style.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex-shrink-0"
                        >
                          <Check
                            className={`w-5 h-5 ${currentStyle.colors.accent}`}
                          />
                        </motion.div>
                      )}
                    </div>
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
