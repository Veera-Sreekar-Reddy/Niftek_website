import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resumeFile = formData.get('resume') as File | null;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !resumeFile) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate file size (5MB max)
    if (resumeFile.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Resume file size must be less than 5MB' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(resumeFile.type)) {
      return NextResponse.json(
        { error: 'Resume must be a PDF, DOC, or DOCX file' },
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

    // Convert file to buffer for email attachment
    const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());
    const resumeExtension = resumeFile.name.split('.').pop() || 'pdf';

    // Send email using Resend with attachment
    const { data, error } = await resend.emails.send({
      from: 'Careers <onboarding@resend.dev>', // Update this with your verified domain
      to: ['sreekarreddy299@gmail.com'],
      subject: `New Job Application from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2b6777; border-bottom: 2px solid #52ab98; padding-bottom: 10px;">
            New Job Application
          </h2>
          
          <div style="background-color: #f2f2f2; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #2b6777; margin-top: 0;">Applicant Information</h3>
            
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            
            ${coverLetter ? `
              <h3 style="color: #2b6777; margin-top: 20px;">Cover Letter</h3>
              <p style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #52ab98;">
                ${coverLetter.replace(/\n/g, '<br>')}
              </p>
            ` : ''}
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the Niftek website careers page. Please see the attached resume.
          </p>
        </div>
      `,
      text: `
New Job Application

Applicant Information:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

${coverLetter ? `Cover Letter:\n${coverLetter}` : ''}

---
This email was sent from the Niftek website careers page. Please see the attached resume.
      `,
      attachments: [
        {
          filename: `resume_${firstName}_${lastName}.${resumeExtension}`,
          content: resumeBuffer,
        },
      ],
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send application' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Application submitted successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Career application error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

