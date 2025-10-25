import type { Project } from "../interfaces/Project.interface" 

export const projects: Project[] = [
{
  id: "spa-heroes",
  title: "SPA Heroes",
  description: "Aplicación de héroes con búsqueda, detalle y gestión completa de personajes.",
  longDescription:
    "SPA Heroes es una aplicación web moderna centrada en la gestión de héroes. Desarrollada con React, TanStack Query y NestJS, permite explorar, buscar y editar héroes en una interfaz fluida tipo single-page. Incluye filtrado avanzado, paginación, enrutamiento dinámico y comunicación optimizada con una API REST construida en NestJS.",
  image: "/project/SPAheroes.png",
  category: "Full Stack",
  demoUrl: "https://gerardoprogramer.github.io/heroes-app", 
  githubUrl: "https://github.com/Gerardoprogramer/heroes-app",
  technologies: [
    { name: "React", icon: "⚛️", color: "text-primary" },
    { name: "Vite", icon: "⚡", color: "text-accent" },
    { name: "TypeScript", icon: "📘", color: "text-chart-2" },
    { name: "TanStack Query", icon: "🔄", color: "text-chart-3" },
    { name: "NestJS", icon: "🔥", color: "text-chart-4" },
    { name: "Vitest", icon: "🧪", color: "text-chart-5" },
  ],
  features: [
    "Búsqueda y filtrado dinámico de héroes",
    "Rutas dinámicas para detalles individuales",
    "Paginación y búsqueda mediante searchParams",
    "Sincronización de datos y caché con TanStack Query",
    "Comunicación con API REST en NestJS",
    "Diseño responsive con Tailwind CSS",
    "Tests unitarios con Vitest y React Testing Library",
  ],
  challenges:
    "El mayor desafío fue mantener sincronizados los estados de búsqueda, paginación y datos en caché entre la interfaz y la API, garantizando un flujo de navegación fluido y eficiente.",
  learnings:
    "Fortalecí mis conocimientos sobre arquitectura modular entre frontend y backend, y aprendí a implementar paginación y búsqueda con searchParams, además de manejar el estado remoto y caché de datos con TanStack Query.",
}
,
 
]
