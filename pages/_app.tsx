import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import InteractiveBackground from "components/InteractiveBackground";
import PerformanceLayout from "components/Layout/PerformanceLayout";
import Navigation from "components/Navigation";
import NoSSR from "components/NoSSR";
import ScrollToTop from "components/ScrollToTop";
import ThemeProvider from "contexts/ThemeProvider";

import "animate.css";
import "styles/globals.css";
import "tippy.js/dist/tippy.css";

const SITE_URL = "https://codelamda.com";
const SITE_NAME = "Rahul Ladumor - Portfolio";
const SITE_TITLE = "Rahul Ladumor - AWS Expert & Cloud Architect | Founder of CodeLamda";
const SITE_DESCRIPTION =
  "AWS Certified Expert & Cloud Architect with 7+ years of experience. Founder & CEO of CodeLamda Technologies, specializing in cloud solutions, AI/ML, and enterprise architecture.";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Preload critical fonts
    const link = document.createElement('link');
    link.href = '/fonts/your-main-font.woff2';
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }, []);

  return (
    <PerformanceLayout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={SITE_URL} />
        
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/images/hero.webp" as="image" type="image/webp" />
        
        {/* Critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Add critical CSS here */
          body { margin: 0; }
          .no-flash { display: none; }
        `}} />
        
        {/* Primary Meta Tags */}
        <title>{SITE_TITLE}</title>
        <meta name="title" content={SITE_TITLE} />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="author" content="Rahul Ladumor" />
        <meta
          name="keywords"
          content="Rahul Ladumor, AWS Expert, Cloud Architect, CodeLamda, Full Stack Developer, AI/ML Solutions, Enterprise Architecture, Node.js, Python, Golang"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/images/og-image.png`} />
        <meta property="og:site_name" content={SITE_NAME} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={SITE_URL} />
        <meta property="twitter:title" content={SITE_TITLE} />
        <meta property="twitter:description" content={SITE_DESCRIPTION} />
        <meta property="twitter:image" content={`${SITE_URL}/images/og-image.png`} />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-rd-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#2c3e50" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Head>

      {/* Load critical scripts */}
      <Script
        strategy="afterInteractive"
        src="/js/critical.js"
      />

      {/* Defer non-critical scripts */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"
      />

      <ThemeProvider>
        <NoSSR>
          <div className="relative min-h-screen">
            <InteractiveBackground />
            <Navigation />
            <Component {...pageProps} />
            <ScrollToTop />
          </div>
        </NoSSR>
        <Analytics />
      </ThemeProvider>
    </PerformanceLayout>
  );
};

export default App;
