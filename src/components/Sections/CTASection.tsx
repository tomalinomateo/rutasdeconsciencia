"use client";

import { defaultStyles } from "@/lib/defaultStyles";
import PurchaseButton from "../PurchaseButton";

interface CTASectionProps {
  onLoginClick?: () => void;
}

export default function CTASection({ onLoginClick }: CTASectionProps) {
  return (
    <section id="cta" className="py-20 relative z-10 overflow-hidden">
      <div
        className={`absolute top-10 left-10 w-32 h-32 bg-yellow-200/10 rounded-full blur-2xl opacity-40 pointer-events-none`}
      ></div>
      <div
        className={`absolute bottom-10 right-10 w-24 h-24 bg-amber-100/10 rounded-full blur-xl opacity-50 pointer-events-none`}
      ></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-4xl font-bold ${defaultStyles.colors.primary} mb-4 font-the-seasons`}
        >
          ¿Estás listo para comenzar?
        </h2>
        <p className="text-xl text-primary mb-8 opacity-90 font-garet">
          Únete a cientos de personas que ya han transformado sus vidas a través
          de este programa de 21 días.
        </p>
        <p className="text-lg text-primary opacity-90 font-garet mb-8">
          Comienza tu viaje de transformación hoy mismo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PurchaseButton
            variant="primary"
            size="large"
            onStartClick={onLoginClick}
          />
        </div>
        <span className="text-sm text-primary opacity-75">
          Acceso inmediato • 21 días de contenido • Garantía de satisfacción
        </span>
      </div>
    </section>
  );
}
