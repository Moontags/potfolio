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
    title: "Weather App  ",
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
      className="relative flex flex-col flex-grow items-center justify-center min-h-screen 
                 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-black dark:to-gray-900 
                 text-gray-900 dark:text-gray-300 overflow-hidden p-4"
    >
  
      <motion.div
        className="fixed inset-0 stars"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.h1
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="text-4xl font-bold text-center mt-12 pb-6"
      >
        My Projects
      </motion.h1>

      <motion.div
        key={currentProject}
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="relative text-gray-600 flex flex-col justify-center items-center dark:bg-transparent 
                    p-8 sm:px-12 max-w-3xl w-full mx-auto text-center py-10"
      >

        <div className="flex flex-col justify-center items-center gap-10">
          
          <div className="flex items-center justify-center w-60 h-40 sm:w-80 sm:h-52 lg:w-[420px] lg:h-[280px] 
                           overflow-hidden opacity-90">
            <Image
              src={projects[currentProject].image}
              alt={projects[currentProject].title}
              width={420}
              height={280}
              className="object-contain w-full h-full"
            />
          </div>

          <h2 className="text-2xl lg:text-3xl font-semibold">{projects[currentProject].title}</h2>
          <p className="text-md lg:text-lg text-center max-w-2xl px-4">
            {projects[currentProject].description}
          </p>

          <div className="flex gap-8 w-full justify-center mb-12">
            
            <motion.a
              href={projects[currentProject].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex items-center font-medium text-lg px-6 py-2 
                        bg-white/20 dark:bg-black/30 backdrop-blur-sm
                        text-gray-500 dark:text-white rounded-full shadow-md
                        transition-all duration-300 ease-in-out 
                        hover:bg-white/40 dark:hover:bg-black/50 
                        hover:shadow-xl hover:brightness-125 
                        active:shadow-md"
            >
              View
            </motion.a>

            <motion.button
              onClick={nextProject}
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="flex items-center font-medium text-lg px-6 py-2 
                        bg-white/20 dark:bg-black/30 backdrop-blur-sm
                        text-gray-500 dark:text-white rounded-full shadow-md
                        transition-all duration-300 ease-in-out 
                        hover:bg-white/40 dark:hover:bg-black/50 
                        hover:shadow-xl hover:brightness-125 
                        active:shadow-md"
            >
              Next
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
