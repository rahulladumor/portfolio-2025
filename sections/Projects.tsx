import Button from "components/Button";
import projectsList from "data/projects";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaTags } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const INITIAL_DISPLAY_COUNT = 3;

const ProjectCard: React.FC<{
  project: (typeof projectsList)[0];
  priority?: boolean;
}> = ({ project, priority = false }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group relative rounded-2xl overflow-hidden bg-white/80 dark:bg-gray-800/50 
                 border border-gray-100/50 dark:border-gray-700/50
                 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10
                 backdrop-blur-sm transition-all duration-300"
    >
      {/* Project Image with Fallback */}
      <div className="relative h-52 overflow-hidden">
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 
                     group-hover:scale-105 group-hover:opacity-90"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            <div className="text-7xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {project.name.charAt(0)}
            </div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-8 space-y-4">
        <div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                       dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-3">
            {project.name}
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 text-sm font-medium
                       px-3 py-1 rounded-lg
                       bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                       text-gray-700 dark:text-gray-300
                       border border-blue-500/20 dark:border-purple-500/20
                       transition-all duration-300"
            >
              <FaTags className="w-3.5 h-3.5" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  return (
    <section id={Section.Projects} className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {getSectionHeading(Section.Projects)}

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
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" 
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                             dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-2">
                  Featured Projects
                </h4>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  A collection of innovative projects showcasing expertise in cloud architecture, 
                  AI/ML solutions, and full-stack development. Each project demonstrates practical 
                  implementation of modern technologies and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <AnimatePresence>
            <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projectsList.slice(0, displayCount).map((project, index) => (
                <ProjectCard key={project.id} project={project} priority={index < INITIAL_DISPLAY_COUNT} />
              ))}
            </motion.div>
          </AnimatePresence>

          {displayCount < projectsList.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setDisplayCount((prev) => prev + 3)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                         bg-gradient-to-r from-blue-500 to-purple-500 
                         text-white font-medium
                         hover:shadow-lg hover:shadow-blue-500/20
                         transform hover:-translate-y-0.5
                         transition-all duration-300"
              >
                Show More Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
