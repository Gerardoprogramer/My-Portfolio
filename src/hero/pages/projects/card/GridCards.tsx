
import type { project } from "@/hero/interfaces/Project.interface"
import { Card } from "./Card"

export const GridCards = ({ projects }: { projects: project[] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card key={project.title} project={project} />
      ))}
    </div>
  )
}
