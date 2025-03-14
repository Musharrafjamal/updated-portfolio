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
}

const WorkCard = ({ image, title, description, link }: WorkCardProps) => {
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
      className="relative h-[400px] w-full overflow-hidden rounded-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={link} className="block h-full w-full cursor-none">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 text-sm opacity-80">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default WorkCard;
