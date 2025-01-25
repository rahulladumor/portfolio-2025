import { motion } from "framer-motion";
import { Section } from "../types/Sections";
import { getSectionHeading } from "../utils";
import Head from "next/head";
import {
  FaAward,
  FaCloud,
  FaCode,
  FaIndustry,
  FaLightbulb,
  FaRocket,
  FaTools,
  FaUsers,
  FaCertificate,
  FaHandshake,
  FaEnvelope,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const AboutMe = () => {
  const seoKeywords = [
    "Rahul Ladumor",
    "CodeLamda Technologies",
    "Cloud Architecture",
    "Digital Transformation",
    "AI/ML Solutions",
    "Enterprise Applications",
    "DevOps Automation",
    "Blockchain Development",
    "Full Stack Development",
    "AWS Certified",
    "Tech Leadership",
    "Innovation",
  ].join(", ");

  return (
    <>
      <Head>
        <title>About Rahul Ladumor - Founder & CEO of CodeLamda Technologies</title>
        <meta
          name="description"
          content="Rahul Ladumor is the Founder & CEO of CodeLamda Technologies, with 7+ years of experience in cloud architecture, AI/ML solutions, and digital transformation. Expert in AWS, Azure, and modern tech stack."
        />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content="About Rahul Ladumor - Tech Innovator & Business Leader" />
        <meta
          property="og:description"
          content="Discover how Rahul Ladumor and CodeLamda Technologies are transforming businesses through innovative technology solutions, reducing cloud costs by 40% and handling 1M+ requests per minute."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section id={Section.AboutMe} className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {getSectionHeading(Section.AboutMe)}

          {/* Introduction Card */}
          <div className="mt-8 relative bg-white/90 dark:bg-gray-800/90 rounded-xl overflow-hidden
                      border border-gray-100 dark:border-gray-700
                      shadow-xl shadow-blue-500/5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
            <div className="relative p-8 sm:p-10">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                           dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent
                           tracking-tight leading-snug">
                👋 Hi, I'm Rahul Ladumor
              </h1>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Founder & CEO of <span className="text-blue-600 dark:text-blue-400">CodeLamda Technologies</span>,
                pioneering innovative solutions in cloud architecture and AI implementation.
              </p>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                With over 7 years of experience, we've revolutionized business operations by reducing cloud costs up to
                <span className="font-semibold text-green-600 dark:text-green-400"> 40%</span> and building robust systems
                handling <span className="font-semibold text-blue-600 dark:text-blue-400">1M+ requests per minute</span>.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FaCertificate className="w-4 h-4 text-yellow-500" />
                  <span>AWS Certified Expert</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FaHandshake className="w-4 h-4 text-blue-500" />
                  <span>50+ Enterprise Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div className="mt-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <FaRocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                           dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                What We Do Best
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Cloud Architecture & Digital Transformation",
                  description: "Expert implementation of scalable cloud solutions using AWS, Azure, and GCP",
                  icon: FaCloud
                },
                {
                  title: "AI/ML Solutions Implementation",
                  description: "Custom AI/ML solutions for process automation and data analytics",
                  icon: FaLightbulb
                },
                {
                  title: "Enterprise Application Development",
                  description: "Scalable, secure, and high-performance enterprise applications",
                  icon: FaCode
                },
                {
                  title: "DevOps Automation & Infrastructure",
                  description: "Streamlined CI/CD pipelines and infrastructure management",
                  icon: FaTools
                },
                {
                  title: "Cybersecurity Solutions",
                  description: "Comprehensive security measures for enterprise applications",
                  icon: FaAward
                },
                {
                  title: "Blockchain Development",
                  description: "Smart contracts and decentralized application development",
                  icon: FaIndustry
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-xl bg-white/80 dark:bg-gray-800/80
                            border border-gray-200 dark:border-gray-700
                            hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10
                            backdrop-blur-sm transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10
                                  group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                      <service.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                <FaTools className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                           dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                Our Tech Stack
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Cloud", items: ["AWS (Certified)", "Azure", "GCP"] },
                { title: "Backend", items: ["Node.js", "Python", "Golang"] },
                { title: "Frontend", items: ["React.js", "Vue.js", "Angular"] },
                { title: "DevOps", items: ["Docker", "Kubernetes", "Jenkins"] },
                { title: "Database", items: ["MongoDB", "PostgreSQL", "DynamoDB"] },
                { title: "AI/ML", items: ["TensorFlow", "PyTorch", "AWS SageMaker"] },
                { title: "Blockchain", items: ["Ethereum", "Solidity", "Web3"] }
              ].map((stack, index) => (
                <motion.div
                  key={stack.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-xl bg-white/80 dark:bg-gray-800/80
                            border border-gray-200 dark:border-gray-700
                            hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/10
                            backdrop-blur-sm transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-pink-500/10 to-purple-500/10
                                  group-hover:from-pink-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                      <FaCode className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">{stack.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-sm
                                 bg-gradient-to-r from-pink-500/5 to-purple-500/5
                                 text-gray-700 dark:text-gray-300
                                 border border-gray-200 dark:border-gray-700
                                 transition-all duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Industries & Solutions */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Industries */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20">
                  <FaIndustry className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-base font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                             dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                  Industries We Serve
                </h2>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "FinTech",
                  "HealthTech",
                  "E-commerce",
                  "EdTech",
                  "Manufacturing",
                  "Logistics",
                  "Enterprise IT"
                ].map((industry, index) => (
                  <motion.div
                    key={industry}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-4 rounded-lg bg-white/80 dark:bg-gray-800/80
                              border border-gray-200 dark:border-gray-700
                              hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10
                              backdrop-blur-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-gradient-to-br from-green-500/10 to-blue-500/10
                                    group-hover:from-green-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                        <FaIndustry className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">{industry}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specialized Solutions */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500/20 to-red-500/20">
                  <FaLightbulb className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h2 className="text-base font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                             dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                  Specialized Solutions
                </h2>
              </div>
              <div className="space-y-2">
                {[
                  "Cloud-Native Application Development",
                  "Enterprise System Modernization",
                  "AI-Powered Business Automation",
                  "Real-time Data Processing Systems",
                  "Secure Payment Infrastructure",
                  "Smart Contract Development",
                  "High-Performance Computing Solutions"
                ].map((solution, index) => (
                  <motion.div
                    key={solution}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-4 rounded-lg bg-white/80 dark:bg-gray-800/80
                              border border-gray-200 dark:border-gray-700
                              hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/10
                              backdrop-blur-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-gradient-to-br from-yellow-500/10 to-red-500/10
                                    group-hover:from-yellow-500/20 group-hover:to-red-500/20 transition-all duration-300">
                        <FaLightbulb className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">{solution}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-10">
            <div className="relative bg-white/90 dark:bg-gray-800/90 rounded-xl overflow-hidden
                        border border-gray-100 dark:border-gray-700
                        shadow-lg shadow-blue-500/5 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
              <div className="relative p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <FaUsers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-base font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                               dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                    Let's Connect
                  </h2>
                </div>
                <div className="mt-3 space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Ready to transform your business with cutting-edge technology solutions? Let's discuss your requirements!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:contact@codelamda.com"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm
                               bg-gradient-to-r from-blue-500 to-purple-500 text-white
                               hover:from-blue-600 hover:to-purple-600
                               transition-all duration-300"
                    >
                      <FaEnvelope className="w-3.5 h-3.5 mr-2" />
                      Contact Us
                    </a>
                    <a
                      href="https://www.codelamda.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm
                               bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                               border border-gray-200 dark:border-gray-700
                               hover:border-blue-500/30 hover:shadow-sm hover:shadow-blue-500/10
                               transition-all duration-300"
                    >
                      <FaGlobe className="w-3.5 h-3.5 mr-2" />
                      Visit Website
                    </a>
                  </div>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href="https://github.com/codelamda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                    <a
                      href="https://linkedin.com/company/codelamda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://twitter.com/codelamda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <FaTwitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
