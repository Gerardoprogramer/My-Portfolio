import { lazy } from "react"
import type { Game } from "../interfaces/game.interface"

const SnakeGame = lazy(() => import("@/components/games/SnakeGame").then((mod) => ({ default: mod.SnakeGame })))
const MemoryGame = lazy(() => import("@/components/games/MemoryGame").then((mod) => ({ default: mod.MemoryGame })))
const TypingGame = lazy(() => import("@/components/games/TypingGame").then((mod) => ({ default: mod.TypingGame })))

export const games: Game[] = [
  {
    id: "snake",
    title: "Snake Game",
    description: "Clásico juego de la serpiente con controles modernos",
    emoji: "🐍",
    color: "from-green-500 to-emerald-500",
    component: SnakeGame,
  },
  {
    id: "memory",
    title: "Memory Cards",
    description: "Pon a prueba tu memoria con tecnologías",
    emoji: "🧠",
    color: "from-purple-500 to-pink-500",
    component: MemoryGame,
  },
  {
    id: "typing",
    title: "Typing Speed",
    description: "Mide tu velocidad de escritura de código",
    emoji: "⌨️",
    color: "from-blue-500 to-cyan-500",
    component: TypingGame,
  },
]