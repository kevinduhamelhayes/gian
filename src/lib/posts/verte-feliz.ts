import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath, getNumberedImagePaths } from '../image-utils';

// Slug for this post
const SLUG = 'verte-feliz';

// Define post data
export const vertefeliz: LocalPost = {
  id: generateId(),
  title: "Verte Feliz",
  slug: SLUG,
  description: "Los pequeños momentos en que tu sonrisa ilumina mi mundo.",
  content: `
# Verte Feliz

No hay nada en este mundo que me llene más que verte feliz. Esos pequeños momentos cotidianos en los que tu rostro se ilumina con una sonrisa, esos instantes en que tus ojos brillan de emoción.

Verte feliz en las cosas simples, como cuando disfrutas un café por la mañana, cuando te ríes de algo tonto que dije, cuando te entusiasmas por algún plan que estamos haciendo juntos...

Me encanta verte feliz cuando:
- Bailamos juntos, aunque no siempre coordinemos los pasos
- Probamos algo nuevo y te gusta
- Te sorprendo con algún detalle pequeño que no esperabas
- Logramos superar algún desafío juntos
- Simplemente estamos compartiendo un momento tranquilo

Tu felicidad es contagiosa, y me hace sentir que todo en el mundo está bien cuando te veo sonreír. Por eso, uno de mis propósitos diarios es buscar pequeñas formas de hacerte sonreír, de iluminar tu día aunque sea un poco.

Y lo más hermoso es que tu felicidad parece ser más grande cuando estamos juntos, cuando compartimos esos momentos que, aunque simples, se vuelven especiales simplemente porque nos tenemos el uno al otro.

Verte feliz es mi mayor alegría. Tu sonrisa es el regalo más hermoso que puedo recibir cada día.
  `,
  publishedAt: new Date("2023-05-20").toISOString(),
  updatedAt: new Date("2023-05-20").toISOString(),
  image: getPostImagePath(SLUG, '3.jpg'), // Imagen principal
  carouselImages: [
    getPostImagePath(SLUG, '1.jpeg'),
    getPostImagePath(SLUG, '2.jpeg'),
    getPostImagePath(SLUG, '4.jpeg'),
    getPostImagePath(SLUG, '5.jpeg')
    
  ],
  tags: [
    { id: generateId(), name: "amor" },
    { id: generateId(), name: "felicidad" },
    { id: generateId(), name: "momentos" }
  ],
  featured: true
}; 