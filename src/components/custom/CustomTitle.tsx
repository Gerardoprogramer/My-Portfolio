
interface CustomTitleProps {
    title: string;
    subtitle?: string;
}

export const CustomTitle = ({ title, subtitle }: CustomTitleProps) => {
    return (
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">{title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
    )
}
