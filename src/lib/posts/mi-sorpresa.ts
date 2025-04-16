import { LocalPost } from '../local-posts';
import { generateClientId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'mi-sorpresa';

// Define post data
export const miSorpresa: LocalPost = {
  id: generateClientId(),
  title: "Mi sorpresa",
  slug: SLUG,
  description: "Cuando el amor se manifiesta de la forma más inesperada.",
  content: `
# Mi sorpresa

Me la tomé light y dije: 'Esto no va a ir para ningún lado'.

Y mierda, qué equivocado estaba. Me resultaste cautivante, me empezó a gustar más de lo que pensaba.

Me entendías o tratabas de hacerlo. Yo me estaba yendo, acarreando con algunas cosas del año anterior y temas familiares (mi abue se cayó y las cosas se complicaban), pero a su vez, un amor que se asomaba.

Desgarraba tus miedos, me empezaba a sentir tuyo, y vos mirabas esas ganas de darte lo que no pedías; de ser quien yo no era, de crecer pero sin herramientas en ese momento, pero por sobre todo, de hacerte feliz.

¿Por qué el amor hace sentir la felicidad del otro propia?... No lo sé.

Esto, para mí que pensaba irme, fue una sorpresa y me llevó a errores que están en otras secciones, pero nos llevó a cosas hermosas. De muchas no hay fotos porque, al vivir, uno no saca la cámara... Fui muy feliz en tus brazos y vos en los míos.

Por acá salieron los primeros 'te amo'.

Y la entrega se fue acrecentando, las barreras se nos caían a pedazos...
  `,
  publishedAt: new Date("2024-01-05").toISOString(),
  updatedAt: new Date("2024-01-05").toISOString(),
  image: getPostImagePath(SLUG, '4.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '5.jpg'),
  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "18", name: "sorpresas" }
  ],
  featured: true
};