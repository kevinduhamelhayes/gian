/**
 * Utility to validate image paths for blog posts
 * This helps ensure that all referenced images actually exist
 */

import { LocalPost } from '../local-posts';

/**
 * Extracts post slug from an image path
 * Example: "/images/blog/my-post/image.jpg" -> "my-post"
 */
export const extractSlugFromPath = (path: string): string | null => {
  const match = path.match(/\/images\/blog\/([^\/]+)\/[^\/]+$/);
  return match ? match[1] : null;
};

/**
 * Extracts filename from an image path
 * Example: "/images/blog/my-post/image.jpg" -> "image.jpg"
 */
export const extractFilenameFromPath = (path: string): string | null => {
  const match = path.match(/\/images\/blog\/[^\/]+\/([^\/]+)$/);
  return match ? match[1] : null;
};

/**
 * Standardizes filenames for better consistency
 * This helps when adding new images and prevents common issues
 */
export const standardizeFilename = (filename: string): string => {
  // Convert to lowercase
  let result = filename.toLowerCase();
  
  // Replace spaces with hyphens
  result = result.replace(/\s+/g, '-');
  
  return result;
};

/**
 * Creates a list of standard image names to try
 * This helps when naming conventions vary between posts
 */
export const getStandardImageNames = (index: number): string[] => {
  return [
    `${index}.jpg`,
    `${index}.jpeg`,
    `${index}.png`,
    `${index}.webp`,
    `image-${index}.jpg`,
    `image-${index}.jpeg`,
    `image-${index}.png`,
    `image-${index}.webp`
  ];
};

/**
 * Validates all image paths for a post and logs any issues
 * Only useful in client-side code
 */
export const validatePostImages = (post: LocalPost): void => {
  if (typeof window === 'undefined') return;
  
  console.group(`🖼️ Validating images for post: ${post.title}`);
  
  // Check main image
  console.log(`Main image: ${post.image}`);
  const mainSlug = extractSlugFromPath(post.image);
  if (mainSlug !== post.slug) {
    console.warn(`⚠️ Main image slug mismatch: expected "${post.slug}", got "${mainSlug}"`);
  }
  
  // Check carousel images
  if (post.carouselImages && post.carouselImages.length > 0) {
    console.log(`Carousel images: ${post.carouselImages.length}`);
    
    post.carouselImages.forEach((path, index) => {
      console.log(`${index + 1}. ${path}`);
      const carouselSlug = extractSlugFromPath(path);
      if (carouselSlug !== post.slug) {
        console.warn(`⚠️ Carousel image #${index + 1} slug mismatch: expected "${post.slug}", got "${carouselSlug}"`);
      }
    });
  } else {
    console.log('No carousel images');
  }
  
  console.groupEnd();
};

/**
 * Validates all images for all posts
 * Only useful in client-side code
 */
export const validateAllPostImages = (posts: LocalPost[]): void => {
  if (typeof window === 'undefined') return;
  
  console.group('🖼️ Validating all post images');
  posts.forEach(post => validatePostImages(post));
  console.groupEnd();
};

/**
 * Generates a suggested naming convention for post images
 * This is helpful for standardizing the naming across all posts
 */
export const suggestImageNamingConvention = (): void => {
  console.group('📋 Suggested image naming convention');
  console.log(`
For consistent image handling across all posts, follow these conventions:

1. Main/Preview Image:
   - Filename: 1.jpg or cover.jpg
   - Example: /images/blog/post-slug/1.jpg

2. Carousel Images:
   - Filenames: 1.jpg, 2.jpg, 3.jpg, etc.
   - Example: /images/blog/post-slug/2.jpg

3. Alternative Formats:
   - If JPG isn't available, use: .png, .webp, .jpeg (in that order)
   - Example: /images/blog/post-slug/1.png

4. Folder Structure:
   - Each post should have its own folder named exactly like the post slug
   - Example: /images/blog/post-slug/

5. Consistency Tips:
   - Use lowercase filenames
   - Avoid spaces (use hyphens instead)
   - Keep filenames short and descriptive
   - Number sequentially for carousel images
  `);
  console.groupEnd();
}; 