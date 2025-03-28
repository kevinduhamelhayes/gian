import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'diciembre-y-disfrutar';

// Define post data
export const diciembreYDisfrutar: LocalPost = {
  id: generateId(),
  title: "Diciembre y disfrutar",
  slug: SLUG,
  description: "La magia de celebrar juntos la época más especial del año.",
  content: `
# Diciembre y disfrutar

Diciembre siempre trae consigo una atmósfera especial, pero vivirlo a tu lado lo hace aún más mágico. Las luces navideñas que iluminan nuestros rostros, el aroma de las galletas recién horneadas, las canciones que tarareamos juntos... todo adquiere un significado más profundo cuando lo compartimos.

Esta época del año nos invita a hacer un pausa, a reflexionar sobre lo vivido y a disfrutar de los pequeños momentos. Y no hay nadie con quien preferiría compartir esos instantes que contigo.

Diciembre nos recuerda que, entre todos los regalos posibles, el tiempo juntos es el más valioso. Y por eso, cada año, me propongo disfrutar de cada segundo de este mes especial a tu lado.
  `,
  publishedAt: new Date("2024-12-05").toISOString(),
  updatedAt: new Date("2024-12-05").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '4.jpg'),
    getPostImagePath(SLUG, '5.jpg'),
    getPostImagePath(SLUG, '6.jpg'),
    getPostImagePath(SLUG, '7.jpg'),
    getPostImagePath(SLUG, '8.jpg'),
    getPostImagePath(SLUG, '9.jpg'),
    getPostImagePath(SLUG, '10.jpg'),
    getPostImagePath(SLUG, '11.jpg'),
    getPostImagePath(SLUG, '12.jpg'),
    getPostImagePath(SLUG, '13.jpg'),
    getPostImagePath(SLUG, '14.jpg'),
    getPostImagePath(SLUG, '15.jpg'),
    getPostImagePath(SLUG, '16.jpg'),
    getPostImagePath(SLUG, '17.jpg'),
    getPostImagePath(SLUG, '18.jpg'),
    getPostImagePath(SLUG, '19.jpg'),
    getPostImagePath(SLUG, '20.jpg'),
    getPostImagePath(SLUG, '21.jpg'),
    getPostImagePath(SLUG, '22.jpg'),
  ],
  tags: [
    { id: "20", name: "celebraciones" },
    { id: "21", name: "navidad" }
  ],
  featured: true
}; 