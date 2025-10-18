
import { HeroPage } from "../hero/HeroPage"
import { AboutPage } from "../about/AboutPage"
import { NavigationPage } from "../navigation/NavigationPage"
import { useCanvasWorld } from "@/hero/hooks/useCavasWorld"
import { SkillsPage } from "../skills/SkillsPage"



export const HomePage = () => {

  const { canvasRef } = useCanvasWorld()

  
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* 3D Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }} />

      <div className="relative z-10">
        <NavigationPage activeSection="home" />

        <section id="home" className="min-h-screen">
          <HeroPage />
        </section>

        <section id="about" className="min-h-screen py-20">
          <AboutPage />
        </section>
        
      <section id="skills" className="min-h-screen py-20">
        <SkillsPage />
      </section>
      </div>


    </div>
  )
}
