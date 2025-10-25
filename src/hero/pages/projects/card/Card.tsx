import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/hero/interfaces/Project.interface"

interface CardProps{
    project: Project,
    onClick: () => void
}

export const Card = ({ project, onClick }: CardProps) => {
    return (
        <div
            key={project.title}
            className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            onClick={onClick}
        >
            <div className="relative aspect-video overflow-hidden bg-secondary">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech.name} variant="secondary" className="text-xs">
              <span className="mr-1">{tech.icon}</span>
              {tech.name}
            </Badge>
          ))}
                </div>

                <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                        </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <Github className="w-4 h-4 mr-2" />
                            Código
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
