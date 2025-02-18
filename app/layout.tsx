"use client";

import { ThemeProvider } from "next-themes";
import Header from "@/components/Header"; 
import PageTransition from "@/components/PageTransition"; 
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          {pathname !== "/" && <Header />}
          <main className="flex-grow">
            <PageTransition>{children}</PageTransition>
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}
