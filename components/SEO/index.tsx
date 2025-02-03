import Head from "next/head";
import { useRouter } from "next/router";

import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_KEYWORDS,
  DEFAULT_SCHEMA,
  DEFAULT_TITLE,
  SITE_URL,
} from "./constants";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: string;
  section?: string;
  schema?: object;
}

function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  type = "website",
  section,
  schema = DEFAULT_SCHEMA,
}: SEOProps) {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}${router.asPath}`;
  const seoImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

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

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      {section && <meta property="og:section" content={section} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rahulladumor" />
      <meta name="twitter:creator" content="@rahulladumor" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={seoImage} />

      {/* Theme */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export default SEO;
