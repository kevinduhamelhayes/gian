# Convenciones para posts e imágenes

Este documento describe las convenciones para crear y mantener posts en el blog, con especial atención a las imágenes.

## Estructura de directorios

- Los archivos de posts se encuentran en `/src/lib/posts/`
- Las imágenes de los posts se encuentran en `/public/images/blog/`

## Convención de nomenclatura

### Para archivos de post

- Cada post debe tener su propio archivo TypeScript en `/src/lib/posts/`
- El nombre del archivo debe coincidir con el slug del post
  - Ejemplo: `mi-sorpresa.ts` para el post con slug `mi-sorpresa`

### Para imágenes

- Cada post debe tener su propia carpeta de imágenes en `/public/images/blog/`
- El nombre de la carpeta debe coincidir **exactamente** con el slug del post
  - Ejemplo: `/public/images/blog/mi-sorpresa/` para el post con slug `mi-sorpresa`
- Convención para nombres de archivos de imagen:
  - Imágenes numeradas: `1.jpg`, `2.jpg`, `3.jpg`, etc.
  - La imagen `1.jpg` generalmente se usa como imagen principal/preview
  - Formatos alternativos: `.png`, `.webp`, `.jpeg`

## Cómo añadir un nuevo post

1. Crea una nueva carpeta para las imágenes en `/public/images/blog/[slug-del-post]/`
2. Añade las imágenes a esta carpeta, numerándolas secuencialmente
3. Crea un nuevo archivo TypeScript en `/src/lib/posts/[slug-del-post].ts`
4. Usa la siguiente plantilla para el contenido del archivo:

```typescript
import { LocalPost } from '../local-posts';
import { generateClientId } from '../utils/id-utils';
import { getPostImagePath, getNumberedImagePaths } from '../image-utils';

// Slug for this post
const SLUG = 'nombre-del-slug';

// Define post data
export const nombreExportacion: LocalPost = {
  id: generateClientId(),
  title: "Título del post",
  slug: SLUG,
  description: "Descripción corta del post",
  content: `
# Título del post

Contenido del post en formato Markdown...
  `,
  publishedAt: new Date("YYYY-MM-DD").toISOString(),
  updatedAt: new Date("YYYY-MM-DD").toISOString(),
  image: getPostImagePath(SLUG, '1.jpg'), // Primera imagen para la preview
  carouselImages: getNumberedImagePaths(SLUG, 5), // Para generar rutas [1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg]
  // Alternativamente, puedes especificar cada imagen manualmente:
  // carouselImages: [
  //   getPostImagePath(SLUG, '1.jpg'),
  //   getPostImagePath(SLUG, '2.jpg'),
  //   getPostImagePath(SLUG, 'imagen-especial.jpg')
  // ],
  tags: [
    { id: generateClientId(), name: "amor" },
    { id: generateClientId(), name: "categoria" }
  ],
  featured: true
};
```

5. Importa y añade el post en `/src/lib/posts/index.ts`:

```typescript
import { nombreExportacion } from './nombre-del-slug';

// En el array localPosts:
export const localPosts: LocalPost[] = [
  // ... posts existentes
  nombreExportacion,
];
```

## Utilidades para imágenes

El archivo `/src/lib/image-utils.ts` contiene varias funciones útiles para trabajar con imágenes:

- `getPostImagePath(slug, filename)`: Genera la ruta completa para una imagen
- `getNumberedImagePath(slug, index, extension)`: Genera la ruta para una imagen numerada
- `getNumberedImagePaths(slug, count, startIndex, extension)`: Genera un array de rutas numeradas
- `validateImage(imagePath, fallbackImage)`: Valida una imagen y proporciona un fallback si es necesario

## Verificación de rutas de imágenes

Puedes verificar si las rutas de las imágenes son correctas visitando la página administrativa:

`/admin/image-checker`

Esta página mostrará cualquier inconsistencia entre los slugs de los posts y las rutas de imágenes.

## Buenas prácticas

- Utiliza siempre `getPostImagePath()` para generar rutas de imágenes, no las escribas manualmente
- Mantén la consistencia en la numeración y formato de las imágenes
- La primera imagen (normalmente `1.jpg`) debe ser adecuada para la vista previa del post
- Comprime las imágenes antes de subirlas para mejorar el rendimiento
- Utiliza el mismo slug tanto para el archivo del post como para la carpeta de imágenes 