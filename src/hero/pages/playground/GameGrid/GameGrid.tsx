import type { Game } from "@/hero/interfaces/game.interface"
import { GameCard } from "./GameCard"

interface GameGridProps {
    games: Game[],
    onSelectGame: (game: Game) => void,

}

export const GameGrid = ({ games, onSelectGame }: GameGridProps) => {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {games.map((game) => (
                <GameCard
                    key={game.id}
                    game={game}
                    onSelect={() => onSelectGame(game)}
                />
            ))}
        </div>
    )
}
