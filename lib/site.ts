// Central place to manage the WhatsApp contact link.
// Replace the number with the real Fango Systems WhatsApp business line.
const WHATSAPP_NUMBER = '526531469643' // MX country code + number, digits only
const WHATSAPP_MESSAGE = 'Hola Fango Systems, quiero que mi negocio fluya.'

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`
