import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";
import Image from "next/image";
import { ImageCarousel } from "./carousel";

// Contenido de Markdown sin las imágenes
const content = `# Sobre Mí

Hola, soy Yo, naci en una familia pequña fui el unico hijo y nieto 8 años, mi familia era pobre pero yo creia que me ocultaban la verdad y era millonario... jaja

pobre de mi al entender que realmente no habia nada oculto y el piso y las paredes eran rusticos y mi madre se enojaba por que decia que en el techo de madera caian arañas y polvo en la comida.... muy mañatica con eso pero nunca fue alguien limpia, en ese ambiente se crio un niño que hoy escribe este blog ya grande.

mi familia siempre fue orgullosa y pensaba en que opara salir adelante no necesitaban ayuda de los demas y asi fue nunca se acepto ayuda de nadie.

fui el mas exigido de la familia cargando los sueños de mis padres, ser bueno en ajedres matematicas , ser bueno en basquet y por supuesto la obligacion de ser bueno en la escuela.

por supuesto recuerdo al dormir la siesta esconderme bajo la mesa para jugar con legos pensando en no hacer ruido por que mis padres dormian siesta y yo no y hasta el dia de hoy no la duermo.

bueno esas son anecdotas realmente lo que importa es que logre por otro camino el del sentido comun y el tacto el de la experiencia y el tiempo la los valores que hoy tengo. y que coinciden con los tuyos.

aunque la experiencia y el tiempo no vienen solos vienen acompañados de dolor y te curten, como un soldado que ya vio mucha sangre correr y estuvo en muchas batallas y ahora se encuentra en una guerra que no puede ganar.

Esta batalla la doy por perdida o suspendida, bajare mis armas y ire a lugares mas tranquilos donde pueda recuperarme,  sanar aprender sentir y crecer.

hoy me encuentro con cosas nuevas como curiosidad por viajar por ser feliz pero con menos expectativas y mas libertad de ser yo mismo.

el tiempo pasara y la esperanza de volver a luchar por nosotros seguira en mi corazon. si alguna vez decides volver a mi lado, sabes que estare aqui, con los brazos abiertos y el corazon lleno de amor.

no te prometo que sera facil por que el futuro es incierto pero idealmente estare listo para volver a luchar por nosotros. y si yo dejo de creer o la cosa se ve dificil lucha por esto convenceme, rompete el orto! pelea! aprendiste de mi que nada es imposible anda por ello.

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