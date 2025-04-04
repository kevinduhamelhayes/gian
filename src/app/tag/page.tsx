import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { localPostsApi } from '@/lib/local-posts';
import { LocalPost } from '@/lib/local-posts';
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Tags",
    description: "Diferentes categorías de posteos del blog", 
    openGraph: {
      title: "Tags",
      description: "Diferentes categorías de posteos del blog",
      images: [
        signOgImageUrl({
          title: "Categorías del Blog",
          label: "Tags",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

export default async function Page() {
  // Obtener todos los posts para extraer los tags únicos
  const result = await localPostsApi.getPosts({ limit: 100 }); // Asumiendo que no hay más de 100 posts
  
  // Extraer tags únicos de todos los posts
  const uniqueTags = new Map();
  result.posts.forEach((post: LocalPost) => {
    post.tags.forEach(tag => {
      uniqueTags.set(tag.id, tag);
    });
  });
  
  // Convertir el Map a Array para renderizar
  const tags = Array.from(uniqueTags.values());
  
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="mt-20 mb-12 text-center">
        <h1 className="mb-2 text-5xl font-bold">Tags</h1>
        <p className="text-lg opacity-50">Lista de todas las etiquetas</p> 
      </div>
      <div className="my-10 max-w-6xl text-balance text-center text-xl mb-48">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/tag/${tag.name}`} 
              className="text-primary mr-2 mb-2 inline-block rounded-md bg-bronze-100 px-2 py-1 text-base hover:bg-bronze-200 transition-colors dark:bg-bronze-800 dark:hover:bg-bronze-700"
            >
              #{tag.name}
            </Link>
          ))
        ) : (
          <p className="text-lg opacity-70">No se encontraron etiquetas.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
