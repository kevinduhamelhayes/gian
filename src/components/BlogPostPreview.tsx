"use client";
import { cn } from "@/lib/utils";
import { LocalPost } from "@/lib/local-posts";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";

export const BlogPostPreview: FunctionComponent<{
  post: LocalPost;
}> = ({ post }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="break-words group">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-lg">
        <div className="aspect-[16/9] relative bg-bronze-50">
          {!imageError ? (
            <Image
              alt={post.title}
              className="object-cover hover:scale-105 transition-transform duration-300"
              src={post.image || "/images/placeholder.webp"}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-center font-handwritten text-bronze-700">Imagen no disponible</p>
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
          {formatDate(new Date(post.publishedAt), "dd MMMM yyyy")}
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
        "grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-2 md:my-16 my-8",
        className
      )}
    >
      {posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};
