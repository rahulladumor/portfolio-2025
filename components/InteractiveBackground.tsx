"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface Point {
  x: number;
  y: number;
}

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState<Point>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth spring animation for the spotlight
  const spotlightX = useSpring(0, { damping: 20, stiffness: 200 });
  const spotlightY = useSpring(0, { damping: 20, stiffness: 200 });
  const spotlightScale = useSpring(1, { damping: 15, stiffness: 150 });

  // Trail points for the glowing orbs that follow the cursor
  const [trailPoints, setTrailPoints] = useState<Point[]>([]);
  const maxTrailPoints = 5;

  useEffect(() => {
    const updateTrailPoints = () => {
      setTrailPoints(prev => {
        const newPoints = [...prev, mousePosition];
        if (newPoints.length > maxTrailPoints) {
          newPoints.shift();
        }
        return newPoints;
      });
    };

    if (isHovering) {
      const interval = setInterval(updateTrailPoints, 50);
      return () => clearInterval(interval);
    }
  }, [mousePosition, isHovering]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
    spotlightX.set(x);
    spotlightY.set(y);
    spotlightScale.set(1.2);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    spotlightScale.set(1.2);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    spotlightScale.set(0);
    setTrailPoints([]);
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Main interactive area */}
      <div
        className="absolute inset-0"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ pointerEvents: "all" }}
      >
        {/* Spotlight effect */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            x: spotlightX,
            y: spotlightY,
            scale: spotlightScale,
            translateX: "-50%",
            translateY: "-50%",
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.07) 0%, rgba(59, 130, 246, 0.05) 30%, transparent 70%)",
          }}
        />

        {/* Trail effects */}
        {trailPoints.map((point, index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 rounded-full pointer-events-none"
            style={{
              x: point.x,
              y: point.y,
              translateX: "-50%",
              translateY: "-50%",
              background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 0],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Grid pattern that lights up near cursor */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.2) 0%, transparent 10%),
                                linear-gradient(to right, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
               backgroundSize: '100% 100%, 40px 40px, 40px 40px'
             }}
        />
      </div>
    </div>
  );
};

export default InteractiveBackground;
