"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const XLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 1200 1227" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
  </svg>
);

const socialLinks = [
  {
    icon: Mail,
    link: "mailto:musharrafjamal08@gmail.com",
    label: "Email",
  },
  {
    icon: XLogo,
    link: "https://x.com/musharrafJamal8",
    label: "X",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/musharrafjamal8",
    label: "LinkedIn",
  },
  {
    icon: Github,
    link: "https://github.com/Musharrafjamal",
    label: "GitHub",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/musharraf008/",
    label: "Instagram",
  },
];

export default function SocialLinks({
  size = "md",
  withTitle,
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  withTitle?: boolean;
}) {
  const getIconSize = (size?: "sm" | "md" | "lg") => {
    switch (size) {
      case "sm":
        return "w-4 h-4";
      case "md":
        return "w-5 h-5";
      case "lg":
        return "w-6 h-6";
      default:
        return "w-5 h-5";
    }
  };

  const getContainerPadding = (size?: "sm" | "md" | "lg") => {
    switch (size) {
      case "sm":
        return "p-2.5";
      case "md":
        return "p-3.5";
      case "lg":
        return "p-4";
      default:
        return "p-3.5";
    }
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4",
        className
      )}
    >
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        
        return (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "rounded-full bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 flex items-center gap-2",
              getContainerPadding(size)
            )}
            aria-label={social.label}
          >
            <Icon className={getIconSize(size)} />
            {withTitle && <span className="text-sm font-medium pr-2">{social.label}</span>}
          </a>
        );
      })}
    </div>
  );
}
