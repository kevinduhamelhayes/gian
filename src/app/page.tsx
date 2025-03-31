import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import { localPostsApi } from "@/lib/local-posts";
import Link from "next/link";

export default async function Page({ searchParams }: any) {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await localPostsApi.getPosts({ limit: 10, page });
  
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />
      
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-script text-bronze-700 mb-4">{config.blog.metadata.title.default}</h2>
        <p className="text-lg md:text-xl font-handwritten text-bronze-600 mb-6 max-w-3xl mx-auto">
          {config.blog.metadata.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/sobre-mi">
            <Button variant="default" className="bg-bronze-600 hover:bg-bronze-700 font-handwritten text-white">
              Sobre Mí
            </Button>
          </Link>
          <Link href="/sobre-ti">
            <Button variant="outline" className="border-bronze-400 text-bronze-700 hover:bg-bronze-100 font-handwritten">
              Sobre Ti
            </Button>
          </Link>
          <Link href="/nuestro-amor">
            <Button variant="default" className="bg-bronze-500 hover:bg-bronze-600 font-handwritten text-white">
              Nuestro Amor
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Inspirational Quote */}
      <div className="my-16 bg-bronze-100 p-8 rounded-lg text-center">
        <blockquote className="text-2xl md:text-3xl font-script text-bronze-700 italic">
          &ldquo;El dolor al principio no me dejaba hacer esto ahora puedo por que siento amor pero espero que esto no quede en el recuerdo y sigamos escribiendo nuestra historia juntos&rdquo;
        </blockquote>
        <p className="mt-4 font-handwritten text-bronze-600">— con amor YO</p>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-script text-bronze-700 mb-8 text-center">Nuestras Historias</h3>
      <BlogPostsPreview posts={result.posts} linkLocation="home_preview" />
      <BlogPostsPagination pagination={result.pagination} />
      <Footer />
    </div>
  );
}
