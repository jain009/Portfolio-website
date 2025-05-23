import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated ",
    location: "Bhopal",
    description: "I graduated BCA degree in 2022 .",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Post Graduated ",
    location: "Bhopal",
    description: "I graduated Post Graduated degree in 2024 .",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "Bhopal",
    description:
      "I worked Remotely as a front-end developer intern for 6 month in Hph solution company . I also upSkilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: " JAN 2024 - JUNE 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Noida ",
    description:
      "Track your expenses and income with our intuitive financial management tool. Visualize your data through clean tables and interactive pie charts that highlight your spending patterns. Download your financial records as Excel files with just one click. All wrapped in an excellent, responsive UI that works beautifully on any device.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Finance Tracker",
    description: "Built a responsive and intuitive Financial Tracker web application using React and Firebase to help users manage and visualize their income and expenses. The application provides real-time tracking with interactive charts and data export functionality.",
    tags: ["React", "css", "Firebase"],
    imageUrl: corpcommentImg,
    src: "https://finance-tracker-nine-ochre.vercel.app/",
  },
  {
    title: "Ecommerce Website",
    description:
      "Built a full-featured E-commerce app with user authentication(JWT), admin product management (create/edit), and Razorpay integration for online payments. Utilized MongoDB to store user, product, and order data.",
    tags: [
      "React",
      "Tailwind",
      "Express.js",
      "mongoose",
      "Node.js",
      "Render",
      "Netlify",
    ],
    imageUrl: wordanalyticsImg,
    src: "https://jolly-alpaca-5fcf71.netlify.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
] as const;
