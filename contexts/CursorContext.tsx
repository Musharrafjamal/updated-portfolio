"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define all possible cursor variants
export type CursorVariant = 
  | "default" 
  | "text" 
  | "icon" 
  | "icon-text" 
  | "image" 
  | "image-text" 
  | "button"
  | "dot" 
  | "none";

interface CursorContextType {
  variant: CursorVariant;
  setVariant: (variant: CursorVariant) => void;
  text: string | null;
  setText: (text: string | null) => void;
  icon: React.ReactNode | null;
  setIcon: (icon: React.ReactNode | null) => void;
  image: string | null;
  setImage: (image: string | null) => void;
}

const CursorContext = createContext<CursorContextType>({
  variant: "default",
  setVariant: () => {},
  text: null,
  setText: () => {},
  icon: null,
  setIcon: () => {},
  image: null,
  setImage: () => {},
});

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [variant, setVariant] = useState<CursorVariant>("none");
  const [text, setText] = useState<string | null>(null);
  const [icon, setIcon] = useState<React.ReactNode | null>(null);
  const [image, setImage] = useState<string | null>(null);

  return (
    <CursorContext.Provider 
      value={{ 
        variant, 
        setVariant, 
        text, 
        setText, 
        icon, 
        setIcon, 
        image, 
        setImage 
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext); 