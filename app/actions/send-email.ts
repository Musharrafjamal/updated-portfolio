"use server";

import nodemailer from "nodemailer";

interface EmailData {
  email: string;
  message: string;
}

export type EmailFailureCode =
  "INVALID_EMAIL" | "INVALID_MESSAGE" | "NOT_CONFIGURED" | "DELIVERY_FAILED";

export type EmailResult =
  | { success: true; message: string }
  | { success: false; message: string; code: EmailFailureCode };

export async function sendEmail(data: EmailData): Promise<EmailResult> {
  const email = typeof data?.email === "string" ? data.email.trim() : "";
  const message = typeof data?.message === "string" ? data.message.trim() : "";

  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      code: "INVALID_EMAIL",
      message: "Please enter a valid email address.",
    };
  }

  if (message.length < 10 || message.length > 5000) {
    return {
      success: false,
      code: "INVALID_MESSAGE",
      message: "Your message must be between 10 and 5,000 characters.",
    };
  }

  const emailUser = process.env.EMAIL_USER?.trim();
  // Google presents app passwords in groups; spaces are formatting, not part of the password.
  const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, "");

  if (
    !emailUser ||
    !emailPass ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailUser)
  ) {
    return {
      success: false,
      code: "NOT_CONFIGURED",
      message: "Email delivery isn’t connected yet.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
    });

    const mailOptions = {
      from: emailUser,
      to: emailUser,
      subject: `New Portfolio Message from ${email}`,
      text: message,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch {
    console.error("Portfolio email delivery failed.");
    return {
      success: false,
      code: "DELIVERY_FAILED",
      message: "Message couldn’t be sent. Retry or open an email draft.",
    };
  }
}
