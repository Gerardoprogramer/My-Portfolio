import { useEffect, useState } from "react"

export const useShowConsole = () => {

    const [showDevConsole, setShowDevConsole] = useState(false)

    useEffect(() => {

        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.shiftKey && e.key === "D") {
                setShowDevConsole((prev) => !prev)
            }
        }

        window.addEventListener("keydown", handleKeyPress)
        return () => window.removeEventListener("keydown", handleKeyPress)
    }, [])

    return {
        showDevConsole,
        setShowDevConsole
    }
}
