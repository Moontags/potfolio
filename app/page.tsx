"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  useTheme(); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-black"></div>;

  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center transition-colors duration-300 bg-black text-white overflow-hidden`}>
      
      <div className="absolute inset-0 stars"></div>
      
      <motion.h1
        initial={{ scale: 0, opacity: 0  }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-16 text-6xl font-bold text-gray-200"
      >
        Welcome! 
      </motion.h1>
      
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 0 }}
        animate={{ scale: 2.2, opacity: 1, rotate: 720 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 2.5, ease: "linear" }}
        className="relative z-10"
      >
        <Image
          src="/earth.png"
          alt="Rotating Earth"
          width={600}
          height={600}
          className="rounded-full"
        />
      </motion.div>

      <motion.p
        initial={{ scale: 0, opacity: 0  }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-2xl text-gray-200 max-w-2xl text-center mt-12"
      >
         Explore my portfolio and my journey as a developer
      </motion.p>
    
      <motion.a
        href="/projects"
        initial={{ scale: 0.1, opacity: 0, rotate: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="mt-12 px-6 py-2 text-lg font-medium flex items-center justify-center 
                  bg-gradient-to-b from-green-400 via-green-500 to-green-400 
                  text-gray-100 rounded-full shadow-lg 
                  transition-all duration-300 ease-in-out 
                  hover:shadow-xl hover:brightness-110 active:shadow-md"
      >
        Start Here
      </motion.a>

    </div>
  );
}
