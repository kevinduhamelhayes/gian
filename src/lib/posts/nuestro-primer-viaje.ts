import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'nuestro-primer-viaje';

// Define post data
export const nuestroPrimerViaje: LocalPost = {
  id: generateId(),
  title: "Nuestro primer viaje juntos",
  slug: SLUG,
  description: "Recuerdos inolvidables de un viaje accidentado",
  content: `
# Nuestro primer viaje juntos

Este recuerdo creo que a los dos se nos viene seguido, al menos a mí me pasa... No éramos tan pegados por aquel momento como para explicarte todo lo que pasaba por mi mente.

Hoy y acá puedo contarte algunas cosas que no sabías y seguiré el relato de cómo fue el viaje.

Por acá estaba sufriéndola bastante entre lo que mi corazón decía, lo que quería, lo que sentía y los ahorros que estaba quemando para atrasarme y disfrutarte cada momento. Además, que Bs. As. es como mi segunda ciudad y quería darte todo lo mejor de mí.

Sin embargo, el viaje se cambió mucho para lo que mi estructura en ese momento podía soportar. Lamentablemente, un poco fallé el primer día, pero fue por eso. No me justifico, pero es lo que es.

Viajamos con Andrés, nos encontramos con tu papá. La pizza se quemó un poco (una pesadilla para mí y algo re normal para vos, ¡jaja, qué distintos!)... Bueno, ¡el segundo día salimos adelante!

¿Qué no hicimos ese viaje? Cuando pudimos ser nosotros, caminamos un montón, me corté el dedo en una parada de bondi y ¡la sangre toda!...

Caminamos, conocimos, bailamos, nos divertimos.

Algún entredicho menor tuvimos, pero traigo este viaje aquí porque es fácil olvidar con los años, y aquí estará este recuerdo seguro.

¿Cómo olvidar tu carita en el Colón?

Dios, cuánto amor...
  `,
  publishedAt: new Date("2024-04-01").toISOString(),
  updatedAt: new Date("2024-04-01").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '5.jpg'),
    getPostImagePath(SLUG, '6.jpg'),  
    getPostImagePath(SLUG, '7.jpg'),
    getPostImagePath(SLUG, '8.jpg'),
    getPostImagePath(SLUG, '9.jpg'),
  ],
  tags: [
    { id: "1", name: "recuerdos" },
    { id: "5", name: "lugares" },
    { id: "11", name: "viajes" }
  ],
  featured: true
};