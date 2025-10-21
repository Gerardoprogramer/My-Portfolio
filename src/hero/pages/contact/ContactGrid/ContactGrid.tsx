
import { Mail, Code2, Coffee } from "lucide-react"
import { ContactCard } from "./ContactCard"
import { SocialCard } from "./SocialCard"



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

            <SocialCard />

            <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-border/50">
                <p className="text-sm text-muted-foreground font-mono">
                    <span className="text-primary">{"// "}</span>
                    Respondo en menos de 24 horas ⚡
                </p>
            </div>
        </div>
    )
}
