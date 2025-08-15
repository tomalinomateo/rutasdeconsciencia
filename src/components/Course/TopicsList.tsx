"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

interface Topic {
  id: number;
  title: string;
  description: string;
  isUnlocked: boolean;
}

const topics: Topic[] = [
  {
    id: 1,
    title: "Vínculo Materno",
    description: "Explora y sana tu conexión con la energía materna",
    isUnlocked: true,
  },
  {
    id: 2,
    title: "Vínculo Paterno",
    description: "Reconecta con la energía paterna y su sabiduría",
    isUnlocked: false,
  },
  {
    id: 3,
    title: "Vínculo con mi niño",
    description: "Abraza y sana tu niño interior",
    isUnlocked: false,
  },
  {
    id: 4,
    title: "Auto-Vínculo",
    description: "Fortalece tu conexión contigo mismo",
    isUnlocked: false,
  },
  {
    id: 5,
    title: "Vínculo con los demás",
    description: "Cultiva relaciones más conscientes y amorosas",
    isUnlocked: false,
  },
  {
    id: 6,
    title: "Mi cuerpo",
    description: "Reconecta con la sabiduría de tu cuerpo",
    isUnlocked: false,
  },
  {
    id: 7,
    title: "Creencias",
    description: "Identifica y transforma creencias limitantes",
    isUnlocked: false,
  },
  {
    id: 8,
    title: "Emociones",
    description: "Aprende a navegar tus emociones con consciencia",
    isUnlocked: false,
  },
  {
    id: 9,
    title: "El miedo",
    description: "Transforma el miedo en poder y sabiduría",
    isUnlocked: false,
  },
  {
    id: 10,
    title: "La sombra",
    description: "Integra y abraza tus aspectos sombríos",
    isUnlocked: false,
  },
  {
    id: 11,
    title: "Mi propio brillo",
    description: "Descubre y manifiesta tu luz interior",
    isUnlocked: false,
  },
  {
    id: 12,
    title: "El deseo",
    description: "Conecta con tus deseos más profundos",
    isUnlocked: false,
  },
  {
    id: 13,
    title: "Energía sexual y creativa",
    description: "Despierta tu poder creativo y sexual",
    isUnlocked: false,
  },
  {
    id: 14,
    title: "La abundancia",
    description: "Abrete al flujo de la abundancia universal",
    isUnlocked: false,
  },
  {
    id: 15,
    title: "El propósito",
    description: "Descubre tu misión de vida",
    isUnlocked: false,
  },
  {
    id: 16,
    title: "Guías y seres desencarnados",
    description: "Conecta con tus guías espirituales",
    isUnlocked: false,
  },
  {
    id: 17,
    title: "La rendición",
    description: "Aprende a rendirte al flujo de la vida",
    isUnlocked: false,
  },
  {
    id: 18,
    title: "Los cuerpos sutiles",
    description: "Explora tus cuerpos energéticos",
    isUnlocked: false,
  },
  {
    id: 19,
    title: "La gratitud",
    description: "Cultiva la gratitud como práctica transformadora",
    isUnlocked: false,
  },
  {
    id: 20,
    title: "Amor incondicional",
    description: "Despierta el amor incondicional en tu corazón",
    isUnlocked: false,
  },
  {
    id: 21,
    title: "Morir para renacer",
    description: "Completa el ciclo de transformación",
    isUnlocked: false,
  },
];

export default function TopicsList() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-normal mb-8 text-center font-the-seasons title-primary">
        Las 21 Temáticas
      </h2>

      <div className="grid gap-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className={`p-6 rounded-lg border transition-all duration-300 ${
              topic.isUnlocked
                ? "bg-success/20 border-success/30 hover:bg-success/30 cursor-pointer"
                : "bg-secondary/50 border-secondary/30 hover:bg-secondary/70 cursor-default"
            }`}
            onClick={() => topic.isUnlocked && setSelectedTopic(topic)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    topic.isUnlocked
                      ? "bg-success text-white"
                      : "bg-secondary text-muted"
                  }`}
                >
                  {topic.id}
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-lg font-medium mb-1 font-garet ${
                      topic.isUnlocked ? "text-success" : "text-muted"
                    }`}
                  >
                    {topic.title}
                  </h3>
                  <p
                    className={`text-sm font-garet ${
                      topic.isUnlocked ? "text-success" : "text-muted"
                    }`}
                  >
                    {topic.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                {topic.isUnlocked ? (
                  <span className="text-success text-sm font-medium font-garet">
                    Disponible
                  </span>
                ) : (
                  <div className="relative">
                    <div className="flex items-center justify-center w-8 h-8">
                      <Lock size={20} className="text-muted" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Purchase CTA */}
      <div className="mt-12 text-center">
        <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8 border border-secondary">
          <h3 className="text-2xl font-normal mb-4 font-the-seasons title-primary">
            Desbloquea todo el contenido
          </h3>
          <p className="text-lg mb-6 font-garet text-primary">
            Accede a las 21 temáticas completas y transforma tu vida
          </p>
          <button className="px-8 py-3 rounded-lg font-medium font-garet btn-secondary">
            Comprar curso completo
          </button>
        </div>
      </div>
    </div>
  );
}
