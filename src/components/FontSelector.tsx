"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Type, Check } from "lucide-react";
import { useFont } from "@/context/FontContext";
import { useStyle } from "@/context/StyleContext";

export default function FontSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentFont, setCurrentFont, fontOptions } = useFont();
  const { currentStyle } = useStyle();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const selectedFontRef = useRef<HTMLButtonElement>(null);

  const handleFontSelect = (fontId: string) => {
    const selectedFontObj = fontOptions.find((font) => font.id === fontId);
    if (selectedFontObj) {
      setCurrentFont(selectedFontObj);
      console.log(`🔤 Fuente aplicada: ${selectedFontObj.name}`);
    }
    setIsOpen(false);
  };

  // Scroll automático a la fuente seleccionada cuando se abre el menú
  useEffect(() => {
    if (isOpen && selectedFontRef.current) {
      const timer = setTimeout(() => {
        selectedFontRef.current?.scrollIntoView({
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
        className=""
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-black/80 backdrop-blur-md border border-gray-600/30 rounded-full shadow-lg hover:bg-black/90 transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Type
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
                Elegir Fuente
              </h3>

              <div
                ref={scrollContainerRef}
                className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar"
              >
                {fontOptions.map((font) => (
                  <motion.button
                    key={font.id}
                    ref={currentFont.id === font.id ? selectedFontRef : null}
                    onClick={() => handleFontSelect(font.id)}
                    className={`w-full p-4 rounded-xl transition-all duration-300 text-left group ${
                      currentFont.id === font.id
                        ? `bg-gray-800/80 border border-gray-500/70 ring-2 ring-current ring-opacity-30 ${currentStyle.colors.accent}`
                        : "bg-gray-900/50 hover:bg-gray-800/70 border border-gray-700/50 hover:border-gray-600/70"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      {/* Nombre de la fuente con la fuente aplicada */}
                      <h4
                        className={`text-white text-lg font-medium group-hover:${currentStyle.colors.accent} transition-colors`}
                        style={{
                          fontFamily: font.fontFamily + ", " + font.fallback,
                        }}
                      >
                        {font.name}
                      </h4>

                      {/* Icono de check si está seleccionada */}
                      {currentFont.id === font.id && (
                        <Check
                          className={`h-5 w-5 ${currentStyle.colors.accent}`}
                        />
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
