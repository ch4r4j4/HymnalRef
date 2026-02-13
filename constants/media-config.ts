// constants/media-config.ts

/**
 * Configuración de URLs para archivos multimedia
 * 
 * INSTRUCCIONES:
 * 1. Crea un bucket en Cloudflare R2
 * 2. Sube tus archivos con esta estructura:
 *    - /audio/hymn_8.mp3, hymn_45.mp3, etc.
 *    - /partituras/hymn_8.pdf, hymn_45.pdf, etc.
 * 3. Haz el bucket público
 * 4. Copia la URL pública y pégala abajo
 */

// 🔧 CONFIGURA AQUÍ TU URL DE CLOUDFLARE R2
// Ejemplo: https://pub-abc123.r2.dev
export const CLOUDFLARE_R2_BASE_URL = 'https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev';

// No toques estas líneas ⬇️
export const AUDIO_BASE_URL = `${CLOUDFLARE_R2_BASE_URL}/audio`;
export const PDF_BASE_URL = `${CLOUDFLARE_R2_BASE_URL}/partituras`;

/**
 * Obtiene la URL del audio de un himno
 */
export const getAudioUrl = (hymnNumber: number): string => {
  return `${AUDIO_BASE_URL}/hymn_${hymnNumber}.mp3`;
};

/**
 * Obtiene la URL del PDF de un himno
 */
export const getPDFUrl = (hymnNumber: number): string => {
  return `${PDF_BASE_URL}/hymn_${hymnNumber}.pdf`;
};

/**
 * Verifica si las URLs están configuradas
 */
export const isMediaConfigured = (): boolean => {
  return !CLOUDFLARE_R2_BASE_URL.includes('tu-bucket-aqui');
};