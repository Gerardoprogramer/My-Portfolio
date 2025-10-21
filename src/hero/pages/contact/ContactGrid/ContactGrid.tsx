
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Code2, Coffee } from "lucide-react"
import { ContactCard } from "./ContactCard"



export const ContactGrid = () => {
    return (
        <div className="space-y-6 overflow-hidden">
            <div className="space-y-4">

                <ContactCard
                    title="Email"
                    description="gerardoalonso.martinezmonge@gmail.com"
                    icon={Mail}
                    isLink="mailto:gerardoalonso.martinezmonge@gmail.com"
                />

                <ContactCard
                    title="Disponibilidad"
                    description="Abierto a proyectos freelance y colaboraciones"
                    icon={Code2}
                    isAccent={true}
                />

                <ContactCard
                    title="Café Virtual"
                    description="Siempre disponible para una charla técnica"
                    icon={Coffee} />

            </div>

            {/* Social Links */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <h3 className="font-semibold mb-4 text-foreground">Encuéntrame en</h3>
                <div className="flex flex-wrap gap-3">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-background/50 hover:bg-primary/10 border border-border hover:border-primary/50 rounded-lg transition-all group"
                    >
                        <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium text-foreground">GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-background/50 hover:bg-accent/10 border border-border hover:border-accent/50 rounded-lg transition-all group"
                    >
                        <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        <span className="text-sm font-medium text-foreground">LinkedIn</span>
                    </a>
                </div>
            </Card>

            {/* Fun Fact */}
            <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-border/50">
                <p className="text-sm text-muted-foreground font-mono">
                    <span className="text-primary">{"// "}</span>
                    Respondo en menos de 24 horas ⚡
                </p>
            </div>
        </div>
    )
}
