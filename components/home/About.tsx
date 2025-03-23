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
} from "lucide-react";
import React, { useState, useRef } from "react";
import Image from "next/image";
import WaveText from "../ui/others/wave-text";
import { motion, useInView } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const socialLinks = [
    {
      icon: <Twitter className="group-hover:text-blue-400" size={18} />,
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
    {
      icon: <ExternalLink className="group-hover:text-green-500" size={18} />,
      label: "Portfolio",
      link: "https://yourportfolio.com",
    },
  ];

  const tabs = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "languages", label: "Languages" },
  ];

  return (
    <section className="py-24 overflow-hidden bg-gradient-to-b from-transparent to-slate-50/10 dark:to-slate-900/10 relative">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {/* Profile Column */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="group relative w-48 h-48 lg:w-64 lg:h-64 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/images/my-image.png"
                alt="Musharraf Jamal"
                width={1000}
                height={1000}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <h3 className="text-white font-medium">Musharraf Jamal</h3>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Musharraf Jamal
              </h3>
              <div className="text-gray-600 dark:text-gray-400 mt-1 font-medium">
                Team Lead | Developer | Designer
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full">
              <motion.div
                className="flex items-center gap-2 text-sm"
                whileHover={{ x: 5 }}
              >
                <AtSign size={16} className="text-blue-500" />
                <span className="text-gray-600 dark:text-gray-400">
                  musharrafjamal08@email.com
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-sm"
                whileHover={{ x: 5 }}
              >
                <Phone size={16} className="text-blue-500" />
                <span className="text-gray-600 dark:text-gray-400">
                  +91 9334079373
                </span>
              </motion.div>
            </div>

            <div className="flex gap-3 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Interactive Tab Navigation */}
            <div className="mb-8 overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-600/10 dark:to-purple-600/10 rounded-lg -z-10"
                animate={{
                  background: [
                    "linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))",
                    "linear-gradient(to right, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))",
                    "linear-gradient(to right, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))",
                  ],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <div className="p-1 flex flex-wrap gap-2">
                {tabs.map((tab, index) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 overflow-hidden`}
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
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                          : "bg-white dark:bg-gray-800"
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
                        className="absolute right-2 top-2 w-1.5 h-1.5 rounded-full bg-white"
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
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Tab Content Container */}
            <DynamicCard
              intensity={8}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl min-h-[560px]"
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
                  {activeTab === "about" && (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <h3 className="text-xl font-bold flex items-center">
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                              Professional Summary
                            </span>
                            <motion.div
                              className="ml-3 h-px bg-gradient-to-r from-blue-500 to-transparent flex-grow"
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1, delay: 0.3 }}
                            />
                          </h3>
                          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                            Senior Full Stack Developer with 1.5+ years of
                            experience building scalable web applications and
                            leading development teams. Expertise in Next.js,
                            TypeScript, Figma, and Expo with a proven track
                            record of delivering complex projects while
                            mentoring junior developers.
                          </p>
                        </motion.div>

                        <motion.div
                          className="mt-8"
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

                  {/* Education Tab Content */}
                  {activeTab === "education" && (
                    <motion.div
                      key="education"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                        <GraduationCap className="text-blue-600" size={20} />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          Academic Background
                        </span>
                      </h3>

                      <EducationSection />
                    </motion.div>
                  )}

                  {/* Languages Tab Content */}
                  {activeTab === "languages" && (
                    <motion.div
                      key="languages"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                        <Languages className="text-blue-600" size={20} />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          Language Proficiency
                        </span>
                      </h3>

                      <LanguageSection />
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
      className="space-y-3 bg-gray-50 dark:bg-gray-800/80 p-4 rounded-xl border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm">
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
            className="px-3 py-1 bg-white dark:bg-gray-700 text-blue-700 dark:text-blue-300 rounded-full text-xs shadow-sm"
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
  intensity = 15,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current as HTMLElement;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const posX = e.clientX - centerX;
    const posY = e.clientY - centerY;

    // Calculate rotation based on mouse position relative to card center
    const rotateXValue = (posY / (rect.height / 2)) * -intensity;
    const rotateYValue = (posX / (rect.width / 2)) * intensity;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`perspective-1000 ${className}`}
      style={{
        transform: mouseOver
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          : "perspective(1000px) rotateX(0) rotateY(0)",
        transition: mouseOver ? "none" : "transform 0.5s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => {
        setMouseOver(false);
        setRotateX(0);
        setRotateY(0);
      }}
    >
      {children}
    </motion.div>
  );
};

// Parallax skill icon
// const ParallaxSkillIcon = ({
//   icon: Icon,
//   label,
//   color,
//   delay = 0,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   color: string;
//   delay?: number;
// }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

//   return (
//     <motion.div
//       ref={ref}
//       className="flex flex-col items-center justify-center"
//       initial={{ opacity: 0, y: 20 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.5, delay }}
//     >
//       <motion.div
//         className={`w-12 h-12 rounded-lg flex items-center justify-center bg-white/90 dark:bg-gray-800/90 shadow-lg`}
//         whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
//       >
//         <Icon size={24} className={color} />
//       </motion.div>
//       <span className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-400">
//         {label}
//       </span>
//     </motion.div>
//   );
// };

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
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.company}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
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
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.company}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
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
                    className={`mx-auto w-3/4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 ${exp.color}`}
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
            <DynamicCard className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-xl">
              <div className="relative p-6">
                <div className="absolute top-0 right-0 h-24 w-24 opacity-10">
                  <GraduationCap className="h-full w-full" />
                </div>

                <div className="flex justify-between">
                  <div>
                    <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
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
                  className="w-full h-1 mt-4 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"
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
              className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center text-white">
                      {lang.language.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200">
                        {lang.language}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {lang.proficiency}
                      </p>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {lang.percentage}%
                  </div>
                </div>

                <div className="relative h-4 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
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
            className="relative flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg z-10"
            whileHover={{ y: -5, rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            {social.icon}
          </motion.div>
          <motion.span
            className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100"
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
