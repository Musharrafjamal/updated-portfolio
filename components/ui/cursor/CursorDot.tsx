"use client";

import React from "react";
import { motion } from "framer-motion";

interface CursorDotProps {
  position: { x: number; y: number };
  isVisible: boolean;
  size?: number;
  color?: string;
}

export const CursorDot = ({ 
  position, 
  isVisible, 
  size = 8, 
  color = "white" 
}: CursorDotProps) => {
  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] mix-blend-difference"
      style={{
        left: position.x,
        top: position.y,
        translateX: "-50%",
        translateY: "-50%",
      } as any}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: 1,
      }}
      transition={{
        type: "spring",
        mass: 0.1,
        damping: 20,
        stiffness: 300,
      }}
    >
      <div 
        className="rounded-full" 
        style={{ 
          width: size, 
          height: size, 
          backgroundColor: color 
        }} 
      />
    </motion.div>
  );
}; 