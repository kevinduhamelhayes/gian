"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import { sendGAEvent } from "@/lib/ga-utils";
import { useAuth } from "@/lib/auth-context";

interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}

const menuItems: MenuItem[] = [
  { name: "Blog", href: "/" },
  { name: "Sobre Mí", href: "/sobre-mi" },
  { name: "Sobre Ti", href: "/sobre-ti" },
  { name: "Nuestro Amor", href: "/nuestro-amor" },
];

export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();
  const { user } = useAuth(); // Obtener info del usuario para GA

  const handleNavClick = (item: MenuItem) => {
    const isUser1 = user?.id === process.env.NEXT_PUBLIC_USER1_USERNAME?.toLowerCase();
    const userType = user ? (isUser1 ? 'usuario_1' : 'usuario_2') : undefined;
    const userName = user ? (isUser1 ? process.env.NEXT_PUBLIC_USER1_NAME : process.env.NEXT_PUBLIC_USER2_NAME) : undefined;

    sendGAEvent('click_nav_link', {
      link_url: item.href,
      link_location: 'header',
      link_text: item.name,
      ...(user && { user_type: userType, user_name: userName }) // Añadir info de usuario si está logueado
    });
    // La navegación la maneja el componente Link o el tag <a>
  };

  return (
    <nav>
      <div className="hidden md:flex items-center">
        {menuItems.map((item) => (
          <div key={item.href} className="ml-4 md:ml-8">
            {/* Usar Link para navegación interna de Next.js */}
            <Link
              href={item.href}
              onClick={() => handleNavClick(item)}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-bronze-600 text-bronze-700 font-handwritten text-lg",
                pathname === item.href && "font-bold text-bronze-800"
              )}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" className="text-bronze-700" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavClick(item)}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2 font-handwritten text-xl text-bronze-700",
                      pathname === item.href && "font-bold text-bronze-800"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export const Header: FunctionComponent = () => {
  const { user } = useAuth(); // Obtener info del usuario para GA

  const handleLogoClick = () => {
    const isUser1 = user?.id === process.env.NEXT_PUBLIC_USER1_USERNAME?.toLowerCase();
    const userType = user ? (isUser1 ? 'usuario_1' : 'usuario_2') : undefined;
    const userName = user ? (isUser1 ? process.env.NEXT_PUBLIC_USER1_NAME : process.env.NEXT_PUBLIC_USER2_NAME) : undefined;

    sendGAEvent('click_nav_link', {
      link_url: '/',
      link_location: 'header_logo',
      link_text: config.blog.name,
      ...(user && { user_type: userType, user_name: userName })
    });
  };

  return (
    <section className="flex items-center justify-between mt-8 md:mt-16 mb-12 border-b border-bronze-300 pb-4">
      <Link href="/" onClick={handleLogoClick}>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight font-script text-bronze-700 hover:text-bronze-600 transition-colors">
          {config.blog.name}
        </h1>
      </Link>
      <Navigation />
    </section>
  );
};
