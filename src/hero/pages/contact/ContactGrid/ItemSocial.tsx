import type { FC, SVGProps } from "react";

interface SocialProps {
    link: string,
    name: string,
    icon: FC<SVGProps<SVGSVGElement>>;

}

export const ItemSocial: FC<SocialProps> = ({ link, icon: Icon, name }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-background/50 hover:bg-primary/10 border border-border hover:border-primary/50 rounded-lg transition-all group"
        >
            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium text-foreground">{name}</span>
        </a>
    )
}
