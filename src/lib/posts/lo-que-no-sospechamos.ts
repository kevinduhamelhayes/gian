import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'lo-que-no-sospechamos';

// Define post data
export const loQueNoSospechamos: LocalPost = {
  id: generateId(),
  title: "Lo que no sospechamos",
  slug: SLUG,
  description: "Descubriendo sorpresas en nuestro camino juntos.",
  content: `
# Lo que no sospechamos

Cuando comenzamos este viaje juntos, nunca imaginamos todas las sorpresas que el camino nos tenía preparadas. Hay tanto en nuestra relación que jamás habríamos podido anticipar.

No sospechábamos que seríamos capaces de crecer tanto, de superar tantos obstáculos, de construir tantos recuerdos hermosos. No imaginábamos que el amor podía transformarse y fortalecerse de tantas maneras diferentes.

Cada día descubrimos algo nuevo el uno del otro, algo que no sospechábamos y que nos hace enamorarnos un poco más. Y esa es quizás la mayor belleza de nuestra historia: que sigue sorprendiéndonos, incluso después de todo este tiempo.
  `,
  publishedAt: new Date("2023-08-15").toISOString(),
  updatedAt: new Date("2023-08-15").toISOString(),
  image: getPostImagePath(SLUG, 'carousel1-1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, 'carousel1-1.jpg'),
    getPostImagePath(SLUG, 'primer-encuentro-1.jpg'),
    getPostImagePath(SLUG, 'primer-encuentro-2.jpg')
  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "19", name: "descubrimientos" }
  ],
  featured: true
}; 