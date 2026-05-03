import { whatsappLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order via WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping-slow opacity-60" />
      <span className="relative flex items-center gap-2 bg-whatsapp text-white pl-4 pr-5 py-3.5 rounded-full shadow-luxury hover:scale-105 transition-transform duration-300">
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-medium">Chat to Order</span>
      </span>
    </a>
  );
}
