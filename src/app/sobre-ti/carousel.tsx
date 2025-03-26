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

// Array de rutas de imágenes para el carrusel
const carouselImages = [
  "/images/sobre-ti/carousel/carousel-sobre-ti1.jpg",
  "/images/sobre-ti/carousel/carousel-sobre-ti2.jpg",
  "/images/sobre-ti/carousel/carousel-sobre-ti3.jpg",
  "/images/sobre-ti/carousel/carousel-sobre-ti4.jpg",
  "/images/sobre-ti/carousel/carousel-sobre-ti5.jpg",
];

// Componente de Carrusel con imágenes reales
export const ImageCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [imageErrors, setImageErrors] = React.useState<Record<number, boolean>>({});

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="mx-auto max-w-3xl my-8">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {carouselImages.map((src, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-2 border-bronze-300 shadow-lg">
                <CardContent className="p-2">
                  <div className="relative w-full h-[400px] rounded-lg bg-bronze-50 overflow-hidden">
                    {imageErrors[index] ? (
                      <div className="w-full h-full flex items-center justify-center text-bronze-700">
                        <p className="text-center font-handwritten">Imagen no disponible</p>
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Image 
                          src={src} 
                          alt={`Recuerdo ${index + 1}`} 
                          width={800}
                          height={600}
                          unoptimized={true}
                          className="object-contain max-h-full max-w-full"
                          priority={index === 0}
                          onError={() => handleImageError(index)}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-bronze-100 hover:bg-bronze-200 text-bronze-900" />
        <CarouselNext className="bg-bronze-100 hover:bg-bronze-200 text-bronze-900" />
      </Carousel>
      <div className="py-2 text-center text-sm text-bronze-600 font-handwritten">
        Imagen {current} de {count}
      </div>
    </div>
  );
}; 