import { LocalPost } from '../local-posts';
import { generateClientId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'verte-feliz';

// Define post data
export const vertefeliz: LocalPost = {
  id: SLUG,
  title: "Verte Feliz",
  slug: SLUG,
  description: "Los pequeños momentos en que tu sonrisa ilumina mi mundo.",
  content: `
# Verte Feliz

¿Qué me llenaría más que verte feliz? Yo sé que querés que sea más egoísta y piense en mí y en hacerme feliz a mí, pero esto pasó y pasa. Me encantan esos pequeños momentos cotidianos en los que tu rostro se ilumina con una sonrisa, esos instantes en que tus ojos brillan de emoción. De los que nunca saco una puta foto. Jajaja.

Verte feliz en las cosas simples: unas costeletas bien condimentadas, un rico postre y un café con leche, un poco de helado, bailando...

Este post está separado del anterior, pero relacionado.

Yo te empecé a sentir especial y también a quererte ver feliz, y acá empecé a mandar algún error mío: quería hacerte feliz en lo que yo entendía por felicidad.

Por ahí, poniéndote por delante de mi bienestar y dando o tratando de dar lo que a mí me parecía que te haría feliz. Este es un error del que más adelante me arrepentiré.

Pero vamos, las risas no faltaban; la comida y el heladito, espero, tampoco.
  `,
  publishedAt: new Date("2024-02-15").toISOString(),
  updatedAt: new Date("2024-02-15").toISOString(),
  image: getPostImagePath(SLUG, '3.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '4.jpg'),
    getPostImagePath(SLUG, '5.jpg')
  ],
  // Tags corregidos para consistencia (ID de 'amor') y relevancia
  tags: [
    { id: "amor", name: "amor" },
    { id: "felicidad", name: "felicidad" },
    { id: "momentos", name: "momentos" }
  ],
  featured: true
};