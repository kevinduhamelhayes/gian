import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'nuestro-primer-viaje';

// Define post data
export const nuestroPrimerViaje: LocalPost = {
  id: generateId(),
  title: "Nuestro primer viaje juntos",
  slug: SLUG,
  description: "Recuerdos inolvidables de nuestra primera aventura viajando juntos.",
  content: `
# Nuestro primer viaje juntos

Viajar juntos por primera vez fue una experiencia que nos permitió conocernos en un contexto completamente nuevo. Lejos de la rutina diaria, descubrimos nuevas facetas el uno del otro y creamos recuerdos que atesoraremos para siempre.

Desde la emoción de planear el itinerario hasta las pequeñas aventuras inesperadas que vivimos, cada momento de este viaje se convirtió en una pieza importante de nuestra historia de amor.

Los paisajes que contemplamos juntos, las comidas que compartimos, las conversaciones bajo cielos nuevos... todo se grabó en nuestros corazones como el inicio de muchas más aventuras por venir.
  `,
  publishedAt: new Date("2024-07-12").toISOString(),
  updatedAt: new Date("2024-07-12").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '4.jpg'),
    getPostImagePath(SLUG, '5.jpg'),
  ],
  tags: [
    { id: "1", name: "recuerdos" },
    { id: "5", name: "lugares" },
    { id: "11", name: "viajes" }
  ],
  featured: true
}; 