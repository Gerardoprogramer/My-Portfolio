
import { useEffect, useRef, useState, useCallback } from "react"

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT"
type Position = { x: number; y: number }

export const useSnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  const gridSize = 20
  const tileCount = 20

  const snake = useRef<Position[]>([{ x: 10, y: 10 }])
  const direction = useRef<Direction>("RIGHT")
  const food = useRef<Position>({ x: 15, y: 15 })
  const gameLoop = useRef<ReturnType<typeof setTimeout>>(null)

  const generateFood = useCallback(() => {
    food.current = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount),
    }
  }, [])

  const resetGame = useCallback(() => {
    snake.current = [{ x: 10, y: 10 }]
    direction.current = "RIGHT"
    generateFood()
    setScore(0)
    setGameOver(false)
    setGameStarted(true)
  }, [generateFood])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = "#0a0a0a"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid
    ctx.strokeStyle = "#1a1a1a"
    ctx.lineWidth = 1
    for (let i = 0; i <= tileCount; i++) {
      ctx.beginPath()
      ctx.moveTo(i * gridSize, 0)
      ctx.lineTo(i * gridSize, canvas.height)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(0, i * gridSize)
      ctx.lineTo(canvas.width, i * gridSize)
      ctx.stroke()
    }

    // Draw snake
    snake.current.forEach((segment, index) => {
      const gradient = ctx.createLinearGradient(
        segment.x * gridSize,
        segment.y * gridSize,
        (segment.x + 1) * gridSize,
        (segment.y + 1) * gridSize,
      )
      gradient.addColorStop(0, index === 0 ? "#10b981" : "#059669")
      gradient.addColorStop(1, index === 0 ? "#059669" : "#047857")

      ctx.fillStyle = gradient
      ctx.fillRect(segment.x * gridSize + 1, segment.y * gridSize + 1, gridSize - 2, gridSize - 2)

      // Add glow effect for head
      if (index === 0) {
        ctx.shadowBlur = 10
        ctx.shadowColor = "#10b981"
      } else {
        ctx.shadowBlur = 0
      }
    })

    // Draw food
    const foodGradient = ctx.createRadialGradient(
      food.current.x * gridSize + gridSize / 2,
      food.current.y * gridSize + gridSize / 2,
      0,
      food.current.x * gridSize + gridSize / 2,
      food.current.y * gridSize + gridSize / 2,
      gridSize / 2,
    )
    foodGradient.addColorStop(0, "#ef4444")
    foodGradient.addColorStop(1, "#dc2626")

    ctx.fillStyle = foodGradient
    ctx.shadowBlur = 15
    ctx.shadowColor = "#ef4444"
    ctx.beginPath()
    ctx.arc(
      food.current.x * gridSize + gridSize / 2,
      food.current.y * gridSize + gridSize / 2,
      gridSize / 2 - 2,
      0,
      Math.PI * 2,
    )
    ctx.fill()
    ctx.shadowBlur = 0
  }, [])

  const update = useCallback(() => {
    if (gameOver) return

    const head = { ...snake.current[0] }

    // Move head
    switch (direction.current) {
      case "UP":
        head.y--
        break
      case "DOWN":
        head.y++
        break
      case "LEFT":
        head.x--
        break
      case "RIGHT":
        head.x++
        break
    }

    // Check wall collision
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
      setGameOver(true)
      return
    }

    // Check self collision
    if (snake.current.some((segment) => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true)
      return
    }

    snake.current.unshift(head)

    // Check food collision
    if (head.x === food.current.x && head.y === food.current.y) {
      setScore((prev) => prev + 10)
      generateFood()
    } else {
      snake.current.pop()
    }

    draw()
  }, [gameOver, draw, generateFood])

  useEffect(() => {
    if (!gameStarted || gameOver) return

    gameLoop.current = setInterval(update, 100)

    return () => {
      if (gameLoop.current) clearInterval(gameLoop.current)
    }
  }, [gameStarted, gameOver, update])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted || gameOver) return

      switch (e.key) {
        case "ArrowUp":
          if (direction.current !== "DOWN") direction.current = "UP"
          break
        case "ArrowDown":
          if (direction.current !== "UP") direction.current = "DOWN"
          break
        case "ArrowLeft":
          if (direction.current !== "RIGHT") direction.current = "LEFT"
          break
        case "ArrowRight":
          if (direction.current !== "LEFT") direction.current = "RIGHT"
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [gameStarted, gameOver])

  useEffect(() => {
    draw()
  }, [draw])


  return {
    canvasRef,
    score,
    gameOver,
    gameStarted,
    resetGame,

    gridSize,
    tileCount
}
}
