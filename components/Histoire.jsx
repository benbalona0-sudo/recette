import Image from 'next/image';
import config from '@/data/config.json';
import { IconVerified, IconBook, IconSkillet, IconMenuRestaurant } from './Icons';

export default function Histoire() {
  const getPillarIcon = (index) => {
    switch (index) {
      case 0:
        return <IconVerified className="w-7 h-7 text-rouge mb-2" />;
      case 1:
        return <IconBook className="w-7 h-7 text-rouge mb-2" />;
      default:
        return <IconSkillet className="w-7 h-7 text-rouge mb-2" />;
    }
  };

  return (
    <section className="w-full bg-noir text-blanc py-20 sm:py-28 relative overflow-hidden" id="histoire">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Colonne gauche : Le récit */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blanc/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-rouge" />
              <span className="font-heading text-xs uppercase tracking-widest text-rouge font-bold">
                Notre histoire & tradition
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-blanc leading-tight">
              Au cœur du goût et de l'authenticité béninoise
            </h2>

            {/* Paragraphes dynamiques depuis config.json */}
            <div className="space-y-4 mt-6 font-sans text-sm sm:text-base text-blanc/80 leading-relaxed">
              {config.histoire.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* 3 Piliers dynamiques depuis config.json */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-8 sm:pt-10 mt-8 border-t border-blanc/10">
              {config.piliers.map((pilier, idx) => (
                <div key={idx} className="flex flex-col">
                  {getPillarIcon(idx)}
                  <span className="font-heading text-base font-bold text-blanc">
                    {pilier.titre}
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-blanc/70 mt-1">
                    {pilier.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite : Cadre visuel */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-blanc/10 bg-noir">
              <Image
                src="/images/histoire-cuisiniere.webp"
                alt={`Cuisinière traditionnelle préparant les spécialités du restaurant ${config.nom} à ${config.ville}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />

              {/* Badge flottant en bas */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 rounded-2xl bg-noir/90 backdrop-blur-sm border border-blanc/10 flex items-center justify-between">
                <div>
                  <span className="block font-heading text-sm sm:text-base font-bold text-blanc">
                    {config.adresse}
                  </span>
                  <span className="block font-sans text-xs text-blanc/70 mt-0.5">
                    Là où la tradition prend vie
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-rouge flex items-center justify-center text-blanc flex-shrink-0">
                  <IconMenuRestaurant className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

