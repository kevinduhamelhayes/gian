/**
 * Sistema de gestión de posts local para el blog
 * Este archivo proporciona una API simulada para manejar posts sin necesidad de una base de datos
 */

// Import necessary utilities
import { generateId } from './utils/id-utils';

/**
 * Estructura de datos para un post individual del blog
 * @property {string} id - Identificador único del post
 * @property {string} title - Título del post
 * @property {string} slug - Identificador amigable para URL
 * @property {string} description - Descripción corta o extracto
 * @property {string} content - Contenido completo en formato Markdown
 * @property {string} publishedAt - Fecha de publicación en formato ISO
 * @property {string} updatedAt - Fecha de última actualización en formato ISO
 * @property {string} image - Ruta a la imagen principal del post
 * @property {string[]} carouselImages - Rutas a imágenes adicionales para el carrusel
 * @property {Array<Object>} tags - Etiquetas asociadas al post
 * @property {boolean} featured - Indica si el post debe destacarse
 */
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

/**
 * Resultado de una consulta de múltiples posts con paginación
 * @property {LocalPost[]} posts - Array de posts para la página actual
 * @property {Object} pagination - Información sobre la paginación
 */
export interface LocalPostsResult {
  posts: LocalPost[];
  pagination: {
    totalPosts: number;
    totalPages: number;
    page: number;
    limit: number;
  };
}

/**
 * Resultado de una consulta de un post individual con posts relacionados
 * @property {LocalPost} post - Post solicitado
 * @property {LocalPost[]} relatedPosts - Posts relacionados (actualmente los 3 primeros disponibles)
 */
export interface LocalPostResult {
  post: LocalPost;
  relatedPosts: LocalPost[];
}

// Export the generate ID function for convenience
export { generateId };

// Importar los posts desde archivos individuales
// This needs to be after all exports to avoid circular dependencies
import { localPosts } from './posts';

/**
 * API simulada para manejar operaciones con posts
 * Proporciona métodos para obtener posts, filtrar por etiqueta, etc.
 */
export const localPostsApi = {
  /**
   * Obtiene una lista paginada de posts
   * @param options - Opciones de paginación
   * @param options.limit - Número de posts por página (default: 10)
   * @param options.page - Número de página (default: 1)
   * @returns Promesa con los posts y la información de paginación
   */
  getPosts: ({ limit = 10, page = 1 }: { limit?: number, page?: number }): Promise<LocalPostsResult> => {
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
  
  /**
   * Obtiene un post individual por su slug
   * @param options - Opciones de búsqueda
   * @param options.slug - Slug del post a buscar
   * @returns Promesa con el post y posts relacionados, o error si no se encuentra
   */
  getPost: ({ slug }: { slug: string }): Promise<LocalPostResult> => {
    const post = localPosts.find((p: LocalPost) => p.slug === slug);
    
    if (!post) {
      return Promise.reject(new Error(`Post with slug "${slug}" not found`));
    }
    
    return Promise.resolve({
      post,
      relatedPosts: localPosts
        .filter((p: LocalPost) => p.id !== post.id)
        .slice(0, 3)
    });
  },
  
  /**
   * Obtiene posts filtrados por una etiqueta específica
   * @param options - Opciones de búsqueda y paginación
   * @param options.tag - Etiqueta para filtrar
   * @param options.limit - Número de posts por página (default: 10)
   * @param options.page - Número de página (default: 1)
   * @returns Promesa con los posts filtrados y la información de paginación
   */
  getPostByTag: ({ tag, limit = 10, page = 1 }: { tag: string, limit?: number, page?: number }): Promise<LocalPostsResult> => {
    const postsWithTag = localPosts.filter((post: LocalPost) => 
      post.tags.some((t: { id: string, name: string }) => t.name.toLowerCase() === tag.toLowerCase())
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
  },
  
  /**
   * Función auxiliar para verificar si una imagen existe
   * @param imagePath - Ruta de la imagen a validar
   * @returns Promesa con la ruta proporcionada o una imagen de respaldo
   * @deprecated Use validateImage from src/lib/image-utils.ts instead
   */
  validateImage: (imagePath: string): Promise<string> => {
    // Esta función se simula en el navegador, ya que no podemos verificar archivos estáticos directamente
    // En producción, esto devolvería la imagen proporcionada o una imagen de respaldo
    return Promise.resolve(imagePath);
  }
}; 