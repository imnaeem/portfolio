import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const { MAILER_HOST, MAILER_EMAIL, MAILER_EMAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  secure: true,
  port: 465,
  host: MAILER_HOST,
  auth: { user: MAILER_EMAIL, pass: MAILER_EMAIL_PASSWORD },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Please fill all the details' }, { status: 400 });
    }

    const senderEmailOption = {
      from: MAILER_EMAIL,
      to: email,
      subject: 'Thank you for contacting us',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting us. We will get back to you as soon as possible.</p>
        <p>Best regards,</p>
        <p>Muhammad Naeem</p>
        `,
    };

    const receiverEmailOption = {
      from: MAILER_EMAIL,
      to: MAILER_EMAIL,
      replyTo: email,
      subject: 'New message from the contact form',
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        `,
    };

    transporter.verify();

    const [receiverInfo, senderInfo] = await Promise.all([
      transporter.sendMail(receiverEmailOption),
      transporter.sendMail(senderEmailOption),
    ]);

    console.log('Email sent to receiver', receiverInfo.response);
    console.log('Email sent to sender', senderInfo.response);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
