// File: app/api/send-email/route.ts
// Email Sender for Next.js using Resend (Vercel Compatible)

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// =============================================
// RESEND CONFIGURATION
// Get your API key from: https://resend.com
// =============================================
const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "info@dreamindiatravel.com";
const FROM_EMAIL = "onboarding@resend.dev"; // Must be verified in Resend

// =============================================
// CORS & HEADERS
// =============================================
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    // Handle CORS
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    // Get form data
    let data: Record<string, any> = {};
    const contentType = request.headers.get("content-type");

    if (contentType?.includes("application/json")) {
      data = await request.json();
    } else if (contentType?.includes("application/x-www-form-urlencoded")) {
      const text = await request.text();
      const params = new URLSearchParams(text);
      params.forEach((value, key) => {
        data[key] = value;
      });
    } else if (contentType?.includes("multipart/form-data")) {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        data[key] = value;
      });
    }

    // Get subject
    const subject = data._subject || "New Website Inquiry";

    // =============================================
    // CLEAN DATA FOR BODY
    // =============================================
    let messageBody = "New Lead Details:\n";
    messageBody += "---------------------------------\n";

    for (const [key, value] of Object.entries(data)) {
      if (typeof key === "string" && key.startsWith("_")) continue;

      const cleanKey = key
        .replace(/_/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      let cleanValue = "";
      if (Array.isArray(value)) {
        cleanValue = value.join(", ");
      } else if (typeof value === "string") {
        cleanValue = value;
      } else {
        cleanValue = String(value);
      }

      messageBody += `${cleanKey}: ${cleanValue}\n`;
    }
    messageBody += "---------------------------------\n";

    // =============================================
    // PREPARE EMAIL
    // =============================================
    const userEmail =
      data.Email_Address || data.email || data.user_email || "";

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
        <div style="background-color: white; padding: 20px; border-radius: 8px;">
          <h2 style="color: #004381; margin-bottom: 20px;">New Lead Details</h2>
          <hr style="border: none; border-top: 2px solid #C38E2D; margin: 20px 0;">
          <pre style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; overflow-x: auto; font-size: 14px;">
${messageBody}
          </pre>
          <hr style="border: none; border-top: 2px solid #C38E2D; margin: 20px 0;">
          ${
            userEmail
              ? `<p style="color: #666; font-size: 12px;">
            <strong>Reply-To:</strong> ${userEmail}
          </p>`
              : ""
          }
          <p style="color: #999; font-size: 11px; margin-top: 20px;">
            This email was sent from Dream India Travel contact form.
          </p>
        </div>
      </div>
    `;

    console.log("Attempting to send email via Resend:", {
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject: subject,
      replyTo: userEmail || TO_EMAIL,
    });

    // =============================================
    // SEND EMAIL VIA RESEND
    // =============================================
    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: userEmail || TO_EMAIL,
      subject: subject,
      html: htmlContent,
      text: messageBody,
    });

    if (response.error) {
      console.error("Resend Error:", response.error);
      throw new Error(response.error.message || "Failed to send email");
    }

    console.log("Email sent successfully:", response.data);

    return NextResponse.json(
      {
        status: "success",
        messageId: response.data?.id,
        message: "Email sent successfully to info@dreamindiatravel.com",
      },
      { status: 200, headers }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Mail failed";
    console.error("Email Error:", errorMessage);
    console.error("Full Error:", error);

    return NextResponse.json(
      {
        status: "error",
        message: errorMessage,
        debug:
          process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500, headers: { "Access-Control-Allow-Origin": "*" } }
    );
  }
}