import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rutas públicas que no requieren autenticación
const publicRoutes = ['/login', '/terminos'];

// Comprueba si la ruta actual es pública
const isPublicRoute = (path: string) => {
  return publicRoutes.some(route => path === route || path.startsWith(`${route}/`));
};

// Función de depuración para registrar información de la solicitud
function logRequestInfo(request: NextRequest, message: string) {
  console.log(`Middleware | ${message}`);
  console.log(`- Path: ${request.nextUrl.pathname}`);
  console.log(`- Auth Cookie: ${request.cookies.get('authUser')?.value ? 'Present' : 'Not Present'}`);
  console.log(`- Terms Cookie: ${request.cookies.get('termsAccepted')?.value ? 'Accepted' : 'Not Accepted'}`);
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Verificar si hay una sesión activa
  const authCookie = request.cookies.get('authUser')?.value;
  const isAuthenticated = !!authCookie;
  
  // Verificar si los términos han sido aceptados
  const termsAccepted = request.cookies.get('termsAccepted')?.value === 'true';
  
  // Log para debugging
  logRequestInfo(request, 'Request received');
  
  // Si no está autenticado y la ruta no es pública, redirigir a login
  if (!isAuthenticated && !isPublicRoute(path)) {
    console.log('Middleware | Not authenticated, redirecting to login');
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Si está autenticado y va a login, redirigir a home
  if (isAuthenticated && path === '/login') {
    console.log('Middleware | Already authenticated, redirecting from login to home');
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Si está autenticado, NO es la página de términos y NO ha aceptado los términos
  // redirigir a términos
  if (isAuthenticated && !termsAccepted && path !== '/terminos' && !isPublicRoute(path)) {
    console.log('Middleware | Terms not accepted, redirecting to terms page');
    return NextResponse.redirect(new URL('/terminos', request.url));
  }

  // Permitir acceso normal
  console.log('Middleware | Access granted');
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