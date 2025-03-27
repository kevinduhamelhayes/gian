import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'nuestras-risas-compartidas';

// Define post data
export const risasCompartidas: LocalPost = {
  id: generateId(),
  title: "Nuestras risas compartidas",
  slug: SLUG,
  description: "Los momentos de alegría que llenan nuestra vida juntos.",
  content: `
# Nuestras risas compartidas

Tu risa es mi sonido favorito. Cada vez que escucho tu carcajada, mi corazón se llena de alegría. Hemos compartido tantos momentos divertidos, tantas bromas internas, tantas situaciones que solo nosotros entendemos...

Esos momentos de risa son los que hacen nuestra relación única y especial.
  `,
  publishedAt: new Date("2023-03-15").toISOString(),
  updatedAt: new Date("2023-03-15").toISOString(),
  image: "/images/blog/risas.jpg", // Nota: Esta imagen podría no existir, se usará el fallback
  carouselImages: [
    getPostImagePath('mi-sorpresa', 'IMG_20240629_004525.jpg'),
    getPostImagePath('mi-sorpresa', 'IMG_20240929_145831.jpg'),
    getPostImagePath('mi-sorpresa', 'IMG_20240929_145832.jpg')
  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "6", name: "felicidad" }
  ],
  featured: true
}; 