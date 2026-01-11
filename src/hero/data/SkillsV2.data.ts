import type { Skills } from "../interfaces/SkillsV2.interface";

export const skills: Skills = {
  frontend: [
    { name: "React", icon: "react", featured: true },
    { name: "TypeScript", icon: "typescript", featured: true },
    { name: "JavaScript", icon: "javascript" },
    { name: "Tailwind CSS", icon: "tailwind", featured: true },
    { name: "Next.js", icon: "nextjs", featured: true },
    { name: "Vue.js", icon: "vuejs" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "Redux", icon: "redux" },
    { name: "Zustand", icon: "zustand", featured: true },
    { name: "TanStack Query", icon: "tanstack", featured: true },
    { name: "Vitest", icon: "vitest" },
    { name: "Vite", icon: "vite", featured: true },
  ],

  backend: [
    { name: "Node.js", icon: "nodejs", featured: true },
    { name: "Express", icon: "express" },
    { name: "NestJS", icon: "nestjs", featured: true },
    { name: "Python", icon: "python" },
    { name: "Django", icon: "django" },
    { name: "springboot", icon: "springboot" },
    { name: "fastapi", icon: "fastapi" },
    { name: "ASP.NET Core", icon: "dotnet", featured: true },
    { name: "PostgreSQL", icon: "postgresql", featured: true },
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" },
    { name: "REST API Design", icon: "rest", featured: true },
    { name: "Prisma", icon: "prisma" },
    { name: "Supabase", icon: "supabase" },
    { name: "Firebase", icon: "firebase" },
  ],

  tools: [
    { name: "Git", icon: "git", featured: true },
    { name: "GitHub", icon: "github" },
    { name: "Docker", icon: "docker", featured: true },
    { name: "Vercel", icon: "vercel" },
    { name: "Figma", icon: "figma" },
    { name: "VS Code", icon: "vscode" },
    { name: "Postman", icon: "postman" },
  ],

  soft: [
    { name: "Communication", icon: "communication" },
    { name: "Problem Solving", icon: "problemSolving" },
    { name: "Team Collaboration", icon: "teamwork" },
    { name: "Agile / Scrum", icon: "agile" },
    { name: "Code Reviews", icon: "codeReview" },
    { name: "Mentoring", icon: "mentoring" },
    { name: "Technical Writing", icon: "technicalWriting" },
  ],
};
