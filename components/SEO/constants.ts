export const DEFAULT_TITLE =
  "Rahul Ladumor - AWS Cloud Architect & Tech Lead | Scalable Cloud Solutions Development";

export const DEFAULT_DESCRIPTION =
  "AWS Certified Cloud Architect with 7+ years experience. Specializing in enterprise-grade AI/ML solutions and cloud-native development. 50+ successful deployments for global clients. Expert in delivering enterprise-grade cloud solutions, AI/ML implementations, and full-stack development.";

export const DEFAULT_KEYWORDS = [
  "Rahul Ladumor",
  "AWS Cloud Architect",
  "Full Stack Developer",
  "Cloud Solutions",
  "AI/ML Expert",
  "Enterprise Architecture",
  "Tech Lead",
  "Node.js",
  "React",
  "TypeScript",
  "Python",
  "Cloud Native",
  "Microservices",
  "DevOps",
  "System Design"
];

export const AUTHOR = {
  email: "rahul@rahulladumor.com",
  name: "Rahul Ladumor",
  image: "/images/profile.png"
};

export const DEFAULT_IMAGE = "https://rahulladumor.com/images/og-image.png";
export const SITE_URL = "https://rahulladumor.com";

export const SOCIAL_LINKS = {
  github: "https://github.com/rahulladumor",
  linkedin: "https://linkedin.com/in/rahulladumor",
  twitter: "https://twitter.com/rahulladumor",
};

export const ORGANIZATION = {
  name: "Rahul Ladumor",
  url: SITE_URL,
  logo: "/images/profile.png",
  sameAs: [
    SOCIAL_LINKS.github,
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.twitter
  ]
};

export const BREADCRUMB_LIST = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${SITE_URL}/about`
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Portfolio",
      item: `${SITE_URL}/portfolio`
    }
  ]
};

export const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahul Ladumor",
  url: SITE_URL,
  image: "/images/profile.png",
  sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.twitter],
  jobTitle: "Senior Full Stack Developer & AWS Solutions Architect",
  worksFor: {
    "@type": "Organization",
    name: "Independent Professional",
  }
};

export const DEFAULT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahul Ladumor",
  url: SITE_URL,
  image: DEFAULT_IMAGE,
  sameAs: [
    "https://github.com/rahulladumor",
    "https://linkedin.com/in/rahulladumor",
    "https://twitter.com/rahulladumor"
  ],
  jobTitle: "Senior Full Stack Developer & AWS Solutions Architect",
  worksFor: {
    "@type": "Organization",
    name: "Independent Professional"
  },
  description: DEFAULT_DESCRIPTION,
  email: AUTHOR.email,
  telephone: "+91 9898989898",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "India"
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Gujarat Technological University",
      sameAs: "https://www.gtu.ac.in/"
    }
  ]
};
