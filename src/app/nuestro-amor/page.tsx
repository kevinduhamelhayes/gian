import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";
import { NosotrosCarousel, MomentosCarousel } from "./carousel";

// Dividiendo el contenido en partes para poder insertar los carruseles en el medio
const content1 = `# Nuestro Amor

(nuestro amor me lleva a muchas lecturas que quedaron en mi asi que este relato tiene muchas cosas que quizas para ti no signifiquen igual que para mi, esta inspirado en lo que siento en el amor de los elfos en tolkien en el amor de will y lyra en los sentimientos de snape por lily y muchos mas asi que paciencia por las analogias si bien me inspira la fantasia es por que yo siento nuestra vida un poco asi un poco ese relato de cuento de hadas ese amor tan profundo y genuino que pervive a nuestros presentes )

Mi Amor, sé que ahora mismo nuestros caminos parecen bifurcarse. Como dos ríos que nacen de la misma montaña, pero eligen valles distintos para desembocar en el mar. Veo en tus ojos la búsqueda de un horizonte diferente se que la vida te alejara de mi y que tenes mucho por vivir antes de entender y yo tambien, aunque yo se que crees que ahora entendes todo, el tiempo es el unico maestro para ciertas cosas del corazon… tu camino por ahora, no se entrelaza con el mío. Y aunque duele, entiendo que el tiempo de la vida nos cambia, nos moldean, nos llevan por senderos inesperados.
Tambien entiendo que el tiempo nos pasara y no nos va a perdonar los golpes llegaran y con fuerza como el mar azotando un acantilado como el invierno en el norte, la vida es una y en esta vida fui bendecido con un amor profundo e inesperado al menos una vez estoy agradecido y me aferrare a eso como un marinero a su barco en aguas turbulentas…
me queda tanto por decirte tanto por darte tanto por disfrutar juntos pero nuestro tiempo parece haber llegado a su fin como la arena en un reloj de tiempo`;

const content2 = `Ahora bien mi amor lee y escucha en tu mente mis palabras, y grábalas en lo más profundo de tu corazón: mi amor por ti es como el fuego de las estrellas, constante, inmutable, eterno. No importa si el destino nos lleva a galaxias distantes, este fuego seguirá ardiendo como un anhelo eterno. Reservo un lugar para ti, aquí, a mi lado, un espacio cálido como un refugio en la tormenta, un lugar donde siempre serás bienvenida, sin juicios, sin reproches, solo con amor.
mi amor no es lo que esperas en esta etapa de tu vida quizas un dia lo entenderemos y lo trascenderemos no lo se…
Este lugar no es una cadena, es un puerto seguro. No te ata, te espera. Es un amor que trasciende el tiempo y la forma. Es un amor que sabe esperar, que entiende de silencios y ausencias, que florece en la distancia y se fortalece con cada desafío.
Si algún día decides que ese futuro que anhelas puede incluirnos, si decides reclamar este lugar que te ofrezco, aquí estaré. Y si la vida, en su inmensa y a veces cruel sabiduría, decide que nuestros caminos jamás se vuelvan a cruzar, quiero que sepas que siempre estaré ahí para ti. Como una estrella guía en la noche más oscura, como una mano amiga en la tempestad, como un eco de amor en el silencio.
si el invierno llega y el mar golpea mira a oriente veras mi llama arder
despues de la noche mas oscura aun asi podras ver salir el sol
Mi amor por ti no es una exigencia, es una promesa. Una promesa silenciosa y eterna, grabada no en piedra, sino en el alma imperemne.
No conozco mi futuro creo que descansare algun tiempo bajare mis armas me retirare a tierras mas felices guardare mis armaduras mientras curo mi piel de las heridas que me dio la vida…
viajare conocere algunos lugares tendre nuevas anecdotas trabajare en mi y cuando llegue el momento ire haciendo pequeños proyectos por los que valga la pena luchar…
en cierto modo es por ello que me retiro… aqui no hay por que luchar hoy por hoy tu decidiste sobre nuestro futuro… y aunque no este de acuerdo con eso y no me haga feliz debo aceptarlo y seguir mi camino.
si alguna vez vuelves a quererme como pareja y me sientes como tal y me haces sentir como tal volveremos a armarnos y a pelear el mundo juntos por que no hay imposibles para quienes pelean por amor.

quisiera un futuro de conversaciones profundas que duran hasta el amanecer, donde compartimos nuestros sueños, miedos y esperanzas. también esos silencios cómodos donde solo necesitamos sentirnos cerca.

quiero ser mejor persona cada día, desafiándome a crecer y evolucionar. sentir que me aceptas tal como soy, con mis virtudes y defectos, y me haces sentir amado incondicionalmente.

quiero superar distancias, pruebas y desafíos, y seguir brillando con la misma intensidad. Es un faro en la oscuridad, una luz que guía nuestro camino.

esperare la promesa de un futuro juntos, construyendo recuerdos, compartiendo risas y superando obstáculos. me gustaria que cuando llegue el momento de volver a armarnos y a pelear el tu estes lista y yo ya no vuelva a pelear solo nunca mas.

poder dejar mis armas que y escudos que me protegieron por que sos mu hogar y mi refugio y vos misma me podes proteger de todo lo que venga.

estoy cansado de pelear y quiero descansar y disfrutar de lo que me queda de vida con vos. ser tu guardian y que seas la mia ser tu hogar y que seas el mio pelearla juntos y disfrutar juntos viajar y conocer nuevos lugares y vivir nuevos momentos.

y quien sabe que mas podra traernos la vida.

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
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 pb-10 blog-content">
        {/* Primera parte del contenido */}
        <div className="w-[700px] h-[700px] relative overflow-hidden mb-4">
            <Image 
              src="/images/sobre-mi/perfil/2.jpg" 
              alt="Kevin" 
              fill
              sizes="700px"
              className="object-cover border-2 border-bronze-400 rounded-xl shadow-xl h-full w-full max-h-[700px] min-h-[700px]"
              priority
              quality={95}
              unoptimized={true}
            />
          </div>
        <Markdown>{content1}</Markdown>
        
        {/* Primer carrusel - Nosotros */}
        <h2 className="text-center text-2xl font-script text-bronze-700 mt-10 mb-4">Nosotros</h2>
        <NosotrosCarousel />
        
        {/* Segunda parte del contenido */}
        <Markdown>{content2}</Markdown>
        
        {/* Segundo carrusel - Momentos */}
        <h2 className="text-center text-2xl font-script text-bronze-700 mt-10 mb-4">Momentos Juntos</h2>
        <MomentosCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default Page; 