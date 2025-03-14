"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CursorRingProps {
  position: { x: number; y: number };
  isVisible: boolean;
  variant: string;
  text?: string | null;
  icon?: React.ReactNode | null;
  image?: string | null;
}

export const CursorRing = ({
  position,
  isVisible,
  variant,
  text,
  icon,
  image,
}: CursorRingProps) => {
  // Determine size based on variant
  const getSize = () => {
    switch (variant) {
      case "default":
        return 30;
      case "text":
        return 100;
      case "icon":
        return 60;
      case "icon-text":
        return 120;
      case "image":
        return 120;
      case "image-text":
        return 140;
      default:
        return 30;
    }
  };

  // Get background color based on variant
  const getBackgroundColor = () => {
    switch (variant) {
      case "default":
        return "rgba(255, 255, 255, 0.1)";
      case "text":
      case "icon":
      case "icon-text":
        return "rgba(0, 0, 0, 0.75)"; // Dark background for better text readability
      case "image":
      case "image-text":
        return "rgba(0, 0, 0, 0.6)"; // Dark overlay for images
      default:
        return "rgba(255, 255, 255, 0.1)";
    }
  };

  // Get border style based on variant
  const getBorderStyle = () => {
    if (variant === "default") {
      return {
        borderColor: "rgba(255, 255, 255, 0.8)",
        borderWidth: "1px",
      };
    } else if (["text", "icon", "icon-text"].includes(variant)) {
      return {
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: "2px",
      };
    } else {
      return {
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderWidth: "2px",
      };
    }
  };

  return (
    <motion.div
      className="pointer-events-none fixed z-[9998] rounded-lg shadow-lg overflow-hidden"
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
          width: getSize(),
          height: getSize(),
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderStyle().borderColor,
          borderWidth: getBorderStyle().borderWidth,
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
      <AnimatePresence>
        {/* Image Variant */}
        {image && ["image", "image-text"].includes(variant) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={image}
              alt="Cursor image"
              fill
              className="object-cover"
            />
            {/* Dark overlay for better text readability */}
            {variant !== "image" && (
              <div className="absolute inset-0 bg-black/30 z-10"></div>
            )}
          </motion.div>
        )}

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="flex h-full w-full flex-col items-center justify-center relative z-20 px-3 py-2"
        >
          {/* Icon */}
          {icon && ["icon", "icon-text"].includes(variant) && (
            <div className="text-white mb-2">
              {icon}
            </div>
          )}

          {/* Text */}
          {text && ["text", "icon-text", "image-text"].includes(variant) && (
            <div className="text-sm font-medium text-white whitespace-nowrap px-2">
              {text}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
