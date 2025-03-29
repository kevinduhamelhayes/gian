"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

// Datos de usuario simulados (solo para demo)
const VALID_USERS = {
  'admin': 'gianina',
  'gian': 'kevin'
};

// Declarar el tipo global para gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}

// Tipo para los usuarios
type User = {
  id: string;
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
        // Simulando que restauramos los datos del usuario
        setUser({ id: authUser });
      } catch (error) {
        console.error('Error parsing auth cookie:', error);
        Cookies.remove('authUser');
      }
    }
    
    setIsLoading(false);
  }, []);

  // Función de login
  const login = (username: string, password: string): boolean => {
    // Simulación simple de autenticación
    if (VALID_USERS[username.toLowerCase()] === password.toLowerCase()) {
      // Crear usuario y guardar en estado
      const user = { id: username.toLowerCase() };
      setUser(user);
      
      // Guardar en cookies para persistencia
      Cookies.set('authUser', username.toLowerCase(), { 
        expires: 7, // 7 días
        path: '/',
        secure: window.location.protocol === 'https:',
        sameSite: 'strict'
      });
      
      // Enviar evento de inicio de sesión a GA4
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'login', {
          method: 'credentials',
          user_type: username.toLowerCase() === 'admin' ? 'usuario_1' : 'usuario_2'
        });
        
        console.log('Evento de login enviado a GA4', username.toLowerCase());
      }
      
      return true;
    }
    
    return false;
  };

  // Función de logout
  const logout = () => {
    // Enviar evento de cierre de sesión a GA4
    if (typeof window !== 'undefined' && window.gtag && user) {
      window.gtag('event', 'logout', {
        user_type: user.id === 'admin' ? 'usuario_1' : 'usuario_2'
      });
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