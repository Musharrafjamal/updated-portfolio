"use client";
import Header from "@/components/universal/navbar/header";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const NewHero = () => {
  const { theme } = useTheme();
  return (
    <section>
      <Header />
      <div className="min-h-[28rem] md:h-[38rem] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center md:items-end justify-center md:justify-around bg-gradient-to-b from-transparent to-transparent dark:bg-gradient-to-b dark:from-transparent dark:to-transparent md:bg-gradient-to-b md:from-transparent md:to-zinc-100 md:dark:bg-gradient-to-b md:dark:from-transparent md:dark:to-zinc-900 my-8 md:my-16">
        <div className="relative w-full md:w-auto flex justify-center items-end px-4 md:px-0 overflow-hidden md:overflow-visible rounded-3xl md:rounded-none bg-gradient-to-b from-zinc-50 to-zinc-100 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 md:bg-gradient-to-b md:from-transparent md:to-transparent md:dark:bg-gradient-to-b md:dark:from-transparent md:dark:to-transparent">
          <div className="relative z-10">
            {/* Blurred shadow for light theme */}
            <div
              className="absolute inset-0 blur-2xl opacity-30 dark:hidden"
              style={{
                background: "radial-gradient(circle at center, rgba(0, 0, 0, 0.4) 0%, transparent 70%)",
                transform: "translateY(10%) scale(1.1)",
              }}
            />
            {/* Glowing shadow for dark theme - Outer glow */}
            <div
              className="absolute inset-0 blur-3xl opacity-40 hidden dark:block"
              style={{
                background: "radial-gradient(circle at bottom, rgba(99, 102, 241, 0.6) 0%, rgba(139, 92, 246, 0.4) 1%, transparent 60%)",
                transform: "translateY(10%) scale(1.2)",
              }}
            />
            {/* Glowing shadow for dark theme - Inner glow */}
            <div
              className="absolute inset-0 blur-2xl opacity-50 hidden dark:block"
              style={{
                background: "radial-gradient(circle at bottom, rgba(139, 92, 246, 0.7) 0%, rgba(99, 102, 241, 0.5) 1%, transparent 60%)",
                transform: "translateY(10%) scale(1.1)",
              }}
            />
            {/* Glowing shadow for dark theme - Core glow */}
            <div
              className="absolute inset-0 blur-xl opacity-60 hidden dark:block"
              style={{
                background: "radial-gradient(circle at bottom, rgba(167, 139, 250, 0.8) 0%, rgba(139, 92, 246, 0.6) 1%, transparent 60%)",
                transform: "translateY(10%) scale(1.05)",
              }}
            />
            <Image
              src="/images/generated-me.png"
              alt="Musharraf"
              width={1000}
              height={1000}
              className="max-w-[280px] md:max-w-lg object-cover h-[24rem] md:h-[36rem] object-bottom relative"
              style={{ objectPosition: "center top" }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-1 w-full md:w-1/2 h-full px-2 md:px-0 py-4 md:py-0  bg-white md:bg-transparent">
          <h2 className="text-lg md:text-5xl font-moonWalk font-bold text-center md:text-left">Musharraf Jamal</h2>
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 text-center md:text-left">
            Web Developer | App Developer | UI/UX Designer
          </p>
          <hr className="border-zinc-300 dark:border-zinc-700 my-2" />
          <p className="text-zinc-700 dark:text-zinc-200 font-light text-xl md:text-4xl text-center md:text-left">
            Full Stack Developer with{" "}
            <span className="font-medium">1.5+ Years</span> of experience
            building scalable web applications and leading development team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
