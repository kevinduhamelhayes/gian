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

interface BlogCarouselProps {
  images: string[];
  altTexts?: string[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

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
  
  // Check if screen is large enough to show two slides
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  // Memoizar imágenes validadas
  const validatedImages = React.useMemo(
    () => images.map(img => validateImage(img)),
    [images]
  );

  // Resetear estados al cambiar imágenes
  React.useEffect(() => {
    setImageErrors({});
    const initialLoadingState = validatedImages.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {} as Record<number, boolean>);
    setIsLoading(initialLoadingState);
  }, [validatedImages]);

  // Configurar carrusel
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  
  // Handle autoplay functionality
  React.useEffect(() => {
    if (!api || !autoplay || isPaused) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, autoplayInterval);
    
    return () => clearInterval(interval);
  }, [api, autoplay, autoplayInterval, isPaused]);

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

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
  
  // Function to determine if an image is portrait orientation
  const isPortrait = (index: number) => {
    if (!imageDimensions[index]) return false;
    return imageDimensions[index].height > imageDimensions[index].width;
  };

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="mx-auto max-w-6xl my-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel 
        setApi={setApi} 
        className="w-full" 
        opts={{ 
          loop: true,
          slidesToScroll: isLargeScreen ? 2 : 1,
          align: "start"
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {validatedImages.map((src, index) => (
            <CarouselItem 
              key={`${src}-${index}`} 
              className={cn(
                "pl-2 md:pl-4",
                isLargeScreen ? "basis-1/2" : "basis-full"
              )}
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
                              isPortrait(index) 
                                ? "object-contain max-h-[480px] max-w-full" 
                                : "object-cover h-full w-full"
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