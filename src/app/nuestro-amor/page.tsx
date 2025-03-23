import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# Nuestro Amor

![Nosotros](https://placehold.co/800x400/f5eee6/6b563a?text=Nosotros)

El amor es una fuerza extraordinaria que trasciende el tiempo y el espacio. Es un sentimiento que no puede contenerse en palabras, pero que intentaré describir en estas líneas.

Nuestro amor es como una danza entre dos almas que se reconocen, que se entienden sin necesidad de palabras. Es ese sentimiento cálido que surge al pensar en ti, esa sonrisa involuntaria que aparece al recordar nuestros momentos juntos.

Es la forma en que nuestras manos encajan perfectamente, como si hubieran sido diseñadas la una para la otra. Es la manera en que nuestros corazones laten al mismo ritmo cuando estamos cerca.

![Momentos](https://placehold.co/800x400/f5eee6/6b563a?text=Momentos+Juntos)

Nuestro amor son esas conversaciones profundas que duran hasta el amanecer, donde compartimos nuestros sueños, miedos y esperanzas. Son también esos silencios cómodos donde solo necesitamos sentirnos cerca.

Es la forma en que me haces mejor persona cada día, desafiándome a crecer y evolucionar. Es cómo me aceptas tal como soy, con mis virtudes y defectos, y me haces sentir amado incondicionalmente.

Nuestro amor es paciente y perseverante. Ha superado distancias, pruebas y desafíos, y sigue brillando con la misma intensidad. Es un faro en la oscuridad, una luz que guía nuestro camino.

Es la promesa de un futuro juntos, construyendo recuerdos, compartiendo risas y superando obstáculos. Es la certeza de que, no importa lo que venga, lo enfrentaremos juntos.

Esta página es mi declaración de amor, mi forma de hacer eterno lo que siento por ti. Porque aunque las palabras nunca serán suficientes para expresar la profundidad de mis sentimientos, quiero que el mundo sepa lo especial que eres para mí.

Con todo mi amor,

Kevin`;

export async function generateMetadata() {
  return {
    title: "Nuestro Amor",
    description: "Una celebración del amor que compartimos",
    openGraph: {
      title: "Nuestro Amor",
      description: "Una celebración del amor que compartimos",
      images: [
        signOgImageUrl({
          title: "Amor Eterno",
          label: "Nuestro Amor",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page; 