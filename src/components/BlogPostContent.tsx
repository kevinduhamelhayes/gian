"use client";
import { LocalPost } from "@/lib/local-posts";
import Link from "next/link";
import sanitize, { defaults } from "sanitize-html";
import Image from "next/image";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import { FunctionComponent } from "react";

/**
 * Componente que renderiza contenido HTML sanitizado
 * Utiliza sanitize-html para prevenir ataques XSS
 * 
 * @param content - Contenido HTML a sanitizar y renderizar
 * @returns Componente con el contenido sanitizado
 */
export const PostContent = ({ content }: { content: string }) => {
  const sanitizedContent = sanitize(content, {
    allowedTags: [
      "b",
      "br",
      "i",
      "em",
      "strong",
      "a",
      "img",
      "h1",
      "h2",
      "h3",
      "code",
      "pre",
      "p",
      "li",
      "ul",
      "ol",
      "blockquote",
      // tables
      "td",
      "th",
      "table",
      "tr",
      "tbody",
      "thead",
      "tfoot",
      "small",
      "div",
      "iframe",
    ],
    allowedAttributes: {
      ...defaults.allowedAttributes,
      "*": ["style"],
      iframe: ["src", "allowfullscreen", "style"],
    },
    allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com"],
  });
  return (
    <div
      className="blog-content mx-auto"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    ></div>
  );
};

/**
 * Props para el componente BlogPostContent
 * @property {LocalPost} post - Objeto con los datos del post a mostrar
 */
interface BlogPostContentProps {
  post: LocalPost;
}

/**
 * Componente principal para mostrar el contenido completo de un post
 * Incluye título, imagen principal, contenido en Markdown y metadatos
 * 
 * Características:
 * - Manejo de errores para imágenes
 * - Formato de fecha localizado
 * - Renderizado de contenido Markdown
 * - Visualización de etiquetas
 * 
 * @param post - Objeto con los datos del post
 * @returns Componente con el artículo completo
 */
export const BlogPostContent: FunctionComponent<BlogPostContentProps> = ({ post }) => {
  // Estado para controlar errores de carga de imagen
  const [imageError, setImageError] = useState(false);
  const [formattedDate, setFormattedDate] = useState<string>("");

  // Si no hay post, no renderizar nada
  if (!post) return null;
  
  const { title, publishedAt, content, tags } = post;
  
  useEffect(() => {
    setFormattedDate(new Date(publishedAt).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }));
  }, [publishedAt]);

  return (
    <article className="blog-post">
      {/* Encabezado del post */}
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-bronze-600 ">{post.description}</p>
      
      {/* Imagen principal con manejo de errores */}
      {post.image && (
        <div className="relative w-full h-[700px]  overflow-hidden rounded-lg border-bronze-300 shadow-lg bg-bronze-50 mb-4">
          {!imageError ? (
            <Image
              src={post.image}
              alt={title}
              fill
              unoptimized={true}
              sizes="700px"
              className="object-cover border-2 border-bronze-400 rounded-xl shadow-xl h-full w-full max-h-[700px] min-h-[700px]"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-center font-handwritten text-lg text-bronze-700">Imagen no disponible</p>
            </div>
          )}
        </div>
      )}
      
      {/* Contenido principal en Markdown */}
      <div className="prose lg:prose-lg dark:prose-invert">
        <Markdown>{content}</Markdown>
      </div>
      
      {/* Etiquetas del post */}
      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.id}
            className="px-3 py-1 bg-bronze-100 text-bronze-800 rounded-full text-sm"
          >
            {tag.name}
          </span>
        ))}
      </div>
      
      {/* Fecha de publicación */}
      <div className="text-sm text-bronze-500 font-handwritten mb-4">
        Publicado el {formattedDate}
      </div>
    </article>
  );
};
