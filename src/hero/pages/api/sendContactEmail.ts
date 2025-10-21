import axios from "axios"

export const sendContactEmail = async (formData: {
    name: string
    email: string
    message: string
}) => {
    try {
        const response = await axios.post("/.netlify/functions/sendContactEmail", formData)
        return response.data
    } catch (error: any) {
        console.error("Error al enviar correo:", error)
        return { success: false, error: "No se pudo enviar el mensaje." }
    }
}
