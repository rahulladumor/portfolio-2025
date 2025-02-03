import Image from 'next/image';
import { useEffect, useState } from 'react';

interface DynamicImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

function DynamicImage({ 
  src, 
  alt, 
  width: propWidth, 
  height: propHeight, 
  className = '', 
  priority = false 
}: DynamicImageProps) {
  const [isLoading, setLoading] = useState(true);
  const [imageDimensions, setImageDimensions] = useState({ width: propWidth || 0, height: propHeight || 0 });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!propWidth || !propHeight) {
      // Load image in background to get dimensions
      const img = document.createElement('img');
      img.src = src;
      img.onload = () => {
        setImageDimensions({
          width: img.width,
          height: img.height
        });
      };
      img.onerror = () => {
        setError('Failed to load image');
      };
    }
  }, [src, propWidth, propHeight]);

  if (error) {
    return (
      <div className={`bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center ${className}`}
           style={{ width: propWidth || 300, height: propHeight || 200 }}>
        <span className="text-sm text-gray-500 dark:text-gray-400">Image not available</span>
      </div>
    );
  }

  // Fallback for dev.to dynamic URLs
  if (src.includes('dev.to') || src.includes('dev-to-uploads')) {
    return (
      <div className={`relative overflow-hidden ${className}`}
           style={{ width: propWidth || '100%', height: propHeight || 'auto' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setLoading(false)}
          onError={() => setError('Failed to load image')}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        alt={alt}
        src={src}
        width={imageDimensions.width || 1000}
        height={imageDimensions.height || 500}
        priority={priority}
        quality={75}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
          ${className}
        `}
        onLoadingComplete={() => setLoading(false)}
        loading={priority ? 'eager' : 'lazy'}
        onError={() => setError('Failed to load image')}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
    </div>
  );
}

export default DynamicImage;