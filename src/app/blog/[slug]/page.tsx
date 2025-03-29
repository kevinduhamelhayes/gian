import { BlogCarousel } from "@/components/BlogCarousel";
import { BlogPostContent } from "@/components/BlogPostContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { localPostsApi } from "@/lib/local-posts";
import { signOgImageUrl } from "@/lib/og-image";
import { Metadata } from "next";

/**
 * Genera los metadatos para la página de blog individual
 * Incluye título, descripción y configuración Open Graph para compartir en redes sociales
 */
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { post } = await localPostsApi.getPost({ slug: params.slug });

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        signOgImageUrl({
          title: post.title,
          label: "Blog",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

/**
 * Página de visualización de artículo individual
 * Muestra el contenido completo del post y un carrusel de imágenes si están disponibles
 */
export default async function Page({ params }: any) {
  const { post, relatedPosts } = await localPostsApi.getPost({ slug: params.slug });

  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <BlogPostContent post={post} />
        {post.carouselImages && post.carouselImages.length > 0 && (
          <BlogCarousel 
            images={post.carouselImages} 
            altTexts={Array(post.carouselImages.length).fill(post.title)}
          />
        )}

      </div>
      <Footer />
    </div>
  );
}
