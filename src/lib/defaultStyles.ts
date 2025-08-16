// Sistema unificado de estilos basado en la paleta de /styles
export const defaultStyles = {
  // Paleta de colores unificada
  colors: {
    // Colores principales
    primary: "text-[#fff3db]", // Primary Cream
    secondary: "text-[#f59e0b]", // Secondary Amber
    accent: "text-[#fbbf24]", // Accent Yellow
    locked: "text-[#fef3c7]", // Button Locked

    // Colores de fondo
    background: "bg-[#0f0f0f]", // Background principal
    backgroundSecondary: "bg-[#111827]", // Background secundario

    // Colores de botones
    buttonPrimary: "bg-[#fff3db] text-black",
    buttonSecondary: "bg-[#f59e0b] text-white",
    buttonLocked: "bg-[#fef3c7] text-black",

    // Colores de bordes
    borderPrimary: "border-[rgba(255,243,219,0.1)]",
    borderSecondary: "border-[rgba(245,158,11,0.3)]",
  },

  // Sistema de fuentes unificado
  fonts: {
    primary: "font-the-seasons", // The Seasons para títulos
    secondary: "font-garet", // Garet para texto
  },

  // Estilos de texto unificados
  text: {
    title: "font-the-seasons text-[#fff3db]",
    subtitle: "font-garet text-[#fff3db]",
    body: "font-garet text-[#fff3db]",
    caption: "font-garet text-gray-400",
  },

  // Estilos de botones unificados
  buttons: {
    primary:
      "bg-[#fff3db] text-black hover:bg-[#fef3c7] transition-colors duration-300",
    secondary:
      "bg-[#f59e0b] text-white hover:bg-[#d97706] transition-colors duration-300",
    ghost:
      "bg-transparent text-[#fff3db] hover:bg-[#fff3db]/10 transition-colors duration-300",
    text: "bg-transparent text-[#fff3db] hover:bg-[#fff3db]/5 transition-colors duration-300",
  },

  // Estilos de fondos unificados
  backgrounds: {
    primary: "bg-[#0f0f0f]",
    secondary: "bg-[#111827]",
    card: "bg-gray-800/50 border border-gray-700",
  },
};
