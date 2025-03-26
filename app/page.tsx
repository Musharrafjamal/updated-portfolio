"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/home/HeroSection";
import Tools from "@/components/home/Tools";
import About from "@/components/home/About";
import { ContactForm } from "@/components/home/ContactForm";
import { AuroraBackground } from "@/components/ui/aceternity/AuroraBackground";
import Work from "@/components/work/Work";
import CircularToolSelection from "@/components/test";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-alt">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <HeroSection />
        </motion.div>
      </AuroraBackground>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Work />

        {/* <CircularToolSelection /> */}
        <Tools />
        <About />
        <Footer />
      </motion.div>
    </div>
  );
}
