import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
  canonicalUrl?: string;
}

const defaultMeta = {
  title: 'Rahul Ladumor - Full Stack Developer',
  description: 'Full Stack Developer with expertise in React, Node.js, and Cloud Technologies. View my portfolio, projects, and professional experience.',
  keywords: 'Rahul Ladumor, Full Stack Developer, React Developer, Node.js Developer, Web Developer, Software Engineer',
  ogImage: '/og-image.jpg', // Make sure to add an og-image in your public folder
  siteUrl: 'https://rahulladumor.com' // Replace with your actual domain
};

const SEO: React.FC<SEOProps> = ({
  title = defaultMeta.title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  ogImage = defaultMeta.ogImage,
  noindex = false,
  nofollow = false,
  canonicalUrl,
}) => {
  const router = useRouter();
  const currentUrl = `${defaultMeta.siteUrl}${router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || currentUrl} />

      {/* Robots */}
      <meta 
        name="robots" 
        content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`}
      />

      {/* Open Graph */}
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO-friendly meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

export default SEO;
