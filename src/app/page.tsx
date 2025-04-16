import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import { localPostsApi } from "@/lib/local-posts";
import Link from "next/link";

// Definiendo el tipo esperado para las props de la página principal
type HomePageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page(props: any) {
  const searchParams = props?.searchParams ?? {};
  // Garantizar que searchParams nunca sea undefined y manejar todos los casos posibles
  const pageParam = searchParams && typeof searchParams === 'object' ? searchParams.page : undefined;
  const pageString = Array.isArray(pageParam) ? pageParam[0] : pageParam;
  const page = pageString && !isNaN(Number(pageString)) ? parseInt(pageString) : 1;
  const result = await localPostsApi.getPosts({ limit: 10, page });
  
  return (
    <div className="container mx-auto px-2 sm:px-4 mb-8">
      <Header />
      
      {/* Hero Section */}
      <div className="mb-10 sm:mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-script text-bronze-700 mb-3 sm:mb-4 leading-tight">
          {config.blog.metadata.title.default}
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-handwritten text-bronze-600 mb-4 sm:mb-6 max-w-3xl mx-auto">
          {config.blog.metadata.description}
        </p>
        <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-xs mx-auto sm:max-w-none">
          <Link href="/sobre-mi">
            <Button variant="default" className="bg-bronze-600 hover:bg-bronze-700 font-handwritten text-white w-full xs:w-auto">
              Sobre Mí
            </Button>
          </Link>
          <Link href="/sobre-ti">
            <Button variant="outline" className="border-bronze-400 text-bronze-700 hover:bg-bronze-100 font-handwritten w-full xs:w-auto">
              Sobre Ti
            </Button>
          </Link>
          <Link href="/nuestro-amor">
            <Button variant="default" className="bg-bronze-500 hover:bg-bronze-600 font-handwritten text-white w-full xs:w-auto">
              Nuestro Amor
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Inspirational Quote */}
      <div className="my-10 sm:my-16 bg-bronze-100 p-4 sm:p-8 rounded-lg text-center">
        <blockquote className="text-lg sm:text-2xl md:text-3xl font-script text-bronze-700 italic">
          &ldquo;El dolor al principio no me dejaba hacer esto ahora puedo por que siento amor pero espero que esto no quede en el recuerdo y sigamos escribiendo nuestra historia juntos&rdquo;
        </blockquote>
        <p className="mt-3 sm:mt-4 font-handwritten text-bronze-600">— con amor YO</p>
      </div>
      
      <h3 className="text-xl sm:text-2xl md:text-3xl font-script text-bronze-700 mb-6 sm:mb-8 text-center">Nuestras Historias</h3>
      <BlogPostsPreview posts={result.posts} />
      <BlogPostsPagination pagination={result.pagination} />
      <Footer />
    </div>
  );
}
