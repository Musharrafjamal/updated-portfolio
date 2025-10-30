"use client";
import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./about/social-links";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 py-24 rounded-3xl mb-24">
      <div className="absolute inset-0 z-0">
        {/* Light theme dots */}
        <div 
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0",
          }}
        />
        {/* Dark theme dots */}
        <div 
          className="absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto flex flex-col items-center justify-between gap-6">
        {/* Big Animated Text */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-7xl md:text-[8rem] font-moonWalk font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-300 leading-tight">
            Let&apos;s Connect
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-2xl text-zinc-700 dark:text-indigo-100"
          >
            Have a project in mind? Let&apos;s create something amazing
            together.
          </motion.p>
        </motion.div>

        <div className="flex justify-center">
          <SocialLinks />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-zinc-600 dark:text-zinc-400"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} SharCode. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
