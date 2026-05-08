import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    let data: Record<string, string> = {};
    
    try {
      data = await request.json();
    } catch {
      const text = await request.text();
      const params = new URLSearchParams(text);
      params.forEach((value, key) => {
        data[key] = value;
      });
    }

    const subject = data._subject || "New Website Inquiry";
    const userEmail = data.email || data.Email_Address || "";
    const TO_EMAIL = "info@dreamindiatravel.com";
    const FROM_EMAIL = "onboarding@resend.dev";

    let messageBody = "New Lead Details:\n";
    messageBody += "---------------------------------\n";

    for (const [key, value] of Object.entries(data)) {
      if (key.startsWith("_")) continue;

      const cleanKey = key
        .replace(/_/g, " ")
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      messageBody += `${cleanKey}: ${value}\n`;
    }
    messageBody += "---------------------------------\n";

    const emailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: userEmail || TO_EMAIL,
      subject: subject,
      html: `<pre>${messageBody}</pre>`,
      text: messageBody,
    });

    if (emailResult.error) {
      return NextResponse.json(
        { status: "error", message: emailResult.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        message: "Email sent successfully to info@dreamindiatravel.com",
      },
      { status: 200 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { status: "error", message },
      { status: 500 }
    );
  }
}