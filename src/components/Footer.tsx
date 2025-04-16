"use client";
import { config } from "@/config";
import { Heart, LogOut } from "lucide-react";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";

export const Footer: FunctionComponent = () => {
  const { logout, user } = useAuth();
  const router = useRouter();
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  const handleLogout = () => {
    logout();
    // Redirigir a la página de login después de cerrar sesión
    router.push('/login');
  };

  return (
    <section className="mt-8 sm:mt-12 md:mt-20 mb-10 sm:mb-16 border-t border-bronze-300 pt-6 sm:pt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div className="text-base md:text-lg text-bronze-700 font-handwritten text-center sm:text-left">
          © {config.blog.copyright} {year ?? ''}
        </div>
        <div className="text-sm text-bronze-600 hidden lg:block font-handwritten">
          <span className="flex items-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para {config.blog.name}
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          {user && (
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleLogout}
              className="text-bronze-600 border-bronze-300 hover:bg-bronze-100 dark:text-bronze-300 dark:border-bronze-700 dark:hover:bg-bronze-800" 
              title="Cerrar sesión"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          )}
          <DarkModeToggle />
        </div>
      </div>
      <div className="text-sm text-bronze-600 lg:hidden font-handwritten mt-4 text-center">
        <span className="flex items-center justify-center gap-2">
          Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para {config.blog.name}
        </span>
      </div>
    </section>
  );
};
