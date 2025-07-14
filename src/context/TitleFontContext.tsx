"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Combinaciones de fuentes: [Alquimia, Raiz]
export const TITLE_FONT_COMBOS = [
  ["lora", "parisienne"],
  ["italianno", "alegreyaSC"],
  ["dancingscript", "librebaskerville"],
];

interface TitleFontContextProps {
  titleFontCombo: number;
  setTitleFontCombo: (idx: number) => void;
  combos: typeof TITLE_FONT_COMBOS;
}

const TitleFontContext = createContext<TitleFontContextProps | undefined>(
  undefined
);

export function TitleFontProvider({ children }: { children: ReactNode }) {
  const [titleFontCombo, setTitleFontCombo] = useState(0);
  return (
    <TitleFontContext.Provider
      value={{ titleFontCombo, setTitleFontCombo, combos: TITLE_FONT_COMBOS }}
    >
      {children}
    </TitleFontContext.Provider>
  );
}

export function useTitleFont() {
  const ctx = useContext(TitleFontContext);
  if (!ctx)
    throw new Error("useTitleFont debe usarse dentro de TitleFontProvider");
  return ctx;
}
