// File: app/api/send-email/route.ts
// Anti-Spam Email Sender for Next.js (Sleekhost Optimized)

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// =============================================
// CONFIGURATION (Sleekhost SMTP)
// From cPanel: Secure SSL/TLS Settings (Recommended)
// =============================================
const TO_EMAIL = "info@dreamindiatravel.com";
const FROM_EMAIL = "info@dreamindiatravel.com"; // Your actual email account in Sleekhost
const SMTP_HOST = "mail.dreamindiatravel.com"; // Outgoing Server from cPanel
const SMTP_PORT = 465; // SSL Port (as shown in cPanel)
const SMTP_USER = "info@dreamindiatravel.com"; // Your email from cPanel
const SMTP_PASSWORD = "Sandeep@01"; // Replace with your actual email password

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
    // CLEAN DATA FOR BODY (PHP style)
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
    // SETUP NODEMAILER WITH SLEEKHOST
    // =============================================
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true, // true for port 465 (SSL)
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certs
      },
    });

    // =============================================
    // PREPARE EMAIL OPTIONS (Anti-spam headers)
    // =============================================
    const userEmail =
      data.Email_Address || data.email || data.user_email || "";

    // =============================================
    // HANDLE FILE ATTACHMENTS (if any)
    // =============================================
    const attachments: any[] = [];

    // Check for file uploads in form data
    if (data.resume instanceof File || data.Resume instanceof File) {
      const file = data.resume || data.Resume;
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type,
      });
    }

    // Build mail options with proper typing using 'any' to allow dynamic properties
    const mailOptions: any = {
      from: `Dream India Travel <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: userEmail || TO_EMAIL,
      subject: subject,
      text: messageBody,
      html: `
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
      `,
      headers: {
        "X-Mailer": `NextJS/14.0`,
        "Return-Path": FROM_EMAIL,
        "Sender": FROM_EMAIL,
        "X-Priority": "3",
      },
    };

    if (attachments.length > 0) {
      mailOptions.attachments = attachments;
    }

    // =============================================
    // SEND EMAIL
    // =============================================
    console.log("Attempting to send email with SMTP:", {
      host: SMTP_HOST,
      port: SMTP_PORT,
      from: FROM_EMAIL,
      to: TO_EMAIL,
    });

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.response);

    return NextResponse.json(
      { 
        status: "success", 
        messageId: info.messageId,
        message: "Email sent successfully to info@dreamindiatravel.com"
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
        debug: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500, headers: { "Access-Control-Allow-Origin": "*" } }
    );
  }
}