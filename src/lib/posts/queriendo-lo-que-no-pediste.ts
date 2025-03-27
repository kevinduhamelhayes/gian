import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'queriendo-lo-que-no-pediste';

// Define post data
export const queriendoLoQueNoPediste: LocalPost = {
  id: generateId(),
  title: "Queriendo lo que no pediste",
  slug: SLUG,
  description: "A veces, la vida nos regala lo que necesitábamos, no lo que buscábamos.",
  content: `
# Queriendo lo que no pediste

A veces, la vida nos sorprende dándonos algo completamente diferente a lo que habíamos planeado. Nunca imaginé que encontraría en ti todo lo que no sabía que necesitaba. No eras lo que buscaba, eras mucho más.

Pensaba que tenía claras mis prioridades y mis deseos, pero tu aparición en mi vida me hizo replantearme todo. Me enseñaste que a veces lo mejor no es lo que pedimos, sino lo que la vida decide ponernos en el camino.

Hoy, agradezco que el destino me haya dado lo que no pedí, porque resultó ser exactamente lo que mi corazón necesitaba.
  `,
  publishedAt: new Date("2025-03-10").toISOString(),
  updatedAt: new Date("2025-03-10").toISOString(),
  image: getPostImagePath(SLUG, 'IMG-20250310-WA0044.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, 'IMG-20250310-WA0044.jpg')
  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "16", name: "destino" }
  ],
  featured: true
}; 