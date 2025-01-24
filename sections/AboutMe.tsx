import { motion } from "framer-motion";
import Image from "next/image";
import { FaAward, FaCloud, FaCode, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const highlights = [
  {
    icon: <FaCloud className="w-5 h-5" />,
    title: "Cloud Expert",
    description: "AWS Certified Expert & Community Builder specializing in scalable architectures",
  },
  {
    icon: <FaCode className="w-5 h-5" />,
    title: "Full Stack Developer",
    description: "Proficient in Node.js, Python, Golang, and modern web technologies",
  },
  {
    icon: <FaLightbulb className="w-5 h-5" />,
    title: "Innovation Leader",
    description: "Founded CodeLamda Technologies, driving technological transformation",
  },
  {
    icon: <FaAward className="w-5 h-5" />,
    title: "Industry Recognition",
    description: "Key contributor to ProtectOnce's successful acquisition",
  },
  {
    icon: <FaGraduationCap className="w-5 h-5" />,
    title: "Community Builder",
    description: "Active in tech education and mentoring in Gujarat",
  },
];

const AboutMe = () => (
  <section id={Section.AboutMe} className="space-y-8">
    {getSectionHeading(Section.AboutMe)}

    <div className="grid lg:grid-cols-12 gap-12">
      {/* Profile Image */}
      <motion.div
        className="lg:col-span-3 relative h-[300px] lg:h-full rounded-2xl overflow-hidden
                   bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10
                   border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          fill
          alt="Rahul Ladumor"
          src="/images/about-me/selfie-boy.svg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4"
        />
      </motion.div>

      {/* Content */}
      <div className="lg:col-span-9 space-y-8">
        {/* Introduction */}
        <motion.div
          className="prose prose-lg dark:prose-invert"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl font-medium text-gray-900 dark:text-white">Hey there! 👋 I&apos;m Rahul Ladumor</p>

          <p className="text-gray-600 dark:text-gray-300">
            As the Founder & CEO of CodeLamda Technologies, I bring over 7 years of experience in transforming
            businesses through innovative technology solutions. My expertise in cloud architecture and AI implementation
            has helped companies scale their operations efficiently and effectively.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="p-6 rounded-xl bg-white dark:bg-gray-800/50 backdrop-blur-sm
                        border border-gray-200 dark:border-gray-700
                        hover:border-blue-500/50 dark:hover:border-blue-500/50
                        transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                             text-blue-600 dark:text-blue-400"
                >
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{highlight.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Details */}
        <motion.div
          className="prose prose-sm md:prose-base dark:prose-invert"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-600 dark:text-gray-300">
            My expertise spans across Cloud Architecture (AWS, Azure, GCP), AI/ML Solutions (TensorFlow, PyTorch,
            SageMaker), and Full Stack Development. I&apos;m particularly passionate about serverless architectures and
            enterprise-grade AI implementations.
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            Beyond technology, I&apos;m committed to fostering tech education and community building in Gujarat. I regularly
            contribute to the developer community through technical publications and open-source projects.
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            Looking to transform your business with innovative technology solutions? Let&apos;s connect through the
            <a
              href="#contact"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {" "}
              contact section
            </a>{" "}
            or visit{" "}
            <a
              href="https://codelamda.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              CodeLamda
            </a>
            .
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutMe;
