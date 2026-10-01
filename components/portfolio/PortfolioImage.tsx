"use client";

import Image, { type ImageProps, type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type PortfolioImageProps = Omit<
  ImageProps,
  "src" | "placeholder" | "onError"
> & {
  src: StaticImageData;
  fallbackLabel: string;
  fallbackDescription?: string;
};

export default function PortfolioImage({
  src,
  fallbackLabel,
  fallbackDescription = "Preview unavailable. You can still explore the project.",
  alt,
  style,
  ...props
}: PortfolioImageProps) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src.src]);

  return (
    <>
      <Image
        {...props}
        src={src}
        alt={alt}
        placeholder="blur"
        quality={82}
        style={{ ...style, ...(failed ? { opacity: 0 } : {}) }}
        onError={() => setFailed(true)}
      />
      {failed && (
        <span className="media-fallback" role="status">
          <span>{fallbackLabel}</span>
          <span>{fallbackDescription}</span>
        </span>
      )}
    </>
  );
}
