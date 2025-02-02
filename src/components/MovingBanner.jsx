import { motion } from "framer-motion";

export default function MovingBanner() {
  return (
    <motion.div
      className="w-full h-64 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg"
      whileHover={{
        x: [0, 2, -2, 0], 
        y: [0, -2, 2, 0], 
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="max-w-7xl mx-auto">Legacy no longer</div>
    </motion.div>
  );
}
