import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'perderlo-todo';

// Define post data
export const perderloTodo: LocalPost = {
  id: generateId(),
  title: "Perderlo todo",
  slug: SLUG,
  description: "Momentos difíciles que pusieron a prueba nuestra relación.",
  content: `
# Perderlo todo

Diciembre también trajo otro viaje más, para el que yo trataba de prepararme hace meses. Quizás hubiese sido mejor con psicólogo, pero aquí fue cuando no pude más...

Cosas para vos tan sencillas, para mí son realmente difíciles... La familia, sentirme alejado y ajeno. No poderme abrir a cosas que no tienen sentido. Yo tampoco tenía las herramientas para valerme por mí mismo... Al elegir ir a un lugar que no es mi zona, sin el auto, yo estaba a merced del ambiente y de vos, mi amor...

Eso no debería haber pasado... Bueno, esta historia la conocemos los dos. Para mí, 4 horas de cena es mucho; 7, demasiado. Estuve hasta el final poniendo de mí... Yo quería sentirme cuidado por vos, pero vos no entendés que esos ambientes a mí me son estresantes, y entiendo que vos podés fluir más fácil, sos más comodín, pero yo no podía en ese momento.

Hoy quizás podría manejarme mejor (uno va agarrando herramientas), pero yo las había dejado porque suponía que no las necesitaría...

Si me dicen a las 20, para mí son las 20, y para vos también. Si hay que cenar, no se espera a nadie, porque hacer esperar a 12 personas 1 o 2 horas es demasiado...

Pero esto a nadie le pesaba más que a mí... Porque yo no estoy acostumbrado... Y te juro que le metí todo de mí por amor, pero fallé...

Eso no es culpa tuya, es culpa mía... Y no me gusta que te sientas mal por mí...

Una hora antes de que todo explote les estaba sacando fotos a vos, a la Eme y a tu mamá...

Pero, ¿qué pasó? Al dedicar tanta energía ahí, llegamos mal a la cama y nos acostamos mal. Grave error que, si algún día volviéramos, tendríamos que prometer no volver a dormir enojados.

¿Qué pasó al otro día? Bueno, de eso no hay fotos, pero sí culpas... Mi caída en lo peor de mis sentimientos fue imparable. Te amaba, pero no me cuidaste. Me sentí mal, me sentí fuera de mi lugar de seguridad, en casa ajena donde tampoco me querían. Solo estaba por vos, porque ellos te aman y yo también, pero no estaba por mí mismo...

Traté de irme y lo logré... Atacado de pánico, me subí al bondi y no pasó un kilómetro antes de arrepentirme, pero era tarde... Habíamos fallado...

Es cierto que no me pediste ir, pero quería hacerte feliz. Yo no estaba listo para exponerme así en ese momento, y vos tampoco para hacerme sentir bien...

Hace poco hablamos de cuándo me siento cuidado, protegido y amado... En ese momento me sentí amado, pero no protegido ni cuidado...

Aunque no te culpo, yo necesitaba demasiado de vos...

Como me enseñaste, mi felicidad debe estar en mí, no en los demás... Pero bueno, no estoy contando una historia perfecta, estoy escribiendo lo que pasó...

A veces, la vida nos pone a prueba de maneras que nunca habríamos imaginado. Hubo un momento en enero en que sentí que lo había perdido todo, que el suelo se desvanecía bajo mis pies y que nada tenía sentido.

Todos los proyectos ya no tenían sentido; todo el esfuerzo, quedarme tampoco... Volvía al punto de partida, lleno de heridas y sin esperanza.

Quise cambiarlo todo, pero ya habías decidido por mí no seguir. Y lo entendía: en la lógica, tenés mucho por delante, y yo quizás también, pero todo el año anterior había estado peleando por algo que por sí mismo cayó.

Bueno, enero fue desolador. Bajé 12 kilos y no me sentía bien. Empecé el gym y el psicólogo, pero yo me sentía para la mierda y así me trataba; comía como si ni siquiera mereciera comida sabrosa.

Aquí no creo que haya muchas fotos, porque tampoco eran momentos para retratar: arrebatado de dolor, cagado de miedo y lleno de culpa.

Lo perdía todo: el dinero, el tiempo, la empresa, mi psiquis... y te había perdido a vos.

  `,
  publishedAt: new Date("2025-01-25").toISOString(),
  updatedAt: new Date("2025-01-25").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '4.jpg'),
    getPostImagePath(SLUG, '5.jpg'),
    getPostImagePath(SLUG, '6.jpg'),
  ],
  // Etiquetas ajustadas para reflejar el sentimiento de pérdida y dificultad
  tags: [
    { id: "15", name: "dificultades" },
    { id: "25", name: "pérdida" } // Nueva etiqueta (ID de ejemplo)
  ],
  featured: false // Mantenido como false
};