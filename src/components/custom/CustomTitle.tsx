
interface CustomTitleProps {
    title: string;
}

export const CustomTitle = ({ title }: CustomTitleProps) => {
    return (
        <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">{title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>
    )
}
