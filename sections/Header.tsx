import DeveloperIntro from "components/Header/DeveloperIntro";
import Profiles from "components/Header/Profiles";
import NoSSR from "components/NoSSR";
import Image from "next/image";
import { Section } from "types/Sections";
import { motion } from "framer-motion";
import AnimatedBackground from "components/Header/AnimatedBackground";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const Header: React.FC = () => {
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
          {/* Profile Image - Only visible on mobile */}
          <div className="lg:hidden flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-32"
            >
              <Image
                src="/images/profile.jpg"
                alt="Rahul Ladumor"
                fill
                className="object-cover rounded-full border-4 border-white/10 shadow-xl"
                priority
              />
            </motion.div>
          </div>

          {/* Name and Title */}
          <div className="relative">
            {/* Animated background for name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute -inset-x-8 -inset-y-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 
                       to-pink-500/5 blur-2xl rounded-2xl -z-10"
            />
            
            {/* Decorative elements */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -left-4 -top-4 w-8 h-8 rounded-full 
                       bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-40"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -right-4 -bottom-4 w-8 h-8 rounded-full 
                       bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-40"
            />

            {/* Name */}
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="relative"
              >
                <div className="relative flex flex-wrap items-center justify-center lg:justify-start gap-x-4 text-5xl lg:text-6xl xl:text-7xl font-bold">
                  {/* First Name */}
                  <div className="relative group">
                    <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 
                                 to-pink-600/20 blur-lg rounded-lg opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-300" />
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="relative inline-block bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800
                               dark:from-white dark:via-gray-200 dark:to-gray-300 
                               bg-clip-text text-transparent
                               group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600
                               transition-all duration-300"
                    >
                      Rahul
                    </motion.span>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 
                               rounded-full opacity-50 group-hover:opacity-100 group-hover:h-1.5 
                               transition-all duration-300"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="relative group">
                    <span className="absolute -inset-1 bg-gradient-to-r from-pink-600/20 via-purple-600/20 
                                 to-blue-600/20 blur-lg rounded-lg opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-300" />
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative inline-block bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900
                               dark:from-gray-300 dark:via-gray-200 dark:to-white 
                               bg-clip-text text-transparent
                               group-hover:from-pink-600 group-hover:via-purple-600 group-hover:to-blue-600
                               transition-all duration-300"
                    >
                      Ladumor
                    </motion.span>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-blue-500 
                               rounded-full opacity-50 group-hover:opacity-100 group-hover:h-1.5 
                               transition-all duration-300"
                    />
                  </div>

                  {/* Decorative Dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="absolute -right-4 -top-4 w-3 h-3 rounded-full 
                             bg-gradient-to-r from-blue-500 to-purple-500"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
                               blur-sm opacity-70"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mt-4 flex items-center justify-center lg:justify-start gap-4"
            >
              {/* Title text with gradient border */}
              <div className="relative px-6 py-2">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 
                             to-pink-500/20 blur-sm" />
                <div className="absolute inset-0 rounded-lg bg-white/50 dark:bg-black/50" />
                <div className="relative flex items-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="w-2 h-2 rounded-full bg-blue-500 mr-3"
                  />
                  <span className="text-lg text-gray-700 dark:text-gray-300 font-medium tracking-wide">
                    Founder & CEO @ CodeLamda Technologies
                  </span>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="w-2 h-2 rounded-full bg-pink-500 ml-3"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Developer Intro with Tech Stack */}
          <div className="mt-2">
            <NoSSR>
              <DeveloperIntro />
            </NoSSR>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium 
                     hover:bg-blue-700 transition-colors duration-200 shadow-lg 
                     hover:shadow-blue-500/20"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white 
                     rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 
                     transition-colors duration-200"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-6 justify-center lg:justify-start"
          >
            <a href="https://github.com/rahulladumor" target="_blank" rel="noopener noreferrer" 
               className="text-xl text-gray-600 hover:text-gray-900 dark:text-gray-400 
                      dark:hover:text-white transition-colors duration-200">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/rahulladumor" target="_blank" rel="noopener noreferrer"
               className="text-xl text-gray-600 hover:text-blue-600 dark:text-gray-400 
                      dark:hover:text-blue-400 transition-colors duration-200">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/rahulladumor" target="_blank" rel="noopener noreferrer"
               className="text-xl text-gray-600 hover:text-blue-400 dark:text-gray-400 
                      dark:hover:text-blue-400 transition-colors duration-200">
              <FaTwitter />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src="/images/profile.jpg"
              alt="Rahul Ladumor"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          </div>
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
