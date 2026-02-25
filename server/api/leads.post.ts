import { defineEventHandler, readBody } from 'h3'

interface LeadBody {
  email: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<LeadBody>(event)

  if (!body?.email || !isValidEmail(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email tidak valid',
    })
  }

  // TODO: Integrate with newsletter service (Mailchimp, ConvertKit, Resend, etc.)
  // For now, log the lead and return success
  console.log(`[Lead Captured] ${body.email} at ${new Date().toISOString()}`)

  return {
    success: true,
    message: 'Terima kasih! Kami akan mengirimkan bab gratis ke email kamu.',
  }
})

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
