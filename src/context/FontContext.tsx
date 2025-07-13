"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface FontOption {
  id: string;
  name: string;
  category: string;
  fontFamily: string;
  googleFont?: string;
  weights?: string[];
  fallback: string;
}

interface FontContextType {
  currentFont: FontOption;
  setCurrentFont: (font: FontOption) => void;
  fontOptions: FontOption[];
}

const fontOptions: FontOption[] = [
  // Default (fuente actual)
  {
    id: "default",
    name: "Default",
    category: "Actual",
    fontFamily: "Anton, Arimo",
    fallback: "sans-serif",
  },

  // Fuentes seleccionadas
  {
    id: "sarabun",
    name: "Sarabun",
    category: "🌱 Calmas y adaptables",
    fontFamily: "Sarabun",
    googleFont: "Sarabun:wght@100;200;300;400;500;600;700;800",
    weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
    fallback: "sans-serif",
  },
  {
    id: "forum",
    name: "Forum",
    category: "🌿 Naturaleza",
    fontFamily: "Forum",
    googleFont: "Forum:wght@400",
    weights: ["400"],
    fallback: "serif",
  },
  {
    id: "lato",
    name: "Lato",
    category: "🌌 Espaciales",
    fontFamily: "Lato",
    googleFont: "Lato:wght@100;300;400;700;900",
    weights: ["100", "300", "400", "700", "900"],
    fallback: "sans-serif",
  },
];

const FontContext = createContext<FontContextType | undefined>(undefined);

export const FontProvider = ({ children }: { children: ReactNode }) => {
  const [currentFont, setCurrentFont] = useState<FontOption>(
    fontOptions.find((font) => font.id === "forum") || fontOptions[0]
  );

  return (
    <FontContext.Provider value={{ currentFont, setCurrentFont, fontOptions }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
};
