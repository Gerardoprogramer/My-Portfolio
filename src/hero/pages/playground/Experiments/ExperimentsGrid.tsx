import { ExperimentsCard } from "./ExperimentsCard"

export const ExperimentsGrid = () => {
    return (
        <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold">Experimentos Recientes</h3>
            <div className="grid md:grid-cols-2 gap-4">
                <ExperimentsCard title="GSAP Animations" subtitle="Explorando animaciones fluidas con GSAP" icon="🎨"/>
                <ExperimentsCard title="WebGL Effects" subtitle="Efectos 3D con Three.js" icon="🌐" />
            </div>
        </div>
    )
}
