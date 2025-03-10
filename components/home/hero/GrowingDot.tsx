import { motion, MotionValue, useTransform } from "framer-motion";

interface GrowingDotProps {
  scrollYProgress: MotionValue<number>;
}

export function GrowingDot({ scrollYProgress }: GrowingDotProps) {
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-10 flex items-center justify-center"
      style={{ opacity }}
    >
      <motion.div
        className="w-3.5 h-3.5 bg-purple-500 rounded-full"
        style={{ scale }}
      />
    </motion.div>
  );
}
