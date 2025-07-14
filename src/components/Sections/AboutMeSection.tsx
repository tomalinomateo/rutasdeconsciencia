"use client";

import { motion } from "framer-motion";
import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";

export default function AboutMeSection() {
  const { currentStyle } = useStyle();
  const { fontClass } = useFontClass();

  // Función para obtener el color del título principal
  const getTitleColor = () => {
    if (currentStyle.id === "silver-forest") {
      return "text-emerald-400";
    }
    return currentStyle.colors.primary;
  };

  // Función para obtener el color del accent
  const getAccentColor = () => {
    if (currentStyle.id === "silver-forest") {
      return "text-green-300";
    }
    return currentStyle.colors.accent;
  };

  return (
    <section id="maria-cruz" className="py-10 relative z-10 overflow-hidden">
      <div
        className={`absolute top-12 right-12 w-40 h-40 bg-gradient-radial ${currentStyle.colors.primary}/10 to-transparent rounded-full blur-2xl opacity-35 pointer-events-none`}
      ></div>
      <div
        className={`absolute bottom-12 left-12 w-32 h-32 bg-gradient-radial ${currentStyle.colors.accent}/10 to-transparent rounded-full blur-2xl opacity-40 pointer-events-none`}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold ${getTitleColor()} mb-4`}
            style={fontClass.title}
          >
            ¿Quién soy?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-96 rounded-3xl shadow-2xl shadow-rose-900/50 relative overflow-hidden">
              <img
                src="/cruz.jpeg"
                alt="María Cruz - Alquimia Raiz"
                className="w-full h-full object-cover object-center rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <h3
                className={`text-2xl font-bold ${currentStyle.colors.secondary}`}
                style={fontClass.title}
              >
                María Cruz -
              </h3>
              <a
                href="https://www.instagram.com/retornoalorigen__/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg hover:${getAccentColor()} transition-colors text-gray-400 hover:text-current`}
                style={fontClass.title}
              >
                @retornoalorigen__
              </a>
            </div>
            <div className="space-y-4 text-white" style={fontClass.text}>
              <p className="text-lg">
                Me llamo María Cruz, nací en Córdoba, Argentina, y desde muy
                chica sentí que había una fuerza más grande que me sostenía.
              </p>
              <p className="text-lg">
                Hasta que a los 19, viajando sola por primera vez, empecé a
                incomodarme por dentro. Lo que había callado por años empezó a
                pedirme paso. Ese fue el inicio de mi búsqueda. Mi primer gran
                despertar.
              </p>
              <p className="text-lg">
                Estudié Psicología, pero sentía que algo faltaba. Que el alma no
                estaba incluida. Así empecé a explorar otras herramientas:{" "}
                <strong className="text-white">
                  Mindfulness, Reiki, Registros Akáshicos
                </strong>
                , y otras disciplinas que integraran lo mental, lo emocional, lo
                corporal y lo espiritual.
              </p>
              <p className="text-lg">
                Hoy acompaño procesos desde mi recorrido, mis heridas, mis
                aprendizajes, pero sobre todo, desde mi ser.{" "}
                <strong className="text-white">
                  No creo en fórmulas mágicas, creo en el trabajo amoroso con
                  uno mismo.
                </strong>
              </p>
            </div>
            <div
              className="mt-8 p-6 rounded-2xl border-2 bg-white/10 backdrop-blur-sm"
              style={{
                borderColor:
                  currentStyle.id === "champagne-beige" ? "#fef3c7" : "#fde68a",
              }}
            >
              <p
                className="text-lg font-medium text-white italic"
                style={fontClass.text}
              >
                &quot;Si hoy estás en esa búsqueda, quiero acompañarte a que vos
                también puedas recordar quién sos.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
