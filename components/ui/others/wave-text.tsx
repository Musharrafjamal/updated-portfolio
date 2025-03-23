import React from "react";

interface WaveTextProps {
  text: string;
  className?: string;
  characterClassName?: string;
}

const WaveText: React.FC<WaveTextProps> = ({ 
  text, 
  className = "", 
  characterClassName = "" 
}) => {
  return (
    <span className={`inline-flex ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`wave-animation ${characterClassName}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default WaveText;