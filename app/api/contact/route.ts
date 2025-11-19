import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, mobile, email, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !mobile || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please set RESEND_API_KEY in your environment variables.' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Update this with your verified domain
      to: ['sreekarreddy299@gmail.com'],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2b6777; border-bottom: 2px solid #52ab98; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f2f2f2; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #2b6777; margin-top: 0;">Contact Information</h3>
            
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Mobile:</strong> <a href="tel:${mobile}">${mobile}</a></p>
            
            <h3 style="color: #2b6777; margin-top: 20px;">Message</h3>
            <p style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #52ab98;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the Niftek website contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Information:
Name: ${firstName} ${lastName}
Email: ${email}
Mobile: ${mobile}

Message:
${message}

---
This email was sent from the Niftek website contact form.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

