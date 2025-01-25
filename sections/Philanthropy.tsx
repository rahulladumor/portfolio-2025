"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaHandHoldingHeart } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

const philanthropyData = [
  {
    id: 1,
    title: "Tech Education Impact & Mentorship",
    subtitle:
      "Led 30+ comprehensive web development workshops reaching 600+ students globally. Dedicated 250+ hours to teaching modern JavaScript, React, Node.js, and cloud technologies. Achieved 95% positive feedback and mentored 50+ students into successful tech careers.",
    keywords: ["Tech Education", "Mentorship", "Web Development", "Career Growth"]
  },
  {
    id: 2,
    title: "Open Source Leadership & Innovation",
    subtitle:
      "Maintained 25+ open source projects with 2000+ combined GitHub stars. Contributed 150+ meaningful PRs to major frameworks. Created developer tools and libraries used by 10,000+ developers monthly. Active core contributor to popular React and Node.js projects.",
    keywords: ["Open Source", "GitHub", "Developer Tools", "Community Impact"]
  },
  {
    id: 3,
    title: "Developer Community Building",
    subtitle:
      "Founded and grew a tech community of 1500+ active developers. Organized 40+ technical workshops and hackathons. Featured 60+ industry experts as speakers. Created platforms for knowledge sharing and collaboration in cloud computing and web development.",
    keywords: ["Community Building", "Tech Events", "Knowledge Sharing", "Networking"]
  },
  {
    id: 4,
    title: "Technical Content Creation",
    subtitle:
      "Published 50+ in-depth technical articles and tutorials. Created comprehensive learning resources for modern web development. Reached 100,000+ developers through various platforms. Specialized content in React, Node.js, AWS, and system architecture.",
    keywords: ["Technical Writing", "Education", "Content Creation", "Knowledge Sharing"]
  },
  {
    id: 5,
    title: "Diversity in Tech Initiatives",
    subtitle:
      "Led programs supporting underrepresented groups in tech. Provided free mentorship to 30+ aspiring developers from diverse backgrounds. Organized coding bootcamps focused on women in tech. Created scholarship opportunities for tech education.",
    keywords: ["Diversity", "Inclusion", "Social Impact", "Education Access"]
  },
  {
    id: 6,
    title: "Environmental Tech Solutions",
    subtitle:
      "Developed open-source solutions for environmental monitoring. Created applications for tracking carbon footprint and sustainability metrics. Contributed to green technology initiatives. Mentored projects focused on environmental impact.",
    keywords: ["Green Tech", "Sustainability", "Environmental Impact", "Social Responsibility"]
  }
];

const PhilanthropyCard: React.FC<{
  philanthropy: (typeof philanthropyData)[0];
  index: number;
}> = ({ philanthropy, index }) => {
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
          <div className="p-2.5 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20
                       group-hover:from-pink-500/30 group-hover:to-purple-500/30
                       transition-all duration-300">
            <FaHandHoldingHeart className="w-5 h-5 text-pink-600 dark:text-pink-400" />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-grow min-w-0">
          <h3 className="text-base font-semibold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                       dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            {philanthropy.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{philanthropy.subtitle}</p>
          {philanthropy.keywords && (
            <div className="mt-3 flex flex-wrap gap-2">
              {philanthropy.keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium
                           bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-blue-500/5
                           text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Button */}
        {philanthropy.url && (
          <div className="flex-shrink-0 self-start ml-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openURLInNewTab(philanthropy.url!)}
              className="p-2.5 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20
                       group-hover:from-pink-500/30 group-hover:to-purple-500/30
                       transition-all duration-300"
              aria-label={`View ${philanthropy.title} details`}
            >
              <FaExternalLinkAlt className="w-4 h-4 text-pink-600 dark:text-pink-400" />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Philanthropy = () => (
  <section id={Section.Philanthropy} className="py-16 sm:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {getSectionHeading(Section.Philanthropy)}

      {/* Info Box */}
      <div className="mt-6 relative bg-white/80 dark:bg-gray-800/50 rounded-xl overflow-hidden
                    border border-gray-100/50 dark:border-gray-700/50
                    backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5" />
        <div className="relative p-4 sm:p-6 flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex-shrink-0">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
          </div>
          <div>
            <h4 className="text-base font-semibold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                         dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Community Impact & Social Responsibility
            </h4>
            <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 max-w-3xl">
              Committed to empowering the next generation of developers through education, mentorship, and community building. 
              Driving positive change through tech initiatives focused on diversity, sustainability, and knowledge sharing. 
              Making technology education accessible and fostering an inclusive developer ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Philanthropy Cards */}
      <div className="mt-6 sm:mt-8 space-y-4">
        {philanthropyData.map((item, index) => (
          <PhilanthropyCard key={item.id} philanthropy={item} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Philanthropy;
