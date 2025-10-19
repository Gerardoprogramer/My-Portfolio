import { CustomTitle } from "@/components/custom/CustomTitle"
import { DecorativeButton } from "./decoratives/DecorativeButton"
import { lazy } from "react"

const SnakeGame = lazy(() => import("@/components/games/SnakeGame").then((mod) => ({ default: mod.SnakeGame })))

export const PlaygroundPage = () => {
    return (
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="space-y-12">
                <CustomTitle
                    title="Playground Labs"
                    subtitle=" Explora mis experimentos interactivos. Aquí combino código y diversión para crear experiencias únicas."
                    type="centered"
                    zone="Zona Experimental"
                />

                <DecorativeButton title="Explora mis proyectos como un juego" />

            </div>
        </div>
    )
}
