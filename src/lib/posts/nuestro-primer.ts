import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'nuestro-primer';

// Define post data
export const nuestroPrimer: LocalPost = {
  id: generateId(),
  title: "Uber, la Empresa, y nuesttros crujidos",
  slug: SLUG,
  description: "Como un guerrero saque fuerzas que nos costaron mas de lo que pensaba",
  content: `
# Crujiamos

Tal y como vos sabes yo ya pelee mas batallas de las que deberia haber peleado.

Pero esta vez no fue para ganar, fue para sobrevivir. queria que nuestro amor fuera fuerte como yo entendia la fuerza.... me fui a todo o nada y asi quede con nada...

el plan era "simple" comprar un auto con plata que no tenia ponerlo a laburar con gente honesta plotearlo que se haga la publicidad sola que venga el trabajo cobrarlo bien y vivir de ambos ingresos ir delegando trabajo cobrando acorde... poder ir expandiendonos tener dinero para ambos y poder viajar.

que podria salir mal? bueno todo! absolutamente todo!

la presion del auto no vino mas que a empeorar la liquidacion de mis ahorros, la gente de uber lo choca a los 20 dias y me roban un 30% mas siendo que yo les ofrecia una comision del 50%

los trabajos no llegaban, los gastos de matricula si...

psicologicamente te necesite y exprimi mas de lo que hoy me gustaria admitir.

obviamente eso hizo mella en nuestra relacion que igual siguio adelante por que no la peleaba solo 

vos a tu manera y desde otro lado tambien te habias puesto los guantes y te la bancabas... 

pero los meses pasaban y la cosa no cesaba frene a miguel en uber y me puse a remodelar deptos... en el medio alguna cosa buena algun viaje pudimos hacer visitamos avellaneda con el auto algunas frutas aparecian del proyecto futuro pero nos estaba costando demasiado.

mi filosofia de que nada es imposible de ir con toda y de disfrutar en pocos años no envejecer para poder estar tranquilos nos estaria costando la pareja

y sin la pareja todo eso no tenia sentido. cosas que uno entiende pero solo desde el futuro hacia atras. te pido perdon por las veces que minimice tus sacrificios y tus estudios.

uno lleva tal dinamica que solo podes ver lo que esta mal y no reconocer suficientemente lo que esta bien.

igualmente el amor se hacia ver pero bueno con amor no basta me dijiste hace poco...

en este post las fotos nose si representaran todo bien... hay una en particular el dia que te fui a ver dar el final pusieron el hinodoro 10 cmts mas alto que la descarga.... me entendes porque no podia darte mas? de mi...

  `,
  publishedAt: new Date("2023-05-20").toISOString(),
  updatedAt: new Date("2023-05-20").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '4.jpg')
  ],
  tags: [
    { id: "1", name: "recuerdos" },
    { id: "2", name: "amor" },
    { id: "12", name: "inicios" }
  ],
  featured: true
}; 