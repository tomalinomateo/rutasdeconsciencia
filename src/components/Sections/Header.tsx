"use client";

import { defaultStyles } from "@/lib/defaultStyles";

export default function Header() {
  const getAccentColor = () => {
    return defaultStyles.colors.accent;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="text-lg sm:text-2xl font-bold text-primary flex flex-wrap items-end whitespace-nowrap">
              <span className="font-the-seasons">Alquimia</span>
              <span className="text-xs sm:text-sm text-primary">by</span>
              <a
                href="https://instagram.com/retornoalorigen__"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs sm:text-sm hover:${getAccentColor()} transition-colors text-primary hover:text-current`}
              >
                @retornoalorigen__
              </a>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#curso"
              className="text-primary hover:text-accent transition-colors duration-300 font-garet"
            >
              Curso
            </a>
            <a
              href="#tematicas"
              className="text-primary hover:text-accent transition-colors duration-300 font-garet"
            >
              Temáticas
            </a>
            <a
              href="#para-ti"
              className="text-primary hover:text-accent transition-colors duration-300 font-garet"
            >
              Para ti
            </a>
            <a
              href="#sobre-mi"
              className="text-primary hover:text-accent transition-colors duration-300 font-garet"
            >
              Sobre mí
            </a>
            <a
              href="#faq"
              className="text-primary hover:text-accent transition-colors duration-300 font-garet"
            >
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
