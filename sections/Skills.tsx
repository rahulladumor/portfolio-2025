import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaAws, FaDatabase, FaDocker, FaPython, FaReact, FaStar, FaTools } from "react-icons/fa";
import {
  SiAmazondynamodb,
  SiAmazons3,
  SiAngular,
  SiElasticsearch,
  SiGo,
  SiGooglecloud,
  SiGraphql,
  SiJenkins,
  SiKubernetes,
  SiMicrosoftazure,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPytorch,
  SiRedis,
  SiRedux,
  SiTensorflow,
  SiTerraform,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

type Technology = {
  name: string;
  proficiency: number; // 1-5
  icon: React.ComponentType<{ className?: string }>;
};

type Skill = {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  technologies: Technology[];
  description: string;
};

const getTechnologyIcon = (name: string): React.ComponentType<{ className?: string }> => {
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    AWS: FaAws,
    Azure: SiMicrosoftazure,
    GCP: SiGooglecloud,
    TensorFlow: SiTensorflow,
    PyTorch: SiPytorch,
    SageMaker: FaTools,
    "Node.js": SiNodedotjs,
    Python: FaPython,
    Golang: SiGo,
    Microservices: AiOutlineCloudServer,
    "REST APIs": TbApi,
    GraphQL: SiGraphql,
    "React.js": FaReact,
    "Vue.js": SiVuedotjs,
    Angular: SiAngular,
    TypeScript: SiTypescript,
    "Next.js": SiNextdotjs,
    Redux: SiRedux,
    Docker: FaDocker,
    Kubernetes: SiKubernetes,
    Jenkins: SiJenkins,
    Terraform: SiTerraform,
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    DynamoDB: SiAmazondynamodb,
    Redis: SiRedis,
    Elasticsearch: SiElasticsearch,
    S3: SiAmazons3,
  };

  return iconMap[name] || FaTools;
};

const skills: Skill[] = [
  {
    id: 1,
    icon: AiOutlineCloudServer,
    name: "Cloud & AI",
    description: "Expert in cloud architecture and AI/ML solutions with focus on scalability and performance",
    technologies: [
      { name: "AWS", proficiency: 5, icon: FaAws },
      { name: "Azure", proficiency: 4, icon: SiMicrosoftazure },
      { name: "GCP", proficiency: 4, icon: SiGooglecloud },
      { name: "TensorFlow", proficiency: 4, icon: SiTensorflow },
      { name: "PyTorch", proficiency: 4, icon: SiPytorch },
      { name: "SageMaker", proficiency: 5, icon: FaTools },
    ],
  },
  {
    id: 2,
    icon: FaTools,
    name: "Backend Technologies",
    description: "Building robust and scalable backend systems with modern technologies",
    technologies: [
      { name: "Node.js", proficiency: 5, icon: SiNodedotjs },
      { name: "Python", proficiency: 5, icon: FaPython },
      { name: "Golang", proficiency: 4, icon: SiGo },
      { name: "Microservices", proficiency: 5, icon: AiOutlineCloudServer },
      { name: "REST APIs", proficiency: 5, icon: TbApi },
      { name: "GraphQL", proficiency: 4, icon: SiGraphql },
    ],
  },
  {
    id: 3,
    icon: FaReact,
    name: "Frontend Technologies",
    description: "Creating beautiful and responsive user interfaces with modern frameworks",
    technologies: [
      { name: "React.js", proficiency: 5, icon: FaReact },
      { name: "Vue.js", proficiency: 4, icon: SiVuedotjs },
      { name: "Angular", proficiency: 3, icon: SiAngular },
      { name: "TypeScript", proficiency: 5, icon: SiTypescript },
      { name: "Next.js", proficiency: 5, icon: SiNextdotjs },
      { name: "Redux", proficiency: 4, icon: SiRedux },
    ],
  },
  {
    id: 4,
    icon: FaDocker,
    name: "DevOps & Infrastructure",
    description: "Implementing efficient CI/CD pipelines and infrastructure automation",
    technologies: [
      { name: "Docker", proficiency: 5, icon: FaDocker },
      { name: "Kubernetes", proficiency: 4, icon: SiKubernetes },
      { name: "Jenkins", proficiency: 4, icon: SiJenkins },
      { name: "Terraform", proficiency: 5, icon: SiTerraform },
      { name: "CI/CD", proficiency: 5, icon: FaTools },
      { name: "AWS ECS/EKS", proficiency: 4, icon: FaAws },
    ],
  },
  {
    id: 5,
    icon: FaDatabase,
    name: "Databases & Storage",
    description: "Designing and optimizing database solutions for various use cases",
    technologies: [
      { name: "MongoDB", proficiency: 5, icon: SiMongodb },
      { name: "PostgreSQL", proficiency: 4, icon: SiPostgresql },
      { name: "DynamoDB", proficiency: 5, icon: SiAmazondynamodb },
      { name: "Redis", proficiency: 4, icon: SiRedis },
      { name: "Elasticsearch", proficiency: 4, icon: SiElasticsearch },
      { name: "S3", proficiency: 5, icon: SiAmazons3 },
    ],
  },
];

const SkillCard: React.FC<{
  skill: Skill;
  isSelected: boolean;
  onClick: () => void;
}> = ({ skill, isSelected, onClick }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      className={`p-6 rounded-xl backdrop-blur-sm cursor-pointer
                border border-gray-200 dark:border-gray-700
                ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-blue-500/50"
                    : "bg-white dark:bg-gray-800/50 hover:border-blue-500/50"
                }
                transition-all duration-300`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{skill.name}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>

          <AnimatePresence>
            {isSelected && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 space-y-4"
              >
                {skill.technologies.map((tech) => {
                  const TechIcon = tech.icon;
                  return (
                    <div key={tech.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-md bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10">
                          <TechIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-3 h-3 ${
                              i < tech.proficiency ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id={Section.Skills} className="py-20 sm:py-32">
      {getSectionHeading(Section.Skills)}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            isSelected={selectedId === skill.id}
            onClick={() => setSelectedId(selectedId === skill.id ? null : skill.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
