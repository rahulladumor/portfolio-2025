"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: { x: number; y: number };
}

const colors = ["#60A5FA", "#A855F7", "#EC4899"];

const ProfileParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize particles
    const initialParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 360,
      y: Math.random() * 360,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocity: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      },
    }));
    setParticles(initialParticles);

    // Animation loop
    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Calculate distance from mouse
          const dx = mousePos.x - particle.x;
          const dy = mousePos.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Add mouse influence
          let newVelX = particle.velocity.x;
          let newVelY = particle.velocity.y;

          if (distance < 100) {
            const force = (100 - distance) / 500;
            newVelX -= dx * force;
            newVelY -= dy * force;
          }

          // Update position
          let newX = particle.x + newVelX;
          let newY = particle.y + newVelY;

          // Bounce off boundaries
          if (newX < 0 || newX > 360) newVelX *= -0.8;
          if (newY < 0 || newY > 360) newVelY *= -0.8;

          // Keep particles within bounds
          newX = Math.max(0, Math.min(360, newX));
          newY = Math.max(0, Math.min(360, newY));

          return {
            ...particle,
            x: newX,
            y: newY,
            velocity: {
              x: newVelX * 0.99, // Add slight friction
              y: newVelY * 0.99,
            },
          };
        })
      );

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [mousePos]);

  return (
    <div
      className="absolute inset-0"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: particle.x,
            top: particle.y,
            filter: "blur(1px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ProfileParticles;
