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
  carouselImages?: string[];
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
    title: "El día que te conocí",
    slug: "el-dia-que-te-conoci",
    description: "La historia de nuestro primer encuentro y cómo cambió todo.",
    content: `
# El día que te conocí

Aún recuerdo ese día como si fuera ayer. El destino, o quizás la casualidad, nos puso en el mismo lugar en el momento perfecto. Tu sonrisa iluminó la habitación y supe que algo especial estaba por comenzar.

Nuestras miradas se cruzaron y el tiempo pareció detenerse. En ese instante, aunque no lo sabía conscientemente, mi vida cambió para siempre. Tu forma de hablar, tu risa contagiosa, tu manera de ver el mundo... todo en ti me cautivó desde el primer momento.

Ese día marcó el inicio de nuestra historia, una historia que continúa escribiéndose con cada momento que compartimos juntos.
    `,
    publishedAt: new Date("2023-01-15").toISOString(),
    updatedAt: new Date("2023-01-15").toISOString(),
    image: "/images/blog/lo-que-no-sospechamos/carousel1-1.jpg",
    carouselImages: [
      "/images/blog/lo-que-no-sospechamos/primer-encuentro-1.jpg",
      "/images/blog/lo-que-no-sospechamos/primer-encuentro-2.jpg",
      "/images/blog/lo-que-no-sospechamos/primer-encuentro-2.jpg"
    ],
    tags: [
      { id: "1", name: "recuerdos" },
      { id: "2", name: "amor" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Nuestras primeras aventuras",
    slug: "nuestras-primeras-aventuras",
    description: "Los momentos que compartimos al inicio de nuestra historia.",
    content: `
# Nuestras primeras aventuras

Cada salida contigo era una nueva aventura. Desde paseos improvisados hasta planes elaborados, cada momento juntos estaba lleno de risas, descubrimientos y conexiones más profundas.

Recuerdo especialmente nuestros paseos por el parque, nuestras conversaciones interminables y esos momentos en que el mundo parecía detenerse solo para nosotros.
    `,
    publishedAt: new Date("2023-02-01").toISOString(),
    updatedAt: new Date("2023-02-01").toISOString(),
    image: "/images/blog/aventuras.jpg",
    carouselImages: [
      "/images/blog/carousel-2-1.jpg",
      "/images/blog/carousel-2-2.jpg",
      "/images/blog/carousel-2-3.jpg"
    ],
    tags: [
      { id: "1", name: "recuerdos" },
      { id: "3", name: "aventuras" }
    ],
    featured: false
  },
  {
    id: generateId(),
    title: "Los pequeños momentos",
    slug: "los-pequenos-momentos",
    description: "Esos instantes cotidianos que hacen especial nuestra relación.",
    content: `
# Los pequeños momentos

Son los pequeños momentos los que construyen una historia de amor. Las miradas cómplices, los mensajes inesperados, los abrazos sorpresa... cada detalle suma a nuestra historia.

He aprendido a valorar cada instante contigo, desde las mañanas tranquilas hasta las noches de conversaciones profundas.
    `,
    publishedAt: new Date("2023-02-15").toISOString(),
    updatedAt: new Date("2023-02-15").toISOString(),
    image: "/images/blog/momentos.jpg",
    carouselImages: [
      "/images/blog/carousel-3-1.jpg",
      "/images/blog/carousel-3-2.jpg",
      "/images/blog/carousel-3-3.jpg"
    ],
    tags: [
      { id: "2", name: "amor" },
      { id: "4", name: "cotidiano" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Nuestros lugares especiales",
    slug: "nuestros-lugares-especiales",
    description: "Los rincones que se han vuelto parte de nuestra historia.",
    content: `
# Nuestros lugares especiales

Hay lugares que se vuelven mágicos porque los compartimos contigo. Ese café donde tuvimos nuestra primera cita, el parque donde pasamos tardes enteras, el banco donde nos sentamos a ver el atardecer...

Cada lugar guarda memorias únicas de nosotros, momentos que han construido nuestra historia de amor.
    `,
    publishedAt: new Date("2023-03-01").toISOString(),
    updatedAt: new Date("2023-03-01").toISOString(),
    image: "/images/blog/lugares.jpg",
    carouselImages: [
      "/images/blog/carousel-4-1.jpg",
      "/images/blog/carousel-4-2.jpg",
      "/images/blog/carousel-4-3.jpg"
    ],
    tags: [
      { id: "1", name: "recuerdos" },
      { id: "5", name: "lugares" }
    ],
    featured: false
  },
  {
    id: generateId(),
    title: "Nuestras risas compartidas",
    slug: "nuestras-risas-compartidas",
    description: "Los momentos de alegría que llenan nuestra vida juntos.",
    content: `
# Nuestras risas compartidas

Tu risa es mi sonido favorito. Cada vez que escucho tu carcajada, mi corazón se llena de alegría. Hemos compartido tantos momentos divertidos, tantas bromas internas, tantas situaciones que solo nosotros entendemos...

Esos momentos de risa son los que hacen nuestra relación única y especial.
    `,
    publishedAt: new Date("2023-03-15").toISOString(),
    updatedAt: new Date("2023-03-15").toISOString(),
    image: "/images/blog/risas.jpg",
    carouselImages: [
      "/images/blog/carousel-5-1.jpg",
      "/images/blog/carousel-5-2.jpg",
      "/images/blog/carousel-5-3.jpg"
    ],
    tags: [
      { id: "2", name: "amor" },
      { id: "6", name: "felicidad" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Nuestros sueños juntos",
    slug: "nuestros-suenos-juntos",
    description: "Los planes y esperanzas que compartimos para el futuro.",
    content: `
# Nuestros sueños juntos

Cada vez que hablamos del futuro, mis ojos brillan con ilusión. Tenemos tantos sueños compartidos, tantos planes por realizar, tantas aventuras por vivir...

Me encanta soñar contigo, planear nuestro futuro y visualizar todo lo que podemos lograr juntos.
    `,
    publishedAt: new Date("2023-04-01").toISOString(),
    updatedAt: new Date("2023-04-01").toISOString(),
    image: "/images/blog/suenos.jpg",
    carouselImages: [
      "/images/blog/carousel-6-1.jpg",
      "/images/blog/carousel-6-2.jpg",
      "/images/blog/carousel-6-3.jpg"
    ],
    tags: [
      { id: "2", name: "amor" },
      { id: "7", name: "futuro" }
    ],
    featured: false
  },
  {
    id: generateId(),
    title: "Nuestras tradiciones",
    slug: "nuestras-tradiciones",
    description: "Las costumbres especiales que hemos creado juntos.",
    content: `
# Nuestras tradiciones

Con el tiempo, hemos creado nuestras propias tradiciones. Esos pequeños rituales que hacen especial nuestra relación: las cenas de los viernes, los mensajes de buenos días, los paseos de domingo...

Estas tradiciones son el tejido que forma nuestra historia de amor.
    `,
    publishedAt: new Date("2023-04-15").toISOString(),
    updatedAt: new Date("2023-04-15").toISOString(),
    image: "/images/blog/tradiciones.jpg",
    carouselImages: [
      "/images/blog/carousel-7-1.jpg",
      "/images/blog/carousel-7-2.jpg",
      "/images/blog/carousel-7-3.jpg"
    ],
    tags: [
      { id: "2", name: "amor" },
      { id: "8", name: "tradiciones" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Nuestros desafíos superados",
    slug: "nuestros-desafios-superados",
    description: "Los obstáculos que hemos vencido juntos.",
    content: `
# Nuestros desafíos superados

Cada relación enfrenta sus propios desafíos, y la nuestra no ha sido la excepción. Pero lo importante no son los obstáculos, sino cómo los hemos superado juntos.

Cada desafío nos ha hecho más fuertes, más unidos y más seguros de nuestro amor.
    `,
    publishedAt: new Date("2023-05-01").toISOString(),
    updatedAt: new Date("2023-05-01").toISOString(),
    image: "/images/blog/desafios.jpg",
    carouselImages: [
      "/images/blog/carousel-8-1.jpg",
      "/images/blog/carousel-8-2.jpg",
      "/images/blog/carousel-8-3.jpg"
    ],
    tags: [
      { id: "2", name: "amor" },
      { id: "9", name: "superación" }
    ],
    featured: false
  },
  {
    id: generateId(),
    title: "Nuestros momentos de crecimiento",
    slug: "nuestros-momentos-de-crecimiento",
    description: "Cómo hemos crecido y evolucionado juntos.",
    content: `
# Nuestros momentos de crecimiento

Ver cómo hemos crecido juntos es una de las experiencias más hermosas. Cada uno ha evolucionado a su manera, pero siempre apoyándonos mutuamente.

Me enorgullece ver en quién te has convertido y cómo seguimos creciendo juntos.
    `,
    publishedAt: new Date("2023-05-15").toISOString(),
    updatedAt: new Date("2023-05-15").toISOString(),
    image: "/images/blog/crecimiento.jpg",
    carouselImages: [
      "/images/blog/creciendo/IMG-20240327-WA0028.jpg",
      "/images/blog/creciendo/IMG-20240327-WA0029.jpg",
      "/images/blog/creciendo/IMG-20240421-WA0012.jpg"
    ],
    tags: [
      { id: "2", name: "amor" },
      { id: "10", name: "crecimiento" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Nuestras celebraciones",
    slug: "nuestras-celebraciones",
    description: "Los momentos especiales que hemos festejado juntos.",
    content: `
# Nuestras celebraciones

Cada celebración contigo es única. Desde los grandes acontecimientos hasta los pequeños logros, me encanta festejar la vida a tu lado.

Tus éxitos son mis alegrías, y compartir estos momentos de celebración hace nuestra relación más especial.
    `,
    publishedAt: new Date("2023-06-01").toISOString(),
    updatedAt: new Date("2023-06-01").toISOString(),
    image: "/images/blog/celebraciones.jpg",
    carouselImages: [
      "/images/blog/carousel-10-1.jpg",
      "/images/blog/carousel-10-2.jpg",
      "/images/blog/carousel-10-3.jpg"
    ],
    tags: [
      { id: "2", name: "amor" },
      { id: "11", name: "celebraciones" }
    ],
    featured: false
  },
  {
    id: generateId(),
    title: "Nuestros viajes juntos",
    slug: "nuestros-viajes-juntos",
    description: "Las aventuras que hemos vivido en diferentes lugares.",
    content: `
# Nuestros viajes juntos

Cada viaje contigo es una nueva aventura. Descubrir nuevos lugares, crear memorias en diferentes rincones del mundo, compartir experiencias únicas...

Estos viajes han fortalecido nuestra conexión y nos han regalado recuerdos inolvidables.
    `,
    publishedAt: new Date("2023-06-15").toISOString(),
    updatedAt: new Date("2023-06-15").toISOString(),
    image: "/images/blog/viajes.jpg",
    carouselImages: [
      "/images/blog/nuestro-primer-viaje/IMG-20240714-WA0013.jpg",
      "/images/blog/nuestro-primer-viaje/IMG_20240712_030209.jpg",
      "/images/blog/nuestro-primer-viaje/IMG_20240712_030215.jpg"
    ],
    tags: [
      { id: "3", name: "aventuras" },
      { id: "12", name: "viajes" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Nuestros proyectos compartidos",
    slug: "nuestros-proyectos-compartidos",
    description: "Las metas y sueños que estamos construyendo juntos.",
    content: `
# Nuestros proyectos compartidos

Trabajar juntos en proyectos comunes ha sido una experiencia increíble. Ver cómo nuestras ideas se complementan, cómo unimos fuerzas para alcanzar metas...

Cada proyecto es una nueva oportunidad para crecer y fortalecer nuestra relación.
    `,
    publishedAt: new Date("2023-07-01").toISOString(),
    updatedAt: new Date("2023-07-01").toISOString(),
    image: "/images/blog/proyectos.jpg",
    carouselImages: [
      "/images/blog/carousel-12-1.jpg",
      "/images/blog/carousel-12-2.jpg",
      "/images/blog/carousel-12-3.jpg"
    ],
    tags: [
      { id: "2", name: "amor" },
      { id: "13", name: "proyectos" }
    ],
    featured: false
  },
  {
    id: generateId(),
    title: "Nuestro amor en palabras",
    slug: "nuestro-amor-en-palabras",
    description: "Una recopilación de pensamientos y sentimientos sobre nuestro amor.",
    content: `
# Nuestro amor en palabras

A veces las palabras no son suficientes para expresar todo lo que siento por ti, pero intentaré plasmar en estas líneas la profundidad de nuestro amor.

Cada día descubro nuevas razones para amarte, nuevas formas de ver la vida a través de tus ojos.
    `,
    publishedAt: new Date("2023-07-15").toISOString(),
    updatedAt: new Date("2023-07-15").toISOString(),
    image: "/images/blog/amor-palabras.jpg",
    carouselImages: [
      "/images/blog/carousel-13-1.jpg",
      "/images/blog/carousel-13-2.jpg",
      "/images/blog/carousel-13-3.jpg"
    ],
    tags: [
      { id: "2", name: "amor" },
      { id: "14", name: "reflexiones" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Mi sorpresa",
    slug: "mi-sorpresa",
    description: "Una sorpresa que me hizo sentir muy feliz",
    content: `
# Mi sorpresa

Fue una sorpresa que me hizo sentir muy feliz.
    `,
    publishedAt: new Date("2024-06-29").toISOString(),
    updatedAt: new Date("2024-06-29").toISOString(),
    image: "/images/blog/mi-sorpresa/IMG_20240629_004516.jpg",
    carouselImages: [
      "/images/blog/mi-sorpresa/IMG_20240629_004525.jpg",
      "/images/blog/mi-sorpresa/IMG_20240929_145831.jpg",
      "/images/blog/mi-sorpresa/IMG_20240929_145832.jpg"
    ],
    tags: [
      { id: "15", name: "sorpresa" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Quedarme por amor",
    slug: "quedarme-por-amor",
    description: "Una decisión que tomé por amor",
    content: `
# Quedarme por amor

Fue una decisión que tomé por amor.
    `,
    publishedAt: new Date("2024-12-01").toISOString(),
    updatedAt: new Date("2024-12-01").toISOString(),
    image: "/images/blog/quedarme-por-amor/IMG_20241201_192033.jpg",
    carouselImages: [
      "/images/blog/quedarme-por-amor/IMG_20241201_192033.jpg",
      "/images/blog/quedarme-por-amor/IMG_20241201_192033.jpg",
      "/images/blog/quedarme-por-amor/IMG_20241201_192033.jpg"
    ],
    tags: [
      { id: "16", name: "amor" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Queriendo lo que no pediste",
    slug: "queriendo-lo-que-no-pediste",
    description: "Una situación que me encontré",
    content: `
# Queriendo lo que no pediste

Fue una situación que me encontré.
    `,
    publishedAt: new Date("2025-03-10").toISOString(),
    updatedAt: new Date("2025-03-10").toISOString(),
    image: "/images/blog/queriendo-lo-que-no-pediste/IMG-20250310-WA0044.jpg",
    carouselImages: [
      "/images/blog/queriendo-lo-que-no-pediste/IMG-20250310-WA0044.jpg",
      "/images/blog/queriendo-lo-que-no-pediste/IMG-20250310-WA0044.jpg",
      "/images/blog/queriendo-lo-que-no-pediste/IMG-20250310-WA0044.jpg"
    ],
    tags: [
      { id: "17", name: "amor" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Diciembre y disfrutar",
    slug: "diciembre-y-disfrutar",
    description: "Una época que me encanta",
    content: `
# Diciembre y disfrutar

Fue una época que me encanta.
    `,
    publishedAt: new Date("2024-12-05").toISOString(),
    updatedAt: new Date("2024-12-05").toISOString(),
    image: "/images/blog/diciembre-y-disfrutar/IMG-20241205-WA0111.jpg",
    carouselImages: [
      "/images/blog/diciembre-y-disfrutar/IMG-20241205-WA0118.jpg",
      "/images/blog/diciembre-y-disfrutar/IMG-20241206-WA0110.jpg",
      "/images/blog/diciembre-y-disfrutar/IMG-20241206-WA0112.jpg"
    ],
    tags: [
      { id: "18", name: "amor" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Perderlo todo",
    slug: "perderlo-todo",
    description: "Una situación que me hizo sentir muy triste",
    content: `
# Perderlo todo

Fue una situación que me hizo sentir muy triste.
    `,
    publishedAt: new Date("2024-12-27").toISOString(),
    updatedAt: new Date("2024-12-27").toISOString(),
    image: "/images/blog/perderlo-todo/IMG-20241227-WA0023.jpg",
    carouselImages: [
      "/images/blog/perderlo-todo/IMG-20241227-WA0023.jpg",
      "/images/blog/perderlo-todo/IMG-20241227-WA0029.jpg",
      "/images/blog/perderlo-todo/IMG-20241227-WA0029.jpg"
    ],
    tags: [
      { id: "19", name: "amor" }
    ],
    featured: true
  },
  {
    id: generateId(),
    title: "Lo que no tiene palabras",
    slug: "lo-que-no-tiene-palabras",
    description: "Una situación que me hizo sentir muy feliz",
    content: `
# Lo que no tiene palabras

Fue una situación que me hizo sentir muy feliz.
    `,
    publishedAt: new Date("2025-03-16").toISOString(),
    updatedAt: new Date("2025-03-16").toISOString(),
    image: "/images/blog/lo-que-no-tiene-palabras/IMG_20250316_185035.jpg",
    carouselImages: [
      "/images/blog/lo-que-no-tiene-palabras/IMG_20250316_185035.jpg",
      "/images/blog/lo-que-no-tiene-palabras/IMG_20250316_185035.jpg",
      "/images/blog/lo-que-no-tiene-palabras/IMG_20250316_185035.jpg"
    ],
    tags: [
      { id: "20", name: "amor" }
    ],
    featured: true
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