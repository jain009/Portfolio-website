"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuGraduationCap, LuBriefcase, LuCode } from "react-icons/lu";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

const iconVariants = {
  hover: { scale: 1.1, rotate: 10 },
  tap: { scale: 0.95 },
  selected: { scale: 1.2, rotate: -10 }
};

const cardGradient = {
  light: "linear-gradient(145deg, #ffffff 0%, #f8faff 100%)",
  dark: "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)"
};

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 120 }
    }
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 relative max-w-5xl mx-auto px-4 sm:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading>My experience</SectionHeading>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-8 mt-16"
      >
        {experiencesData.map((experience, index) => (
          <motion.div
            key={index}
            variants={item}
            layoutId={`card-${index}`}
            onClick={() => setSelectedId(selectedId === index ? null : index)}
            className="relative group mx-auto w-full max-w-2xl" // Reduced width here
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className={`
                rounded-xl overflow-hidden cursor-pointer
                relative backdrop-blur-sm border
                ${theme === "light" ? "border-gray-100" : "border-gray-700"}
              `}
              style={{
                background: cardGradient[theme]
              }}
              layout
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-5 sm:p-6 relative z-10"> {/* Reduced padding */}
                <div className="flex items-center justify-between mb-3"> {/* Reduced margin */}
                  <div className="flex items-center">
                    <motion.div
                      className={`
                        rounded-full p-2.5 mr-3 flex items-center justify-center // Smaller icon container
                        ${theme === "light" 
                          ? "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600" 
                          : "bg-gradient-to-br from-blue-900/30 to-blue-800/30 text-blue-400"}
                      `}
                      variants={iconVariants}
                      whileHover="hover"
                      whileTap="tap"
                      animate={selectedId === index ? "selected" : "normal"}
                    >
                      {experience.icon}
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" // Smaller text
                        initial={{ backgroundPositionX: "0%" }}
                        whileHover={{ backgroundPositionX: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
                      >
                        {experience.title}
                      </motion.h3>
                      <p className={`text-xs ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}> {/* Smaller text */}
                        {experience.location}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className={`
                      px-2.5 py-1 text-xs rounded-full font-medium // Smaller badge
                      ${theme === "light" 
                        ? "bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600" 
                        : "bg-gradient-to-br from-blue-900/30 to-purple-900/30 text-blue-400"}
                    `}
                    whileHover={{ scale: 1.05 }}
                  >
                    {experience.date}
                  </motion.div>
                </div>

                <AnimatePresence>
                  <motion.div
                    className={`
                      mt-3 text-sm leading-relaxed // Reduced text size and margin
                      ${theme === "light" ? "text-gray-700" : "text-gray-300"}
                    `}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: selectedId === index ? 1 : 0.9,
                      height: selectedId === index ? "auto" : "4.5rem" // Reduced collapsed height
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {experience.description}
                  </motion.div>
                </AnimatePresence>

                <motion.div 
                  className="mt-4 flex justify-end items-center" // Reduced margin
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.button
                    className={`
                      text-xs flex items-center bg-gradient-to-r from-blue-600 to-purple-600 // Smaller text
                      bg-clip-text text-transparent relative overflow-hidden
                    `}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedId(selectedId === index ? null : index);
                    }}
                  >
                    <span className="relative z-10">
                      {selectedId === index ? "Show less" : "Read more"}
                    </span>
                    <motion.svg
                      className={`w-3 h-3 ml-1 ${selectedId === index ? "rotate-180" : ""}`} // Smaller icon
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: selectedId === index ? 180 : 0 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
      >
        <div className="absolute top-20 left-20 w-48 h-48 bg-blue-500 rounded-full mix-blend-overlay blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay blur-3xl animate-pulse delay-1000" />
      </motion.div>
    </section>
  );
}