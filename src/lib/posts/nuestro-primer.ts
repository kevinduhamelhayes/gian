import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'nuestro-primer';

// Define post data
export const nuestroPrimer: LocalPost = {
  id: generateId(),
  title: "Nuestros primeros momentos",
  slug: SLUG,
  description: "Recordando los primeros instantes que compartimos juntos.",
  content: `
# Nuestros primeros momentos

Los inicios siempre tienen un sabor especial, una magia única que permanece en la memoria. Nuestros primeros momentos juntos están llenos de esas pequeñas chispas que encendieron lo que hoy es nuestra historia de amor.

La primera vez que tomamos un café juntos, nuestra primera caminata, la primera vez que nos reímos hasta que nos dolía el estómago... cada uno de esos instantes fue como una semilla que plantamos y que ha ido creciendo con el tiempo.

Recordar esos primeros momentos me llena de gratitud por todo lo que hemos construido desde entonces.
  `,
  publishedAt: new Date("2023-05-20").toISOString(),
  updatedAt: new Date("2023-05-20").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '4.jpg')
  ],
  tags: [
    { id: "1", name: "recuerdos" },
    { id: "2", name: "amor" },
    { id: "12", name: "inicios" }
  ],
  featured: true
}; 