import type { Game } from "@/hero/interfaces/game.interface"

interface GameCardProps {
    game: Game,
    onSelect: (gameId: string) => void,
}

export const GameCard = ({ game, onSelect }: GameCardProps) => {
    return (
        <button
            onClick={() => onSelect(game.id)}
            className="group relative bg-card border border-border rounded-2xl p-8 text-left hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden"
        >
            <div
                className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />

            <div className="relative space-y-4">
                <div className="text-6xl">{game.emoji}</div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{game.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{game.description}</p>
                <div className="pt-2">
                    <span className="text-sm text-primary font-semibold group-hover:underline">Jugar ahora →</span>
                </div>
            </div>
        </button>
    )
}
