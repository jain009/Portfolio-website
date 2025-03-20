"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm Ankit Jain, a Frontend Developer in Bangalore specializing in
        React.js and Next.js. With a Master's in Computer Applications and
        experience at HPH Solution, I build responsive web applications that
        combine clean design with efficient functionality. My projects include a
        Finance Tracker and AI-powered Tree Analyzer. I'm passionate about
        creating seamless user experiences and constantly expanding my technical
        expertise.
       
       
      </p>
    </motion.section>
  );
}
