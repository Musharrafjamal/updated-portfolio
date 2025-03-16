"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Fullscreen } from "lucide-react";
import { useCursorEffect } from "@/hooks/useCursorEffect";
import { GradientText } from "../ui/gradient-text";

interface WorkCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  color: string;
}

const WorkCard = ({
  image,
  title,
  description,
  link,
  color,
}: WorkCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Use the custom hook to handle cursor hover effects
  useCursorEffect({
    targetRef: cardRef,
    variant: "button",
    icon: <Fullscreen />,
    text: "View Project",
  });

  return (
    <motion.div
      ref={cardRef}
      className="relative h-[40rem] w-full overflow-hidden rounded-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={link}
        className="block h-full w-full cursor-none"
        target="_blank"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div
          className={`absolute bottom-0 left-0 w-full  p-6 text-zinc-900`}
          style={{ background: `linear-gradient(to top, ${color}, transparent)` }}
        >
          <h3 className="text-xl font-bold font-moonWalk" style={{ color: "black" }}>
            {title}
          </h3>
          <p className="mt-2 font-merienda font-bold">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default WorkCard;
