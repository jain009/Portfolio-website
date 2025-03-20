"use client";

import React ,{ useEffect, useState }from "react";
import dynamic from "next/dynamic";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { LuGraduationCap, LuBriefcase, LuCode } from "react-icons/lu";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";


const VerticalTimeline = dynamic(
  () => import("react-vertical-timeline-component").then(mod => mod.VerticalTimeline),
  { ssr: false }
);

const VerticalTimelineElement = dynamic(
  () => import("react-vertical-timeline-component").then(mod => mod.VerticalTimelineElement),
  { ssr: false }
);


export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 relative max-w-5xl mx-auto px-4 sm:px-8" 
    >
      <SectionHeading>My experience</SectionHeading>
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
            className={`
              rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300
              ${selectedId === index ? "shadow-2xl scale-105" : "shadow-lg hover:shadow-xl"}
              ${theme === "light" ? "bg-white border border-gray-100" : "bg-gray-800 border border-gray-700"}
            `}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`
                    rounded-full p-3 mr-4 flex items-center justify-center
                    ${theme === "light" 
                      ? "bg-blue-50 text-blue-600" 
                      : "bg-blue-900/30 text-blue-400"}
                  `}>
                    {experience.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{experience.title}</h3>
                    <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                      {experience.location}
                    </p>
                  </div>
                </div>
                <div className={`
                  px-3 py-1 text-sm rounded-full font-medium
                  ${theme === "light" ? "bg-blue-50 text-blue-600" : "bg-blue-900/30 text-blue-400"}
                `}>
                  {experience.date}
                </div>
              </div>
              
              <div className={`
                mt-4 text-base leading-relaxed transition-all duration-300
                ${selectedId === index ? "max-h-[500px] opacity-100" : "max-h-24 overflow-hidden opacity-90"}
                ${theme === "light" ? "text-gray-700" : "text-gray-300"}
              `}>
                {experience.description}
              </div>
              
             
              
              <div className="mt-6 flex justify-end items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    text-sm flex items-center
                    ${theme === "light" ? "text-blue-600" : "text-blue-400"}
                  `}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(selectedId === index ? null : index);
                  }}
                >
                  {selectedId === index ? "Show less" : "Read more"}
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${selectedId === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}