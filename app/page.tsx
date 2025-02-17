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
      
      {/* Taustatähdet */}
      <div className="absolute inset-0 stars"></div>
      
      {/* Otsikko animaatiolla */}
      <motion.h1
        initial={{ scale: 0, opacity: 0  }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute top-16 text-6xl font-bold text-white"
      >
        Welcome! 
      </motion.h1>
      
      {/* Pyörivä maapallo animaatiolla */}
      <motion.div
        initial={{ scale: 0.1, opacity: 0, rotate: 0 }}
        animate={{ scale: 2.2, opacity: 1, rotate: 720 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 5, ease: "linear" }}
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

      {/* Fade-in teksti */}
      <motion.p
        initial={{ scale: 0, opacity: 0  }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="text-2xl max-w-2xl text-center mt-12"
      >
         Explore my portfolio and my journey as a developer
      </motion.p>
    
            {/* Call to Action -nappi */}
      <motion.a
        href="/projects"
        initial={{ scale: 0.1, opacity: 0, rotate: 180 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{ duration: 1 }}
        className="mt-12 px-6 py-2 text-lg font-medium flex items-center justify-center 
                  bg-gradient-to-b from-blue-400 via-blue-500 to-blue-400 
                  text-white rounded-full shadow-lg 
                  transition-all duration-300 ease-in-out 
                  hover:shadow-xl hover:brightness-110 active:shadow-md"
      >
        Start Here
      </motion.a>

    </div>
  );
}
