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

// Array de rutas de imágenes para el carrusel (seleccionando 5 imágenes)
const carouselImages = [
  "/images/sobre-mi/carousel/IMG_20250110_193709.jpg",
  "/images/sobre-mi/carousel/IMG-20250201-WA0007.jpg",
  "/images/sobre-mi/carousel/IMG-20250201-WA0008.jpg",
  "/images/sobre-mi/carousel/IMG-20250314-WA0064.jpeg",
  "/images/sobre-mi/carousel/SAVE_20250117_242050.jpg",
  "/images/sobre-mi/carousel/SAVE_20250117_242105.jpg"
];

// Componente de Carrusel con imágenes reales
export const ImageCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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

  return (
    <div className="mx-auto max-w-2xl my-8">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {carouselImages.map((src, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-1">
                  <div className="relative w-full h-full">
                    <Image 
                      src={src} 
                      alt={`Recuerdo ${index + 1}`} 
                      fill 
                      className="object-cover rounded-lg"
                      priority={index === 0}
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Imagen {current} de {count}
      </div>
    </div>
  );
}; 