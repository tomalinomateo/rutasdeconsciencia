"use client";

import Image from "next/image";
import StartButton from "../StartButton";

export default function IntroductionSection() {
  return (
    <div className="w-full h-screen relative z-10 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/background-top.jpeg"
          alt="Background top decoration"
          fill
          className="object-cover"
          style={{ transform: "scale(1.5)" }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-start text-center pt-4">
        <p className="text-[10px] md:text-xs mb-32 font-garet font-normal text-primary">
          <a
            href="https://instagram.com/retornoalorigen__"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            @retornoalorigen__
          </a>
        </p>
        <h1 className="text-[5.5rem] md:text-[8.5rem] font-normal mb-10 leading-none font-the-seasons title-primary">
          <div className="block md:inline">
            <span>Alquimia</span>
          </div>
          <div className="block md:inline">
            <span style={{ fontStyle: "italic" }}>raíz</span>
          </div>
        </h1>
        <h2 className="text-sm md:text-base tracking-widest mb-4 font-garet font-semibold text-primary">
          21 DÍAS DE MEDITACIONES GUIADAS Y PRÁCTICAS CONSCIENTES
        </h2>
        <p className="text-[10px] md:text-xs font-light mb-8 font-garet text-primary">
          Para transformar tu manera de pensar, vivir y sentir.
        </p>
        <StartButton />
      </div>

      <div
        className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center space-y-2 text-center animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        <p className="text-xs tracking-wider font-garet font-normal text-primary">
          Conocé más del programa
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="var(--title-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
