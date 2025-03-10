"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [activeLink, setActiveLink] = useState("/");

  return (
    <nav className="fixed w-full z-50 bg-background/30 backdrop-blur-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-11 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white font-semibold text-xl">
              M
            </div>
            <span className="text-2xl font-semibold text-clip bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-purple-400">
              Musharraf
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <div className="flex items-center space-x-1 bg-purple-500/10 dark:bg-purple-500/30 backdrop-blur-md rounded-full p-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeLink === item.href
                      ? "bg-gradient-to-br from-purple-600 to-purple-400 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:text-black hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
                  onClick={() => setActiveLink(item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-gradient-to-br from-purple-600 to-purple-400 text-white hover:text-white border-none hover:shadow-xl hover:shadow-purple-200 dark:hover:shadow-purple-600/50 transition-all duration-300 hover:scale-105 hover:-rotate-1 rounded-full"
            >
              <Download className="mr-1 h-4 w-4" /> Resume
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-lg backdrop-blur-md "
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute text-white h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
