
import { Card } from "@/components/ui/card"
import type { FC, SVGProps } from "react";

interface CardProps {
    icon: FC<SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    isAccent?: boolean;
    isLink?: string
}

export const ContactCard: FC<CardProps> = ({ icon: Icon, description, title, isAccent = false, isLink }) => {
    return (
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors group">
            <div className="flex items-start gap-4">

                {isAccent ? (
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                    </div>
                )
                    :
                    (
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-6 h-6 text-primary" />
                        </div>
                    )
                }

                <div className="flex-1">
                    <h3 className="font-semibold mb-1 text-foreground">{title}</h3>

                    {isLink ?
                        (
                            <a
                                href={isLink}
                                className="text-muted-foreground hover:text-primary transition-colors text-sm break-words break-all"
                            >
                                {description}
                            </a>
                        )
                        :
                        (
                            <p className="text-muted-foreground">{description}</p>
                        )
                    }

                </div>
            </div>
        </Card >
    )
}
