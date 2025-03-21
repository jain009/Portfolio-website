
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    };
  }

  if (!validateString(message, 500)) {
    return {
      error: "Invalid message"
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Changed .com to .dev
      to: "ajainankit2001@gmail.com",
      subject: "Message from contact form",
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
    
    // Add logging to debug
    console.log("Email sent successfully:", data);
    
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return {
      error: getErrorMessage(error)
    };
  }

  return {
    data,
  };
};
