import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

// Dynamically import heavy components
const ThemeProvider = dynamic(() => import('../../contexts/ThemeProvider'), {
  ssr: false,
  loading: () => <div style={{ height: '100vh', background: '#ffffff' }} />
});

interface PerformanceLayoutProps {
  children: ReactNode;
}

function PerformanceLayout({ children }: PerformanceLayoutProps) {
  const router = useRouter();

  useEffect(() => {
    // Preload critical routes
    const preloadCriticalRoutes = () => {
      router.prefetch('/');
      // Add other critical routes here
    };

    // Defer non-critical resources
    const deferNonCritical = () => {
      const loadNonCritical = () => {
        // Load non-critical CSS
        const nonCriticalCSS = document.createElement('link');
        nonCriticalCSS.rel = 'stylesheet';
        nonCriticalCSS.href = '/css/non-critical.css';
        document.head.appendChild(nonCriticalCSS);

        // Load non-critical scripts
        const nonCriticalScript = document.createElement('script');
        nonCriticalScript.src = '/js/non-critical.js';
        nonCriticalScript.defer = true;
        document.body.appendChild(nonCriticalScript);
      };

      if (window.requestIdleCallback) {
        window.requestIdleCallback(loadNonCritical);
      } else {
        setTimeout(loadNonCritical, 1000);
      }
    };

    preloadCriticalRoutes();
    deferNonCritical();

    // Optimize images on viewport
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      if ('loading' in HTMLImageElement.prototype) {
        images.forEach(img => {
          if (img instanceof HTMLImageElement) {
            img.loading = 'lazy';
          }
        });
      } else {
        // Fallback for browsers that don't support native lazy loading
        const lazyImageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              lazyImageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => lazyImageObserver.observe(img));
      }
    };

    lazyLoadImages();

    // Clean up resources on unmount
    return () => {
      // Clean up any observers or listeners here
    };
  }, [router]);

  return (
    <ThemeProvider>
      <div className="performance-layout">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default PerformanceLayout;
