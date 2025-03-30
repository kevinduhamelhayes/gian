import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'los-pequenos-momentos';

// Define post data
export const pequenosMomentos: LocalPost = {
  id: generateId(),
  title: "El fin?",
  slug: SLUG,
  description: "El dia llegara, y con el, el fin de esta etapa de mi vida. o no?",
  content: `
# Mis reflecciones finales

mientras escribo esto el fin no a llegado pero parece que llegara y no podre evitarlo asi que dejare estas reflecciones finales ningun amor es en vano y menos uno asi como el nuestro. con esa profundidad infinita y ese poder de hacer cualquier cosa sanarnos y enseñarnos tanto.

se que sabes  mucho de lo que escribire aqui pero aqui quedara perdurando para que los pos podamos volver por que si bien es un regalo para vos como hace poco te comente yo no solo vuelvo a fotos tuyas desnuda vuelvo a vernos en cada momento asi que esta pagina esta construida para vos pero tambien para mi y podremos volver sera nuestro punto de encuentro quizas cuando la vida nos azote.

entre mis reflecciones finales esta una que es muy clara que un amor asi no se consigue no se construye y no se ve todos los dias no es algo que vallamos a encontrar a la vuelta de la esquina, espero que si que a ambos nos encuentre el amor rapidamente y podamos volver a ser felices, que el amor nos encuentre antes que la soledad la culpa y el que podria haber sido?

tambien deseo para vos un futuro prospero te quiero feliz radiante como cuando jugas al tenis al sol, te quiero fuerte,  sana y prospera, te quiero licenciada y triunfando, te quiero desafiandote poniendote metas y cumpliendolas. te quiero llena de amor y de felicidad. espero todo eso llegue a tu vida... 

este parrafo me dolera escribirlo mas que los demas, bueno poco a poco por que mis ojos se llenan de lagrimas, si en el futuro yo ya no soy parte de tu vida dolera pero seguramente aprenda a verte feliz con otra persona y espero que te haga feliz que sea mejor compañero de vida mas familiero y que puedan tener una bonita familia.

raro es para mi escribir ese parrafo realmente duele pero uno que ama tanto quiere solo lo mejor para el otro.

por mi parte, tratare de sanar primero por que esto me va a dejar dolor amar es dificil pero lo vale, sanare y tratare de aprender de lo que me quisiste enseñar ya veo pequeños brotes... pero a armar arboles de ellos. bueno sanare y tratare de ser feliz la vida empiesa a pesar despues de tantas peleas a mi corta edad yo quiero paz te esperare con tu lugar para que lo reclames y quizas lo pelees por que nose cuanto tiempo pasara si el dia llega y si no llega seguire adelante con añoranza de lo que fue, amor, y profundos recuerdos y buenos deseos para vos.
  `,
  publishedAt: new Date("2023-02-15").toISOString(),
  updatedAt: new Date("2023-02-15").toISOString(),
  image: getPostImagePath('creciendo', '4.jpg'),
  carouselImages: [
    getPostImagePath('creciendo', '1.jpg'),
    getPostImagePath('creciendo', '2.jpg'),
    getPostImagePath('creciendo', '3.jpg'),
    getPostImagePath('creciendo', '4.jpg'),
    getPostImagePath('creciendo', '5.jpg'),
    getPostImagePath('creciendo', '6.jpg'),
    getPostImagePath('creciendo', '7.jpg')
  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "4", name: "cotidiano" }
  ],
  featured: true
}; 