import { useState } from "react";
import Image from "next/image";
import { FaLocationArrow, FaChevronDown } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_DISPLAY_COUNT = 2;

type Education = {
  id: number;
  logo: string;
  institution: string;
  degree: string;
  study: string;
  location: string;
  period: { start: string; end: string };
};

const education: Education[] = [
  {
    id: 1,
    logo: "/images/education/vnsgu.png",
    institution: "Veer Narmad South Gujarat University",
    degree: "Master of Science",
    study: "Information Technology",
    location: "Gujarat, India",
    period: { start: "2018", end: "2020" },
  },
  {
    id: 2,
    logo: "/images/education/vnsgu.png",
    institution: "Veer Narmad South Gujarat University",
    degree: "Bachelor of Science",
    study: "Information Technology",
    location: "Gujarat, India",
    period: { start: "2016", end: "2018" },
  },
];

const EducationCard: React.FC<{ data: Education }> = ({ data }) => (
  <motion.div 
    className="p-6 rounded-xl bg-white dark:bg-gray-800/50 backdrop-blur-sm
              border border-gray-200 dark:border-gray-700 
              hover:border-blue-500/50 dark:hover:border-blue-500/50
              transition-all duration-300"
  >
    <div className="flex items-start gap-6">
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image 
          src={data.logo} 
          alt={data.institution}
          width={48}
          height={48}
          className="object-contain rounded-lg"
        />
      </div>

      <div className="flex-grow space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-gray-900 dark:text-white">
            {data.institution}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {data.period.start} - {data.period.end}
          </span>
        </div>

        <h4 className="text-gray-700 dark:text-gray-300">
          {data.degree}, {data.study}
        </h4>

        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <FaLocationArrow className="flex-shrink-0" />
          <span>{data.location}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

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

      {/* Education Cards */}
      <div className="grid gap-6">
        <AnimatePresence mode="wait">
          {displayedEducation.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
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
            className="group flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                     hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20
                     text-gray-700 dark:text-gray-200
                     border border-gray-200 dark:border-gray-700
                     transition-all duration-300"
            aria-label="Show more education"
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
              <FaChevronDown className="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
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
            className="group flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                     hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20
                     text-gray-700 dark:text-gray-200
                     border border-gray-200 dark:border-gray-700
                     transition-all duration-300"
            aria-label="Show less education"
          >
            Show Less
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transform: 'rotate(180deg)' }}
            >
              <FaChevronDown className="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
            </motion.span>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default EducationSection;
