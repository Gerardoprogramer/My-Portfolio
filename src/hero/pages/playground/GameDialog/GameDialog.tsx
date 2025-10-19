import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Suspense } from "react"
import type { Game } from "@/hero/interfaces/game.interface"
import type { GameComponent } from "@/hero/interfaces/game.interface"

interface GameDialogProps {
    selectedGame: string | null;
    setSelectedGame: (gameId: string | null) => void;
    currentGame: Game | undefined;
    GameComponent: GameComponent | undefined;
}

export const GameDialog = ({ selectedGame, setSelectedGame, currentGame, GameComponent }: GameDialogProps) => {
    return (
        <Dialog open={!!selectedGame} onOpenChange={() => setSelectedGame(null)}>
            <DialogContent className="!max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl">{currentGame?.title}</DialogTitle>
                </DialogHeader>
                <div className="min-h-[400px]">
                    {GameComponent && (
                        <Suspense
                            fallback={
                                <div className="flex items-center justify-center h-[400px]">
                                    <div className="text-center space-y-4">
                                        <div className="text-6xl animate-bounce">{currentGame?.emoji}</div>
                                        <p className="text-muted-foreground">Cargando juego...</p>
                                    </div>
                                </div>
                            }
                        >
                            <GameComponent />
                        </Suspense>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
