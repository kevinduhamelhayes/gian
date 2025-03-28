"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

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
      localStorage.setItem('authUser', JSON.stringify(userInfo));
      return true;
    }
    
    return false;
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  // Comprobar si ya hay una sesión guardada al cargar la página
  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser) as User;
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('authUser');
      }
    }
    
    setIsLoading(false);
  }, []);

  // Valores del contexto
  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    isLoading,
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