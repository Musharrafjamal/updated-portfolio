"use client";

import { useEffect } from "react";
import { useCursor, CursorVariant } from "../contexts/CursorContext";

interface UseCursorEffectOptions {
  targetRef: React.RefObject<HTMLElement>;
  variant: CursorVariant;
  text?: string | null;
  icon?: React.ReactNode | null;
  image?: string | null;
  resetVariant?: CursorVariant;
}

export const useCursorEffect = ({
  targetRef,
  variant,
  text = null,
  icon = null,
  image = null,
  resetVariant = "default",
}: UseCursorEffectOptions) => {
  const { setVariant, setText, setIcon, setImage } = useCursor();

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      setVariant(variant);
      if (text !== undefined) setText(text);
      if (icon !== undefined) setIcon(icon);
      if (image !== undefined) setImage(image);
    };

    const handleMouseLeave = () => {
      setVariant(resetVariant);
      setText(null);
      setIcon(null);
      setImage(null);
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [targetRef, variant, text, icon, image, resetVariant, setVariant, setText, setIcon, setImage]);
}; 