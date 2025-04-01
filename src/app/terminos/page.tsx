"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import Cookies from 'js-cookie';
import Image from 'next/image';

export default function TerminosPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading, user } = useAuth();
  const [mounted, setMounted] = useState(false);
  
  // Evitar errores de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  // Verificar autenticación
  useEffect(() => {
    if (mounted && !isLoading) {
      if (!isAuthenticated) {
        router.push('/login');
      }
    }
  }, [mounted, isAuthenticated, isLoading, router]);

  // Función para aceptar términos
  const handleAcceptTerms = () => {
    let redirected = false; // Flag para evitar doble redirección
    try {
      // Guardar en localStorage que el usuario ha aceptado los términos
      localStorage.setItem('termsAccepted', 'true');
      
      // Guardar también en cookie para que el middleware pueda leerla
      // Configurar opciones más específicas para asegurar que se guarde bien
      Cookies.set('termsAccepted', 'true', { 
        expires: 30, // 30 días
        path: '/',
        secure: window.location.protocol === 'https:',
        sameSite: 'strict'
      });
      
      console.log('Terms accepted, saved in cookie:', Cookies.get('termsAccepted'));
      
      // Enviar evento de aceptación de términos a GA4 con manejo de errores
      try {
        if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function' && user) {
          // Determinar el tipo de usuario basado en las variables de entorno
          const isUser1 = user.id === process.env.NEXT_PUBLIC_USER1_USERNAME?.toLowerCase();
          const userType = isUser1 ? 'usuario_1' : 'usuario_2';
          const userName = isUser1 ? process.env.NEXT_PUBLIC_USER1_NAME : process.env.NEXT_PUBLIC_USER2_NAME;
          
          window.gtag('event', 'accept_terms', {
            user_type: userType,
            user_name: userName
          });
        }
      } catch (error) {
        console.error('Error al enviar evento de aceptación de términos a GA4:', error);
        // No bloqueamos la navegación si hay un error en GA4
      }
      
      // Redirigir forzando recarga completa
      window.location.href = '/';
      redirected = true;

    } catch (error) {
      console.error('Error saving acceptance or during GA4 event:', error);
      // Intentar redirigir solo si no se hizo ya, forzando recarga
      if (!redirected) {
        window.location.href = '/';
      }
    }
  };

  // Mostrar loading hasta que esté montado en cliente
  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bronze-50 dark:bg-zinc-900">
        <div className="animate-pulse">Cargando...</div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative py-8">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src="/images/nuestra-primer-foto.jpg" 
          alt="Nuestra primera foto" 
          fill
          sizes="100vw"
          priority
          className="object-cover brightness-75 dark:brightness-50"
          style={{
            objectPosition: 'center',
          }}
        />
      </div>
      
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-bronze-900/30 dark:bg-bronze-950/60 backdrop-blur-sm z-10"></div>
      
      {/* Contenido de términos */}
      <div className="w-full max-w-3xl bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden relative z-20 mx-4">
        <div className="p-6 md:p-8 border-b border-bronze-200 dark:border-bronze-700">
          <h1 className="text-2xl md:text-3xl font-handwritten text-bronze-800 dark:text-bronze-100 mb-2">
            Términos y Condiciones
          </h1>
          <p className="text-bronze-600 dark:text-bronze-300">
            Por favor lee atentamente antes de continuar
          </p>
        </div>
        
        <ScrollArea className="h-[400px] md:h-[500px] p-6 md:p-8">
          <div className="space-y-6 text-bronze-700 dark:text-bronze-200">
            <section className="space-y-3">
              <h2 className="text-xl font-handwritten text-bronze-800 dark:text-bronze-100">
                Sobre este blog personal
              </h2>
              <p>
                Este blog ha sido creado como un espacio personal y privado para compartir 
                momentos, pensamientos y sentimientos. 
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-handwritten text-bronze-800 dark:text-bronze-100">
                Contenido y perspectiva personal
              </h2>
              <p>
                El contenido de este blog representa experiencias, opiniones y emociones personales Mias.
                Es importante tener en cuenta que lo expresado aquí:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Puede no coincidir con tus puntos de vista o creencias</li>
                <li>Está compartido desde una perspectiva personal y subjetiva</li>
                <li>No pretende representar verdades absolutas ni universales</li>
                <li>Ha sido creado y escrito con amor y honestidad</li>
                <li>Esta escrito cada cosa pensada en su momento pero desde el presente</li>
              </ul>
              <p>
                Si en algún momento encuentras contenido que no compartes o no piensas igual es totalmente normal 
                es una invitación a reflexionar sobre la diversidad de experiencias y perspectivas de nuestra relación.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-handwritten text-bronze-800 dark:text-bronze-100">
                Esfuerzo y dedicación
              </h2>
              <p>
                La creación de este blog ha requerido un esfuerzo significativo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>yo pensaba escribir a mano unas hojitas de papel pero me di cuenta que tengo fea letra... </li>
                <li> despues pense y si hago algo con unas fotos que tengo de ti</li>
                <li>despues empese con esto despues me di cuentade mil detalles tecnicos como proteger la privacidad</li>
                <li>tambien el sistema de ordenamiento etiquetas sistema de ruteo nose pero era unas 4 paginas a mano que pensaba escribir</li>
                <li>7.000 lineas de codigo despues y 200 imagenes seleccionadas dan este resultado</li>
                <li>tenemos modo claro y oscuro y funciona en telefonos estara online para poder acceder en cualquier momento cuando mas nos amemos estara aqui y cuando menos tambien</li>
                <li>Todo ha sido creado con el objetivo de compartir algo especial y significativo</li>
              </ul>
              <p>
                Te pido que valores este esfuerzo y que respetes la naturaleza personal e íntima
                de lo que aquí se comparte.
                por que podemos y seguramente pase que en cada cosa tengamos distintos puntos de vista pero no olvides que te amo y te estare esperando
              </p>
            </section>
            
       
            <section className="space-y-3 pt-4">
              <p className="italic text-bronze-600 dark:text-bronze-400">
                &ldquo;Este blog ha sido creado con amor, dedicación y honestidad. Es un pedazo de mi mundo
                interior que he decidido compartir contigo. Gracias por estar aquí y por formar parte
                de esta historia.&rdquo;
              </p>
            </section>
          </div>
        </ScrollArea>
        
        <div className="p-6 md:p-8 border-t border-bronze-200 dark:border-bronze-700 flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={() => router.push('/login')}
            className="text-bronze-600 border-bronze-300 hover:bg-bronze-100 dark:text-bronze-300 dark:border-bronze-700 dark:hover:bg-bronze-800"
          >
            Volver al inicio de sesión
          </Button>
          
          <Button 
            onClick={handleAcceptTerms}
            className="bg-bronze-600 hover:bg-bronze-700 text-white"
          >
            Acepto los términos
          </Button>
        </div>
      </div>
    </div>
  );
} 