"use client";

import Button from "components/Button";
import { techStack } from "data/techStack";
import { motion } from "framer-motion";
import { lazy, Suspense, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
  FaUserAlt
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Section } from "types/Sections";

// Lazy load the tech stack icons
const TechStackIcon = lazy(() => import("./TechStackIcon"));

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/rahulladumor',
    color: 'hover:text-[#333] dark:hover:text-white',
    bgColor: 'hover:bg-[#333]/10 dark:hover:bg-white/10'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    url: 'https://www.linkedin.com/in/rahulladumor',
    color: 'hover:text-[#0077B5]',
    bgColor: 'hover:bg-[#0077B5]/10'
  },
  {
    name: 'Medium',
    icon: FaMediumM,
    url: 'https://medium.com/@rahulladumor',
    color: 'hover:text-[#00AB6C]',
    bgColor: 'hover:bg-[#00AB6C]/10'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com/rahulladumor',
    color: 'hover:text-[#1DA1F2]',
    bgColor: 'hover:bg-[#1DA1F2]/10'
  }
];

const DeveloperIntro: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  // Get a balanced mix of different categories
  const displayTechStack = [
    ...techStack.filter(t => t.category === 'cloud').slice(0, 2),
    ...techStack.filter(t => t.category === 'language').slice(0, 3),
    ...techStack.filter(t => t.category === 'framework').slice(0, 2),
    ...techStack.filter(t => t.category === 'devops').slice(0, 3),
  ];

  return (
    <div
      ref={ref}
      className="flex flex-col gap-6 lg:gap-8"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Tech Stack Grid */}
      <div className="flex flex-col items-center lg:items-start -ml-1.5 lg:-ml-2">
        <div className="grid grid-cols-5 gap-3 max-w-[580px] w-full">
          <Suspense fallback={<div className="col-span-5 h-8 animate-pulse bg-gray-200 dark:bg-gray-800 rounded" />}>
            {displayTechStack.map(({ Icon, color, name }, index) => (
              <TechStackIcon
                key={name}
                Icon={Icon}
                color={color}
                name={name}
                delay={index * 0.1}
                isHovering={isHovering}
                mousePosition={mousePosition}
              />
            ))}
          </Suspense>
        </div>
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative max-w-2xl text-center lg:text-left"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-pink-500/20 
                      blur-xl opacity-50 dark:opacity-30 rounded-full" />
        <span className="relative text-xl font-light text-gray-700 dark:text-gray-300 tracking-wide leading-relaxed">
          <span className="font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 
                        bg-clip-text text-transparent">Architecting</span>{" "}
          the future through{" "}
          <span className="font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-600 
                        bg-clip-text text-transparent">innovative</span>{" "}
          <span className="inline-flex items-center">
            cloud solutions
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="w-1.5 h-1.5 rounded-full bg-blue-500 ml-1"
            />
          </span>{" "}
          and{" "}
          <span className="relative">
            enterprise excellence
            <motion.div
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </span>
        </span>
      </motion.p>

      <div className="flex flex-col items-center gap-8 mt-8">
        <Button
          onClick={() => {
            const contactSection = document.getElementById(Section.Contact);
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          icon={FaUserAlt}
          iconPosition="left"
          variant="primary"
          size="lg"
          className="hover:scale-105 transition-transform duration-300"
        >
          Get in Touch
        </Button>

        {/* Social Media Icons */}
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 
                        shadow-sm hover:shadow-md backdrop-blur-sm
                        border border-gray-100 dark:border-gray-700/50
                        transition-all duration-300 group
                        ${social.color} ${social.bgColor}`}
                title={social.name}
              >
                <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="sr-only">{social.name}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default DeveloperIntro;
