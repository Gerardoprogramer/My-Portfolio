
import { CustomTitle } from "@/components/custom/CustomTitle"
import { projects } from "@/hero/data/projects.data"
import { GridCards } from "./card/GridCards"
import { Github } from "lucide-react"

export const ProjectPage = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="space-y-12">

        <CustomTitle title="Proyectos Destacados" subtitle="Cada proyecto refleja mi enfoque en crear soluciones escalables con excelente UX" />

        <GridCards projects={projects} />

        <div className="text-center mt-12">
          <a
            href="https://github.com/Gerardoprogramer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary bg-primary/10 text-secundary font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-primary/20 hover:scale-105 hover:shadow-[var(--shadow-neon)]"
          >
            <Github className="w-5 h-5" />
            Ver todos los proyectos en GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
