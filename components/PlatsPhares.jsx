import Image from 'next/image';
import menu from '@/data/menu.json';
import { getWhatsAppOrderLink } from '@/lib/whatsapp';
import { IconArrowRight } from './Icons';

export default function PlatsPhares() {
  // Filtrer uniquement les plats de catégorie "Plats" ayant populaire: true
  const platsPhares = menu.filter((item) => item.categorie === 'Plats' && item.populaire);

  // Formateur de prix FCFA (ex: 2 500 FCFA)
  const formatPrix = (prix) => {
    return new Intl.NumberFormat('fr-FR').format(prix) + ' FCFA';
  };

  return (
    <section className="w-full bg-blanc py-16 sm:py-24" id="menu-phares">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* En-tête de section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rouge/10 text-rouge mb-3">
            <span className="font-heading text-xs uppercase tracking-widest font-bold">
              Spécialités du Chef
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-noir font-bold tracking-tight">
            Nos plats phares
          </h2>
          <p className="font-sans text-sm sm:text-base text-noir/70 mt-3 leading-relaxed">
            Une sélection rigoureuse d'ingrédients frais du marché de Djougou, relevés de piments doux, de graines de néré et d'aromates cueillis à maturité.
          </p>
        </div>

        {/* Grille des plats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platsPhares.map((plat) => {
            const commandeUrl = getWhatsAppOrderLink(plat);
            return (
              <article
                key={plat.id}
                className="group flex flex-col bg-blanc rounded-2xl overflow-hidden border border-gris-clair shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Zone Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gris-clair">
                  <Image
                    src={`/images/${plat.image}`}
                    alt={`Assiette traditionnelle de ${plat.nom} préparée au restaurant Recette d'Afrique`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {plat.badge && (
                    <span
                      className={`absolute top-3 left-3 font-heading text-xs px-2.5 py-1 rounded-full font-semibold shadow-sm ${
                        plat.badge === 'Braisé Minute'
                          ? 'bg-rouge text-blanc'
                          : 'bg-noir/90 text-blanc'
                      }`}
                    >
                      {plat.badge}
                    </span>
                  )}
                </div>

                {/* Zone Détails */}
                <div className="flex flex-col flex-1 p-5 justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-noir group-hover:text-rouge transition-colors">
                      {plat.nom}
                    </h3>
                    <p className="font-sans text-xs text-noir/70 mt-2 line-clamp-2 leading-relaxed">
                      {plat.description}
                    </p>
                  </div>

                  {/* Prix et Bouton Commander */}
                  <div className="pt-4 mt-4 border-t border-gris-clair flex items-center justify-between">
                    <div>
                      <span className="block font-heading text-[11px] text-noir/50 uppercase tracking-wider font-semibold">
                        Portion
                      </span>
                      <span className="font-heading text-base sm:text-lg font-bold text-rouge">
                        {formatPrix(plat.prix)}
                      </span>
                    </div>

                    <a
                      href={commandeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-10 px-3.5 rounded-xl bg-noir text-blanc hover:bg-rouge transition-colors font-heading text-xs sm:text-sm font-semibold shadow-sm active:scale-95"
                    >
                      <span>Commander</span>
                      <IconArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

