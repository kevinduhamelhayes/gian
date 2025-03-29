"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

// Declarar el tipo global para gtag (asegurándonos de que sea consistente)
// Eliminamos la declaración global aquí ya que ya existe en otros archivos
// y podría estar causando conflictos

/**
 * Componente para rastrear eventos específicos de usuario
 * Este componente realiza un seguimiento de acciones clave para los dos usuarios del blog
 */
export default function UserTracker() {
  const pathname = usePathname();
  const { isAuthenticated, user } = useAuth();

  // Rastrear inicios de sesión y navegación del usuario
  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return;
    
    try {
      // Identificar al usuario (de forma anónima)
      if (isAuthenticated && user) {
        // Solo rastreamos un ID anónimo para saber cuál de los dos usuarios está navegando
        // Sin almacenar información personal
        window.gtag("set", "user_properties", {
          user_id: user.id === "admin" ? "usuario_1" : "usuario_2"
        });
        
        // Rastrear página visitada por usuario logueado
        window.gtag("event", "page_view_authenticated", {
          page_title: document.title,
          page_location: window.location.href,
          page_path: pathname,
          user_type: user.id === "admin" ? "usuario_1" : "usuario_2"
        });
      }
      
      // Rastrear cuando un usuario visita páginas especiales
      if (isAuthenticated) {
        if (pathname === "/terminos") {
          window.gtag("event", "view_terms", {
            user_type: user?.id === "admin" ? "usuario_1" : "usuario_2"
          });
        } else if (pathname.startsWith("/blog/")) {
          // Rastrear visitas a posts del blog
          const postSlug = pathname.split('/').pop();
          window.gtag("event", "view_blog_post", {
            user_type: user?.id === "admin" ? "usuario_1" : "usuario_2",
            post_slug: postSlug
          });
        }
      }
    } catch (error) {
      console.error("Error tracking user activity:", error);
    }
  }, [pathname, isAuthenticated, user]);

  // Este componente no renderiza nada visible
  return null;
} 