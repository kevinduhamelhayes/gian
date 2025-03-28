"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

// Tipo para los usuarios
type User = {
  username: string;
  name: string;
};

// Interface para el contexto de autenticación
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isLoading: boolean;
}

// Valores por defecto para el contexto
const defaultContextValue: AuthContextType = {
  user: null,
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
  isLoading: true,
};

// Crear el contexto
const AuthContext = createContext<AuthContextType>(defaultContextValue);

// Hook personalizado para usar el contexto
export const useAuth = () => useContext(AuthContext);

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Usuarios hardcodeados (en producción deberían estar en .env)
  const validUsers = [
    { username: 'usuario1', password: 'clave1', name: 'Usuario Uno' },
    { username: 'usuario2', password: 'clave2', name: 'Usuario Dos' },
  ];

  // Función para iniciar sesión
  const login = (username: string, password: string): boolean => {
    const foundUser = validUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      const userInfo: User = {
        username: foundUser.username,
        name: foundUser.name,
      };
      setUser(userInfo);
      
      // Solo guardar en localStorage y cookie si estamos en el cliente
      if (typeof window !== 'undefined') {
        try {
          // Guardar en localStorage
          localStorage.setItem('authUser', JSON.stringify(userInfo));
          
          // Guardar en cookie para el middleware
          Cookies.set('authUser', JSON.stringify(userInfo), { 
            expires: 30, // 30 días
            path: '/',
            secure: window.location.protocol === 'https:',
            sameSite: 'strict'
          });
          
          console.log('User logged in:', userInfo.username);
        } catch (error) {
          console.error('Error saving auth data:', error);
        }
      }
      
      return true;
    }
    
    return false;
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    
    // Solo eliminar de localStorage y cookie si estamos en el cliente
    if (typeof window !== 'undefined') {
      try {
        // Eliminar de localStorage
        localStorage.removeItem('authUser');
        localStorage.removeItem('termsAccepted');
        
        // Eliminar cookies
        Cookies.remove('authUser', { path: '/' });
        Cookies.remove('termsAccepted', { path: '/' });
        
        console.log('User logged out');
      } catch (error) {
        console.error('Error clearing auth data:', error);
      }
      
      // Redirigir a login después de cerrar sesión
      window.location.href = '/login';
    }
  };

  // Comprobar si ya hay una sesión guardada al cargar la página
  useEffect(() => {
    // Marcar el componente como montado en el cliente
    setMounted(true);
    
    // Recuperar usuario del localStorage y/o cookie solo en el cliente
    if (typeof window !== 'undefined') {
      try {
        // Intentar recuperar de localStorage
        const storedUser = localStorage.getItem('authUser');
        
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser) as User;
          setUser(parsedUser);
          console.log('Auth restored from localStorage:', parsedUser.username);
        } else {
          // Si no está en localStorage, intentar recuperar de cookie
          const cookieUser = Cookies.get('authUser');
          if (cookieUser) {
            const parsedCookieUser = JSON.parse(cookieUser) as User;
            setUser(parsedCookieUser);
            
            // Guardar también en localStorage para coherencia
            localStorage.setItem('authUser', cookieUser);
            console.log('Auth restored from cookie:', parsedCookieUser.username);
          }
        }
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('authUser');
        Cookies.remove('authUser', { path: '/' });
      }
      
      setIsLoading(false);
    }
  }, []);

  // Valores del contexto
  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    isLoading: !mounted || isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
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