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

Y llegó el día que me diste la oportunidad. Dos personas tan distintas, de dos formas de vida tan diferentes.

Te juro, me pareció tan chocante algunas cosas de tu vida, cómo entendías todo a tu manera, y yo venía a irrumpir con mis maneras de entender el mundo. Pero no nos adelantemos.

Este día me diste una oportunidad: tomamos mates, hablamos de la vida y me llevé ese primer beso... Quedé pensando: 'Esta piba no me ve nunca más', jajaja. El tipo ni fe se tenía, pero la verdad, un poco pasó esto.

Tu forma de hablar coincidía en valores. Solo una foto me quedó de ese día, y me encanta.

Ese día marcó el inicio de nuestra historia.
  `,
  publishedAt: new Date("2023-11-25").toISOString(),
  updatedAt: new Date("2023-11-25").toISOString(),
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