import config from '@/data/config.json';
import { IconPhone, IconFacebook, IconInstagram } from './Icons';

export default function Footer() {
  const anneeActuelle = new Date().getFullYear();

  return (
    <footer className="w-full bg-noir text-blanc border-t border-blanc/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        {/* Partie haute */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-blanc/10">
          <div>
            <span className="font-heading text-xl sm:text-2xl text-blanc font-bold block">
              {config.nom}
            </span>
            <p className="font-sans text-xs sm:text-sm text-blanc/70 mt-1">
              Saveurs authentiques du Bénin &amp; Spécialités de la Donga
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <a
              href={`tel:${config.telephone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-blanc hover:text-rouge transition-colors font-heading text-sm sm:text-base font-semibold"
            >
              <IconPhone className="w-5 h-5 text-rouge" />
              <span>{config.telephone}</span>
            </a>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-2.5">
              <a
                href={config.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Recette d'Afrique"
                className="w-9 h-9 rounded-full bg-blanc/10 flex items-center justify-center text-blanc hover:bg-rouge transition-colors"
              >
                <IconFacebook className="w-4 h-4" />
              </a>
              <a
                href={config.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Recette d'Afrique"
                className="w-9 h-9 rounded-full bg-blanc/10 flex items-center justify-center text-blanc hover:bg-rouge transition-colors"
              >
                <IconInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Partie basse : Copyright calculé et orthographe corrigée "Djougou" */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="font-sans text-xs sm:text-sm text-blanc/60">
            © {anneeActuelle} {config.nom}. Tous droits réservés. {config.quartier}, {config.ville}, {config.pays}.
          </p>
          <p className="font-heading text-xs text-blanc/60 uppercase tracking-wider font-semibold">
            Cuisine Authentique de {config.ville}
          </p>
        </div>
      </div>
    </footer>
  );
}

