"use client";

import Image from "next/image";

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
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-start text-center pt-40">
        <h1
          className="text-[5.5rem] md:text-[8.5rem] font-normal mb-10 leading-none"
          style={{
            fontFamily: '"The Seasons", serif',
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
          21 DÍAS DE MEDITACIÓN Y PRÁCTICAS CONSCIENTES
        </h2>
        <p
          className="text-[10px] md:text-xs font-light mb-18"
          style={{
            color: "#fff3db",
            fontFamily: '"Garet", sans-serif',
          }}
        >
          Para transformar tu manera de pensar, vivir y sentir.
        </p>
        <div className="border border-[#fff3db] px-4 py-2 rounded">
          <p
            className="text-[10px] md:text-xs "
            style={{
              color: "#fff3db",
              fontFamily: '"Garet", sans-serif',
              fontWeight: 500,
            }}
          >
            <div>100% GRABADO – A TU RITMO</div>
            <div>Y DESDE CUALQUIER LUGAR.</div>
          </p>
        </div>
      </div>
    </div>
  );
}
