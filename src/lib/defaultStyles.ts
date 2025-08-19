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
      "bg-transparent text-[#fff3db] hover:bg-[#fff3db]/20 hover:text-[#f59e0b] transition-colors duration-300 border border-[#fff3db]/30 hover:border-[#f59e0b]/50",
    text: "bg-transparent text-[#fff3db] hover:text-[#fbbf24] transition-colors duration-300 underline-offset-4 hover:underline",
  },

  // Estilos de fondos unificados
  backgrounds: {
    primary: "bg-[#0f0f0f]",
    secondary: "bg-[#111827]",
    card: "bg-gray-800/50 border border-gray-700",
  },

  // Estilos de campos de texto unificados
  inputs: {
    // Campo de texto estándar con fondo crema
    primary: "input-primary",
    // Campo de texto para fondos crema (variante)
    primaryOnCream: "input-primary-on-cream",

    // Clases CSS para uso directo
    primaryClasses:
      "bg-[#fff3db] text-[#111827] border-2 border-[rgba(245,158,11,0.3)] rounded-lg px-4 py-3 font-garet text-base transition-all duration-300 focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[rgba(245,158,11,0.1)]",
    primaryOnCreamClasses:
      "bg-white text-[#111827] border-2 border-[#f59e0b] rounded-lg px-4 py-3 font-garet text-base transition-all duration-300 focus:outline-none focus:border-[#d97706] focus:ring-2 focus:ring-[rgba(217,119,6,0.1)]",
  },
};
