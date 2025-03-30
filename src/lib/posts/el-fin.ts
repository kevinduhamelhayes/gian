import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'el-fin';

// Define post data
export const elFin: LocalPost = {
  id: generateId(),
  title: "El fin?",
  slug: SLUG,
  description: "El dia llegara, y con el, el fin de esta etapa de mi vida. o no?",
  content: `
# Mis reflecciones finales

Mientras escribo esto, el fin no a llegado, pero parece que llegará y no podré evitarlo, así que dejaré estas reflexiones finales: ningún amor es en vano, y menos uno así como el nuestro, con esa profundidad infinita y ese poder de hacer cualquier cosa, sanarnos y enseñarnos tanto.

Sé que sabes mucho de lo que escribiré aquí, pero aquí quedará perdurando para que los pos podamos volver, porque si bien es un regalo para vos, como hace poco te comenté, yo no solo vuelvo a fotos tuyas desnuda, vuelvo a vernos en cada momento. Así que esta página está construida para vos, pero también para mí, y podremos volver. Será nuestro punto de encuentro, quizás, cuando la vida nos azote.

Entre mis reflexiones finales está una que es muy clara: que un amor así no se consigue, no se construye y no se ve todos los días; no es algo que vallamos a encontrar a la vuelta de la esquina. Espero que sí, que a ambos nos encuentre el amor rápidamente y podamos volver a ser felices. Que el amor nos encuentre antes que la soledad, la culpa y el "¿qué podría haber sido?".

También deseo para vos un futuro próspero. Te quiero feliz, radiante como cuando jugás al tenis al sol. Te quiero fuerte, sana y próspera. Te quiero licenciada y triunfando. Te quiero desafiándote, poniéndote metas y cumpliéndolas. Te quiero llena de amor y de felicidad. Espero todo eso llegue a tu vida...

Este párrafo me dolerá escribirlo más que los demás. Bueno, poco a poco, porque mis ojos se llenan de lágrimas. Si en el futuro yo ya no soy parte de tu vida, dolerá, pero seguramente aprenda a verte feliz con otra persona, y espero que te haga feliz, que sea mejor compañero de vida, más familiero y que puedan tener una bonita familia.

Raro es para mí escribir ese párrafo. Realmente duele, pero uno que ama tanto quiere solo lo mejor para el otro.

Por mi parte, trataré de sanar primero porque esto me va a dejar dolor. Amar es difícil, pero lo vale. Sanaré y trataré de aprender de lo que me quisiste enseñar; ya veo pequeños brotes... pero a armar árboles de ellos. Bueno, sanaré y trataré de ser feliz. La vida empiesa a pesar después de tantas peleas a mi corta edad. Yo quiero paz. Te esperaré con tu lugar para que lo reclames y quizás lo pelees, porque no sé cuánto tiempo pasará, si el día llega. Y si no llega, seguiré adelante con añoranza de lo que fue, amor, y profundos recuerdos y buenos deseos para vos.

Así como en tu vida hay cosas que te marcaron en la mía, hay un preconcepto de amor imperecedero que en mi caso no viene de la religión, viene de Will y Lyra, viene de Snape y Lily, así que la esperanza llameara en mi corazón y así la vida nunca te vuelva a traer a mi camino al alba de cada quito día seguire mirando al Este.
  `,
  publishedAt: new Date("2023-02-15").toISOString(),
  updatedAt: new Date("2023-02-15").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'),
  carouselImages: [
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '4.jpeg'),
    getPostImagePath(SLUG, '5.jpeg'),


  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "4", name: "cotidiano" }
  ],
  featured: true
}; 