import { BlogCarousel } from "@/components/BlogCarousel";
import { BlogPostContent } from "@/components/BlogPostContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { localPostsApi } from "@/lib/local-posts";
import { signOgImageUrl } from "@/lib/og-image";
import { Metadata } from "next";

/**
 * Props para la página de artículo de blog individual
 * @property {Object} params - Parámetros de la ruta
 * @property {string} params.slug - Identificador único del artículo en la URL
 */
interface Props {
  params: {
    slug: string;
  };
}

/**
 * Genera los metadatos para la página de blog individual
 * Incluye título, descripción y configuración Open Graph para compartir en redes sociales
 * 
 * @param param0 - Props con el slug del artículo
 * @returns Metadatos para la página
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
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
 * 
 * @param param0 - Props con el slug del artículo
 * @returns Componente de página de artículo
 */
const Page = async ({ params }: Props) => {
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
};

export default Page;
