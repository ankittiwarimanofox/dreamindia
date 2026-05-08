// File: app/api/send-email/route.ts
// Email Sender for Next.js using Resend (Vercel Compatible)

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// =============================================
// RESEND CONFIGURATION WITH VALIDATION
// =============================================
const RESEND_API_KEY = process.env.RESEND_API_KEY;

// Validate API key exists
if (!RESEND_API_KEY) {
  console.error('❌ RESEND_API_KEY environment variable is NOT set!');
  console.error('Add it to Vercel Dashboard: Settings → Environment Variables');
}

const resend = new Resend(RESEND_API_KEY || "dummy-key-for-validation");
const TO_EMAIL = "info@dreamindiatravel.com";
const FROM_EMAIL = "onboarding@resend.dev";

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
    // ❌ CHECK IF API KEY IS SET
    if (!RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY in environment variables');
      return NextResponse.json(
        {
          status: "error",
          message: "Email service not configured. Please contact administrator.",
          code: "MISSING_API_KEY"
        },
        { 
          status: 500, 
          headers: { "Access-Control-Allow-Origin": "*" } 
        }
      );
    }

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

    console.log("📧 Attempting to send email via Resend:", {
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

    // Check for errors in response
    if (response.error) {
      console.error("❌ Resend API Error:", response.error);
      throw new Error(response.error.message || "Failed to send email via Resend");
    }

    if (!response.data?.id) {
      console.error("❌ No message ID returned from Resend");
      throw new Error("Email sent but no confirmation received");
    }

    console.log("✅ Email sent successfully:", response.data.id);

    return NextResponse.json(
      {
        status: "success",
        messageId: response.data.id,
        message: "Email sent successfully to info@dreamindiatravel.com",
      },
      { status: 200, headers }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorStack = error instanceof Error ? error.stack : "";
    
    console.error("❌ Email Error:", errorMessage);
    console.error("Stack:", errorStack);

    return NextResponse.json(
      {
        status: "error",
        message: errorMessage,
        debug: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500, headers: { "Access-Control-Allow-Origin": "*" } }
    );
  }
}