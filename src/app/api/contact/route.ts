import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables.");
      return NextResponse.json({ success: false, error: 'Server misconfiguration: Missing email credentials.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Routing directly to your own inbox
      replyTo: email, // If you hit "reply", it sends back to the user
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-w: 600px;">
          <h2 style="color: #000; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">New Contact Submission</h2>
          <p style="margin-bottom: 5px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 20px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 20px; padding: 20px; border-left: 4px solid #3b82f6; background-color: #f9f9f9; border-radius: 4px;">
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('SMTP Send Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to dispatch email' }, { status: 500 });
  }
}
