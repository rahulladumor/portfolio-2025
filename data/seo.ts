import { Section } from "types/Sections";

interface SectionSEO {
  title: string;
  description: string;
  keywords: string[];
  type: string;
}

export const sectionSEO: Record<Section, SectionSEO> = {
  [Section.AboutMe]: {
    title: "About Rahul Ladumor - AWS Expert & Cloud Architect",
    description: "Founder & CEO of CodeLamda Technologies with 7+ years of experience in cloud architecture, AI/ML solutions, and enterprise systems. AWS Certified Expert specializing in scalable cloud solutions.",
    keywords: ["AWS Expert", "Cloud Architect", "CodeLamda Founder", "Tech Leader", "Enterprise Solutions"],
    type: "profile"
  },
  [Section.WorkExperience]: {
    title: "Professional Experience - Rahul Ladumor",
    description: "Track record of success from CodeLamda Technologies to ProtectOnce, specializing in cloud architecture, AI implementation, and enterprise solutions.",
    keywords: ["CodeLamda Technologies", "ProtectOnce", "Tech Leadership", "Cloud Solutions", "Enterprise Architecture"],
    type: "profile"
  },
  [Section.Skills]: {
    title: "Technical Skills & Expertise - Rahul Ladumor",
    description: "Expertise in AWS, Cloud Architecture, AI/ML, Full Stack Development, and Enterprise Solutions. Certified AWS Expert with hands-on experience in cutting-edge technologies.",
    keywords: ["AWS", "Cloud Architecture", "AI/ML", "Full Stack", "DevOps", "Enterprise Solutions"],
    type: "profile"
  },
  [Section.Projects]: {
    title: "Portfolio & Projects - Rahul Ladumor",
    description: "Showcase of innovative projects in cloud architecture, AI/ML solutions, and enterprise systems. Featured work includes high-scale systems and cutting-edge implementations.",
    keywords: ["Cloud Projects", "AI Solutions", "Enterprise Systems", "Technical Portfolio", "Case Studies"],
    type: "portfolio"
  },
  [Section.Blog]: {
    title: "Technical Blog - Rahul Ladumor",
    description: "Insights and expertise on AWS, cloud architecture, AI/ML, and enterprise solutions. Regular publications on modern technology trends and best practices.",
    keywords: ["Tech Blog", "AWS Articles", "Cloud Computing", "AI/ML Insights", "Enterprise Architecture"],
    type: "blog"
  },
  [Section.Certifications]: {
    title: "AWS Certifications & Achievements - Rahul Ladumor",
    description: "AWS Certified Expert with multiple certifications. Recognition as AWS Community Builder and technical achievements in cloud architecture.",
    keywords: ["AWS Certifications", "Cloud Expertise", "Technical Achievements", "Professional Development"],
    type: "profile"
  },
  [Section.Education]: {
    title: "Education & Qualifications - Rahul Ladumor",
    description: "Academic background in Information Technology from Veer Narmad South Gujarat University, combined with professional certifications and continuous learning.",
    keywords: ["IT Education", "Professional Development", "Technical Training", "Academic Background"],
    type: "profile"
  },
  [Section.Languages]: {
    title: "Language Proficiency - Rahul Ladumor",
    description: "Multilingual professional proficient in English, Hindi, and Gujarati, enabling effective communication across diverse teams and markets.",
    keywords: ["Language Skills", "Professional Communication", "Multilingual", "Global Collaboration"],
    type: "profile"
  },
  [Section.Philantrophy]: {
    title: "Community Impact - Rahul Ladumor",
    description: "Committed to tech education and community building in Gujarat. Leading initiatives for digital literacy and technology accessibility.",
    keywords: ["Tech Education", "Community Building", "Digital Literacy", "Social Impact", "Mentorship"],
    type: "profile"
  },
  [Section.Contact]: {
    title: "Contact Rahul Ladumor - Let's Connect",
    description: "Get in touch for collaboration opportunities, cloud architecture consulting, or enterprise solution discussions. Based in Surat, Gujarat, India.",
    keywords: ["Contact", "Professional Network", "Business Inquiry", "Collaboration", "Consulting"],
    type: "profile"
  },
  [Section.Resume]: {
    title: "Professional Resume - Rahul Ladumor",
    description: "Comprehensive professional profile highlighting expertise in AWS, cloud architecture, and enterprise solutions. Download resume for detailed qualifications.",
    keywords: ["Professional Resume", "Career History", "Technical Expertise", "Achievements"],
    type: "profile"
  }
};
