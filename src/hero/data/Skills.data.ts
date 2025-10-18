import type { Skill } from "@/hero/interfaces/Skills.interfaces"

export const skills: Skill[] = [
    {
        name: "Frontend",
        color: "from-blue-400 to-cyan-400",
        technologies: [
            { name: "Next.js", icon: "⚛️", color: "text-primary" },
            { name: "TypeScript", icon: "📘", color: "text-accent" },
            { name: "Tailwind CSS", icon: "🎨", color: "text-chart-2" },
        ],
    },
    {
        name: "Backend",
        color: "from-cyan-400 to-blue-500",
        technologies: [
            { name: "PostgreSQL", icon: "🐘", color: "text-chart-4" },
            { name: "Stripe", icon: "💳", color: "text-chart-3" },
            { name: "FastAPI", icon: "⚡", color: "text-accent" },
        ],
    },
    {
        name: "Animaciones",
        color: "from-blue-500 to-cyan-300",
        technologies: [
            { name: "GSAP", icon: "🎞️", color: "text-green-400" },
            { name: "Framer Motion", icon: "🎬", color: "text-purple-400" },
            { name: "Three.js", icon: "🌌", color: "text-indigo-400" },
        ],
    },
    {
        name: "Arquitectura",
        color: "from-cyan-300 to-blue-400",
        technologies: [
            { name: "SQLModel", icon: "🧱", color: "text-blue-400" },
            { name: "FastAPI", icon: "⚡", color: "text-accent" },
            { name: "Django", icon: "🐍", color: "text-emerald-500" },
        ],
    },
    {
        name: "UI/UX",
        color: "from-blue-400 to-cyan-500",
        technologies: [
            { name: "Figma", icon: "🎨", color: "text-pink-400" },
            { name: "Shadcn UI", icon: "🧩", color: "text-purple-400" },
            { name: "Radix UI", icon: "📐", color: "text-indigo-400" },
        ],
    },
    {
        name: "DevOps",
        color: "from-cyan-500 to-blue-400",
        technologies: [
            { name: "Docker", icon: "🐳", color: "text-blue-500" },
            { name: "GitHub Actions", icon: "⚙️", color: "text-gray-500" },
            { name: "Supabase", icon: "🧬", color: "text-green-500" },
        ],
    },
]