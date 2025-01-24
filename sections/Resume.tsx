'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFileDownload, FaEye, FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import links from "data/links";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

const resumeActions = [
  {
    id: 1,
    title: "Download PDF Resume",
    subtitle: "Get a minimal, organized version of my professional experience in PDF format.",
    icon: FaFilePdf,
    url: links.resume
  },
  {
    id: 2,
    title: "View Online Version",
    subtitle: "Access an interactive, web-friendly version of my resume with additional details.",
    icon: FaEye,
    url: `${links.website}#${Section.Resume}`
  },
  {
    id: 3,
    title: "Export & Share",
    subtitle: "Download my resume in various formats or share it directly with your network.",
    icon: FaFileDownload,
    url: links.resume
  }
];

const ResumeCard: React.FC<{
  action: typeof resumeActions[0];
  index: number;
}> = ({ action, index }) => {
  const Icon = action.icon;
  
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
          <div className="p-2 rounded-lg mt-1
                       bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                       border border-gray-200 dark:border-gray-700">
            <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white
                        group-hover:text-blue-500 dark:group-hover:text-blue-400
                        transition-colors duration-300">
              {action.title}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              {action.subtitle}
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openURLInNewTab(action.url)}
          className="flex-shrink-0 p-2 rounded-lg
                   bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                   border border-gray-200 dark:border-gray-700
                   group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20
                   transition-all duration-300"
        >
          <FaExternalLinkAlt className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Resume = () => (
  <section id={Section.Resume} className="space-y-8">
    {getSectionHeading(Section.Resume)}

    <div className="grid gap-6">
      <div className="grid gap-6 lg:grid-cols-3">
        {resumeActions.map((action, index) => (
          <ResumeCard
            key={action.id}
            action={action}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative aspect-[4/3] lg:aspect-[21/9] rounded-xl overflow-hidden
                border border-gray-200 dark:border-gray-700
                hover:border-blue-500/50 dark:hover:border-blue-500/50
                transition-all duration-300"
      >
        <Image
          src="/images/resume/cover.jpg"
          alt="Amruth Pillai's Resume Preview"
          fill
          className="object-cover object-center"
          onClick={() => openURLInNewTab(links.resume)}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300
                     flex items-end justify-center p-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openURLInNewTab(links.resume)}
            className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white
                     px-6 py-3 rounded-lg font-medium
                     flex items-center gap-2 transition-transform duration-300"
          >
            <FaFileDownload className="w-5 h-5" />
            Download Resume
          </motion.button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Resume;
