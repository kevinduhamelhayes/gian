// Import necessary utilities
import { generateId } from './utils/id-utils';

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

// Export the generate ID function for convenience
export { generateId };

// Importar los posts desde archivos individuales
// This needs to be after all exports to avoid circular dependencies
import { localPosts } from './posts';

// Funciones de la API
export const localPostsApi = {
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
  
  // Función auxiliar para verificar si una imagen existe
  validateImage: (imagePath: string): Promise<string> => {
    // Esta función se simula en el navegador, ya que no podemos verificar archivos estáticos directamente
    // En producción, esto devolvería la imagen proporcionada o una imagen de respaldo
    return Promise.resolve(imagePath);
  }
}; 