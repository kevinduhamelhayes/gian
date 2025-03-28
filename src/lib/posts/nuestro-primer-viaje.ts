import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'nuestro-primer-viaje';

// Define post data
export const nuestroPrimerViaje: LocalPost = {
  id: generateId(),
  title: "Nuestro primer viaje juntos",
  slug: SLUG,
  description: "Recuerdos inolvidables de un viaje accidentado",
  content: `
# Nuestro primer viaje juntos

Este recuerdo creo que a los dos se nos pasa seguido al menos a mi me pasa... no eramos tan pegados por aquel momento para explicarte todo lo que pasaba por mi mente

hoy y aca puedo contarte algunas cosas que no sabias y seguire el relato de como fue el viaje.

por aca estaba sufriendola bastante entre lo que mi corazon decia lo que queria lo que sentia y los ahorros que estaba quemando para atrazarme y disfrutarte cada momento. a demas que bs as es como mi segunda ciudad y queria darte todo lo mejor de mi.

sin embargo el viaje se cambio mucho para lo que mi estructura en ese momento podia soportar. lamentablemente un poco falle el primer dia pero fue por eso, no me justifico pero es lo que es.

viajamos con andres nos encontramos con tu papa la pizza se quemo un poco una pesadilla para mi y algo re normal para vos. jaja que distintos... bueno el segundo dia salimos adelante!

que no hicimos ese viaje? cuando pudimos ser nosotros caminamos un monton me corte el dedo en una parada de bondi y la sangre toda....

caminamos conocimos bailamos nos divertimos 

algun entredicho menor tubimos pero traigo este viaje aqui por que es facil olvidar con los años y aqui estara este recuerdo seguro

como olvidar tu carita en el colon?

dios cuanto amor...
  `,
  publishedAt: new Date("2024-07-12").toISOString(),
  updatedAt: new Date("2024-07-12").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '5.jpg'),
    getPostImagePath(SLUG, '6.jpg'),  
    getPostImagePath(SLUG, '7.jpg'),
    getPostImagePath(SLUG, '8.jpg'),
    getPostImagePath(SLUG, '9.jpg'),

    
  ],
  tags: [
    { id: "1", name: "recuerdos" },
    { id: "5", name: "lugares" },
    { id: "11", name: "viajes" }
  ],
  featured: true
}; 