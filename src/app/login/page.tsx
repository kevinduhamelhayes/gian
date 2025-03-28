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
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  // Redireccionar si ya está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!username || !password) {
      setError('Por favor completa todos los campos');
      return;
    }
    
    const success = login(username, password);
    
    if (!success) {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bronze-50 dark:bg-zinc-900 px-4">
      <Card className="w-full max-w-md border-bronze-200 shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-4">
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={80} 
              height={80}
              className="mx-auto"
            />
          </div>
          <CardTitle className="text-2xl font-handwritten text-bronze-800 dark:text-bronze-100">
            Inicio de Sesión
          </CardTitle>
          <CardDescription className="text-bronze-600 dark:text-bronze-300">
            Ingresa tus credenciales para acceder
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-bronze-700 dark:text-bronze-300">
                Usuario
              </label>
              <Input
                id="username"
                type="text"
                placeholder="Ingresa tu usuario"
                className="border-bronze-300 focus:border-bronze-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-bronze-700 dark:text-bronze-300">
                Contraseña
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                className="border-bronze-300 focus:border-bronze-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            {error && (
              <div className="text-sm text-red-500 font-medium py-1">
                {error}
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-bronze-600 hover:bg-bronze-700 text-white"
            >
              Iniciar Sesión
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link 
            href="/terminos" 
            className="text-sm text-bronze-600 hover:text-bronze-800 dark:text-bronze-400 dark:hover:text-bronze-200"
          >
            Términos y Condiciones
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
} 