import { motion } from "framer-motion";
import certificationsList from "data/certifications";
import { FaAws, FaExternalLinkAlt } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";
import Image from "next/image";

const CertificationCard: React.FC<{
  certification: typeof certificationsList[0];
  index: number;
}> = ({ certification, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group p-6 bg-white dark:bg-gray-800/50 rounded-xl
                border border-gray-200 dark:border-gray-700
                hover:border-blue-500/50 dark:hover:border-blue-500/50
                hover:shadow-lg dark:hover:shadow-blue-500/10
                transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className={`p-2 rounded-lg mt-1
                       ${certification.isAWS 
                         ? 'bg-[#FF9900]/10 hover:bg-[#FF9900]/20' 
                         : 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10'}
                       border border-gray-200 dark:border-gray-700
                       transition-colors duration-300`}>
            {certification.isAWS ? (
              <FaAws className="w-5 h-5 text-[#FF9900]" />
            ) : (
              <div className="w-5 h-5 relative">
                {certification.icon ? (
                  <Image
                    src={certification.icon}
                    alt={certification.title}
                    layout="fill"
                    objectFit="contain"
                  />
                ) : (
                  <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full" />
                )}
              </div>
            )}
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white
                        group-hover:text-blue-500 dark:group-hover:text-blue-400
                        transition-colors duration-300">
              {certification.title}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              {certification.subtitle}
            </p>
            {certification.validUntil && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Valid until: {certification.validUntil}
              </p>
            )}
          </div>
        </div>

        {certification.url && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openURLInNewTab(certification.url!)}
            className={`flex-shrink-0 p-2 rounded-lg
                     ${certification.isAWS 
                       ? 'bg-[#FF9900]/10 hover:bg-[#FF9900]/20' 
                       : 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10'}
                     border border-gray-200 dark:border-gray-700
                     transition-all duration-300`}
          >
            <FaExternalLinkAlt className={`w-4 h-4 
              ${certification.isAWS ? 'text-[#FF9900]' : 'text-gray-700 dark:text-gray-300'}`} 
            />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id={Section.Certifications} className="py-20 sm:py-32">
      {getSectionHeading(Section.Certifications)}
      
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {certificationsList.map((certification, index) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
