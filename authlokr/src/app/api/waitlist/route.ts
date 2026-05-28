import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    // TODO: wire up email service (Resend, ConvertKit, Mailchimp, etc.)
    // Example with Resend:
    // await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID })

    console.log(`[waitlist] New signup: ${email}`)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
