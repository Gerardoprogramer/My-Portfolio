
import { Button } from "@/components/ui/button"
import { useSnakeGame } from "./hooks/useSnakeGame"


export const SnakeGame = () => {

    const { canvasRef, score, gameOver, gameStarted, resetGame, gridSize, tileCount } = useSnakeGame()

    return (
        <div className="flex flex-col items-center gap-6 p-6">
            <div className="flex items-center justify-between w-full max-w-md">
                <div className="text-2xl font-bold">
                    Score: <span className="text-primary">{score}</span>
                </div>
                <Button onClick={resetGame} variant='outline' className="bg-accent/70">
                    {gameStarted ? "Reiniciar" : "Iniciar"}
                </Button>
            </div>

            <canvas
                ref={canvasRef}
                width={gridSize * tileCount}
                height={gridSize * tileCount}
                className="border-2 border-border rounded-xl shadow-2xl bg-red-700"
            />

            {gameOver && (
                <div className="text-center space-y-4">
                    <div className="text-3xl font-bold text-red-500">Game Over!</div>
                    <p className="text-muted-foreground">Puntuación final: {score}</p>
                    <Button onClick={resetGame} size="lg" className="bg-gradient-to-r from-primary to-accent">
                        Jugar de nuevo
                    </Button>
                </div>
            )}

            {!gameStarted && (
                <div className="text-center space-y-2">
                    <p className="text-muted-foreground">Usa las flechas del teclado para moverte</p>
                    <p className="text-sm text-muted-foreground">Come la comida roja y evita chocarte</p>
                </div>
            )}
        </div>
    )
}
