
interface CustomTitleProps {
  title: string;
  markedTitle?: string,
  subtitle?: string;
  type?: "default" | "centered";
  zone?: string;
}

export const CustomTitle = ({ title, subtitle, type = "default", zone, markedTitle }: CustomTitleProps) => {
  return (
    <div className={`space-y-4 ${type === "centered" ? "text-center" : ""}`}>
      {type === "centered" && (
        <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent mb-4">
          {zone}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-balance">{title} {markedTitle ? <span className="text-primary">{markedTitle}</span> : ''}</h2>
      <div className={`w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full ${type === "centered" ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`text-lg text-muted-foreground max-w-2xl ${type === "centered" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
