"use client";
import { LocalPost } from "@/lib/local-posts";
import Link from "next/link";
import sanitize, { defaults } from "sanitize-html";
import Image from "next/image";
import Markdown from "react-markdown";

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

interface BlogPostContentProps {
  post: LocalPost;
}

export const BlogPostContent = ({ post }: BlogPostContentProps) => {
  if (!post) return null;
  const { title, publishedAt, content, tags } = post;
  return (
    <article className="blog-post">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-bronze-600 mb-8">{post.description}</p>
      
      {post.image && (
        <div className="relative w-full h-[400px] mb-8 overflow-hidden rounded-lg border-2 border-bronze-300 shadow-lg">
          <Image
            src={post.image}
            alt={title}
            fill
            unoptimized={true}
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
            priority
          />
        </div>
      )}
      
      <div className="prose lg:prose-lg dark:prose-invert">
        <Markdown>{content}</Markdown>
      </div>
      
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
      
      <div className="mt-4 text-sm text-bronze-600">
        <time dateTime={publishedAt}>
          Publicado el {new Date(publishedAt).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
    </article>
  );
};
