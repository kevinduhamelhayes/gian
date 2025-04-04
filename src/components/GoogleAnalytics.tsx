"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// ID de medición de GA4 proporcionado
const GA_MEASUREMENT_ID = "G-PNE03F1F3J";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isGAInitialized, setIsGAInitialized] = useState(false);
  const [isGABlocked, setIsGABlocked] = useState(false);

  // Verificar si GA está inicializado correctamente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Detectar si el usuario tiene bloqueadores de anuncios
      const checkBlockers = () => {
        // Si después de 2 segundos gtag no está disponible, probablemente esté bloqueado
        if (!window.gtag || typeof window.gtag !== 'function') {
          setIsGABlocked(true);
          console.log("Google Analytics está probablemente bloqueado por un ad-blocker");
        } else {
          setIsGAInitialized(true);
        }
      };
      
      // Dar tiempo para que se cargue GA
      const timer = setTimeout(checkBlockers, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !isGAInitialized || isGABlocked) return;
    
    try {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      
      // Envía un pageview cuando la URL cambia
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      });
    } catch (error) {
      console.error("Error al enviar pageview a GA4:", error);
    }
  }, [pathname, searchParams, isGAInitialized, isGABlocked]);

  // Si detectamos que GA está bloqueado, no intentamos cargar los scripts
  if (isGABlocked) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onLoad={() => {
          console.log("Google Analytics script cargado correctamente");
        }}
        onError={(e) => {
          console.error("Error al cargar Google Analytics:", e);
          setIsGABlocked(true);
        }}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
            
            // Controlar errores de GA cuando está bloqueado
            window.addEventListener('error', function(e) {
              if (e.filename && (e.filename.includes('googletagmanager') || e.filename.includes('analytics.google'))) {
                console.log('Google Analytics bloqueado por el navegador o extensión');
                // No necesitamos hacer nada más, solo evitar errores en consola
                e.stopPropagation();
                e.preventDefault();
              }
            }, true);
          `,
        }}
        onLoad={() => {
          console.log("Google Analytics inicializado correctamente");
          if (typeof window !== 'undefined') {
            setIsGAInitialized(true);
          }
        }}
        onError={(e) => {
          console.error("Error al inicializar Google Analytics:", e);
          setIsGABlocked(true);
        }}
      />
    </>
  );
}

// Función de utilidad para enviar eventos personalizados
export function sendGAEvent(action: string, category?: string, label?: string, value?: number) {
  if (typeof window === "undefined" || !window.gtag || typeof window.gtag !== 'function') {
    // No mostrar advertencias en consola si GA está bloqueado
    return;
  }
  
  try {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } catch (error) {
    // Capturar errores silenciosamente sin mostrar en consola
  }
} 