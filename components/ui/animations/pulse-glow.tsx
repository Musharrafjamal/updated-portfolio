import React, { ReactNode } from "react";

interface PulseGlowElementProps {
  children: ReactNode;
  className?: string;
  speed?: "default" | "fast" | "slow";
  color?: "default" | "blue" | "purple" | "pink";
}

const PulseGlowElement: React.FC<PulseGlowElementProps> = ({
  children,
  className = "",
  speed = "default",
  color = "default",
}) => {
  const speedClass = 
    speed === "fast" ? "animate-pulse-glow-fast" : 
    speed === "slow" ? "animate-pulse-glow-slow" : 
    "animate-pulse-glow";
  
  const colorClass = 
    color === "blue" ? "pulse-glow-blue" : 
    color === "purple" ? "pulse-glow-purple" : 
    color === "pink" ? "pulse-glow-pink" : 
    "";

  return (
    <div className={`${speedClass} ${colorClass} ${className}`}>
      {children}
    </div>
  );
};

export default PulseGlowElement;