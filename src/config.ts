// Tipos para la configuración global
export interface BlogMetadata {
  title: {
    absolute: string;
    default: string;
    template: string;
  };
  description: string;
}

export interface BlogConfig {
  name: string;
  copyright: string;
  metadata: BlogMetadata;
}

export interface WispConfig {
  blogId: string;
}

export interface Config {
  baseUrl: string;
  blog: BlogConfig;
  ogImageSecret: string;
  wisp: WispConfig;
}

/**
 * Carga y valida la configuración global del proyecto desde variables de entorno.
 * Lanza un error si falta alguna variable crítica.
 */
export function buildConfig(): Config {
  // Documentación de variables de entorno
  // NEXT_PUBLIC_BLOG_ID: string (obligatorio)
  // NEXT_PUBLIC_BLOG_DISPLAY_NAME: string (opcional)
  // NEXT_PUBLIC_BLOG_COPYRIGHT: string (opcional)
  // NEXT_DEFAULT_METADATA_DEFAULT_TITLE: string (opcional)
  // NEXT_PUBLIC_BLOG_DESCRIPTION: string (opcional)
  // NEXT_PUBLIC_BASE_URL: string (opcional, default: http://localhost:3000)
  // OG_IMAGE_SECRET: string (opcional)

  const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  if (!blogId) throw new Error("Falta la variable de entorno NEXT_PUBLIC_BLOG_ID");

  const name = process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME || "Mi amor y Nuestros Recuerdos";
  const copyright = process.env.NEXT_PUBLIC_BLOG_COPYRIGHT || "Kevin";
  const defaultTitle = process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || "Mi amor y Nuestros Recuerdos";
  const defaultDescription = process.env.NEXT_PUBLIC_BLOG_DESCRIPTION || "Un regalo al que puedes volver cada día.";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const ogImageSecret = process.env.OG_IMAGE_SECRET || "secret_used_for_signing_and_verifying_the_og_image_url";

  return {
    baseUrl,
    blog: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
    ogImageSecret,
    wisp: {
      blogId,
    },
  };
}

export const config: Config = buildConfig();
