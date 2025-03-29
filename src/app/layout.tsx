import { config } from "@/config";
import { Analytics } from '@vercel/analytics/react';
import { signOgImageUrl } from "@/lib/og-image";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Dancing_Script, Indie_Flower, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import dynamic from 'next/dynamic';

// Importar GoogleAnalytics y UserTracker con carga dinámica para evitar SSR
const GoogleAnalytics = dynamic(() => import('@/components/GoogleAnalytics'), { ssr: false });
const UserTracker = dynamic(() => import('@/components/UserTracker'), { ssr: false });

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
  title: {
    absolute: config.blog.metadata.title.absolute,
    default: config.blog.metadata.title.default,
    template: config.blog.metadata.title.template,
  },
  description: config.blog.metadata.description,
  keywords: ["amor", "recuerdos", "blog personal", "historias de amor", "momentos especiales"],
  authors: [{ name: "Kevin" }],
  creator: "Kevin",
  publisher: "Kevin",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon.ico", sizes: "48x48", type: "image/x-icon" }
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: config.blog.metadata.title.default,
    description: config.blog.metadata.description,
    type: "website",
    locale: "es_ES",
    images: [
      signOgImageUrl({
        title: config.blog.name,
      }),
    ],
    siteName: config.blog.name,
  },
  twitter: {
    card: "summary_large_image",
    title: config.blog.metadata.title.default,
    description: config.blog.metadata.description,
    images: [signOgImageUrl({ title: config.blog.name })],
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
          <GoogleAnalytics />
          <UserTracker />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
