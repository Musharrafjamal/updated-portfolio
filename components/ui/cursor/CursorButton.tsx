"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CursorButtonProps {
  position: { x: number; y: number };
  isVisible: boolean;
  text?: string | null;
  icon?: React.ReactNode | null;
}

export const CursorButton = ({
  position,
  isVisible,
  text,
  icon,
}: CursorButtonProps) => {
  return (
    <motion.div
      className="pointer-events-none fixed z-[9998] overflow-hidden"
      style={
        {
          left: position.x,
          top: position.y,
          translateX: "-50%",
          translateY: "-50%",
        } as any
      }
      animate={
        {
          opacity: isVisible ? 1 : 0,
        } as any
      }
      transition={{
        type: "spring",
        mass: 0.6,
        damping: 28,
        stiffness: 120,
        duration: 0.3,
      }}
    >
      <motion.div
        className="bg-black text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border border-white/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
      >
        {icon && <span className="text-white">{icon}</span>}
        {text && <span className="text-sm font-medium whitespace-nowrap">{text}</span>}
      </motion.div>
    </motion.div>
  );
}; 