import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'crujiamos'; // Slug mantenido como 'nuestro-primer'

// Define post data
export const crujiamos: LocalPost = {
  id: generateId(),
  // Título ajustado para mayor coherencia con el contenido y el encabezado H1
  title: "Crujíamos",
  slug: SLUG,
  // Descripción corregida
  description: "Como un guerrero, saqué fuerzas que nos costaron más de lo que pensaba.",
  content: `
# Crujíamos

Tal y como vos sabés, yo ya peleé más batallas de las que debería haber peleado.

Pero esta vez no fue para ganar, fue para sobrevivir. Quería que nuestro amor fuera fuerte como yo entendía la fuerza... Me fui a todo o nada y así quedé, con nada...

El plan era 'simple': comprar un auto con plata que no tenía, ponerlo a laburar con gente honesta, plotearlo, que se haga la publicidad sola, que venga el trabajo, cobrarlo bien y vivir de ambos ingresos, ir delegando trabajo cobrando acorde... Poder ir expandiéndonos, tener dinero para ambos y poder viajar.

¿Qué podría salir mal? Bueno, ¡todo! ¡Absolutamente todo!

La presión del auto no vino más que a empeorar la liquidación de mis ahorros. La gente de Uber lo choca a los 20 días y me roban un 30% más, siendo que yo les ofrecía una comisión del 50%.

Los trabajos no llegaban; los gastos de matrícula, sí...

Psicológicamente te necesité y exprimí más de lo que hoy me gustaría admitir.

Obviamente, eso hizo mella en nuestra relación, que igual siguió adelante porque no la peleaba solo.

Vos, a tu manera y desde otro lado, también te habías puesto los guantes y te la bancabas...

Pero los meses pasaban y la cosa no cesaba. Frené a Miguel en Uber y me puse a remodelar deptos... En el medio, alguna cosa buena: algún viaje pudimos hacer, visitamos Avellaneda con el auto, algunas frutas aparecían del proyecto futuro... pero nos estaba costando demasiado.

Mi filosofía de que nada es imposible, de ir con toda y de 'disfrutar en pocos años, no envejecer para poder estar tranquilos', nos estaría costando la pareja.

Y sin la pareja, todo eso no tenía sentido. Cosas que uno entiende, pero solo desde el futuro hacia atrás. Te pido perdón por las veces que minimicé tus sacrificios y tus estudios.

Uno lleva tal dinámica que solo podés ver lo que está mal y no reconocer suficientemente lo que está bien.

Igualmente, el amor se hacía ver, pero bueno... 'Con amor no basta', me dijiste hace poco...

En este post, las fotos no sé si representarán todo bien... Hay una en particular: el día que te fui a ver dar el final, pusieron el inodoro 10 cm más alto que la descarga... ¿Me entendés por qué no podía darte más de mí?...

Bueno en fin crujiamos sabiamos que algo no estaba bien pero que era... habiamos metido mucho de nosotros en cumplirnos y cumplirle al otro lo que nos parecia que necesitaba y se veian avances con el auto fuimos a avellaneda y la ida fue un poco accidentada pero el regreso fue genial. aunque en medio esperabamos el deposito del smartfit para llegar al mes y el srtes nos peso...


  `,
  publishedAt: new Date("2024-08-15").toISOString(),
  updatedAt: new Date("2024-08-15").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '4.jpg'),
    getPostImagePath(SLUG, '5.jpg'),
  ],
  // Etiquetas ajustadas para reflejar mejor el contenido
  tags: [
    { id: "1", name: "recuerdos" },
    { id: "2", name: "amor" },
    { id: "15", name: "dificultades" } // Reemplazando 'inicios' por 'dificultades'
  ],
  featured: true
};