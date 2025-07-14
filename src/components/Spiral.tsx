import React from "react";
import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";

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

interface Point {
  x: number;
  y: number;
}

const TopicMap = () => {
  const { fontClass } = useFontClass();
  const height = 1000;
  const textColor = "oklch(96.2% 0.059 95.617)";

  const width = 900;

  const points: Point[] = [
    { x: 100, y: 80 },
    { x: 350, y: 100 },
    { x: 650, y: 160 },
    { x: 200, y: 180 },
    { x: 500, y: 220 },
    { x: 260, y: 260 },
    { x: 460, y: 310 },
    { x: 700, y: 340 },
    { x: 320, y: 380 },
    { x: 140, y: 420 },
    { x: 500, y: 460 },
    { x: 750, y: 500 },
    { x: 420, y: 530 },
    { x: 200, y: 560 },
    { x: 600, y: 580 },
    { x: 280, y: 620 },
    { x: 700, y: 650 },
    { x: 500, y: 670 },
    { x: 200, y: 700 },
    { x: 380, y: 735 },
    { x: 550, y: 751 },
  ];

  // Crear curva suave que conecta los puntos
  const createPath = (pts: Point[]) => {
    if (pts.length < 2) return "";

    let d = `M ${pts[0].x},${pts[0].y}`;

    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];

      // Creamos una curva con control desplazado hacia izquierda o derecha
      const isEven = i % 2 === 0;
      const offsetX = isEven ? 220 : -220; // más grande = más curva

      const controlX = (prev.x + curr.x) / 2 + offsetX;
      const controlY = (prev.y + curr.y) / 2;

      d += ` Q ${controlX},${controlY} ${curr.x},${curr.y}`;
    }

    return d;
  };

  const pathD = createPath(points);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        width={width}
        height={height}
        style={{ background: "none" }}
        className="w-full h-auto max-w-[600px] max-h-[600px] md:max-w-[900px] md:max-h-[800px]"
      >
        {/* Camino irregular punteado */}
        <path
          d={pathD}
          fill="none"
          stroke={textColor}
          strokeWidth={5}
          strokeDasharray="5,10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Temáticas */}
        {points.map((point, i) => {
          // Dividir texto largo en múltiples líneas
          const splitText = (text: string, maxLength: number = 12) => {
            const words = text.split(" ");
            const lines: string[] = [];
            let currentLine = "";

            words.forEach((word) => {
              if ((currentLine + word).length <= maxLength) {
                currentLine += (currentLine ? " " : "") + word;
              } else {
                if (currentLine) lines.push(currentLine);
                currentLine = word;
              }
            });
            if (currentLine) lines.push(currentLine);

            return lines;
          };

          // Ajustes específicos para ciertas temáticas
          let textLines: string[];
          let numberY = -18;
          let textStartY = 2;

          if (i === 12) {
            // Temática 13: "Energia sexual y creativa"
            textLines = splitText(tematicas[i]);
            numberY = -22;
            textStartY = -2;
          } else if (i === 13) {
            // Temática 14: "La abundancia"
            textLines = ["La", "Abundancia"];
            numberY = -18;
            textStartY = 2;
          } else if (i === 15) {
            // Temática 16: "Guias y seres desencarnados"
            textLines = ["Guias y", "seres"];
            numberY = -18;
            textStartY = 2;
          } else if (i === 19) {
            // Temática 20: "Amor incondicional"
            textLines = ["Amor", "puro"];
            numberY = -22;
            textStartY = -2;
          } else {
            textLines = splitText(tematicas[i]);
          }

          return (
            <g key={i} transform={`translate(${point.x}, ${point.y})`}>
              {/* Círculo de fondo beige */}
              <circle cx="0" cy="0" r="45" fill="oklch(96.2% 0.059 95.617)" />

              <text
                x={0}
                y={numberY}
                textAnchor="middle"
                fontSize="14"
                fill="black"
                fontFamily={fontClass.title.fontFamily}
                fontWeight="900"
                style={{ fontStretch: "condensed" }}
              >
                {i + 1}
              </text>

              {/* Renderizar múltiples líneas de texto */}
              {textLines.map((line, lineIndex) => (
                <text
                  key={lineIndex}
                  x={0}
                  y={textStartY + lineIndex * 16}
                  textAnchor="middle"
                  fontSize="16"
                  fill="black"
                  fontFamily={fontClass.text.fontFamily}
                  fontWeight="900"
                  style={{ fontStretch: "condensed" }}
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default TopicMap;
