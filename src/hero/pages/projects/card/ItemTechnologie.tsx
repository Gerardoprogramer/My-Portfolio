import { Badge } from "@/components/ui/badge"
import type { Technology } from '@/hero/interfaces/Project.interface'
import { skillPaths } from "@/hero/data/skillPaths"

interface Props {
    technology: Technology
}


export const ItemTechnologie = ({ technology }: Props) => {

    return (
        <Badge key={technology.name} variant="secondary" className="text-xs">
                                <svg
                                    viewBox={`${technology.name === "C#" ? "0 0 15 15" : technology.name === "Arquitectura en capas" ? "0 0 32 32" : "0 0 24 24"}`}
                                    fill="currentColor"
                                    className="
                                        w-6 h-6
                                        text-primary
                                        drop-shadow-[0_0_6px_theme(colors.primary.DEFAULT)]
                                        group-hover:drop-shadow-[0_0_14px_theme(colors.primary.DEFAULT)]
                                        transition-all
                                    "
                                >
                                    <path d={skillPaths[technology.icon]} />
                                </svg>
            {technology.name}
        </Badge>
    )
}
