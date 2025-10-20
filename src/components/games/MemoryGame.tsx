import { Button } from "../ui/button";
import { useMemoryGame } from "./hooks/useMemoryGame"

export const MemoryGame = () => {

  const { gameWon, handleCardClick, matches, moves, cards, technologies, flippedCards, initializeGame } = useMemoryGame();

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="flex items-center justify-between w-full max-w-2xl">
        <div className="space-y-1">
          <div className="text-lg font-semibold">
            Movimientos: <span className="text-primary">{moves}</span>
          </div>
          <div className="text-lg font-semibold">
            Parejas:{" "}
            <span className="text-accent">
              {matches}/{technologies.length}
            </span>
          </div>
        </div>
        <Button onClick={initializeGame} variant="outline" className="bg-accent/70">
          Nuevo Juego
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-2xl">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            disabled={card.isMatched || flippedCards.length === 2}
            className={`aspect-square rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${card.isFlipped || card.isMatched
              ? "bg-gradient-to-br from-primary to-accent border-primary"
              : "bg-card border-border hover:border-primary"
              } ${card.isMatched ? "opacity-50" : ""}`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              {card.isFlipped || card.isMatched ? (
                <>
                  <div className="text-4xl mb-2">{card.emoji}</div>
                  <div className="text-xs font-semibold text-white">{card.tech}</div>
                </>
              ) : (
                <div className="text-4xl">❓</div>
              )}
            </div>
          </button>
        ))}
      </div>

      {gameWon && (
        <div className="text-center space-y-4 p-6 bg-card border border-primary rounded-xl">
          <div className="text-3xl font-bold text-primary">¡Felicidades! 🎉</div>
          <p className="text-muted-foreground">Completaste el juego en {moves} movimientos</p>
          <Button onClick={initializeGame} size="lg" className="bg-gradient-to-r from-primary to-accent">
            Jugar de nuevo
          </Button>
        </div>
      )}
    </div>
  )
}
