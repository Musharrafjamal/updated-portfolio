import { motion } from "framer-motion";

import { useInView } from "framer-motion";
import { useRef } from "react";

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
        className="space-y-3 bg-gradient-to-br from-indigo-600 to-indigo-500 dark:from-zinc-900 dark:to-zinc-800 p-4 rounded-xl border border-indigo-100 dark:border-zinc-600 shadow-lg hover:shadow-indigo-300 dark:hover:shadow-zinc-900"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white dark:bg-black flex items-center justify-center shadow-sm">
            {icon}
          </div>
          <div className="text-xl text-white font-moonWalk">{title}</div>
        </div>
  
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 cursor-pointer bg-white dark:bg-zinc-700 text-indigo-700 dark:text-white rounded-full text-sm shadow-md shadow-indigo-300 dark:shadow-zinc-800"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
  );
};

export default SkillCategory;
