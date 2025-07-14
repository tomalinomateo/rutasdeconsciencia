"use client";

import React from "react";
import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";
import Spiral from "../Spiral";

const tematicas = [
  "Vinculo Materno",
  "Vinculo Paterno",
  "Vinculo con mi niño",
  "Auto-Vinculo",
  "Vinculo con lxs demas",
  "Vinculo con mi cuerpo",
  "Creencias",
  "Emociones",
  "El miedo",
  "La sombra",
  "El propio brillo",
  "El deseo",
  "Energia sexual y creativa",
  "La abundancia",
  "El proposito",
  "Guias y seres desencarnados",
  "La rendicion",
  "Los cuerpos sutiles",
  "La gratitud",
  "Amor incondicional",
  "Morir para renacer",
];

// Agrupa las temáticas en filas de 2 para mejor UX
const getRowsForDesktop = (items: string[]) => {
  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push([
      { idx: i, text: items[i] },
      { idx: i + 1, text: items[i + 1] },
    ]);
  }
  return rows;
};

export default function TematicasSection() {
  const { currentStyle } = useStyle();
  const { fontClass } = useFontClass();

  return (
    <section className="py-5 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-24">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${currentStyle.colors.primary}`}
          style={fontClass.title}
        >
          Temáticas
        </h2>
        <Spiral />
      </div>
    </section>
  );
}
