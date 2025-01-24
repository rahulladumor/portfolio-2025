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
    description: "Award-winning Full Stack Developer and AWS Certified Solutions Architect with 7+ years of experience. Specialized in React.js, Node.js, TypeScript, and cloud-native applications. Founder of CodeLamda Technologies.",
    keywords: ["Full Stack Developer", "AWS Solutions Architect", "React Developer", "Node.js Expert", "TypeScript Developer", "Cloud Solutions Expert", "Software Engineer", "Web Developer", "JavaScript Developer", "Tech Entrepreneur"],
    type: "profile"
  },
  [Section.WorkExperience]: {
    title: "Professional Experience | Full Stack & Cloud Architecture | Rahul Ladumor",
    description: "Led high-impact projects at CodeLamda Technologies and ProtectOnce, delivering scalable cloud solutions and enterprise-grade applications. Expertise in AWS, React.js, Node.js, and microservices architecture.",
    keywords: ["Senior Developer Experience", "AWS Project Experience", "Full Stack Development", "Cloud Architecture Experience", "Tech Leadership", "Software Engineering Career", "React.js Experience", "Node.js Projects", "Enterprise Solutions", "Startup Experience"],
    type: "experience"
  },
  [Section.Skills]: {
    title: "Technical Skills | Full Stack Development & Cloud Architecture | Rahul Ladumor",
    description: "Comprehensive expertise in modern web development stack including React.js, Node.js, TypeScript, AWS, and cloud-native technologies. Specialized in building scalable, secure, and performant applications.",
    keywords: ["React.js", "Node.js", "TypeScript", "AWS Services", "Cloud Computing", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Microservices", "DevOps", "CI/CD", "System Design"],
    type: "skills"
  },
  [Section.Projects]: {
    title: "Portfolio & Projects | Full Stack Applications | Rahul Ladumor",
    description: "Showcase of innovative full-stack applications and cloud solutions. Featured projects demonstrate expertise in React.js, Node.js, AWS, and enterprise-scale architecture.",
    keywords: ["Web Applications", "Full Stack Projects", "React.js Projects", "Node.js Applications", "AWS Solutions", "Cloud Projects", "Enterprise Applications", "Open Source Projects", "Portfolio Projects", "Technical Case Studies"],
    type: "portfolio"
  },
  [Section.Blog]: {
    title: "Technical Blog | Web Development & Cloud Architecture | Rahul Ladumor",
    description: "In-depth articles on full-stack development, cloud architecture, and software engineering best practices. Regular insights on React.js, Node.js, AWS, and modern web development.",
    keywords: ["Web Development Blog", "Technical Writing", "Software Engineering Blog", "Cloud Computing Articles", "React.js Tutorials", "Node.js Guides", "AWS Tips", "Development Best Practices", "Tech Industry Insights", "Programming Tutorials"],
    type: "blog"
  },
  [Section.Certifications]: {
    title: "Professional Certifications | AWS & Development | Rahul Ladumor",
    description: "AWS Certified Solutions Architect Professional, AWS Community Builder, and various technical certifications in web development and cloud computing.",
    keywords: ["AWS Certification", "Technical Certifications", "Cloud Computing Certificates", "Professional Development", "AWS Community Builder", "Developer Certifications", "IT Certifications", "Cloud Architect Certification", "Software Development Certification", "Professional Achievements"],
    type: "certifications"
  },
  [Section.Education]: {
    title: "Educational Background | Computer Science | Rahul Ladumor",
    description: "Computer Science education with focus on software engineering, algorithms, and modern web development technologies. Continuous learner with emphasis on practical application.",
    keywords: ["Computer Science Degree", "Software Engineering Education", "Technical Education", "Professional Development", "IT Education", "Computer Programming", "Software Development Training", "Technical Training", "Web Development Education", "Continuous Learning"],
    type: "education"
  },
  [Section.Contact]: {
    title: "Contact Rahul Ladumor | Full Stack Developer & AWS Expert",
    description: "Get in touch for consulting, collaboration, or discussion about full-stack development, cloud architecture, and enterprise solutions. Available for technical leadership roles and project consultation.",
    keywords: ["Developer Contact", "Technical Consultation", "Project Collaboration", "Software Development Services", "Cloud Architecture Consultation", "Web Development Services", "Technical Advisory", "Professional Network", "Business Inquiry", "Development Partnership"],
    type: "contact"
  }
};
