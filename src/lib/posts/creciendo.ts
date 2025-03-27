import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'creciendo';

// Define post data
export const creciendo: LocalPost = {
  id: generateId(),
  title: "Creciendo juntos",
  slug: SLUG,
  description: "La historia de cómo crecemos y evolucionamos juntos día a día.",
  content: `
# Creciendo juntos

Cada día que pasa, crecemos juntos un poco más. Aprendemos el uno del otro, evolucionamos como personas y fortalecemos nuestro vínculo. No se trata solo de pasar tiempo juntos, sino de madurar juntos, de apoyarnos mutuamente en nuestras metas y sueños.

El crecimiento personal no se detiene cuando estamos en una relación; al contrario, se potencia. Y es hermoso ver cómo nos transformamos y nos convertimos en mejores versiones de nosotros mismos cuando estamos el uno al lado del otro.
  `,
  publishedAt: new Date("2023-07-10").toISOString(),
  updatedAt: new Date("2023-07-10").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '4.jpg'),
    getPostImagePath(SLUG, '5.jpg'),
    getPostImagePath(SLUG, '6.jpg'),
    getPostImagePath(SLUG, '7.jpg')
  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "10", name: "crecimiento" }
  ],
  featured: true
}; 