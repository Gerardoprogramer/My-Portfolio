import {
    Database,
    Smartphone,
    Boxes,
    TrendingUp,
} from "lucide-react";
import {
    Accordion,
} from "@/components/ui/accordion";
import { CustomTitle } from "@/components/custom/CustomTitle";
import { CategorySection } from "./category/CategorySection";
import { skills } from '@/hero/data/SkillsV2.data'

export const SkillsShowcase = () => {

    return (
        <div className="container mx-auto px-6 max-w-6xl block lg:hidden">
            <div className="space-y-12">

                <CustomTitle
                    title="Tech"
                    markedTitle="Stack"
                    subtitle="Una selección de tecnologías y competencias con las que trabajo."
                    type="centered"
                    zone="Habilidades técnicas"
                />

                {/* Skills Categories */}
                <Accordion type="multiple" className="w-full space-y-2">
                    <CategorySection
                        value="frontend"
                        title="Frontend Development"
                        icon={Smartphone}
                        skills={skills.frontend}
                        colorClass="bg-chart-1/10 text-chart-1"
                    />

                    <CategorySection
                        value="backend"
                        title="Backend Development"
                        icon={Database}
                        skills={skills.backend}
                        colorClass="bg-chart-2/10 text-chart-2"
                    />

                    <CategorySection
                        value="tools"
                        title="Tools & Technologies"
                        icon={Boxes}
                        skills={skills.tools}
                        colorClass="bg-chart-3/10 text-chart-3"
                    />

                    <CategorySection
                        value="soft"
                        title="Professional Skills"
                        icon={TrendingUp}
                        skills={skills.soft}
                        colorClass="bg-chart-4/10 text-chart-4"
                    />
                </Accordion>

                {/* Footer Note */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-white italic">
                        Aprendiendo y ampliando continuamente mis habilidades. 
                    </p>
                </div>
            </div>
        </div>
    );
};
