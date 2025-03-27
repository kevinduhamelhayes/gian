"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to handle media queries in React components
 * @param query CSS media query string
 * @returns Boolean value indicating if the query matches
 * 
 * Example usage:
 * const isLargeScreen = useMediaQuery("(min-width: 1024px)");
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);
  
  useEffect(() => {
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
    
    // Clean up
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);
  
  return matches;
} 