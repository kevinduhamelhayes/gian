import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'el-dia-que-te-conoci';

// Define post data
export const elDiaQueTeConoci: LocalPost = {
  id: generateId(),
  title: "El día que te conocí",
  slug: SLUG,
  description: "La historia de nuestro primer encuentro y cómo cambió todo.",
  content: `
# El día que te conocí

Y llego el dia que me diste la oportunidad, dos personas tan distintas de dos formas de vida tan diferentes.

te juro me parecio tan chocante algunas cosas de tu vida como entendias todo a tu manera y yo venia a irrumpir con mis maneras de entender el mundo. pero no nos adelantemos.

este dia me diste una oportunidad tomamos mates hablamos de la vida y me lleve ese primer beso... quede pensando esta piba no me ve nunca mas jajaja el tipo ni fe se tenia pero la verdad un poco paso esto

 Tu forma de hablar coincidia en valores solo una foto me quedo de ese dia y me encanta.

Ese día marcó el inicio de nuestra historia
  `,
  publishedAt: new Date("2023-01-15").toISOString(),
  updatedAt: new Date("2023-01-15").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'),
  carouselImages: [
    getPostImagePath(SLUG, '1.jpg')
  ],
  tags: [
    { id: "1", name: "recuerdos" },
    { id: "2", name: "amor" }
  ],
  featured: true
}; 