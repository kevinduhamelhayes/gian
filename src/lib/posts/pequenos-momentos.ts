import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'los-pequenos-momentos';

// Define post data
export const pequenosMomentos: LocalPost = {
  id: generateId(),
  title: "Los pequeños momentos",
  slug: SLUG,
  description: "Esos instantes cotidianos que hacen especial nuestra relación.",
  content: `
# Los pequeños momentos

Son los pequeños momentos los que construyen una historia de amor. Las miradas cómplices, los mensajes inesperados, los abrazos sorpresa... cada detalle suma a nuestra historia.

He aprendido a valorar cada instante contigo, desde las mañanas tranquilas hasta las noches de conversaciones profundas.
  `,
  publishedAt: new Date("2023-02-15").toISOString(),
  updatedAt: new Date("2023-02-15").toISOString(),
  image: getPostImagePath('creciendo', '4.jpg'),
  carouselImages: [
    getPostImagePath('creciendo', '1.jpg'),
    getPostImagePath('creciendo', '2.jpg'),
    getPostImagePath('creciendo', '3.jpg'),
    getPostImagePath('creciendo', '4.jpg'),
    getPostImagePath('creciendo', '5.jpg'),
    getPostImagePath('creciendo', '6.jpg'),
    getPostImagePath('creciendo', '7.jpg')
  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "4", name: "cotidiano" }
  ],
  featured: true
}; 