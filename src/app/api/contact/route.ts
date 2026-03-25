import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const allowedOrigins = new Set(['http://localhost:3000', 'https://gabrielporto.me'])
const rateLimitWindowMs = 10 * 60 * 1000
const rateLimitMax = 8
const ipBuckets = new Map<string, number[]>()

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i

const sanitize = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;')

const validate = (field: string, value: string | undefined, min: number, max: number) => {
  if (!value) return `${field} é obrigatório`
  if (value.length < min) return `${field} deve ter pelo menos ${min} caracteres`
  if (value.length > max) return `${field} deve ter no máximo ${max} caracteres`
  return null
}

function withinRateLimit(ip: string) {
  const now = Date.now()
  const bucket = ipBuckets.get(ip) ?? []
  const recent = bucket.filter(ts => now - ts < rateLimitWindowMs)
  recent.push(now)
  ipBuckets.set(ip, recent)
  return recent.length <= rateLimitMax
}

export async function POST(req: Request) {
  try {
    const origin = req.headers.get('origin')
    if (origin && !allowedOrigins.has(origin)) {
      return NextResponse.json({ success: false, error: 'Origin not allowed' }, { status: 403 })
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown-ip'
    if (!withinRateLimit(ip)) {
      return NextResponse.json({ success: false, error: 'Rate limit exceeded' }, { status: 429 })
    }

    let body: unknown
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ success: false, error: 'Invalid JSON' }, { status: 400 })
    }

    const { name, email, subject, message } = body as Record<string, string | undefined>

    const errors: string[] = []
    const nameErr = validate('Nome', name, 3, 80)
    if (nameErr) errors.push(nameErr)
    if (!email || !emailRegex.test(email)) errors.push('Email inválido')
    const subjectErr = validate('Assunto', subject, 5, 120)
    if (subjectErr) errors.push(subjectErr)
    const messageErr = validate('Mensagem', message, 10, 2000)
    if (messageErr) errors.push(messageErr)

    if (errors.length) {
      return NextResponse.json({ success: false, errors }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ success: false, error: 'Service unavailable' }, { status: 503 })
    }

    const safeName = sanitize(name!)
    const safeEmail = sanitize(email!)
    const safeSubject = sanitize(subject!)
    const safeMessage = sanitize(message!)

    const data = await resend.emails.send({
      from: 'Gabriel Porto <contact@send.gabrielporto.me>',
      to: 'gpalmenara@gmail.com',
      subject: safeSubject,
      replyTo: safeEmail,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Assunto:</strong> ${safeSubject}</p>
        <p><strong>Mensagem:</strong><br/>${safeMessage.replace(/\\n/g, '<br/>')}</p>
      `
    })

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
