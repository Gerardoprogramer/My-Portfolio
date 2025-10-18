import { useEffect, useRef, useState } from "react"

export const useSectionVisibility = () => {
 const [isVisible, setIsVisible] = useState(false)
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])
  return {
    sectionRef,
    isVisible,
    selectedSkill,
    setSelectedSkill,
  }
}
