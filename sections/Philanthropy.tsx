"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaHandHoldingHeart } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

const philanthropyData = [
  {
    id: 1,
    title: "Tech Education Impact",
    subtitle:
      "Conducted 25+ workshops reaching 500+ students, dedicating 200+ hours to teaching web development and programming fundamentals.",
    url: "https://www.adplist.org/mentors/amruth-pillai",
  },
  {
    id: 2,
    title: "Open Source Contributions",
    subtitle:
      "Created and maintained 20+ open source projects, with 100+ merged PRs and 1.5k+ stars from the global developer community.",
    url: "https://github.com/AmruthPillai",
  },
  {
    id: 3,
    title: "Developer Mentorship",
    subtitle:
      "Mentored 50+ developers across 15+ countries through 150+ sessions on ADPList and LinkedIn, focusing on career growth and technical skills.",
    url: "https://www.linkedin.com/in/amruthpillai",
  },
  {
    id: 4,
    title: "Tech Community Building",
    subtitle:
      "Built a thriving community of 1000+ members, organizing 30+ events and featuring 50+ industry speakers to promote learning and collaboration.",
  },
];

const PhilanthropyCard: React.FC<{
  philanthropy: (typeof philanthropyData)[0];
  index: number;
}> = ({ philanthropy, index }) => {
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
            <FaHandHoldingHeart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>

          <div>
            <h3
              className="font-bold text-gray-900 dark:text-white
                        group-hover:text-blue-500 dark:group-hover:text-blue-400
                        transition-colors duration-300"
            >
              {philanthropy.title}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">{philanthropy.subtitle}</p>
          </div>
        </div>

        {philanthropy.url && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openURLInNewTab(philanthropy.url!)}
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

const Philanthropy = () => (
  <section id={Section.Philanthropy} className="space-y-8">
    {getSectionHeading(Section.Philanthropy)}

    <div className="grid gap-6">
      {philanthropyData.map((item, index) => (
        <PhilanthropyCard key={item.id} philanthropy={item} index={index} />
      ))}
    </div>
  </section>
);

export default Philanthropy;
