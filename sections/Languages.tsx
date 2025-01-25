import languagesList from "data/languages";
import { motion } from "framer-motion";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiTranslate } from "react-icons/hi";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const LanguageCard: React.FC<{
  language: (typeof languagesList)[0];
  index: number;
}> = ({ language, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15 }}
      className="group relative"
    >
      <div className="relative flex items-center gap-4 py-5">
        {/* Language Badge */}
        <div className="relative">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg 
                      bg-gradient-to-br from-blue-500 to-blue-600 text-white
                      shadow-md group-hover:shadow-blue-500/25 group-hover:scale-105
                      transition duration-300">
            <FaGlobeAmericas className="w-5 h-5" />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            {/* Language Name */}
            <h3 className="text-lg font-bold text-gray-900 dark:text-white min-w-[100px]">
              {language.language}
            </h3>

            {/* Main Text & Translation */}
            <div className="space-y-1.5">
              <p className="text-base text-gray-600 dark:text-gray-300">
                {language.text}
              </p>

              {/* Translation */}
              {language.translation && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  <HiTranslate className="w-4 h-4 text-blue-500/70" />
                  <p className="italic">{language.translation}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Languages = () => {
  return (
    <section id={Section.Languages} className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {getSectionHeading(Section.Languages)}

        <div className="mt-10 space-y-1 divide-y divide-gray-100 dark:divide-gray-800">
          {languagesList.map((language, index) => (
            <LanguageCard key={language.id} language={language} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
