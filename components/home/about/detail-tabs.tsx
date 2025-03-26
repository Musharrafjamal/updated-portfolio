import {
    Code,
    Server,
    Database,
    Smartphone,
    PaintBucket,
    Brain,
  } from "lucide-react";
  import React, { useState } from "react";
  import { motion } from "framer-motion";
  import { AnimatePresence } from "framer-motion";
  import SkillCategory from "./skill-category";
  import ExperienceTimelineSection from "./experience-timeline";

const DetailTabs = () => {
    const [activeTab, setActiveTab] = useState("skill");

    const tabs = [
      { id: "skill", label: "Skills" },
      { id: "experience", label: "Experience" },
    ];
  return (
    <motion.div
      className="col-span-3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      {/* Interactive Tab Navigation */}
      <div className="p-2 flex gap-2 border w-fit rounded-full">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Active/inactive tab styling */}
            <motion.div
              className={`absolute inset-0 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500"
                  : "bg-transparent"
              }`}
              layoutId="activeTabBackground"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            />

            {/* Tab indicator dot */}
            {activeTab === tab.id && (
              <motion.div
                className="absolute right-2.5 top-2.5 w-1.5 h-1.5 rounded-full bg-white"
                layoutId="activeTabDot"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />
            )}

            <span
              className={`relative z-10 ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-zinc-700 dark:text-zinc-300"
              }`}
            >
              {tab.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Tab Content Container */}
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 border mt-4">
        <div className="p-6 md:p-6">
          {/* Bubble Background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-b from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10"
                style={{
                  bottom: `-${20 + i * 10}%`,
                  left: `${10 + i * 20}%`,
                  width: `${100 + i * 30}px`,
                  height: `${100 + i * 30}px`,
                  filter: "blur(20px)",
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  delay: i * 1.5,
                }}
              />
            ))}
          </div>

          {/* About Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "skill" && (
              <motion.div
                key="skill"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-xl mb-4 font-moonWalk">
                      Technical Skills
                    </h4>

                    {/* Animated skill badges */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <SkillCategory
                        icon={<Code size={18} className="text-indigo-500" />}
                        title="Frontend"
                        skills={[
                          "Next.js",
                          "React",
                          "TypeScript",
                          "Tailwind CSS",
                          "HTML5/CSS3",
                        ]}
                      />
                      <SkillCategory
                        icon={<Server size={18} className="text-green-500" />}
                        title="Backend"
                        skills={[
                          "Node.js",
                          "Express.js",
                          "REST API Design",
                          "Next.js Server Components",
                        ]}
                      />
                      <SkillCategory
                        icon={<Database size={18} className="text-amber-500" />}
                        title="Data"
                        skills={["MongoDB", "PostgreSQL", "Redis"]}
                      />
                      <SkillCategory
                        icon={
                          <Smartphone size={18} className="text-purple-500" />
                        }
                        title="Mobile"
                        skills={[
                          "React Native",
                          "Expo",
                          "Firebase",
                          "Supabase",
                          "Appwrite",
                        ]}
                      />
                      <SkillCategory
                        icon={
                          <PaintBucket size={18} className="text-pink-500" />
                        }
                        title="Design"
                        skills={[
                          "Figma",
                          "UI/UX Principles",
                          "Responsive Design",
                          "Component Libraries",
                        ]}
                      />
                      <SkillCategory
                        icon={<Brain size={18} className="text-indigo-500" />}
                        title="Others"
                        skills={[
                          "VPS Hosting",
                          "AI Integration",
                          "Chrome Extensions",
                          "Automation",
                        ]}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Experience Tab Content */}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl mb-8 flex items-center gap-2 font-moonWalk">
                  Professional Journey
                </h3>

                <ExperienceTimelineSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailTabs;
