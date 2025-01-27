"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedName = () => {
  const [isHovered, setIsHovered] = useState(false);
  const firstName = "Rahul";
  const lastName = "Ladumor";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Glitch effect characters
  const glitchChars = "!<>-_\\/[]{}—=+*^?#@";

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for each letter
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      {/* Gradient background that follows mouse */}
      <div
        className="absolute inset-0 opacity-30 blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 80%)`,
        }}
      />

      <div className="relative">
        {/* First Name */}
        <motion.div
          className="flex mb-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {firstName.split("").map((char, index) => (
            <motion.span
              key={index}
              className="text-6xl font-bold relative inline-block"
              variants={letterVariants}
              whileHover={{
                scale: 1.2,
                color: "#9333EA",
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => {
                setIsHovered(true);
              }}
              onHoverEnd={() => {
                setIsHovered(false);
              }}
            >
              {/* Main character */}
              <span className="relative z-10">{char}</span>

              {/* Glitch effect layers */}
              <motion.span
                className="absolute left-0 top-0 text-purple-500"
                animate={isHovered ? {
                  x: [0, -2, 2, -2, 0],
                  opacity: [0, 1, 0.5, 0],
                } : {}}
                transition={{ duration: 0.2, repeat: Infinity }}
              >
                {glitchChars[Math.floor(Math.random() * glitchChars.length)]}
              </motion.span>
              <motion.span
                className="absolute left-0 top-0 text-blue-500"
                animate={isHovered ? {
                  x: [0, 2, -2, 2, 0],
                  opacity: [0, 0.5, 1, 0],
                } : {}}
                transition={{ duration: 0.2, repeat: Infinity, delay: 0.05 }}
              >
                {glitchChars[Math.floor(Math.random() * glitchChars.length)]}
              </motion.span>
            </motion.span>
          ))}
        </motion.div>

        {/* Last Name */}
        <motion.div
          className="flex"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {lastName.split("").map((char, index) => (
            <motion.span
              key={index}
              className="text-6xl font-bold relative inline-block"
              variants={letterVariants}
              whileHover={{
                scale: 1.2,
                color: "#3B82F6",
                transition: { duration: 0.2 },
              }}
            >
              {/* Main character */}
              <span className="relative z-10">{char}</span>

              {/* Tech circuit lines */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={false}
                whileHover={{
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 40 40"
                  style={{ position: "absolute", top: 0, left: 0 }}
                >
                  <motion.path
                    d="M 0 20 L 40 20 M 20 0 L 20 40"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </svg>
              </motion.div>
            </motion.span>
          ))}
        </motion.div>

        {/* Floating tech particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedName;
