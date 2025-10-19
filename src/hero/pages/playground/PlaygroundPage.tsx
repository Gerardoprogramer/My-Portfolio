import { CustomTitle } from "@/components/custom/CustomTitle"
import { DecorativeButton } from "./decoratives/DecorativeButton"
import { games } from "@/hero/data/games.data"
import { useState } from "react"
import { GameGrid } from "./GameGrid/GameGrid"
import type { Game } from "@/hero/interfaces/game.interface"


export const PlaygroundPage = () => {

    const [selectedGame, setSelectedGame] = useState<string | null>(null)

    const currentGame = games.find((g) => g.id === selectedGame)
    const GameComponent = currentGame?.component

    const handleSelectGame = (game: Game) => {
        setSelectedGame(game.id)
    }

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

                <GameGrid
                    games={games}
                    onSelectGame={handleSelectGame}
                />

            </div>
        </div>
    )
}
