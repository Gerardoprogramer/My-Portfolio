import { Button } from "@/components/ui/button"
import { Gamepad2 } from "lucide-react"

interface Props{
    title: string;
}

export const DecorativeButton = ({ title }: Props) => {
    return (
        <div className="flex justify-center">
            <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
            >
                <Gamepad2 className="w-5 h-5 mr-2" />
                {title}
            </Button>
        </div>
    )
}
