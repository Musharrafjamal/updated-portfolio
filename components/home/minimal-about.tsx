import { SmilePlus, Briefcase, GraduationCap, Languages, AtSign, Phone, Twitter, Github, Linkedin, ExternalLink } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import WaveText from "../ui/others/wave-text";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");
  
  const socialLinks = [
    { icon: <Twitter className="group-hover:text-blue-400" size={18} />, label: "X", link: "https://twitter.com/yourusername" },
    { icon: <Github className="group-hover:text-purple-500" size={18} />, label: "Github", link: "https://github.com/yourusername" },
    { icon: <Linkedin className="group-hover:text-blue-600" size={18} />, label: "LinkedIn", link: "https://linkedin.com/in/yourusername" },
    { icon: <ExternalLink className="group-hover:text-green-500" size={18} />, label: "Portfolio", link: "https://yourportfolio.com" },
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
          <SmilePlus className="text-blue-500" size={30} style={{ transform: "scaleX(-1)" }} />
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
                <span className="text-gray-600 dark:text-gray-400">musharrafjamal08@email.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-sm"
                whileHover={{ x: 5 }}
              >
                <Phone size={16} className="text-blue-500" />
                <span className="text-gray-600 dark:text-gray-400">+91 9334079373</span>
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
            {/* Tabs */}
            <div className="flex flex-wrap mb-8 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id 
                      ? "bg-blue-600 text-white shadow-md" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 min-h-[400px]">
              {activeTab === "about" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-blue-600">Professional Summary</span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Senior Full Stack Developer with 1.5+ years of experience building scalable web applications 
                    and leading development teams. Expertise in Next.js, TypeScript, Figma, and Expo with a proven 
                    track record of delivering complex projects while mentoring junior developers.
                  </p>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3">Technical Skills</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <SkillCategory title="Frontend" skills={["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]} />
                      <SkillCategory title="Backend" skills={["Node.js", "Express.js", "REST API Design", "Next.js Server Components"]} />
                      <SkillCategory title="Data" skills={["MongoDB", "PostgreSQL", "Redis"]} />
                      <SkillCategory title="Mobile" skills={["React Native", "Expo", "Firebase", "Supabase", "Appwrite"]} />
                      <SkillCategory title="Design" skills={["Figma", "UI/UX Principles", "Responsive Design", "Component Libraries"]} />
                      <SkillCategory title="Others" skills={["VPS Hosting", "AI Integration", "Chrome Extensions", "Automation"]} />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "experience" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Briefcase className="text-blue-600" size={20} />
                    <span>Professional Experience</span>
                  </h3>
                  
                  <div className="space-y-8">
                    <ExperienceCard 
                      title="Team Lead"
                      company="Code Query"
                      period="February 2025 - Present"
                      responsibilities={[
                        "Led end-to-end development of multiple high-traffic service-booking & e-commerce platforms, improving scalability and performance by 80%",
                        "Architected multi-panel infrastructure with seamless connectivity, achieving 95% system reliability",
                        "Led and mentored a diverse team of 6 professionals (2 Jr. devs, 2 Sr. devs, 1 QA tester, 1 UI/UX designer)",
                        "Implemented advanced authentication system using JWT and OAuth2.0, significantly enhancing security posture",
                        "Designed and deployed automation processes reducing manual workload by 40% while improving system response times"
                      ]}
                    />
                    
                    <ExperienceCard 
                      title="Full Stack Developer"
                      company="Ghosting Tech"
                      period="April 2024 - January 2025"
                      responsibilities={[
                        "Engineered responsive dashboard applications using Next.js, React and Node.js",
                        "Optimized database queries, achieving 60% faster report generation",
                        "Developed comprehensive RESTful API ecosystem for web and mobile applications",
                        "Reduced application load time by 45% through code splitting and optimization",
                        "Implemented automated testing infrastructure identifying 85% of potential bugs"
                      ]}
                    />
                    
                    <ExperienceCard 
                      title="Intern Full Stack Developer"
                      company="Ghosting Tech"
                      period="Patna, Bihar"
                      responsibilities={[
                        "Single-handedly delivered client projects 15% ahead of scheduled deadlines",
                        "Created engaging, interactive UIs using React, Tailwind CSS, and modern JavaScript",
                        "Integrated secure payment gateway systems for e-commerce applications",
                        "Implemented mobile-first responsive design principles, improving mobile user engagement by 60%"
                      ]}
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <GraduationCap className="text-blue-600" size={20} />
                    <span>Education</span>
                  </h3>
                  
                  <div className="space-y-6">
                    <EducationCard 
                      degree="BCA Bachelor's in Computer Application"
                      institution="MMHAPU"
                      year="2025"
                    />
                    
                    <EducationCard 
                      degree="I.Sc Intermediate in Science"
                      institution="F • N • S Academy"
                      year="2022"
          />
        </div>
                </motion.div>
              )}

              {activeTab === "languages" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Languages className="text-blue-600" size={20} />
                    <span>Languages</span>
          </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <LanguageCard language="Hindi" proficiency="Native" percentage={100} />
                    <LanguageCard language="English" proficiency="Fluent" percentage={90} />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper Components
const SkillCategory = ({ title, skills }: { title: string, skills: string[] }) => (
  <div className="space-y-2">
    <h5 className="font-medium text-blue-700 dark:text-blue-400">{title}</h5>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index}
          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceCard = ({ title, company, period, responsibilities }: { title: string, company: string, period: string, responsibilities: string[] }) => (
  <motion.div 
    className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-800"
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-500" />
    <h4 className="text-lg font-semibold">{title}</h4>
    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
      <span>{company}</span>
      <span className="w-1 h-1 rounded-full bg-gray-400" />
      <span>{period}</span>
    </div>
    <ul className="list-disc ml-4 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
      {responsibilities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const EducationCard = ({ degree, institution, year }: { degree: string, institution: string, year: string }) => (
  <motion.div 
    className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/30"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex justify-between items-start">
      <div>
        <h4 className="font-semibold text-blue-800 dark:text-blue-300">{degree}</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{institution}</p>
      </div>
      <div className="bg-blue-600 text-white text-xs font-medium py-1 px-2.5 rounded">
        {year}
      </div>
    </div>
  </motion.div>
);

const LanguageCard = ({ language, proficiency, percentage }: { language: string, proficiency: string, percentage: number }) => (
  <motion.div 
    className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-100 dark:border-purple-800/30"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex justify-between mb-2">
      <h4 className="font-medium text-purple-800 dark:text-purple-300">{language}</h4>
      <span className="text-sm text-purple-600 dark:text-purple-400">{proficiency}</span>
    </div>
    <div className="w-full h-2 bg-purple-100 dark:bg-purple-900/40 rounded-full overflow-hidden">
      <motion.div 
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  </motion.div>
);

export default About;