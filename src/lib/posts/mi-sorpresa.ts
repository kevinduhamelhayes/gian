import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'mi-sorpresa';

// Define post data
export const miSorpresa: LocalPost = {
  id: generateId(),
  title: "Mi sorpresa",
  slug: SLUG,
  description: "Cuando el amor se manifiesta de la forma más inesperada.",
  content: `
# Mi sorpresa

me la tome ligth y dije esto no va a ir para ningun lado 

y mierda que estaba equivocado me resultaste cautivante me empezo a gustar mas de lo que pensaba

me entendias o tratabas de hacerlo, yo me estaba yendo acarreando con algunas cosas del año anterior y temas familiares mi abue se cayo y las cosas se complicaban pero a su vez un amor que se asomaba.

desgarraba tus miedos me empezaba a sentir tuyo y vos miradas esas ganas de darte lo que no pedias de ser quien yo no era de crecer pero sin herramientas en ese momento pero por sobre todo de hacerte feliz. 

por que el amor hace sentir la felicidad del otro propia... no lo se

esto para mi que pensaba irme fue una sorpresa y me llevo a errores que estan en otras secciones pero nos llevo a cosas hermosas de muchas no hay fotos por que al vivir uno no saca la camara... fui muy feliz en tus brazos y vos en los mios.

por aca salieron los primeros "te amo"

y la entrega se fue acrecentando las barreras se nos caian a pedazos...

  `,
  publishedAt: new Date("2024-06-29").toISOString(),
  updatedAt: new Date("2024-06-29").toISOString(),
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