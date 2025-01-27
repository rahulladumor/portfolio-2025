import { motion } from "framer-motion";
import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 0.3, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                 rounded-full blur-3xl"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
                    bg-[size:24px_24px]" />
    </div>
  );
};

export default AnimatedBackground;
