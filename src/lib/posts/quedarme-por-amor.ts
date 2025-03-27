import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'quedarme-por-amor';

// Define post data
export const quedarmePorAmor: LocalPost = {
  id: generateId(),
  title: "Quedarme por amor",
  slug: SLUG,
  description: "Cuando decidí que el amor vale cada sacrificio.",
  content: `
# Quedarme por amor

A veces, la vida nos presenta encrucijadas donde debemos elegir entre diferentes caminos. Había muchas razones para irme, pero solo una para quedarme: el amor que sentía por ti.

Esa decisión que tomé, de permanecer a tu lado cuando todo parecía indicar que debía seguir otro rumbo, ha sido una de las más significativas de mi vida. Porque elegir quedarse por amor no es señal de debilidad, sino de reconocer que algunas personas valen cada sacrificio.

Hoy, mirando atrás, sé que tomé la decisión correcta. Cada día a tu lado me reafirma que el amor verdadero merece todas las segundas oportunidades, todos los esfuerzos y todas las esperas.
  `,
  publishedAt: new Date("2024-12-01").toISOString(),
  updatedAt: new Date("2024-12-01").toISOString(),
  image: getPostImagePath(SLUG, 'IMG_20241201_192033.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, 'IMG_20241201_192033.jpg')
  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "17", name: "decisiones" }
  ],
  featured: true
}; 