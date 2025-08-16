"use client";

export default function StatsSection() {
  return (
    <section id="stats" className="py-20 relative z-10 overflow-hidden">
      <div
        className={`absolute top-10 left-10 w-32 h-32 bg-yellow-200/10 rounded-full blur-2xl opacity-40 pointer-events-none`}
      ></div>
      <div
        className={`absolute bottom-10 right-10 w-24 h-24 bg-amber-100/10 rounded-full blur-xl opacity-50 pointer-events-none`}
      ></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-primary mb-2 font-the-seasons">
              21
            </h3>
            <p className="text-primary text-lg font-garet">Días de práctica</p>
            <p className="text-primary text-lg font-garet">
              Transformación profunda
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-primary mb-2 whitespace-nowrap font-the-seasons">
              1000+
            </h3>
            <p className="text-primary text-lg font-garet">
              Personas transformadas
            </p>
            <p className="text-primary text-lg font-garet">
              Comunidad creciente
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-primary mb-2 font-the-seasons">
              100%
            </h3>
            <p className="text-primary text-lg font-garet">
              Garantía de satisfacción
            </p>
            <p className="text-primary text-lg font-garet">
              Resultados comprobados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
