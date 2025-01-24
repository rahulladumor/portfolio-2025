import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: string;
  section?: string;
}

const DEFAULT_TITLE = "Rahul Ladumor - AWS Expert & Cloud Architect | Founder of CodeLamda";
const DEFAULT_DESCRIPTION = "AWS Certified Expert & Cloud Architect with 7+ years of experience. Founder & CEO of CodeLamda Technologies, specializing in cloud solutions, AI/ML, and enterprise architecture.";
const DEFAULT_KEYWORDS = ["Rahul Ladumor", "AWS Expert", "Cloud Architect", "CodeLamda", "Full Stack Developer", "AI/ML Solutions"];
const DEFAULT_IMAGE = "/images/og-image.png";
const SITE_URL = "https://codelamda.com";

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  type = "website",
  section
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
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentPath} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentPath} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentPath} />

      {/* Preload Critical Resources */}
      <link rel="preload" href={imageUrl} as="image" />
    </Head>
  );
};

export default SEO;
