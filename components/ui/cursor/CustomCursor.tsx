"use client";

import React, { useEffect, useState, useRef } from "react";
import { useCursor } from "../../../contexts/CursorContext";
import { CursorDot } from "./CursorDot";
import { CursorRing } from "./CursorRing";
import { CursorButton } from "./CursorButton";

export const CustomCursor = () => {
  // Main cursor position (follows mouse exactly)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Trailing cursor position (follows with delay for smooth effect)
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  
  const [isVisible, setIsVisible] = useState(false);
  const { variant, text, icon, image } = useCursor();
  
  // Use refs to store the animation frame IDs
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  
  // Lerp (Linear Interpolation) function for smooth movement
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  // Animation loop using requestAnimationFrame for smoother performance
  const animateTrail = (time: number) => {
    if (previousTimeRef.current === null) {
      previousTimeRef.current = time;
    }
    
    // Smooth factor - lower = smoother but more delay
    const smoothFactor = variant === "default" ? 0.15 : 0.1;
    
    // Update trail position with lerp
    setTrailPosition(prev => ({
      x: lerp(prev.x, position.x, smoothFactor),
      y: lerp(prev.y, position.y, smoothFactor)
    }));
    
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateTrail);
  };

  useEffect(() => {
    // Start the animation loop
    requestRef.current = requestAnimationFrame(animateTrail);
    
    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      // Update the main cursor position immediately
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position]);

  // Hide the cursor on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  // Determine which cursor components to show based on variant
  const showDot = variant === "default";  // Only show dot for default variant
  const showRing = variant !== "button" && variant !== "none";
  const showButton = variant === "button";

  return (
    <>
      {/* Main cursor dot (follows mouse exactly) */}
      {showDot && (
        <CursorDot 
          position={position} 
          isVisible={isVisible} 
          size={6}
        />
      )}

      {/* Trailing cursor ring (follows with smooth delay) */}
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