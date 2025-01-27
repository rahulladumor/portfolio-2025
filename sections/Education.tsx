import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaExternalLinkAlt, FaLocationArrow } from "react-icons/fa";
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

const education: Education[] = [
  {
    id: 1,
    logo: "/images/education/vnsgu.png",
    institution: "Veer Narmad South Gujarat University",
    degree: "Master of Science",
    study: "Information Technology",
    period: "2015 - 2017",
    url: "https://vnsgu.ac.in",
  },
  {
    id: 2,
    logo: "/images/education/vnsgu.png",
    institution: "Veer Narmad South Gujarat University",
    degree: "Bachelor of Science",
    study: "Information Technology",
    period: "2012 - 2015",
    url: "https://vnsgu.ac.in",
  },
];

const EducationCard: React.FC<{ data: Education }> = ({ data }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white/80 dark:bg-gray-800/50 rounded-2xl shadow-lg hover:shadow-xl 
                 transition-all duration-300 overflow-hidden backdrop-blur-sm
                 border border-gray-100/50 dark:border-gray-700/50
                 hover:border-blue-500/30 hover:shadow-blue-500/10"
    >
      <div className="p-8">
        <div className="flex items-start gap-6">
          <div className="relative w-16 h-16 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl 
                          group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
            <Image
              src={data.logo}
              alt={`${data.institution} logo`}
              width={64}
              height={64}
              className="rounded-xl object-contain p-2"
              loading="lazy"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start flex-wrap gap-3">
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                             dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                  {data.degree}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {data.institution}
                  </p>
                  {data.url && (
                    <button
                      onClick={() => openURLInNewTab(data.url!)}
                      className="text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400
                               transition-colors duration-300"
                      aria-label={`Visit ${data.institution} website`}
                    >
                      <FaExternalLinkAlt size={14} />
                    </button>
                  )}
                </div>
              </div>
              <span className="text-base font-medium text-gray-600 dark:text-gray-400">
                {data.period}
              </span>
            </div>

            <div className="mt-3 flex items-center text-base text-gray-600 dark:text-gray-400 gap-2">
              <FaLocationArrow className="flex-shrink-0" size={14} />
              <span className="font-medium">{data.study}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const EducationSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedEducation = showAll ? education : education.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section id={Section.Education} className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {getSectionHeading(Section.Education)}

        <div className="mt-8 max-w-3xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 
                         rounded-2xl backdrop-blur-sm" />
          <div className="relative p-6 sm:p-8 rounded-2xl border border-blue-500/20 dark:border-purple-500/20">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                             dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-2">
                  Academic Background
                </h4>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Formal education in Information Technology with focus on software development, 
                  database management, and system architecture. Strong foundation in computer science 
                  principles and modern development practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <AnimatePresence>
            {displayedEducation.map((edu) => (
              <EducationCard key={edu.id} data={edu} />
            ))}
          </AnimatePresence>
        </div>

        {education.length > INITIAL_DISPLAY_COUNT && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                       hover:from-blue-500/20 hover:to-purple-500/20
                       text-gray-700 dark:text-gray-300
                       transition-all duration-300"
            >
              <span>{showAll ? "Show Less" : "Show More"}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationSection;
