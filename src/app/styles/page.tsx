"use client";

import { useState } from "react";
import { Button, Input, ProgressBar } from "@/components/ui";

export default function StylesPage() {
  const [activeTab, setActiveTab] = useState("componentes");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#fff3db] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-the-seasons mb-8 text-center text-[#fff3db]">
          Sistema Unificado de Estilos
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Button
            onClick={() => handleTabClick("componentes")}
            variant={activeTab === "componentes" ? "secondary" : "ghost"}
            size="md"
          >
            Componentes
          </Button>
          <Button
            onClick={() => handleTabClick("colores")}
            variant={activeTab === "colores" ? "secondary" : "ghost"}
            size="md"
          >
            Colores
          </Button>
          <Button
            onClick={() => handleTabClick("fonts")}
            variant={activeTab === "fonts" ? "secondary" : "ghost"}
            size="md"
          >
            Fuentes
          </Button>
        </div>

        {/* Componentes */}
        {activeTab === "componentes" && (
          <div className="space-y-12">
            <h2 className="text-2xl font-the-seasons mb-6 text-[#fff3db]">
              Librería de Componentes UI
            </h2>

            {/* Sistema Unificado de Botones */}
            <section className="space-y-6">
              <h3 className="text-xl font-garet font-semibold text-[#fff3db] border-b border-gray-700 pb-2">
                Sistema Unificado de Botones
              </h3>

              <p className="text-[#fff3db] text-lg mb-8 font-garet">
                Todos los botones del proyecto utilizan el componente Button
                unificado para mantener consistencia visual y funcional.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Variantes */}
                <div className="space-y-6">
                  <h4 className="font-garet font-semibold text-[#fff3db] border-b border-gray-700 pb-2">
                    Variantes
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-garet font-medium text-[#fff3db] mb-2">
                        Primary
                      </h5>
                      <Button variant="primary" size="md">
                        Botón Principal
                      </Button>
                    </div>
                    <div>
                      <h5 className="font-garet font-medium text-[#fff3db] mb-2">
                        Secondary
                      </h5>
                      <Button variant="secondary" size="md">
                        Botón Secundario
                      </Button>
                    </div>
                    <div>
                      <h5 className="font-garet font-medium text-[#fff3db] mb-2">
                        Text
                      </h5>
                      <Button variant="text" size="md">
                        Solo Texto
                      </Button>
                    </div>
                    <div>
                      <h5 className="font-garet font-medium text-[#fff3db] mb-2">
                        Ghost
                      </h5>
                      <Button variant="ghost" size="md">
                        Botón Fantasma
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Tamaños */}
                <div className="space-y-6">
                  <h4 className="font-garet font-semibold text-[#fff3db] border-b border-gray-700 pb-2">
                    Tamaños
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-garet font-medium text-[#fff3db] mb-2">
                        Small
                      </h5>
                      <Button variant="primary" size="sm">
                        Pequeño
                      </Button>
                    </div>
                    <div>
                      <h5 className="font-garet font-medium text-[#fff3db] mb-2">
                        Medium
                      </h5>
                      <Button variant="primary" size="md">
                        Mediano
                      </Button>
                    </div>
                    <div>
                      <h5 className="font-garet font-medium text-[#fff3db] mb-2">
                        Large
                      </h5>
                      <Button variant="primary" size="lg">
                        Grande
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Estados */}
                <div className="space-y-6">
                  <h4 className="font-garet font-semibold text-[#fff3db] border-b border-gray-700 pb-2">
                    Estados
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-garet font-medium text-[#fff3db] mb-2">
                        Normal
                      </h5>
                      <Button variant="primary" size="md">
                        Normal
                      </Button>
                    </div>
                    <div>
                      <h5 className="font-garet font-medium text-[#fff3db] mb-2">
                        Disabled
                      </h5>
                      <Button variant="primary" size="md" disabled>
                        Deshabilitado
                      </Button>
                    </div>
                    <div>
                      <h5 className="font-garet font-medium text-[#fff3db] mb-2">
                        Full Width
                      </h5>
                      <Button variant="primary" size="md" fullWidth>
                        Ancho Completo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Input Section */}
            <section className="space-y-6">
              <h3 className="text-xl font-garet font-semibold text-[#fff3db] border-b border-gray-700 pb-2">
                Campos de Texto
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Nombre" placeholder="Ingresa tu nombre" />
                <Input
                  label="Email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                />
                <Input
                  label="Campo con Error"
                  placeholder="Este campo tiene un error"
                  error="Este campo es requerido"
                />
              </div>
            </section>

            {/* Progress Bar Section */}
            <section className="space-y-6">
              <h3 className="text-xl font-garet font-semibold text-[#fff3db] border-b border-gray-700 pb-2">
                Barras de Progreso
              </h3>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-garet font-medium text-[#fff3db]">
                      Tamaño Pequeño
                    </h4>
                    <ProgressBar current={7} total={10} size="sm" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-garet font-medium text-[#fff3db]">
                      Tamaño Mediano
                    </h4>
                    <ProgressBar current={7} total={10} size="md" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-garet font-medium text-[#fff3db]">
                      Tamaño Grande
                    </h4>
                    <ProgressBar current={7} total={10} size="lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-garet font-medium text-[#fff3db]">
                      Progreso Normal
                    </h4>
                    <ProgressBar current={5} total={10} variant="default" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-garet font-medium text-[#fff3db]">
                      Progreso Exitoso
                    </h4>
                    <ProgressBar current={8} total={10} variant="success" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-garet font-medium text-[#fff3db]">
                      Progreso Advertencia
                    </h4>
                    <ProgressBar current={3} total={10} variant="warning" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Colores */}
        {activeTab === "colores" && (
          <div className="space-y-12">
            <h2 className="text-2xl font-the-seasons mb-6 text-[#fff3db]">
              Sistema Unificado de Colores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Colores Principales */}
              <div className="space-y-6">
                <h3 className="text-xl font-garet font-semibold text-[#fff3db] border-b border-gray-700 pb-2">
                  Colores Principales
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#fff3db] rounded-lg shadow-lg"></div>
                    <div>
                      <h4 className="font-garet font-medium text-[#fff3db]">
                        Primary Cream
                      </h4>
                      <p className="text-gray-400 text-sm">#fff3db</p>
                      <p className="text-gray-500 text-xs">
                        Botones principales, texto destacado
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#f59e0b] rounded-lg shadow-lg"></div>
                    <div>
                      <h4 className="font-garet font-medium text-[#fff3db]">
                        Secondary Amber
                      </h4>
                      <p className="text-gray-400 text-sm">#f59e0b</p>
                      <p className="text-gray-500 text-xs">
                        Botones secundarios, acentos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#fbbf24] rounded-lg shadow-lg"></div>
                    <div>
                      <h4 className="font-garet font-medium text-[#fff3db]">
                        Accent Yellow
                      </h4>
                      <p className="text-gray-400 text-sm">#fbbf24</p>
                      <p className="text-gray-500 text-xs">
                        Elementos de acento, highlights
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#fef3c7] rounded-lg shadow-lg"></div>
                    <div>
                      <h4 className="font-garet font-medium text-[#fff3db]">
                        Button Locked
                      </h4>
                      <p className="text-gray-400 text-sm">#fef3c7</p>
                      <p className="text-gray-500 text-xs">
                        Estado bloqueado, badges inactivos
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colores de Fondo */}
              <div className="space-y-6">
                <h3 className="text-xl font-garet font-semibold text-[#fff3db] border-b border-gray-700 pb-2">
                  Colores de Fondo
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#0f0f0f] rounded-lg shadow-lg border border-gray-700"></div>
                    <div>
                      <h4 className="font-garet font-medium text-[#fff3db]">
                        Background
                      </h4>
                      <p className="text-gray-400 text-sm">#0f0f0f</p>
                      <p className="text-gray-500 text-xs">Fondo principal</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#111827] rounded-lg shadow-lg"></div>
                    <div>
                      <h4 className="font-garet font-medium text-[#fff3db]">
                        Secondary BG
                      </h4>
                      <p className="text-gray-400 text-sm">#111827</p>
                      <p className="text-gray-500 text-xs">Fondo secundario</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colores de Estado */}
              <div className="space-y-6">
                <h3 className="text-xl font-garet font-semibold text-[#fff3db] border-b border-gray-700 pb-2">
                  Colores de Estado
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-green-500 rounded-lg shadow-lg"></div>
                    <div>
                      <h4 className="font-garet font-medium text-[#fff3db]">
                        Success
                      </h4>
                      <p className="text-gray-400 text-sm">#10b981</p>
                      <p className="text-gray-500 text-xs">Éxito, completado</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-red-500 rounded-lg shadow-lg"></div>
                    <div>
                      <h4 className="font-garet font-medium text-[#fff3db]">
                        Error
                      </h4>
                      <p className="text-gray-400 text-sm">#ef4444</p>
                      <p className="text-gray-500 text-xs">Error, alerta</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-yellow-500 rounded-lg shadow-lg"></div>
                    <div>
                      <h4 className="font-garet font-medium text-[#fff3db]">
                        Warning
                      </h4>
                      <p className="text-gray-400 text-sm">#f59e0b</p>
                      <p className="text-gray-500 text-xs">Advertencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Variables CSS */}
            <div className="mt-12 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 className="text-xl font-garet font-semibold text-[#fff3db] mb-4">
                Variables CSS del Sistema Unificado
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-garet font-medium text-[#fff3db] mb-2">
                    Colores Principales
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>
                      <code>--primary-cream: #fff3db</code>
                    </li>
                    <li>
                      <code>--secondary-amber: #f59e0b</code>
                    </li>
                    <li>
                      <code>--accent-yellow: #fbbf24</code>
                    </li>
                    <li>
                      <code>--button-locked: #fef3c7</code>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-garet font-medium text-[#fff3db] mb-2">
                    Fondos y Texto
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>
                      <code>--background-primary: #0f0f0f</code>
                    </li>
                    <li>
                      <code>--background-secondary: #111827</code>
                    </li>
                    <li>
                      <code>--text-primary: #fff3db</code>
                    </li>
                    <li>
                      <code>--text-secondary: #9ca3af</code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fonts */}
        {activeTab === "fonts" && (
          <div className="space-y-12">
            <h2 className="text-2xl font-the-seasons mb-6 text-[#fff3db]">
              Sistema de Tipografía Unificado
            </h2>

            {/* The Seasons Font */}
            <section className="space-y-6">
              <h3 className="text-xl font-garet font-semibold text-[#fff3db] border-b border-gray-700 pb-2">
                The Seasons - Fuente Principal
              </h3>
              <p className="text-gray-300 text-base">
                Fuente elegante y espiritual utilizada para títulos principales
                y elementos destacados
              </p>

              <div className="grid gap-6">
                {/* Regular */}
                <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <h4 className="font-garet font-medium text-[#fff3db] mb-4">
                    Regular (Normal)
                  </h4>
                  <div className="space-y-4">
                    <div className="font-the-seasons text-4xl text-[#fff3db]">
                      Título Principal
                    </div>
                    <div className="font-the-seasons text-2xl text-[#fff3db]">
                      Subtítulo Elegante
                    </div>
                    <div className="font-the-seasons text-lg text-gray-300">
                      Texto de ejemplo con The Seasons
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
                    <p className="text-sm text-gray-400 font-mono">
                      Clase CSS: <code>font-the-seasons</code>
                    </p>
                    <p className="text-sm text-gray-400 font-mono">
                      Archivo: <code>/fonts/the-seasons/</code>
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <h4 className="font-garet font-medium text-[#fff3db] mb-4">
                    Bold (Negrita)
                  </h4>
                  <div className="space-y-4">
                    <div className="font-the-seasons font-bold text-4xl text-[#fff3db]">
                      Título Principal
                    </div>
                    <div className="font-the-seasons font-bold text-2xl text-[#fff3db]">
                      Subtítulo Elegante
                    </div>
                    <div className="font-the-seasons font-bold text-lg text-gray-300">
                      Texto de ejemplo con The Seasons
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
                    <p className="text-sm text-gray-400 font-mono">
                      Clase CSS: <code>font-the-seasons font-bold</code>
                    </p>
                  </div>
                </div>

                {/* Italic */}
                <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <h4 className="font-garet font-medium text-[#fff3db] mb-4">
                    Italic (Cursiva)
                  </h4>
                  <div className="space-y-4">
                    <div className="font-the-seasons italic text-3xl text-[#fff3db]">
                      Título Principal
                    </div>
                    <div className="font-the-seasons italic text-lg text-gray-300">
                      Texto de ejemplo con The Seasons
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
                    <p className="text-sm text-gray-400 font-mono">
                      Clase CSS: <code>font-the-seasons italic</code>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Garet Font */}
            <section className="space-y-6">
              <h3 className="text-xl font-garet font-semibold text-[#fff3db] border-b border-gray-700 pb-2">
                Garet - Fuente Secundaria
              </h3>
              <p className="text-gray-300 text-base">
                Fuente moderna y legible utilizada para texto del cuerpo,
                botones y elementos de interfaz
              </p>

              <div className="grid gap-6">
                {/* Regular */}
                <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <h4 className="font-garet font-medium text-[#fff3db] mb-4">
                    Regular (Normal)
                  </h4>
                  <div className="space-y-4">
                    <div className="font-garet text-2xl text-[#fff3db]">
                      Título Secundario
                    </div>
                    <div className="font-garet text-lg text-[#fff3db]">
                      Texto del cuerpo principal
                    </div>
                    <div className="font-garet text-base text-gray-300">
                      Texto de ejemplo con Garet
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
                    <p className="text-sm text-gray-400 font-mono">
                      Clase CSS: <code>font-garet</code>
                    </p>
                    <p className="text-sm text-gray-400 font-mono">
                      Archivo: <code>/fonts/garet/</code>
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <h4 className="font-garet font-medium text-[#fff3db] mb-4">
                    Bold (Negrita)
                  </h4>
                  <div className="space-y-4">
                    <div className="font-garet font-bold text-2xl text-[#fff3db]">
                      Título Secundario
                    </div>
                    <div className="font-garet font-bold text-lg text-[#fff3db]">
                      Texto del cuerpo principal
                    </div>
                    <div className="font-garet font-bold text-base text-gray-300">
                      Texto de ejemplo con Garet
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
                    <p className="text-sm text-gray-400 font-mono">
                      Clase CSS: <code>font-garet font-bold</code>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Usage Guidelines */}
            <section className="space-y-6">
              <h3 className="text-xl font-garet font-semibold text-[#fff3db] border-b border-gray-700 pb-2">
                Guías de Uso
              </h3>
              <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                <h4 className="font-garet font-medium text-[#fff3db] mb-4">
                  Cuándo usar cada fuente
                </h4>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h5 className="font-garet font-medium text-[#fff3db] mb-2">
                      The Seasons
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Títulos principales (h1, h2)</li>
                      <li>Elementos destacados</li>
                      <li>Logos y branding</li>
                      <li>Elementos espirituales</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-garet font-medium text-[#fff3db] mb-2">
                      Garet
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Texto del cuerpo</li>
                      <li>Botones y elementos UI</li>
                      <li>Subtítulos (h3, h4, h5, h6)</li>
                      <li>Navegación y menús</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
