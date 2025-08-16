"use client";

import { useState } from "react";
import { defaultStyles } from "@/lib/defaultStyles";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué incluye el programa?",
      answer:
        "El programa incluye 21 meditaciones guiadas, ejercicios prácticos para cada día, herramientas de integración y acceso a una comunidad de apoyo.",
    },
    {
      question: "¿Necesito experiencia previa en meditación?",
      answer:
        "No, el programa está diseñado para principiantes y personas con experiencia. Cada meditación te guía paso a paso.",
    },
    {
      question: "¿Cuánto tiempo necesito por día?",
      answer:
        "Recomendamos dedicar entre 15-30 minutos por día para las meditaciones y ejercicios. Puedes adaptarlo a tu ritmo.",
    },
    {
      question: "¿Tengo acceso ilimitado al contenido?",
      answer:
        "Sí, una vez que adquieres el programa, tienes acceso ilimitado a todo el contenido para siempre.",
    },
    {
      question: "¿Hay garantía de devolución?",
      answer:
        "Sí, ofrecemos una garantía de 30 días. Si no estás satisfecho, te devolvemos tu dinero sin preguntas.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative z-10 overflow-hidden">
      <div
        className={`absolute top-10 right-10 w-32 h-32 bg-yellow-200/10 rounded-full blur-2xl opacity-40 pointer-events-none`}
      ></div>
      <div
        className={`absolute bottom-10 left-10 w-24 h-24 bg-amber-100/10 rounded-full blur-xl opacity-50 pointer-events-none`}
      ></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold ${defaultStyles.colors.primary} mb-4 font-the-seasons`}
          >
            Preguntas Frecuentes
          </h2>
          <p className="text-primary text-lg mb-8 font-garet">
            Resolvemos las dudas más comunes sobre el programa
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left flex items-center justify-between px-6 py-5 focus:outline-none select-none font-the-seasons transition-colors duration-200 ${
                  openIndex === index
                    ? "text-primary bg-gray-700/50"
                    : "text-primary hover:bg-gray-700/30"
                }`}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-primary text-lg font-garet">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
