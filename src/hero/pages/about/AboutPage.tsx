import { CustomTitle } from "@/components/custom/CustomTitle"

export const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="space-y-12">

        <CustomTitle title="Sobre Mí" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              👋 ¡Hola! Soy <span className="text-foreground font-semibold">Gerardo</span>, desarrollador full stack con
              pasión por construir interfaces fluidas y sistemas sólidos.
            </p>
            <p>
              Bienvenido a mi <span className="text-primary font-semibold">Laboratorio Interactivo</span>, un espacio
              donde combino código, diseño y movimiento para crear experiencias web con propósito.
            </p>
            <p>
              Aquí no solo verás mis proyectos — <span className="text-accent font-semibold">los vivirás</span>. Cada
              sección refleja cómo pienso, diseño y soluciono problemas reales.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold">Mi Enfoque</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Backend estructurado</h4>
                  <p className="text-sm text-muted-foreground">Arquitecturas escalables y mantenibles</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Frontend animado</h4>
                  <p className="text-sm text-muted-foreground">Interfaces fluidas con atención al detalle</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Mentalidad de producto</h4>
                  <p className="text-sm text-muted-foreground">Siempre en evolución y aprendizaje</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
