import type { Project } from "../interfaces/Project.interface"
import {
  Atom,
  Zap,
  FileType2,
  Repeat,
  Flame,
  FlaskConical,
  Brain,
  PencilLine,
  Database,
  Boxes,
  ShieldCheck,
} from "lucide-react"

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
      { name: "React", icon: Atom, color: "text-primary" },
      { name: "Vite", icon: Zap, color: "text-accent" },
      { name: "TypeScript", icon: FileType2, color: "text-chart-2" },
      { name: "TanStack Query", icon: Repeat, color: "text-chart-3" },
      { name: "NestJS", icon: Flame, color: "text-chart-4" },
      { name: "Vitest", icon: FlaskConical, color: "text-chart-5" },
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
  },
  {
    id: "trendora",
    title: "Trendora",
    description: "Tienda de ropa moderna con sistema de usuarios, panel de administración y autenticación segura.",
    longDescription:
      "Trendora es un eCommerce completo enfocado en ofrecer una experiencia fluida tanto para clientes como administradores. Desarrollado con React, Vite y Zustand, permite explorar productos, gestionar carritos y realizar compras con autenticación mediante tokens JWT. En el backend, utiliza NestJS con PostgreSQL y Docker, proporcionando una arquitectura modular, escalable y segura.",
    image: "/project/Trendora.png",
    category: "Full Stack",
    demoUrl: "https://github.com/Gerardoprogramer/Trendora",
    githubUrl: "https://github.com/Gerardoprogramer/Trendora",
    technologies: [
      { name: "React", icon: Atom, color: "text-primary" },
      { name: "Vite", icon: Zap, color: "text-accent" },
      { name: "TypeScript", icon: FileType2, color: "text-chart-2" },
      { name: "Zustand", icon: Brain, color: "text-chart-3" },
      { name: "Formik", icon: PencilLine, color: "text-chart-4" },
      { name: "NestJS", icon: Flame, color: "text-chart-5" },
      { name: "PostgreSQL", icon: Database, color: "text-chart-6" },
      { name: "Docker", icon: Boxes, color: "text-chart-7" },
      { name: "JWT", icon: ShieldCheck, color: "text-chart-8" },
    ],
    features: [
      "Catálogo de productos con filtros dinámicos",
      "Autenticación basada en tokens JWT",
      "Gestión global del estado con Zustand",
      "Formularios de validación y registro con Formik + Yup",
      "Panel de administración para gestión de productos y usuarios",
      "Backend modular en NestJS con PostgreSQL y TypeORM",
      "Despliegue en contenedores mediante Docker",
      "Interfaz responsive y moderna con Tailwind CSS",
    ],
    challenges:
      "El reto principal fue integrar un flujo de autenticación completo con tokens JWT y mantener el estado global sincronizado entre las vistas de usuario y administrador, asegurando una experiencia consistente en todo el sistema.",
    learnings:
      "Aprendí a estructurar un proyecto full stack con separación clara entre frontend y backend, implementando autenticación JWT, validaciones avanzadas con Formik, y persistencia de estado global con Zustand. Además, reforcé mis conocimientos en despliegue con Docker y manejo de base de datos PostgreSQL.",
  },
]
