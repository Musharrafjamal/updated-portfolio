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
    <article className="flex h-screen w-screen shrink-0 items-center justify-center pt-32 pb-24 md:pt-36 md:pb-28">
      <Link
        href={link}
        ref={cardRef}
        className="group relative block aspect-[21/9] w-5/6 cursor-none overflow-hidden rounded-lg bg-neutral-950 shadow-[0_30px_100px_rgba(0,0,0,0.22)]"
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
          className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-8 p-5 text-white sm:p-7 md:flex-row md:items-end md:p-10"
          style={{
            background: `linear-gradient(135deg, ${color}24 0%, transparent 42%)`,
          }}
        >
          <div className="max-w-3xl">
            <p className="mb-3 font-merienda text-xs font-bold uppercase tracking-[0.28em] text-white/70">
              Project {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>
            <h3 className="font-moonWalk text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
              {title}
            </h3>
            <p className="mt-3 max-w-xl font-merienda text-sm font-bold text-white/82 sm:text-base md:text-lg">
              {description}
            </p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition duration-500 group-hover:translate-x-1 group-hover:border-white group-hover:bg-white group-hover:text-black md:h-14 md:w-14">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default WorkCard;
