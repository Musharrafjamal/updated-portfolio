"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { BicepsFlexed } from "lucide-react";
import WorkCard from "./WorkCard";
import WaveText from "../ui/others/wave-text";

const work = [
  {
    image: "/mockups/dozit.png",
    title: "Dozit",
    description: "Provider market place!",
    link: "https://dozit.in",
    color: "#FFE569",
  },
  {
    image: "/mockups/ridhi-suman-fabrics.png",
    title: "Ridhi Suman Fabrics",
    description: "E-commerce store",
    link: "https://www.ridhisumanfabrics.com",
    color: "#AEEA94",
  },
  {
    image: "/mockups/chatfolio.png",
    title: "Chatfolio",
    description: "Ai chat saver chrome extension",
    link: "https://chatfolio-livid.vercel.app",
    color: "#C5BAFF",
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
      className="relative left-1/2 my-24 w-screen -translate-x-1/2"
      id="work"
      style={{ height: `${work.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 mx-auto flex w-5/6 items-center justify-between pt-8 md:pt-12">
          <h2 className="flex items-center justify-center gap-2 font-moonWalk text-3xl font-bold md:text-5xl">
            <BicepsFlexed className="h-6 w-6 md:h-8 md:w-8" />
            <WaveText text="Work" />
            <BicepsFlexed
              className="h-6 w-6 md:h-8 md:w-8"
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

        <div className="pointer-events-none absolute inset-x-0 bottom-10 z-20 mx-auto h-px w-5/6 overflow-hidden bg-foreground/15 md:bottom-12">
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
