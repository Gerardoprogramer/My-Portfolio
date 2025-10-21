import { CustomTitle } from "@/components/custom/CustomTitle"
import { TechHexagon } from "@/components/custom/TechHexagon"
import { skills } from "@/hero/data/Skills.data"
import { useSectionVisibility } from "@/hero/hooks/useSectionVisibility"

export const SkillsPage = () => {

    const { sectionRef, isVisible, selectedSkill, setSelectedSkill } = useSectionVisibility()

    return (
        <div ref={sectionRef} className="container mx-auto px-6 max-w-6xl">
            <div className="space-y-12">
                <CustomTitle
                    title="Skills & Tecnologías"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="relative group"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.9)",
                                transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 100}ms`,
                            }}
                        >
                            <button
                                onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                                className="w-full text-left relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group-hover:scale-105 cursor-pointer"
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                    <div
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-10 rotate-45 group-hover:scale-150 group-hover:opacity-20 transition-all duration-500 ${selectedSkill === skill.name ? "scale-150 opacity-20" : ""}`}
                                    />
                                </div>

                                <div className="relative z-10 space-y-6">

                                    <div className="flex items-center justify-center">
                                        <div className="relative w-16 h-16">

                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-lg rotate-45 blur-md opacity-50 group-hover:opacity-75 transition-opacity ${selectedSkill === skill.name ? "opacity-75" : ""}`}
                                            />

                                            <div
                                                className={`absolute inset-2 bg-gradient-to-br ${skill.color} rounded-lg rotate-45 group-hover:rotate-[50deg] transition-all duration-500 ${selectedSkill === skill.name ? "rotate-[50deg]" : ""}`}
                                            >

                                                <div className="absolute inset-0 bg-gradient-to-tl from-white/20 to-transparent rounded-lg" />
                                                <div className="absolute top-0 left-1/2 w-px h-full bg-white/30 -translate-x-1/2" />
                                                <div className="absolute top-1/2 left-0 w-full h-px bg-white/30 -translate-y-1/2" />
                                            </div>

                                            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full blur-sm opacity-75" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-center">{skill.name}</h3>

                                    <div className="flex justify-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-1.5 h-1.5 rounded-full ${i < Math.floor(100 / 20) ? `bg-gradient-to-r ${skill.color}` : "bg-secondary"} transition-all duration-300`}
                                                style={{
                                                    transitionDelay: `${index * 100 + 500 + i * 50}ms`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="absolute bottom-4 right-4 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                                    Click para ver
                                </div>
                            </button>
                        </div>
                    ))}
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
                                    className={`bg-gradient-to-r ${skills.find((s) => s.name === selectedSkill)?.color} bg-clip-text text-transparent`}
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

                            {skills.find((s) => s.name === selectedSkill)?.technologies.map((tech, index) => (
                                <TechHexagon
                                    key={tech.name}
                                    name={tech.name}
                                    icon={tech.icon}
                                    color={tech.color}
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
