import { CustomTitle } from "@/components/custom/CustomTitle"
import { TechHexagon } from "@/components/custom/TechHexagon"
import { skills } from "@/hero/data/SkillsV2.data"
import { useSectionVisibility } from "@/hero/hooks/useSectionVisibility"
import { SkillsCard } from "./card/SkillsCard"

export const SkillsPage = () => {

    const { sectionRef, isVisible, selectedSkill, setSelectedSkill } = useSectionVisibility()


    return (
        <div ref={sectionRef} className="container mx-auto px-6 max-w-6xl hidden lg:block">
            <div className="space-y-12">

                <CustomTitle
                    title="Tech"
                    markedTitle="Stack"
                    subtitle="Una selección de tecnologías y competencias con las que trabajo."
                    type="centered"
                    zone="Habilidades técnicas"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SkillsCard name='frontend' isVisible={isVisible} selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill}/>
                    <SkillsCard name='backend' isVisible={isVisible} selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill}/>
                    <SkillsCard name='tools' isVisible={isVisible} selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill}/>
                    <SkillsCard name='soft' isVisible={isVisible} selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill}/>

                </div>

                {selectedSkill && (
                    <div
                        className="space-y-6"
                        style={{
                            animation: "fadeInUp 0.5s ease-out",
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <h3 className="text-2xl font-bold">
                                Tecnologías de{" "}
                                <span
                                    className={`bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent`}
                                >
                                    {selectedSkill}
                                </span>
                            </h3>
                            <button
                                onClick={() => setSelectedSkill(null)}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Cerrar
                            </button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

                            {skills[selectedSkill].map((tech, index) => (
                                <TechHexagon
                                    key={tech.name}
                                    name={tech.name}
                                    icon={tech.icon}
                                    color="from-blue-400 to-cyan-400"
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
