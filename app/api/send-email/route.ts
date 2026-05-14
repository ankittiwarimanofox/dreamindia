import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ============================================
// IMPORTANT: Allow dynamic API routes
// This is required for Vercel deployments with static export
// ============================================
export const dynamic = 'force-dynamic';

// ============================================
// cPanel CUSTOM SMTP CONFIGURATION
// Based on your cPanel Mail Client Settings
// ============================================

const transporter = nodemailer.createTransport({
  host: 'mail.dreamindiatravel.com',
  port: 465,
  secure: true, // TRUE for port 465 (SSL)
  auth: {
    user: process.env.EMAIL_USER,      // info@dreamindiatravel.com
    pass: process.env.EMAIL_PASSWORD,  // Your email password
  },
  connectionTimeout: 10000,
  socketTimeout: 10000,
});

// ============================================
// API ENDPOINT
// ============================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('❌ Missing environment variables');
      return NextResponse.json(
        { 
          error: 'Email service is not configured. Please contact the site administrator.',
          details: 'EMAIL_USER or EMAIL_PASSWORD not set'
        },
        { status: 500 }
      );
    }

    // ============================================
    // EMAIL TO ADMIN (info@dreamindiatravel.com)
    // ============================================
    const adminEmail = {
      from: process.env.EMAIL_USER,
      to: 'info@dreamindiatravel.com',
      subject: `New Tour Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
          <div style="background: linear-gradient(135deg, #004381 0%, #1D70B7 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">✈️ New Inquiry Received</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Dream India Travel</p>
          </div>

          <div style="background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; border-top: none;">
            <h2 style="color: #004381; font-size: 20px; margin-top: 0;">Customer Details</h2>
            
            <table style="width: 100%; margin: 20px 0; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; background: white; border: 1px solid #e0e0e0; font-weight: bold; color: #004381; width: 120px;">Name:</td>
                <td style="padding: 10px; background: white; border: 1px solid #e0e0e0;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background: white; border: 1px solid #e0e0e0; font-weight: bold; color: #004381;">Email:</td>
                <td style="padding: 10px; background: white; border: 1px solid #e0e0e0;"><a href="mailto:${escapeHtml(email)}" style="color: #004381; text-decoration: none;">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; background: white; border: 1px solid #e0e0e0; font-weight: bold; color: #004381;">Phone:</td>
                <td style="padding: 10px; background: white; border: 1px solid #e0e0e0;"><a href="tel:${escapeHtml(phone)}" style="color: #004381; text-decoration: none;">${escapeHtml(phone)}</a></td>
              </tr>
            </table>

            <h2 style="color: #004381; font-size: 16px;">Message:</h2>
            <div style="background: white; padding: 15px; border-left: 4px solid #C38E2D; border-radius: 4px; margin: 20px 0;">
              <p style="color: #555; margin: 0; white-space: pre-wrap;">${escapeHtml(message).replace(/\n/g, '<br>')}</p>
            </div>

            <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 12px; border-radius: 4px; margin-top: 20px;">
              <p style="margin: 0; color: #856404; font-size: 13px;">
                <strong>⏰ Quick Action:</strong> Reply to this email or contact the customer directly for faster response.
              </p>
            </div>
          </div>

          <div style="background: #004381; color: white; padding: 20px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">Dream India Travel © 2026</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">Automated inquiry from website form</p>
          </div>
        </div>
      `,
    };

    // ============================================
    // CONFIRMATION EMAIL TO USER
    // ============================================
    const userEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '✈️ We Received Your Inquiry - Dream India Travel',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
          <div style="background: linear-gradient(135deg, #004381 0%, #1D70B7 100%); color: white; padding: 40px 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 32px;">✈️ Dream India Travel</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.95;">Premium Tour & Travel Services</p>
          </div>

          <div style="background: white; padding: 40px 30px;">
            <h2 style="color: #004381; font-size: 24px; margin-top: 0;">
              Thank You, ${escapeHtml(name.split(' ')[0])}! 🎉
            </h2>
            
            <p style="color: #555; font-size: 16px; line-height: 1.8; margin: 20px 0;">
              We have received your inquiry and truly appreciate your interest in Dream India Travel. Our team of travel experts is reviewing your message right now.
            </p>

            <div style="background: linear-gradient(135deg, #f0f4ff 0%, #fff3e0 100%); padding: 25px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #C38E2D;">
              <h3 style="color: #004381; margin-top: 0; font-size: 16px;">📋 Your Inquiry Details</h3>
              <p style="margin: 8px 0; color: #666;"><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p style="margin: 8px 0; color: #666;"><strong>Phone:</strong> ${escapeHtml(phone)}</p>
              <p style="margin: 8px 0; color: #666;"><strong>Email:</strong> ${escapeHtml(email)}</p>
            </div>

            <h3 style="color: #004381; font-size: 18px; margin-top: 30px;">📞 What Happens Next?</h3>
            <ul style="color: #555; font-size: 15px; line-height: 2;">
              <li><strong>24 Hours:</strong> Our travel experts will review your inquiry</li>
              <li><strong>Contact You:</strong> We'll reach out via email or phone with custom recommendations</li>
              <li><strong>Detailed Plans:</strong> Receive tailored itineraries and competitive pricing</li>
              <li><strong>Ready to Help:</strong> Our team stands by to answer all your questions</li>
            </ul>

            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
              <p style="color: #004381; font-weight: bold; font-size: 16px; margin: 0;">Don't forget to check your email!</p>
              <p style="color: #999; font-size: 13px; margin: 8px 0 0 0;">Our response might arrive in your Promotions or Spam folder</p>
            </div>
          </div>

          <div style="background: #f5f5f5; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
            <h3 style="color: #004381; margin-top: 0; font-size: 16px;">📞 Contact Us Directly</h3>
            <p style="margin: 10px 0; color: #666;">
              Email: <a href="mailto:info@dreamindiatravel.com" style="color: #004381; text-decoration: none; font-weight: bold;">info@dreamindiatravel.com</a>
            </p>
            <p style="margin: 10px 0; color: #666; font-size: 13px;">
              Available: Mon-Sun, 10:00 AM - 8:00 PM IST
            </p>
          </div>

          <div style="background: #004381; color: white; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="margin: 0; font-size: 13px;">
              Dream India Travel © 2026 | Premium Tour & Travel Services Across India
            </p>
            <p style="margin: 8px 0 0 0; font-size: 11px; opacity: 0.8;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        </div>
      `,
    };

    // ============================================
    // SEND BOTH EMAILS
    // ============================================
    console.log('Attempting to send emails...');
    console.log('SMTP Host:', 'mail.dreamindiatravel.com');
    console.log('SMTP Port:', 465);
    console.log('From:', process.env.EMAIL_USER);

    await transporter.sendMail(adminEmail);
    console.log('✅ Admin email sent successfully to info@dreamindiatravel.com');

    await transporter.sendMail(userEmail);
    console.log('✅ User confirmation email sent successfully');

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! Your inquiry has been sent successfully. Check your email for confirmation.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Email sending error:', error);
    
    // Detailed logging for debugging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error type:', error instanceof Error ? error.constructor.name : typeof error);
    console.error('Full error details:', error);
    console.error('Environment variables check:');
    console.error('EMAIL_USER exists:', !!process.env.EMAIL_USER);
    console.error('EMAIL_PASSWORD exists:', !!process.env.EMAIL_PASSWORD);
    console.error('NODE_ENV:', process.env.NODE_ENV);
    
    return NextResponse.json(
      { 
        error: 'Failed to send your inquiry. Please try again or contact us at info@dreamindiatravel.com',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

// ============================================
// HELPER FUNCTION
// ============================================

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}