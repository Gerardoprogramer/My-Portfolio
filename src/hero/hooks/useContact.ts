
import { useState } from "react"
import { sendContactEmail } from "@/hero/pages/api/sendContactEmail"

export const useContact = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus(null)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setStatus({
          type: "success",
          message: "¡Mensaje enviado! Te responderé pronto.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus({
          type: "error",
          message: result.error || "Error al enviar el mensaje. Intenta de nuevo.",
        })
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Error al enviar el mensaje. Intenta de nuevo.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return {
    isLoading,
    formData,
    handleChange,
    handleSubmit,
    status

  }
}
