import { Code2, Sparkles, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export const HeroPage = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4" />
                    Bienvenido al Laboratorio Interactivo
                </div>

                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
                        <span className="block text-muted-foreground text-3xl md:text-4xl mb-2">Hola, soy</span>
                        <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                            Gerardo
                        </span>
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    <div className="flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-primary" />
                        <span>Full Stack Developer</span>
                    </div>
                    <div className="hidden md:block w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <div className="flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-accent" />
                        <span>UI/UX Enthusiast</span>
                    </div>
                    <div className="hidden md:block w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <span>Creative Coder</span>
                    </div>
                </div>

                <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto text-balance leading-relaxed">
                    Construyendo experiencias digitales que combinan diseño elegante con código sólido
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                    <Button
                        size="lg"
                        className="text-lg px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Ver Proyectos
                        <Code2 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-8 py-6 bg-transparent hover:bg-primary/5 transition-all duration-300"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Hablemos
                        <Sparkles className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
