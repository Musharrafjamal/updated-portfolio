"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Fullscreen } from "lucide-react";
import { useCursorEffect } from "@/hooks/useCursorEffect";

interface WorkCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  color: string;
  index: number;
  total: number;
}

const WorkCard = ({
  image,
  title,
  description,
  link,
  color,
  index,
  total,
}: WorkCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Use the custom hook to handle cursor hover effects
  useCursorEffect({
    targetRef: cardRef,
    variant: "button",
    icon: <Fullscreen />,
    text: "View Project",
  });

  return (
    <article className="flex h-screen w-screen shrink-0 items-center justify-center pt-24 pb-16 px-5 sm:px-8 md:pt-36 md:pb-28 md:px-0">
      <Link
        href={link}
        ref={cardRef}
        className="group relative block aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9] w-full md:w-5/6 cursor-none overflow-hidden rounded-2xl md:rounded-lg bg-neutral-950 shadow-[0_20px_60px_rgba(0,0,0,0.2)] md:shadow-[0_30px_100px_rgba(0,0,0,0.22)] active:scale-[0.99] transition-transform"
        target="_blank"
        aria-label={`View ${title} project`}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.025 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/5" />
        <div
          className="absolute inset-y-0 left-0 w-1.5 md:w-2"
          style={{ backgroundColor: color }}
        />
        <div
          className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-6 p-5 text-white sm:gap-8 sm:p-7 md:flex-row md:items-end md:p-10"
          style={{
            background: `linear-gradient(135deg, ${color}24 0%, transparent 42%)`,
          }}
        >
          <div className="max-w-3xl">
            <p className="mb-2 font-merienda text-[10px] font-bold uppercase tracking-[0.24em] text-white/70 sm:mb-3 sm:text-xs sm:tracking-[0.28em]">
              Project {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>
            <h3 className="font-moonWalk text-2xl font-bold leading-tight sm:text-5xl md:text-6xl">
              {title}
            </h3>
            <p className="mt-2 max-w-xl font-merienda text-xs font-bold text-white/82 sm:mt-3 sm:text-base md:text-lg">
              {description}
            </p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition duration-500 group-active:scale-90 group-hover:translate-x-1 group-hover:border-white group-hover:bg-white group-hover:text-black sm:h-12 sm:w-12 md:h-14 md:w-14">
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default WorkCard;
