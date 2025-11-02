
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SkillBadge } from "../skillsBage/SkillBadge";
import type { Skill } from "@/hero/interfaces/SkillsV2.interface";


interface Props {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    skills: Skill[];
    colorClass: string;
    value: string;
}

export const CategorySection = ({ title, icon: Icon, skills: skillsList, colorClass, value }: Props) => (
    <AccordionItem value={value} className="border-border bg-card border rounded-2xl p-2 hover:border-primary/50">
        <AccordionTrigger className="hover:no-underline group">
            <div className="flex items-center gap-3">
                <div className={`p-2 ${colorClass} rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-foreground">{title}</h2>
                <span className="ml-2 text-sm text-primary">
                    ({skillsList.length})
                </span>
            </div>
        </AccordionTrigger>
        <AccordionContent>
            <div className="flex flex-wrap gap-3 pt-2">
                {skillsList.map((skill, index) => (
                    <div key={skill.name} style={{ animationDelay: `${index * 50}ms` }}>
                        <SkillBadge {...skill} />
                    </div>
                ))}
            </div>
        </AccordionContent>
    </AccordionItem>
);