import { motion } from "framer-motion";
import {
  FaAws,
  FaCloud,
  FaCode,
  FaDatabase,
  FaDocker,
  FaJava,
  FaPython,
  FaReact,
  FaStar,
  FaTools,
} from "react-icons/fa";
import {
  SiGooglecloud,
  SiGraphql,
  SiJenkins,
  SiKubernetes,
  SiMicrosoftazure,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

import { Section } from "../types/Sections";
import { getSectionHeading } from "../utils";

interface Skill {
  name: string;
  percentage: number;
  description: string;
  icon: JSX.Element;
}

const languages: Skill[] = [
  { 
    name: "JavaScript/TypeScript", 
    percentage: 95, 
    description: "Expert in modern JavaScript (ES6+) and TypeScript, with extensive experience in React, Next.js, and Node.js ecosystems.", 
    icon: <SiTypescript className="w-5 h-5 text-blue-600 dark:text-blue-400" /> 
  },
  { 
    name: "React & Next.js", 
    percentage: 90, 
    description: "Advanced proficiency in React.js and Next.js, including hooks, context, SSR, and modern state management.", 
    icon: <FaReact className="w-5 h-5 text-blue-600 dark:text-blue-400" /> 
  },
  { 
    name: "Node.js", 
    percentage: 85, 
    description: "Strong backend development skills with Node.js, Express, and various middleware and authentication systems.", 
    icon: <FaCode className="w-5 h-5 text-blue-600 dark:text-blue-400" /> 
  },
  { 
    name: "Python", 
    percentage: 80, 
    description: "Proficient in Python for backend development, data processing, and automation scripting.", 
    icon: <FaPython className="w-5 h-5 text-blue-600 dark:text-blue-400" /> 
  },
];

const tools: Skill[] = [
  { 
    name: "Docker & K8s", 
    percentage: 90, 
    description: "Expert in containerization with Docker and orchestration with Kubernetes, including microservices architecture.", 
    icon: <FaDocker className="w-5 h-5 text-pink-600 dark:text-pink-400" /> 
  },
  { 
    name: "CI/CD", 
    percentage: 85, 
    description: "Advanced experience with Jenkins, GitHub Actions, and GitLab CI for automated testing and deployment.", 
    icon: <SiJenkins className="w-5 h-5 text-pink-600 dark:text-pink-400" /> 
  },
  { 
    name: "Databases", 
    percentage: 85, 
    description: "Proficient in SQL and NoSQL databases including PostgreSQL, MongoDB, and Redis.", 
    icon: <FaDatabase className="w-5 h-5 text-pink-600 dark:text-pink-400" /> 
  },
  { 
    name: "GraphQL", 
    percentage: 80, 
    description: "Strong experience with GraphQL APIs, Apollo Server/Client, and real-time subscriptions.", 
    icon: <SiGraphql className="w-5 h-5 text-pink-600 dark:text-pink-400" /> 
  },
];

const cloud: Skill[] = [
  { 
    name: "AWS", 
    percentage: 95, 
    description: "AWS Certified Solutions Architect with expertise in EC2, Lambda, S3, DynamoDB, and CloudFormation.", 
    icon: <FaAws className="w-5 h-5 text-green-600 dark:text-green-400" /> 
  },
  { 
    name: "Azure", 
    percentage: 85, 
    description: "Proficient in Azure services including App Service, Functions, and Azure DevOps.", 
    icon: <SiMicrosoftazure className="w-5 h-5 text-green-600 dark:text-green-400" /> 
  },
  { 
    name: "Infrastructure as Code", 
    percentage: 80, 
    description: "Experienced with Terraform and CloudFormation for infrastructure automation and management.", 
    icon: <SiTerraform className="w-5 h-5 text-green-600 dark:text-green-400" /> 
  },
];

const Skills = () => {
  return (
    <section id={Section.Skills} className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {getSectionHeading(Section.Skills)}

        {/* Info Box */}
        <div className="mt-8 relative bg-white/90 dark:bg-gray-800/90 rounded-2xl overflow-hidden
                    border border-gray-100 dark:border-gray-700
                    shadow-xl shadow-blue-500/5 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
          <div className="relative p-8 sm:p-10 flex items-center gap-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                         dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                Technical Expertise & Core Competencies
              </h2>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Comprehensive skill set spanning full-stack development, cloud architecture, and DevOps practices. 
                Expertise in modern web technologies, distributed systems, and scalable solutions. 
                Proven track record in delivering high-performance applications and leading technical initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Languages & Frameworks */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <FaCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                         dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Languages & Frameworks
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/80 dark:bg-gray-800/80 rounded-xl overflow-hidden
                          border border-gray-200 dark:border-gray-700
                          hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10
                          backdrop-blur-sm transition-all duration-300 p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10
                                group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                    {language.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{language.name}</h3>
                </div>
                <div className="space-y-4">
                  <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ width: `${language.percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{language.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20">
              <FaTools className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                         dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Tools & Technologies
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/80 dark:bg-gray-800/80 rounded-xl overflow-hidden
                          border border-gray-200 dark:border-gray-700
                          hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/10
                          backdrop-blur-sm transition-all duration-300 p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-pink-500/10 to-purple-500/10
                                group-hover:from-pink-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
                </div>
                <div className="space-y-4">
                  <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                      style={{ width: `${tool.percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cloud & Infrastructure */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20">
              <FaCloud className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                         dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Cloud & Infrastructure
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cloud.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/80 dark:bg-gray-800/80 rounded-xl overflow-hidden
                          border border-gray-200 dark:border-gray-700
                          hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10
                          backdrop-blur-sm transition-all duration-300 p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-green-500/10 to-blue-500/10
                                group-hover:from-green-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                </div>
                <div className="space-y-4">
                  <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
