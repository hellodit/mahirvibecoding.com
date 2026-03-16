import { defineEventHandler, readBody } from 'h3'

interface WaitlistBody {
  name: string
  email: string
  phone: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<WaitlistBody>(event)

  if (!body?.name || body.name.trim().length < 2) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Nama harus diisi minimal 2 karakter',
    })
  }

  if (!body?.email || !isValidEmail(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email tidak valid',
    })
  }

  if (!body?.phone || !isValidPhone(body.phone)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Nomor telepon tidak valid',
    })
  }

  // TODO: Integrate with database or CRM
  console.log(`[Waitlist] ${body.name} | ${body.email} | ${body.phone} at ${new Date().toISOString()}`)

  return {
    success: true,
    message: 'Kamu berhasil terdaftar di waiting list!',
  }
})

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidPhone(phone: string): boolean {
  return /^[\d\s\-+()]{8,20}$/.test(phone)
}
