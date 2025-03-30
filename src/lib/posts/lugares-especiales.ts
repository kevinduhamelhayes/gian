import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'nuestros-lugares-especiales';

// Define post data
export const lugaresEspeciales: LocalPost = {
  id: generateId(),
  title: "Nuestros lugares especiales",
  slug: SLUG,
  description: "Los rincones que se han vuelto parte de nuestra historia.",
  content: `
# Nuestros lugares especiales

Me dijiste mil veces que te corriste que no sentis igual que todo se rompio en enero y que ya te pensabas diferente el futuro tu foco cambio no me ves igual, hasta me destaque un audio donde me decis muchas cosas verdades pero muy hirientes para alguien que aun te ama y especialmente espera y pelea lo imposible, vamos bastante lejos en mi vida llegue peleando imposibles, pero es verdad que se pagan costos, como te dije en otro post mas arriba estoy cansado...

Pero ese no es el tema de este post asi que a continuar, estamos llegando a los ultimos posts de esta etapa nos encontramos en un momento en el que me queda vender el auto alquilar los deptos buscar el pasaporte y buscar destino. 

Rechazaste mi idea de pelearla con vos nuevamente, y si quien se quema con leche ve la vaca y llora. lo unico que espero es que sea lo que realmente queres y no lo que consideras que yo debo querer por que es mejor para mi (anoche tuvimos un pequeño entredicho por que yo te deje un detalle en la terminal para acompañar tu viaje y queria dedicarte 20 minutos mas de mi tiempo pero me lo rechazaste incluso cuando aclare lo que yo queria por que segun vos yo debia disfrutar mis momentos con mis amigos) traigo esa aclaracion por que no se cuando leeras esto y si tendras el contexto.

bueno en fin espero que el rechazo sea lo que realmente queres y no lo que consideras que yo debo querer por que es mejor para mi. por que yo la pelearia mil veces por vos. le pedire perdon a todos los que yo alla lastimado y quisiera que realmente vos me perdones por lo que te hice.

pero bueno al momento de escribir esto nuestros canminos se estan separando y paradogicamente estamos mejor que nunca. es raro, no lo entiendo pero es lo que es.

Mi corazon esta lleno de amor y de agradecimiento por el privilegio de haber vivido lo que vivi, tambien se que tocara el dolor al dar ese paso que vendra, se el dolor que voy a pasar y lo que vas a pasar.

Por suerte aprendi mucho de vos de hacer vinculos de generar pilares de valores de familia de amor pense seriamente en formar una familia... obviamente avances que llevaran mucho tiempo en mi pero hay resultados que ya me enorgullecen hace pocos dias vos querias irte y yo que te vallas estabas frustrada y yo tambien por un tema comunicativo pero logre superarme superar mi momento y abrazarte lograr que te quedes (quizas algo cotidiano y lo que uno esperaria pero para mi fue un monton en cuanto a superacion propia)

Intento dejarte un recuerdo al que puedas volver, el futuro es incierto hoy siento que te esperare para como alguna vez te dije que mi futuro sea a tu lado ya no quiero buscar no quiero dar nuevas batallas esta es la que vale la pena para mi pero bueno en eso no coincidimos somos personas distintas y tenemos mucho por pulir si queremos realmente ese camino bueno no importa soy tan romantico como vos mandandome esas cartas bajo la puerta solo que programar me permite no derramar lagrimas sobre el papel.

Pero como dije antes no hay palabras certeras para nuestro amor estoy agradecido y al escribir esto aun sigo lleno de amor y se por que lo siento cada vez que te abrazo cada vez que te aprieto cada vez que te beso que vos tambien.
  `,
  publishedAt: new Date("2023-03-01").toISOString(),
  updatedAt: new Date("2023-03-01").toISOString(),
  image: "/images/blog/lugares.jpg", // Nota: Esta imagen podría no existir, se usará el fallback
  carouselImages: [
    getPostImagePath('nuestro-primer-viaje', 'IMG_20240712_030220.jpg'),
    getPostImagePath('nuestro-primer-viaje', 'IMG_20240712_131443.jpg'),
    getPostImagePath('nuestro-primer-viaje', 'IMG_20240712_185035.jpg')
  ],
  tags: [
    { id: "1", name: "recuerdos" },
    { id: "5", name: "lugares" }
  ],
  featured: false
}; 