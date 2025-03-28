import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

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

Que me llenaria mas que verte feliz? yo se que queres que sea mas egoista y piense en mi y en hacerme feliz a mi pero esto paso y pasa. me encantan esos pequeños momentos cotidianos en los que tu rostro se ilumina con una sonrisa, esos instantes en que tus ojos brillan de emoción. De los que nunca saco una puta foto. jajaja

Verte feliz en las cosas simples unas costeletas bien condimentadas un rico postre y un cafe con leche. un poco de helado, bailando...

Este post esta separado del anterior pero relacionado.

yo te empece a sentir especial y tambien a quererte ver feliz y aca empece a mandar algun error mio, queria hacerte feliz en lo que yo entendia por felicidad.

por ahi poniendote por delante de mi bienestar y dando o tratando de dar lo que a mi me parecia que te haria feliz este es un error que mas adelante me arrepentire.

Pero vamos las risas no faltaban la comida y el heladito espero tampoco.
  `,
  publishedAt: new Date("2023-05-20").toISOString(),
  updatedAt: new Date("2023-05-20").toISOString(),
  image: getPostImagePath(SLUG, '3.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '4.jpg'),
    getPostImagePath(SLUG, '5.jpg')
  ],
  tags: [
    { id: "10", name: "amor" },
    { id: "11", name: "felicidad" },
    { id: "12", name: "momentos" }
  ],
  featured: true
}; 