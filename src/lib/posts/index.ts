import { LocalPost } from '../local-posts';
import { generateId } from '../utils/id-utils';

// Import individual post data
import { elDiaQueTeConoci } from './el-dia-que-te-conoci';
import { elFin } from './el-fin';
import { palabrasAntesDePartir } from './palabrasAntesDePartir';
import { vertefeliz } from './verte-feliz';
import { creciendo } from './creciendo';
import { nuestroPrimerViaje } from './nuestro-primer-viaje';
import { crujiamos } from './crujiamos';
import { loQueNoTienePalabras } from './lo-que-no-tiene-palabras';
import { perderloTodo } from './perderlo-todo';
import { queriendoLoQueNoPediste } from './queriendo-lo-que-no-pediste';
import { quedarmePorAmor } from './quedarme-por-amor';
import { miSorpresa } from './mi-sorpresa';
import { loQueNoSospechamos } from './lo-que-no-sospechamos';
import { diciembreYDisfrutar } from './diciembre-y-disfrutar';

/**
 * Lista de posts en el orden establecido por defecto.
 * Este orden se usa como base pero puede ser modificado por la función de ordenamiento.
 */
const allPosts: LocalPost[] = [
  loQueNoSospechamos, // Este post debe aparecer primero
  elDiaQueTeConoci,
  miSorpresa,
  vertefeliz,
  nuestroPrimerViaje,
  elFin,
  palabrasAntesDePartir,
  crujiamos,
  quedarmePorAmor,
  creciendo,
  queriendoLoQueNoPediste,
  diciembreYDisfrutar,
  perderloTodo,
  loQueNoTienePalabras
  
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
  "el-dia-que-te-conoci": 2,
  "mi-sorpresa": 3,
  "verte-feliz": 4,
  "nuestro-primer-viaje": 5,
  "quedarme-por-amor": 6,
  "creciendo": 7,
  "crujiamos": 8,
  "queriendo-lo-que-no-pediste": 9,
  "diciembre-y-disfrutar": 10,
  "perderlo-todo": 11,
  "lo-que-no-tiene-palabras": 12,
  "palabras-antes-de-partir": 13,
  "el-fin": 14,
  // Añade más posts aquí para controlar su orden
};

/**
 * Opciones para ordenar los posts
 */
export interface SortOptions {
  /** Si es true, invierte el orden final de los posts */
  reverse?: boolean;
  /** Si es false, ignora el orden personalizado y solo ordena por fecha */
  useCustomOrder?: boolean;
}

/**
 * Ordena los posts según el orden personalizado y luego por fecha
 * @param posts - Array de posts a ordenar
 * @param options - Opciones de ordenamiento
 * @returns Array ordenado según las opciones especificadas
 */
export const sortPosts = (posts: LocalPost[], options: SortOptions = {}): LocalPost[] => {
  const { reverse = false, useCustomOrder = true } = options;
  
  let sortedPosts = [...posts].sort((a, b) => {
    if (useCustomOrder) {
      // Primero, comprueba si ambos posts tienen un orden personalizado
      const orderA = customOrder[a.slug] || Number.MAX_SAFE_INTEGER;
      const orderB = customOrder[b.slug] || Number.MAX_SAFE_INTEGER;
      
      // Si los órdenes son diferentes, ordena por ellos
      if (orderA !== orderB) {
        return orderA - orderB;
      }
    }
    
    // Si los órdenes son iguales o no existen, o si useCustomOrder es false,
    // ordena por fecha de publicación (más recientes primero)
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });
  
  // Si se solicita invertir el orden, se invierte el array
  if (reverse) {
    sortedPosts = sortedPosts.reverse();
  }
  
  return sortedPosts;
};

// Exporta los posts ordenados con la configuración por defecto
export const localPosts: LocalPost[] = sortPosts(allPosts);

// También exporta el array original para quienes necesiten acceso a los posts sin ordenar
export const originalPosts: LocalPost[] = allPosts; 