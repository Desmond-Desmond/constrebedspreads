export const WHATSAPP_NUMBER = "2348038315509";
export const DEFAULT_MESSAGE = "Hello Constre Bedspreads, I would like to order a bedspread.";

export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function productMessage(name: string, size?: string) {
  const sizePart = size ? ` (Size: ${size})` : "";
  return `Hello Constre Bedspreads, I would like to order the "${name}"${sizePart}. Please share availability and delivery details.`;
}
