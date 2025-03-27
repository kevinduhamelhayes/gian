/**
 * Utility functions for generating IDs and other common helpers
 */

/**
 * Generates a unique random ID
 * @returns A randomly generated string ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15);
}; 