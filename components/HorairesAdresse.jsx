import config from '@/data/config.json';
import { IconClock, IconMapPin, IconCheckCircle, IconParking } from './Icons';

export default function HorairesAdresse() {
  return (
    <section className="w-full bg-blanc py-16 sm:py-24" id="contact-info">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* En-tête */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="w-2 h-2 rounded-full bg-rouge mb-2" />
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-noir tracking-tight">
            Horaires &amp; Localisation
          </h2>
          <p className="font-sans text-sm sm:text-base text-noir/70 mt-2">
            Nous vous accueillons tous les jours avec le sourire au cœur de la ville carrefour de {config.ville}.
          </p>
        </div>

        {/* 2 Cartes d'informations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Carte 1 : Horaires */}
          <div className="p-6 sm:p-8 rounded-2xl bg-blanc border border-gris-clair shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rouge/10 flex items-center justify-center text-rouge flex-shrink-0">
                <IconClock className="w-6 h-6" />
              </div>
              <div>
                <span className="font-heading text-xs uppercase tracking-wider text-noir/50 block font-semibold">
                  Disponibilité
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-noir mt-0.5">
                  Horaires d'ouverture
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <div className="p-4 rounded-xl bg-gris-clair flex items-center justify-between">
                <span className="font-heading text-sm sm:text-base text-noir font-semibold">
                  Lundi — Dimanche
                </span>
                <span className="font-heading text-sm sm:text-base text-rouge font-bold">
                  {config.horaires.replace('Tous les jours, ', '')}
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-noir/70 flex items-center gap-2 mt-2">
                <IconCheckCircle className="w-4 h-4 text-rouge flex-shrink-0" />
                <span>Service continu sur place, à emporter et livraison locale express.</span>
              </p>
            </div>
          </div>

          {/* Carte 2 : Adresse & Accès */}
          <div className="p-6 sm:p-8 rounded-2xl bg-blanc border border-gris-clair shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rouge/10 flex items-center justify-center text-rouge flex-shrink-0">
                <IconMapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="font-heading text-xs uppercase tracking-wider text-noir/50 block font-semibold">
                  Emplacement
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-noir mt-0.5">
                  Notre adresse
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <div className="p-4 rounded-xl bg-gris-clair">
                <p className="font-heading text-sm sm:text-base text-noir font-bold">
                  {config.adresse}
                </p>
                <p className="font-sans text-xs sm:text-sm text-noir/70 mt-1">
                  {config.adresse_details || `République du ${config.pays} • Axe principal ${config.quartier}`}
                </p>
              </div>
              <p className="font-sans text-xs sm:text-sm text-noir/70 flex items-center gap-2 mt-2">
                <IconParking className="w-4 h-4 text-rouge flex-shrink-0" />
                <span>Espace de stationnement sécurisé gratuit pour tous nos clients.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

