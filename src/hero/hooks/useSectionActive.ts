import { useEffect, useState } from "react"

export const useSectionActive = () => {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    if (sections.length === 0) return

    let ticking = false

    const observer = new IntersectionObserver(
      (entries) => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id)
              }
            })
            ticking = false
          })
          ticking = true
        }
      },
      { threshold: [0.3, 0.5, 0.7] },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return { activeSection }
}
