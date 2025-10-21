
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
      </div>
    </div>
  )
}
