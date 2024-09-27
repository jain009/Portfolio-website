"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils"
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";



const resend = new Resend(process.env.RESEND_API_KEY);




export const sendEmail = async (formData: FormData) => {
    const senderEmail =  formData.get("senderEmail");
    const message = formData.get("message");


// simple validation 
    if (!validateString(senderEmail, 5000)){
         return{
            error: "Invalid sender email"
         }
    }
 
    if (!validateString(message , 500)){
         return{
            error: "Invalid message"
         }
    }
    let data;
    try {
         data  = await resend.emails.send({
                from: ' Contact Form<onboarding@resend.com>',
                to: 'ajainankit2001@gmail.com',
                subject: 'Message from contact form',
                // reply_to: senderEmail as string,
                react: React.createElement(ContactFormEmail,{
                    message: message as string,
                    senderEmail:senderEmail as string,
                })
                // react: <ContactForEmail message={message} senderEmail={senderEmail} />
            });
    } catch (error: unknown){
      
        return {
            error: getErrorMessage(error)
        };
    }
    return {
        data,
    }
};


