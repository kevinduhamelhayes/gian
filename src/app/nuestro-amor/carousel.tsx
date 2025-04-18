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

// Array de rutas de imágenes para el primer carrusel (Nosotros)
const carouselImagesNosotros = [
  "/images/nuestro-amor/carousel/1.jpg",
  "/images/nuestro-amor/carousel/2.jpg",
  "/images/nuestro-amor/carousel/3.jpg",
  "/images/nuestro-amor/carousel/4.jpg",
  "/images/nuestro-amor/carousel/5.jpg",
  "/images/nuestro-amor/carousel/6.jpg",
  "/images/nuestro-amor/carousel/7.jpg",
];

// Array de rutas de imágenes para el segundo carrusel (Momentos)
const carouselImagesMomentos = [
  "/images/nuestro-amor/momentos/1.jpg",
  "/images/nuestro-amor/momentos/2.jpg",
  "/images/nuestro-amor/momentos/3.jpg",
  "/images/nuestro-amor/momentos/4.jpg",
  "/images/nuestro-amor/momentos/5.jpg",
  "/images/nuestro-amor/momentos/6.jpg",
];

// Componente de Carrusel con imágenes para la sección "Nosotros"
export const NosotrosCarousel = () => {  
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
    <div className="mx-auto max-w-4xl my-8">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {carouselImagesNosotros.map((src, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="border-2 border-bronze-300 shadow-lg overflow-hidden">
                  <CardContent className="p-2">
                    <div className="relative w-full h-[180px] sm:h-[320px] overflow-hidden rounded-lg bg-bronze-50">
                      {imageErrors[index] ? (
                        <div className="w-full h-full flex items-center justify-center text-bronze-700">
                          <p className="text-center font-handwritten">Imagen no disponible</p>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Image 
                            src={src} 
                            alt={`Nosotros ${index + 1}`} 
                            width={800}
                            height={600}
                            className="object-cover h-full w-full"
                            priority={index === 0}
                            onError={() => handleImageError(index)}
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
        <CarouselPrevious className="bg-bronze-100 hover:bg-bronze-200 text-bronze-900 -left-4" />
        <CarouselNext className="bg-bronze-100 hover:bg-bronze-200 text-bronze-900 -right-4" />
      </Carousel>
      <div className="py-2 text-center text-sm text-bronze-600 font-handwritten">
        Imagen {current} de {count}
      </div>
    </div>
  );
};

// Componente de Carrusel con imágenes para la sección "Momentos"
export const MomentosCarousel = () => {  
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
    <div className="mx-auto max-w-4xl my-8">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {carouselImagesMomentos.map((src, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="border-2 border-bronze-300 shadow-lg overflow-hidden">
                  <CardContent className="p-2">
                    <div className="relative w-full h-[180px] sm:h-[320px] overflow-hidden rounded-lg bg-bronze-50">
                      {imageErrors[index] ? (
                        <div className="w-full h-full flex items-center justify-center text-bronze-700">
                          <p className="text-center font-handwritten">Imagen no disponible</p>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Image 
                            src={src} 
                            alt={`Momento ${index + 1}`} 
                            width={800}
                            height={600}
                            className="object-cover h-full w-full"
                            priority={index === 0}
                            onError={() => handleImageError(index)}
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
        <CarouselPrevious className="bg-bronze-100 hover:bg-bronze-200 text-bronze-900 -left-4" />
        <CarouselNext className="bg-bronze-100 hover:bg-bronze-200 text-bronze-900 -right-4" />
      </Carousel>
      <div className="py-2 text-center text-sm text-bronze-600 font-handwritten">
        Imagen {current} de {count}
      </div>
    </div>
  );
}; 