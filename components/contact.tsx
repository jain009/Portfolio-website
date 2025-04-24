"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "@/components/submit-btn";
import toast from "react-hot-toast";
import { useForm, ValidationError } from "@formspree/react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import {useState} from 'react'
export default function Contact() {
     const { pending } = useFormStatus();
  const [state, handleSubmit] = useForm("xgvapgor");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <motion.section
      id="contact"
     
      className="*mb:20 sm:mb-28 w-[min(100%,38rem)]
     text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ajainankit2001@gmail.com">
          ajainankit2001@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
      action={'https://formspree.io/f/xgvapgor'}
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack
                dark:bg-white dark:bg-opacity-80
                 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          id="email"
          name="email"
          required
          maxLength={500}
          placeholder="Your email "
        />{" "}
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 
                dark:bg-white dark:bg-opacity-80
                 dark:focus:bg-opacity-100 transition-all dark:outline-none"
         id="message"
        name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
           <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button  className="group flex items-center
    justify-center gap-2 h-[3rem]
    w-[8rem] bg-gray-900 text-white rounded-full 
    outline-none transition-all focus:scale-110
    hover:bg-gray-950 active:scale-105
    dark-bg-white dark:bg-opacity-10 disabled:scale-100
    disabled:bg-opacity-65 " type="submit" disabled={state.submitting}>
     
                  Submit{" "}
                  <FaPaperPlane  className="text-xs
                  opacity-70 transition-all 
                  group-hover:translate-x-1 
                  group-hover:translate-y-1"/>{" "}
            
      </button>
      </form>
    </motion.section>
  );
}
