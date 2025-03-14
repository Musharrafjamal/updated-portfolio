"use client";

import { ReactNode, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!scrollRef.current) return;
    
    // Import locomotive-scroll dynamically only on the client side
    const LocomotiveScroll = require('locomotive-scroll').default;
    
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8,
      lerp: 0.1, // Linear interpolation, lower = smoother
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });
    
    // Clean up
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div 
      ref={scrollRef}
      data-scroll-container
    >
      {children}
    </div>
  );
} 