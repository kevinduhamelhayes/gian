import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'lo-que-no-tiene-palabras';

// Define post data
export const loQueNoTienePalabras: LocalPost = {
  id: generateId(),
  title: "Lo que no tiene palabras",
  slug: SLUG,
  description: "Esos sentimientos tan profundos que las palabras no logran capturar.",
  content: `
# Lo que no tiene palabras

Hay emociones tan profundas, tan intensas, que ningún idioma del mundo tiene palabras suficientes para describirlas. Eso es lo que siento por ti: un amor que trasciende el lenguaje, que se siente en cada latido y en cada respiración.

A veces, un simple cruce de miradas, un abrazo en silencio o el roce de nuestras manos dice más que mil palabras. En esos momentos de conexión pura, entiendo que lo más importante de nuestra relación no necesita ser dicho, porque se siente.

Este sentimiento indescriptible es el tesoro más valioso que compartimos.
  `,
  publishedAt: new Date("2025-03-16").toISOString(),
  updatedAt: new Date("2025-03-16").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '2.jpg')
  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "13", name: "sentimientos" }
  ],
  featured: true
}; 