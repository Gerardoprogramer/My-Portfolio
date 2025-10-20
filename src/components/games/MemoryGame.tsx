
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

type Card = {
  id: number
  tech: string
  emoji: string
  isFlipped: boolean
  isMatched: boolean
}

const technologies = [
  { tech: "React", emoji: "⚛️" },
  { tech: "Next.js", emoji: "▲" },
  { tech: "TypeScript", emoji: "📘" },
  { tech: "Node.js", emoji: "🟢" },
  { tech: "MongoDB", emoji: "🍃" },
  { tech: "Docker", emoji: "🐳" },
  { tech: "Git", emoji: "🔀" },
  { tech: "AWS", emoji: "☁️" },
]

export const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [matches, setMatches] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  const initializeGame = () => {
    const duplicatedCards = [...technologies, ...technologies]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({
        id: index,
        tech: item.tech,
        emoji: item.emoji,
        isFlipped: false,
        isMatched: false,
      }))

    setCards(duplicatedCards)
    setFlippedCards([])
    setMoves(0)
    setMatches(0)
    setGameWon(false)
  }

  useEffect(() => {
    initializeGame()
  }, [])

  useEffect(() => {
    if (matches === technologies.length) {
      setGameWon(true)
    }
  }, [matches])

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched) return

    const newCards = [...cards]
    newCards[id].isFlipped = true
    setCards(newCards)

    const newFlippedCards = [...flippedCards, id]
    setFlippedCards(newFlippedCards)

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1)
      const [firstId, secondId] = newFlippedCards

      if (cards[firstId].tech === cards[secondId].tech) {
        // Match found
        setTimeout(() => {
          const matchedCards = [...cards]
          matchedCards[firstId].isMatched = true
          matchedCards[secondId].isMatched = true
          setCards(matchedCards)
          setFlippedCards([])
          setMatches(matches + 1)
        }, 500)
      } else {
        // No match
        setTimeout(() => {
          const resetCards = [...cards]
          resetCards[firstId].isFlipped = false
          resetCards[secondId].isFlipped = false
          setCards(resetCards)
          setFlippedCards([])
        }, 1000)
      }
    }
  }

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
        <Button onClick={initializeGame} variant="outline" className="bg-gradient-to-r from-primary to-accent">
          Nuevo Juego
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-2xl">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            disabled={card.isMatched || flippedCards.length === 2}
            className={`aspect-square rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
              card.isFlipped || card.isMatched
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
