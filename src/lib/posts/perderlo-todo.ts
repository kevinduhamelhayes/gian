import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'perderlo-todo';

// Define post data
export const perderloTodo: LocalPost = {
  id: generateId(),
  title: "Perderlo todo",
  slug: SLUG,
  description: "Momentos difíciles que pusieron a prueba nuestra relación.",
  content: `
# Perderlo todo

A veces, la vida nos pone a prueba de maneras que nunca habríamos imaginado. Hubo un momento en que sentí que lo había perdido todo, que el suelo se desvanecía bajo mis pies y que nada tenía sentido.

Pero fue precisamente en ese momento de oscuridad cuando descubrí que tenía lo más importante: tu amor. Cuando todo lo demás parecía desmoronarse, nuestra conexión se mantuvo firme, como un faro en la tormenta.

Esta experiencia me enseñó que "perderlo todo" es solo una percepción, porque mientras nos tengamos el uno al otro, tenemos lo esencial para reconstruir cualquier cosa.
  `,
  publishedAt: new Date("2024-12-27").toISOString(),
  updatedAt: new Date("2024-12-27").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '4.jpg'),
    getPostImagePath(SLUG, '5.jpg'),
    getPostImagePath(SLUG, '6.jpg'),


  ],
  tags: [
    { id: "14", name: "superación" },
    { id: "15", name: "dificultades" }
  ],
  featured: false
}; 