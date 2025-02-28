import { ReactNode } from 'react';
import Head from 'next/head';

interface PerformanceLayoutProps {
  children: ReactNode;
}

export default function PerformanceLayout({ children }: PerformanceLayoutProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <main>{children}</main>
      </div>
    </>
  );
}
