import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Test endpoint to verify SMTP connection
 * 
 * Usage: GET /api/test-email
 * 
 * Returns:
 * - { success: true } if connection works
 * - { success: false, error: "..." } if it fails
 */

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Testing SMTP connection...');
    console.log('Host: mail.dreamindiatravel.com');
    console.log('Port: 587');
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
            EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? 'Set' : 'Missing'
          }
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'mail.dreamindiatravel.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      connectionTimeout: 10000,
      socketTimeout: 10000,
      tls: {
        rejectUnauthorized: false
      }
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
        port: 587,
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
          port: 587,
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
    return 'Host unreachable. Try using port 465 with secure: true instead, or check if mail.dreamindiatravel.com is correct';
  }
  if (errorMessage.includes('ETIMEDOUT') || errorMessage.includes('timeout')) {
    return 'Connection timeout. Check your network or increase timeout values';
  }
  if (errorMessage.includes('undefined')) {
    return 'Environment variables not properly set. Make sure EMAIL_USER and EMAIL_PASSWORD are in Vercel Settings';
  }
  return 'Check Vercel logs for detailed error information';
}