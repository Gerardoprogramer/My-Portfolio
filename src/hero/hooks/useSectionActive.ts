import { useEffect, useState } from "react"

export const useSectionActive = () => {
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.5 },
        )

        const sections = document.querySelectorAll("section[id]")
        sections.forEach((section) => observer.observe(section))

        return () => sections.forEach((section) => observer.unobserve(section))
    }, [])
    return { activeSection }
}
