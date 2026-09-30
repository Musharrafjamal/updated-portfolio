"use server";

import nodemailer from "nodemailer";

interface EmailData {
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  const email = typeof data?.email === "string" ? data.email.trim() : "";
  const message = typeof data?.message === "string" ? data.message.trim() : "";

  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (message.length < 10 || message.length > 5000) {
    return {
      success: false,
      message: "Your message must be between 10 and 5,000 characters.",
    };
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return {
      success: false,
      message:
        "The contact form is unavailable right now. Please use the email link instead.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message from ${email}`,
      text: message,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch {
    console.error("Portfolio email delivery failed.");
    return { success: false, message: "Failed to send email." };
  }
}
