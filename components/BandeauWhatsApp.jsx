import config from '@/data/config.json';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { IconShoppingBag, IconWhatsApp } from './Icons';

export default function BandeauWhatsApp() {
  const whatsappUrl = getWhatsAppLink("Bonjour Recette d'Afrique, je souhaite réserver une table ou commander à emporter.");

  return (
    <section className="w-full bg-blanc pb-16 sm:pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto p-6 sm:p-10 rounded-2xl bg-noir text-blanc flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-blanc/10">
          {/* Texte d'appel */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-12 h-12 rounded-xl bg-rouge flex items-center justify-center flex-shrink-0 text-blanc shadow-md">
              <IconShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-blanc">
                Envie de réserver une table ou commander à emporter ?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-blanc/80 mt-1">
                Contactez-nous directement sur WhatsApp au{' '}
                <strong className="text-blanc font-bold">{config.telephone}</strong> pour un service rapide.
              </p>
            </div>
          </div>

          {/* Bouton d'action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-rouge text-blanc font-heading text-sm font-bold hover:opacity-90 active:scale-95 transition-all flex-shrink-0 shadow-lg"
          >
            <IconWhatsApp className="w-4 h-4 mr-2" />
            <span>Écrire sur WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

