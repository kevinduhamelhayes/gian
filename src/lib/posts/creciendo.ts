import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'creciendo';

// Define post data
export const creciendo: LocalPost = {
  id: generateId(),
  title: "Creciendo juntos",
  slug: SLUG,
  description: "La historia de cómo crecemos y evolucionamos juntos día a día.",
  content: `
# Creciendo juntos

Peleabamos, somos dos tercos que no aceptan menos de lo que consideran que valen

nos exigimos y le exigimos al otro... nos empujamos a los limites...

yo te exigi desde lo que yo entendia que era lo que yo queria y lo que vos querias pero aun la experiencia no te habia mostrado (se que aca pensas re distinto pero es lo que yo pensaba)

por estos tiempos yo tendria que haber ido al psicologo en vez de tirarme a montar una empresa para pagar nuestros temas, queria darte una buena vida que nada nos falte.

queria salir de los quilombos que arrastraba por vender el kraken y por arreglar la casa de mi abuela queria montar una vida en rosario para poder estar mas cerca de vos y de tu familia, una vida que despues nos deje viajar y mas adelante tener hijos.

pero vos sos mas joven no necesitabas de mi semejante sacrificio, para nosotros en el futuro me necesitabas a mi en el presente y es algo que hoy entiendo pero en ese momento no.

yo queria ir a toda maquina y te enseñe y te exigi asi y vos estabas para ir mas despacio terminar la facu ver que onda el tenis y que onda la vida.

yo nos meti en una voragine que nos olbligaba a crecer pero tambien nos llevaba puestos...

hoy se siente culpa pero tambien se que crecimos que vimos hasta adonde podemos llegar y nuestros limites.

yo queria abordar tanto a la vez.... obviamente no podia...

lo que te vi crecer y lo rapido que te superabas es algo que no te reconoci de forma adecuada pero espero que aqui quede plasmado por siempre por que no fui justo en su momento... ahora que quizas el final este cerca...
no voy a cometer ese error.
  `,
  publishedAt: new Date("2023-07-10").toISOString(),
  updatedAt: new Date("2023-07-10").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
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