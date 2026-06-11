import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = process.env.CONTACT_EMAIL ?? 'htxglobalinfo@gmail.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, productInterest, message } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Notify the store
    await resend.emails.send({
      from: 'Global Furniture HTX <noreply@globalfurniturehtx.com>',
      to: TO_EMAIL,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0e2b62; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
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
                <td style="padding: 8px 0; color: #111827;"><a href="tel:${phone}" style="color: #0e2b62;">${phone}</a></td>
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
              <a href="tel:${phone}" style="background: #0e2b62; color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: bold; font-size: 14px;">
                Call ${name} Back
              </a>
            </div>
          </div>
        </div>
      `,
    })

    // Send confirmation to customer (only if they provided an email)
    if (email) {
      await resend.emails.send({
        from: 'Global Furniture HTX <noreply@globalfurniturehtx.com>',
        to: email,
        subject: `We received your request, ${name}!`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0e2b62; color: white; padding: 32px 24px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="margin: 0; font-size: 22px; font-weight: 300;">Global Furniture HTX</h1>
              <p style="margin: 8px 0 0; color: #93C5FD; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;">Houston, TX</p>
            </div>
            <div style="background: #ffffff; padding: 32px 24px; border: 1px solid #e5e7eb; border-top: none;">
              <h2 style="font-size: 18px; font-weight: 400; color: #111827; margin: 0 0 12px;">Hi ${name}, we got your message!</h2>
              <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 0 0 20px;">
                Thank you for reaching out to Global Furniture HTX. One of our team members will contact you shortly at <strong>${phone}</strong> to assist you.
              </p>
              ${productInterest ? `<p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 0 0 20px;">You mentioned interest in: <strong style="color: #111827;">${productInterest}</strong></p>` : ''}
              <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; color: #374151; text-transform: uppercase; letter-spacing: 0.05em;">Showroom</p>
                <p style="margin: 0; color: #6b7280; font-size: 13px; line-height: 1.6;">
                  6951 McHard Rd STE D1, Houston TX 77053<br/>
                  Mon–Sat: 10am–8pm | Sun: 11am–6pm<br/>
                  <a href="tel:+18328515250" style="color: #0e2b62;">832-851-5250</a>
                </p>
              </div>
              <div style="text-align: center;">
                <a href="https://globalfurniturehtx.vercel.app/shop" style="background: #0e2b62; color: white; padding: 12px 28px; border-radius: 25px; text-decoration: none; font-size: 14px; font-weight: 500;">
                  Browse Our Catalog
                </a>
              </div>
            </div>
            <div style="padding: 16px 24px; text-align: center; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">Global Furniture HTX · Where Comfort Meets Style</p>
            </div>
          </div>
        `,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Quote email error:', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
