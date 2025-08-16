"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 text-primary py-4 border-t border-slate-700/50 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="font-the-seasons">Alquimia</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-gray-400">
              Un programa de @retornoalorigen__
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com/retornoalorigen__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="#faq"
              className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
            >
              FAQ
            </a>
            <a
              href="#sobre-mi"
              className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Sobre mí
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700/50 text-center">
          <p className="text-primary mb-2 max-w-md mx-auto text-lg font-garet">
            Transforma tu vida a través de la práctica consciente y la
            meditación guiada.
          </p>
          <p className="text-sm text-gray-400">
            © 2024 Alquimia Raíz. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
