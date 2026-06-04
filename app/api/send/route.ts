import { NextResponse } from "next/server"
import { siteConfig } from "@/lib/data"

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Resend API key is not configured on the server." },
        { status: 500 }
      )
    }

    // Resend's free tier only supports sending to verified emails (the account owner)
    // using onboarding@resend.dev as the 'from' address.
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [siteConfig.email || "perpetualuchechukwu808@gmail.com"],
        reply_to: email,
        subject: subject || `New portfolio message from ${name}`,
        html: `
          <div style="background-color: #111111; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; min-height: 100%; color: #efefef;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border-radius: 16px; border: 1px solid #333333; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3);">
              
              <!-- Top Accent Bar -->
              <div style="background-color: #f5b52e; height: 6px;"></div>
              
              <!-- Header Area -->
              <div style="padding: 32px 32px 20px 32px; border-bottom: 1px solid #333333;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
                  <span style="font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #f5b52e; text-transform: uppercase; font-family: Arial, sans-serif; margin-right: auto;">
                   YOUR PORTFOLIO INBOX
                  </span>
                  <span style="font-size: 10px; color: #999999; padding: 4px 8px; background-color: #2a2a2a; border-radius: 4px; border: 1px solid #333333; font-weight: 600;">
                    NEW INQUIRY
                  </span>
                </div>
                <h1 style="font-size: 22px; font-weight: 800; color: #ffffff; margin: 0; line-height: 1.3; letter-spacing: -0.5px;">
                  ${name} reached out!
                </h1>
                <p style="font-size: 14px; color: #999999; margin: 8px 0 0 0;">
                  Someone submitted an inquiry through your contact form.
                </p>
              </div>

              <!-- Content Area -->
              <div style="padding: 32px;">
                <!-- Sender Metadata -->
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                  <tr>
                    <td style="padding: 8px 0; font-size: 12px; color: #999999; width: 80px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">From</td>
                    <td style="padding: 8px 0 8px 12px; font-size: 15px; color: #efefef; font-weight: 500; border-left: 2px solid #f5b52e;">
                      <strong style="color: #ffffff;">${name}</strong> 
                      <br />
                      <a href="mailto:${email}" style="color: #f5b52e; text-decoration: none; font-size: 13px;">${email}</a>
                    </td>
                  </tr>
                  <tr style="height: 12px;"><td></td></tr>
                  <tr>
                    <td style="padding: 12px 0 8px 0; font-size: 12px; color: #999999; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Subject</td>
                    <td style="padding: 12px 0 8px 12px; font-size: 15px; color: #ffffff; font-weight: 600; border-left: 2px solid #333333;">
                      ${subject || "No Subject"}
                    </td>
                  </tr>
                </table>

                <!-- Message Content -->
                <div style="margin-bottom: 32px;">
                  <h3 style="font-size: 11px; font-weight: 700; color: #999999; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0;">
                    Message Details
                  </h3>
                  <div style="background-color: #111111; border: 1px solid #333333; border-radius: 8px; padding: 20px; color: #efefef; font-size: 14px; line-height: 1.6; white-space: pre-wrap; font-family: monospace;">${message}</div>
                </div>

                <!-- Quick Actions -->
                <div style="text-align: center; margin-top: 10px;">
                  <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Portfolio Inquiry')}" 
                     style="display: inline-block; background-color: #f5b52e; color: #111111; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 12px rgba(245, 181, 46, 0.2);">
                    Reply to ${name}
                  </a>
                </div>
              </div>

              <!-- Footer -->
              <div style="background-color: #111111; padding: 24px 32px; text-align: center; border-top: 1px solid #333333; font-size: 12px; color: #666666;">
                <p style="margin: 0 0 6px 0;">This email was automatically generated by your portfolio site.</p>
                <p style="margin: 0;">&copy; 2026 Perpetual Asogwa. All rights reserved.</p>
              </div>

            </div>
          </div>
        `,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || "Failed to send email." },
        { status: response.status }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    )
  }
}
