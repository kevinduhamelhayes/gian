import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";
import Image from "next/image";
import { ImageCarousel } from "./carousel";

// Texto corregido dentro de la constante content
const content = `# Sobre Ti

Giani, te encontré llena de miedos e inseguridades. Nunca pensé que tendrías en mi vida la importancia que tenés hoy; que al darle sentido a tu vida, al enseñarte, al sacarte miedos, también me estaba ablandando y enseñando a mí mismo, viendo a través de tus ojos cómo ser mejor.

Tus valores, tu forma de amar, tu velocidad para aprender y la forma de entendernos... Fue de lo primero que noté único y nos llevó hasta adonde estábamos.

Admiro tu fuerza interior y tu capacidad para superar cualquier obstáculo que se presenta en tu camino. Entendés muy bien de sacrificio, de valores. Sos tenis, sos familia, sos valores, sos amigos, sos tu carrera... y un poco vas a ser lo que pude dejarte en ti, y yo seré un poco lo que me enseñaste a ser.

Entiendo tus peleas por estar en todos lados, pero nunca pierdas el foco de lo que realmente importa. Llegará el tiempo de ir achicando lo que abarcás. Quizás pronto tu carrera te deje de apretar, pero tu alma es joven y arde fuerte, así que buscarás algo, quizás, para seguir manteniendo el nivel de exigencia. No pretendas ser alguien que no eres, ni así sea por otro. Solo hacelo si es por vos el cambio. A mí me gustabas aun con esas diferencias.

Tu corazón es inmenso. Tenés una capacidad única para empatizar con los demás, para ponerte en el lugar del otro y entender sus sentimientos. Pudiste hacerme sentir como si fuera el único en el mundo y desarmarme con tus brazos. Me diste tu tiempo y tu afecto en mis momentos de debilidad y me enseñaste a amarme a mí mismo y que todo esconde un cierto aprendizaje.

Esta página es mi tributo a ti, a todo lo que eres y a todo lo que representas en mi vida. Es mi forma de celebrar tu existencia y de agradecerte por ser lo que sos y por haber crecido tanto en este corto tiempo.

La niña asustada que encontré, con sus complejos, que no disfrutaba ser mujer, se reencontró consigo misma. Pudo crecer en su relación con su familia, con su carrera, con su amor y con su vida.

Cada día me maravillo al pensar en la suerte y el privilegio que tuve al encontrarte. Eres un regalo que nunca dejaré de valorar.

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

export default async function Page() {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 pb-10 blog-content">
        <div className="w-full flex items-center bg-bronze-50 justify-center pb-12">
          <div className="w-[700px] h-[700px] relative overflow-hidden   ">
            
            <Image 
              src="/images/sobre-ti/perfil/tu-perfil.jpg" 
              alt="Gianina" 
              fill
              sizes="700px"
              className="object-cover border-2 border-bronze-400 rounded-xl shadow-xl h-full w-full max-h-[700px] min-h-[700px]"
              priority
              quality={95}
              unoptimized={false}
            />
          </div>
        </div>
        
        <Markdown>{content}</Markdown>
        
        <h2 className="text-center text-2xl font-script text-bronze-700 mt-10 mb-4">Tu vida</h2>
        <ImageCarousel />
      </div>
      <Footer />
    </div>
  );
}