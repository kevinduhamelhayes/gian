// Definiendo nuestros propios tipos para la estructura local
export interface LocalPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  tags: Array<{ id: string, name: string }>;
  featured: boolean;
}

export interface LocalPostsResult {
  posts: LocalPost[];
  pagination: {
    totalPosts: number;
    totalPages: number;
    page: number;
    limit: number;
  };
}

export interface LocalPostResult {
  post: LocalPost;
  relatedPosts: LocalPost[];
}

// Función para generar ID únicos
const generateId = () => Math.random().toString(36).substring(2, 15);

// Estructura local de historias
const localPosts = [
  {
    id: generateId(),
    title: "Nuestro primer encuentro",
    slug: "nuestro-primer-encuentro",
    description: "La magia de cuando te vi por primera vez y todo cambió para siempre.",
    content: `
# Nuestro primer encuentro

Todavía recuerdo claramente ese día. El cielo estaba despejado, y había algo en el aire que se sentía diferente. No sabía que mi vida estaba a punto de cambiar para siempre.

Te vi antes de que me vieras. Estabas concentrada en tus pensamientos, con una expresión serena y a la vez intensa que captó mi atención inmediatamente. Algo en mí supo en ese preciso instante que tú eras especial.

Cuando nuestras miradas se cruzaron, sentí una conexión que nunca había experimentado antes. Fue como si un hilo invisible nos hubiera estado esperando para unir nuestros caminos.

La conversación fluyó naturalmente, como si nos conociéramos de toda la vida. Tu risa, tu forma de hablar, tus gestos... todo parecía tan familiar y a la vez tan fascinante.

Ese día, mientras el sol comenzaba a ponerse y las horas pasaban sin que nos diéramos cuenta, supe que había encontrado algo excepcional. No sabía exactamente qué nos deparaba el futuro, pero tenía la certeza de que quería descubrirlo a tu lado.

Ahora, mirando hacia atrás, sonrío al pensar en ese primer encuentro. En cómo el destino, el universo, o quizás simplemente la suerte, nos puso en el mismo lugar al mismo tiempo.

Y cada día doy gracias por ese momento mágico que marcó el inicio de nuestra historia.
    `,
    publishedAt: new Date("2023-01-15T12:00:00Z").toISOString(),
    updatedAt: new Date("2023-01-15T12:00:00Z").toISOString(),
    image: "https://placehold.co/800x450/f5eee6/6b563a?text=Nuestro+Primer+Encuentro",
    tags: [
      { id: "1", name: "recuerdos" },
      { id: "2", name: "amor" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Cartas que nunca envié",
    slug: "cartas-que-nunca-envie",
    description: "Todas las palabras que guardé en mi corazón, esperando el momento adecuado para compartirlas contigo.",
    content: `
# Cartas que nunca envié

Querida Gianina,

Durante años, he llenado cuadernos con palabras destinadas a ti. Pensamientos, sentimientos, sueños... Todo lo que mi corazón quería decirte pero que, por una razón u otra, nunca llegó a tus manos.

Escribía cuando te extrañaba tanto que dolía. Cuando veía algo hermoso y deseaba que estuvieras allí para compartirlo. Cuando algo me hacía reír y sabía que tú también habrías sonreído.

Estas cartas han sido mi refugio, mi forma de sentirte cerca cuando la distancia se interponía entre nosotros. En cada línea, en cada palabra, está impreso mi amor por ti.

Algunas cartas son simples: descripciones de mi día a día, cosas cotidianas que quería compartir contigo. Otras son profundas reflexiones sobre el amor, la vida y el tiempo. Todas tienen algo en común: tú eres su destinataria, su razón de ser.

Quizás algún día te muestre estos cuadernos, estas cartas que nunca envié. O quizás no sea necesario, porque ahora tengo la oportunidad de decirte en persona todo lo que mi corazón siente.

De cualquier forma, saber que existen, que hay un testimonio tangible de mi amor por ti a lo largo de los años, me reconforta. Es la prueba de que, incluso en los momentos de mayor separación, nunca dejé de pensar en ti.

Con todo mi amor,
Kevin
    `,
    publishedAt: new Date("2023-02-20T15:30:00Z").toISOString(),
    updatedAt: new Date("2023-02-20T15:30:00Z").toISOString(),
    image: "https://placehold.co/800x450/f5eee6/6b563a?text=Cartas+No+Enviadas",
    tags: [
      { id: "2", name: "amor" },
      { id: "3", name: "pensamientos" }
    ],
    featured: false
  },
  {
    id: generateId(),
    title: "Nuestro lugar especial",
    slug: "nuestro-lugar-especial",
    description: "Ese rincón del mundo que se convirtió en nuestro santuario personal.",
    content: `
# Nuestro lugar especial

Hay lugares en el mundo que se vuelven mágicos no por su belleza intrínseca, sino por los momentos que vivimos en ellos. Nuestro lugar especial es uno de esos sitios.

No es un lugar espectacular según los estándares convencionales. No tiene vistas panorámicas impresionantes ni arquitectura fastuosa. Es simplemente un rincón tranquilo que, de alguna manera, el destino reservó para nosotros.

La primera vez que fuimos allí fue por casualidad. Un cambio de planes, un desvío inesperado... y de repente, estábamos descubriendo ese espacio que parecía estar esperándonos.

Con el tiempo, ese lugar se convirtió en nuestro santuario. El sitio donde compartimos secretos, donde nos refugiábamos del mundo, donde nuestros corazones se sincronizaban al mismo ritmo.

Era allí donde el tiempo parecía detenerse. Donde las preocupaciones se desvanecían y solo existíamos tú y yo, inmersos en nuestra burbuja de felicidad.

Ahora, incluso cuando no podemos visitarlo físicamente, ese lugar vive en nuestros recuerdos. Está presente en nuestras conversaciones, en nuestras risas, en esos momentos en que nos miramos y sabemos exactamente lo que el otro está pensando.

Nuestro lugar especial es más que un espacio físico; es un estado del alma. Un testimonio de lo que somos juntos y de lo que hemos construido.

Y por eso, siempre será nuestro refugio, nuestro hogar compartido, nuestro pedacito de cielo en la tierra.
    `,
    publishedAt: new Date("2023-03-10T09:45:00Z").toISOString(),
    updatedAt: new Date("2023-03-10T09:45:00Z").toISOString(),
    image: "https://placehold.co/800x450/f5eee6/6b563a?text=Nuestro+Lugar+Especial",
    tags: [
      { id: "1", name: "recuerdos" },
      { id: "4", name: "lugares" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Lo que aprendo de ti cada día",
    slug: "lo-que-aprendo-de-ti-cada-dia",
    description: "Cómo tu presencia en mi vida me transforma y me hace crecer.",
    content: `
# Lo que aprendo de ti cada día

Dicen que las personas más importantes en nuestra vida son aquellas que nos inspiran a ser mejores. Si es así, tú eres, sin duda, la persona más importante en la mía.

Cada día aprendo algo nuevo de ti. De tu paciencia cuando el mundo parece ir demasiado rápido. De tu fortaleza cuando enfrentas desafíos que harían tambalearse a cualquiera. De tu empatía cuando escuchas y comprendes sin juzgar.

Me enseñas a ver la belleza en lo simple, en lo cotidiano. A encontrar alegría en los pequeños momentos. A valorar el presente y no preocuparme tanto por el futuro.

Aprendo de tu autenticidad, de cómo eres fiel a ti misma sin importar las circunstancias. De cómo defiendes tus convicciones y, al mismo tiempo, estás abierta a nuevas ideas y perspectivas.

Contigo, he aprendido que el amor no es solo un sentimiento, sino una decisión que se toma cada día. Es elegir estar presente, apoyar, escuchar, comprender, perdonar.

También me has enseñado sobre mí mismo. A reconocer mis fortalezas y aceptar mis debilidades. A ser más paciente, más compasivo, más consciente.

Cada conversación, cada risas, cada lágrima compartida es una lección de vida que atesoro. Y aunque a veces el aprendizaje viene con desafíos, sé que al final del día, crezco y evoluciono gracias a tu presencia en mi vida.

Por todo lo que me enseñas, por toda la sabiduría que compartes, por cómo me inspiras a ser mejor: gracias.
    `,
    publishedAt: new Date("2023-04-05T14:20:00Z").toISOString(),
    updatedAt: new Date("2023-04-05T14:20:00Z").toISOString(),
    image: "https://placehold.co/800x450/f5eee6/6b563a?text=Aprendizaje+Diario",
    tags: [
      { id: "2", name: "amor" },
      { id: "5", name: "crecimiento" }
    ],
    featured: false
  },
  {
    id: generateId(),
    title: "La distancia y nosotros",
    slug: "la-distancia-y-nosotros",
    description: "Reflexiones sobre cómo enfrentamos los kilómetros que nos separan y cómo nuestro amor se fortalece a pesar de ello.",
    content: `
# La distancia y nosotros

La distancia física es una realidad en nuestra relación que hemos aprendido a enfrentar. Kilómetros de carreteras, ciudades enteras, a veces incluso países se interponen entre nosotros. Pero si algo hemos descubierto, es que la verdadera cercanía no se mide en metros o kilómetros.

En los días en que te extraño más intensamente, recuerdo las palabras de Antoine de Saint-Exupéry: "Si estás a las tres de la tarde, comenzaré a ser feliz desde las dos. Cuanto más avance la hora, más feliz me sentiré." La anticipación de volver a verte convierte la espera en una dulce agonía.

Hemos aprendido a valorar cada momento juntos, a aprovechar cada minuto como si fuera un tesoro invaluable. La distancia nos ha enseñado que no hay que dar por sentado el tiempo compartido.

Las videollamadas, los mensajes, las cartas... se han convertido en nuestros puentes, en las formas de mantenernos conectados a pesar de la separación física. Y aunque nada reemplaza el calor de tu abrazo o la dulzura de tu beso, estos pequeños gestos mantienen viva nuestra conexión.

A veces, la distancia duele. Hay noches en que miro el espacio vacío a mi lado y siento un peso en el pecho. Pero luego recuerdo que este es solo un capítulo en nuestra historia, no el libro completo.

La distancia ha fortalecido nuestro amor, lo ha hecho más resiliente, más consciente. Nos ha obligado a comunicarnos mejor, a expresar nuestros sentimientos con mayor claridad, a no dejar palabras importantes sin decir.

Y aunque los kilómetros nos separen físicamente, nuestros corazones siempre están en el mismo lugar: junto al otro, latiendo al mismo ritmo, compartiendo la misma canción de amor.
    `,
    publishedAt: new Date("2023-05-12T18:00:00Z").toISOString(),
    updatedAt: new Date("2023-05-12T18:00:00Z").toISOString(),
    image: "https://placehold.co/800x450/f5eee6/6b563a?text=Distancia+y+Amor",
    tags: [
      { id: "2", name: "amor" },
      { id: "6", name: "distancia" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Promesas para nuestro futuro",
    slug: "promesas-para-nuestro-futuro",
    description: "Los sueños que tengo para nosotros y las promesas que hago para nuestro camino juntos.",
    content: `
# Promesas para nuestro futuro

Mientras miro hacia el horizonte de nuestra vida juntos, mi corazón se llena de esperanza y anticipación. El futuro se despliega ante nosotros como un lienzo en blanco, esperando a ser pintado con los colores de nuestros sueños compartidos.

Te prometo estar allí en cada paso del camino. En los momentos de alegría, para celebrar tus éxitos como si fueran míos. En los tiempos difíciles, para ofrecerte mi fuerza cuando la tuya flaquee.

Prometo recordar siempre los pequeños detalles: cómo te gusta el café por la mañana, la canción que te hace sonreír, el libro que estás leyendo. Porque son esos pequeños detalles los que construyen la intimidad y la complicidad que compartimos.

Te prometo escuchar no solo tus palabras, sino también los silencios entre ellas. Estar atento a lo que no dices, a esos pensamientos que a veces no encuentran el camino hacia la expresión verbal.

Prometo seguir sorprendiéndote, mantener viva la chispa, encontrar nuevas formas de hacerte sentir amada cada día. No dejar que la rutina apague el fuego de nuestra pasión.

Te prometo respetar tu individualidad, tus sueños y aspiraciones personales. Apoyarte en tus proyectos, alentarte en tus metas, ser tu mayor fan en todo lo que emprendas.

Prometo crecer contigo y permitir que crezcas por tu cuenta cuando lo necesites. Evolucionar juntos, adaptarnos a los cambios que la vida nos presente, fortalecer nuestro vínculo con cada experiencia compartida.

Y, sobre todo, te prometo amor. Un amor constante, paciente, resiliente. Un amor que no se rinde ante las dificultades, que encuentra siempre el camino de regreso a casa, que se renueva cada mañana con el primer pensamiento que tengo al despertar: tú.

Estas son mis promesas para nuestro futuro. Un futuro que construiremos juntos, día a día, promesa a promesa, sueño a sueño.
    `,
    publishedAt: new Date("2023-06-25T10:15:00Z").toISOString(),
    updatedAt: new Date("2023-06-25T10:15:00Z").toISOString(),
    image: "https://placehold.co/800x450/f5eee6/6b563a?text=Promesas+de+Futuro",
    tags: [
      { id: "2", name: "amor" },
      { id: "7", name: "futuro" }
    ],
    featured: false
  }
];

export const localPostsApi = {
  getPosts: ({ limit = 10, page = 1 }): Promise<LocalPostsResult> => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const posts = localPosts.slice(startIndex, endIndex);
    
    return Promise.resolve({
      posts,
      pagination: {
        totalPosts: localPosts.length,
        totalPages: Math.ceil(localPosts.length / limit),
        page,
        limit
      }
    });
  },
  
  getPost: ({ slug }: { slug: string }): Promise<LocalPostResult> => {
    const post = localPosts.find(p => p.slug === slug);
    
    if (!post) {
      return Promise.reject(new Error(`Post with slug "${slug}" not found`));
    }
    
    return Promise.resolve({
      post,
      relatedPosts: localPosts
        .filter(p => p.id !== post.id)
        .slice(0, 3)
    });
  },
  
  getPostByTag: ({ tag, limit = 10, page = 1 }: { tag: string, limit?: number, page?: number }): Promise<LocalPostsResult> => {
    const postsWithTag = localPosts.filter(post => 
      post.tags.some(t => t.name.toLowerCase() === tag.toLowerCase())
    );
    
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const posts = postsWithTag.slice(startIndex, endIndex);
    
    return Promise.resolve({
      posts,
      pagination: {
        totalPosts: postsWithTag.length,
        totalPages: Math.ceil(postsWithTag.length / limit),
        page,
        limit
      }
    });
  }
}; 