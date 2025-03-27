/**
 * Debug utilities to help diagnose issues, particularly with images
 */

/**
 * Logs information about available posts and their image paths
 * This is meant to be used in development only
 * 
 * @param posts - The array of posts to analyze
 */
export const logPostImageInfo = (posts: any[]): void => {
  if (typeof window === 'undefined') return; // Only run on client side
  
  console.group('📊 Post Image Analysis');
  console.log(`Total posts: ${posts.length}`);
  
  posts.forEach((post: any) => {
    console.group(`📝 ${post.title} (${post.slug})`);
    console.log(`Main image: ${post.image}`);
    console.log(`Carousel images: ${post.carouselImages?.length || 0}`);
    if (post.carouselImages?.length) {
      console.log('Carousel image paths:');
      post.carouselImages.forEach((img: string, i: number) => {
        console.log(`  ${i+1}. ${img}`);
      });
    }
    console.groupEnd();
  });
  
  console.groupEnd();
};

/**
 * Tests if an image exists by attempting to load it
 * This is a client-side utility only
 * 
 * @param imagePath - The path to the image to test
 * @returns Promise that resolves to true if the image exists, false otherwise
 */
export const testImageExists = (imagePath: string): Promise<boolean> => {
  if (typeof window === 'undefined') return Promise.resolve(false);
  
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = imagePath;
  });
};

/**
 * Checks the existence of multiple images and logs the results
 * 
 * @param imagePaths - Array of image paths to check
 */
export const checkMultipleImages = async (imagePaths: string[]): Promise<void> => {
  if (typeof window === 'undefined') return;
  
  console.group('🖼️ Image Existence Check');
  console.log(`Testing ${imagePaths.length} images...`);
  
  const results = await Promise.all(
    imagePaths.map(async (path) => ({
      path,
      exists: await testImageExists(path)
    }))
  );
  
  const existingImages = results.filter(r => r.exists);
  const missingImages = results.filter(r => !r.exists);
  
  console.log(`✅ Found ${existingImages.length} images`);
  console.log(`❌ Missing ${missingImages.length} images`);
  
  if (missingImages.length > 0) {
    console.group('Missing Images:');
    missingImages.forEach(img => console.log(img.path));
    console.groupEnd();
  }
  
  console.groupEnd();
}; 