import AnimatedBackground from "components/Header/AnimatedBackground";
import AnimatedName from "components/Header/AnimatedName";
import DeveloperIntro from "components/Header/DeveloperIntro";
import ProfileParticles from "components/Header/ProfileParticles";
import Profiles from "components/Header/Profiles";
import StylizedProfileImage from "components/Header/StylizedProfileImage";
import NoSSR from "components/NoSSR";
import { AnimatePresence,motion } from "framer-motion";
import Image from "next/image";
import { useEffect,useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { Section } from "types/Sections";

const titles = [
  "Full Stack Developer",
  "AWS Solutions Architect",
  "Cloud Computing Expert",
  "DevOps Specialist",
  "Tech Lead"
];

const Header: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((current) => (current + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id={Section.AboutMe} className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-16 items-center">
        {/* Left Column - Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left"
        >
          {/* Profile Image - Mobile Only */}
          <div className="lg:hidden flex justify-center">
            <StylizedProfileImage />
          </div>

          {/* Name and Title */}
          <div className="lg:text-left text-center">
            <AnimatedName />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mt-4 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                AWS Expert & Cloud Architect
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Senior Full Stack Developer & AWS Solutions Architect
              </p>
            </motion.div>
          </div>

          {/* Developer Intro Component */}
          <div className="mt-4">
            <NoSSR>
              <DeveloperIntro />
            </NoSSR>
          </div>

          {/* Removed duplicate CTA buttons and social icons since they are in DeveloperIntro */}
        </motion.div>

        {/* Right Column - Desktop Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex justify-center items-center"
        >
          <StylizedProfileImage />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <HiArrowDown className="text-2xl text-gray-400 dark:text-gray-500" />
      </motion.div>

      {/* SEO Content */}
      <h2 className="sr-only">
        Full Stack Developer & AWS Solutions Architect
        Cloud Computing Expert | Enterprise Solutions
        Surat, Gujarat, India
      </h2>
    </section>
  );
};

export default Header;
