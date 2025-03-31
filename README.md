# Gianina - Private Blog & Memory Album

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/) [![Shadcn/ui](https://img.shields.io/badge/shadcn/ui-black?logo=shadcn-ui)](https://ui.shadcn.com/) [![Google Analytics](https://img.shields.io/badge/Google_Analytics-E94E1B?logo=google-analytics)](https://analytics.google.com/)

Este proyecto es un blog privado y álbum de recuerdos creado con Next.js, TypeScript y Tailwind CSS. Fue diseñado específicamente para dos usuarios, con contenido local (posts y markdown en el código fuente) y un sistema de autenticación simple basado en variables de entorno.

## Propósito Principal (Versión Actual)

*   **Compartir Recuerdos y Pensamientos:** Funciona como un diario digital y un espacio para compartir historias y reflexiones entre dos personas específicas.
*   **Contenido Local:** Los posts del blog y las páginas estáticas (Sobre Mí, Sobre Ti, Nuestro Amor) están definidos directamente en el código fuente (TypeScript/Markdown).
*   **Autenticación Simple:** Un sistema básico de login protege el contenido, validando usuarios contra credenciales almacenadas en variables de entorno (`.env.local`).
*   **Diseño Personalizado:** Utiliza Tailwind CSS y Shadcn/ui para un diseño visual limpio y adaptado, con un tema "bronce" predominante y modo oscuro.
*   **Análisis de Uso:** Integra Google Analytics 4 (GA4) para rastrear interacciones clave como clics, visualización de posts, profundidad de scroll y uso del carrusel, diferenciando entre los dos usuarios autenticados.

## Características Implementadas

*   **Blog con Posts Locales:** Sistema para definir posts en archivos `.ts` con metadatos (título, slug, descripción, imagen, etiquetas, etc.) y contenido en Markdown.
*   **Paginación:** Paginación en la página principal del blog.
*   **Páginas Estáticas:** Secciones "Sobre Mí", "Sobre Ti" y "Nuestro Amor" con contenido Markdown e imágenes.
*   **Carruseles de Imágenes:** Componente `BlogCarousel` reutilizable para mostrar imágenes en posts y páginas estáticas, con soporte para autoplay y seguimiento de interacciones en GA4.
*   **Autenticación Básica:** Página de login (`/login`) y middleware para proteger rutas. El estado de autenticación se maneja con React Context (`AuthContext`) y cookies.
*   **Página de Términos:** Página (`/terminos`) que los usuarios deben aceptar después del primer login (la aceptación se guarda en `localStorage` y cookie).
*   **Modo Oscuro:** Toggle para cambiar entre tema claro y oscuro (`next-themes`).
*   **Diseño Responsivo:** Adaptado para diferentes tamaños de pantalla.
*   **Integración con Google Analytics 4:**
    *   Configuración inicial de GA4.
    *   Utilidad `sendGAEvent` para enviar eventos personalizados.
    *   Eventos rastreados:
        *   `page_view` (automático por GA4 script)
        *   `login` / `logout`
        *   `accept_terms`
        *   `click_nav_link` (Header, logo)
        *   `click_post_link` (Home, página de tag)
        *   `click_tag_link` (Post preview, página de tags)
        *   `carousel_interaction` (select_dot, prev_arrow, next_arrow)
        *   `scroll_depth_section` (25%, 50%, 75%, 90% en posts y páginas largas)
        *   `theme_toggle`
    *   Envío de parámetros personalizados (e.g., `user_type`, `user_name`, `post_slug`, `link_location`, `scroll_percentage`).
*   **Optimización de Imágenes:** Uso de `next/image` para optimización automática.
*   **Administración Simple:**
    *   Página `/admin/image-checker` para verificar la existencia y consistencia de las rutas de imágenes de los posts (útil en desarrollo).

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (v14+ con App Router)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes UI:** [Shadcn/ui](https://ui.shadcn.com/)
*   **Gestión de Estado (Auth):** React Context API
*   **Markdown Rendering:** `react-markdown`
*   **Análisis:** Google Analytics 4
*   **Despliegue:** Vercel (recomendado)

## Estructura del Proyecto

```
/
├── public/             # Archivos estáticos (imágenes, fuentes)
│   └── images/
│       ├── blog/       # Imágenes específicas de los posts (organizadas por slug)
│       ├── nuestro-amor/
│       ├── sobre-mi/
│       ├── sobre-ti/
│       └── ...         # Otras imágenes globales
├── src/
│   ├── app/            # Rutas del App Router (páginas y APIs)
│   │   ├── (auth)/     # Grupo de rutas para autenticación (login)
│   │   ├── (main)/     # Grupo de rutas principales (protegidas)
│   │   │   ├── admin/      # Rutas de administración
│   │   │   ├── blog/       # Rutas del blog ([slug], page)
│   │   │   ├── nuestro-amor/
│   │   │   ├── sobre-mi/
│   │   │   ├── sobre-ti/
│   │   │   ├── tag/        # Rutas para tags ([tag], page)
│   │   │   ├── layout.tsx  # Layout principal (protegido)
│   │   │   └── page.tsx    # Página de inicio
│   │   ├── api/          # Rutas de API (si fueran necesarias)
│   │   ├── layout.tsx    # Layout raíz
│   │   ├── globals.css   # Estilos globales
│   │   ├── not-found.tsx # Página 404
│   │   └── providers.tsx # Proveedores de contexto (Theme, Auth, Query)
│   ├── components/     # Componentes React reutilizables
│   │   ├── ui/         # Componentes Shadcn/ui
│   │   ├── BlogCarousel.tsx
│   │   ├── BlogPostContent.tsx
│   │   ├── BlogPostPreview.tsx
│   │   ├── DarkModeToggle.tsx
│   │   ├── Footer.tsx
│   │   ├── GoogleAnalytics.tsx
│   │   ├── Header.tsx
│   │   └── UserTracker.tsx # Componente para rastreo GA específico de usuario
│   ├── hooks/            # Hooks personalizados (useMediaQuery, useToast)
│   ├── lib/              # Lógica core, utilidades, datos
│   │   ├── posts/        # Definiciones de posts locales (.ts)
│   │   ├── utils/        # Funciones de utilidad generales
│   │   ├── auth-context.tsx # Contexto y proveedor de autenticación
│   │   ├── ga-utils.ts   # Utilidad para enviar eventos GA4
│   │   ├── image-utils.ts # Utilidades para manejo de imágenes
│   │   ├── local-posts.ts # API simulada para acceder a posts locales
│   │   └── ...
│   ├── types/            # Definiciones de tipos globales (TypeScript)
│   ├── config.ts         # Configuración general del sitio/blog
│   └── middleware.ts     # Middleware de Next.js (para proteger rutas)
├── .env.local          # Variables de entorno (credenciales, ID de GA) - NO SUBIR A GIT
├── next.config.mjs     # Configuración de Next.js
├── package.json
├── tailwind.config.ts  # Configuración de Tailwind CSS
└── tsconfig.json       # Configuración de TypeScript
```

## Variables de Entorno (`.env.local`)

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```bash
# Credenciales de Usuario 1
NEXT_PUBLIC_USER1_USERNAME=usuario1_id
NEXT_PUBLIC_USER1_PASSWORD=contraseña1
NEXT_PUBLIC_USER1_NAME="Nombre Usuario 1" # Nombre para mostrar en GA

# Credenciales de Usuario 2
NEXT_PUBLIC_USER2_USERNAME=usuario2_id
NEXT_PUBLIC_USER2_PASSWORD=contraseña2
NEXT_PUBLIC_USER2_NAME="Nombre Usuario 2" # Nombre para mostrar en GA

# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**IMPORTANTE:** Asegúrate de que este archivo esté en tu `.gitignore` para no exponer las credenciales.

## Instalación y Ejecución Local

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/gianina.git # Reemplaza con la URL real si está en GitHub
    cd gianina
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    # o
    yarn install
    # o
    pnpm install
    ```
3.  **Crear y configurar `.env.local`:** Copia `.env.example` (si existe) a `.env.local` y rellena las variables como se describe arriba.
4.  **Ejecutar en modo desarrollo:**
    ```bash
    npm run dev
    # o
    yarn dev
    # o
    pnpm dev
    ```
5.  Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Despliegue

Se recomienda desplegar en [Vercel](https://vercel.com/), ya que ofrece una integración óptima con Next.js.

1.  Crea una cuenta en Vercel.
2.  Conecta tu repositorio Git (GitHub, GitLab, Bitbucket).
3.  Importa el proyecto.
4.  **Configura las Variables de Entorno** en la configuración del proyecto en Vercel (igual que en `.env.local`).
5.  Despliega.

---

## Evolución Futura: Base para un Proyecto con Cloud Auth y Headless CMS

Este proyecto, aunque simple en su gestión de contenido y autenticación, sienta bases sólidas que pueden evolucionar hacia una solución más robusta y escalable utilizando autenticación en la nube y un CMS externo.

### Conceptos Clave a Mantener de Este Proyecto:

*   **Estructura con App Router:** La organización de rutas y layouts es moderna y eficiente.
*   **TypeScript:** Mantenlo para seguridad de tipos y mejor DX.
*   **Tailwind CSS + Shadcn/ui:** Excelente combinación para UI personalizable y rápida.
*   **Componentes Reutilizables:** La separación de componentes (`BlogCarousel`, `BlogPostPreview`, `Header`, `Footer`, etc.) es buena práctica.
*   **Integración GA4 Detallada:** El sistema de seguimiento de eventos con parámetros personalizados es valioso y puede adaptarse.
*   **Optimización Next.js:** Aprovechar `next/image`, Server Components donde sea posible, etc.
*   **Proveedores de Contexto:** El uso de `Providers` para envolver la app es correcto.

### Pasos y Consideraciones para la Evolución:

1.  **Autenticación en la Nube:**
    *   **Reemplazar `auth-context.tsx`:** En lugar de la lógica local con `VALID_USERS` y cookies simples, integra un proveedor de autenticación.
    *   **Opciones Populares:**
        *   [**NextAuth.js (Auth.js):**](https://next-auth.js.org/) Solución muy popular y completa para Next.js. Soporta múltiples proveedores (Google, GitHub, Email/Password, Credenciales, etc.) y gestiona sesiones/tokens.
        *   [**Clerk:**](https://clerk.dev/) Plataforma de autenticación y gestión de usuarios completa, fácil de integrar con Next.js. Ofrece UI pre-construida.
        *   [**Supabase Auth:**](https://supabase.com/docs/guides/auth) Si ya usas Supabase como BaaS.
        *   [**Firebase Authentication:**](https://firebase.google.com/docs/auth) Otra opción robusta de Google.
    *   **Implementación:**
        *   Instala el SDK/librería correspondiente.
        *   Configura las rutas API necesarias (e.g., `/api/auth/[...nextauth]`).
        *   Reemplaza el `AuthContext` por el proveedor de la librería elegida (e.g., `<SessionProvider>` de NextAuth).
        *   Actualiza el `middleware.ts` para usar la lógica de protección de rutas de la nueva librería.
        *   Adapta los componentes (`Header`, `Footer`, `Login Page`) para usar los hooks y estado de la nueva librería (e.g., `useSession` de NextAuth).

2.  **Headless CMS (Sistema de Gestión de Contenido):**
    *   **Reemplazar `local-posts.ts` y `/src/lib/posts/`:** El contenido ya no vivirá en archivos locales. Se obtendrá vía API desde un CMS.
    *   **Opciones Populares:**
        *   [**Sanity:**](https://www.sanity.io/) Muy flexible, excelente DX, buen plan gratuito.
        *   [**Contentful:**](https://www.contentful.com/) Robusto, popular en empresas, interfaz amigable.
        *   [**Strapi:**](https://strapi.io/) Open-source, auto-hospedable o cloud.
        *   [**Storyblok:**](https://www.storyblok.com/) Enfocado en componentes visuales.
        *   [**WordPress (Headless):**](https://developer.wordpress.org/rest-api/) Si ya tienes familiaridad con WordPress.
    *   **Implementación:**
        *   Configura tu modelo de contenido en el CMS elegido (e.g., "Post" con campos para título, slug, contenido, imagen principal, imágenes de carrusel, etiquetas, fecha, etc.).
        *   Obtén las credenciales de API (tokens, URLs). Guárdalas en variables de entorno.
        *   **Fetching de Datos:**
            *   En las páginas que necesitan datos del CMS (e.g., `app/page.tsx`, `app/blog/[slug]/page.tsx`, `app/tag/[tag]/page.tsx`), utiliza `fetch` o un cliente SDK del CMS (si lo provee) para obtener los datos.
            *   Puedes hacer fetching en Server Components para SSR/SSG o en Client Components usando `useEffect` o librerías como `react-query`/`swr`.
            *   Adapta las funciones `generateMetadata` y `generateStaticParams` (si usas SSG) para obtener datos del CMS.
        *   **Renderizado:**
            *   Adapta los componentes (`BlogPostContent`, `BlogPostPreview`) para recibir y mostrar los datos obtenidos del CMS.
            *   El contenido principal (antes Markdown) podría venir como Rich Text o bloques desde el CMS. Necesitarás un renderizador adecuado (muchos CMS ofrecen librerías para React).

3.  **Adaptar GA4:**
    *   La lógica en `ga-utils.ts` y `UserTracker.tsx` sigue siendo válida.
    *   Asegúrate de seguir pasando los identificadores de usuario (`user_type`, `user_name`) obtenidos del *nuevo* sistema de autenticación a los eventos `sendGAEvent`.

4.  **Revisar Middleware:** El `middleware.ts` necesitará ser actualizado para trabajar con el nuevo sistema de autenticación (e.g., verificar tokens/sesiones de NextAuth o Clerk en lugar de la cookie simple).

### Beneficios de la Evolución:

*   **Escalabilidad:** Manejo de contenido y usuarios más robusto.
*   **Facilidad de Edición:** Permite a usuarios no técnicos actualizar el contenido a través de la interfaz del CMS.
*   **Seguridad:** Autenticación gestionada por proveedores especializados.
*   **Flexibilidad:** Desacopla el frontend del backend de contenido.

Este proyecto actual, con su enfoque en la claridad, componentes bien definidos y seguimiento detallado, proporciona una excelente base sobre la cual construir esta versión más avanzada.
