"use client"; // Necesario para useEffect y hooks

import { useEffect, useRef, useState } from "react";
import { BlogCarousel } from "@/components/BlogCarousel";
import { BlogPostContent } from "@/components/BlogPostContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { localPostsApi } from "@/lib/local-posts";
import { signOgImageUrl } from "@/lib/og-image";
import { Metadata } from "next";
import { sendGAEvent } from "@/lib/ga-utils";
import { useAuth } from "@/lib/auth-context";

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
export default function Page({ params }: any) {
  const [post, setPost] = useState<LocalPost | null>(null);
  const { user } = useAuth();
  const scrollTrackedRef = useRef({ 25: false, 50: false, 75: false, 90: false });

  useEffect(() => {
    // Cargar datos del post en el cliente
    const loadPost = async () => {
      try {
        const { post: fetchedPost } = await localPostsApi.getPost({ slug: params.slug });
        setPost(fetchedPost);
      } catch (error) {
        console.error("Error loading post:", error);
        // Manejar error, quizás redirigir o mostrar mensaje
      }
    };
    loadPost();
  }, [params.slug]);

  useEffect(() => {
    if (!post) return; // No hacer nada si el post no está cargado

    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return; // Evitar división por cero

      const currentScroll = window.scrollY;
      const scrollPercentage = (currentScroll / scrollableHeight) * 100;

      [25, 50, 75, 90].forEach((threshold) => {
        if (scrollPercentage >= threshold && !scrollTrackedRef.current[threshold as keyof typeof scrollTrackedRef.current]) {
          scrollTrackedRef.current[threshold as keyof typeof scrollTrackedRef.current] = true;

          const isUser1 = user?.id === process.env.NEXT_PUBLIC_USER1_USERNAME?.toLowerCase();
          const userType = user ? (isUser1 ? 'usuario_1' : 'usuario_2') : undefined;
          const userName = user ? (isUser1 ? process.env.NEXT_PUBLIC_USER1_NAME : process.env.NEXT_PUBLIC_USER2_NAME) : undefined;

          sendGAEvent('scroll_depth_section', {
            page_location: `/blog/${post.slug}`,
            scroll_percentage: threshold,
            ...(user && { user_type: userType, user_name: userName })
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Limpiar listener al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [post, user]); // Depender de post y user

  // Mostrar loading mientras carga el post
  if (!post) {
    return <div className="flex items-center justify-center min-h-screen">Cargando post...</div>;
  }

  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <BlogPostContent post={post} />
        {post.carouselImages && post.carouselImages.length > 0 && (
          <BlogCarousel 
            images={post.carouselImages} 
            altTexts={Array(post.carouselImages.length).fill(post.title)}
            carouselLocation={`post:${post.slug}`}
          />
        )}

      </div>
      <Footer />
    </div>
  );
}
