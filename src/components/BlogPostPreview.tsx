"use client";
import { cn } from "@/lib/utils";
import { LocalPost } from "@/lib/local-posts";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState, useEffect } from "react";
import { validateImage, DEFAULT_FALLBACK_IMAGE } from "@/lib/image-utils";

export const BlogPostPreview: FunctionComponent<{
  post: LocalPost;
}> = ({ post }) => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(post.image || DEFAULT_FALLBACK_IMAGE);
  const [isLoading, setIsLoading] = useState(true);
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    // Validate the image when the component mounts or post changes
    setImageSrc(validateImage(post.image));
    setIsLoading(true);
    setImageError(false);
    setFormattedDate(
      new Date(post.publishedAt).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, [post.image, post.publishedAt]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
    setImageSrc(DEFAULT_FALLBACK_IMAGE);
  };

  return (
    <div className="break-words group">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-lg">
        <div className="aspect-[16/12] relative bg-bronze-50 min-h-[380px]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-8 h-8 border-4 border-bronze-300 border-t-bronze-600 rounded-full animate-spin"></div>
            </div>
          )}
          
          {imageError ? (
            <div className="w-full h-full  flex items-center justify-center">
              <p className="text-center font-handwritten text-bronze-700">Imagen no disponible</p>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                alt={post.title}
                className={cn(
                  "object-contain max-h-[580px] max-w-full transition-all duration-300",
                  "hover:scale-105 aspect-video",
                  isLoading ? "opacity-0" : "opacity-100"
                )}
                src={imageSrc}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                onError={handleImageError}
                onLoad={handleImageLoad}
                priority
              />
            </div>
          )}
          <div className="absolute inset-0 bg-bronze-800/10 group-hover:bg-bronze-800/0 transition-colors"></div>
        </div>
      </Link>
      <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
        <h2 className="font-script font-semibold tracking-tighter text-bronze-700 text-2xl md:text-3xl">
          <Link href={`/blog/${post.slug}`} className="hover:text-bronze-600 transition-colors">{post.title}</Link>
        </h2>
        <div className="font-handwritten italic tracking-tighter text-bronze-500">
          {formattedDate}
        </div>
        <div className="leading-relaxed md:text-lg line-clamp-4 text-bronze-700 font-sans">
          {post.description}
        </div>
        <div className="text-sm text-bronze-500 font-handwritten">
          {post.tags.map((tag) => (
            <div key={tag.id} className="mr-2 inline-block">
              <Link href={`/tag/${tag.name}`} className="hover:text-bronze-700 transition-colors">#{tag.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  posts: LocalPost[];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-16 lg:gap-20 md:grid-cols-2 md:my-16 my-8",
        className
      )}
    >
      {posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};
