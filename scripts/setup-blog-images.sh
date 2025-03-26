#!/bin/bash

# Crear directorios necesarios
mkdir -p public/images/blog/carousel

# Lista de nombres de imágenes principales
declare -a main_images=(
  "primer-encuentro"
  "aventuras"
  "momentos"
  "lugares"
  "risas"
  "suenos"
  "tradiciones"
  "desafios"
  "crecimiento"
  "celebraciones"
  "viajes"
  "proyectos"
  "amor-palabras"
)

# Crear archivos de placeholder para imágenes principales
for img in "${main_images[@]}"
do
  convert -size 800x450 xc:#F5EEE6 -gravity center -pointsize 40 -fill "#6B563A" -annotate 0 "$img" "public/images/blog/$img.jpg"
done

# Crear archivos de placeholder para imágenes de carrusel
for i in {1..13}
do
  for j in {1..3}
  do
    convert -size 800x450 xc:#F5EEE6 -gravity center -pointsize 40 -fill "#6B563A" -annotate 0 "Carousel $i - Image $j" "public/images/blog/carousel/carousel-$i-$j.jpg"
  done
done

echo "Estructura de imágenes del blog creada con éxito" 