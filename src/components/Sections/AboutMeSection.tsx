"use client";

import { defaultStyles } from "@/lib/defaultStyles";

export default function AboutMeSection() {
  const getAccentColor = () => {
    return defaultStyles.colors.accent;
  };

  return (
    <section id="sobre-mi" className="py-20 relative z-10 overflow-hidden">
      <div
        className={`absolute top-10 right-10 w-32 h-32 bg-yellow-200/10 rounded-full blur-2xl opacity-40 pointer-events-none`}
      ></div>
      <div
        className={`absolute bottom-10 left-10 w-24 h-24 bg-amber-100/10 rounded-full blur-xl opacity-50 pointer-events-none`}
      ></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold ${defaultStyles.colors.primary} mb-4 font-the-seasons`}
          >
            Sobre mí
          </h2>
          <p className="text-primary text-lg mb-8 font-garet">
            Soy una facilitadora de procesos de transformación consciente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3
              className={`text-2xl font-bold ${defaultStyles.colors.primary} font-the-seasons`}
            >
              Mi enfoque
            </h3>
            <p className="text-primary text-lg font-garet">
              Creo en el poder de la meditación y las prácticas conscientes para
              transformar nuestra realidad desde adentro hacia afuera.
            </p>
            <div className="space-y-4">
              <p className="text-primary font-garet">
                <strong className="text-primary">
                  Mi misión es acompañarte en tu viaje de autodescubrimiento,
                </strong>{" "}
                proporcionándote herramientas prácticas y meditaciones guiadas
                que te ayuden a conectar con tu esencia más profunda.
              </p>
              <p className="text-primary font-garet">
                <strong className="text-primary">
                  A través de este programa de 21 días,
                </strong>{" "}
                te invito a explorar las dimensiones más profundas de tu ser,
                reprogramar patrones limitantes y abrirte a nuevas posibilidades
                de vida.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/retornoalorigen__"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg hover:${getAccentColor()} transition-colors text-primary hover:text-current font-the-seasons`}
              >
                @retornoalorigen__
              </a>
            </div>
          </div>

          <div className="space-y-4 text-primary font-garet">
            <h3
              className={`text-2xl font-bold ${defaultStyles.colors.primary} font-the-seasons`}
            >
              Mi experiencia
            </h3>
            <div className="space-y-4">
              <p className="text-lg font-medium text-primary italic font-garet">
                "He acompañado a cientos de personas en sus procesos de
                transformación, y he visto cómo la práctica consciente puede
                cambiar vidas de manera profunda y duradera."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
