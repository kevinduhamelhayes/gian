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

Ninguno de mis mensajes sera escrito con inteligencia artificial sere yo detras de cada palabra. asi que paciencia puede que no se me entienda lo que quiero decir. este es el primer post en orden cronologico.

Vos sabes y te lo dije mas de una vez nunca pense que realmente saldriamos juntos, te vi timida la hermana de cande jajaja

te saque a bailar un par de veces siempre rebotando pero mas alla de eso no pegabamos onda no nos entendiamos obviamente yo chocaba... no nos entendiamos bailando hasta este dia creo yo que dije epaaaaaaaaaaa

y te empese a ver distinto... admito que entre a tu perfil mire y dije tiene cara de menor de edad jajaja
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