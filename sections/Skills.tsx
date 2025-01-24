import Image from "next/image";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

type Skill = {
  id: number;
  icon: string;
  name: string;
  technologies: string[];
};

const skills: Skill[] = [
  {
    id: 1,
    icon: "/images/skills/cloud.png",
    name: "Cloud & AI",
    technologies: ["AWS (Certified)", "Azure", "GCP", "TensorFlow", "PyTorch", "AWS SageMaker"],
  },
  {
    id: 2,
    icon: "/images/skills/backend.png",
    name: "Backend Technologies",
    technologies: ["Node.js", "Python", "Golang", "Microservices", "REST APIs", "GraphQL"],
  },
  {
    id: 3,
    icon: "/images/skills/frontend.png",
    name: "Frontend Technologies",
    technologies: ["React.js", "Vue.js", "Angular", "TypeScript", "Next.js", "Redux"],
  },
  {
    id: 4,
    icon: "/images/skills/devops.png",
    name: "DevOps & Infrastructure",
    technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform", "CI/CD", "AWS ECS/EKS"],
  },
  {
    id: 5,
    icon: "/images/skills/database.png",
    name: "Databases & Storage",
    technologies: ["MongoDB", "PostgreSQL", "DynamoDB", "Redis", "Elasticsearch", "S3"],
  },
  {
    id: 6,
    icon: "/images/skills/blockchain.png",
    name: "Blockchain Technologies",
    technologies: ["Ethereum", "Solidity", "Web3", "Smart Contracts", "NFT", "DeFi"],
  }
];

const Skills = () => (
  <div id={Section.Skills}>
    {getSectionHeading(Section.Skills)}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100"
        >
          <div className="w-5 h-5">
            <Image src={skill.icon} width={20} height={20} alt={skill.name} className="object-contain" />
          </div>

          <div className="min-w-0 flex-1 flex flex-col">
            <strong className="truncate">{skill.name}</strong>
            <small className="truncate">({skill.technologies.join(", ")})</small>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
