import achievementList from "data/achievements";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTrophy } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

const AchievementCard: React.FC<{
  achievement: (typeof achievementList)[0];
  index: number;
}> = ({ achievement, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white/80 dark:bg-gray-800/50 rounded-xl overflow-hidden
                border border-gray-100/50 dark:border-gray-700/50
                hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10
                backdrop-blur-sm transition-all duration-300"
    >
      <div className="flex items-start gap-4 p-4 sm:p-5">
        {/* Icon Container */}
        <div className="flex-shrink-0 pt-1">
          <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20
                       group-hover:from-blue-500/30 group-hover:to-purple-500/30
                       transition-all duration-300">
            <FaTrophy className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-grow min-w-0">
          <h3 className="text-base font-semibold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                       dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            {achievement.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{achievement.subtitle}</p>
          {achievement.keywords && (
            <div className="mt-3 flex flex-wrap gap-2">
              {achievement.keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium
                           bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5
                           text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Button */}
        {achievement.url && (
          <div className="flex-shrink-0 self-start ml-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openURLInNewTab(achievement.url!)}
              className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20
                       group-hover:from-blue-500/30 group-hover:to-purple-500/30
                       transition-all duration-300"
              aria-label={`View ${achievement.title} details`}
            >
              <FaExternalLinkAlt className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Achievements = () => (
  <section id={Section.Achievements} className="py-16 sm:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {getSectionHeading(Section.Achievements)}

      {/* Info Box */}
      <div className="mt-6 relative bg-white/80 dark:bg-gray-800/50 rounded-xl overflow-hidden
                    border border-gray-100/50 dark:border-gray-700/50
                    backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
        <div className="relative p-4 sm:p-6 flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0">
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" 
              />
            </svg>
          </div>
          <div>
            <h4 className="text-base font-semibold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                         dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Professional Milestones & Expertise
            </h4>
            <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 max-w-3xl">
              Showcasing significant achievements in cloud architecture, software development, and technical leadership. 
              Expertise spans AWS, Google Cloud, and Azure platforms, with proven success in building scalable solutions 
              and leading high-performance teams. Recognized for contributions to open-source and developer communities.
            </p>
          </div>
        </div>
      </div>

      {/* Achievement Cards */}
      <div className="mt-6 sm:mt-8 space-y-4">
        {achievementList.map((achievement, index) => (
          <AchievementCard key={achievement.id} achievement={achievement} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
