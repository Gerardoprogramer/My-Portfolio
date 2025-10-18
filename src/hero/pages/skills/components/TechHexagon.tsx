
interface TechHexagonProps {
    name: string
    icon: string
    color: string
    index: number
}

export function TechHexagon({ name, icon, color, index }: TechHexagonProps) {
    return (
        <div
            className="flex flex-col items-center justify-center relative group cursor-pointer"
            style={{
                animationDelay: `${index * 0.1}s`,
            }}
        >
            <svg
                viewBox="0 0 100 110"
                className="w-24 h-24 sm:w-28 sm:h-28 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
            >
                <defs>
                    <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" className="[stop-color:oklch(var(--primary))]" stopOpacity="0.8" />
                        <stop offset="100%" className="[stop-color:oklch(var(--accent))]" stopOpacity="0.6" />
                    </linearGradient>
                    <filter id={`glow-${index}`}>
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <polygon
                    points="50,5 93.3,27.5 93.3,82.5 50,105 6.7,82.5 6.7,27.5"
                    className="fill-card/90 stroke-primary/50 transition-all duration-300 group-hover:fill-card group-hover:stroke-primary backdrop-blur-sm"
                    strokeWidth="2"
                    filter={`url(#glow-${index})`}
                />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className={`text-3xl sm:text-4xl mb-1 transition-transform duration-300 group-hover:scale-125 ${color}`}>
                    {icon}
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-card-foreground text-center px-2 opacity-90 group-hover:opacity-100 transition-opacity">
                    {name}
                </span>
            </div>

            <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-primary/50 -z-10" />
        </div>
    )
}
