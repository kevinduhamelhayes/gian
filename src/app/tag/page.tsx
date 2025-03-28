import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { localPostsApi } from '@/lib/local-posts'; // Asegúrate de importar tu API
import Link from "next/link";

export async function generateMetadata() {
  // --- La función generateMetadata parece correcta, se mantiene igual ---
  return {
    title: "Tags",
    description: "Diferentes categorías de posteos del blog", // Descripción un poco más natural en español
    openGraph: {
      title: "Tags",
      description: "Diferentes categorías de posteos del blog",
      images: [
        signOgImageUrl({
          title: "Categorías del Blog", // Título OG un poco más descriptivo
          label: "Tags",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

// Componente Page corregido (sin "use client" y con carga de datos)
export default async function Page() {
  
  // --- CORRECCIÓN: Añadir la carga de datos de los tags ---
  // Asume que tu API tiene un método getTags() que devuelve { tags: Tag[] }
  // Ajusta el nombre de la función si es diferente (ej: getAllTags, etc.)
  let result = { tags: [] }; // Valor por defecto en caso de error
  try {
    result = await localPostsApi.getTags(); 
  } catch (error) {
    console.error("Failed to fetch tags:", error);
    // Podrías manejar el error mostrando un mensaje en la UI si lo deseas
  }
  // --- FIN CORRECCIÓN ---

  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="mt-20 mb-12 text-center">
        <h1 className="mb-2 text-5xl font-bold">Tags</h1>
        {/* Texto corregido a español */}
        <p className="text-lg opacity-50">Lista de todas las etiquetas</p> 
      </div>
      <div className="my-10 max-w-6xl text-balance text-center text-xl mb-48">
        {/* Ahora result.tags debería existir */}
        {result.tags.length > 0 ? (
          result.tags.map((tag) => (
            <Link
              key={tag.id}
              // Asegúrate que la ruta sea correcta según tu estructura
              href={`/tag/${tag.name}`} 
              className="text-primary mr-2 mb-2 inline-block rounded-md bg-bronze-100 px-2 py-1 text-base hover:bg-bronze-200 transition-colors dark:bg-bronze-800 dark:hover:bg-bronze-700" // Clases mejoradas para visibilidad
            >
              #{tag.name}
            </Link>
          ))
        ) : (
          <p className="text-lg opacity-70">No se encontraron etiquetas.</p> // Mensaje si no hay tags
        )}
      </div>
      <Footer />
    </div>
  );
}
