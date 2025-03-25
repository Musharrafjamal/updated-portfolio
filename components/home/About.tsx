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
import { motion, useInView } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import ProfileCard from "./about/profile-card";

const About = () => {
  const [activeTab, setActiveTab] = useState("skill");

  const socialLinks = [
    {
      icon: (
        <div className="size-4 dark:fill-white group-hover:fill-orange-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 462.799"
          >
            <path
              fill-rule="nonzero"
              d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
            />
          </svg>
        </div>
      ),
      label: "X",
      link: "https://twitter.com/yourusername",
    },
    {
      icon: <Github className="group-hover:text-purple-500" size={18} />,
      label: "Github",
      link: "https://github.com/yourusername",
    },
    {
      icon: <Linkedin className="group-hover:text-blue-600" size={18} />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/yourusername",
    },
  ];

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
            className="absolute rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5"
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
          <SmilePlus className="text-blue-500" size={30} />
          <WaveText text="About Me" />
          <SmilePlus
            className="text-blue-500"
            size={30}
            style={{ transform: "scaleX(-1)" }}
          />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <ProfileCard />

          {/* Content Column */}
          <motion.div
            className="lg:col-span-8"
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
            <DynamicCard
              intensity={8}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 border "
            >
              <div className="p-6 md:p-8">
                {/* Bubble Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-gradient-to-b from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10"
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
                          <h4 className="text-lg font-semibold mb-4">
                            Technical Skills
                          </h4>

                          {/* Animated skill badges */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SkillCategory
                              icon={
                                <Code size={18} className="text-blue-500" />
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
                        <Briefcase className="text-blue-600" size={20} />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
      className="space-y-3 bg-zinc-50 dark:bg-zinc-800/80 p-4 rounded-xl border border-zinc-100 dark:border-zinc-700"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-700 flex items-center justify-center shadow-sm">
          {icon}
        </div>
        <h5 className="font-medium text-blue-700 dark:text-blue-400">
          {title}
        </h5>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="px-3 py-1 bg-white dark:bg-zinc-700 text-blue-700 dark:text-blue-300 rounded-full text-xs shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            whileHover={{
              y: -2,
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
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
  intensity?: number;
}) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      className={`perspective-1000 ${className} mx-10`}
      style={{
        transform: `perspective(1000px) rotateX(8deg) rotateY(-5deg)`,
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
      color: "bg-blue-500",
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
        className="absolute left-[calc(50%-1px)] top-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-purple-600 z-0"
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
                      className="mt-2 text-sm text-blue-600 dark:text-blue-400 flex items-center justify-end gap-1 group"
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
                      className="mt-2 text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1 group"
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
                            className="text-blue-500 mt-1 flex-shrink-0"
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

// Education Cards
const EducationSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false });

  const education = [
    {
      degree: "BCA Bachelor's in Computer Application",
      institution: "MMHAPU",
      year: "2025",
      color: "from-blue-500 to-indigo-600",
    },
    {
      degree: "I.Sc Intermediate in Science",
      institution: "F • N • S Academy",
      year: "2022",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div ref={containerRef} className="py-6">
      <div className="grid grid-cols-1 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <DynamicCard className="overflow-hidden rounded-xl bg-white dark:bg-zinc-800 shadow-xl">
              <div className="relative p-6">
                <div className="absolute top-0 right-0 h-24 w-24 opacity-10">
                  <GraduationCap className="h-full w-full" />
                </div>

                <div className="flex justify-between">
                  <div>
                    <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                      {edu.degree}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {edu.institution}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r ${edu.color}`}
                    >
                      {edu.year}
                    </span>
                  </div>
                </div>

                <motion.div
                  className="w-full h-1 mt-4 bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                />
              </div>
            </DynamicCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Language proficiency with interactive bars
const LanguageSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false });

  const languages = [
    {
      language: "Hindi",
      proficiency: "Native",
      percentage: 100,
      color: "from-green-400 to-emerald-600",
    },
    {
      language: "English",
      proficiency: "Fluent",
      percentage: 90,
      color: "from-blue-400 to-indigo-600",
    },
  ];

  return (
    <div ref={containerRef} className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }
            }
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <DynamicCard
              intensity={8}
              className="overflow-hidden rounded-xl bg-white dark:bg-zinc-800 shadow-lg border border-zinc-100 dark:border-zinc-700"
            >
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center text-white">
                      {lang.language.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-800 dark:text-zinc-200">
                        {lang.language}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {lang.proficiency}
                      </p>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
                    {lang.percentage}%
                  </div>
                </div>

                <div className="relative h-4 w-full bg-zinc-100 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${lang.color}`}
                    initial={{ width: "0%" }}
                    animate={
                      isInView
                        ? { width: `${lang.percentage}%` }
                        : { width: "0%" }
                    }
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      delay: index * 0.3,
                    }}
                  />

                  {/* Animated dots on the bar */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-0 h-full w-1 bg-white/30 dark:bg-black/20"
                      style={{ left: `${(i + 1) * 20}%` }}
                      initial={{ scaleY: 0 }}
                      animate={
                        isInView
                          ? {
                              scaleY: [0, 1, 0],
                              transition: {
                                repeat: Infinity,
                                duration: 2,
                                delay: i * 0.4,
                              },
                            }
                          : {}
                      }
                    />
                  ))}
                </div>
              </div>
            </DynamicCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Social Links with Floating Animation
const FloatingSocialLinks = ({
  links,
}: {
  links: { icon: React.ReactNode; label: string; link: string }[];
}) => {
  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      {links.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          aria-label={social.label}
        >
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-md"
            animate={{ scale: [1, 1.1, 1], opacity: [0, 0.7, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="relative flex items-center justify-center w-12 h-12 bg-white dark:bg-zinc-800 rounded-full shadow-lg z-10"
            whileHover={{ y: -5, rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            {social.icon}
          </motion.div>
          <motion.span
            className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-medium text-zinc-600 dark:text-zinc-400 opacity-0 group-hover:opacity-100"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
          >
            {social.label}
          </motion.span>
        </motion.a>
      ))}
    </div>
  );
};

export default About;
