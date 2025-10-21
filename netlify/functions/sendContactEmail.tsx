import { Resend } from "resend"
import type { Handler } from "@netlify/functions"

const resend = new Resend(process.env.RESEND_API_KEY)

export const handler: Handler = async (event) => {
  try {
    const formData = JSON.parse(event.body || "{}")

    const { data, error } = await resend.emails.send({
      from: "Contacto Portfolio <onboarding@resend.dev>",
      to: ["gerardoalonso.martinezmonge@gmail.com"],
      replyTo: formData.email,
      subject: `Nuevo mensaje de ${formData.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">Nuevo mensaje de contacto</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("[Resend] Error:", error)
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, error: error.message }),
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data }),
    }
  } catch (error: any) {
    console.error("[Netlify] Error:", error)
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: "Error al enviar el mensaje" }),
    }
  }
}
