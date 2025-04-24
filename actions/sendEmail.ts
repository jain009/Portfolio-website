

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

export const sendEmail = async (formData: FormData) => {
  // Initialize Resend inside the function
  const apiKey = "re_DcsCoWUq_5JdARjf8Qss7kMmKzmNiKVun";
  
  console.log(apiKey);

  if (!apiKey) {
    return { error: "Missing Resend API key - check your .env.local file" };
  }

  const resend = new Resend(apiKey);

  // Add validation for API key
  if (!process.env.RESEND_API_KEY) {
    return {
      error: "Missing Resend API key - check environment variables",
    };
  }

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }

  if (!validateString(message, 500)) {
    return { error: "Invalid message" };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ajainankit2001@gmail.com",
      subject: "Message from contact form",
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};