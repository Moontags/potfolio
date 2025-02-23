"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="relative flex flex-col flex-grow items-center justify-start min-h-screen 
                    bg-gradient-to-b from-gray-100 to-gray-300 dark:from-black dark:to-gray-900 
                    text-gray-900 dark:text-gray-300 overflow-hidden p-4">
      
      <motion.div
        className="fixed inset-0 stars"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>

      <motion.h1
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-4xl font-bold text-center mt-20 mb-8"
      >
        About Me
      </motion.h1>

      <motion.div
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative flex flex-col items-center dark:bg-transparent 
                   p-8 sm:px-12 max-w-3xl w-full mx-auto text-center overflow-y-auto h-[70vh] py-6"
                >
     
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative rounded-full overflow-hidden border border-blue-100 dark:border-blue-100 
                      flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 min-h-[80px] aspect-square"
          >
            <Image 
              src="/1.png" 
              alt="My Profile" 
              width={160} 
              height={160} 
              className="object-cover w-full h-full rounded-full"
            />
          </motion.div>

                <p className="text-lg text-left text-pretty m-4 text-gray-800 space-y-4">
          <span>
            I have been coding for about four years, focusing extensively on both frontend and backend development. I specialize in React, Next.js, and Tailwind CSS, and I have a command of modern web technologies, including Three.js and Framer Motion for animations. I can build responsive and visually impressive websites with a smooth user experience.
          </span>
          <br />
          <span>
            On the backend, I am proficient in PHP, Laravel, Node.js, and MongoDB, and I have developed several applications, such as a hotel reservation system and a task management tool. I have experience integrating services with databases and have a solid understanding of API development.
          </span>
          <br />
          <span>
            My projects demonstrate expertise in CI/CD pipelines, GitHub Actions, Prisma, and Supabase. I am also skilled in tools like Docker and AWS. I built the chat application, showcasing my interest in innovative concepts.
          </span>
          <br />
          <span>
            I have a keen eye for UI/UX design and pay close attention to detail. My projects are well-documented and scalable. I am a fast learner and continuously enhance my skill set!!
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 w-full">
          
          <motion.a
            href="mailto:jena9988@gmail.com"
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex items-center font-medium text-lg px-6 py-1.5 
                      bg-white/10 dark:bg-black/20 backdrop-blur-sm
                      text-gray-500 dark:text-gray-300 rounded-full shadow-md
                      transition-all duration-300 ease-in-out 
                      hover:bg-white/20 dark:hover:bg-black/30 
                      hover:shadow-xl hover:brightness-110 
                      active:shadow-md"
          >
            <FaEnvelope />
            Email
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/jari-peltola-25b416153/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="flex items-center font-medium text-lg px-6 py-1.5 
                      bg-white/10 dark:bg-black/20 backdrop-blur-sm
                      text-gray-500 dark:text-gray-300 rounded-full shadow-md 
                      transition-all duration-300 ease-in-out 
                      hover:bg-white/20 dark:hover:bg-black/30 
                      hover:shadow-xl hover:brightness-110 
                      active:shadow-md"
          >
            <FaLinkedin />
            LinkedIn
          </motion.a>

          <motion.a
            href="https://github.com/Moontags"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex items-center font-medium text-lg px-6 py-1.5 
                      bg-white/10 dark:bg-black/20 backdrop-blur-sm
                      text-gray-500 dark:text-gray-300 rounded-full shadow-md
                      transition-all duration-300 ease-in-out 
                      hover:bg-white/20 dark:hover:bg-black/30 
                      hover:shadow-xl hover:brightness-110 
                      active:shadow-md"
          >
            <FaGithub />
            GitHub
          </motion.a>
        </div>

      </motion.div>
    </div>
  );
}
