"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { validateImage, DEFAULT_FALLBACK_IMAGE } from '@/lib/image-utils';
import { cn } from '@/lib/utils';

interface PostImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Component for consistently displaying post images with error handling
 */
export function PostImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  fill = false,
  onLoad,
  onError
}: PostImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(validateImage(src));
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setImageSrc(validateImage(src));
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    setImageSrc(DEFAULT_FALLBACK_IMAGE);
    onError?.();
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-bronze-50">
          <div className="w-8 h-8 border-4 border-bronze-300 border-t-bronze-600 rounded-full animate-spin"></div>
        </div>
      )}
      
      <Image
        src={imageSrc}
        alt={alt}
        width={!fill ? (width || 800) : undefined}
        height={!fill ? (height || 600) : undefined}
        fill={fill}
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          hasError ? "object-contain" : "object-cover", 
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
      />
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-bronze-50 bg-opacity-80 text-bronze-700">
          <p className="text-center font-handwritten px-4">
            Imagen no disponible
          </p>
        </div>
      )}
    </div>
  );
}

interface PostCarouselImageProps {
  src: string;
  alt: string;
  index: number;
  isVisible?: boolean;
}

/**
 * Component that standardizes carousel image rendering and preloading
 */
export function PostCarouselImage({
  src,
  alt,
  index,
  isVisible = false
}: PostCarouselImageProps) {
  return (
    <PostImage
      src={src}
      alt={alt}
      className="w-full h-full"
      fill
      priority={index === 0 || isVisible}
    />
  );
}

interface PostPreviewImageProps {
  src: string;
  alt: string;
  slug: string;
}

/**
 * Component specifically for post preview images with standardized styling
 */
export function PostPreviewImage({
  src,
  alt,
  slug
}: PostPreviewImageProps) {
  return (
    <PostImage
      src={src}
      alt={alt}
      className="w-full h-full aspect-[16/9]"
      fill
      priority
    />
  );
}

interface PostImageCheckerProps {
  paths: string[];
  slug: string;
}

/**
 * Debug component to check if images exist in development
 * Only for use in development environments
 */
export function PostImageChecker({ paths, slug }: PostImageCheckerProps) {
  // Only render in development
  if (process.env.NODE_ENV !== 'development') return null;
  
  return (
    <div className="fixed bottom-0 right-0 bg-white p-2 z-50 text-xs border border-gray-300 shadow-lg max-w-xs overflow-auto max-h-60">
      <h4 className="font-bold mb-1">Image Checker: {slug}</h4>
      <ul className="space-y-1">
        {paths.map((path, i) => (
          <li key={i} className="flex items-center">
            <span className="w-4 h-4 inline-block mr-1 text-center">{i+1}.</span>
            <span className="truncate">{path}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 