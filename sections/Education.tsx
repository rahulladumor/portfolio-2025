import { AnimatePresence, motion } from 'framer-motion';
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaLocationArrow, FaExternalLinkAlt } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

const INITIAL_DISPLAY_COUNT = 2;

interface Education {
  id: number;
  logo: string;
  institution: string;
  degree: string;
  study: string;
  period: string;
  url?: string;
}

const getFaviconUrl = (url: string) => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  } catch {
    return null;
  }
};

const education: Education[] = [
  {
    id: 1,
    logo: "https://vnsgu.ac.in/wp-content/uploads/2023/07/VNSGU-Logo-1.png",
    institution: "Veer Narmad South Gujarat University",
    degree: "Master of Science",
    study: "Information Technology",
    period: "2015 - 2017",
    url: "https://alumni.vnsgu.net/NewsDetail.aspx?ID=3"
  },
  {
    id: 2,
    logo: "https://vnsgu.ac.in/wp-content/uploads/2023/07/VNSGU-Logo-1.png",
    institution: "Veer Narmad South Gujarat University",
    degree: "Bachelor of Science",
    study: "Information Technology",
    period: "2012 - 2015",
    url: "https://alumni.vnsgu.net/NewsDetail.aspx?ID=3"
  }
];

const EducationCard: React.FC<{ data: Education }> = ({ data }) => {
  const faviconUrl = data.url ? getFaviconUrl(data.url) : null;

  return (
    <motion.div
      className="p-6 rounded-xl bg-white dark:bg-gray-800/50 backdrop-blur-sm
                border border-gray-200 dark:border-gray-700 
                hover:border-blue-500/50 dark:hover:border-blue-500/50
                hover:shadow-lg dark:hover:shadow-blue-500/10
                transition-all duration-300"
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-start gap-6">
        <div className="relative w-12 h-12 flex-shrink-0">
          <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-lg"></div>
          {faviconUrl ? (
            <Image
              src={faviconUrl}
              alt={data.institution}
              width={48}
              height={48}
              className="rounded-lg object-contain p-1"
              loading="lazy"
              unoptimized={true}
            />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-500 dark:text-gray-400">
                {data.institution.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2 flex-wrap">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {data.degree} in {data.study}
              </h3>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                             bg-clip-text text-transparent">
                  {data.institution}
                </p>
                {data.url && (
                  <button
                    onClick={() => openURLInNewTab(data.url!)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
                             transition-colors duration-200"
                    aria-label={`Visit ${data.institution} website`}
                  >
                    <FaExternalLinkAlt size={12} />
                  </button>
                )}
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {data.period}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EducationSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedEducation = showAll
    ? education
    : education.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section
      id={Section.Education}
      className="space-y-6"
      aria-label="Education Section"
    >
      {getSectionHeading(Section.Education)}

      <div className="mt-8 space-y-6">
        <AnimatePresence>
          {displayedEducation.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <EducationCard data={edu} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More Button */}
      {!showAll && education.length > INITIAL_DISPLAY_COUNT && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                     bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                     hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20
                     text-gray-900 dark:text-white
                     border border-gray-200 dark:border-gray-700
                     transition-all duration-300"
          >
            Show More Education
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaChevronDown size={12} />
            </motion.span>
          </button>
        </motion.div>
      )}

      {/* Show Less Button */}
      {showAll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={() => setShowAll(false)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                     bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                     hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20
                     text-gray-900 dark:text-white
                     border border-gray-200 dark:border-gray-700
                     transition-all duration-300"
          >
            Show Less
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaChevronDown size={12} className="transform rotate-180" />
            </motion.span>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default EducationSection;
