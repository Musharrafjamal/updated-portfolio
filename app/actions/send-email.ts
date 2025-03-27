'use server'

import nodemailer from 'nodemailer';

interface EmailData {
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: data.email,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message from ${data.email}`,
      text: data.message,
      replyTo: data.email,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Failed to send email.' };
  }
} 