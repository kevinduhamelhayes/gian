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

Nunca olvidaré ese día en que me sorprendiste de una manera tan especial. Sin previo aviso, sin que lo esperara, preparaste algo que tocó lo más profundo de mi corazón.

Las mejores cosas de la vida suelen ser inesperadas, y tú me has enseñado que el amor se nutre tanto de la rutina como de esos momentos sorpresa que rompen con lo cotidiano y nos recuerdan por qué elegimos estar juntos cada día.

Esa sorpresa no solo fue un gesto hermoso, sino un recordatorio de lo afortunada que soy de tenerte en mi vida, de compartir mis días con alguien que se toma el tiempo para pensar en pequeños detalles que hacen grande nuestro amor.
  `,
  publishedAt: new Date("2024-06-29").toISOString(),
  updatedAt: new Date("2024-06-29").toISOString(),
  image: getPostImagePath(SLUG, 'IMG_20240629_004516.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, 'IMG_20240629_004525.jpg'),
    getPostImagePath(SLUG, 'IMG_20240929_145831.jpg'),
    getPostImagePath(SLUG, 'IMG_20240929_145832.jpg'),
    getPostImagePath(SLUG, 'IMG_20240929_145833.jpg'),
    getPostImagePath(SLUG, 'IMG_20241028_142712.jpg'),
    getPostImagePath(SLUG, 'IMG_20241028_142837.jpg')
  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "18", name: "sorpresas" }
  ],
  featured: true
}; 