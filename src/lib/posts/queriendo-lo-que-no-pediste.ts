import { LocalPost } from '../local-posts';
import { generateClientId } from '../utils/id-utils';
import { getPostImagePath, findFirstExistingImage } from '../image-utils';

// Slug for this post
const SLUG = 'queriendo-lo-que-no-pediste';

// Define post data
export const queriendoLoQueNoPediste: LocalPost = {
  id: SLUG,
  title: "Queriendo lo que no pediste",
  slug: SLUG,
  description: "A veces, la vida nos regala lo que necesitábamos, no lo que buscábamos.",
  content: `
# Queriendo lo que no pediste

A veces, la vida nos sorprende dándonos algo completamente diferente a lo que habíamos planeado. Nunca imaginé que encontraría en ti todo lo que no sabía que necesitaba. No eras lo que buscaba, eras mucho más.

Pensaba que tenía claras mis prioridades y mis deseos, pero tu aparición en mi vida me hizo replantearme todo. Me enseñaste que a veces lo mejor no es lo que pedimos, sino lo que la vida decide ponernos en el camino.

Hoy, agradezco que el destino me haya dado lo que no pedí, porque resultó ser exactamente lo que mi corazón necesitaba.
  `,
  publishedAt: new Date("2024-11-28").toISOString(),
  updatedAt: new Date("2024-11-28").toISOString(),
  image: findFirstExistingImage(SLUG), // Preview robusta
  carouselImages: [
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '4.jpg'),
    getPostImagePath(SLUG, '5.jpg'),
    getPostImagePath(SLUG, '6.jpg'),
    getPostImagePath(SLUG, '7.jpg'),
    
  ],
  tags: [
    { id: "amor", name: "amor" },
    { id: "destino", name: "destino" }
  ],
  featured: true
}; 