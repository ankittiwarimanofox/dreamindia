import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Test endpoint to verify SMTP connection
 * 
 * IMPORTANT: export const dynamic = 'force-dynamic' is required
 * for Vercel deployments with static export (output: export)
 * 
 * Usage: GET /api/test-email
 * 
 * Returns:
 * - { success: true } if connection works
 * - { success: false, error: "..." } if it fails
 */

// ============================================
// IMPORTANT: Allow dynamic API routes
// This is required for Vercel deployments with static export
// ============================================
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Testing SMTP connection...');
    console.log('Host: mail.dreamindiatravel.com');
    console.log('Port: 465 (SSL)');
    console.log('User:', process.env.EMAIL_USER ? '✓ Set' : '✗ Not set');
    console.log('Pass:', process.env.EMAIL_PASSWORD ? '✓ Set' : '✗ Not set');

    // Check if env vars exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing environment variables',
          details: {
            EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Missing',
            EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? 'Set' : 'Missing',
            help: 'Go to Vercel Project Settings > Environment Variables and add EMAIL_USER and EMAIL_PASSWORD'
          }
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'mail.dreamindiatravel.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      connectionTimeout: 10000,
      socketTimeout: 10000,
    });

    // Verify connection
    console.log('⏳ Verifying SMTP connection...');
    await transporter.verify();
    
    console.log('✅ SMTP connection successful!');

    return NextResponse.json({
      success: true,
      message: 'SMTP connection successful!',
      details: {
        host: 'mail.dreamindiatravel.com',
        port: 465,
        security: 'SSL/TLS',
        user: process.env.EMAIL_USER,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('❌ SMTP test failed:', error);

    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorCode = error instanceof Error && 'code' in error ? (error as any).code : 'UNKNOWN';

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        code: errorCode,
        details: {
          host: 'mail.dreamindiatravel.com',
          port: 465,
          user: process.env.EMAIL_USER,
          troubleshooting: getTroubleshootingMessage(errorMessage, errorCode)
        }
      },
      { status: 500 }
    );
  }
}

function getTroubleshootingMessage(errorMessage: string, errorCode: string): string {
  if (errorMessage.includes('Invalid login') || errorCode === 'EAUTH') {
    return 'Check if email address and password are correct in Vercel environment variables';
  }
  if (errorMessage.includes('ECONNREFUSED') || errorMessage.includes('connect')) {
    return 'Host unreachable. Check if mail.dreamindiatravel.com is correct or contact your hosting provider';
  }
  if (errorMessage.includes('ETIMEDOUT') || errorMessage.includes('timeout')) {
    return 'Connection timeout. The SMTP server is not responding. Check your network or contact hosting support';
  }
  if (errorMessage.includes('undefined')) {
    return 'Environment variables not properly set. Make sure EMAIL_USER and EMAIL_PASSWORD are in Vercel Settings';
  }
  if (errorMessage.includes('certificate')) {
    return 'SSL certificate issue. Try adding tls: { rejectUnauthorized: false } to your transporter config';
  }
  return 'Check Vercel logs for detailed error information';
}