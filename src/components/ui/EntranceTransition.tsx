"use client";

import { useState, useEffect } from "react";

interface EntranceTransitionProps {
  onComplete?: () => void;
}

export default function EntranceTransition({
  onComplete,
}: EntranceTransitionProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show logo after a brief delay
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 300);

    // Show text after logo appears
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 800);

    // Start fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Complete transition
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, 2800);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-1000 ease-in-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background:
          "linear-gradient(135deg, #0f0f0f 0%, #111827 50%, #1f2937 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        {/* Logo Animation */}
        <div
          className={`transition-all duration-1000 ease-out mb-8 ${
            showLogo
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-75 rotate-12"
          }`}
        >
          <div className="w-24 h-24 relative">
            {/* Spiral animation */}
            <div className="absolute inset-0 border-2 border-accent/30 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 border-2 border-accent/50 rounded-full animate-ping"></div>
            <div className="absolute inset-4 border-2 border-accent rounded-full animate-spin"></div>

            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Text Animation */}
        <div
          className={`text-center transition-all duration-800 ease-out ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-3xl font-the-seasons text-primary mb-3 tracking-wider">
            Alquimia Raiz
          </h1>
          <p className="text-accent font-garet text-sm tracking-widest uppercase">
            Descubre tu camino interior
          </p>
        </div>

        {/* Subtle background animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent/5 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent/5 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
}
