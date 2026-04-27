"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Briefcase, Code, Check, Send, Loader2 } from "lucide-react";
import { MorphingPopover, MorphingPopoverTrigger, MorphingPopoverContent } from "../ui/morphing-popover";
import { sendEmail } from "@/app/actions/send-email";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="pt-12 pb-24 md:pt-16 md:pb-32 mt-12 md:mt-16 relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12"
        >
          {/* Header Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-10 bg-zinc-800 dark:bg-zinc-200" />
              <span className="text-sm font-semibold tracking-widest uppercase text-zinc-800 dark:text-zinc-200">
                About Me
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-zinc-900 dark:text-zinc-50 font-moonWalk mb-8"
            >
              Crafting digital <br className="hidden lg:block" />
              experiences with <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 italic pr-2">
                purpose & precision.
              </span>
            </motion.h2>

            <motion.div variants={itemVariants} className="hidden lg:block mt-4">
              <MorphingPopover className="w-fit">
                <MorphingPopoverTrigger asChild>
                  <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-medium overflow-hidden transition-all hover:scale-105 shadow-xl shadow-zinc-900/10 dark:shadow-white/10 outline-none">
                    <span className="relative z-10 flex items-center gap-2">
                      Let's Talk <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-2 text-white">
                      Let's Talk <ArrowUpRight className="w-4 h-4 translate-x-0.5 -translate-y-0.5" />
                    </span>
                  </button>
                </MorphingPopoverTrigger>
                <MorphingPopoverContent className="w-[400px] p-6 rounded-3xl !border-zinc-200 dark:!border-zinc-800/50 bottom-full mb-4">
                  <WannaChatForm />
                </MorphingPopoverContent>
              </MorphingPopover>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-12 lg:pl-10">
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <p className="text-2xl md:text-3xl text-zinc-800 dark:text-zinc-200 leading-snug font-light">
                Hi, I'm <span className="font-medium text-zinc-900 dark:text-zinc-100">Musharraf Jamal</span>. A Developer, Designer, and Team Lead bridging the gap between design and engineering.
              </p>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                I thrive on solving complex problems with elegant solutions, ensuring every product is visually stunning, highly performant, and user-centric.
              </p>
            </motion.div>

            {/* Experience List */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 pt-4">
              <div className="flex flex-col gap-3">
                {[
                  {
                    title: "Team Lead",
                    company: "Code Query",
                    period: "2025 — Present",
                    icon: Briefcase,
                    color: "text-indigo-600 dark:text-indigo-400",
                    bg: "bg-indigo-100 dark:bg-indigo-500/20"
                  },
                  {
                    title: "Full Stack Developer",
                    company: "Ghosting Tech",
                    period: "2024 — 2025",
                    icon: Code,
                    color: "text-purple-600 dark:text-purple-400",
                    bg: "bg-purple-100 dark:bg-purple-500/20"
                  }
                ].map((exp, i) => (
                  <div key={i} className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800/50 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-4">
                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${exp.bg} ${exp.color}`}>
                         <exp.icon size={20} />
                       </div>
                       <div>
                         <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{exp.title}</h4>
                         <p className="text-sm text-zinc-500 dark:text-zinc-400">{exp.company}</p>
                       </div>
                    </div>
                    <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">{exp.period}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-zinc-200 dark:border-zinc-800/50">
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100">1.5<span className="text-indigo-500 font-medium">+</span></span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-widest">Years Exp.</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100">10<span className="text-purple-500 font-medium">+</span></span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-widest">Projects</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100">100<span className="text-indigo-500 font-medium">%</span></span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-widest">Commitment</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:hidden mt-4">
              <MorphingPopover className="w-full">
                <MorphingPopoverTrigger asChild>
                  <button className="flex items-center justify-center w-full gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-medium hover:scale-105 transition-transform outline-none">
                    Let's Talk <ArrowUpRight className="w-4 h-4" />
                  </button>
                </MorphingPopoverTrigger>
                <MorphingPopoverContent className="w-[calc(100vw-48px)] sm:w-[400px] p-6 rounded-3xl !border-zinc-200 dark:!border-zinc-800/50 bottom-full mb-4">
                  <WannaChatForm />
                </MorphingPopoverContent>
              </MorphingPopover>
            </motion.div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

function WannaChatForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setIsSuccess(true);
        toast.success(result.message);
        setTimeout(() => {
          setFormData({ email: "", message: "" });
          setIsSuccess(false);
        }, 5000);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="flex flex-col items-center justify-center gap-4 py-8"
        >
          <div className="rounded-full bg-green-100 p-4 dark:bg-green-900/30">
            <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Message Sent!</h3>
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            Thank you for reaching out. I'll get back to you soon!
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="grid gap-5"
        >
          <div className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 font-moonWalk">Wanna Chat?</div>
          <div className="flex flex-col gap-2">
            <Input
              id="email"
              type="email"
              placeholder="Your email address"
              className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 rounded-xl focus-visible:ring-indigo-500"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev: any) => ({ ...prev, email: e.target.value }))
              }
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Textarea
              id="message"
              placeholder="How can I help you?"
              rows={4}
              className="resize-none bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 rounded-xl focus-visible:ring-indigo-500"
              value={formData.message}
              onChange={(e) =>
                setFormData((prev: any) => ({ ...prev, message: e.target.value }))
              }
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors disabled:opacity-70"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

