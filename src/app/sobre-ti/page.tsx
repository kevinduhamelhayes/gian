import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# Sobre Ti

![Gianina](https://placehold.co/800x400/f5eee6/6b563a?text=Tu+Foto)

Gianina, desde la primera vez que te vi, supe que había algo especial en ti. Tu sonrisa ilumina cualquier habitación, y tu risa es como música para mis oídos.

Eres un alma libre, apasionada y llena de luz. Tu manera de ver el mundo me ha enseñado a apreciar las cosas desde otra perspectiva. Tu energía es contagiosa, y tu determinación inspiradora.

Admiro tu fuerza interior y tu capacidad para superar cualquier obstáculo que se presenta en tu camino. Eres una persona que no se rinde fácilmente, y eso es algo que siempre me ha fascinado de ti.

![Tu esencia](https://placehold.co/800x400/f5eee6/6b563a?text=Tu+Esencia)

Lo que más me cautiva de ti es tu autenticidad. Nunca pretendes ser alguien que no eres. Eres genuina en cada palabra, en cada gesto, en cada mirada. Tu honestidad es refrescante en un mundo donde muchas personas se esconden detrás de máscaras.

Tu corazón es inmenso. Tienes una capacidad única para empatizar con los demás, para ponerte en el lugar del otro y entender sus sentimientos. Eres generosa con tu tiempo, con tus palabras y con tu afecto.

Esta página es mi tributo a ti, a todo lo que eres y a todo lo que representas en mi vida. Es mi forma de celebrar tu existencia y de agradecerte por ser exactamente como eres.

Cada día me maravillo al pensar en la suerte que tuve al encontrarte. Eres un regalo que nunca dejaré de valorar.

Con todo mi cariño,

Kevin`;

export async function generateMetadata() {
  return {
    title: "Sobre Ti",
    description: "Una página dedicada a Gianina y todo lo que representa",
    openGraph: {
      title: "Sobre Ti",
      description: "Una página dedicada a Gianina y todo lo que representa",
      images: [
        signOgImageUrl({
          title: "Gianina",
          label: "Sobre Ti",
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