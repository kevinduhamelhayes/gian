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

Ninguno de mis mensajes será escrito con inteligencia artificial, seré yo detrás de cada palabra. Así que paciencia, puede que no se me entienda lo que quiero decir. Este es el primer post en orden cronológico.

Vos sabés, y te lo dije más de una vez, nunca pensé que realmente saldríamos juntos. Te vi tímida, la hermana de Cande, jajaja.

Te saqué a bailar un par de veces, siempre rebotando, pero más allá de eso no pegábamos onda, no nos entendíamos. Obviamente, yo chocaba... No nos entendíamos bailando hasta este día, creo yo, que dije: '¡Epaaaaaaa!'

Y te empecé a ver distinto... Admito que entré a tu perfil, miré y dije: 'Tiene cara de menor de edad', jajaja.
  `,
  publishedAt: new Date("2023-08-15").toISOString(),
  updatedAt: new Date("2023-08-15").toISOString(),
  image: getPostImagePath(SLUG, '1.jpeg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '2.jpeg'),
    getPostImagePath(SLUG, '3.jpeg'),
    getPostImagePath(SLUG, '4.jpeg'),
    getPostImagePath(SLUG, '5.jpeg')
    
  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "19", name: "descubrimientos" }
  ],
  featured: true
};