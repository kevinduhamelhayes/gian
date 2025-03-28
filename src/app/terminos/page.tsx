"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import Cookies from 'js-cookie';

export default function TerminosPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
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
      
      // Esperar un momento para asegurar que la cookie se guarde
      setTimeout(() => {
        router.push('/');
      }, 100);
    } catch (error) {
      console.error('Error saving acceptance:', error);
      // Intentar redirigir de todos modos
      router.push('/');
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-bronze-50 dark:bg-zinc-900 px-4 py-8">
      <div className="w-full max-w-3xl bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
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
                momentos, pensamientos y sentimientos. No está destinado al público general, 
                sino a un círculo cercano y específico de personas.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-handwritten text-bronze-800 dark:text-bronze-100">
                Contenido y perspectiva personal
              </h2>
              <p>
                El contenido de este blog representa experiencias, opiniones y emociones personales.
                Es importante tener en cuenta que lo expresado aquí:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Puede no coincidir con tus puntos de vista o creencias</li>
                <li>Está compartido desde una perspectiva personal y subjetiva</li>
                <li>No pretende representar verdades absolutas ni universales</li>
                <li>Ha sido creado y escrito con amor y honestidad</li>
              </ul>
              <p>
                Si en algún momento encuentras contenido que no comprendes o con el que no estás de acuerdo,
                te invito a reflexionar sobre la diversidad de experiencias y perspectivas que existen
                en nuestras relaciones humanas.
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
                <li>Cada post ha sido cuidadosamente redactado para expresar sentimientos auténticos</li>
                <li>Las imágenes han sido seleccionadas y organizadas con dedicación</li>
                <li>El diseño y la estructura han sido pensados para ofrecer una experiencia agradable</li>
                <li>Todo ha sido creado con el objetivo de compartir algo especial y significativo</li>
              </ul>
              <p>
                Te pido que valores este esfuerzo y que respetes la naturaleza personal e íntima
                de lo que aquí se comparte.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-handwritten text-bronze-800 dark:text-bronze-100">
                Privacidad y confidencialidad
              </h2>
              <p>
                Al tener acceso a este blog, te comprometes a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>No compartir las credenciales de acceso con otras personas</li>
                <li>No reproducir o distribuir el contenido sin autorización</li>
                <li>Respetar la privacidad y la intención personal de este espacio</li>
                <li>Tratar el contenido con respeto y consideración</li>
              </ul>
            </section>
            
            <section className="space-y-3 pt-4">
              <p className="italic text-bronze-600 dark:text-bronze-400">
                "Este blog ha sido creado con amor, dedicación y honestidad. Es un pedazo de mi mundo
                interior que he decidido compartir contigo. Gracias por estar aquí y por formar parte
                de esta historia."
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