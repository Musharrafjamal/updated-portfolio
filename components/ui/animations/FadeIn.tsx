"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up", 
  className = "" 
}: FadeInProps) {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction]
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 