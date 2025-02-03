export const DEFAULT_TITLE =
  "Rahul Ladumor - AWS Cloud Architect & Tech Lead | CodeLamda: Scalable AI & Cloud Solutions Development";
export const DEFAULT_DESCRIPTION =
  "AWS Certified Cloud Architect with 7+ years experience. CodeLamda Technologies delivers enterprise-grade AI/ML solutions and cloud-native development. 50+ successful deployments for global clients. CodeLamda Technologies delivers enterprise-grade cloud solutions, AI/ML implementations, and full-stack development. AWS-certified team with 50+ successful deployments. Start your digital transformation today";
export const DEFAULT_KEYWORDS = [
  "Custom Software Development",
  "AWS Cloud Solutions",
  "AI Implementation Services",
  "Enterprise Tech Architecture",
  "Cloud Migration Experts",
  "Full-Stack Development Agency",
  "Digital Transformation Consulting",
  "Scalable SaaS Development",
  "Machine Learning Solutions",
  "Tech Stack Modernization",
  "Cloud Cost Optimization",
  "DevOps Engineering",
  "Microservices Architecture",
  "AI-Powered Applications",
  "Enterprise API Development",
  // Service-Oriented Keywords
  "Custom Software Development",
  "AWS Cloud Solutions",
  "AI Implementation Services",
  "Enterprise Tech Architecture",
  "Cloud Migration Experts",
  // Technical Expertise Keywords
  "Full Stack Development",
  "Microservices Architecture",
  "TypeScript Development",
  "React Developer",
  "Node.js Expert",
  // Hybrid Branding
  "CodeLamda Technologies",
  "Rahul Ladumor",
  "AWS Certified Architect",
  "Tech Lead",
  "Python Developer",
  "Golang Development",
];

export const DEFAULT_IMAGE = "https://codelamda.com/images/og-image.png";
export const SITE_URL = "https://codelamda.com";

export const DEFAULT_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "SoftwareApplication", "ProfessionalService"],
    "@id": `${SITE_URL}#org`,
    name: "CodeLamda Technologies",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    sameAs: [
      "https://github.com/CodeLamda",
      "https://linkedin.com/company/codelamda",
      "https://twitter.com/CodeLamdaTech",
      "https://github.com/rahulladumor",
    ],
    foundingDate: "2018",
    description:
      "Technology development agency specializing in cloud-native solutions and enterprise digital transformation",
    areaServed: "Worldwide",
    knowsAbout: [
      "Cloud Computing",
      "AWS Architecture",
      "AI/ML Solutions",
      "Enterprise Software Development",
      "Digital Transformation"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1"
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "0",
        priceCurrency: "USD"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rahul Ladumor",
    url: `${SITE_URL}/team/rahul-ladumor`,
    image: `${SITE_URL}/images/rahul-profile.jpg`,
    jobTitle: "CTO & Lead Cloud Architect",
    worksFor: { "@id": `${SITE_URL}#org` },
    sameAs: [
      "https://linkedin.com/in/rahulladumor",
      "https://twitter.com/rahulladumor",
      "https://github.com/rahulladumor",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "AWS Certified Solutions Architect Professional",
        url: "https://aws.amazon.com/certification/certified-solutions-architect-professional/"
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "AWS Certified DevOps Engineer Professional"
      }
    ],
    knowsAbout: [
      "Cloud Architecture",
      "AWS Services",
      "Enterprise Software Development",
      "AI/ML Implementation",
      "Digital Transformation"
    ],
    alumniOf: {
      "@type": "Organization",
      name: "AWS Training and Certification"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: "CodeLamda Technologies",
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}#org` },
    inLanguage: "en-US"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cloud Solutions & AI Development",
    provider: { "@id": `${SITE_URL}#org` },
    serviceType: ["Cloud Computing", "Software Development", "AI Implementation"],
    description: "Enterprise-grade cloud solutions and AI/ML implementations",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cloud & AI Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Architecture & Migration"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI/ML Solution Development"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Enterprise Software Development"
          }
        }
      ]
    }
  }
];
