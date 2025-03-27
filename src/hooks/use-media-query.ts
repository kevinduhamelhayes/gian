"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook that provides responsive design capabilities using CSS media queries
 * 
 * This hook lets components respond to viewport size changes or other media features
 * without having to manually add event listeners or manage window resize events.
 * 
 * @param query - A valid CSS media query string like "(min-width: 768px)" or "(prefers-color-scheme: dark)"
 * @returns A boolean indicating whether the media query currently matches
 * 
 * Example usage:
 * ```
 * const isMobile = useMediaQuery("(max-width: 767px)");
 * const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
 * const isDesktop = useMediaQuery("(min-width: 1024px)");
 * 
 * return (
 *   <div>
 *     {isMobile && <MobileLayout />}
 *     {isTablet && <TabletLayout />}
 *     {isDesktop && <DesktopLayout />}
 *   </div>
 * );
 * ```
 */
export function useMediaQuery(query: string): boolean {
  // Initialize state to false to avoid hydration mismatches
  // (will be updated in useEffect on client side)
  const [matches, setMatches] = useState<boolean>(false);
  
  useEffect(() => {
    // Only run in browser environment (not during SSR)
    if (typeof window === "undefined") return;
    
    // Create a MediaQueryList object
    const media = window.matchMedia(query);
    
    // Update the state initially
    setMatches(media.matches);
    
    // Define the callback function for handling changes
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    // Add the listener for changes
    media.addEventListener("change", listener);
    
    // Clean up by removing the listener when component unmounts
    // or when the query changes
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]); // Re-run effect if the query changes
  
  return matches;
} 