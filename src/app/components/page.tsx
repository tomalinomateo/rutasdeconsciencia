"use client";

import React, { useState } from "react";
import {
  Button,
  Input,
  AudioPlayer,
  ExerciseCard,
  EpisodeCard,
  ProgressBar,
} from "@/components/ui";

export default function ComponentsPage() {
  const [inputValue, setInputValue] = useState("");
  const [progress, setProgress] = useState(3);

  return (
    <div className="min-h-screen bg-background text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-garet font-bold text-4xl text-primary">
            Librería de Componentes
          </h1>
          <p className="font-garet text-gray-400 text-lg max-w-2xl mx-auto">
            Componentes reutilizables diseñados para tu aplicación de meditación
            y conciencia
          </p>
        </div>

        {/* Buttons Section */}
        <section className="space-y-6">
          <h2 className="font-garet font-semibold text-2xl text-white border-b border-gray-700 pb-2">
            Botones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-garet font-medium text-lg text-gray-300">
                Botón Primario
              </h3>
              <div className="space-y-2">
                <Button size="sm">Pequeño</Button>
                <Button size="md">Mediano</Button>
                <Button size="lg">Grande</Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-garet font-medium text-lg text-gray-300">
                Botón Secundario
              </h3>
              <div className="space-y-2">
                <Button variant="secondary" size="sm">
                  Pequeño
                </Button>
                <Button variant="secondary" size="md">
                  Mediano
                </Button>
                <Button variant="secondary" size="lg">
                  Grande
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-garet font-medium text-lg text-gray-300">
                Botón Texto
              </h3>
              <div className="space-y-2">
                <Button variant="text" size="sm">
                  Pequeño
                </Button>
                <Button variant="text" size="md">
                  Mediano
                </Button>
                <Button variant="text" size="lg">
                  Grande
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Input Section */}
        <section className="space-y-6">
          <h2 className="font-garet font-semibold text-2xl text-white border-b border-gray-700 pb-2">
            Campos de Texto
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Nombre"
              placeholder="Ingresa tu nombre"
              value={inputValue}
              onChange={setInputValue}
            />

            <Input
              label="Email"
              type="email"
              placeholder="tu@email.com"
              required
            />

            <Input label="Contraseña" type="password" placeholder="••••••••" />

            <Input
              label="Campo con Error"
              placeholder="Este campo tiene un error"
              error="Este campo es requerido"
            />
          </div>
        </section>

        {/* Audio Player Section */}
        <section className="space-y-6">
          <h2 className="font-garet font-semibold text-2xl text-white border-b border-gray-700 pb-2">
            Reproductor de Audio
          </h2>

          <div className="max-w-md">
            <AudioPlayer
              src="/audio/meditation-example.mp3"
              title="Meditación Guiada - Respiración Consciente"
              duration="15:30"
            />
          </div>
        </section>

        {/* Exercise Cards Section */}
        <section className="space-y-6">
          <h2 className="font-garet font-semibold text-2xl text-white border-b border-gray-700 pb-2">
            Tarjetas de Ejercicios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExerciseCard
              title="Respiración Cuadrada"
              description="Una técnica de respiración que ayuda a calmar la mente y reducir el estrés mediante respiraciones controladas."
              duration="10 min"
              difficulty="beginner"
              category="Respiración"
              onClick={() => console.log("Ejercicio iniciado")}
            />

            <ExerciseCard
              title="Escaneo Corporal"
              description="Recorre mentalmente tu cuerpo para identificar tensiones y aprender a relajarte conscientemente."
              duration="20 min"
              difficulty="intermediate"
              category="Atención Plena"
              isCompleted={true}
              onClick={() => console.log("Ejercicio completado")}
            />

            <ExerciseCard
              title="Meditación de Amor Bondadoso"
              description="Desarrolla compasión hacia ti mismo y hacia los demás a través de esta práctica meditativa."
              duration="30 min"
              difficulty="advanced"
              category="Compasión"
              onClick={() => console.log("Ejercicio iniciado")}
            />
          </div>
        </section>

        {/* Episode Cards Section */}
        <section className="space-y-6">
          <h2 className="font-garet font-semibold text-2xl text-white border-b border-gray-700 pb-2">
            Tarjetas de Episodios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EpisodeCard
              title="Introducción a la Meditación"
              description="Aprende los fundamentos básicos de la meditación y cómo comenzar tu práctica diaria."
              duration="15 min"
              episodeNumber={1}
              onClick={() => console.log("Episodio iniciado")}
            />

            <EpisodeCard
              title="Técnicas de Respiración"
              description="Explora diferentes técnicas de respiración para mejorar tu bienestar y concentración."
              duration="20 min"
              episodeNumber={2}
              isCompleted={true}
              onClick={() => console.log("Episodio completado")}
            />

            <EpisodeCard
              title="Meditación Avanzada"
              description="Prácticas avanzadas para profundizar en tu experiencia meditativa."
              duration="45 min"
              episodeNumber={3}
              isLocked={true}
              onClick={() => console.log("Episodio bloqueado")}
            />
          </div>
        </section>

        {/* Progress Bar Section */}
        <section className="space-y-6">
          <h2 className="font-garet font-semibold text-2xl text-white border-b border-gray-700 pb-2">
            Barras de Progreso
          </h2>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-garet font-medium text-lg text-gray-300">
                Progreso de Meditaciones
              </h3>
              <div className="space-y-4">
                <ProgressBar
                  current={progress}
                  total={10}
                  label="Meditaciones Completadas"
                  size="lg"
                />

                <div className="flex space-x-4">
                  <Button
                    size="sm"
                    onClick={() => setProgress(Math.max(0, progress - 1))}
                    disabled={progress === 0}
                  >
                    -
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setProgress(Math.min(10, progress + 1))}
                    disabled={progress === 10}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-garet font-medium text-gray-300">
                  Tamaño Pequeño
                </h4>
                <ProgressBar current={7} total={10} size="sm" />
              </div>

              <div className="space-y-2">
                <h4 className="font-garet font-medium text-gray-300">
                  Tamaño Mediano
                </h4>
                <ProgressBar current={7} total={10} size="md" />
              </div>

              <div className="space-y-2">
                <h4 className="font-garet font-medium text-gray-300">
                  Tamaño Grande
                </h4>
                <ProgressBar current={7} total={10} size="lg" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-garet font-medium text-gray-300">
                  Progreso Normal
                </h4>
                <ProgressBar current={5} total={10} variant="default" />
              </div>

              <div className="space-y-2">
                <h4 className="font-garet font-medium text-gray-300">
                  Progreso Exitoso
                </h4>
                <ProgressBar current={8} total={10} variant="success" />
              </div>

              <div className="space-y-2">
                <h4 className="font-garet font-medium text-gray-300">
                  Progreso Advertencia
                </h4>
                <ProgressBar current={3} total={10} variant="warning" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
