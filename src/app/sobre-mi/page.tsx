import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";
import Image from "next/image";
import { ImageCarousel } from "./carousel";

// Contenido de Markdown corregido
const content = `# Sobre Mí

Hola, soy yo. Nací en una familia pequeña; fui el único hijo y nieto por 8 años. Mi familia era pobre, pero yo creía que me ocultaban la verdad y era millonario... Jaja.

Pobre de mí al entender que realmente no había nada oculto, y el piso y las paredes eran rústicos. Mi madre se enojaba porque decía que del techo de madera caían arañas y polvo en la comida... Muy maniática con eso, pero nunca fue alguien limpia. En ese ambiente se crio un niño que hoy, ya grande, escribe este blog.

Mi familia siempre fue orgullosa y pensaba que para salir adelante no necesitaban ayuda de los demás, y así fue: nunca se aceptó ayuda de nadie.

Fui el más exigido de la familia, cargando los sueños de mis padres: ser bueno en ajedrez, matemáticas, ser bueno en básquet y, por supuesto, la obligación de ser bueno en la escuela.

Por supuesto, recuerdo al dormir la siesta esconderme bajo la mesa para jugar con legos, pensando en no hacer ruido porque mis padres dormían siesta y yo no, y hasta el día de hoy no la duermo.

Bueno, esas son anécdotas. Realmente lo que importa es que logré, por otro camino (el del sentido común y el tacto, el de la experiencia y el tiempo), los valores que hoy tengo, y que coinciden con los tuyos.

Aunque la experiencia y el tiempo no vienen solos: vienen acompañados de dolor y te curten, como un soldado que ya vio mucha sangre correr, estuvo en muchas batallas y ahora se encuentra en una guerra que no puede ganar.

Esta batalla la doy por perdida o suspendida. Bajaré mis armas e iré a lugares más tranquilos donde pueda recuperarme, sanar, aprender, sentir y crecer.

Hoy me encuentro con cosas nuevas, como curiosidad por viajar, por ser feliz, pero con menos expectativas y más libertad de ser yo mismo.

El tiempo pasará y la esperanza de volver a luchar por nosotros seguirá en mi corazón. Si alguna vez decides volver a mi lado, sabés que estaré aquí, con los brazos abiertos y el corazón lleno de amor.

No te prometo que será fácil, porque el futuro es incierto, pero idealmente estaré listo para volver a luchar por nosotros. Y si yo dejo de creer o la cosa se ve difícil, ¡luchá por esto, convenceme, rompete el orto, peleá! Aprendiste de mí que nada es imposible: andá por ello.

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
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 pb-10 blog-content">
        <div className="w-full flex items-center bg-bronze-50 justify-center pb-12">
          <div className="w-[700px] h-[700px] relative overflow-hidden">
            <Image 
              src="/images/sobre-mi/perfil/IMG_20241225_015614.jpg" 
              alt="Kevin" 
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
        
        <h2 className="text-center text-2xl font-script text-bronze-700 mt-10 mb-4">Mi vida</h2>
        <ImageCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default Page;