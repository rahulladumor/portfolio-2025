import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import { FaCalendarAlt, FaExternalLinkAlt, FaLocationArrow } from "react-icons/fa";
import { WorkExperience } from "types/WorkExperience";
import { openURLInNewTab } from "utils";

interface Props {
  experience: WorkExperience;
  index: number;
}

const getFaviconUrl = (url: string) => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  } catch {
    return null;
  }
};

const WorkExperienceCard: React.FC<Props> = ({ experience, index }) => {
  const faviconUrl = experience.url ? getFaviconUrl(experience.url) : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white/80 dark:bg-gray-800/50 rounded-2xl shadow-lg hover:shadow-xl 
                 transition-all duration-300 overflow-hidden backdrop-blur-sm
                 border border-gray-100/50 dark:border-gray-700/50
                 hover:border-blue-500/30 hover:shadow-blue-500/10"
      tabIndex={0}
      role="article"
      aria-label={`Work experience at ${experience.name}`}
    >
      <div className="p-8">
        <div className="flex items-start gap-6">
          <div className="relative w-16 h-16 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl 
                          group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
            {faviconUrl ? (
              <Image
                src={faviconUrl}
                alt={`${experience.name} logo`}
                width={64}
                height={64}
                className="rounded-xl object-contain p-2"
                loading="lazy"
                unoptimized={true}
              />
            ) : (
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 
                            flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-2xl font-bold text-white">{experience.name.charAt(0)}</span>
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start flex-wrap gap-3">
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                             dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                  {experience.position}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {experience.name}
                  </p>
                  {experience.url && (
                    <button
                      onClick={() => openURLInNewTab(experience.url!)}
                      className="text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400
                               transition-colors duration-300"
                      aria-label={`Visit ${experience.name} website`}
                    >
                      <FaExternalLinkAlt size={14} />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex items-center text-base text-gray-600 dark:text-gray-400 gap-2">
                <FaCalendarAlt className="flex-shrink-0" size={14} />
                <span className="font-medium">
                  {experience.period.start} - {experience.period.end}
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center text-base text-gray-600 dark:text-gray-400 gap-2">
              <FaLocationArrow className="flex-shrink-0" size={14} />
              <span className="font-medium">{experience.location}</span>
            </div>

            <ul className="list-disc list-inside space-y-2">
              {experience.summary.map((item, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-400">
                  {item}
                </li>
              ))}
            </ul>

            {experience.keyFocus && (
              <div className="mt-6">
                <h4 className="text-base font-semibold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                             dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-3">
                  Key Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.keyFocus.map((focus, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium rounded-lg
                               bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                               text-gray-700 dark:text-gray-300
                               border border-blue-500/20 dark:border-purple-500/20"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {experience.technologies && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-sm font-medium rounded-lg
                               bg-gray-100 dark:bg-gray-700/50
                               text-gray-600 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default WorkExperienceCard;
