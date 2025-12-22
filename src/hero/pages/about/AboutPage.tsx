import { CustomTitle } from "@/components/custom/CustomTitle"

export const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="space-y-12">

        <CustomTitle title="Sobre Mí" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              👋 Hola, soy <span className="text-foreground font-semibold">Gerardo</span>,
              desarrollador <span className="text-primary font-semibold">Full Stack</span> con experiencia
              construyendo aplicaciones web modernas, escalables y orientadas a producto.
            </p>

            <p>
              Trabajo tanto en <span className="text-foreground font-semibold">frontend</span> como en
              <span className="text-foreground font-semibold"> backend</span>, integrando APIs,
              gestionando bases de datos y creando interfaces claras, rápidas y mantenibles.
            </p>

            <p>
              Me enfoco en escribir código limpio, resolver problemas reales y mejorar continuamente
              la calidad técnica y la experiencia del usuario.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold">Mi enfoque</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Backend sólido</h4>
                  <p className="text-sm text-muted-foreground">
                    APIs bien estructuradas, bases de datos y arquitecturas mantenibles
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Frontend moderno</h4>
                  <p className="text-sm text-muted-foreground">
                    Interfaces responsivas, animaciones sutiles y buena experiencia de usuario
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Enfoque profesional</h4>
                  <p className="text-sm text-muted-foreground">
                    Aprendizaje constante, buenas prácticas y mentalidad de crecimiento
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
