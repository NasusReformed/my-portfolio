import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

        // 1. Email to the portfolio owner (you)
    const mailToOwner = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New contact message from ${name} via your portfolio`,
      html: `
        <h1>New contact message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // 2. Confirmation email to the visitor
    const mailToVisitor = {
      from: `"Ignacio Quevedo" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for your message, ${name}!`,
      html: `
        <h1>Message Received!</h1>
        <p>Hi ${name},</p>
        <p>Thank you for contacting me. I have received your message and will get back to you as soon as possible.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Ignacio Quevedo</strong></p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailToOwner),
      transporter.sendMail(mailToVisitor),
    ]);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
