"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

// Datos de usuario simulados (usando variables de entorno)
const VALID_USERS: Record<string, string> = {
  [process.env.NEXT_PUBLIC_USER1_USERNAME?.toLowerCase() || '']: process.env.NEXT_PUBLIC_USER1_PASSWORD || '',
  [process.env.NEXT_PUBLIC_USER2_USERNAME?.toLowerCase() || '']: process.env.NEXT_PUBLIC_USER2_PASSWORD || ''
};

// Tipo para los usuarios
type User = {
  id: string;
  name?: string;
};

// Interface para el contexto de autenticación
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

// Crear el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Verificar autenticación al cargar la página
  useEffect(() => {
    // Intentar leer las cookies de autenticación
    const authUser = Cookies.get('authUser');
    
    if (authUser) {
      try {
        // Recuperar el nombre del usuario basado en su ID
        const name = authUser.toLowerCase() === process.env.NEXT_PUBLIC_USER1_USERNAME?.toLowerCase() 
          ? process.env.NEXT_PUBLIC_USER1_NAME 
          : process.env.NEXT_PUBLIC_USER2_NAME;
          
        // Establecer usuario con id y nombre
        setUser({ 
          id: authUser,
          name: name
        });
      } catch (error) {
        console.error('Error parsing auth cookie:', error);
        Cookies.remove('authUser');
      }
    }
    
    setIsLoading(false);
  }, []);

  // Función de login
  const login = (username: string, password: string): boolean => {
    // Normalizar el username a minúsculas para la comparación
    const normalizedUsername = username.toLowerCase();
    
    // Verificar si existe el usuario y si la contraseña coincide
    if (
      Object.prototype.hasOwnProperty.call(VALID_USERS, normalizedUsername) &&
      VALID_USERS[normalizedUsername] === password
    ) {
      // Determinar el nombre del usuario basado en su username
      const name = normalizedUsername === process.env.NEXT_PUBLIC_USER1_USERNAME?.toLowerCase() 
        ? process.env.NEXT_PUBLIC_USER1_NAME 
        : process.env.NEXT_PUBLIC_USER2_NAME;
      
      // Crear usuario y guardar en estado
      const user = { 
        id: normalizedUsername,
        name: name
      };
      setUser(user);
      
      // Guardar en cookies para persistencia
      Cookies.set('authUser', normalizedUsername, { 
        expires: 7, // 7 días
        path: '/',
        secure: window.location.protocol === 'https:',
        sameSite: 'strict'
      });
      
      // Enviar evento de inicio de sesión a GA4 - Con manejo de errores mejorado
      try {
        if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
          window.gtag('event', 'login', {
            method: 'credentials',
            user_type: normalizedUsername === process.env.NEXT_PUBLIC_USER1_USERNAME?.toLowerCase() ? 'usuario_1' : 'usuario_2',
            user_name: name
          });
          
          console.log('Evento de login enviado a GA4', normalizedUsername);
        }
      } catch (error) {
        // Capturar cualquier error de GA4 para evitar que bloquee el login
        console.error('Error al enviar evento a GA4:', error);
        // No retornamos false aquí - el login debe continuar aunque GA4 falle
      }
      
      return true;
    }
    
    return false;
  };

  // Función de logout
  const logout = () => {
    // Enviar evento de cierre de sesión a GA4
    try {
      if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function' && user) {
        window.gtag('event', 'logout', {
          user_type: user.id === process.env.NEXT_PUBLIC_USER1_USERNAME?.toLowerCase() ? 'usuario_1' : 'usuario_2',
          user_name: user.name
        });
      }
    } catch (error) {
      console.error('Error al enviar evento de logout a GA4:', error);
      // No bloqueamos el logout si hay un error en GA4
    }
    
    setUser(null);
    Cookies.remove('authUser', { path: '/' });
    Cookies.remove('termsAccepted', { path: '/' });
    
    // Redirigir a login (se maneja en el componente que llama a logout)
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Componente HOC para proteger rutas
export function withAuth<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> {
  return function ProtectedRoute(props: P) {
    const { isAuthenticated, isLoading } = useAuth();
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
      setIsClient(true);
    }, []);
    
    // Solo en el cliente podemos verificar la autenticación
    if (!isClient || isLoading) {
      return <div className="flex items-center justify-center min-h-screen">Cargando...</div>;
    }
    
    // Si no está autenticado, redirigir a login
    if (!isAuthenticated) {
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
        return null;
      }
    }
    
    // Si está autenticado, mostrar el componente protegido
    return <Component {...props} />;
  };
} 