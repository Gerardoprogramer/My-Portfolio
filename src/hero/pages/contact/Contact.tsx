
import { CustomTitle } from "@/components/custom/CustomTitle"
import { ContactForm } from "./form/ContactForm"
import { ContactGrid } from "./ContactGrid/ContactGrid"

export const Contact = () => {


  return (

    <div className="container mx-auto px-6 max-w-6xl">
      <div className="space-y-12">

        <CustomTitle
          title="Hablemos de tu"
          subtitle="¿Tienes una idea? Estoy siempre disponible para colaborar en proyectos interesantes"
          zone="Contacto"
          type="centered"
          markedTitle="próximo proyecto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 my-10">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info & Social */}
          <ContactGrid />

        </div>

        <div className="flex flex-col items-center justify-center text-center text-sm text-muted-foreground">
          <p>Hecho con ❤️ por Gerardo</p>
          <p className="mt-2 hidden md:block">
            Presiona <kbd className="px-2 py-1 bg-secondary rounded text-xs">Ctrl</kbd> +{" "}
            <kbd className="px-2 py-1 bg-secondary rounded text-xs">Shift</kbd> +{" "}
            <kbd className="px-2 py-1 bg-secondary rounded text-xs">D</kbd> para un easter egg 🎉
          </p>
        </div>

      </div>
    </div>
  )
}
