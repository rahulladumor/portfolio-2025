import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "contexts/ThemeProvider";
import Navigation from "components/Navigation";
import ScrollToTop from "components/ScrollToTop";
import NoSSR from "components/NoSSR";
import PerformanceLayout from "components/Layout/PerformanceLayout";

import "animate.css";
import "styles/globals.css";
import "tippy.js/dist/tippy.css";

const SITE_URL = "https://rahulladumor.com";
const SITE_NAME = "Rahul Ladumor - Portfolio";
const SITE_TITLE = "Rahul Ladumor - AWS Expert & Cloud Architect";
const SITE_DESCRIPTION =
  "AWS Certified Expert & Cloud Architect with 7+ years of experience. Specializing in cloud solutions, AI/ML, and enterprise architecture.";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <PerformanceLayout>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href={SITE_URL} />
          
          <title>{SITE_TITLE}</title>
          <meta name="description" content={SITE_DESCRIPTION} />
          <meta name="author" content="Rahul Ladumor" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={`${SITE_URL}/images/og-image.png`} />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={SITE_URL} />
          <meta property="twitter:title" content={SITE_TITLE} />
          <meta property="twitter:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:image" content={`${SITE_URL}/images/og-image.png`} />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NoSSR>
          <Navigation />
          <Component {...pageProps} />
          <ScrollToTop />
        </NoSSR>
        
        <Analytics />
      </PerformanceLayout>
    </ThemeProvider>
  );
};

export default App;
