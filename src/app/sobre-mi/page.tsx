import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# Sobre Mí

![Kevin](https://placehold.co/800x400/f5eee6/6b563a?text=Mi+Foto)

Hola, soy Kevin. Soy desarrollador y apasionado por la tecnología, pero hay mucho más en mi historia que solo código.

Crecí con una curiosidad insaciable por entender cómo funcionan las cosas. Desde pequeño, desarmar juguetes y volver a armarlos era mi pasatiempo favorito. Esa misma curiosidad me llevó a explorar el mundo de la tecnología y eventualmente a convertirme en desarrollador.

Pero más allá de la tecnología, soy alguien que disfruta de las pequeñas cosas de la vida. Me encanta el café por las mañanas mientras leo un buen libro, las caminatas al atardecer, y las conversaciones profundas que se extienden hasta altas horas de la noche.

![Mi pasión](https://placehold.co/800x400/f5eee6/6b563a?text=Mi+Pasión)

Soy un soñador y un idealista. Creo firmemente que las conexiones humanas son lo que da sentido a nuestra existencia. Cada persona que conocemos nos enseña algo nuevo, nos desafía a crecer y nos muestra diferentes perspectivas de la vida.

En mis viajes por la vida, he aprendido que amar es la aventura más grande que podemos emprender. Es un viaje de autodescubrimiento, de vulnerabilidad y de crecimiento constante. Es aprender a ver el mundo a través de los ojos de otra persona y permitir que eso cambie nuestra propia visión.

Esta página es mi forma de compartir mi historia, mis pensamientos y mis sentimientos. Pero más que nada, es mi manera de honrar a alguien muy especial que ha dejado una huella indeleble en mi corazón.

Con cariño,

Kevin`;

export async function generateMetadata() {
  return {
    title: "Sobre Mí",
    description: "Conoce más sobre Kevin y su historia personal",
    openGraph: {
      title: "Sobre Mí",
      description: "Conoce más sobre Kevin y su historia personal",
      images: [
        signOgImageUrl({
          title: "Kevin",
          label: "Sobre Mí",
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