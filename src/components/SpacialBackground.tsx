import { useStyle } from "@/context/StyleContext";

export default function SpacialBackground() {
  const { currentStyle } = useStyle();
  return (
    <div className="fixed inset-0 z-0">
      {/* Fondo espacial con galaxias */}
      <div className="absolute inset-0 bg-black pointer-events-none">
        {/* Galaxias laterales */}
        <div
          className={`absolute top-1/4 left-0 w-80 h-80 bg-gradient-radial ${currentStyle.colors.primary}/15 via-${currentStyle.colors.accent}/10 to-transparent rounded-full blur-galaxy opacity-25 animate-rotate-slow`}
        ></div>
        <div
          className={`absolute bottom-1/3 right-0 w-72 h-72 bg-gradient-radial ${currentStyle.colors.accent}/12 via-${currentStyle.colors.primary}/6 to-transparent rounded-full blur-galaxy opacity-30 animate-rotate-slow`}
        ></div>
        {/* Sutil resplandor lateral */}
        <div
          className={`absolute top-1/6 left-1/12 w-64 h-64 bg-gradient-radial ${currentStyle.colors.primary}/10 via-${currentStyle.colors.accent}/5 to-transparent rounded-full blur-galaxy opacity-10 animate-rotate-slow`}
        ></div>
        <div
          className={`absolute bottom-1/6 right-1/12 w-56 h-56 bg-gradient-radial ${currentStyle.colors.primary}/10 via-${currentStyle.colors.accent}/5 to-transparent rounded-full blur-galaxy opacity-10 animate-rotate-slow`}
        ></div>
      </div>

      {/* Campo de estrellas reducido y lateral */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Estrellas grandes brillantes */}
        <div className="absolute top-10 left-8 w-2 h-2 bg-white rounded-full opacity-80 animate-pulse shadow-white shadow-sm"></div>
        <div className="absolute top-1/3 right-8 w-3 h-3 bg-white rounded-full opacity-60 animate-pulse shadow-white shadow-lg"></div>
        <div className="absolute bottom-40 left-6 w-2 h-2 bg-white rounded-full opacity-70 animate-pulse shadow-white shadow-sm"></div>
        {/* Estrellas medianas */}
        <div className="absolute top-32 left-1/12 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 right-1/12 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"></div>
      </div>

      {/* Nebulosas flotantes laterales */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${currentStyle.colors.primary}/6 to-${currentStyle.colors.accent}/2 rounded-full blur-nebula opacity-35 animate-float`}
        ></div>
        <div
          className={`absolute top-1/4 right-0 w-40 h-40 bg-gradient-to-bl ${currentStyle.colors.accent}/5 to-${currentStyle.colors.primary}/1 rounded-full blur-nebula opacity-30 animate-float`}
        ></div>
      </div>

      {/* Estrella fugaz (cometa) lateral */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-38 right-8 w-px h-20 bg-gradient-to-b from-white to-transparent opacity-50 animate-pulse transform rotate-45"></div>
      </div>

      {/* Partículas brillantes laterales */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/5 left-2 w-1 h-1 bg-white rounded-full opacity-30 animate-twinkle"></div>
        <div className="absolute bottom-1/5 right-2 w-0.5 h-0.5 bg-white rounded-full opacity-30 animate-twinkle"></div>
      </div>
    </div>
  );
}
