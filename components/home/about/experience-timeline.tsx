import { useInView } from "framer-motion";
import {
  Code,
  Server,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
                    <h4 className="text-lg font-bold font-moonWalk text-indigo-500 dark:text-indigo-400">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-100">
                      {exp.company}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-300">
                      {exp.period}
                    </p>
                    <button
                      onClick={() =>
                        setSelectedExp(selectedExp === exp.id ? null : exp.id)
                      }
                      className="mt-2 text-sm text-indigo-600 dark:text-indigo-300 flex items-center justify-end gap-1 group"
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
                    <h4 className="text-lg font-bold font-moonWalk text-indigo-500 dark:text-indigo-400">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-100">
                      {exp.company}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-300">
                      {exp.period}
                    </p>
                    <button
                      onClick={() =>
                        setSelectedExp(selectedExp === exp.id ? null : exp.id)
                      }
                      className="mt-2 text-sm text-indigo-600 dark:text-indigo-300 flex items-center gap-1 group"
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
                    className={`mx-auto w-full p-4 bg-white dark:bg-zinc-800 rounded-lg border border-indigo-500 mb-1 ${exp.color}`}
                  >
                    <h5 className="font-medium font-moonWalk mb-2">
                      Key Achievements
                    </h5>
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

export default ExperienceTimelineSection;
