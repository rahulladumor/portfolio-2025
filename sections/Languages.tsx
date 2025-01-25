import languagesList from "data/languages";
import { motion } from "framer-motion";
import { HiTranslate } from "react-icons/hi";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const LanguageCard: React.FC<{
  language: (typeof languagesList)[0];
  index: number;
}> = ({ language, index }) => {
  const Icon = language.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="group relative"
    >
      <div className="relative flex items-start gap-6 p-6 rounded-2xl
                    bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                    border border-gray-100 dark:border-gray-700/50
                    hover:bg-white/80 dark:hover:bg-gray-800/80
                    transition-all duration-300">
        {/* Language Badge */}
        <div className="relative mt-1">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-12 h-12 flex items-center justify-center rounded-xl
                    bg-gradient-to-br ${language.color}
                    shadow-md group-hover:shadow-xl group-hover:shadow-blue-500/25
                    transition-all duration-300 overflow-hidden`}
          >
            <Icon className="w-full h-full object-cover" />
          </motion.div>
          {/* Decorative dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2 + 0.3 }}
            className={`absolute -right-1 -top-1 w-3 h-3 rounded-full
                     bg-gradient-to-br ${language.color}`}
          />
        </div>

        {/* Content Container */}
        <div className="flex-grow space-y-2">
          {/* Language Name */}
          <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                       dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            {language.language}
          </h3>

          {/* Main Text & Translation */}
          <div className="space-y-2">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {language.text}
            </p>

            {/* Translation */}
            {language.translation && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.4 }}
                className="flex items-center gap-2.5 text-base text-gray-600 dark:text-gray-400"
              >
                <HiTranslate className="w-5 h-5 text-purple-500/70" />
                <p className="italic font-light">{language.translation}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Languages = () => {
  return (
    <section id={Section.Languages} className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {getSectionHeading(Section.Languages)}

        <div className="mt-12 space-y-6">
          {languagesList.map((language, index) => (
            <LanguageCard key={language.id} language={language} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
