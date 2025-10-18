"use client"

import { Home, User, Code, Briefcase, Gamepad2, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationProps {
  activeSection: string
}

const navItems = [
  { id: "home", icon: Home, label: "Inicio" },
  { id: "about", icon: User, label: "Sobre mí" },
  { id: "skills", icon: Code, label: "Skills" },
  { id: "projects", icon: Briefcase, label: "Proyectos" },
  { id: "playground", icon: Gamepad2, label: "Labs" },
  { id: "contact", icon: Mail, label: "Contacto" },
]

export const NavigationPage = ({ activeSection }: NavigationProps) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Desktop Navigation - Right Side */}
      <nav className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 bg-card/80 backdrop-blur-lg border border-border rounded-2xl p-4 shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "group relative p-3 rounded-xl transition-all duration-300",
                activeSection === item.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "hover:bg-secondary text-muted-foreground hover:text-foreground",
              )}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
              <span className="absolute right-full mr-4 px-3 py-1.5 bg-card border border-border rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Mobile Navigation - Bottom Dock */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-card/90 backdrop-blur-lg border border-border rounded-2xl p-3 shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "p-3 rounded-xl transition-all duration-300",
                activeSection === item.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground active:bg-secondary",
              )}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          )
        })}
      </nav>
    </>
  )
}
