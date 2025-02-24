"use client";

import { motion } from "framer-motion";

export default function SkillsPage() {
  return (
    <div className="relative flex flex-col flex-grow items-center justify-start min-h-screen 
                    bg-gradient-to-b from-gray-100 to-gray-300 dark:from-black dark:to-gray-900 
                    text-gray-900 dark:text-gray-900 overflow-hidden p-4 font-body">
      
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
        className="text-4xl font-bold font-heading text-center mt-20 mb-6 dark:text-gray-300"
      >
       Programming skills
      </motion.h1>

      <motion.div
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative flex flex-col items-center  dark:bg-transparent p-8 
                   max-w-4xl w-full mx-auto text-center overflow-y-auto h-[70vh] py-6 mt-4"
      >
    
        <h3 className="text-xl text-gray-800 font-semibold mt-16 font-heading">Frontend Technologies</h3>
        <div className="grid grid-cols-3 gap-8 mt-12 justify-around w-full">
          <span>HTML</span>
          <span>CSS</span>
          <span>TailwindCSS</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Next.js</span>
          <span>WordPress</span>
          <span>AJAX</span>
        </div>

        <h3 className="text-xl text-gray-700 font-semibold mt-12 font-heading">Backend Technologies</h3>
        <div className="grid grid-cols-3 gap-8 mt-12 justify-around w-full">
          <span>PHP</span>
          <span>C#</span>
          <span>Docker</span>
          <span>Python</span>
          <span>Node.js</span>
          <span>Drupal</span>
          <span>Laravel</span>
          <span>Express</span>
          <span>Flask</span>
        </div>

        <h3 className="text-xl text-gray-700 font-semibold mt-12 font-heading">Version Control and Tools</h3>
        <div className="grid grid-cols-3 gap-8 mt-12 justify-around w-full">
          <span>GitHub</span>
          <span>GitHub Actions</span>
          <span>GitLens</span>
          <span>Vercel</span>
          <span>Hostinger</span>
          <span>AWS</span>
          <span>Heroku</span>
          <span>Netlify</span>
          <span>Postman</span>
        </div>

        <h3 className="text-xl text-gray-700 font-semibold mt-12 font-heading">Databases</h3>
        <div className="grid grid-cols-3 gap-8 mt-12 justify-around w-full">
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>PostgreSQL</span>
        </div>

        <h3 className="text-xl text-gray-800 font-semibold mt-12 font-heading">Project Management and Other Tools</h3>
        <div className="grid grid-cols-3 gap-8 mt-12 justify-around w-full">
          <span>Scrum</span>
          <span>Trello</span>
          <span>Slack</span>
        </div>

        <h3 className="text-xl text-gray-900 font-semibold mt-12 font-heading">Graphic Design</h3>
        <div className="grid grid-cols-3 gap-8 mt-12 mb-12 justify-around w-full">
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Premier</span>
          <span>Illustrator</span>
          <span>Draw.io</span>
          <span>Canva</span>
        </div>
      </motion.div>
    </div>
  );
}
