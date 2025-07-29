import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { defaultStyles } from "@/lib/defaultStyles";
import PurchaseButton from "./PurchaseButton";

export default function StickyHeader() {
  const [showHeader, setShowHeader] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [fontA, fontB] = [
    defaultStyles.titleFonts.alquimia,
    defaultStyles.titleFonts.raiz,
  ];

  useEffect(() => {
    const title = document.getElementById("alquimia-title");
    const btn = document.getElementById("main-purchase-btn");
    if (!title) return;
    const titleObserver = new window.IntersectionObserver(
      ([entry]) => {
        setShowHeader(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    titleObserver.observe(title);
    let btnObserver: IntersectionObserver | null = null;
    if (btn) {
      btnObserver = new window.IntersectionObserver(
        ([entry]) => {
          setShowButton(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      btnObserver.observe(btn);
    }
    return () => {
      titleObserver.disconnect();
      if (btnObserver) {
        btnObserver.disconnect();
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-slate-800"
        >
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex flex-col">
              <span
                className="text-2xl text-yellow-200 flex items-end gap-1"
                style={defaultStyles.title}
              >
                <span style={{ fontFamily: `var(--font-${fontA})` }}>
                  Alquimia
                </span>
                <span style={{ fontFamily: `var(--font-${fontB})` }}>Raiz</span>
              </span>
              <span className="text-base text-gray-400 italic leading-tight">
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
            <AnimatePresence>
              {showButton && (
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 40, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <PurchaseButton
                    variant="primary"
                    size="small"
                    className="lg:px-10 lg:py-4 lg:text-xl"
                    text={"Comenzar el viaje"}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
