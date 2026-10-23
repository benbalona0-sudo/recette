import Image from 'next/image';
import config from '@/data/config.json';
import { IconMenuRestaurant, IconPhone } from './Icons';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-noir pt-20">
      {/* Photo d'ambiance culinaire avec voile noir à 60% */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-accueil.webp"
          alt="Table culinaire béninoise garnie de marmites traditionnelles et mets fumants à Djougou"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Voile 60% pour garder la photo visible tout en garantissant un contraste optimal */}
        <div className="absolute inset-0 bg-noir/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-noir/70" />
      </div>

      {/* Contenu Hero */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-20 sm:pb-28 flex flex-col items-center text-center">
        {/* Badge d'origine */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-noir/80 border border-blanc/20 shadow-xl mb-6">
          <span className="w-2 h-2 rounded-full bg-rouge animate-pulse" />
          <span className="font-heading text-xs uppercase tracking-widest text-blanc font-semibold">
            Maison Fondée à {config.quartier}, {config.ville}
          </span>
        </div>

        {/* Titre principal */}
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-blanc font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
          {config.slogan}
        </h1>

        {/* Sous-titre */}
        <p className="font-sans text-base sm:text-lg text-blanc/80 max-w-2xl mt-4 sm:mt-6 leading-relaxed">
          {config.description}
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10 w-full sm:w-auto">
          <a
            href="#menu-phares"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-rouge text-blanc font-heading text-sm sm:text-base font-bold tracking-wide hover:opacity-90 active:scale-95 transition-all shadow-md"
          >
            <IconMenuRestaurant className="w-5 h-5 mr-2" />
            <span>Voir le menu</span>
          </a>
          <a
            href="#contact-info"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-blanc text-noir font-heading text-sm sm:text-base font-bold tracking-wide hover:bg-gris-clair active:scale-95 transition-all shadow-md"
          >
            <IconPhone className="w-5 h-5 mr-2" />
            <span>Nous contacter</span>
          </a>
        </div>

        {/* 4 Atouts / Badges dynamiques depuis config.json */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-14 sm:mt-20 max-w-4xl w-full">
          {config.atouts.map((atout, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-noir/70 border border-blanc/10 backdrop-blur-sm"
            >
              <span className="font-heading text-lg sm:text-xl text-rouge font-extrabold">
                {atout.valeur}
              </span>
              <span className="font-heading text-xs sm:text-sm text-blanc uppercase tracking-wider mt-1 font-semibold">
                {atout.titre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

