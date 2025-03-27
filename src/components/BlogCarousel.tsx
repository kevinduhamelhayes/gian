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

interface BlogCarouselProps {
  images: string[];
  altTexts?: string[]; // Prop para textos alternativos
}

export const BlogCarousel = ({ images, altTexts = [] }: BlogCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [imageErrors, setImageErrors] = React.useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = React.useState<Record<number, boolean>>({});

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

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index: number) => {
    setIsLoading(prev => ({ ...prev, [index]: false }));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="mx-auto max-w-4xl my-8">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {validatedImages.map((src, index) => (
            <CarouselItem key={`${src}-${index}`} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="border-2 border-bronze-300 shadow-lg overflow-hidden">
                  <CardContent className="p-2">
                    <div className="relative w-full h-[320px] overflow-hidden rounded-lg bg-bronze-50">
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
                            className="object-cover h-full w-full"
                            priority={index === 0}
                            onError={() => handleImageError(index)}
                            onLoad={() => handleImageLoad(index)}
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
        <CarouselPrevious className="bg-bronze-100 hover:bg-bronze-200 text-bronze-900 -left-4" aria-label="Imagen anterior" />
        <CarouselNext className="bg-bronze-100 hover:bg-bronze-200 text-bronze-900 -right-4" aria-label="Siguiente imagen" />
      </Carousel>
      <div className="py-2 text-center text-sm text-bronze-600 font-handwritten">
        Imagen {current} de {count}
      </div>
    </div>
  );
};