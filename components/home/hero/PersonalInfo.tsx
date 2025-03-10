"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function PersonalInfo() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-purple-500 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-64 h-64 relative rounded-full overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="Musharraf"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl font-bold mb-4"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg mb-4"
            >
              I'm Musharraf, a 20-year-old full-stack developer passionate about
              creating beautiful and functional web applications. With a keen
              eye for design and a love for clean code, I strive to build
              seamless user experiences.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg"
            >
              <li>🚀 Currently working on: Next.js projects</li>
              <li>🌱 Learning: Advanced React patterns and GraphQL</li>
              <li>💬 Ask me about: JavaScript, React, and CSS animations</li>
              <li>
                ⚡ Fun fact: I can solve a Rubik's cube in under 2 minutes!
              </li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
