"use client";

// import { useState } from "react";
import TopicCard from "./TopicCard";
import { Button } from "@/components/ui";

export default function TopicsList() {
  const topics = [
    {
      id: 1,
      title: "Propósito y Misión",
      description:
        "Descubre tu propósito de vida y conecta con tu misión más profunda",
      isUnlocked: true,
    },
    {
      id: 2,
      title: "Abundancia y Prosperidad",
      description: "Transforma tu relación con el dinero y la abundancia",
      isUnlocked: true,
    },
    {
      id: 3,
      title: "Vínculos y Relaciones",
      description: "Sanar y transformar tus relaciones más importantes",
      isUnlocked: false,
    },
    {
      id: 4,
      title: "Energía Sexual y Creativa",
      description: "Reconecta con tu energía creativa y sexual sagrada",
      isUnlocked: false,
    },
    {
      id: 5,
      title: "Miedo y Transformación",
      description: "Transforma el miedo en poder y sabiduría",
      isUnlocked: false,
    },
    {
      id: 6,
      title: "Amor Incondicional",
      description: "Cultiva el amor incondicional hacia ti mismo y los demás",
      isUnlocked: false,
    },
    {
      id: 7,
      title: "Gratitud y Aceptación",
      description: "Practica la gratitud y acepta lo que es",
      isUnlocked: false,
    },
    {
      id: 8,
      title: "Paz Interior",
      description: "Encuentra la paz interior en medio del caos",
      isUnlocked: false,
    },
    {
      id: 9,
      title: "Sabiduría Intuitiva",
      description: "Desarrolla tu intuición y sabiduría interior",
      isUnlocked: false,
    },
    {
      id: 10,
      title: "Liberación Emocional",
      description: "Libera emociones atrapadas y sanar heridas",
      isUnlocked: false,
    },
    {
      id: 11,
      title: "Conexión Espiritual",
      description: "Profundiza tu conexión espiritual y con lo sagrado",
      isUnlocked: false,
    },
    {
      id: 12,
      title: "Manifestación Consciente",
      description: "Aprende a manifestar conscientemente tu realidad",
      isUnlocked: false,
    },
    {
      id: 13,
      title: "Autenticidad",
      description: "Vive desde tu autenticidad más profunda",
      isUnlocked: false,
    },
    {
      id: 14,
      title: "Perdón y Sanación",
      description: "Practica el perdón y la sanación profunda",
      isUnlocked: false,
    },
    {
      id: 15,
      title: "Presencia y Mindfulness",
      description: "Cultiva la presencia y el mindfulness en tu vida",
      isUnlocked: false,
    },
    {
      id: 16,
      title: "Empoderamiento",
      description: "Recupera tu poder personal y empodérate",
      isUnlocked: false,
    },
    {
      id: 17,
      title: "Comunión con la Naturaleza",
      description: "Reconecta con la naturaleza y sus ciclos",
      isUnlocked: false,
    },
    {
      id: 18,
      title: "Expansión de Conciencia",
      description: "Expande tu conciencia y percepción",
      isUnlocked: false,
    },
    {
      id: 19,
      title: "Integración Cuerpo-Mente",
      description: "Integra cuerpo, mente y espíritu",
      isUnlocked: false,
    },
    {
      id: 20,
      title: "Transformación Personal",
      description: "Completa tu proceso de transformación personal",
      isUnlocked: false,
    },
    {
      id: 21,
      title: "Iluminación Cotidiana",
      description: "Lleva la iluminación a tu vida cotidiana",
      isUnlocked: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-normal mb-2 text-center font-the-seasons title-primary">
          Mapa del Recorrido
        </h2>
        <h3 className="text-2xl font-normal mb-4 font-the-seasons title-primary">
          21 Puertas hacia tu Universo Interno
        </h3>
        <p className="text-lg mb-6 font-garet text-primary">
          Cada día es una nueva oportunidad para explorar y transformar un
          aspecto esencial de tu ser.
        </p>
      </div>

      <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8 border border-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-lg mb-6 font-garet text-primary">
          ¿Listo para comenzar tu viaje de transformación?
        </p>
        <Button variant="primary" size="lg">
          Comenzar Ahora
        </Button>
      </div>
    </div>
  );
}
