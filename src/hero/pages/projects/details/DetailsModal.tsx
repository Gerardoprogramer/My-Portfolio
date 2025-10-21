

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X } from "lucide-react"
import { TechHexagon } from "@/components/custom/TechHexagon"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/hero/interfaces/Project.interface"


interface ProjectDetailModalProps {
  project: Project | null
  open: boolean
  onClose: () => void
}

export const DetailsModal = ({ project, open, onClose }: ProjectDetailModalProps) => {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0 bg-card/95 backdrop-blur-xl border-border">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-colors hover:bg-background"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Cerrar</span>
        </button>

        <ScrollArea className="max-h-[90vh]">
          <div className="relative h-64 w-full overflow-hidden">
            <img src={project.image} alt={project.title} className="object-cover border border-border rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">{project.category}</Badge>
          </div>

          <div className="p-6 space-y-6">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-card-foreground">{project.title}</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">
                {project.longDescription}
              </DialogDescription>
            </DialogHeader>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-card-foreground">Tecnologías Utilizadas</h3>
              <div className="flex flex-wrap justify-center gap-4 py-4">
                {project.technologies.map((tech, index) => (
                  <TechHexagon key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} index={index} />
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-card-foreground">Características Principales</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            {project.challenges && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-card-foreground">Desafíos</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.challenges}</p>
              </div>
            )}

            {/* Learnings */}
            {project.learnings && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-card-foreground">Aprendizajes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.learnings}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              {project.demoUrl && (
                <Button asChild className="gap-2">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Ver Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline" className="gap-2 bg-transparent">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Ver Código
                  </a>
                </Button>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
