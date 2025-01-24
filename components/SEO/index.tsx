import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: string;
  section?: string;
  schema?: object;
}

const DEFAULT_TITLE = "Rahul Ladumor - AWS Expert & Cloud Architect | Founder of CodeLamda";
const DEFAULT_DESCRIPTION = "AWS Certified Expert & Cloud Architect with 7+ years of experience. Founder & CEO of CodeLamda Technologies, specializing in cloud solutions, AI/ML, and enterprise architecture.";
const DEFAULT_KEYWORDS = [
  "Rahul Ladumor",
  "AWS Expert",
  "Cloud Architect",
  "CodeLamda",
  "Full Stack Developer",
  "AI/ML Solutions",
  "Enterprise Architecture",
  "Cloud Solutions",
  "AWS Certified",
  "TypeScript",
  "React Developer",
  "Node.js Expert",
  "Python Developer",
  "Golang Developer",
  "Tech Lead"
];
const DEFAULT_IMAGE = "/images/og-image.png";
const SITE_URL = "https://codelamda.com";

const DEFAULT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rahul Ladumor",
  "url": SITE_URL,
  "image": `${SITE_URL}${DEFAULT_IMAGE}`,
  "sameAs": [
    "https://github.com/rahulladumor",
    "https://linkedin.com/in/rahulladumor",
    "https://twitter.com/rahulladumor"
  ],
  "jobTitle": "Senior Software Engineer & AWS Expert",
  "worksFor": {
    "@type": "Organization",
    "name": "CodeLamda Technologies"
  },
  "description": DEFAULT_DESCRIPTION,
  "knowsAbout": [
    "Cloud Architecture",
    "AWS",
    "Full Stack Development",
    "Enterprise Solutions",
    "AI/ML",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Golang"
  ]
};

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  type = "website",
  section,
  schema = DEFAULT_SCHEMA
}) => {
  const router = useRouter();
  const currentPath = section ? `${SITE_URL}/#${section}` : SITE_URL;
  const fullTitle = section ? `${title} | Rahul Ladumor` : title;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={[...keywords, ...DEFAULT_KEYWORDS].join(', ')} />
      <meta name="author" content="Rahul Ladumor" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="generator" content="Next.js" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentPath} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Rahul Ladumor - AWS Expert & Cloud Architect" />
      <meta property="og:site_name" content="Rahul Ladumor Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rahulladumor" />
      <meta name="twitter:creator" content="@rahulladumor" />
      <meta name="twitter:url" content={currentPath} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Rahul Ladumor - AWS Expert & Cloud Architect" />

      {/* Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Additional Meta Tags */}
      <link rel="canonical" href={currentPath} />
      <meta name="theme-color" content="#2c3e50" />
      <meta name="msapplication-TileColor" content="#2c3e50" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Head>
  );
};

export default SEO;
