"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FlipWords } from "../ui/aceternity/FlipWords";
import { useRef, useState } from "react";
import Image from "next/image";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);
  const words = ["Full Stack Developer", "Ui/Ux Designer", "Product Manager"];
  const nameRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={nameRef}
          onMouseMove={handleMouseMove}
          className="text-4xl md:text-6xl font-bold mb-4 relative text-neutral-700 dark:text-white cursor-alias"
        >
          Hi
          {/* <span className="absolute top-[0.78rem] left-[2px] w-3.5 h-3.5 bg-purple-500 rounded-full" /> */}
          , I'm{" "}
          <span>
            Musharraf
            <motion.div
              className="pointer-events-none fixed"
              animate={{
                x: mousePosition.x - 450,
                y: mousePosition.y - 400,
                scale: isHovering ? 1 : 0,
                opacity: isHovering ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
              }}
            >
              <Image
                width={80}
                height={80}
                src="/images/me.jpg"
                alt="Profile"
                className="rounded-full object-cover"
                priority
              />
            </motion.div>
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-3xl mb-8 text-purple-500 font-merienda"
        >
          <FlipWords words={words} /> <br />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4"
        >
          <InteractiveHoverButton
            className="w-full"
            text="View Work"
          />
          {/* <Button size="lg" variant="outline" className="w-full">
            Contact Me
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
}
