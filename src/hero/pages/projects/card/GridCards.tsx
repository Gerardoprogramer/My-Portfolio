
import type { Project } from "@/hero/interfaces/Project.interface"
import { Card } from "./Card"
import { useState } from "react"
import { DetailsModal } from "../details/DetailsModal"

export const GridCards = ({ projects }: { projects: Project[] }) => {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }


  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.title} project={project} onClick={() => handleProjectClick(project)} />
      ))}

       <DetailsModal project={selectedProject} open={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
