import type { MetadataRoute } from "next";
import urlJoin from "url-join";
import { config } from "@/config";
import { localPostsApi, LocalPost } from "@/lib/local-posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Obtener todos los posts para extraer los tags únicos
  const result = await localPostsApi.getPosts({ limit: 100 });
  
  // Extraer tags únicos de todos los posts
  const uniqueTags = new Map();
  result.posts.forEach((post: LocalPost) => {
    post.tags.forEach(tag => {
      uniqueTags.set(tag.id, tag);
    });
  });
  
  // Convertir el Map a Array para el sitemap
  const tags = Array.from(uniqueTags.values());
  
  return [
    {
      url: urlJoin(config.baseUrl, "tag"),
      lastModified: new Date(),
      priority: 0.8,
    },
    ...tags.map((tag) => {
      return {
        url: urlJoin(config.baseUrl, "tag", tag.name),
        lastModified: new Date(),
        priority: 0.8,
      };
    }),
  ];
}
