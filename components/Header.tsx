"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
   <header className="w-full p-4 bg-white/10 dark:bg-black/10 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation Links */}
        <nav className="flex space-x-6 text-lg font-semibold">
          <button onClick={() => router.push("/")} className="hover:text-blue-500 dark:hover:text-blue-400">
            Home
          </button>
          <button onClick={() => router.push("/projects")} className="hover:text-blue-500 dark:hover:text-blue-400">
            Projects
          </button>
          <button onClick={() => router.push("/about")} className="hover:text-blue-500 dark:hover:text-blue-400">
            About
          </button>
          <button onClick={() => router.push("/skills")} className="hover:text-blue-500 dark:hover:text-blue-400">
            Skills
          </button>
        </nav>

        {/* Dark mode toggle */}
        <div className="flex space-x-4">
          {mounted && resolvedTheme && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-700 dark:bg-gray-600 transition-colors hover:bg-gray-500 dark:hover:bg-gray-700 ease-in-out duration-500 opacity-75"
            >
              {resolvedTheme === "dark" ? "☀️" : "🌙"}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
