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
      className="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-800/50 
                 border border-gray-200 dark:border-gray-700
                 hover:border-blue-500/50 dark:hover:border-blue-500/50
                 hover:shadow-lg dark:hover:shadow-blue-500/10
                 transition-all duration-300"
    >
      {/* Project Image with Fallback */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/5 to-purple-500/5">
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority={priority}
            className="object-cover transition-all duration-500 
                     group-hover:scale-105 group-hover:opacity-90"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
            <div className="text-6xl font-bold text-blue-500/20">{project.name.charAt(0)}</div>
          </div>
        )}

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 
                      group-hover:opacity-100 transition-all duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.name}</h3>
          <p className="text-gray-600 dark:text-gray-300">{project.summary}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 text-xs font-medium
                       px-2.5 py-1.5 rounded-lg
                       bg-blue-500/10 text-blue-600 dark:text-blue-400
                       transition-colors duration-200"
            >
              <FaTags className="w-3 h-3" />
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
    <section id={Section.Projects} className="py-12 sm:py-16">
      {getSectionHeading(Section.Projects)}

      <div className="mt-6">
        <AnimatePresence>
          <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectsList.slice(0, displayCount).map((project, index) => (
              <ProjectCard key={project.id} project={project} priority={index < INITIAL_DISPLAY_COUNT} />
            ))}
          </motion.div>
        </AnimatePresence>

        {displayCount < projectsList.length && (
          <div className="mt-8 text-center">
            <Button onClick={() => setDisplayCount((prev) => prev + 3)}>Show More Projects</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
