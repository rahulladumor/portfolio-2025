'use client';

import { ThemeContext } from "contexts/ThemeProvider";
import { sectionsArray } from "data/sections";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { animateScroll, scroller } from "react-scroll";
import { Section } from "types/Sections";

// Dynamically import Tippy with SSR disabled
const Tippy = dynamic(() => import('@tippyjs/react'), {
  ssr: false,
});

const Navigation = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width > Breakpoints.lg;
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const goToSection = (section: Section) => {
    scroller.scrollTo(section, { duration: 500, smooth: true });
    if (!isDesktop) setMenuOpen(false);
  };

  const MobileMenu = () => (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-40
                  flex flex-col items-center justify-center gap-8 p-6"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full
                    bg-gray-100 dark:bg-gray-800
                    text-gray-900 dark:text-white"
          >
            <FiX className="w-5 h-5" />
          </motion.button>

          {sectionsArray.map(({ id, icon: Icon, title }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToSection(id)}
              className="flex items-center gap-3 cursor-pointer
                      text-gray-700 dark:text-gray-300
                      hover:text-blue-500 dark:hover:text-blue-400
                      transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
              <span className="text-lg font-medium">{title}</span>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!isDesktop) {
    return (
      <>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed inset-x-0 top-0 z-50
                  bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm
                  border-b border-gray-200 dark:border-gray-800"
        >
          <div className="px-4 py-3 flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={animateScroll.scrollToTop}
              className="p-1 flex cursor-pointer"
            >
              <Image
                src="/images/rd-icon.png"
                alt="Rahul Ladumor"
                width={32}
                height={32}
                className="rounded-lg"
              />
            </motion.div>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full
                        bg-gray-100 dark:bg-gray-800
                        text-gray-900 dark:text-white"
              >
                {isDarkMode ? <FaMoon className="w-4 h-4" /> : <FaSun className="w-4 h-4" />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(true)}
                className="p-2 rounded-full
                        bg-gray-100 dark:bg-gray-800
                        text-gray-900 dark:text-white"
              >
                <FiMenu className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
        <MobileMenu />
      </>
    );
  }

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="fixed inset-y-0 left-0 z-50
              bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm
              border-r border-gray-200 dark:border-gray-800
              w-16 py-5 flex flex-col items-center justify-between"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={animateScroll.scrollToTop}
        className="p-1 flex cursor-pointer"
      >
        <Image
          src="/images/rd-icon.png"
          alt="Rahul Ladumor"
          width={32}
          height={32}
          className="rounded-lg"
        />
      </motion.div>

      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        {sectionsArray.map(({ id, icon: Icon, title }) => (
          <Tippy key={id} content={<small>{title}</small>} placement="right">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToSection(id)}
              className="p-2 rounded-lg cursor-pointer
                      text-gray-700 dark:text-gray-300
                      hover:text-blue-500 dark:hover:text-blue-400
                      hover:bg-gray-100 dark:hover:bg-gray-800
                      transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
            </motion.div>
          </Tippy>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className="p-2 rounded-lg
                text-gray-700 dark:text-gray-300
                hover:text-blue-500 dark:hover:text-blue-400
                hover:bg-gray-100 dark:hover:bg-gray-800
                transition-colors duration-200"
      >
        {isDarkMode ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
      </motion.button>
    </motion.div>
  );
};

export default Navigation;
