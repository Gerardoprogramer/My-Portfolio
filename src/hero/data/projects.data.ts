import type { Project } from "../interfaces/Project.interface"

export const projects: Project[] = [
{
  id: "library-management-system",
  title: "Sistema de Gestión de Librería",
  description: "Sistema full stack para la gestión de libros, usuarios y préstamos (en desarrollo).",
  longDescription:
    "Sistema de Gestión de Librería es un proyecto full stack en desarrollo, enfocado en simular un entorno real de negocio. El backend está construido con Spring Boot siguiendo buenas prácticas como uso de DTOs, validaciones, servicios y arquitectura modular. El frontend se desarrolla con React y TypeScript, consumiendo una API REST segura y escalable. El sistema está diseñado para crecer con funcionalidades como autenticación por roles, préstamos de libros y panel administrativo.",
  image: "/project/managementLibrary.png",
  category: "Full Stack",
  demoUrl: "",
  githubUrl: "https://github.com/Gerardoprogramer/library-management-system",
  technologies: [
    { name: "React", icon: "react", color: "text-primary" },
    { name: "TypeScript", icon: "typescript", color: "text-chart-2" },
    { name: "Spring Boot", icon: "springboot", color: "text-chart-4" },
    { name: "TanStack Query", icon: "tanstack", color: "text-chart-3" },
    { name: "PostgreSQL", icon: "postgresql", color: "text-chart-6" },
    { name: "JWT", icon: "JWT", color: "text-chart-8" },
  ],
  features: [
    "API REST desarrollada con Spring Boot",
    "Arquitectura basada en controladores, servicios y DTOs",
    "Gestión de libros, autores y categorías",
    "Diseño de sistema de préstamos de libros",
    "Autenticación y autorización por roles (en progreso)",
    "Frontend en React consumiendo API REST",
    "Proyecto preparado para escalar y agregar nuevas funcionalidades"
  ],
  challenges:
    "El principal reto ha sido diseñar una arquitectura backend clara y escalable en Spring Boot, asegurando una correcta separación de responsabilidades y una base sólida para futuras funcionalidades como préstamos y control de usuarios.",
  learnings:
    "Estoy reforzando mis conocimientos en Spring Boot, diseño de APIs REST, arquitectura backend y comunicación frontend-backend, aplicando patrones reales utilizados en entornos profesionales."
},
  {
    id: "trendora",
    title: "Trendora",
    description: "Tienda de ropa moderna con sistema de usuarios, panel de administración y autenticación segura.",
    longDescription:
      "Trendora es un eCommerce completo enfocado en ofrecer una experiencia fluida tanto para clientes como administradores. Desarrollado con React, Vite y Zustand, permite explorar productos, gestionar carritos y realizar compras con autenticación mediante tokens JWT. En el backend, utiliza NestJS con PostgreSQL y Docker, proporcionando una arquitectura modular, escalable y segura.",
    image: "/project/Trendora.png",
    category: "Full Stack",
    demoUrl: "https://trendoragm.netlify.app/",
    githubUrl: "https://github.com/Gerardoprogramer/Trendora",
    technologies: [
      { name: "React", icon: "react", color: "text-primary" },
      { name: "Vite", icon: "vite", color: "text-accent" },
      { name: "TypeScript", icon: "typescript", color: "text-chart-2" },
      { name: "Zustand", icon: "zustand", color: "text-chart-3" },
      { name: "Formik", icon: "Formik", color: "text-chart-4" },
      { name: "NestJS", icon: "nestjs", color: "text-chart-5" },
      { name: "PostgreSQL", icon: "postgresql", color: "text-chart-6" },
      { name: "Docker", icon: "docker", color: "text-chart-7" },
      { name: "JWT", icon: "JWT", color: "text-chart-8" },
    ],
    features: [
      "Catálogo de productos con filtros dinámicos",
      "Autenticación basada en tokens JWT",
      "Gestión global del estado con Zustand",
      "Formularios useForm",
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
  {
    id: "sistema-restaurante-web",
    title: "Sistema Web de Gestión de Restaurante",
    description: "Aplicación web para la gestión de operaciones internas de un restaurante.",
    longDescription:
      "Sistema Web de Gestión de Restaurante es una aplicación web desarrollada con C# y .NET, enfocada en automatizar y centralizar procesos clave de un restaurante. El proyecto implementa una arquitectura modular y organizada, separando la lógica de negocio, modelos de datos y presentación. Sirve como base escalable para funcionalidades como gestión de pedidos, inventario y administración general, demostrando buenas prácticas en desarrollo web con .NET.",
    image: "/project/Restaurante.png",
    category: "Full Stack Web",
    demoUrl: "https://restaurante-production-0b33.up.railway.app",
    githubUrl: "https://github.com/Gerardoprogramer/Restaurante",
    technologies: [
      { name: "C#", icon: "C_sharp", color: "text-chart-3" },
      { name: ".NET", icon: "dotnet", color: "text-chart-2" },
      { name: "ASP.NET", icon: "ASP", color: "text-chart-7" },
      { name: "HTML", icon: "html5", color: "text-primary" },
      { name: "Arquitectura en capas", icon: "architecture", color: "text-chart-5" }
    ],
    features: [
      "Aplicación web estructurada en capas",
      "Separación de lógica de negocio, modelos y presentación",
      "Base para gestión de pedidos y operaciones del restaurante",
      "Arquitectura preparada para escalar funcionalidades",
      "Código organizado y mantenible"
    ],
    challenges:
      "El principal desafío fue estructurar correctamente una aplicación web en .NET, asegurando una clara separación de responsabilidades y una base sólida para futuras ampliaciones.",
    learnings:
      "Fortalecí mis conocimientos en desarrollo web con ASP.NET, arquitectura en capas y organización de proyectos escalables, aplicando buenas prácticas de diseño y mantenimiento de código."
  }
  ,
]
