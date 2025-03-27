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

Aún recuerdo ese día como si fuera ayer. El destino, o quizás la casualidad, nos puso en el mismo lugar en el momento perfecto. Tu sonrisa iluminó la habitación y supe que algo especial estaba por comenzar.

Nuestras miradas se cruzaron y el tiempo pareció detenerse. En ese instante, aunque no lo sabía conscientemente, mi vida cambió para siempre. Tu forma de hablar, tu risa contagiosa, tu manera de ver el mundo... todo en ti me cautivó desde el primer momento.

Ese día marcó el inicio de nuestra historia, una historia que continúa escribiéndose con cada momento que compartimos juntos.
  `,
  publishedAt: new Date("2023-01-15").toISOString(),
  updatedAt: new Date("2023-01-15").toISOString(),
  image: getPostImagePath(SLUG, 'carousel1-1.jpg'),
  carouselImages: [
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg')
  ],
  tags: [
    { id: "1", name: "recuerdos" },
    { id: "2", name: "amor" }
  ],
  featured: true
}; 