import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';
import { getPostImagePath } from '../image-utils';

// Slug for this post
const SLUG = 'quedarme-por-amor';

// Define post data
export const quedarmePorAmor: LocalPost = {
  id: generateId(),
  title: "Quedarme por amor",
  slug: SLUG,
  description: "Cuando decidí que el amor vale cada sacrificio.",
  content: `
# Quedarme por amor

no tenemos dia de aniversario... se nos paso anotar ese dia por que la estabamos viviendo intensamente.

tampoco hay fotos que lo reflejen certeramente... pero eso paso... amarte me dio sentido, amarte y que me ames me curo que decirte.

me daba fuerzas alimentaba mi alma y decidi quedarme a hacerlo posible.

a generar los proyectos a tratar de hacerte feliz a tratar de hacer un camino para nosotros.

yo necesitaba o queria cierta forma de camino basado en lo que yo vivi 

por este momento no sabia como haria para quedarme pero estaba dispuesto a hacer cualquier cosa, incluso atender clientes jaja algo que no me gusta y veriamos en el futuro que pasa pero a no adelantarme...

te anaba cada dia y vos a mi y yo no estaba dispuesto a renunciar a eso me quede a pelear y no podia solo asi que un poco te arrastre tambien fuimos cayendo en el amor.

los teatros, las risas, los momentos, las conversaciones, los besos, los abrazos, los momentos en que te vi sonreir.

pero especialmente aca empezo ese no se que que no podemos explicar que aun vive y espero que siga asi.

aunque ya nose que pasara con nosotros...

  `,
  publishedAt: new Date("2024-12-01").toISOString(),
  updatedAt: new Date("2024-12-01").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: [
    getPostImagePath(SLUG, '1.jpg'),
    getPostImagePath(SLUG, '2.jpg'),
    getPostImagePath(SLUG, '3.jpg'),
    getPostImagePath(SLUG, '4.jpg'),
    getPostImagePath(SLUG, '5.jpg'),
    
  ],
  tags: [
    { id: "2", name: "amor" },
    { id: "17", name: "decisiones" }
  ],
  featured: true
}; 