import { LocalPost } from '../local-posts';
import { generateClientId } from '../utils/id-utils';
import { getPostImagePath, findFirstExistingImage } from '../image-utils';

// Slug for this post
const SLUG = 'lo-que-no-sospechamos';

// Define post data
export const loQueNoSospechamos: LocalPost = {
  id: SLUG,
  title: "Lo que no sospechamos",
  slug: SLUG,
  description: "Descubriendo sorpresas en nuestro camino juntos.",
  content: `
# Lo que no sospechamos

Ninguno de mis mensajes será escrito con inteligencia artificial, seré yo detrás de cada palabra. Así que paciencia, puede que no se me entienda lo que quiero decir. Este es el primer post en orden cronológico.

Vos sabés, y te lo dije más de una vez, nunca pensé que realmente saldríamos juntos. Te vi tímida, la hermana de Cande, jajaja. Pasamos de eso a lo que me gustas! lo que te deseo cada centimetro de tu cuerpo. lo que me gustas lo que me despierta tu piel 🤤🤤🤤

Te saqué a bailar un par de veces, siempre rebotando, pero más allá de eso no pegábamos onda, no nos entendíamos. Obviamente, yo chocaba... No nos entendíamos bailando hasta este día, creo yo, que dije: '¡Epaaaaaaa!' --- vengo del futuro, lo que aprendimos a entendernos bailando juntos por estos momentos no lo sospechabamos bailar con los ojos vendados... 🤤🤤🤤

Y te empecé a ver distinto... Admito que entré a tu perfil, miré y dije: 'Tiene cara de menor de edad', jajaja.
  `,
  publishedAt: new Date("2023-10-20").toISOString(),
  updatedAt: new Date("2023-10-20").toISOString(),
  image: findFirstExistingImage(SLUG), // Preview robusta
  carouselImages: [
    getPostImagePath(SLUG, '2.jpeg'),
    getPostImagePath(SLUG, '3.jpeg'),
    getPostImagePath(SLUG, '4.jpeg'),
    getPostImagePath(SLUG, '5.jpeg')
    
  ],
  tags: [
    { id: "amor", name: "amor" },
    { id: "descubrimientos", name: "descubrimientos" }
  ],
  featured: true
};