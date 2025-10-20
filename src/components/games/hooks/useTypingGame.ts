import { useState, useEffect, useRef } from "react"
import { codeSnippets } from "../data/codeSnippets.data"
import confetti from 'canvas-confetti';

export const useTypingGame = () => {

    const [currentSnippet, setCurrentSnippet] = useState("")
    const [userInput, setUserInput] = useState("")
    const [startTime, setStartTime] = useState<number | null>(null)
    const [wpm, setWpm] = useState(0)
    const [accuracy, setAccuracy] = useState(100)
    const [isComplete, setIsComplete] = useState(false)
    const [gameStarted, setGameStarted] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const startGame = () => {
        const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        setCurrentSnippet(randomSnippet)
        setUserInput("")
        setStartTime(Date.now())
        setWpm(0)
        setAccuracy(100)
        setIsComplete(false)
        setGameStarted(true)
        setTimeout(() => inputRef.current?.focus(), 100)
    }

    useEffect(() => {
        if (!gameStarted || !startTime) return

        if (userInput === currentSnippet) {
            const timeElapsed = (Date.now() - startTime) / 1000 / 60 // minutes
            const wordsTyped = currentSnippet.split(" ").length
            const calculatedWpm = Math.round(wordsTyped / timeElapsed)
            setWpm(calculatedWpm)
            setIsComplete(true)
            confetti({
                particleCount: 100,
                spread: 120,
                origin: { y: 0.6 },
            });
            return
        }

        // Calculate accuracy
        let correctChars = 0
        for (let i = 0; i < userInput.length; i++) {
            if (userInput[i] === currentSnippet[i]) {
                correctChars++
            }
        }
        const calculatedAccuracy = userInput.length > 0 ? Math.round((correctChars / userInput.length) * 100) : 100
        setAccuracy(calculatedAccuracy)

        // Calculate WPM
        if (userInput.length > 0) {
            const timeElapsed = (Date.now() - startTime) / 1000 / 60
            const wordsTyped = userInput.split(" ").length
            const calculatedWpm = Math.round(wordsTyped / timeElapsed)
            setWpm(calculatedWpm)
        }
    }, [userInput, currentSnippet, startTime, gameStarted])

    const getCharacterClass = (index: number) => {
        if (index >= userInput.length) return "text-muted-foreground"
        if (userInput[index] === currentSnippet[index]) return "text-green-500"
        return "text-red-500"
    }

    return {
        getCharacterClass,
        startGame,
        isComplete,
        wpm,
        accuracy,
        currentSnippet,
        inputRef,
        gameStarted,
        userInput,
        setUserInput

    }
}
