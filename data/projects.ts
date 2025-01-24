import type { Project } from "types/Sections";

const projectsList: Project[] = [
  {
    id: 1,
    image: "https://prodigybuild.com/images/logo.png",
    name: "ProtectOnce Security Platform",
    summary:
      "Developed a cutting-edge cybersecurity platform offering single-line code integration for web application security. Built with AWS, Serverless architecture, and Node.js.",
    tags: ["aws", "serverless", "nodejs", "security", "devops"],
  },
  {
    id: 2,
    image: "/images/projects/analytics.jpg",
    name: "Enterprise Audit Logger",
    summary:
      "Built a high-performance audit logging system using ElasticSearch, handling real-time user activity tracking and log storage for enterprise-scale applications.",
    tags: ["elasticsearch", "aws", "microservices", "monitoring", "analytics"],
  },
  {
    id: 3,
    image: "/images/projects/cloud-telephony.jpg",
    name: "Scalable IVR System",
    summary:
      "Developed a complex IVR system handling high call volumes for appointment reminders, integrated with AWS Pinpoint and third-party systems.",
    tags: ["aws", "ivr", "telephony", "integration", "cloud"],
  },
  {
    id: 4,
    image: "/images/projects/ai-chatbot.jpg",
    name: "Enterprise Chatbot Platform",
    summary:
      "Created an enterprise-grade chatbot solution using AWS Lex and Azure, featuring dynamic conversation flows and seamless enterprise system integration.",
    tags: ["aws-lex", "azure", "ai", "chatbot", "enterprise"],
  },
  {
    id: 5,
    image: "/images/projects/data-analytics.jpg",
    name: "RenagatePartner Analytics",
    summary:
      "Built a scalable analytics platform providing investment insights through company overview visualization and lead generation system.",
    tags: ["analytics", "nodejs", "aws", "visualization", "data"],
  },
];

export default projectsList;
