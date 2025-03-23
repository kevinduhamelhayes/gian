"use client";
import { cn } from "@/lib/utils";
import { GetPostsResult } from "@/lib/wisp";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

export const BlogPostPreview: FunctionComponent<{
  post: GetPostsResult["posts"][0];
}> = ({ post }) => {
  return (
    <div className="break-words group">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-lg">
        <div className="aspect-[16/9] relative group-hover:scale-105 transition-transform duration-300">
          <Image
            alt={post.title}
            className="object-cover"
            src={post.image || "/images/placeholder.webp"}
            fill
          />
          <div className="absolute inset-0 bg-bronze-800/10 group-hover:bg-bronze-800/0 transition-colors"></div>
        </div>
      </Link>
      <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
        <h2 className="font-script font-semibold tracking-tighter text-bronze-700 text-2xl md:text-3xl">
          <Link href={`/blog/${post.slug}`} className="hover:text-bronze-600 transition-colors">{post.title}</Link>
        </h2>
        <div className="font-handwritten italic tracking-tighter text-bronze-500">
          {formatDate(post.publishedAt || post.updatedAt, "dd MMMM yyyy")}
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
  posts: GetPostsResult["posts"];
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
