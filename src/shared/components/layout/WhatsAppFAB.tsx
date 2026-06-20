
import { MessageCircle } from 'lucide-react';

export function WhatsAppFAB() {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '221784296313';
  const message = encodeURIComponent("Bonjour Solinexia, je souhaite échanger sur un projet.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-success hover:bg-success/90 text-white rounded-full flex items-center justify-center shadow-lg shadow-success/30 hover:scale-110 transition-all duration-300 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Discutons de votre projet !
      </span>
    </a>
  );
}
