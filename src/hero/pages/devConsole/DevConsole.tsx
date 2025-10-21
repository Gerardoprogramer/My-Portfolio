
import { useEffect, useState } from "react"
import { X, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

interface DevConsoleProps {
  onClose: () => void
}

const consoleMessages = [
  { type: "info", message: 'console.log("Bienvenido reclutador 👋");' },
  { type: "info", message: 'console.log("Stack principal: React + Next.js + TypeScript");' },
  { type: "success", message: "✓ Portfolio cargado exitosamente" },
  { type: "info", message: 'console.log("Animaciones: GSAP + Framer Motion");' },
  { type: "info", message: 'console.log("Backend: Node.js + Python + FastAPI");' },
  { type: "success", message: "✓ Modo Dev Tools activado" },
  { type: "info", message: 'console.log("¿Listo para colaborar? 🚀");' },
]

export function DevConsole({ onClose }: DevConsoleProps) {
  const [messages, setMessages] = useState<typeof consoleMessages>([])
    const hasRun = useRef(false)

  useEffect(() => {
        if (hasRun.current) return
    hasRun.current = true

    consoleMessages.forEach((msg, index) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, msg])
      }, index * 300)
    })
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-3xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-secondary border-b border-border">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Dev Console</h3>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-6 space-y-2 font-mono text-sm max-h-96 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${
                msg.type === "success" ? "text-green-500" : "text-muted-foreground"
              } animate-in fade-in slide-in-from-left-2 duration-300`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {msg.message}
            </div>
          ))}
          {messages.length === consoleMessages.length && <div className="text-primary animate-pulse mt-4">▊</div>}
        </div>
      </div>
    </div>
  )
}
