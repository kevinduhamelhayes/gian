import { config } from "@/config";
import { Analytics } from '@vercel/analytics/react';
import { signOgImageUrl } from "@/lib/og-image";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Dancing_Script, Indie_Flower, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// Importar directamente los componentes (serán renderizados en el cliente debido a su "use client" directive)
import GoogleAnalytics from '@/components/GoogleAnalytics';
import UserTracker from '@/components/UserTracker';

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fontScript = Dancing_Script({ subsets: ["latin"], variable: "--font-script" });
const fontHandwritten = Indie_Flower({ weight: "400", subsets: ["latin"], variable: "--font-handwritten" });

// Exportar configuración de viewport separada según las recomendaciones
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#B8860B", // Color bronce
};

export const metadata: Metadata = {
  metadataBase: new URL(config.url),
  title: {
    default: config.blog.metadata.title.default,
    template: `%s - ${config.blog.metadata.title.default}`,
  },
  description: config.blog.metadata.description,
  keywords: ["amor", "recuerdos", "blog personal", "historias de amor", "momentos especiales"],
  authors: [{ name: "Kevin" }],
  creator: "Kevin",
  publisher: "Kevin",
  robots: {
    follow: true,
    index: true,
  },
  icons: {
    icon: [
      {
        url: '/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/icons/apple-touch-icon.png',
      sizes: '180x180',
    },
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    title: config.blog.metadata.title.default,
    description: config.blog.metadata.description,
    url: config.url,
    siteName: config.blog.metadata.title.default,
    images: [
      {
        url: signOgImageUrl({
          title: config.blog.metadata.title.default,
        }),
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.blog.metadata.title.default,
    description: config.blog.metadata.description,
    images: [
      signOgImageUrl({
        title: config.blog.metadata.title.default,
      }),
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-6xl m-auto",
          fontSans.variable,
          fontScript.variable,
          fontHandwritten.variable
        )}
      >
        <Providers>
          <main>{children}</main>
          {/* Los componentes ya tienen "use client" directive, por lo que se ejecutarán solo en el cliente */}
          <GoogleAnalytics />
          <UserTracker />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
