import { IconType } from "react-icons";
import {
  SiAmazonaws,
  SiDocker,
  SiGithubactions,
  SiGo,
  SiGrafana,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiServerless,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

export interface TechItem {
  Icon: IconType;
  color: string;
  name: string;
  category: "cloud" | "language" | "framework" | "database" | "devops";
}

export const techStack: TechItem[] = [
  {
    Icon: SiAmazonaws,
    color: "#FF9900",
    name: "AWS Cloud",
    category: "cloud",
  },
  {
    Icon: SiServerless,
    color: "#FD5750",
    name: "Serverless",
    category: "cloud",
  },
  {
    Icon: SiNodedotjs,
    color: "#339933",
    name: "Node.js",
    category: "language",
  },
  {
    Icon: SiTypescript,
    color: "#3178C6",
    name: "TypeScript",
    category: "language",
  },
  {
    Icon: SiGo,
    color: "#00ADD8",
    name: "Golang",
    category: "language",
  },
  {
    Icon: SiPython,
    color: "#3776AB",
    name: "Python",
    category: "language",
  },
  {
    Icon: SiKubernetes,
    color: "#326CE5",
    name: "K8s",
    category: "devops",
  },
  {
    Icon: SiDocker,
    color: "#2496ED",
    name: "Docker",
    category: "devops",
  },
  {
    Icon: SiTerraform,
    color: "#7B42BC",
    name: "Terraform",
    category: "devops",
  },
  {
    Icon: SiMongodb,
    color: "#47A248",
    name: "MongoDB",
    category: "database",
  },
  {
    Icon: SiReact,
    color: "#61DAFB",
    name: "React",
    category: "framework",
  },
  {
    Icon: SiNextdotjs,
    color: "#000000",
    name: "Next.js",
    category: "framework",
  },
  {
    Icon: SiTailwindcss,
    color: "#06B6D4",
    name: "Tailwind",
    category: "framework",
  },
  {
    Icon: SiGithubactions,
    color: "#2088FF",
    name: "GH Actions",
    category: "devops",
  },
  {
    Icon: SiGrafana,
    color: "#F46800",
    name: "Grafana",
    category: "devops",
  },
];
