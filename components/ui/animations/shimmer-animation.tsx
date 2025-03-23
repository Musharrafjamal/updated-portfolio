import React, { ReactNode } from "react";

interface ShimmerElementProps {
  children: ReactNode;
  className?: string;
  speed?: "default" | "fast" | "slow";
  color?: "default" | "gold" | "silver";
  overlay?: boolean;
}

const ShimmerElement: React.FC<ShimmerElementProps> = ({
  children,
  className = "",
  speed = "default",
  color = "default",
  overlay = false,
}) => {
  const speedClass = 
    speed === "fast" ? "animate-shimmer-fast" : 
    speed === "slow" ? "animate-shimmer-slow" : 
    "animate-shimmer";
  
  const colorClass = 
    color === "gold" ? "shimmer-gold" : 
    color === "silver" ? "shimmer-silver" : 
    "";

  if (overlay) {
    return (
      <div className="relative">
        {children}
        <div className={`absolute inset-0 pointer-events-none ${speedClass} ${colorClass} ${className}`}></div>
      </div>
    );
  }

  return (
    <div className={`${speedClass} ${colorClass} ${className}`}>
      {children}
    </div>
  );
};

export default ShimmerElement;