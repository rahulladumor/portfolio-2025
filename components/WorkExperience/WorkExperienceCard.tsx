import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLocationArrow, FaCalendarAlt } from 'react-icons/fa';
import { WorkExperience } from 'types/WorkExperience';

interface Props {
  experience: WorkExperience;
  index: number;
}

const WorkExperienceCard: React.FC<Props> = ({ experience, index }) => {
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
            <Image
              src={experience.logo}
              alt={`${experience.name} logo`}
              width={48}
              height={48}
              className="rounded-lg object-contain p-1"
              loading="lazy"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                  {experience.position}
                </h3>
                <p className="text-base font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                             bg-clip-text text-transparent">
                  {experience.name}
                </p>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 gap-1">
                <FaCalendarAlt className="flex-shrink-0" size={12} />
                <span>
                  {experience.period.start} - {experience.period.end}
                </span>
              </div>
            </div>

            <div className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-400">
              <FaLocationArrow className="mr-1 flex-shrink-0" size={12} />
              <span className="truncate">{experience.location}</span>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-300 line-clamp-3 hover:line-clamp-none transition-all duration-300">
              {experience.summary}
            </p>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Key Focus Areas:
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.keyFocus.map((focus, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                             bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                             text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800
                             hover:scale-105 transition-transform duration-200"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>

            {experience.technologies && (
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2 py-0.5 text-xs font-medium
                               text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800
                               rounded hover:scale-105 transition-transform duration-200"
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
