"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { validateImage } from "@/lib/image-utils";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

/**
 * Props for the BlogCarousel component
 * @property {string[]} images - Array of image URLs to display in the carousel
 * @property {string[]} altTexts - Optional array of alt texts for each image
 * @property {boolean} autoplay - Whether the carousel should automatically rotate (default: true)
 * @property {number} autoplayInterval - Interval in milliseconds between slides (default: 5000)
 */
interface BlogCarouselProps {
  images: string[];
  altTexts?: string[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

/**
 * A responsive carousel component for displaying blog post images
 * Features:
 * - Automatically rotates images (can be paused on hover)
 * - Shows one image at a time on all screen sizes
 * - Handles both portrait and landscape images appropriately
 * - Provides loading states and error handling
 */
export const BlogCarousel = ({ 
  images, 
  altTexts = [],
  autoplay = true,
  autoplayInterval = 5000
}: BlogCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [imageErrors, setImageErrors] = React.useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = React.useState<Record<number, boolean>>({});
  const [isPaused, setIsPaused] = React.useState(false);
  const [imageDimensions, setImageDimensions] = React.useState<Record<number, { width: number, height: number }>>({});
  
  // Memoize validated images to prevent unnecessary recalculations
  const validatedImages = React.useMemo(
    () => images.map(img => validateImage(img)),
    [images]
  );

  // Reset image loading and error states when images change
  React.useEffect(() => {
    setImageErrors({});
    const initialLoadingState = validatedImages.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {} as Record<number, boolean>);
    setIsLoading(initialLoadingState);
  }, [validatedImages]);

  // Configure carousel and update current slide information
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  
  // Set up autoplay functionality with pause/resume capability
  React.useEffect(() => {
    if (!api || !autoplay || isPaused) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, autoplayInterval);
    
    // Clean up interval on component unmount or dependency changes
    return () => clearInterval(interval);
  }, [api, autoplay, autoplayInterval, isPaused]);

  /**
   * Handle image loading errors by marking the specific image as failed
   * This will trigger the fallback display
   */
  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  /**
   * Handle successful image loading by:
   * 1. Removing loading state
   * 2. Storing the image's natural dimensions to determine orientation
   */
  const handleImageLoad = (index: number, event: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(prev => ({ ...prev, [index]: false }));
    
    // Store image dimensions to determine if vertical or horizontal
    const img = event.target as HTMLImageElement;
    setImageDimensions(prev => ({ 
      ...prev, 
      [index]: { 
        width: img.naturalWidth, 
        height: img.naturalHeight 
      } 
    }));
  };
  
  /**
   * Determine if an image is in portrait orientation based on its natural dimensions
   * Used to apply appropriate styling for different image orientations
   */
  const isPortrait = (index: number) => {
    if (!imageDimensions[index]) return false;
    return imageDimensions[index].height > imageDimensions[index].width;
  };

  // Return null if no images are provided
  if (!images || images.length === 0) return null;

  return (
    <div 
      className="mx-auto max-w-4xl my-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel 
        setApi={setApi} 
        className="w-full" 
        opts={{ 
          loop: true,
          slidesToScroll: 1,
          align: "center"
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {validatedImages.map((src, index) => (
            <CarouselItem 
              key={`${src}-${index}`} 
              className="pl-2 md:pl-4 basis-full"
            >
              <div className="p-1">
                <Card className="border-2 border-bronze-300 shadow-lg overflow-hidden">
                  <CardContent className="p-2">
                    <div className="relative w-full h-[480px] overflow-hidden rounded-lg bg-bronze-50">
                      {imageErrors[index] ? (
                        <div className="w-full h-full flex items-center justify-center text-bronze-700">
                          <p className="text-center font-handwritten">Imagen no disponible</p>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          {isLoading[index] && (
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                              <div className="w-8 h-8 border-4 border-bronze-300 border-t-bronze-600 rounded-full animate-spin"></div>
                            </div>
                          )}
                          <Image 
                            src={src}
                            alt={altTexts[index] || `Imagen ${index + 1} del post`}
                            width={800}
                            height={600}
                            className={cn(
                              "transition-opacity duration-300",
                              isLoading[index] ? "opacity-0" : "opacity-100",
                              // Apply different object-fit based on image orientation
                              isPortrait(index) 
                                ? "object-contain max-h-[480px] max-w-full" 
                                : "object-contain h-full w-full"
                            )}
                            priority={index === 0}
                            onError={() => handleImageError(index)}
                            onLoad={(e) => handleImageLoad(index, e)}
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-bronze-100 hover:bg-bronze-200 text-bronze-900 -left-4 md:-left-5 lg:-left-6" aria-label="Imagen anterior" />
        <CarouselNext className="bg-bronze-100 hover:bg-bronze-200 text-bronze-900 -right-4 md:-right-5 lg:-right-6" aria-label="Siguiente imagen" />
      </Carousel>

      <div className="py-2 text-center text-sm text-bronze-600 font-handwritten">
        Imagen {current} de {count} {autoplay && !isPaused ? "(reproducción automática)" : ""}
      </div>
    </div>
  );
};