import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'palabras-antes-de-partir';

// Define post data
export const palabrasAntesDePartir: LocalPost = {
  id: generateId(),
  title: "Palabras Antes de Partir",
  slug: SLUG,
  description: "Ultimas reflecciones.",
  content: `
# Palabras Antes de Partir

Me dijiste mil veces que te corriste, que no sentís igual, que todo se rompió en Enero y que ya te pensabas diferente el futuro. Tu foco cambió, no me ves igual. Hasta me destaqué un audio donde me decís muchas cosas, verdades, pero muy hirientes para alguien que aún te ama y especialmente espera y pelea lo imposible. Vamos, bastante lejos en mi vida llegué peleando imposibles, pero es verdad que se pagan costos. Como te dije en otro post más arriba, estoy cansado...

Pero ese no es el tema de este post, así que a continuar. Estamos llegando a los últimos posts de esta etapa, nos encontramos en un momento en el que me queda vender el auto, alquilar los deptos, buscar el pasaporte y buscar destino.

Rechazaste mi idea de pelearla con vos nuevamente, y sí, quien se quema con leche ve la vaca y llora. Lo único que espero es que sea lo que realmente querés y no lo que considerás que yo debo querer porque es mejor para mí (anoche tuvimos un pequeño entredicho porque yo te dejé un detalle en la terminal para acompañar tu viaje y quería dedicarte 20 minutos más de mi tiempo, pero me lo rechazaste incluso cuando aclaré lo que yo quería, porque según vos yo debía disfrutar mis momentos con mis amigos). Traigo esa aclaración porque no sé cuándo leerás esto y si tendrás el contexto.

Bueno, en fin, espero que el rechazo sea lo que realmente querés y no lo que considerás que yo debo querer porque es mejor para mí. Porque yo la pelearía mil veces por vos. Le pediré perdón a todos los que yo alla lastimado y quisiera que realmente vos me perdones por lo que te hice.

Pero bueno, al momento de escribir esto, nuestros caminos se están separando y, paradójicamente, estamos mejor que nunca. Es raro, no lo entiendo, pero es lo que es.

Mi corazón está lleno de amor y de agradecimiento por el privilegio de haber vivido lo que viví. También sé que tocará el dolor al dar ese paso que vendrá. Sé el dolor que voy a pasar y lo que vas a pasar.

Por suerte aprendí mucho de vos: de hacer vínculos, de generar pilares de valores, de familia, de amor. Pensé seriamente en formar una familia... Obviamente, avances que llevarán mucho tiempo en mí, pero hay resultados que ya me enorgullecen. Hace pocos días vos querías irte y yo que te vallas; estabas frustrada y yo también por un tema comunicativo, pero logré superarme, superar mi momento y abrazarte, lograr que te quedes (quizás algo cotidiano y lo que uno esperaría, pero para mí fue un montón en cuanto a superación propia).

Intento dejarte un recuerdo al que puedas volver. El futuro es incierto. Hoy siento que te esperaré para, como alguna vez te dije, que mi futuro sea a tu lado. Ya no quiero buscar, no quiero dar nuevas batallas; esta es la que vale la pena para mí. Pero bueno, en eso no coincidimos. Somos personas distintas y tenemos mucho por pulir si queremos realmente ese camino. Bueno, no importa. Soy tan romántico como vos mandándome esas cartas bajo la puerta, solo que programar me permite no derramar lágrimas sobre el papel.

Pero, como dije antes, no hay palabras certeras para nuestro amor. Estoy agradecido y, al escribir esto, aún sigo lleno de amor y sé por qué lo siento cada vez que te abrazo, cada vez que te aprieto, cada vez que te beso: que vos también.
  `,
  publishedAt: new Date("2024-07-01").toISOString(),
  updatedAt: new Date("2024-07-01").toISOString(),
  image: "/images/blog/palabras-antes-de-partir/1.jpg",
  carouselImages: [
    "/images/blog/palabras-antes-de-partir/1.jpg",
    "/images/blog/palabras-antes-de-partir/2.jpg",
    "/images/blog/palabras-antes-de-partir/3.jpg",
    "/images/blog/palabras-antes-de-partir/4.jpg",
    "/images/blog/palabras-antes-de-partir/5.jpg",
    "/images/blog/palabras-antes-de-partir/6.jpg",
    "/images/blog/palabras-antes-de-partir/7.jpg",
    "/images/blog/palabras-antes-de-partir/8.jpg",

  ],
  tags: [
    { id: "1", name: "agradecimiento" },
    { id: "5", name: "dolor" }
  ],
  featured: false
}; 