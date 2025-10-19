import type { project } from "../interfaces/Project.interface";

export const projects: project[] = [
    {
        title: "E-Commerce Platform",
        description: "Plataforma completa de comercio electrónico con carrito, pagos y panel de administración.",
        tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
        image: "/modern-ecommerce-dashboard.png",
        demo: "#",
        github: "#",
    },
    {
        title: "Task Management App",
        description: "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.",
        tech: ["React", "Node.js", "Socket.io", "MongoDB"],
        image: "/task-management-kanban.png",
        demo: "#",
        github: "#",
    },
    {
        title: "Analytics Dashboard",
        description: "Dashboard interactivo con visualizaciones de datos en tiempo real y reportes personalizados.",
        tech: ["Next.js", "D3.js", "FastAPI", "Redis"],
        image: "/analytics-dashboard-charts.png",
        demo: "#",
        github: "#",
    },
]