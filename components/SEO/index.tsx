import Head from "next/head";
import { useRouter } from "next/router";

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
const DEFAULT_DESCRIPTION =
  "AWS Certified Expert & Cloud Architect with 7+ years of experience. Founder & CEO of CodeLamda Technologies, specializing in cloud solutions, AI/ML, and enterprise architecture.";
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
  "Tech Lead",
];
const DEFAULT_IMAGE = "/images/og-image.png";
const SITE_URL = "https://codelamda.com";

const DEFAULT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahul Ladumor",
  url: SITE_URL,
  image: `${SITE_URL}${DEFAULT_IMAGE}`,
  sameAs: [
    "https://github.com/rahulladumor",
    "https://linkedin.com/in/rahulladumor",
    "https://twitter.com/rahulladumor",
  ],
  jobTitle: "Senior Software Engineer & AWS Expert",
  worksFor: {
    "@type": "Organization",
    name: "CodeLamda Technologies",
  },
};

const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  type = "website",
  section,
  schema = DEFAULT_SCHEMA,
}) => {
  const router = useRouter();
  const url = `${SITE_URL}${router.asPath}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/images/favicon/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg" />
      <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* Theme */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...schema,
            url,
            image: imageUrl,
            ...(section && {
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": url,
              },
            }),
          }),
        }}
      />
    </Head>
  );
};

export default SEO;
