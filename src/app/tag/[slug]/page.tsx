import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { localPostsApi } from "@/lib/local-posts";
import { CircleX } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

/**
 * Genera los metadatos para la página de etiquetas
 */
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `#${slug}`,
    description: `Posts tagged with #${slug}`,
  };
}

/**
 * Página para mostrar posts filtrados por etiqueta
 */
export default async function Page({ params, searchParams }: any) {
  const { slug } = params;

  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await localPostsApi.getPostByTag({ tag: slug, limit: 10, page });
  
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />
      <Link href="/">
        <Badge className="px-2 py-1">
          <CircleX className="inline-block w-4 h-4 mr-2" />
          Posts tagged with <strong className="mx-2">#{slug}</strong>{" "}
        </Badge>
      </Link>
      <BlogPostsPreview posts={result.posts} linkLocation={`tag_page_preview:${slug}`} />
      <BlogPostsPagination
        pagination={result.pagination}
        basePath={`/tag/${slug}/?page=`}
      />
      <Footer />
    </div>
  );
}
