import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'diciembre-y-disfrutar';

// Define post data
export const diciembreYDisfrutar: LocalPost = {
  id: generateId(),
  title: "Diciembre y disfrutar",
  slug: SLUG,
  // Descripción ajustada para reflejar mejor el contenido agridulce
  description: "Un diciembre de contrastes: entre la alegría de un viaje soñado y las tensiones de las expectativas familiares.",
  content: `
# Diciembre y disfrutar

Diciembre fue el mes más especial. Quizás llegaba ese viaje tan esperado que habíamos empezado a pensar hace tanto...

Sin embargo, yo hacía un depto por mes y el viaje caía el 4 de diciembre. Veníamos de un noviembre atrasado, choferes de Uber robando...

Yo decidí mal, tendría que haberlo previsto. Tendríamos que haber ido al aeropuerto en bondi y no haciendo yo de chofer para mis choferes. Casi la palmo en esa ida al aeropuerto...

Casi arruino el viaje, pero estabas ahí a mi lado... Nada que reclamar, qué decirte... Yo lo manejé mal. Fue un mes muy exigente, ya era la cereza del año. Estábamos cerca de terminar los quilombos, pero el cliente pedía más cosas...

Finalmente llegamos a Bariloche y yo tomé mi primer avión a tu lado... Fue malo y bueno a la vez... Pero te agradezco darme esos empujones.

Llegamos allá cansados. Dormí, te dejé el teléfono, te puse al mando. Yo no daba más, estaba cansado y nervioso...

Al otro día, finalmente logramos salir adelante. Finalmente, el viaje fue increíble y nada logró arruinarlo... Qué feliz me hace tenerte a mi lado...

Si ves la galeria de imagenes mas abajo como van cambiando nuestros rostros... cuanto amor por dios... despues porque quiero seguirla peleando, la pelearia mil veces... lo vale...

  `,

  publishedAt: new Date("2024-12-15").toISOString(),
  updatedAt: new Date("2024-12-15").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '4.jpg'),
    getPostImagePath(SLUG, '5.jpg'),
    getPostImagePath(SLUG, '6.jpg'),
    getPostImagePath(SLUG, '7.jpg'),
    getPostImagePath(SLUG, '8.jpg'),
    getPostImagePath(SLUG, '9.jpg'),
    getPostImagePath(SLUG, '10.jpg'),
    getPostImagePath(SLUG, '11.jpg'),
    getPostImagePath(SLUG, '12.jpg'),
    getPostImagePath(SLUG, '13.jpg'),
    getPostImagePath(SLUG, '14.jpg'),
    getPostImagePath(SLUG, '15.jpg'),
    getPostImagePath(SLUG, '16.jpg'),
    getPostImagePath(SLUG, '17.jpg'),
    getPostImagePath(SLUG, '18.jpg'),
    getPostImagePath(SLUG, '19.jpg'),
    getPostImagePath(SLUG, '20.jpg'),
    getPostImagePath(SLUG, '21.jpg'),
    getPostImagePath(SLUG, '22.jpg'),
  ],
  // Etiquetas ajustadas para reflejar mejor los temas del texto
  tags: [
    { id: "2", name: "amor" }, // Mantenido de ejemplo anterior si aplica, o usar un ID adecuado
    { id: "22", name: "viajes" }, // ID de ejemplo
    { id: "23", name: "familia" }, // ID de ejemplo
    { id: "24", name: "desafíos personales" } // ID de ejemplo
  ],
  featured: true
};