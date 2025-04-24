"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiMongodb, SiExpress } from "react-icons/si";

export default function About() {
  const { ref } = useSectionInView("About");

  const techStack = [
    { icon: <FaReact className="h-6 w-6" />, name: "React" },
    { icon: <SiNextdotjs className="h-6 w-6" />, name: "Next.js" },
    { icon: <FaNodeJs className="h-6 w-6" />, name: "Node.js" },
    { icon: <SiExpress className="h-6 w-6" />, name: "Express" },
    { icon: <SiMongodb className="h-6 w-6" />, name: "MongoDB" },
    { icon: <SiFirebase className="h-6 w-6" />, name: "Firebase" },
  ];

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-4xl text-center leading-8 sm:mb-40 scroll-mt-28 px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <motion.div
        className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-6 text-lg font-medium text-gray-700 dark:text-gray-300">
          Hi, I'm{" "}
          <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ankit Jain
          </span>
          , a Full Stack Developer specializing in modern web technologies. With
          a Master's in Computer Applications and professional experience at HPH
          Solutions, I craft robust applications using:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center gap-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech.icon}
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="space-y-4 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>
            My expertise spans the full development cycle - from building
            responsive UIs with <strong>React/Next.js</strong>
            to designing scalable backends with{" "}
            <strong>Node.js, Express, and MongoDB</strong>. I've implemented
            real-time features using <strong>Firebase</strong> and optimized
            applications with modern practices like SSR and ISG.
          </p>

          <p>
            Notable projects include a financial analytics dashboard with
            real-time data visualization and an AI-powered agricultural solution
            for crop monitoring. I prioritize clean architecture, performance
            optimization, and maintainable codebases.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
       
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
