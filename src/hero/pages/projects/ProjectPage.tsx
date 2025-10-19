
import { CustomTitle } from "@/components/custom/CustomTitle"
import { projects } from "@/hero/data/projects.data"
import { GridCards } from "./card/GridCards"

export const ProjectPage = () => {
  return (
 <div className="container mx-auto px-6 max-w-6xl">
      <div className="space-y-12">

        <CustomTitle title="Proyectos Destacados" subtitle="Cada proyecto refleja mi enfoque en crear soluciones escalables con excelente UX" />

        <GridCards projects={projects} />
      </div>
    </div>
  )
}
