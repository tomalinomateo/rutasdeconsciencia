"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface StyleColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

interface StyleOption {
  id: string;
  name: string;
  description: string;
  colors: StyleColors;
  preview: string;
}

interface StyleContextType {
  currentStyle: StyleOption;
  setCurrentStyle: (style: StyleOption) => void;
  styleOptions: StyleOption[];
}

const styleOptions: StyleOption[] = [
  {
    id: "champagne-beige",
    name: "Champagne",
    description: "Champagne dorado, elegante y luminoso",
    colors: {
      primary: "text-amber-200",
      secondary: "text-yellow-200",
      accent: "text-yellow-400",
      background: "from-amber-100/20 via-transparent to-yellow-200/20",
    },
    preview: "bg-gradient-to-r from-amber-100 via-yellow-200 to-yellow-400",
  },
  {
    id: "forest-whisper",
    name: "Susurro del Bosque",
    description: "Verde bosque, esmeralda y menta",
    colors: {
      primary: "text-green-300",
      secondary: "text-emerald-500",
      accent: "text-teal-300",
      background: "from-green-800/15 via-transparent to-emerald-800/15",
    },
    preview: "bg-gradient-to-r from-green-300 via-emerald-500 to-teal-300",
  },
  {
    id: "silver-flame",
    name: "Llama Plateada",
    description: "Plata, gris y negro profundo",
    colors: {
      primary: "text-gray-100",
      secondary: "text-gray-400",
      accent: "text-white",
      background: "from-gray-700/15 via-transparent to-gray-900/15",
    },
    preview: "bg-gradient-to-r from-gray-100 via-gray-400 to-gray-900",
  },
];

const StyleContext = createContext<StyleContextType | undefined>(undefined);

export const StyleProvider = ({ children }: { children: ReactNode }) => {
  const [currentStyle, setCurrentStyle] = useState<StyleOption>(
    styleOptions[0]
  );

  return (
    <StyleContext.Provider
      value={{ currentStyle, setCurrentStyle, styleOptions }}
    >
      {children}
    </StyleContext.Provider>
  );
};

export const useStyle = () => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useStyle must be used within a StyleProvider");
  }
  return context;
};
