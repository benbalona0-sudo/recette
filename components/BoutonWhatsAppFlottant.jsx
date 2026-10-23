import { getWhatsAppLink } from '@/lib/whatsapp';
import { IconWhatsApp } from './Icons';

export default function BoutonWhatsAppFlottant() {
  const whatsappUrl = getWhatsAppLink("Bonjour Recette d'Afrique, j'aimerais avoir des informations sur votre carte.");

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Commander ou discuter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-rouge text-blanc flex items-center justify-center shadow-lg hover:opacity-95 hover:scale-105 active:scale-95 transition-all focus:outline-none"
    >
      <IconWhatsApp className="w-7 h-7" />
    </a>
  );
}

