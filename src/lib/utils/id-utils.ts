/**
 * Utility functions for generating IDs and other common helpers
 */

/**
 * Generates a unique random ID
 * @returns A randomly generated string ID
 */
export function generateClientId(): string {
  if (typeof window === 'undefined') {
    // SSR: devolver un valor fijo para evitar hydration error
    return 'ssr-id';
  }
  return Math.random().toString(36).substring(2, 15);
} 