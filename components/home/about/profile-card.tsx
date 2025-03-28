"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { AtSign, Phone, ExternalLink, Mail, Share2 } from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import SocialLinks from "./social-links";
import { Button } from "@/components/ui/button";
import { useCursorEffect } from "@/hooks/useCursorEffect";
import ArrowMessage from "./arrow-message";

// You'll need to define your socialLinks array elsewhere in your code
const socialLinks = [
  {
    icon: <Mail />,
    link: "mailto:musharrafjamal08@gmail.com",
    label: "Email",
    color: "#E69DB8",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 512 462.799"
        className="w-5 h-5 text-[#1DA1F2] group-hover:text-white transition-colors"
      >
        <path
          fillRule="nonzero"
          d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
        />
      </svg>
    ),
    link: "#",
    label: "X",
    color: "#1DA1F2",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-[#0A66C2] group-hover:text-white transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    link: "#",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-[#333] group-hover:text-white transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    link: "#",
    label: "GitHub",
    color: "#333",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-[#E4405F] group-hover:text-white transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
      </svg>
    ),
    link: "#",
    label: "Instagram",
    color: "#E4405F",
  },
];

export default function ProfileCard() {
  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
    },
    rest: {
      scale: 1,
      transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  const nameVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
    },
  };

  const socialVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.4 + i * 0.05,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Musharraf Jamal",
          text: "Check out Musharraf Jamal's profile - Team Lead, Developer, and Designer",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      console.log("Web Share API not supported");
    }
  };

  return (
    <motion.div
      className="w-full col-span-2"
      variants={cardVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className={`relative overflow-hidden rounded-2xl border bg-white/90 dark:bg-zinc-800/80 backdrop-blur-sm p-8`}
      >
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 blur-2xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-500/20 blur-2xl" />

        <div
          className="absolute top-4 right-4 rounded-full bg-white flex items-center justify-center p-2 dark:bg-zinc-800 cursor-pointer"
          onClick={handleShare}
        >
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Share2 size={16} />
              </TooltipTrigger>
              <TooltipContent>Share Profile</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex justify-around w-full items-center gap-4">
            <div className="relative ">
              <motion.div className="relative w-40  rounded-full overflow-hidden">
                <motion.div className="w-full h-full" variants={imageVariants}>
                  <Image
                    src="/images/my-image.png"
                    alt="Musharraf Jamal"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
            <div>
              <motion.h3
                className="text-2xl font-bold"
                variants={nameVariants}
                initial="initial"
                animate="animate"
              >
                <span className="bg-gradient-to-r from-blue-600 dark:from-blue-400 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent font-moonWalk">
                  Musharraf Jamal
                </span>
              </motion.h3>
              <motion.div
                className="text-zinc-600 dark:text-zinc-300 mt-1 font-semibold"
                variants={titleVariants}
                initial="initial"
                animate="animate"
              >
                <span className="relative">
                  Team Lead
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500/60 dark:bg-blue-400/60"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
                {" • "}
                <span className="relative">
                  Developer
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500/60 dark:bg-purple-400/60"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.6 }}
                  />
                </span>
                {" • "}
                <span className="relative">
                  Designer
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500/60 dark:bg-indigo-400/60"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  />
                </span>
              </motion.div>
              <div className="mt-4 text-md">
                1.5+ years of experience in building scalable applications and
                leading development teams.
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </motion.div>
      <ArrowMessage />
    </motion.div>
  );
}
