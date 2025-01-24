import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub, FaTags, FaArrowRight } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";
import projectsList from "data/projects";
import links from "data/links";
import Button from "components/Button";

const INITIAL_DISPLAY_COUNT = 2;

const ProjectCard: React.FC<{ 
  project: typeof projectsList[0];
  priority?: boolean;
}> = ({ project, priority = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-800/50 
                 border border-gray-200 dark:border-gray-700
                 hover:border-blue-500/50 dark:hover:border-blue-500/50
                 transition-all duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 
                   group-hover:scale-110 group-hover:blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {project.name}
          </h3>
          <div className="flex gap-3">
            {project.link?.web && (
              <motion.a
                href={project.link.web}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 
                         dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label={`Visit ${project.name} website`}
              >
                <BiLinkExternal size={20} />
              </motion.a>
            )}
            {project.link?.github && (
              <motion.a
                href={project.link.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 
                         dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label={`View ${project.name} source code`}
              >
                <FaGithub size={20} />
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.summary}
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <FaTags className="flex-shrink-0" />
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full text-xs
                         bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                         text-gray-700 dark:text-gray-300
                         border border-gray-200 dark:border-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <AnimatePresence>
        {isHovered && project.link && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/60 cursor-pointer"
            onClick={() => project.link?.web && openURLInNewTab(project.link.web)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="flex items-center gap-2 text-white font-medium"
            >
              <span>View Project</span>
              <FaArrowRight className="text-sm" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll 
    ? projectsList 
    : projectsList.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section id={Section.Projects} className="space-y-8">
      {getSectionHeading(Section.Projects)}

      <motion.div 
        layout
        className="grid md:grid-cols-2 gap-8"
      >
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            priority={index < 2}
          />
        ))}
      </motion.div>

      <div className="flex justify-center gap-4">
        {!showAll && projectsList.length > INITIAL_DISPLAY_COUNT && (
          <Button
            icon={FaArrowRight}
            onClick={() => setShowAll(true)}
            className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                     hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20"
          >
            Show More Projects
          </Button>
        )}
        <Button 
          icon={FaGithub}
          onClick={() => openURLInNewTab(links.github)}
          className="bg-gradient-to-r from-gray-500/10 via-gray-600/10 to-gray-700/10
                   hover:from-gray-500/20 hover:via-gray-600/20 hover:to-gray-700/20"
        >
          View on GitHub
        </Button>
      </div>
    </section>
  );
};

export default Projects;
