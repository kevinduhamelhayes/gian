// Declaraciones globales para TypeScript
// Este archivo contiene tipos que pueden ser usados en toda la aplicación

// Extender la interfaz global Window para incluir gtag
interface Window {
  gtag: (
    command: string,
    action: string,
    params?: Record<string, any>
  ) => void;
  dataLayer: any[];
}

// Otros tipos globales pueden ser añadidos aquí 