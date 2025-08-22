"use client";

import { useState, useEffect } from "react";

interface PageTransitionProps {
  isActive: boolean;
  onTransitionComplete?: () => void;
  userName?: string;
}

export default function PageTransition({
  isActive,
  onTransitionComplete,
  userName,
}: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);

      // Show welcome message after transition starts
      setTimeout(() => {
        setShowWelcome(true);
      }, 200);

      // Trigger transition completion callback
      const timer = setTimeout(() => {
        if (onTransitionComplete) {
          onTransitionComplete();
        }
      }, 1200); // Longer duration for welcome message

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      setShowWelcome(false);
    }
  }, [isActive, onTransitionComplete]);

  if (!isActive && !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: "linear-gradient(135deg, #0f0f0f 0%, #111827 100%)",
      }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          {/* Welcome message without spinner */}
          <div
            className={`transition-all duration-500 ease-out ${
              showWelcome
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-2xl font-the-seasons text-primary mb-2">
              Bienvenid@ {userName ? userName : ""}
            </h2>
            <p className="text-accent font-garet text-sm tracking-wider">
              Preparando tu espacio...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
