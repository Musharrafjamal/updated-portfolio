'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CursorProps {
  children: React.ReactNode;
  attachToParent?: boolean;
  variants?: any;
  springConfig?: any;
  transition?: any;
  onPositionChange?: (x: number, y: number) => void;
}

export function Cursor({
  children,
  attachToParent = false,
  variants,
  springConfig,
  transition,
  onPositionChange,
}: CursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on client side
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      setPosition({ x, y });
      setIsVisible(true);
      
      if (onPositionChange) {
        onPositionChange(x, y);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [onPositionChange]);

  if (typeof window === "undefined") return null;

  return (
    <motion.div
      className={cn('pointer-events-none fixed left-0 top-0 z-50')}
      style={{
        position: attachToParent ? "absolute" : "fixed",
        left: position.x,
        top: position.y,
        x: "-50%",
        y: "-50%",
      } as any}
      animate="animate"
      initial="initial"
      exit="exit"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
