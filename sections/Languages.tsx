'use client';

import { motion, AnimatePresence } from "framer-motion";
import languagesList from "data/languages";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";
import { useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";

const LanguageCard: React.FC<{
  language: typeof languagesList[0];
  index: number;
}> = ({ language, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl transition-all duration-500
                ${isHovered ? 'lg:col-span-2 lg:row-span-2 z-10' : 'col-span-1 row-span-1'}
                bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900
                border border-gray-200 dark:border-gray-700
                hover:border-blue-500/50 dark:hover:border-blue-500/50
                group`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      <div className="relative p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl transition-all duration-300 shrink-0
                       ${isHovered 
                         ? 'bg-blue-500 text-white'
                         : 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white'}`}>
            <FaGlobeAmericas className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">
            {language.language}
          </h3>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-grow flex flex-col justify-center mt-6 space-y-6"
            >
              {/* Original Text */}
              <div className="relative min-h-[100px] flex items-center">
                <div className="absolute -left-2 -top-2 w-6 h-6 text-blue-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="text-2xl font-medium text-gray-800 dark:text-gray-200 text-center py-4 px-8 w-full break-words">
                  {language.text}
                </div>
                <div className="absolute -right-2 -bottom-2 w-6 h-6 text-blue-500/20 transform rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* Translation */}
              {language.translation && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-base text-gray-600 dark:text-gray-400 text-center italic px-4"
                >
                  {language.translation}
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-24 h-24 
                     bg-gradient-to-br from-blue-500/5 to-purple-500/5 
                     rounded-tl-full transform translate-x-8 translate-y-8" />
      </div>
    </motion.div>
  );
};

const Languages = () => {
  return (
    <section id={Section.Languages} className="space-y-8">
      {getSectionHeading(Section.Languages)}

      <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-6">
        {languagesList.map((language, index) => (
          <LanguageCard
            key={language.id}
            language={language}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Languages;
