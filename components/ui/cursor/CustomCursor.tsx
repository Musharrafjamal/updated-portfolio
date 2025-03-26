"use client";

import React, { useEffect, useState, useRef } from "react";
import { useCursor } from "../../../contexts/CursorContext";
import { CursorRing } from "./CursorRing";
import { CursorButton } from "./CursorButton";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { variant, text, icon, image } = useCursor();
  
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const animateTrail = (time: number) => {
    if (previousTimeRef.current === null) {
      previousTimeRef.current = time;
    }
    
    const smoothFactor = 0.1;
    
    setTrailPosition(prev => ({
      x: lerp(prev.x, position.x, smoothFactor),
      y: lerp(prev.y, position.y, smoothFactor)
    }));
    
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateTrail);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateTrail);
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
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
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position]);

  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  // Only show custom cursors when variant is not "default" or "none"
  const showRing = variant !== "default" && variant !== "none";
  const showButton = variant === "button";

  return (
    <>
      {/* Trailing cursor ring */}
      {showRing && (
        <CursorRing 
          position={trailPosition} 
          isVisible={isVisible} 
          variant={variant}
          text={text}
          icon={icon}
          image={image}
        />
      )}

      {/* Button-style cursor */}
      {showButton && (
        <CursorButton
          position={trailPosition}
          isVisible={isVisible}
          text={text}
          icon={icon}
        />
      )}
    </>
  );
}; 