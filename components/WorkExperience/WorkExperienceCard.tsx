import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLocationArrow, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { WorkExperience } from 'types/WorkExperience';
import { openURLInNewTab } from 'utils';

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
      className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg hover:shadow-xl 
                 transition-all duration-300 overflow-hidden backdrop-blur-sm
                 border border-gray-100 dark:border-gray-700"
      tabIndex={0}
      role="article"
      aria-label={`Work experience at ${experience.name}`}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative w-12 h-12 flex-shrink-0">
            <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-lg"></div>
            {faviconUrl ? (
              <Image
                src={faviconUrl}
                alt={`${experience.name} logo`}
                width={48}
                height={48}
                className="rounded-lg object-contain p-1"
                loading="lazy"
                unoptimized={true}
              />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-500 dark:text-gray-400">
                  {experience.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                  {experience.position}
                </h3>
                <div className="flex items-center gap-2">
                  <p className="text-base font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                               bg-clip-text text-transparent">
                    {experience.name}
                  </p>
                  {experience.url && (
                    <button
                      onClick={() => openURLInNewTab(experience.url!)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
                               transition-colors duration-200"
                      aria-label={`Visit ${experience.name} website`}
                    >
                      <FaExternalLinkAlt size={12} />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 gap-1">
                <FaCalendarAlt className="flex-shrink-0" size={12} />
                <span>
                  {experience.period.start} - {experience.period.end}
                </span>
              </div>
            </div>

            <div className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-400 gap-1">
              <FaLocationArrow className="flex-shrink-0" size={12} />
              <span>{experience.location}</span>
            </div>

            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
              {experience.summary}
            </p>

            {experience.keyFocus && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Key Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.keyFocus.map((focus, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                               bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {experience.technologies && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                               bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
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
