"use client";

import { LocalPost } from "@/lib/local-posts";
import Image from "next/image";
import Link from "next/link";

interface RelatedPostsProps {
  posts: LocalPost[];
}

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-script text-bronze-700 mb-8">Posts Relacionados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group no-underline"
          >
            <article className="border-2 border-bronze-300 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:transform group-hover:scale-105">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  unoptimized={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-bronze-900 mb-2 group-hover:text-bronze-700">
                  {post.title}
                </h3>
                <p className="text-bronze-600 text-sm line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="px-2 py-1 bg-bronze-100 text-bronze-800 rounded-full text-xs"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};
