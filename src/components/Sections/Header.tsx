"use client";

import { Moon, Sparkles } from "lucide-react";
import PurchaseButton from "../PurchaseButton";
import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Header({ scrollToSection }: HeaderProps) {
  const { currentStyle } = useStyle();
  const { fontClass } = useFontClass();

  // Función para obtener el color de los iconos
  const getIconColor = () => {
    if (currentStyle.id === "silver-forest") {
      return "text-emerald-400";
    }
    return currentStyle.colors.secondary;
  };

  // Función para obtener el color del accent (para sparkles)
  const getAccentColor = () => {
    if (currentStyle.id === "silver-forest") {
      return "text-green-300";
    }
    return currentStyle.colors.accent;
  };

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative">
              <Moon className={`h-6 w-6 sm:h-8 sm:w-8 ${getIconColor()}`} />
              <Sparkles
                className={`h-3 w-3 sm:h-4 sm:w-4 ${getAccentColor()} absolute -top-1 -right-1`}
              />
            </div>
            <div className="flex flex-col">
              <span
                className="text-lg sm:text-2xl font-bold text-white"
                style={fontClass.title}
              >
                Alquimia Raiz
              </span>
              <div
                className="flex items-center gap-1 -mt-1"
                style={fontClass.text}
              >
                <span className="text-xs sm:text-sm text-gray-400">by</span>
                <a
                  href="https://www.instagram.com/retornoalorigen__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs sm:text-sm hover:${getAccentColor()} transition-colors text-gray-400 hover:text-current`}
                >
                  @retornoalorigen__
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="block sm:hidden">
              <PurchaseButton variant="primary" size="small" text="Comenzar" />
            </span>
            <span className="hidden sm:block">
              <PurchaseButton
                variant="primary"
                size="medium"
                text="Comenzar el viaje"
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
