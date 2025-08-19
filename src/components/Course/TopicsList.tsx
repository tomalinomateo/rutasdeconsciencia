"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import TopicCard from "./TopicCard";

export default function TopicsList() {
  const router = useRouter();

  const topics = [
    {
      id: 1,
      title: "Día 1: El Despertar",
      description: "Lleva la iluminación a tu vida cotidiana",
      isUnlocked: false,
    },
  ];

  const handleStartJourney = () => {
    router.push("/");
  };

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
        <Button variant="primary" size="lg" onClick={handleStartJourney}>
          Comenzar Ahora
        </Button>
      </div>
    </div>
  );
}
