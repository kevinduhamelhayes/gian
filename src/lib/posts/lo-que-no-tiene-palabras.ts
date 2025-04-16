import { LocalPost } from '../local-posts';
import { generateClientId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'lo-que-no-tiene-palabras';

// Define post data
export const loQueNoTienePalabras: LocalPost = {
  id: SLUG,
  title: "Lo que no tiene palabras",
  slug: SLUG,
  description: "Esos sentimientos tan profundos que las palabras no logran capturar.",
  content: `
# Lo que no tiene palabras

bueno, paso enero y mi desolacion era aterradora, ian en brasil me daba una mano andy me dio la espalda para escucharme era un plomazo la verdad, almendra me reclamaba que jamas fui afectado asi por nadie ni por ella, y pobre guillermo menos inteligencia emosional que un ladrillo, lo intentaba pero jamas habia visto sollozar a su amigo. a mi me vio fuerte desde toda la secu ndaria hasta en el velorio de su madre y su abuela por aquellos dias me soportaba echo un trapo de piso.

a que quiero llegar? bueno yo no me sentia digno de refugio ni de amor no queria comida sabrosa ni agua en mi sed... pero vos diste un paso al frente ante eso, y te propusiste darme cariño y eso me fue sanando abrazo a abrazo... pude reencotrarme con muchos sentimientos y culpas, el psicologo tambien me fue haciendo efecto, mas el gym

y empesaron a surgir en nuestro encuentro nuevamente y desde otro lado cosas que no tienen palabras, nuestro amor tiene un nose que carajos!

soy muy bueno escribiendo y describiendo pero lo que nos pasa juntos... me deja sin palabras no Hay

como nos desarmamos y fundimos en besos y abrazos como logro confiar de a poco en tus abrazos y llorar delante tuyo, sentir mi primer lagrima en 8 años "se siente mojada te dije" y me quebre

cada dia llore mas hasta que la culpa fue dando lugar a ese amor que aun nos queda... estar agradecido a tu esfuerzo de volver, al mio de sanar y de modificarme para ser mas yo, disfrutar de mis pequeñas cosas.

aun hoy que escribo esto y es un tipo de despedida y recuento de memorias estoy agradecido y lleno de amor por poder seguir viviendo esto y ambos seguimos aprendiendo y superandonos.
  `,
  publishedAt: new Date("2025-02-28").toISOString(),
  updatedAt: new Date("2025-02-28").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '4.jpg'),
    getPostImagePath(SLUG, '5.jpg'),

  ],
  tags: [
    { id: "amor", name: "amor" },
    { id: "sentimientos", name: "sentimientos" }
  ],
  featured: true
}; 