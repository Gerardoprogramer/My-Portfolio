interface ExperimentalProps{
    title: string,
    subtitle: string,
    icon: string
}

export const ExperimentsCard = ({icon, subtitle, title}: ExperimentalProps) => {
    return (
        <div className="p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors cursor-pointer">
            <div className="flex items-start gap-4">
                <div className="text-3xl">{icon}</div>
                <div>
                    <h4 className="font-semibold mb-1">{title}</h4>
                    <p className="text-sm text-muted-foreground">{subtitle}</p>
                </div>
            </div>
        </div>
    )
}
