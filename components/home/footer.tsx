import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from "lucide-react";
import SocialLinks from "./about/social-links";

const Footer = () => {
  const socialLinks = [
    {
      icon: <GithubIcon className="w-6 h-6" />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <TwitterIcon className="w-6 h-6" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    {
      icon: <LinkedinIcon className="w-6 h-6" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <MailIcon className="w-6 h-6" />,
      href: "mailto:your@email.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-zinc-950 dark:to-black py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto flex flex-col items-center justify-between mb-16 gap-6">
        {/* Big Animated Text */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-7xl md:text-[8rem] font-moonWalk font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-300 leading-tight">
            Let&apos;s Connect
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-2xl text-indigo-100 mt-2"
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
          className="text-center text-zinc-500 dark:text-zinc-400"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
