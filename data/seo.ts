import { Section } from "types/Sections";

interface SectionSEO {
  title: string;
  description: string;
  keywords: string[];
  type: string;
}

export const sectionSEO: Record<Section, SectionSEO> = {
  [Section.AboutMe]: {
    title: "Rahul Ladumor | Senior Full Stack Developer & AWS Solutions Architect",
    description:
      "Award-winning Full Stack Developer and AWS Certified Solutions Architect with 7+ years of experience. Specialized in React.js, Node.js, TypeScript, and cloud-native applications.",
    keywords: [
      "Full Stack Developer",
      "AWS Solutions Architect",
      "React Developer",
      "Node.js Expert",
      "TypeScript Developer",
      "Cloud Solutions Expert",
      "Software Engineer",
      "Web Developer",
      "JavaScript Developer",
      "Senior Developer",
    ],
    type: "profile",
  },
  [Section.WorkExperience]: {
    title: "Professional Experience | Full Stack & Cloud Architecture | Rahul Ladumor",
    description:
      "Led high-impact projects delivering scalable cloud solutions and enterprise-grade applications. Expertise in AWS, React.js, Node.js, and microservices architecture.",
    keywords: [
      "Senior Developer Experience",
      "AWS Project Experience",
      "Full Stack Development",
      "Cloud Architecture Experience",
      "Tech Leadership",
      "Software Engineering Career",
      "React.js Experience",
      "Node.js Projects",
      "Enterprise Solutions",
      "System Architecture",
    ],
    type: "experience",
  },
  [Section.Education]: {
    title: "Educational Background | Computer Science | Rahul Ladumor",
    description:
      "Computer Science education with focus on software engineering, algorithms, and modern web development technologies. Continuous learner with emphasis on practical application.",
    keywords: [
      "Computer Science",
      "Software Engineering",
      "Technical Education",
      "Professional Development",
      "Continuous Learning",
      "Tech Education",
      "Engineering Background",
      "Academic Achievements",
      "Technical Training",
      "Skills Development",
    ],
    type: "education",
  },
  [Section.Skills]: {
    title: "Technical Skills | Full Stack Development & Cloud Architecture | Rahul Ladumor",
    description:
      "Comprehensive expertise in modern web development stack including React.js, Node.js, TypeScript, AWS, and cloud-native technologies. Specialized in building scalable, secure, and performant applications.",
    keywords: [
      "React.js",
      "Node.js",
      "TypeScript",
      "AWS Services",
      "Cloud Computing",
      "Docker",
      "Kubernetes",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "DevOps",
      "CI/CD",
      "System Design",
    ],
    type: "skills",
  },
  [Section.Projects]: {
    title: "Portfolio & Projects | Full Stack Applications | Rahul Ladumor",
    description:
      "Showcase of innovative full-stack applications and cloud solutions. Featured projects demonstrate expertise in React.js, Node.js, AWS, and enterprise-scale architecture.",
    keywords: [
      "Web Applications",
      "Full Stack Projects",
      "React.js Projects",
      "Node.js Applications",
      "AWS Solutions",
      "Cloud Projects",
      "Enterprise Applications",
      "Open Source Projects",
    ],
    type: "projects",
  },
  [Section.Blog]: {
    title: "Tech Blog | Cloud Architecture & Full Stack Development | Rahul Ladumor",
    description:
      "Insights and tutorials on cloud architecture, full-stack development, and modern web technologies. Learn about AWS, React.js, Node.js, and best practices in software development.",
    keywords: [
      "Tech Blog",
      "Cloud Architecture",
      "Full Stack Development",
      "AWS Tutorials",
      "React.js Tips",
      "Node.js Guides",
      "Software Development",
      "Web Development",
      "Tech Articles",
    ],
    type: "blog",
  },
  [Section.Languages]: {
    title: "Programming Languages & Technologies | Rahul Ladumor",
    description:
      "Proficient in multiple programming languages and technologies including JavaScript, TypeScript, Python, and Go. Experience with modern frameworks and cloud platforms.",
    keywords: [
      "Programming Languages",
      "JavaScript",
      "TypeScript",
      "Python",
      "Go",
      "Web Technologies",
      "Cloud Technologies",
      "Development Tools",
    ],
    type: "languages",
  },
  [Section.Achievements]: {
    title: "Professional Achievements & Recognition | Rahul Ladumor",
    description:
      "Notable achievements and recognition in software development, cloud architecture, and technical leadership. AWS certifications and industry awards.",
    keywords: [
      "Professional Achievements",
      "AWS Certifications",
      "Industry Recognition",
      "Technical Awards",
      "Professional Accomplishments",
    ],
    type: "achievements",
  },
  [Section.Certifications]: {
    title: "AWS & Technical Certifications | Rahul Ladumor",
    description:
      "AWS Certified Solutions Architect and other technical certifications. Validated expertise in cloud architecture, security, and enterprise solutions.",
    keywords: [
      "AWS Certifications",
      "Technical Certifications",
      "Cloud Certifications",
      "Professional Credentials",
      "Industry Certifications",
    ],
    type: "certifications",
  },
  [Section.Philanthropy]: {
    title: "Tech Community & Open Source Contributions | Rahul Ladumor",
    description:
      "Contributing to the tech community through open source projects, mentoring, and knowledge sharing. Making technology accessible and impactful.",
    keywords: [
      "Open Source",
      "Tech Community",
      "Mentoring",
      "Knowledge Sharing",
      "Community Contributions",
      "Tech Education",
    ],
    type: "philanthropy",
  },
  [Section.Music]: {
    title: "Music & Creative Projects | Rahul Ladumor",
    description:
      "Exploring the intersection of technology and music. Personal projects and creative endeavors in digital music production.",
    keywords: ["Music Technology", "Creative Projects", "Digital Music", "Audio Production", "Tech & Music"],
    type: "music",
  },
  [Section.Contact]: {
    title: "Contact Rahul Ladumor | Full Stack Developer & AWS Architect",
    description:
      "Get in touch for collaboration opportunities, consulting services, or technical discussions. Connect for cloud solutions and full-stack development projects.",
    keywords: [
      "Contact",
      "Professional Network",
      "Business Inquiry",
      "Collaboration",
      "Consulting",
      "Project Discussion",
    ],
    type: "contact",
  },
};
