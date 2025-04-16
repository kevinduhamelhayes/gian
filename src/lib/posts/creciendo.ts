import { LocalPost } from '../local-posts';
import { generateClientId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'creciendo';

// Define post data
export const creciendo: LocalPost = {
  id: generateClientId(),
  title: "Creciendo juntos",
  slug: SLUG,
  description: "La historia de cómo crecemos y evolucionamos juntos día a día.",
  content: `
# Creciendo juntos

Peleábamos. Somos dos tercos que no aceptan menos de lo que consideran que valen.

Nos exigimos y le exigimos al otro... nos empujamos a los límites...

Yo te exigí desde lo que yo entendía que era lo que yo quería y lo que vos querías, pero aún la experiencia no te lo había mostrado (sé que acá pensás re distinto, pero es lo que yo pensaba).

Por estos tiempos, yo tendría que haber ido al psicólogo en vez de tirarme a montar una empresa para pagar nuestros temas. Quería darte una buena vida, que nada nos falte.

Quería salir de los quilombos que arrastraba por vender el Kraken y por arreglar la casa de mi abuela. Quería montar una vida en Rosario para poder estar más cerca de vos y de tu familia; una vida que después nos deje viajar y, más adelante, tener hijos.

Pero vos sos más joven, no necesitabas de mí semejante sacrificio. Para nosotros en el futuro, me necesitabas a mí en el presente, y es algo que hoy entiendo, pero en ese momento no.

Yo quería ir a toda máquina, y te enseñé y te exigí así, y vos estabas para ir más despacio, terminar la facu, ver qué onda el tenis y qué onda la vida.

Yo nos metí en una vorágine que nos obligaba a crecer, pero también nos llevaba puestos...

Hoy se siente culpa, pero también sé que crecimos, que vimos hasta adónde podemos llegar y nuestros límites.

Yo quería abordar tanto a la vez... obviamente no podía...

Lo que te vi crecer y lo rápido que te superabas es algo que no te reconocí de forma adecuada, pero espero que aquí quede plasmado por siempre, porque no fui justo en su momento... Ahora que quizás el final esté cerca...
No voy a cometer ese error.
  `,
  publishedAt: new Date("2024-11-05").toISOString(),
  updatedAt: new Date("2024-11-05").toISOString(),
  image: getPostImagePath(SLUG, '3.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '4.jpg'),
    getPostImagePath(SLUG, '5.jpg'),
    getPostImagePath(SLUG, '7.jpg')
  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "10", name: "crecimiento" }
  ],
  featured: true
};