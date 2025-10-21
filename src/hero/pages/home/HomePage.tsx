
import { HeroPage } from "../hero/HeroPage"
import { AboutPage } from "../about/AboutPage"
import { NavigationPage } from "../navigation/NavigationPage"
import { useCanvasWorld } from "@/hero/hooks/useCavasWorld"
import { SkillsPage } from "../skills/SkillsPage"
import { useSectionActive } from "@/hero/hooks/useSectionActive"
import { ProjectPage } from "../projects/ProjectPage"
import { PlaygroundPage } from "../playground/PlaygroundPage"
import { Contact } from "../contact/Contact"


export const HomePage = () => {

  const { canvasRef } = useCanvasWorld()
  const { activeSection } = useSectionActive()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* 3D Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }} />

      <div className="relative z-10">
        <NavigationPage activeSection={activeSection} />

        <section id="home" className="min-h-screen">
          <HeroPage />
        </section>

        <section id="about" className="min-h-screen py-20">
          <AboutPage />
        </section>

        <section id="skills" className="min-h-screen py-20">
          <SkillsPage />
        </section>

        <section id="projects" className="min-h-screen py-20">
          <ProjectPage />
        </section>

        <section id="playground" className="min-h-screen py-20">
          <PlaygroundPage />
        </section>

        <section id="contact" className="min-h-screen py-20 bg-background">
          <Contact/>
        </section>
      </div>


    </div>
  )
}
