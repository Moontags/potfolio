"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Weather App",
    description: "A simple weather app that shows the current weather in any city.",
    image: "/w1.png",
    link: "https://moontags.github.io/Weather_App/",
  },
  {
    title: "Weather App v2",
    description: "An improved version of the weather app with more features.",
    image: "/w2.png",
    link: "https://python-weather-app-ml3g.onrender.com/",
  },
  {
    title: "Task Manager",
    description: "A task manager app to keep track of your daily tasks.",
    image: "/todo.png",
    link: "https://todo-task-09nf.onrender.com",
  },
];

export default function ProjectPage() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-start min-h-screen 
                 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-black dark:to-gray-900 
                 text-gray-900 dark:text-gray-300 overflow-hidden p-4 pt-24"
    >
      {/* Taustaelementit */}
      <motion.div
        className="absolute inset-0 stars"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Otsikko animaatiolla */}
      <motion.h1
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="text-4xl font-bold mb-12"
      >
        My Projects
      </motion.h1>

      {/* Projektikortti */}
      <motion.div
        key={currentProject}
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative max-w-2xl bg-white/10 dark:bg-transparent text-black backdrop-blur-lg 
                   p-8 rounded-xl border border-white/10 flex flex-col items-center text-center"
      >
        <div className="flex flex-col items-center flex-grow">
          <Image
            src={projects[currentProject].image}
            alt={projects[currentProject].title}
            width={300}
            height={200}
            className="rounded-lg mb-4 shadow-md opacity-65"
          />
          <h2 className="text-2xl font-semibold">{projects[currentProject].title}</h2>
          <p className="text-md text-center mt-2">{projects[currentProject].description}</p>
        </div>

         {/* Napit */}
<div className="flex gap-8 mt-6 w-full justify-center">
  
  {/* View Project -nappi */}
  <motion.a
    href={projects[currentProject].link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0.1, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="flex items-center font-medium text-lg px-6 py-1.5 
              bg-white/20 dark:bg-black/30 backdrop-blur-md
              text-gray-500 dark:text-white rounded-full shadow-lg 
              transition-all duration-300 ease-in-out 
              hover:bg-white/40 dark:hover:bg-black/50 
              hover:shadow-xl hover:brightness-125 
              active:shadow-md"
  >
    View
  </motion.a>

  {/* Next Project -nappi */}
  <motion.button
    onClick={nextProject}
    initial={{ scale: 0.1, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 2, ease: "easeOut" }}
    className="flex items-center font-medium text-lg px-6 py-1.5 
              bg-white/20 dark:bg-black/30 backdrop-blur-md
              text-gray-500 dark:text-white rounded-full shadow-lg 
              transition-all duration-300 ease-in-out 
              hover:bg-white/40 dark:hover:bg-black/50 
              hover:shadow-xl hover:brightness-125 
              active:shadow-md"
  >
    Next
  </motion.button>
</div>
      </motion.div>
    </div>
  );
}