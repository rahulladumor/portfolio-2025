"use client";

import { ThemeContext } from "contexts/ThemeProvider";
import { sectionsArray } from "data/sections";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "hooks/useWindowDimensions";
import Image from "next/image";
import { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { animateScroll, scroller } from "react-scroll";
import { Section } from "types/Sections";

const Navigation = () => {
  const { width } = useWindowDimensions();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToSection = (section: Section) => {
    scroller.scrollTo(section, { duration: 500, smooth: true });
    setIsMenuOpen(false);
  };

  // Split sections into left and right groups
  const midPoint = Math.ceil(sectionsArray.length / 2);
  const leftSections = sectionsArray.slice(0, midPoint);
  const rightSections = sectionsArray.slice(midPoint);

  const MenuItems = ({ items, direction }: { items: typeof sectionsArray, direction: 'left' | 'right' }) => (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction === 'left' ? 20 : -20 }}
      className={`flex items-center gap-2 ${direction === 'left' ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {items.map(({ id, icon: Icon, title }, index) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => goToSection(id)}
          className="group cursor-pointer"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg bg-white/50 dark:bg-gray-800/50 
                     backdrop-blur-sm shadow-sm hover:shadow-md 
                     transition-all duration-300"
          >
            <Icon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-40 mt-6"
    >
      <div className="relative">
        <motion.div
          layout
          className="relative flex items-center justify-center p-2 rounded-full 
                   bg-white/90 dark:bg-gray-900/90 backdrop-blur-md
                   border border-gray-200/50 dark:border-gray-800/50
                   shadow-lg transition-all duration-500"
        >
          {/* Left Menu Items */}
          <AnimatePresence>
            {isMenuOpen && (
              <div className="absolute right-full mr-2 overflow-hidden
                          opacity-0 animate-in fade-in slide-in-from-right-5 
                          duration-500 opacity-100">
                <MenuItems items={leftSections} direction="left" />
              </div>
            )}
          </AnimatePresence>

          {/* Center Items */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
                          border border-gray-200/50 dark:border-gray-700/50 p-0.5">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
              <Image
                src="/images/profile2.png"
                alt="Rahul Ladumor"
                width={36}
                height={36}
                className="rounded-lg object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: 180 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 
                      dark:from-blue-900/20 dark:to-purple-900/20
                      shadow-sm hover:shadow-md transition-all duration-300
                      ${isMenuOpen ? 'rotate-180' : ''}`}
            >
              <HiOutlineMenuAlt4 className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 
                      dark:from-blue-900/20 dark:to-purple-900/20
                      shadow-sm hover:shadow-md transition-all duration-300"
            >
              {isDarkMode ? (
                <FaMoon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
              ) : (
                <FaSun className="w-4 h-4 text-gray-800 dark:text-gray-200" />
              )}
            </motion.button>
          </div>

          {/* Right Menu Items */}
          <AnimatePresence>
            {isMenuOpen && (
              <div className="absolute left-full ml-2 overflow-hidden
                          opacity-0 animate-in fade-in slide-in-from-left-5 
                          duration-500 opacity-100">
                <MenuItems items={rightSections} direction="right" />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
