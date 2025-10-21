import type { Skill } from "@/hero/interfaces/Skills.interfaces"

export const skills: Skill[] = [
    {
        name: "Frontend",
        color: "from-blue-400 to-cyan-400",
        technologies: [
            { name: "React", icon: "⚛️", color: "text-sky-400" },
            { name: "Vue.js", icon: "🧩", color: "text-green-400" },
            { name: "Tailwind CSS", icon: "🎨", color: "text-teal-400" },
            { name: "TypeScript", icon: "📘", color: "text-blue-400" },
        ],
    },
    {
        name: "Backend",
        color: "from-cyan-400 to-blue-500",
        technologies: [
            { name: "FastAPI", icon: "⚡", color: "text-cyan-400" },
            { name: "Django", icon: "🐍", color: "text-emerald-500" },
            { name: "NestJS", icon: "🔥", color: "text-red-400" },
            { name: "Python", icon: "🐍", color: "text-yellow-400" },
            { name: "C#", icon: "💠", color: "text-indigo-400" },
            { name: "API REST (C#)", icon: "🔗", color: "text-blue-500" },
            { name: "TypeScript", icon: "📘", color: "text-blue-400" },
        ],
    },
    {
        name: "Animaciones",
        color: "from-blue-500 to-cyan-300",
        technologies: [
            { name: "GSAP", icon: "🎞️", color: "text-green-400" },
            { name: "Three.js", icon: "🌌", color: "text-indigo-400" },
        ],
    },
    {
        name: "Arquitectura",
        color: "from-cyan-300 to-blue-400",
        technologies: [
            { name: "SQLModel", icon: "🧱", color: "text-blue-400" },
            { name: "PostgreSQL", icon: "🐘", color: "text-sky-500" },
            { name: "MySQL", icon: "🐬", color: "text-cyan-500" },
            { name: "MongoDB", icon: "🍃", color: "text-green-500" },
            { name: "SQL Server", icon: "🗄️", color: "text-red-500" },
            { name: "API Design", icon: "🔗", color: "text-indigo-400" },
            { name: "Clean Architecture", icon: "🏗️", color: "text-blue-500" },
            { name: "MVC Pattern", icon: "🧠", color: "text-emerald-400" },
        ],
    },
    {
        name: "UI/UX",
        color: "from-blue-400 to-cyan-500",
        technologies: [
            { name: "Figma", icon: "🎨", color: "text-pink-400" },
            { name: "Shadcn UI", icon: "🧩", color: "text-purple-400" },
            { name: "Radix UI", icon: "📐", color: "text-indigo-400" },
            { name: "Motion Design", icon: "✨", color: "text-yellow-400" },
            { name: "Responsive Design", icon: "📱", color: "text-cyan-400" },
        ],
    },
    {
        name: "DevOps",
        color: "from-cyan-500 to-blue-400",
        technologies: [
            { name: "Docker", icon: "🐳", color: "text-blue-500" },
            { name: "Git", icon: "🔧", color: "text-orange-500" },
            { name: "GitHub Actions", icon: "⚙️", color: "text-gray-500" },
            { name: "Supabase", icon: "🧬", color: "text-green-500" },
            { name: "Vercel", icon: "▲", color: "text-black" },
            { name: "Netlify", icon: "☁️", color: "text-emerald-500" },
        ],
    },
]