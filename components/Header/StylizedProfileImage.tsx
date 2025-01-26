"use client";

import { motion, useAnimation, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const StylizedProfileImage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const rotateX = useSpring(0, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 30 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isHovered) {
      controls.start("hover");
    } else {
      controls.start("idle");
    }
  }, [isHovered, controls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });

    // Calculate rotation based on mouse position
    const rotateXValue = (y - 0.5) * 20;
    const rotateYValue = (x - 0.5) * 20;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  // Generate holographic lines
  const holoLines = Array.from({ length: 8 }).map((_, i) => (
    <motion.div
      key={`holo-${i}`}
      className="absolute inset-0 rounded-full"
      style={{
        border: "1px solid rgba(147, 51, 234, 0.1)",
        transform: `scale(${1 + i * 0.05})`,
      }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        rotate: [0, 360],
      }}
      transition={{
        duration: 10 + i,
        repeat: Infinity,
        ease: "linear",
        delay: i * 0.5,
      }}
    />
  ));

  return (
    <div className="relative w-[400px] h-[400px] select-none">
      {/* Holographic background effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating tech circles */}
      {holoLines}

      {/* DNA Helix Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`dna-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `rgba(${147 + i * 5}, ${51 + i * 10}, 234, 0.5)`,
              left: "50%",
              top: `${(i / 20) * 100}%`,
            }}
            animate={{
              x: [
                Math.sin((i / 20) * Math.PI * 2) * 100,
                Math.sin((i / 20) * Math.PI * 2 + Math.PI) * 100,
              ],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Main image container with 3D effect */}
      <motion.div
        className="absolute inset-12 perspective-1000"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          rotateX.set(0);
          rotateY.set(0);
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glowing aura layers */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`aura-${i}`}
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
                mousePosition.y * 100
              }%, rgba(147, 51, 234, ${0.2 - i * 0.05}) 0%, transparent 70%)`,
              transform: `translateZ(${i * 10}px)`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Holographic scan line */}
        <motion.div
          className="absolute inset-x-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.8), transparent)",
            filter: "blur(1px)",
          }}
          animate={{
            top: ["0%", "100%", "0%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Profile image */}
        <motion.div
          className="relative w-full h-full rounded-full overflow-hidden transform-gpu"
          style={{ transformStyle: "preserve-3d" }}
          variants={{
            idle: { scale: 1, z: 0 },
            hover: { scale: 1.05, z: 30 },
          }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/profile.png"
            alt="Rahul Ladumor"
            fill
            className="object-cover"
            priority
            style={{ pointerEvents: "none" }}
          />

          {/* Holographic overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, transparent, rgba(147, 51, 234, 0.1), transparent)",
              mixBlendMode: "overlay",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Tech circuit patterns */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`circuit-${i}`}
            className="absolute w-full h-full rounded-full"
            style={{
              border: "1px solid rgba(147, 51, 234, 0.2)",
              transform: `rotate(${i * 60}deg) scale(${1.2 + i * 0.1})`,
            }}
            animate={{
              rotate: [i * 60, i * 60 + 360],
              scale: [1.2 + i * 0.1, 1.3 + i * 0.1, 1.2 + i * 0.1],
            }}
            transition={{
              rotate: {
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </motion.div>

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default StylizedProfileImage;
