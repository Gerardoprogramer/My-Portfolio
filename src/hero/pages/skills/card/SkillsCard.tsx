import type { SkillCategory } from "@/hero/interfaces/SkillsV2.interface";

interface Props {
  isVisible: boolean;
  name: SkillCategory;
  selectedSkill: SkillCategory;
  setSelectedSkill: (skill: SkillCategory | null) => void;
}

export const SkillsCard = ({isVisible, name, selectedSkill, setSelectedSkill}: Props )=> {
  return (
 <div
                            className="relative group"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.9)",
                                transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${1 * 100}ms`,
                            }}
                        >
                            <button
                                onClick={() => setSelectedSkill(selectedSkill === name ? null : name)}
                                className="w-full text-left relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group-hover:scale-105 cursor-pointer"
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                    <div
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 rotate-45 group-hover:scale-150 group-hover:opacity-20 transition-all duration-500 ${selectedSkill === name ? "scale-150 opacity-20" : ""}`}
                                    />
                                </div>

                                <div className="relative z-10 space-y-6">

                                    <div className="flex items-center justify-center">
                                        <div className="relative w-16 h-16">

                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg rotate-45 blur-md opacity-50 group-hover:opacity-75 transition-opacity ${selectedSkill === name ? "opacity-75" : ""}`}
                                            />

                                            <div
                                                className={`absolute inset-2 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg rotate-45 group-hover:rotate-[50deg] transition-all duration-500 ${selectedSkill === name ? "rotate-[50deg]" : ""}`}
                                            >

                                                <div className="absolute inset-0 bg-gradient-to-tl from-white/20 to-transparent rounded-lg" />
                                                <div className="absolute top-0 left-1/2 w-px h-full bg-white/30 -translate-x-1/2" />
                                                <div className="absolute top-1/2 left-0 w-full h-px bg-white/30 -translate-y-1/2" />
                                            </div>

                                            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full blur-sm opacity-75" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-center">{name}</h3>

                                    <div className="flex justify-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-1.5 h-1.5 rounded-full ${i < Math.floor(100 / 20) ? `bg-gradient-to-r from-blue-400 to-cyan-400` : "bg-secondary"} transition-all duration-300`}
                                                style={{
                                                    transitionDelay: `${1 * 100 + 500 + i * 50}ms`,
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
  )
}
