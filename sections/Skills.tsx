import { useState } from "react";
import Image from "next/image";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

type Skill = {
  id: number;
  icon: string;
  name: string;
  technologies: Array<{
    name: string;
    proficiency: number; // 1-5
  }>;
  description: string;
};

const skills: Skill[] = [
  {
    id: 1,
    icon: "/images/skills/cloud.png",
    name: "Cloud & AI",
    description: "Expert in cloud architecture and AI/ML solutions with focus on scalability and performance",
    technologies: [
      { name: "AWS", proficiency: 5 },
      { name: "Azure", proficiency: 4 },
      { name: "GCP", proficiency: 4 },
      { name: "TensorFlow", proficiency: 4 },
      { name: "PyTorch", proficiency: 4 },
      { name: "SageMaker", proficiency: 5 },
    ],
  },
  {
    id: 2,
    icon: "/images/skills/backend.png",
    name: "Backend Technologies",
    description: "Building robust and scalable backend systems with modern technologies",
    technologies: [
      { name: "Node.js", proficiency: 5 },
      { name: "Python", proficiency: 5 },
      { name: "Golang", proficiency: 4 },
      { name: "Microservices", proficiency: 5 },
      { name: "REST APIs", proficiency: 5 },
      { name: "GraphQL", proficiency: 4 },
    ],
  },
  {
    id: 3,
    icon: "/images/skills/frontend.png",
    name: "Frontend Technologies",
    description: "Creating beautiful and responsive user interfaces with modern frameworks",
    technologies: [
      { name: "React.js", proficiency: 5 },
      { name: "Vue.js", proficiency: 4 },
      { name: "Angular", proficiency: 3 },
      { name: "TypeScript", proficiency: 5 },
      { name: "Next.js", proficiency: 5 },
      { name: "Redux", proficiency: 4 },
    ],
  },
  {
    id: 4,
    icon: "/images/skills/devops.png",
    name: "DevOps & Infrastructure",
    description: "Implementing efficient CI/CD pipelines and infrastructure automation",
    technologies: [
      { name: "Docker", proficiency: 5 },
      { name: "Kubernetes", proficiency: 4 },
      { name: "Jenkins", proficiency: 4 },
      { name: "Terraform", proficiency: 5 },
      { name: "CI/CD", proficiency: 5 },
      { name: "AWS ECS/EKS", proficiency: 4 },
    ],
  },
  {
    id: 5,
    icon: "/images/skills/database.png",
    name: "Databases & Storage",
    description: "Designing and optimizing database solutions for various use cases",
    technologies: [
      { name: "MongoDB", proficiency: 5 },
      { name: "PostgreSQL", proficiency: 4 },
      { name: "DynamoDB", proficiency: 5 },
      { name: "Redis", proficiency: 4 },
      { name: "Elasticsearch", proficiency: 4 },
      { name: "S3", proficiency: 5 },
    ],
  },
  {
    id: 6,
    icon: "/images/skills/blockchain.png",
    name: "Blockchain Technologies",
    description: "Developing decentralized applications and smart contracts",
    technologies: [
      { name: "Ethereum", proficiency: 4 },
      { name: "Solidity", proficiency: 4 },
      { name: "Web3", proficiency: 4 },
      { name: "Smart Contracts", proficiency: 4 },
      { name: "NFT", proficiency: 3 },
      { name: "DeFi", proficiency: 3 },
    ],
  },
];

const SkillCard: React.FC<{ 
  skill: Skill;
  isSelected: boolean;
  onClick: () => void;
}> = ({ skill, isSelected, onClick }) => (
  <motion.div
    layout
    onClick={onClick}
    className={`cursor-pointer p-6 rounded-xl backdrop-blur-sm
              border transition-all duration-300
              ${isSelected 
                ? 'col-span-2 row-span-2 bg-white dark:bg-gray-800/50 border-blue-500/50' 
                : 'bg-white/50 dark:bg-gray-800/30 border-gray-200 dark:border-gray-700 hover:border-blue-500/30'
              }`}
    whileHover={{ scale: isSelected ? 1 : 1.02 }}
  >
    <div className="flex items-start gap-4">
      <div className="relative w-10 h-10 rounded-lg overflow-hidden
                    bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10">
        <Image
          src={skill.icon}
          alt={skill.name}
          width={40}
          height={40}
          className="object-contain p-2"
        />
      </div>

      <div className="flex-grow">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {skill.description}
        </p>
      </div>
    </div>

    <AnimatePresence>
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-6 grid gap-4"
        >
          {skill.technologies.map((tech) => (
            <div key={tech.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-3 h-3 ${
                        i < tech.proficiency
                          ? 'text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="h-1.5 rounded-full bg-gray-200 dark:bg-gray-700">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(tech.proficiency / 5) * 100}%` }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  return (
    <section id={Section.Skills} className="space-y-8">
      {getSectionHeading(Section.Skills)}

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            isSelected={selectedSkill === skill.id}
            onClick={() => setSelectedSkill(selectedSkill === skill.id ? null : skill.id)}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
