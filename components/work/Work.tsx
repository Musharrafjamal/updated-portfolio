"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { BicepsFlexed } from "lucide-react";
import WorkCard from "./WorkCard";
import WaveText from "../ui/others/wave-text";

const work = [
  {
    image: "/mockups/revizer.png",
    title: "Revizer",
    description: "AI learning platform — mobile + web with real-time TTS pipeline",
    link: "https://revizer.in",
    color: "#8B5CF6",
  },
  {
    image: "/mockups/greenloom.png",
    title: "Greenloom",
    description: "AI layer for ERPs — agentic ops on Odoo, MS D365, Tally",
    link: "#",
    color: "#10B981",
  },
  {
    image: "/mockups/rhc.png",
    title: "RHC",
    description: "Enterprise IT service management portal for a Riyadh real-estate firm",
    link: "#",
    color: "#F59E0B",
  },
  {
    image: "/mockups/sahil-service.png",
    title: "Sahil Service",
    description: "Three-panel service-provider marketplace with realtime tracking",
    link: "https://sahilservice.com",
    color: "#FFE569",
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.6,
  });
  const xPercent = useTransform(
    smoothProgress,
    [0, 1],
    [0, -100 * (work.length - 1)]
  );
  const x = useTransform(xPercent, (value) => `${value}vw`);
  const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative left-1/2 my-12 md:my-24 w-screen -translate-x-1/2"
      id="work"
      style={{ height: `${work.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 mx-auto flex w-[90%] md:w-5/6 items-center justify-between pt-6 md:pt-12">
          <h2 className="flex items-center justify-center gap-2 font-moonWalk text-2xl font-bold sm:text-3xl md:text-5xl">
            <BicepsFlexed className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
            <WaveText text="Work" />
            <BicepsFlexed
              className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8"
              style={{ transform: "scaleX(-1)" }}
            />
          </h2>
          <div className="hidden items-center gap-3 font-merienda text-sm font-bold uppercase tracking-[0.28em] text-muted-foreground md:flex">
            <span>Scroll</span>
            <span className="h-px w-16 bg-foreground/30" />
          </div>
        </div>

        <motion.div className="flex h-full will-change-transform" style={{ x }}>
          {work.map((item, index) => (
            <WorkCard
              key={item.title}
              {...item}
              index={index}
              total={work.length}
            />
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 mx-auto h-px w-[90%] md:w-5/6 overflow-hidden bg-foreground/15 md:bottom-12">
          <motion.div
            className="h-full origin-left bg-foreground"
            style={{ width: progressWidth }}
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
