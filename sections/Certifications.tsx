import certificationsList from "data/certifications";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaAws, FaExternalLinkAlt } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

const CertificationCard: React.FC<{
  certification: (typeof certificationsList)[0];
  index: number;
}> = ({ certification, index }) => {
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
        {/* Logo/Icon Container */}
        <div className="flex-shrink-0 pt-1">
          <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 
                       dark:from-gray-800 dark:to-gray-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
            {certification.isAWS ? (
              <div className="absolute inset-0 flex items-center justify-center p-2.5">
                <FaAws className="w-full h-full text-[#FF9900] opacity-90 
                               group-hover:scale-105 transition-transform duration-300" />
              </div>
            ) : (
              certification.icon && (
                <Image
                  src={certification.icon}
                  alt={certification.title}
                  layout="fill"
                  objectFit="contain"
                  className="p-2.5 group-hover:scale-105 transition-transform duration-300"
                />
              )
            )}
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-grow min-w-0">
          <h3 className="text-base font-semibold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                       dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            {certification.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{certification.subtitle}</p>
          {certification.validUntil && (
            <div className="mt-3 flex items-center gap-1.5">
              <svg 
                className="w-4 h-4 text-gray-500 dark:text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Valid until: {certification.validUntil}
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        {certification.url && (
          <div className="flex-shrink-0 self-start ml-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openURLInNewTab(certification.url!)}
              className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20
                       group-hover:from-blue-500/30 group-hover:to-purple-500/30
                       transition-all duration-300"
              aria-label={`View ${certification.title} certificate`}
            >
              <FaExternalLinkAlt className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id={Section.Certifications} className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {getSectionHeading(Section.Certifications)}

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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-semibold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                           dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                Professional Certifications & Expertise
              </h4>
              <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 max-w-3xl">
                Industry-recognized certifications demonstrating expertise in cloud computing, 
                software development, and system architecture. Validated skills in AWS services, 
                security best practices, and modern development methodologies.
              </p>
            </div>
          </div>
        </div>

        {/* Certification Cards */}
        <div className="mt-6 sm:mt-8 space-y-4">
          {certificationsList.map((certification, index) => (
            <CertificationCard key={certification.id} certification={certification} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
