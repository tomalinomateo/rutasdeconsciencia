import React, { useState, useEffect } from "react";
import { defaultStyles } from "@/lib/defaultStyles";
import {
  Flower,
  Mountain,
  Baby,
  Heart,
  Handshake,
  User,
  Eye,
  Droplets,
  Skull,
  Moon,
  Star,
  Flame,
  Zap,
  Gift,
  Target,
  Sparkles,
  HandHeart,
  Gem,
  HeartHandshake,
  Infinity,
  Sprout,
  Lock,
  Play,
} from "lucide-react";

// Iconos de Lucide React para cada temática (cuando están desbloqueados)
const unlockedIcons = [
  Flower, // 1. Vínculo materno
  Mountain, // 2. Vínculo paterno
  Baby, // 3. Vínculo con mi niño
  Heart, // 4. Auto-vínculo
  Handshake, // 5. Vínculo con lxs demás - Dos manos entrelazadas
  User, // 6. Vínculo con mi cuerpo
  Eye, // 7. Creencias
  Droplets, // 8. Emociones
  Skull, // 9. El miedo - Más relacionado con el miedo
  Moon, // 10. La sombra
  Star, // 11. El propio brillo
  Flame, // 12. El deseo
  Zap, // 13. Energía sexual y creativa - Estrella/energía
  Gift, // 14. La abundancia
  Target, // 15. El propósito
  Sparkles, // 16. Guías y seres desencarnados
  HandHeart, // 17. La rendición
  Gem, // 18. Los cuerpos sutiles - Cristal/piedra
  HeartHandshake, // 19. La gratitud
  Infinity, // 20. Amor incondicional
  Sprout, // 21. Morir para renacer - Brote/planta
];

const tematicas = [
  "Vinculo Materno",
  "Vinculo Paterno",
  "Vinculo con mi niño",
  "Auto-Vinculo",
  "Vinculo con los demas",
  "Mi cuerpo",
  "Creencias",
  "Emociones",
  "El miedo",
  "La sombra",
  "Mi propio brillo",
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
  const textColor = "oklch(96.2% 0.059 95.617)";

  const width = 1200;

  // Estado para manejar la hidratación
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Altura dinámica según dispositivo
  const height = isMobile ? 5500 : 1200;

  // Tamaños según dispositivo
  const circleRadius = isMobile ? 130 : 45;
  const strokeWidth = isMobile ? 6 : 5;
  const numberFontSize = isMobile ? 45 : 14;
  const textFontSize = isMobile ? 43 : 16;

  // Función para ajustar coordenadas Y según dispositivo
  const getAdjustedPoints = () => {
    const basePoints: Point[] = [
      { x: 130, y: isMobile ? 70 : 65 }, // 1 - ajustado para desktop
      { x: 430, y: 80 }, // 2
      { x: 730, y: 98 }, // 3
      { x: 1000, y: 110 }, // 4
      { x: 880, y: 180 }, // 5
      { x: 530, y: 190 }, // 6
      { x: 230, y: 220 }, // 7
      { x: 630, y: 270 }, // 8
      { x: 880, y: 300 }, // 9
      { x: 1060, y: 340 }, // 10
      { x: 530, y: 380 }, // 11
      { x: 130, y: 410 }, // 12
      { x: 580, y: 470 }, // 13
      { x: 830, y: 510 }, // 14
      { x: 380, y: 550 }, // 15
      { x: 500, y: 620 }, // 16
      { x: 680, y: 660 }, // 17
      { x: 880, y: 700 }, // 18
      { x: 230, y: 720 }, // 19
      { x: 510, y: 790 }, // 20
      { x: 790, y: 810 }, // 21
    ];

    if (isMobile) {
      // En mobile, multiplicar todas las coordenadas Y por 5.5 para hacer el gráfico mucho más alto y distribuido
      return basePoints.map((point) => ({
        x: point.x,
        y: point.y * 5.5,
      }));
    }

    return basePoints;
  };

  const points = getAdjustedPoints();

  // Crear curva suave que conecta los puntos
  const createPath = (pts: Point[]) => {
    if (pts.length < 2) return "";

    let d = `M ${pts[0].x},${pts[0].y}`;

    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];

      // Creamos una curva con control desplazado hacia izquierda o derecha
      const isEven = i % 2 === 0;
      const offsetX = isEven ? 200 : -210; // más grande = más curva

      const controlX = (prev.x + curr.x) / 2 + offsetX;
      const controlY = (prev.y + curr.y) / 2;

      d += ` Q ${controlX},${controlY} ${curr.x},${curr.y}`;
    }

    return d;
  };

  const pathD = createPath(points);

  // No renderizar hasta que el cliente esté listo
  if (!isClient) {
    return (
      <div className="relative w-full flex items-center justify-center h-full">
        <div className="w-full h-auto max-w-[600px] max-h-[1200px] md:max-w-[1200px] md:max-h-[1200px]" />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full flex items-center justify-center ${
        isMobile ? "h-[210vh] -mt-25" : "h-full"
      }`}
    >
      <svg
        width={width}
        height={height}
        viewBox={isMobile ? "0 0 1200 5500" : "0 0 1200 1200"}
        style={{ background: "none" }}
        className="w-full h-auto max-w-[600px] max-h-[1500px] md:max-w-[1200px] md:max-h-[1200px]"
      >
        {/* Camino irregular punteado */}
        <path
          d={pathD}
          fill="none"
          stroke={textColor}
          strokeWidth={strokeWidth}
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

          if (i === 12) {
            // Temática 13: "Energia sexual y creativa"
            textLines = splitText(tematicas[i]);
          } else if (i === 13) {
            // Temática 14: "La abundancia"
            textLines = ["La", "abundancia"];
          } else if (i === 15) {
            // Temática 16: "Guias y seres desencarnados"
            textLines = ["Guias y", "seres"];
          } else if (i === 19) {
            // Temática 20: "Amor incondicional"
            textLines = ["El amor"];
          } else {
            textLines = splitText(tematicas[i]);
          }

          return (
            <g key={i} transform={`translate(${point.x}, ${point.y})`}>
              {/* Círculo de fondo */}
              <circle
                cx="0"
                cy="0"
                r={circleRadius}
                fill={
                  i === 0 ? "oklch(85% 0.1 120)" : "oklch(96.2% 0.059 95.617)"
                } // Verde claro para capítulo 1
                stroke={i === 0 ? "oklch(60% 0.2 120)" : "none"} // Borde verde para capítulo 1
                strokeWidth={i === 0 ? 3 : 0}
              />

              {/* Icono arriba */}
              <foreignObject
                x={isMobile ? -30 : -12}
                y={isMobile ? -95 : -32}
                width={isMobile ? "60" : "24"}
                height={isMobile ? "60" : "24"}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {React.createElement(
                    i === 0 ? Play : Lock, // Capítulo 1 con Play, resto con Lock
                    {
                      size: isMobile ? 60 : 20,
                      strokeWidth: 2,
                      color: i === 0 ? "green" : "gray", // Verde para disponible, gris para bloqueado
                    }
                  )}
                </div>
              </foreignObject>

              {/* Número arriba del círculo */}
              <text
                x={0}
                y={isMobile ? -circleRadius - 15 : -circleRadius - 10}
                textAnchor="middle"
                fontSize={numberFontSize}
                fill="oklch(96.2% 0.059 95.617)"
                fontFamily={defaultStyles.title.fontFamily}
                fontWeight="600"
                style={{ fontStretch: "condensed" }}
              >
                {i + 1}
              </text>

              {/* Texto dentro del círculo */}
              <text
                x={0}
                y={isMobile ? 10 : 8}
                textAnchor="middle"
                fontSize={textFontSize}
                fill="black"
                fontFamily={defaultStyles.text.fontFamily}
                fontWeight="600"
                style={{ fontStretch: "condensed", fontStyle: "italic" }}
              >
                {textLines[0]}
              </text>

              {/* Líneas adicionales de texto si existen */}
              {textLines.slice(1).map((line, lineIndex) => (
                <text
                  key={lineIndex}
                  x={0}
                  y={
                    isMobile
                      ? 15 + (lineIndex + 1) * 35
                      : 8 + (lineIndex + 1) * 14
                  }
                  textAnchor="middle"
                  fontSize={textFontSize}
                  fill="black"
                  fontFamily={defaultStyles.text.fontFamily}
                  fontWeight="600"
                  style={{ fontStretch: "condensed", fontStyle: "italic" }}
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
