"use client";

import Image from "next/image";
import PurchaseButton from "../PurchaseButton";

export default function IntroductionSection() {
  return (
    <div className="w-full h-screen relative z-10 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/background-top.jpeg"
          alt="Background top decoration"
          fill
          className="object-cover"
          style={{ transform: "translateY(-20%) scale(1.5)" }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-start text-center pt-12">
        <p
          className="text-[10px] md:text-xs mb-32"
          style={{
            color: "#fff3db",
            fontFamily: '"Garet", sans-serif',
            fontWeight: 400,
          }}
        >
          <a
            href="https://instagram.com/retornoalorigen__"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-200 transition-colors duration-300"
          >
            @retornoalorigen__
          </a>
        </p>
        <h1
          className="text-[5.5rem] md:text-[8.5rem] font-normal mb-10 leading-none"
          style={{
            fontFamily: '"The Seasons", "Times New Roman", serif',
            color: "#fff3db",
          }}
        >
          <div className="block md:inline">
            <span>Alquimia</span>
          </div>
          <div className="block md:inline">
            <span style={{ fontStyle: "italic" }}>raíz</span>
          </div>
        </h1>
        <h2
          className="text-sm md:text-base tracking-widest mb-4"
          style={{
            color: "#fff3db",
            fontFamily: '"Garet", sans-serif',
            fontWeight: 600,
          }}
        >
          21 DÍAS DE MEDITACIONES GUIADAS Y PRÁCTICAS CONSCIENTES
        </h2>
        <p
          className="text-[10px] md:text-xs font-light mb-8"
          style={{
            color: "#fff3db",
            fontFamily: '"Garet", sans-serif',
          }}
        >
          Para transformar tu manera de pensar, vivir y sentir.
        </p>
        <div className="mt-8 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            {/* Efecto de brillo pulsante */}
            <div className="w-48 h-16 rounded-full bg-gradient-to-br from-yellow-300 via-pink-300 to-transparent blur-3xl opacity-80 animate-pulse"></div>
            {/* Bola que está detrás del botón */}
            <div
              className="absolute w-3 h-3 bg-amber-300 rounded-full shadow-lg shadow-amber-300/50 animate-orbit-behind"
              style={{ zIndex: 10 }}
            ></div>
            {/* Bola que está delante del botón */}
            <div
              className="absolute w-3 h-3 bg-amber-300 rounded-full shadow-lg shadow-amber-300/50 animate-orbit-front"
              style={{ zIndex: 30 }}
            ></div>
          </div>
          <PurchaseButton
            variant="primary"
            size="small"
            text="Comenzar el viaje"
            className="text-sm px-6 py-3 shadow-lg hover:shadow-amber-200/50 relative z-20"
          />
        </div>
      </div>
    </div>
  );
}
