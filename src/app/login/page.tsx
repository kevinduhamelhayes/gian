"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);
  const { login, isAuthenticated } = useAuth(); // Mantenemos la llamada síncrona
  const router = useRouter();

  // Evitar renderizado en servidor que cause errores de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  // Redireccionar si ya está autenticado
  useEffect(() => {
    if (mounted && isAuthenticated) {
      router.push('/'); // Mantenemos redirección a home si YA está logueado
    }
  }, [isAuthenticated, router, mounted]);

  // --- LÓGICA ORIGINAL MANTENIDA ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Por favor completa todos los campos');
      return;
    }

    // --- ¡ALERTA DE SEGURIDAD (IMPORTANTE)! ---
    // Aunque mantenemos tu lógica actual, recuerda que esto NO es seguro para producción.
    // Un login real necesita comunicación ASÍNCRONA con un backend seguro (HTTPS),
    // hasheo de contraseñas y manejo de tokens/sesiones.
    const success = login(username, password); // Llamada síncrona original

    if (success) {
      // Redirigir a términos y condiciones después de un login exitoso (como estaba originalmente)
      router.push('/terminos');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };
  // --- FIN LÓGICA ORIGINAL ---

  // Si no está montado aún (para evitar errores de hidratación)
  if (!mounted) {
    return <div className="min-h-screen flex items-center justify-center bg-bronze-50 dark:bg-zinc-900">
      {/* Spinner mejorado visualmente */}
      <div className="w-8 h-8 border-4 border-bronze-300 border-t-bronze-600 rounded-full animate-spin"></div>
      <p className="ml-3 text-bronze-600 dark:text-bronze-400">Cargando...</p>
    </div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"> {/* Añadido overflow-hidden */}
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/nuestra-primer-foto.jpg"
          alt="Nuestra primera foto"
          fill
          sizes="100vw"
          priority
          className="object-cover brightness-75 dark:brightness-50" // Puedes ajustar el brillo aquí (ej: brightness-50, brightness-100)
          style={{
            // --- AJUSTE DE IMAGEN (Prueba estos valores) ---
            // objectPosition controla qué parte de la imagen se ve si hay recorte.
            // Cambia 'center' por 'top', 'bottom', 'center top', 'center 25%', '20% 50%', etc.
            // hasta que la parte importante de TU foto quede bien encuadrada.
            objectPosition: 'center',
            // --- FIN AJUSTE ---
          }}
          quality={85} // Calidad de la imagen (75-90 suele ser un buen balance)
        />
      </div>

      {/* Overlay para mejorar legibilidad del texto sobre la imagen */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 dark:bg-gradient-to-b dark:from-black/50 dark:to-black/80 backdrop-blur-sm z-10"></div> {/* Gradiente y blur */}

      {/* Contenido del login (Card) */}
      {/* Clases añadidas/ajustadas para estética: rounded-lg, bg-opacity, backdrop-blur-md */}
      <Card className="w-full max-w-md border-bronze-300 dark:border-zinc-700 shadow-xl relative z-20 mx-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-lg">
        {/* Ajustes de padding y tamaño de logo/título */}
        <CardHeader className="space-y-1 text-center pt-8">
          <div className="mx-auto mb-4 w-24 h-24 relative">
            <Image
              src="/images/logo.png"
              alt="Logo GK"
              fill
              sizes="96px"
              className="object-contain p-1" // object-contain es mejor si el logo no es cuadrado
              priority
            />
          </div>
          <CardTitle className="text-3xl font-handwritten text-bronze-800 dark:text-bronze-100">
            Bienvenida
          </CardTitle>
          <CardDescription className="text-bronze-600 dark:text-bronze-300 pb-2">
            Solo se te permite ingresar llena de amor
          </CardDescription>
        </CardHeader>
        {/* Ajustes de padding y estilos de input/botón */}
        <CardContent className="px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-bronze-700 dark:text-bronze-300"> {/* Añadido 'block' */}
                Usuario
              </label>
              <Input
                id="username"
                type="text"
                placeholder="Tu usuario"
                required
                // Clases mejoradas para inputs
                className="border-bronze-300 focus:ring-2 focus:ring-bronze-500 focus:border-transparent bg-white/80 dark:bg-zinc-800/80 dark:border-zinc-600 dark:focus:ring-bronze-400 dark:text-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-bronze-700 dark:text-bronze-300"> {/* Añadido 'block' */}
                Contraseña
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Tu contraseña"
                required
                // Clases mejoradas para inputs
                className="border-bronze-300 focus:ring-2 focus:ring-bronze-500 focus:border-transparent bg-white/80 dark:bg-zinc-800/80 dark:border-zinc-600 dark:focus:ring-bronze-400 dark:text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 dark:text-red-400 font-medium py-1 text-center">
                {error}
              </div>
            )}

            <Button
              type="submit"
              // Estilo de botón mejorado
              className="w-full bg-gradient-to-r from-bronze-500 to-bronze-700 hover:from-bronze-600 hover:to-bronze-800 text-white font-semibold py-2.5 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Iniciar Sesión
            </Button>
          </form>
        </CardContent>
         {/* Footer opcional para enlaces */}
        <CardFooter className="flex flex-col items-center px-6 pb-8 text-sm">
           {/* <Link href="/forgot-password" className="text-bronze-600 hover:text-bronze-800 dark:text-bronze-400 dark:hover:text-bronze-200 underline mt-2">
             ¿Olvidaste tu contraseña?
           </Link> */}
        </CardFooter>
      </Card>
    </div>
  );
}