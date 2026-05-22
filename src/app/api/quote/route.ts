import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = process.env.CONTACT_EMAIL ?? 'info@globalfurniturehtx.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, productInterest, message } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Global Furniture HTX <noreply@globalfurniturehtx.com>',
      to: TO_EMAIL,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1E3A8A; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 20px;">New Quote Request</h1>
            <p style="margin: 4px 0 0; color: #93C5FD; font-size: 14px;">Global Furniture HTX Website</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 140px;">Name</td>
                <td style="padding: 8px 0; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone</td>
                <td style="padding: 8px 0; color: #111827;"><a href="tel:${phone}" style="color: #1E3A8A;">${phone}</a></td>
              </tr>
              ${email ? `<tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email</td>
                <td style="padding: 8px 0; color: #111827;">${email}</td>
              </tr>` : ''}
              ${productInterest ? `<tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Interested In</td>
                <td style="padding: 8px 0; color: #111827;">${productInterest}</td>
              </tr>` : ''}
              ${message ? `<tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
                <td style="padding: 8px 0; color: #374151;">${message}</td>
              </tr>` : ''}
            </table>
            <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
              <a href="tel:${phone}" style="background: #16A34A; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">
                Call ${name} Back
              </a>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Quote email error:', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
