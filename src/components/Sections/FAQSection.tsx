"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";
import { StyleOption } from "@/context/StyleContext";

interface FontClass {
  title: React.CSSProperties;
  text: React.CSSProperties;
  all: React.CSSProperties;
}

interface FAQItemProps {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
  currentStyle: StyleOption;
  fontClass: FontClass;
}

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
  currentStyle,
  fontClass,
}: FAQItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black/50 backdrop-blur-sm p-0 rounded-2xl shadow-lg border border-gray-600/30 overflow-hidden"
    >
      <button
        className={`w-full text-left flex items-center justify-between px-6 py-5 focus:outline-none select-none ${
          isOpen ? "" : "hover:bg-black/30"
        }`}
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        style={fontClass.title}
      >
        <span
          className={`text-xl font-semibold ${currentStyle.colors.secondary}`}
        >
          {faq.question}
        </span>
        <span
          className={`ml-4 transition-transform duration-200 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          style={{
            color:
              currentStyle.id === "champagne-beige" ? "#fef3c7" : "#fde68a",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 6L12 10L8 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: contentHeight || "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.32 },
            }}
            style={{ overflow: "hidden" }}
          >
            <div ref={contentRef} className="px-6 pb-5">
              <p className="text-white text-lg" style={fontClass.text}>
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const { currentStyle } = useStyle();
  const { fontClass } = useFontClass();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Función para obtener el color del título principal
  const getTitleColor = () => {
    if (currentStyle.id === "silver-forest") {
      return "text-emerald-400";
    }
    return currentStyle.colors.primary;
  };

  const faqItems = [
    {
      question: "¿Necesito experiencia previa en meditación?",
      answer:
        "No. Las meditaciones están pensadas para guiarte paso a paso, aunque nunca hayas meditado. Solo necesitás estar disponible para conectar con vos misma/o.",
    },
    {
      question: "¿Puedo hacer el recorrido a mi ritmo o tiene fechas fijas?",
      answer:
        "Podés hacerlo completamente a tu tiempo. No hay fechas obligatorias ni estructuras rígidas. Lo importante es que te permitas vivirlo desde tu propio ritmo interno.",
    },
    {
      question: "¿Los materiales tienen acceso limitado?",
      answer:
        "No. Una vez adquirido, vas a tener acceso de por vida tanto a los audios como a la guía en PDF.",
    },
    {
      question: "¿Puedo hacer las meditaciones sin hacer los ejercicios?",
      answer:
        "Sí, aunque la integración con los ejercicios potencia muchísimo el proceso.",
    },
    {
      question: "¿Puedo regalar este recorrido a otra persona?",
      answer:
        "Sí, ¡y es un regalo hermoso! Escribime por privado y te explico cómo hacer la compra para otra persona.",
    },
  ];

  return (
    <section id="faq" className="py-20 relative z-10 overflow-hidden">
      <div
        className={`absolute top-24 left-24 w-36 h-36 bg-gradient-radial ${currentStyle.colors.primary}/10 to-transparent rounded-full blur-2xl opacity-35 pointer-events-none`}
      ></div>
      <div
        className={`absolute bottom-24 right-24 w-32 h-32 bg-gradient-radial ${currentStyle.colors.accent}/10 to-transparent rounded-full blur-2xl opacity-40 pointer-events-none`}
      ></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold ${getTitleColor()} mb-4`}
            style={fontClass.title}
          >
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-6 mb-16">
          {faqItems.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={(index) =>
                setOpenIndex(openIndex === index ? null : index)
              }
              currentStyle={currentStyle}
              fontClass={fontClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
