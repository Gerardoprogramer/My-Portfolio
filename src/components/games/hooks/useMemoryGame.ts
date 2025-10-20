import {useState, useEffect} from 'react'
import { technologies } from '../data/technologies.data'
import type {Card} from '../interface/CardMemoryGame.interface'
import confetti from 'canvas-confetti';

export const useMemoryGame = () => {

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
      confetti({
        particleCount: 100,
        spread: 120,
        origin: { y: 0.6 },
      });
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
  return {
    handleCardClick,
    gameWon,
    moves,
    matches,
    cards,
    technologies,
    initializeGame,
    flippedCards
  }
}