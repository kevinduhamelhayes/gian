"use client"; // Necesario para hooks

import { useEffect, useRef } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";
import { BlogCarousel } from "@/components/BlogCarousel";
import { NosotrosCarousel, MomentosCarousel } from "./carousel";
import { sendGAEvent } from "@/lib/ga-utils";
import { useAuth } from "@/lib/auth-context";

// Dividiendo el contenido en partes para poder insertar los carruseles en el medio
const content1 = `# Nuestro Amor

(Nuestro amor me lleva a muchas lecturas que quedaron en mí, así que este relato tiene muchas cosas que quizás para ti no signifiquen igual que para mí. Está inspirado en lo que siento en el amor de los elfos en Tolkien, en el amor de Will y Lyra, en los sentimientos de Snape por Lily y muchos más. Así que paciencia con las analogías. Si bien me inspira la fantasía es porque yo siento nuestra vida un poco así: un relato de cuento de hadas, ese amor tan profundo y genuino que pervive a nuestros presentes).

Mi amor, sé que ahora mismo nuestros caminos parecen bifurcarse. Como dos ríos que nacen de la misma montaña, pero eligen valles distintos para desembocar en el mar. Veo en tus ojos la búsqueda de un horizonte diferente. Sé que la vida te alejará de mí y que tienes mucho por vivir antes de entender (y yo también, aunque sé que crees que ahora entiendes todo). El tiempo es el único maestro para ciertas cosas del corazón… Tu camino, por ahora, no se entrelaza con el mío. Y aunque duele, entiendo que el tiempo de la vida nos cambia, nos moldea, nos lleva por senderos inesperados.

También entiendo que el tiempo nos pasará y no nos va a perdonar. Los golpes llegarán y con fuerza, como el mar azotando un acantilado, como el invierno en el norte. La vida es una, y en esta vida fui bendecido con un amor profundo e inesperado al menos una vez. Estoy agradecido y me aferraré a eso como un marinero a su barco en aguas turbulentas… Me queda tanto por decirte, tanto por darte, tanto por disfrutar juntos… Pero nuestro tiempo parece haber llegado a su fin como la arena en un reloj.`;

const content2 = `Ahora bien, mi amor, lee y escucha en tu mente mis palabras, y grábalas en lo más profundo de tu corazón: mi amor por ti es como el fuego de las estrellas, constante, inmutable, eterno. No importa si el destino nos lleva a galaxias distantes; este fuego seguirá ardiendo como un anhelo eterno. Reservo un lugar para ti, aquí, a mi lado: un espacio cálido como un refugio en la tormenta, un lugar donde siempre serás bienvenida, sin juicios, sin reproches, solo con amor.

Mi amor no es lo que esperas en esta etapa de tu vida. Quizás un día lo entenderemos y lo trascenderemos, no lo sé… Este lugar no es una cadena, es un puerto seguro. No te ata, te espera. Es un amor que trasciende el tiempo y la forma. Es un amor que sabe esperar, que entiende de silencios y ausencias, que florece en la distancia y se fortalece con cada desafío.

Si algún día decides que ese futuro que anhelas puede incluirnos, si decides reclamar este lugar que te ofrezco, aquí estaré. Y si la vida, en su inmensa y a veces cruel sabiduría, decide que nuestros caminos jamás se vuelvan a cruzar, quiero que sepas que siempre estaré ahí para ti. Como una estrella guía en la noche más oscura, como una mano amiga en la tempestad, como un eco de amor en el silencio.

Si el invierno llega y el mar golpea, mira a Oriente: verás mi llama arder. Después de la noche más oscura, aun así podrás ver salir el sol. Mi amor por ti no es una exigencia, es una promesa. Una promesa silenciosa y eterna, grabada no en piedra, sino en el alma imperecedera.

No conozco mi futuro. Creo que descansaré algún tiempo, bajaré mis armas, me retiraré a tierras más felices, guardaré mis armaduras mientras curo mi piel de las heridas que me dio la vida… Viajaré, conoceré algunos lugares, tendré nuevas anécdotas, trabajaré en mí y, cuando llegue el momento, iré haciendo pequeños proyectos por los que valga la pena luchar… En cierto modo, es por ello que me retiro. Aquí no hay por qué luchar hoy por hoy: tú decidiste sobre nuestro futuro… Y aunque no estoy de acuerdo con eso y no me haga feliz, debo aceptarlo y seguir mi camino.

Si alguna vez vuelves a quererme como pareja y me sientes como tal, y me haces sentir como tal, volveremos a armarnos y a pelear el mundo juntos, porque no hay imposibles para quienes pelean por amor.

Quisiera un futuro de conversaciones profundas que duran hasta el amanecer, donde compartamos nuestros sueños, miedos y esperanzas. También esos silencios cómodos donde solo necesitemos sentirnos cerca.

Quiero ser mejor persona cada día, desafiándome a crecer y evolucionar. Sentir que me aceptas tal como soy, con mis virtudes y defectos, y me haces sentir amado incondicionalmente.

Quiero superar distancias, pruebas y desafíos, y seguir brillando con la misma intensidad. Es un faro en la oscuridad, una luz que guía nuestro camino.

Esperaré la promesa de un futuro juntos, construyendo recuerdos, compartiendo risas y superando obstáculos. Me gustaría que cuando llegue el momento de volver a armarnos y a pelear, tú estés lista y yo ya no vuelva a pelear solo nunca más.

Poder dejar mis armas y escudos que me protegieron, porque sos mi hogar y mi refugio, y vos misma podés protegerme de todo lo que venga.

Estoy cansado de pelear y quiero descansar y disfrutar de lo que me queda de vida contigo. Ser tu guardián y que seas la mía. Ser tu hogar y que seas el mío. Pelearla juntos y disfrutar juntos, viajar y conocer nuevos lugares, vivir nuevos momentos… Y quién sabe qué más podrá traernos la vida.

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

export default function Page() {
  const { user } = useAuth();
  const scrollTrackedRef = useRef({ 25: false, 50: false, 75: false, 90: false });
  const pageLocation = "/nuestro-amor"; // Definir la ubicación de la página

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const currentScroll = window.scrollY;
      const scrollPercentage = (currentScroll / scrollableHeight) * 100;

      [25, 50, 75, 90].forEach((threshold) => {
        if (scrollPercentage >= threshold && !scrollTrackedRef.current[threshold as keyof typeof scrollTrackedRef.current]) {
          scrollTrackedRef.current[threshold as keyof typeof scrollTrackedRef.current] = true;

          const isUser1 = user?.id === process.env.NEXT_PUBLIC_USER1_USERNAME?.toLowerCase();
          const userType = user ? (isUser1 ? 'usuario_1' : 'usuario_2') : undefined;
          const userName = user ? (isUser1 ? process.env.NEXT_PUBLIC_USER1_NAME : process.env.NEXT_PUBLIC_USER2_NAME) : undefined;

          sendGAEvent('scroll_depth_section', {
            page_location: pageLocation,
            scroll_percentage: threshold,
            ...(user && { user_type: userType, user_name: userName })
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [user]); // Depender de user

  // Definir arrays de imágenes
  const nosotrosImages = [
    "/images/nuestro-amor/nosotros/1.jpg", 
    "/images/nuestro-amor/nosotros/2.jpg", 
  ];
  const momentosImages = [
    "/images/nuestro-amor/momentos/1.jpg", 
    "/images/nuestro-amor/momentos/2.jpg",
  ];

  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 pb-10 blog-content">
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
        
        <h2 className="text-center text-2xl font-script text-bronze-700 mt-10 mb-4">Nosotros</h2>
        <BlogCarousel images={nosotrosImages} carouselLocation="page:nuestro-amor:nosotros" />
        
        <Markdown>{content2}</Markdown>
        
        <h2 className="text-center text-2xl font-script text-bronze-700 mt-10 mb-4">Momentos Juntos</h2>
        <BlogCarousel images={momentosImages} carouselLocation="page:nuestro-amor:momentos" />
      </div>
      <Footer />
    </div>
  );
} 