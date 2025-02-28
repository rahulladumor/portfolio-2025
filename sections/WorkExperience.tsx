import WorkExperienceCard from "components/WorkExperience/WorkExperienceCard";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Section } from "types/Sections";
import { WorkExperience } from "types/WorkExperience";
import { getSectionHeading } from "utils";

const INITIAL_DISPLAY_COUNT = 2;

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    logo: "/images/profile.png",
    name: "Independent Consultant",
    period: { start: "Jan 2025", end: "Present" },
    position: "Senior Full Stack Developer & AWS Solutions Architect",
    location: "Remote",
    summary: [
      "Providing expert consulting services in cloud architecture and enterprise solutions",
      "Designing and implementing scalable cloud-native applications",
      "Leading technical architecture decisions for client projects",
      "Implementing best practices in cloud security and cost optimization"
    ],
    keyFocus: [
      "Cloud Architecture",
      "Enterprise Solutions",
      "Technical Leadership",
      "Solution Design"
    ],
    technologies: ["AWS", "React", "Node.js", "TypeScript", "Microservices", "Kubernetes"],
    url: "https://rahulladumor.com"
  },
  {
    id: 2,
    logo: "/images/companies/prodigybuild.png",
    name: "ProdigyBuild",
    period: { start: "Jul 2023", end: "Dec 2024" },
    position: "Senior Full Stack Developer",
    location: "Remote",
    summary: [
      "Led development of cloud-native applications using AWS services",
      "Architected and implemented microservices-based solutions",
      "Mentored junior developers and established best practices",
      "Implemented CI/CD pipelines and DevOps practices"
    ],
    keyFocus: [
      "Cloud Architecture",
      "Full Stack Development",
      "Team Leadership",
      "DevOps"
    ],
    technologies: ["AWS", "React", "Node.js", "TypeScript", "Docker", "Kubernetes"],
    url: "https://prodigybuild.com"
  },
  {
    id: 3,
    logo: "/images/companies/protectonce.png",
    name: "ProtectOnce",
    period: { start: "Jul 2022", end: "Sep 2024" },
    position: "Senior Software Engineer",
    location: "Remote",
    summary: [
      "Developed secure cloud solutions and security automation tools",
      "Implemented security best practices and compliance measures",
      "Built scalable backend services and RESTful APIs",
      "Led security audits and vulnerability assessments"
    ],
    keyFocus: [
      "Security Engineering",
      "Cloud Security",
      "API Development",
      "Automation"
    ],
    technologies: ["AWS", "Python", "Node.js", "Security Tools", "Docker"],
    url: "https://protectonce.com"
  },
  {
    id: 4,
    logo: "/images/companies/primelab.png",
    name: "PrimeLab",
    period: { start: "Apr 2022", end: "Jul 2022" },
    position: "Full Stack Developer",
    location: "Remote",
    summary: [
      "Built responsive web applications using React and Node.js",
      "Implemented real-time features using WebSocket",
      "Developed and maintained REST APIs",
      "Optimized application performance and user experience"
    ],
    keyFocus: [
      "Frontend Development",
      "Backend Development",
      "Real-time Applications",
      "Performance Optimization"
    ],
    technologies: ["React", "Node.js", "MongoDB", "WebSocket", "Redis"],
    url: "https://primelab.io"
  },
  {
    id: 5,
    logo: "/images/companies/nds.png",
    name: "NDS Global",
    period: { start: "Aug 2021", end: "May 2022" },
    position: "Full Stack Developer",
    location: "Remote",
    summary: [
      "Developed enterprise applications using React and Node.js",
      "Implemented cloud solutions using AWS services",
      "Created automated deployment pipelines",
      "Optimized database performance and queries"
    ],
    keyFocus: [
      "Enterprise Applications",
      "Cloud Integration",
      "Database Optimization",
      "DevOps"
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Jenkins"],
    url: "https://ndsglobal.com"
  },
  {
    id: 6,
    logo: "/images/companies/appgambit.png",
    name: "AppGambit",
    period: { start: "Jan 2020", end: "Jul 2021" },
    position: "Full Stack Cloud Developer",
    location: "Surat, India",
    summary: [
      "Led cloud-native application development using AWS services",
      "Implemented serverless architectures and microservices",
      "Developed full-stack applications using React and Node.js",
      "Managed cloud infrastructure and DevOps processes"
    ],
    keyFocus: [
      "Cloud Development",
      "Serverless Architecture",
      "Full Stack Development",
      "Infrastructure Management"
    ],
    technologies: ["AWS", "React", "Node.js", "Serverless", "Docker"],
    url: "https://appgambit.com"
  },
  {
    id: 7,
    logo: "/images/companies/bynebits.png",
    name: "Bynebits",
    period: { start: "Dec 2017", end: "Jul 2019" },
    position: "Software Developer",
    location: "Surat, India",
    summary: [
      "Developed web applications using JavaScript frameworks",
      "Built and maintained RESTful APIs",
      "Implemented responsive UI designs",
      "Collaborated with cross-functional teams"
    ],
    keyFocus: [
      "Web Development",
      "API Development",
      "UI/UX Implementation",
      "Team Collaboration"
    ],
    technologies: ["JavaScript", "Angular", "Node.js", "MongoDB", "Express"],
    url: "https://bynebits.com"
  },
  {
    id: 8,
    logo: "/images/companies/creative.png",
    name: "Creative Infotech",
    period: { start: "Apr 2016", end: "Sep 2017" },
    position: "Junior Developer",
    location: "Surat, India",
    summary: [
      "Developed web applications using PHP and JavaScript",
      "Created and maintained databases",
      "Implemented frontend designs using HTML/CSS",
      "Assisted in project planning and execution"
    ],
    keyFocus: [
      "Web Development",
      "Database Management",
      "Frontend Development",
      "Project Planning"
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    url: "https://creativeinfotech.com"
  }
];

const WorkExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedExperiences = showAll ? workExperiences : workExperiences.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section id={Section.WorkExperience} className="space-y-6" aria-label="Work Experience Section">
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
              <WorkExperienceCard experience={experience} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More Button */}
      {!showAll && workExperiences.length > INITIAL_DISPLAY_COUNT && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-8">
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
                ease: "easeInOut",
              }}
            >
              <FaChevronDown className="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
            </motion.span>
          </button>
        </motion.div>
      )}

      {/* Show Less Button */}
      {showAll && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-8">
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
                ease: "easeInOut",
              }}
              style={{ transform: "rotate(180deg)" }}
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
