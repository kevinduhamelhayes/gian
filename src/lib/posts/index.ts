import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';

// Import individual post data
import { elDiaQueTeConoci } from './el-dia-que-te-conoci';
import { pequenosMomentos } from './pequenos-momentos';
import { lugaresEspeciales } from './lugares-especiales';
import { vertefeliz } from './verte-feliz';
import { creciendo } from './creciendo';
import { nuestroPrimerViaje } from './nuestro-primer-viaje';
import { nuestroPrimer } from './nuestro-primer';
import { loQueNoTienePalabras } from './lo-que-no-tiene-palabras';
import { perderloTodo } from './perderlo-todo';
import { queriendoLoQueNoPediste } from './queriendo-lo-que-no-pediste';
import { quedarmePorAmor } from './quedarme-por-amor';
import { miSorpresa } from './mi-sorpresa';
import { loQueNoSospechamos } from './lo-que-no-sospechamos';
import { diciembreYDisfrutar } from './diciembre-y-disfrutar';

/**
 * Lista de posts sin ordenar
 * Añade o quita posts de esta lista según sea necesario
 */
const allPosts: LocalPost[] = [
  loQueNoSospechamos, // Este post debe aparecer primero
  elDiaQueTeConoci,
  pequenosMomentos,
  lugaresEspeciales,
  vertefeliz,
  creciendo,
  nuestroPrimerViaje,
  nuestroPrimer,
  loQueNoTienePalabras,
  perderloTodo,
  queriendoLoQueNoPediste,
  quedarmePorAmor,
  miSorpresa,
  diciembreYDisfrutar
];

/**
 * Orden personalizado para los posts en la página principal
 * 
 * INSTRUCCIONES PARA MODIFICAR EL ORDEN:
 * 1. Asigna un valor numérico a cada slug, donde números más bajos aparecen primero
 * 2. Los slugs no incluidos en este objeto se ordenarán después por fecha de publicación
 * 3. Si dos posts tienen el mismo valor, se ordenarán por fecha de publicación
 * 
 * Ejemplo: { "post-mas-importante": 1, "segundo-post": 2, "tercer-post": 3 }
 */
const customOrder: Record<string, number> = {
  "lo-que-no-sospechamos": 1,  // Aparecerá primero
  "el-dia-que-te-conoci": 2,   // Aparecerá segundo
  "nuestro-primer-viaje": 3,   // Aparecerá tercero
  "verte-feliz": 4,            // Aparecerá cuarto
  // Añade más posts aquí para controlar su orden
};

/**
 * Ordena los posts según el orden personalizado y luego por fecha
 * @param posts - Array de posts a ordenar
 * @returns Array ordenado según customOrder y luego por fecha de publicación (más recientes primero)
 */
const sortPosts = (posts: LocalPost[]): LocalPost[] => {
  return [...posts].sort((a, b) => {
    // Primero, comprueba si ambos posts tienen un orden personalizado
    const orderA = customOrder[a.slug] || Number.MAX_SAFE_INTEGER;
    const orderB = customOrder[b.slug] || Number.MAX_SAFE_INTEGER;
    
    // Si los órdenes son diferentes, ordena por ellos
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    
    // Si los órdenes son iguales o no existen, ordena por fecha de publicación (más recientes primero)
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });
};

// Exporta los posts ordenados
export const localPosts: LocalPost[] = sortPosts(allPosts); 