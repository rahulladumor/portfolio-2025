import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="en">
    <Head>
      {/* Primary Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#2c3e50" />
      <meta name="msapplication-TileColor" content="#2c3e50" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Preconnect to required origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Font optimization */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;600&display=swap"
        media="print"
        onLoad={(e) => {
          const target = e.target as HTMLLinkElement;
          target.media = "all";
        }}
      />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data - Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Rahul Ladumor",
            url: "https://rahulladumor.com",
            jobTitle: "Founder & CEO",
            worksFor: {
              "@type": "Organization",
              name: "CodeLamda Technologies",
            },
            sameAs: [
              "https://github.com/rahulladumor",
              "https://linkedin.com/in/rahulladumor",
              // Add other social profile URLs
            ],
          }),
        }}
      />
    </Head>

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
