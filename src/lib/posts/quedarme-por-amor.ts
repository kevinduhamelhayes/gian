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

No tenemos día de aniversario. Sabes porque? Se nos pasó anotar ese día porque la estábamos viviendo intensamente.

Tampoco hay fotos que lo reflejen certeramente... pero eso pasó... Amarte me dio sentido; amarte y que me ames me curó. Qué decirte.

Me daba fuerzas, alimentaba mi alma y decidí quedarme a hacerlo posible.

A generar los proyectos, a tratar de hacerte feliz, a tratar de hacer un camino para nosotros.

Yo necesitaba o quería cierta forma de camino, basado en lo que yo viví.

Por este momento no sabía cómo haría para quedarme, pero estaba dispuesto a hacer cualquier cosa, incluso atender clientes (jaja, algo que no me gusta) y veríamos en el futuro qué pasa... Pero a no adelantarme...

Te amaba cada día, y vos a mí, y yo no estaba dispuesto a renunciar a eso. Me quedé a pelear y no podía solo, así que un poco te arrastré también. Fuimos cayendo en el amor.

Los teatros, las risas, los momentos, las conversaciones, los besos, los abrazos, los momentos en que te vi sonreír.

Pero especialmente acá empezó ese no sé qué que no podemos explicar, que aún vive y espero que siga así.

Aunque ya no sé qué pasará con nosotros...
  `,
  publishedAt: new Date("2024-09-30").toISOString(),
  updatedAt: new Date("2024-09-30").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '4.jpg'),
    getPostImagePath(SLUG, '5.jpg'),
    
  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "17", name: "decisiones" }
  ],
  featured: true
};