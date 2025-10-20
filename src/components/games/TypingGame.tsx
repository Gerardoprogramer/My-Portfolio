
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTypingGame } from "./hooks/useTypingGame"


export function TypingGame() {

  const { accuracy, getCharacterClass, isComplete, startGame, wpm, currentSnippet, gameStarted, inputRef, setUserInput, userInput } = useTypingGame();

  return (
    <div className="flex flex-col items-center gap-6 p-6 max-w-3xl mx-auto">
      {!gameStarted ? (
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Typing Speed Test</h3>
            <p className="text-muted-foreground">Escribe el código lo más rápido y preciso que puedas</p>
          </div>
          <Button onClick={startGame} size="lg" className="bg-gradient-to-r from-primary to-accent">
            Comenzar Test
          </Button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{wpm}</div>
                <div className="text-sm text-muted-foreground">WPM</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">{accuracy}%</div>
                <div className="text-sm text-muted-foreground">Precisión</div>
              </div>
            </div>
            <Button onClick={startGame} variant="outline" size="sm" className="bg-accent/70">
              Nuevo Test
            </Button>
          </div>

          <div className="w-full p-6 bg-secondary rounded-xl border border-border">
            <div className="font-mono text-lg leading-relaxed">
              {currentSnippet.split("").map((char, index) => (
                <span key={index} className={getCharacterClass(index)}>
                  {char}
                </span>
              ))}
            </div>
          </div>

          <Input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={isComplete}
            className="w-full text-lg font-mono p-4"
            placeholder="Comienza a escribir aquí..."
            autoComplete="off"
          />

          {isComplete && (
            <div className="text-center space-y-4 p-6 bg-card border border-primary rounded-xl w-full">
              <div className="text-3xl font-bold text-primary">¡Completado! 🎉</div>
              <div className="flex justify-center gap-8">
                <div>
                  <div className="text-2xl font-bold">{wpm}</div>
                  <div className="text-sm text-muted-foreground">Palabras por minuto</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{accuracy}%</div>
                  <div className="text-sm text-muted-foreground">Precisión</div>
                </div>
              </div>
              <Button onClick={startGame} size="lg" className="bg-gradient-to-r from-primary to-accent">
                Intentar de nuevo
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
