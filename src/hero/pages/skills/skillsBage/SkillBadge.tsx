import { cn } from "@/lib/utils";

interface SkillBadgeProps {
    name: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    featured?: boolean;
}

export const SkillBadge = ({ name, icon: Icon, featured = false }: SkillBadgeProps) => {
    return (
        <div
            className={cn(
                "group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 animate-fade-in cursor-default",
                featured
                    ? "bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary hover:border-accent hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:scale-105"
                    : "bg-card border border-border hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 hover:scale-102"
            )}
        >
            {featured && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-glow" />
            )}
            {Icon && (
                <Icon className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    featured
                        ? "text-primary group-hover:scale-125 group-hover:rotate-12"
                        : "text-primary group-hover:scale-110"
                )} />
            )}
            <span className={cn(
                "text-sm font-medium",
                featured ? "text-primary font-bold" : "text-card-foreground"
            )}>
                {name}
            </span>
        </div>
    );
};
