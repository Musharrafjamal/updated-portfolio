import {
  SmilePlus,
  Briefcase,
  GraduationCap,
  Languages,
  AtSign,
  Phone,
  Twitter,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Server,
  Database,
  Smartphone,
  PaintBucket,
  Brain,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  X,
} from "lucide-react";
import React, { useState, useRef } from "react";
import Image from "next/image";
import WaveText from "../ui/others/wave-text";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import ProfileCard from "./about/profile-card";

const About = () => {
  const [activeTab, setActiveTab] = useState("skill");

  const tabs = [
    { id: "skill", label: "Skills" },
    { id: "experience", label: "Experience" },
  ];

  return (
    <section className="pt-16 pb-10 overflow-hidden bg-gradient-to-b from-transparent to-slate-50/10 dark:to-slate-900/10 relative">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="px-4 sm:px-6 lg:px-10">
        <h2 className="text-4xl font-bold text-center mb-16 font-moonWalk flex items-center justify-center gap-2">
          <div className="size-8">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M19.6471 15.5357H4.35294M19.6471 15.5357V8C19.6471 6.11438 19.6471 5.17157 19.0613 4.58579C18.4755 4 17.5327 4 15.6471 4H8.35294C6.46732 4 5.52451 4 4.93873 4.58579C4.35294 5.17157 4.35294 6.11438 4.35294 8V15.5357M19.6471 15.5357L21.3911 17.3358C21.4356 17.3818 21.4579 17.4048 21.4787 17.4276C21.7998 17.7802 21.9843 18.2358 21.999 18.7124C22 18.7433 22 18.7753 22 18.8393C22 18.9885 22 19.0631 21.996 19.1261C21.9325 20.1314 21.1314 20.9325 20.1261 20.996C20.0631 21 19.9885 21 19.8393 21H4.16068C4.01148 21 3.93688 21 3.87388 20.996C2.86865 20.9325 2.06749 20.1314 2.00398 19.1261C2 19.0631 2 18.9885 2 18.8393C2 18.7753 2 18.7433 2.00096 18.7124C2.01569 18.2358 2.20022 17.7802 2.52127 17.4276C2.54208 17.4048 2.56438 17.3818 2.60888 17.3358L4.35294 15.5357"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M9.5 18.5H14.5"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M12.75 6.75C12.75 7.16421 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.16421 11.25 6.75C11.25 6.33579 11.5858 6 12 6C12.4142 6 12.75 6.33579 12.75 6.75Z"
                  fill="#1C274C"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <WaveText text="About Me" />
          <div className="size-8">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M19.6471 15.5357H4.35294M19.6471 15.5357V8C19.6471 6.11438 19.6471 5.17157 19.0613 4.58579C18.4755 4 17.5327 4 15.6471 4H8.35294C6.46732 4 5.52451 4 4.93873 4.58579C4.35294 5.17157 4.35294 6.11438 4.35294 8V15.5357M19.6471 15.5357L21.3911 17.3358C21.4356 17.3818 21.4579 17.4048 21.4787 17.4276C21.7998 17.7802 21.9843 18.2358 21.999 18.7124C22 18.7433 22 18.7753 22 18.8393C22 18.9885 22 19.0631 21.996 19.1261C21.9325 20.1314 21.1314 20.9325 20.1261 20.996C20.0631 21 19.9885 21 19.8393 21H4.16068C4.01148 21 3.93688 21 3.87388 20.996C2.86865 20.9325 2.06749 20.1314 2.00398 19.1261C2 19.0631 2 18.9885 2 18.8393C2 18.7753 2 18.7433 2.00096 18.7124C2.01569 18.2358 2.20022 17.7802 2.52127 17.4276C2.54208 17.4048 2.56438 17.3818 2.60888 17.3358L4.35294 15.5357"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M9.5 18.5H14.5"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M12.75 6.75C12.75 7.16421 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.16421 11.25 6.75C11.25 6.33579 11.5858 6 12 6C12.4142 6 12.75 6.33579 12.75 6.75Z"
                  fill="#1C274C"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProfileCard />

          {/* Content Column */}
          <motion.div
            className="col-span-1"
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
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden cursor-none`}
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
            <DynamicCard className="relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 border">
              <div className="p-6 md:p-8">
                {/* Bubble Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                              icon={
                                <Code size={18} className="text-indigo-500" />
                              }
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
                              icon={
                                <Server size={18} className="text-green-500" />
                              }
                              title="Backend"
                              skills={[
                                "Node.js",
                                "Express.js",
                                "REST API Design",
                                "Next.js Server Components",
                              ]}
                            />
                            <SkillCategory
                              icon={
                                <Database
                                  size={18}
                                  className="text-amber-500"
                                />
                              }
                              title="Data"
                              skills={["MongoDB", "PostgreSQL", "Redis"]}
                            />
                            <SkillCategory
                              icon={
                                <Smartphone
                                  size={18}
                                  className="text-purple-500"
                                />
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
                                <PaintBucket
                                  size={18}
                                  className="text-pink-500"
                                />
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
                              icon={
                                <Brain size={18} className="text-indigo-500" />
                              }
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
                      <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                        <Briefcase className="text-indigo-600" size={20} />
                        <span className="bg-gradient-to-r from-indigo-600 to-indigo-600 bg-clip-text text-transparent">
                          Professional Journey
                        </span>
                      </h3>

                      <ExperienceTimelineSection />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </DynamicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Skill Category
const SkillCategory = ({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px 0px" });

  return (
    <motion.div
      ref={ref}
      className="space-y-3 bg-indigo-500 dark:bg-indigo-800/80 p-4 rounded-xl border border-indigo-100 dark:border-indigo-700"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileHover={{ y: -5, boxShadow: "0 10px 15px -2px #C7D2FE" }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-700 flex items-center justify-center shadow-sm">
          {icon}
        </div>
        <div className="text-xl text-white font-moonWalk">
          {title}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="px-3 py-1 bg-white dark:bg-zinc-700 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            style={{
              y: -2,
              boxShadow: "0 4px 10px -1px #A5B4FC",
            }}
            whileHover={{
              y: 0,
              boxShadow: "0 0 0 1px #A5B4FC",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

// Dynamic 3D Card component
const DynamicCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [25, 0, -25]
  );

  return (
    <motion.div
      ref={cardRef}
      className={`perspective-1000 ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
        transform: `perspective(1000px)`,
        rotateX,
      }}
    >
      {children}
    </motion.div>
  );
};

// Experience Timeline
const ExperienceTimelineSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false });
  const [selectedExp, setSelectedExp] = useState<string | null>(null);

  const experiences = [
    {
      id: "lead",
      title: "Team Lead",
      company: "Code Query",
      period: "February 2025 - Present",
      color: "bg-indigo-500",
      icon: <Briefcase size={18} />,
      responsibilities: [
        "Led end-to-end development of multiple high-traffic service-booking & e-commerce platforms, improving scalability and performance by 80%",
        "Architected multi-panel infrastructure with seamless connectivity, achieving 95% system reliability",
        "Led and mentored a diverse team of 6 professionals (2 Jr. devs, 2 Sr. devs, 1 QA tester, 1 UI/UX designer)",
        "Implemented advanced authentication system using JWT and OAuth2.0, significantly enhancing security posture",
        "Designed and deployed automation processes reducing manual workload by 40% while improving system response times",
      ],
    },
    {
      id: "dev",
      title: "Full Stack Developer",
      company: "Ghosting Tech",
      period: "April 2024 - January 2025",
      color: "bg-indigo-500",
      icon: <Code size={18} />,
      responsibilities: [
        "Engineered responsive dashboard applications using Next.js, React and Node.js",
        "Optimized database queries, achieving 60% faster report generation",
        "Developed comprehensive RESTful API ecosystem for web and mobile applications",
        "Reduced application load time by 45% through code splitting and optimization",
        "Implemented automated testing infrastructure identifying 85% of potential bugs",
      ],
    },
    {
      id: "intern",
      title: "Intern Full Stack Developer",
      company: "Ghosting Tech",
      period: "January 2024 - April 2024",
      color: "bg-green-500",
      icon: <Server size={18} />,
      responsibilities: [
        "Single-handedly delivered client projects 15% ahead of scheduled deadlines",
        "Created engaging, interactive UIs using React, Tailwind CSS, and modern JavaScript",
        "Integrated secure payment gateway systems for e-commerce applications",
        "Implemented mobile-first responsive design principles, improving mobile user engagement by 60%",
      ],
    },
  ];

  return (
    <div ref={containerRef} className="relative py-8">
      <motion.div
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : { height: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute left-[calc(50%-1px)] top-0 w-0.5 bg-gradient-to-b from-indigo-600 via-indigo-500 to-purple-600 z-0"
      />

      <div className="space-y-12 relative z-10">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center"
            >
              <div
                className={`w-1/2 pr-8 ${index % 2 === 0 ? "" : "invisible"}`}
              >
                {index % 2 === 0 && (
                  <motion.div
                    className="text-right"
                    initial={{ x: -50, opacity: 0 }}
                    animate={
                      isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  >
                    <h4 className="text-lg font-bold">{exp.title}</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {exp.company}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500">
                      {exp.period}
                    </p>
                    <button
                      onClick={() =>
                        setSelectedExp(selectedExp === exp.id ? null : exp.id)
                      }
                      className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 flex items-center justify-end gap-1 group"
                    >
                      {selectedExp === exp.id ? "Hide details" : "View details"}
                      <motion.span
                        animate={{ x: selectedExp === exp.id ? 0 : [0, 5, 0] }}
                        transition={{
                          duration: 0.5,
                          repeat: selectedExp === exp.id ? 0 : Infinity,
                          repeatDelay: 1,
                        }}
                      >
                        {selectedExp === exp.id ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </motion.span>
                    </button>
                  </motion.div>
                )}
              </div>

              <motion.div
                className={`w-8 h-8 rounded-full z-20 flex items-center justify-center ${exp.color} text-white shadow-lg`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  delay: index * 0.2 + 0.1,
                }}
                whileHover={{ scale: 1.2 }}
              >
                {exp.icon}
              </motion.div>

              <div
                className={`w-1/2 pl-8 ${index % 2 === 1 ? "" : "invisible"}`}
              >
                {index % 2 === 1 && (
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={
                      isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  >
                    <h4 className="text-lg font-bold">{exp.title}</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {exp.company}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500">
                      {exp.period}
                    </p>
                    <button
                      onClick={() =>
                        setSelectedExp(selectedExp === exp.id ? null : exp.id)
                      }
                      className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group"
                    >
                      {selectedExp === exp.id ? "Hide details" : "View details"}
                      <motion.span
                        animate={{ x: selectedExp === exp.id ? 0 : [0, 5, 0] }}
                        transition={{
                          duration: 0.5,
                          repeat: selectedExp === exp.id ? 0 : Infinity,
                          repeatDelay: 1,
                        }}
                      >
                        {selectedExp === exp.id ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </motion.span>
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Details Expansion */}
            <AnimatePresence>
              {selectedExp === exp.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 overflow-hidden"
                >
                  <div
                    className={`mx-auto w-3/4 p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border-l-4 ${exp.color}`}
                  >
                    <h5 className="font-medium mb-2">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <ArrowRight
                            size={16}
                            className="text-indigo-500 mt-1 flex-shrink-0"
                          />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
