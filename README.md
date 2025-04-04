# Gianina - Blog Personal

Este proyecto es un blog personal desarrollado con Next.js 14, diseñado para compartir momentos especiales a través de posts con imágenes y contenido personalizado.

## Características

- **Diseño Moderno y Elegante**: Interfaz de usuario intuitiva y atractiva con estética personalizada
- **Sistema de Posts Locales**: Contenido gestionado a través de archivos locales sin dependencia de CMS externos
- **Carrusel de Imágenes**: Visualización optimizada de imágenes en un carrusel intuitivo
- **Ordenamiento Personalizado**: Sistema flexible para ordenar posts según preferencias
- **Compatibilidad con Dispositivos Móviles**: Diseño responsive para una experiencia óptima en cualquier dispositivo
- **Modo Oscuro/Claro**: Soporte para diferentes preferencias de visualización
- **Optimización de Imágenes**: Manejo inteligente de imágenes con fallbacks y validación

## Tecnologías

- [Next.js 14](https://nextjs.org/) con App Router y TypeScript
- [Tailwind CSS](https://tailwindcss.com/) para estilos
- [Shadcn UI](https://ui.shadcn.com/) para componentes de interfaz
- [React](https://react.dev/) para construcción de la interfaz de usuario
- [TypeScript](https://www.typescriptlang.org/) para seguridad de tipos

## Estructura del Proyecto

- `/public/images/blog/`: Almacena imágenes de cada post en carpetas organizadas por slug
- `/src/lib/posts/`: Contiene archivos con la definición de cada post
- `/src/components/`: Componentes reutilizables (BlogCarousel, BlogPostPreview, etc.)
- `/src/app/`: Rutas y páginas de la aplicación

## Cómo Añadir un Nuevo Post

1. Crear una nueva carpeta en `/public/images/blog/` con el slug del post
2. Agregar las imágenes del post en la carpeta (numeradas del 1 al N con extensión .jpg)
3. Crear un archivo TypeScript en `/src/lib/posts/` con el nombre del slug
4. Actualizar el array de posts en `/src/lib/posts/index.ts`

## Utilidades Clave

- **Manejo de Imágenes**: `image-utils.ts` proporciona funciones para validar y obtener rutas de imágenes
- **Ordenamiento de Posts**: Opciones configurables para ordenar posts por fecha o por orden personalizado
- **Debugging**: Herramientas para verificar la existencia de imágenes y solucionar problemas

## Configuración de Desarrollo

Para ejecutar el proyecto localmente:

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

Accede a [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## Despliegue

El proyecto está configurado para ser desplegado en plataformas como Vercel o Netlify.

```bash
# Construir para producción
npm run build

# Iniciar versión de producción
npm start
```

---

Desarrollado con ❤️ para Gianina
