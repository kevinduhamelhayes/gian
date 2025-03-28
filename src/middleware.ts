import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rutas públicas que no requieren autenticación
const publicRoutes = ['/login', '/terminos'];

// Comprueba si la ruta actual es pública
const isPublicRoute = (path: string) => {
  return publicRoutes.some(route => path === route || path.startsWith(`${route}/`));
};

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Verificar si hay una sesión activa
  const authCookie = request.cookies.get('authUser')?.value;
  const isAuthenticated = !!authCookie;
  
  // Si no está autenticado y la ruta no es pública, redirigir a login
  if (!isAuthenticated && !isPublicRoute(path)) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Si está autenticado y va a login, redirigir a home
  if (isAuthenticated && path === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Si está autenticado y no es la página de términos, 
  // verificar si el usuario ha aceptado los términos
  if (isAuthenticated && path !== '/terminos' && !isPublicRoute(path)) {
    // No se puede acceder a localStorage desde el middleware,
    // así que usaremos cookies para verificar
    const termsAccepted = request.cookies.get('termsAccepted')?.value === 'true';
    
    if (!termsAccepted) {
      return NextResponse.redirect(new URL('/terminos', request.url));
    }
  }

  // Permitir acceso normal
  return NextResponse.next();
}

// Ejecutar el middleware en todas las rutas excepto las estáticas
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)',
  ],
}; 