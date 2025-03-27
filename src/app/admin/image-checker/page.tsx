"use client";

import { useEffect, useState } from 'react';
import { LocalPost } from '@/lib/local-posts';
import { localPostsApi } from '@/lib/local-posts';
import { validatePostImages, suggestImageNamingConvention, extractSlugFromPath } from '@/lib/utils/image-path-validator';

export default function ImageCheckerPage() {
  const [posts, setPosts] = useState<LocalPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [issues, setIssues] = useState<{
    post: string;
    type: string;
    path: string;
    expected: string;
    found: string;
  }[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await localPostsApi.getPosts({ limit: 100 });
        setPosts(result.posts);
        
        // Validate all posts
        const foundIssues: {
          post: string;
          type: string;
          path: string;
          expected: string;
          found: string;
        }[] = [];
        
        result.posts.forEach(post => {
          // Check main image
          const mainImageSlug = extractSlugFromPath(post.image);
          if (mainImageSlug !== post.slug) {
            foundIssues.push({
              post: post.title,
              type: 'main-image',
              path: post.image,
              expected: post.slug,
              found: mainImageSlug || 'unknown'
            });
          }
          
          // Check carousel images
          if (post.carouselImages && post.carouselImages.length > 0) {
            post.carouselImages.forEach((path, index) => {
              const carouselSlug = extractSlugFromPath(path);
              if (carouselSlug !== post.slug) {
                foundIssues.push({
                  post: post.title,
                  type: `carousel-image-${index + 1}`,
                  path: path,
                  expected: post.slug,
                  found: carouselSlug || 'unknown'
                });
              }
            });
          }
        });
        
        setIssues(foundIssues);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  useEffect(() => {
    if (posts.length > 0) {
      suggestImageNamingConvention();
      posts.forEach(post => validatePostImages(post));
    }
  }, [posts]);
  
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Image Path Checker</h1>
      
      {loading ? (
        <div className="text-center py-10">
          <div className="w-12 h-12 border-4 border-bronze-300 border-t-bronze-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p>Cargando posts y verificando rutas de imágenes...</p>
        </div>
      ) : (
        <div>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="font-medium">Convención de nombres recomendada para imágenes:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Imagen principal: <code>/images/blog/[slug-del-post]/1.jpg</code></li>
              <li>Imágenes de carrusel: <code>/images/blog/[slug-del-post]/2.jpg</code>, <code>/images/blog/[slug-del-post]/3.jpg</code>, etc.</li>
              <li>Alternativas: <code>.png</code>, <code>.webp</code>, <code>.jpeg</code></li>
              <li>Nombres en minúsculas, sin espacios (usar guiones)</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Resumen de posts ({posts.length})</h2>
          
          {issues.length > 0 ? (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-red-600 mb-2">Problemas encontrados ({issues.length})</h3>
              <div className="bg-red-50 p-4 rounded-lg">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-red-200">
                      <th className="text-left py-2">Post</th>
                      <th className="text-left py-2">Tipo</th>
                      <th className="text-left py-2">Ruta</th>
                      <th className="text-left py-2">Esperado</th>
                      <th className="text-left py-2">Encontrado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {issues.map((issue, index) => (
                      <tr key={index} className="border-b border-red-100">
                        <td className="py-2">{issue.post}</td>
                        <td className="py-2">{issue.type}</td>
                        <td className="py-2 text-sm font-mono">{issue.path}</td>
                        <td className="py-2">{issue.expected}</td>
                        <td className="py-2">{issue.found}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
              <p className="font-medium text-green-700">¡Todas las rutas de imágenes son correctas!</p>
            </div>
          )}
          
          <h2 className="text-2xl font-bold mb-4">Detalles de posts</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {posts.map(post => (
              <div key={post.id} className="border border-bronze-200 rounded-lg p-4 bg-white shadow-sm">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-sm text-bronze-600 mb-4">Slug: <code className="bg-bronze-50 px-1 py-0.5 rounded">{post.slug}</code></p>
                
                <div className="mb-4">
                  <h4 className="font-bold text-bronze-700 mb-1">Imagen principal:</h4>
                  <p className="text-sm font-mono bg-bronze-50 p-2 rounded overflow-x-auto">
                    {post.image}
                  </p>
                </div>
                
                {post.carouselImages && post.carouselImages.length > 0 && (
                  <div>
                    <h4 className="font-bold text-bronze-700 mb-1">Imágenes de carrusel ({post.carouselImages.length}):</h4>
                    <ul className="text-sm font-mono bg-bronze-50 p-2 rounded overflow-x-auto">
                      {post.carouselImages.map((img, i) => (
                        <li key={i} className="mb-1">
                          {i+1}. {img}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-12 pt-6 border-t border-bronze-200 text-center text-sm text-bronze-500">
        Herramienta administrativa para verificar rutas de imágenes de posts
      </div>
    </div>
  );
} 