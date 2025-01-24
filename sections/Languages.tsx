import languagesList from "data/languages";
import { motion } from "framer-motion";
import { FaGlobeAmericas, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { HiTranslate } from "react-icons/hi";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const LanguageCard: React.FC<{
  language: (typeof languagesList)[0];
  index: number;
}> = ({ language, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-6 rounded-xl bg-white dark:bg-gray-800/50
                border border-gray-200 dark:border-gray-700
                hover:border-blue-500/50 dark:hover:border-blue-500/50
                hover:shadow-lg dark:hover:shadow-blue-500/10
                transition-all duration-300"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 rounded-xl opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* Content */}
      <div className="relative space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div
            className="p-2 rounded-xl bg-blue-500/10 text-blue-500 
                       group-hover:bg-blue-500 group-hover:text-white
                       transition-all duration-300"
          >
            <FaGlobeAmericas className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{language.language}</h3>
        </div>

        {/* Quote */}
        <div className="pl-12">
          <div className="relative">
            <FaQuoteLeft className="absolute -left-6 -top-2 w-4 h-4 text-blue-500/50" />
            <p className="text-gray-600 dark:text-gray-300 font-medium">{language.text}</p>
            <FaQuoteRight className="absolute -right-6 -bottom-2 w-4 h-4 text-blue-500/50" />
          </div>

          {/* Translation */}
          {language.translation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-3 flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400"
            >
              <HiTranslate className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p className="italic">{language.translation}</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Languages = () => {
  return (
    <section id={Section.Languages} className="py-20 sm:py-32">
      {getSectionHeading(Section.Languages)}

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {languagesList.map((language, index) => (
          <LanguageCard key={language.id} language={language} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Languages;
