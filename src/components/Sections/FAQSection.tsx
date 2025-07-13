"use client";

import { motion } from "framer-motion";
import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";

export default function FAQSection() {
  const { currentStyle } = useStyle();
  const { fontClass } = useFontClass();

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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-600/30"
            >
              <h3
                className={`text-xl font-semibold ${currentStyle.colors.secondary} mb-3`}
                style={fontClass.title}
              >
                {faq.question}
              </h3>
              <p className="text-white" style={fontClass.text}>
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
