import { useState } from 'react';
import { Section } from 'types/Sections';
import { getSectionHeading } from 'utils';
import WorkExperienceCard from 'components/WorkExperience/WorkExperienceCard';
import { WorkExperience } from 'types/WorkExperience';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const INITIAL_DISPLAY_COUNT = 2;

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    logo: '/images/work-experience/codelamda.svg',
    name: 'CodeLamda Technologies',
    period: { start: 'Sep 24', end: 'Present' },
    position: 'Founder & CEO',
    location: 'Surat, Gujarat, India',
    summary: 'Leading innovative cloud solutions and cutting-edge technology projects. Driving strategic technology decisions while maintaining hands-on involvement in project delivery and technical architecture.',
    keyFocus: [
      'Cloud Architecture',
      'AI/ML Solutions',
      'Strategic Leadership',
      'Technology Innovation',
      'Business Growth'
    ],
    technologies: ['AWS', 'Azure', 'Python', 'Node.js', 'React', 'TensorFlow']
  },
  {
    id: 2,
    logo: '/images/work-experience/prodigybuild.svg',
    name: 'ProdigyBuild',
    period: { start: 'Jul 23', end: 'Present' },
    position: 'Lead Engineer',
    location: 'United States',
    summary: 'Spearheading the development of AI-powered SaaS platforms with focus on enterprise-grade serverless solutions. Leading EPIC planning and implementing AI-driven automation systems.',
    keyFocus: [
      'AI-Powered SaaS',
      'Serverless Architecture',
      'Enterprise Solutions',
      'Team Leadership',
      'Technical Strategy'
    ],
    technologies: ['AWS', 'Azure', 'Python', 'Node.js', 'React', 'TensorFlow']
  },
  {
    id: 3,
    logo: '/images/work-experience/protectonce.svg',
    name: 'ProtectOnce',
    period: { start: 'May 22', end: 'Aug 24' },
    position: 'SDE 2',
    location: 'San Francisco Bay Area',
    summary: 'Developed a cutting-edge cybersecurity product with single-line code integration for web application security. Built innovative solutions using AWS, Linux System Administration, DevOps, Serverless, Node.js, and JavaScript. Part of the core team that led to successful acquisition by an Israeli company.',
    keyFocus: [
      'Web Application Security',
      'AWS Services',
      'DevOps & Serverless',
      'Node.js Development',
      'System Architecture'
    ],
    technologies: ['AWS', 'Linux', 'DevOps', 'Serverless', 'Node.js', 'JavaScript']
  },
  {
    id: 4,
    logo: '/images/work-experience/primelab.svg',
    name: 'PrimeLab',
    period: { start: 'Apr 22', end: 'Jun 22' },
    position: 'Blockchain Developer',
    location: 'United States',
    summary: 'Led development of NFTs and Blockchain technologies, managing multiple microservices including wallet services, transaction service, and user service. Developed libraries for DynamoDB and worked with GoLang for building robust protocols.',
    keyFocus: [
      'Blockchain Development',
      'NFT Technologies',
      'Microservices Architecture',
      'GoLang',
      'DynamoDB'
    ],
    technologies: ['Blockchain', 'NFT', 'Microservices', 'GoLang', 'DynamoDB']
  },
  {
    id: 5,
    logo: '/images/work-experience/nds.svg',
    name: 'NDS Global',
    period: { start: 'Aug 21', end: 'May 22' },
    position: 'Senior Software Developer',
    location: 'India',
    summary: 'Developed and implemented enterprise chatbot solutions using AWS Lex and Azure. Designed conversation flows, integrated with enterprise systems, and optimized solutions based on user feedback and usage data.',
    keyFocus: [
      'AWS Lex',
      'Azure Integration',
      'Chatbot Development',
      'Enterprise Systems',
      'Data Analytics'
    ],
    technologies: ['AWS Lex', 'Azure', 'Chatbot', 'Enterprise Systems', 'Data Analytics']
  },
  {
    id: 6,
    logo: '/images/work-experience/appgambit.svg',
    name: 'AppGambit',
    period: { start: 'Jul 20', end: 'Jul 21' },
    position: 'Full Stack Cloud Developer',
    location: 'Surat, Gujarat, India',
    summary: 'Developed high-scale systems including audit logger using ElasticSearch and IVR system. Managed systems handling 1M+ requests per minute using AWS services (ECS, EKS, Fargate, ECR). Focused on performance tuning and cloud infrastructure optimization.',
    keyFocus: [
      'AWS Services',
      'ElasticSearch',
      'High-Scale Systems',
      'IVR Development',
      'Cloud Infrastructure'
    ],
    technologies: ['AWS', 'ElasticSearch', 'High-Scale Systems', 'IVR', 'Cloud Infrastructure']
  },
  {
    id: 7,
    logo: '/images/work-experience/appgambit.svg',
    name: 'AppGambit',
    period: { start: 'Jan 20', end: 'Jul 20' },
    position: 'Cloud Engineer',
    location: 'Surat, Gujarat, India',
    summary: 'Designed and implemented cloud-based solutions, managed containerized applications, and utilized multiple cloud service providers. Focused on analyzing business requirements, monitoring system performance, and resolving complex issues.',
    keyFocus: [
      'Cloud Architecture',
      'Container Management',
      'Performance Monitoring',
      'System Design',
      'Cloud Optimization'
    ],
    technologies: ['Cloud', 'Containerization', 'Performance Monitoring', 'System Design', 'Cloud Optimization']
  },
  {
    id: 8,
    logo: '/images/work-experience/bynebits.svg',
    name: 'Bynebits',
    period: { start: 'Dec 17', end: 'Jul 19' },
    position: 'Software Developer',
    location: 'Indore, Madhya Pradesh, India',
    summary: 'Built scalable web applications using Node.js and AWS serverless technologies. Developed RenagatePartner platform for company investment insights and visualization. Designed efficient database architectures and implemented complex data processing systems.',
    keyFocus: [
      'Node.js',
      'AWS Serverless',
      'Database Architecture',
      'Data Analytics',
      'System Optimization'
    ],
    technologies: ['Node.js', 'AWS Serverless', 'Database Architecture', 'Data Analytics', 'System Optimization']
  },
  {
    id: 9,
    logo: '/images/work-experience/creative.svg',
    name: 'Creative Infotech',
    period: { start: 'Apr 16', end: 'Sep 17' },
    position: 'Full Stack Developer',
    location: 'Surat, Gujarat, India',
    summary: 'Developed an E-commerce application using PHP Codeigniter with three panels for local women\'s clothing business. Implemented real-time cart management, session handling, and optimized database performance through caching and best practices.',
    keyFocus: [
      'PHP Codeigniter',
      'E-commerce Development',
      'Database Optimization',
      'Session Management',
      'Performance Tuning'
    ],
    technologies: ['PHP Codeigniter', 'E-commerce', 'Database Optimization', 'Session Management', 'Performance Tuning']
  }
];

const WorkExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedExperiences = showAll 
    ? workExperiences 
    : workExperiences.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section 
      id={Section.WorkExperience}
      className="space-y-6"
      aria-label="Work Experience Section"
    >
      {getSectionHeading(Section.WorkExperience)}

      {/* Experience Cards */}
      <div className="grid gap-6">
        <AnimatePresence mode="wait">
          {displayedExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <WorkExperienceCard 
                experience={experience}
                index={index}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More Button */}
      {!showAll && workExperiences.length > INITIAL_DISPLAY_COUNT && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={() => setShowAll(true)}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                     hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20
                     text-gray-700 dark:text-gray-200
                     border border-gray-200 dark:border-gray-700
                     transition-all duration-300"
            aria-label="Show more experiences"
          >
            Show More Experiences
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaChevronDown className="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
            </motion.span>
          </button>
        </motion.div>
      )}

      {/* Show Less Button */}
      {showAll && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={() => setShowAll(false)}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                     hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20
                     text-gray-700 dark:text-gray-200
                     border border-gray-200 dark:border-gray-700
                     transition-all duration-300"
            aria-label="Show fewer experiences"
          >
            Show Less
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transform: 'rotate(180deg)' }}
            >
              <FaChevronDown className="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
            </motion.span>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default WorkExperienceSection;
