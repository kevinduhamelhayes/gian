import { BlogCarousel } from "@/components/BlogCarousel";
import { BlogPostContent } from "@/components/BlogPostContent";
import { CommentSection } from "@/components/CommentSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RelatedPosts } from "@/components/RelatedPosts";
import { config } from "@/config";
import { localPostsApi } from "@/lib/local-posts";
import { signOgImageUrl } from "@/lib/og-image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import type { BlogPosting, WithContext } from "schema-dts";

interface Props {
  params: {
    slug: string;
  };
}

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

const Page = async ({ params }: Props) => {
  const { post, relatedPosts } = await localPostsApi.getPost({ slug: params.slug });

  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <BlogPostContent post={post} />
        {post.carouselImages && post.carouselImages.length > 0 && (
          <BlogCarousel images={post.carouselImages} />
        )}
        <CommentSection />
        <RelatedPosts posts={relatedPosts} />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
