import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Send } from "lucide-react"
import { useContact } from "@/hero/hooks/useContact";

export const ContactForm = () => {

    const { formData, handleChange, handleSubmit, isLoading, status } = useContact();

    return (
        <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nombre
                    </label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                        required
                        disabled={isLoading}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                        required
                        disabled={isLoading}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Mensaje
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Cuéntame sobre tu proyecto..."
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-background/50 border-border focus:border-primary transition-colors min-h-[150px] resize-none"
                        required
                        disabled={isLoading}
                    />
                </div>

                {status && (
                    <div
                        className={`p-4 rounded-lg border ${status.type === "success"
                            ? "bg-primary/10 border-primary/50 text-primary"
                            : "bg-destructive/10 border-destructive/50 text-destructive"
                            }`}
                    >
                        <p className="text-sm font-medium">{status.message}</p>
                    </div>
                )}

                <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium group"
                    size="lg"
                    disabled={isLoading}
                >
                    <span>{isLoading ? "Enviando..." : "Enviar mensaje"}</span>
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </form>
        </Card>
    )
}
