import { salonConfig } from "@/config/salonConfig";

/**
 * Generates a pre-filled WhatsApp deep link for Shape-Up Hair & Beauty Studio.
 * @param serviceName Optional specific service clicked by the client.
 * @param customNote Optional custom message line.
 * @returns Fully formatted wa.me deep link URL.
 */
export function generateWhatsAppLink(serviceName?: string, customNote?: string): string {
  const phone = salonConfig.whatsappNumber;
  let message = "";

  if (serviceName) {
    message = `Hi, I'd like to book a ${serviceName} at ${salonConfig.name}. Please let me know available slots.`;
  } else {
    message = `Hi, I'd like to book an appointment at ${salonConfig.name}. Please let me know available slots.`;
  }

  if (customNote) {
    message += ` Note: ${customNote}`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
