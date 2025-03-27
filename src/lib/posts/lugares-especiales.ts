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

Hay lugares que se vuelven mágicos porque los compartimos contigo. Ese café donde tuvimos nuestra primera cita, el parque donde pasamos tardes enteras, el banco donde nos sentamos a ver el atardecer...

Cada lugar guarda memorias únicas de nosotros, momentos que han construido nuestra historia de amor.
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