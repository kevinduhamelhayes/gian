import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# Sobre Ti

![Gianina](https://placehold.co/800x400/f5eee6/6b563a?text=Tu+Foto)

Giani, te encontre llena de miedos e inseguridades, nunca pense que tendrias en mi vida la importancia que tenes hoy que al darle sentido a tu vida al enseñarte al sacarte miedos tambien me estaba ablandando y enseñandfo a mi mismo viendo a travez de tus ojos como ser mejor.

Tus valores tu forma de amar tu velocidad para aprender y la forma de entendernos. Fue de lo primero que note unico y nos llevo hasta adonde estasmos.

Admiro tu fuerza interior y tu capacidad para superar cualquier obstáculo que se presenta en tu camino. Entendes muy bien de sacrificio de valores sos tenis sos familia sos valores sos  amigos sos tu carrera y un poco vas a ser lo que pude dejarte en ti y yo sere un poco lo que me enseñaste a ser.

![Tu esencia](https://placehold.co/800x400/f5eee6/6b563a?text=Tu+Esencia)

Entiendo tus peleas por estar en todos lados pero nunca pierdas el foco de lo que realmente importa llegara el tiempo de ir achicando lo que abarcas quizas pronto tu carrera te deje de apretar pero tu alma es joven y arde fuerte asi que buscaras algo quizas para seguir manteniendo el nivel de exigencia. No pretendas ser alquien que no eres ni asi sea por otro solo hacelo si es por vos el cambio a mi me gustabas aun con esas diferencias.

Tu corazón es inmenso. Tienes una capacidad única para empatizar con los demás, para ponerte en el lugar del otro y entender sus sentimientos pudiste hacerme sentir como si fuera el unico en el mundo y desarmarme con tus brazos. Me diste tu tiempo y tu afecto en mis momentos de debilidad y me enseñaste a amarme a mi mismo y que todo esconde un cierto aprendisaje.

Esta página es mi tributo a ti, a todo lo que eres y a todo lo que representas en mi vida. Es mi forma de celebrar tu existencia y de agradecerte por ser lo que sos y por haber crecido tanto en este corto tiempo.

la niña asustada que encontre con sus complejos, que no disfrutaba ser mujer se reencontro con si misma, pudo crecer con su relacion con su familia, con su carrera, con su amor y con su vida.

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