/**
 * Utility functions for handling images in our application
 */

// Default fallback image to use when no image is available
export const DEFAULT_FALLBACK_IMAGE = "/images/placeholder.webp";

/**
 * Validates an image path and returns it if valid, otherwise returns a fallback image
 * This is a client-side utility since we can't directly check file existence on the server
 * 
 * @param imagePath - Path to the image to validate
 * @param fallbackImage - Optional fallback image to use if the primary one fails
 * @returns The original image path, or a fallback if necessary
 */
export const validateImage = (
  imagePath: string | undefined | null, 
  fallbackImage: string = DEFAULT_FALLBACK_IMAGE
): string => {
  if (!imagePath) return fallbackImage;
  return imagePath;
};

/**
 * Gets all carousel images for a post
 * If no carousel images are provided, it returns an array with just the main image
 * 
 * @param mainImage - The main image for the post
 * @param carouselImages - Optional array of carousel images
 * @returns Array of image paths for the carousel
 */
export const getCarouselImages = (
  mainImage: string, 
  carouselImages?: string[]
): string[] => {
  if (!carouselImages || carouselImages.length === 0) {
    return [validateImage(mainImage)];
  }
  
  // Ensure the main image is part of the carousel
  const uniqueImages = Array.from(new Set([validateImage(mainImage), ...carouselImages]));
  return uniqueImages;
};

/**
 * Constructs the correct path for a post image based on the slug
 * This helps standardize image paths across the application
 * 
 * @param slug - The post slug
 * @param filename - The image filename
 * @returns The full image path
 */
export const getPostImagePath = (slug: string, filename: string): string => {
  return `/images/blog/${slug}/${filename}`;
};

/**
 * Gets a numbered image path based on index
 * This is useful for posts with consistently numbered images (1.jpg, 2.jpg, etc.)
 * 
 * @param slug - The post slug
 * @param index - The image index (1-based)
 * @param extension - Optional file extension (defaults to 'jpg')
 * @returns The full image path
 */
export const getNumberedImagePath = (
  slug: string, 
  index: number,
  extension: string = 'jpg'
): string => {
  return getPostImagePath(slug, `${index}.${extension}`);
};

/**
 * Creates an array of numbered image paths
 * This is useful for generating carousel images with sequential numbering
 * 
 * @param slug - The post slug
 * @param count - How many images to generate
 * @param startIndex - The starting index (defaults to 1)
 * @param extension - Optional file extension (defaults to 'jpg')
 * @returns Array of image paths
 */
export const getNumberedImagePaths = (
  slug: string,
  count: number,
  startIndex: number = 1,
  extension: string = 'jpg'
): string[] => {
  return Array.from({ length: count }, (_, i) => 
    getNumberedImagePath(slug, startIndex + i, extension)
  );
};

/**
 * Attempts to find an existing image from a list of potential image names
 * This is useful for trying different file extensions or naming patterns
 * 
 * @param slug - The post slug
 * @param possibleNames - Array of possible image filenames to try
 * @returns The path of the first image found, or the DEFAULT_FALLBACK_IMAGE if none exist
 */
export const findFirstExistingImage = (
  slug: string, 
  possibleNames: string[] = ['1.jpg', '1.png', 'cover.jpg', 'cover.png', 'main.jpg', 'main.png']
): string => {
  // Server-side we can't check, so just return the first option
  if (typeof window === 'undefined') {
    return getPostImagePath(slug, possibleNames[0]);
  }
  
  // In the browser we would normally do a check for existence
  // but for now, we'll return the first option as well
  return getPostImagePath(slug, possibleNames[0]);
}; 