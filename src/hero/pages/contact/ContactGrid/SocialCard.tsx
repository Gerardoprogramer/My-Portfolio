import { Card } from "@/components/ui/card"
import { Github, Linkedin } from "lucide-react"
import { ItemSocial } from "./ItemSocial"

export const SocialCard = () => {
    return (
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <h3 className="font-semibold mb-4 text-foreground">Encuéntrame en</h3>
            <div className="flex flex-wrap gap-3">

                <ItemSocial
                    name="GitHub"
                    link="https://github.com/Gerardoprogramer"
                    icon={Github}
                />

                <ItemSocial
                    name="LinkedIn"
                    link="https://www.linkedin.com/in/gerardo-mart%C3%ADnez-monge-0aa12231b/"
                    icon={Linkedin}
                />

            </div>
        </Card>
    )
}
