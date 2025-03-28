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
  
  // Permitir rutas públicas sin verificación
  if (isPublicRoute(path)) {
    return NextResponse.next();
  }

  // Verificar si hay una sesión activa
  const authCookie = request.cookies.get('authUser');
  const isAuthenticated = !!authCookie;

  // Si no está autenticado y la ruta no es pública, redirigir a login
  if (!isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

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