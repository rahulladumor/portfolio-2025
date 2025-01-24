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
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group p-6 bg-white dark:bg-gray-800/50 rounded-xl
                border border-gray-200 dark:border-gray-700
                hover:border-blue-500/50 dark:hover:border-blue-500/50
                transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className="p-2 rounded-lg mt-1
                       bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                       border border-gray-200 dark:border-gray-700"
          >
            <FaTrophy className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>

          <div>
            <h3
              className="font-bold text-gray-900 dark:text-white
                        group-hover:text-blue-500 dark:group-hover:text-blue-400
                        transition-colors duration-300"
            >
              {achievement.title}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">{achievement.subtitle}</p>
          </div>
        </div>

        {achievement.url && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openURLInNewTab(achievement.url!)}
            className="flex-shrink-0 p-2 rounded-lg
                     bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                     border border-gray-200 dark:border-gray-700
                     group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20
                     transition-all duration-300"
          >
            <FaExternalLinkAlt className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

const Achievements = () => (
  <section id={Section.Achievements} className="space-y-8">
    {getSectionHeading(Section.Achievements)}

    <div className="grid gap-6">
      {achievementList.map((achievement, index) => (
        <AchievementCard key={achievement.id} achievement={achievement} index={index} />
      ))}
    </div>
  </section>
);

export default Achievements;
