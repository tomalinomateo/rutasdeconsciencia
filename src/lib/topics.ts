export interface Topic {
  id: number;
  title: string;
  description: string;
  isUnlocked: boolean;
}

export const topics: Topic[] = [
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

// Helper functions for working with topics
export const getTopicById = (id: number): Topic | undefined => {
  return topics.find((topic) => topic.id === id);
};

export const getUnlockedTopics = (): Topic[] => {
  return topics.filter((topic) => topic.isUnlocked);
};

export const getTotalTopics = (): number => {
  return topics.length;
};

export const getUnlockedTopicsCount = (): number => {
  return topics.filter((topic) => topic.isUnlocked).length;
};
