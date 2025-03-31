/**
 * Envía un evento personalizado a Google Analytics 4.
 * Asegúrate de que la información del usuario (user_type, user_name)
 * se incluya en los parámetros si el evento es específico de un usuario logueado.
 *
 * @param eventName Nombre del evento (ej. 'click_nav_link')
 * @param params Objeto con los parámetros del evento
 */
export function sendGAEvent(eventName: string, params: Record<string, any> = {}): void {
  // Verificar si gtag está disponible y es una función
  if (typeof window === "undefined" || !window.gtag || typeof window.gtag !== 'function') {
    // Puedes añadir un console.warn aquí si quieres notificar que GA no está listo
    // console.warn(`GA Event ${eventName} not sent: gtag not available.`);
    return;
  }

  try {
    window.gtag("event", eventName, params);
    // console.log(`GA Event Sent: ${eventName}`, params); // Descomenta para depuración
  } catch (error) {
    console.error(`Error sending GA event ${eventName}:`, error);
  }
} 