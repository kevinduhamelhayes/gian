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

  // Verificar si GA está inicializado correctamente
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
      setIsGAInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !isGAInitialized) return;
    
    try {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      
      // Envía un pageview cuando la URL cambia
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      });
    } catch (error) {
      console.error("Error al enviar pageview a GA4:", error);
    }
  }, [pathname, searchParams, isGAInitialized]);

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
        }}
      />
    </>
  );
}

// Función de utilidad para enviar eventos personalizados
export function sendGAEvent(action: string, category?: string, label?: string, value?: number) {
  if (typeof window === "undefined" || !window.gtag || typeof window.gtag !== 'function') {
    console.warn("No se pudo enviar evento a GA4: gtag no disponible");
    return;
  }
  
  try {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } catch (error) {
    console.error("Error al enviar evento a GA4:", error);
  }
} 