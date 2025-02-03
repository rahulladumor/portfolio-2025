import { ImageLoaderProps } from 'next/image';

export const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  // Implement WebP format if supported
  const webpSupported = process.browser && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
  
  // Generate appropriate format based on browser support
  const format = webpSupported ? 'webp' : 'jpg';
  
  // Calculate optimal quality
  const optimizedQuality = quality || 75;
  
  // Handle different image sources
  if (src.startsWith('http')) {
    // For external images
    return `${src}?w=${width}&q=${optimizedQuality}&fmt=${format}`;
  }
  
  // For local images
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${optimizedQuality}`;
};

export const generateBlurDataURL = async (src: string): Promise<string> => {
  try {
    const response = await fetch(src);
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    return `data:image/jpeg;base64,${base64}`;
  } catch (error) {
    console.error('Error generating blur data URL:', error);
    return '';
  }
};

export const optimizeImageAttributes = {
  loading: 'lazy',
  decoding: 'async',
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
};
