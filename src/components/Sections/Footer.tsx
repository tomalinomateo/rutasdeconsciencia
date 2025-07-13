"use client";

import { Moon, Sparkles, Instagram } from "lucide-react";
import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";

export default function Footer() {
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
    <footer className="bg-slate-900/80 text-white py-4 border-t border-slate-700/50 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-2">
          <div className="relative">
            <Moon className={`h-8 w-8 ${getIconColor()}`} />
            <Sparkles
              className={`h-4 w-4 ${getAccentColor()} absolute -top-1 -right-1`}
            />
          </div>
          <span className="text-2xl font-bold" style={fontClass.title}>
            Alquimia Raiz
          </span>
        </div>

        {/* Tagline */}
        <p className="text-white mb-2 max-w-md mx-auto" style={fontClass.text}>
          Integrando lo humano y lo divino en vos
        </p>

        {/* Redes sociales */}
        <div className="flex justify-center space-x-6 mb-2">
          <a
            href="https://www.instagram.com/retornoalorigen__/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-slate-400 hover:${currentStyle.colors.primary} transition-colors`}
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://wa.me/543516326058"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-green-400 transition-colors flex items-center justify-center"
            aria-label="WhatsApp"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700/50 pt-2">
          <p className="text-slate-500 text-sm" style={fontClass.text}>
            © 2025 - Alquimia Raiz - @retornoalorigen__
          </p>
        </div>
      </div>
    </footer>
  );
}
