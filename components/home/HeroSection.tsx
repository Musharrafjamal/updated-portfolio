"use client";

import { motion } from "framer-motion";
import { FlipWords } from "../ui/aceternity/FlipWords";
import { useRef } from "react";
import { GradientText } from "../ui/gradient-text";
import { useCursorEffect } from "@/hooks/useCursorEffect";

export function HeroSection() {
  const words = ["Team Lead", "Full Stack Developer", "Ui/Ux Designer"];
  const nameRef = useRef<HTMLDivElement>(null);

  useCursorEffect({
    targetRef: nameRef,
    variant: "image-text",
    image: "/images/me.jpg",
    text: "About Me",
  });

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          ref={nameRef}
          className="text-4xl md:text-6xl font-bold mb-4 relative text-zinc-700 dark:text-white"
        >
          <span className="text-xl md:text-3xl font-caveat font-bold mr-2">
            Hi , I am
          </span>
          <GradientText
            colors={["#E52020", "#FFA725", "#EC7FA9", "#A294F9"]}
            className="font-moonWalk inline cursor-none"
            animationSpeed={8}
          >
            Musharraf
          </GradientText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-3xl mb-8 text-indigo-500 font-merienda font-bold"
        >
          <FlipWords words={words} /> <br />
        </motion.div>
      </div>
    </section>
  );
}
