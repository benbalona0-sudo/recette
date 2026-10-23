# PROGRESS.md - Recette d'Afrique (Djougou)

## Phase en cours : Phase 1 - Vitrine

## Résumé
Site vitrine du restaurant Recette d'Afrique, Djougou (Bénin).
Stack : Next.js 14 (App Router), Tailwind CSS v3.
Infos du restaurant : /data/config.json
Plats et prix (FCFA) : /data/menu.json
Photos optimisées WebP : /public/images

## Informations du restaurant
- Nom : Recette d'Afrique
- Adresse : Quartier Madina, Djougou
- Téléphone : +229 97 00 00 00
- WhatsApp : +229 97 00 00 00 (22997000000)
- Horaires : tous les jours, 11h - 22h
- Facebook : facebook.com/recettedafrique
- Instagram : instagram.com/recettedafrique

## Tâches terminées
- Initialisation des fondations Next.js (App Router) et Tailwind CSS
- Création de la structure des dossiers : `/components`, `/data`, `/public/images`, `/design`, `/lib`
- Configuration de `tailwind.config.js` avec la palette stricte (`blanc`, `gris-clair`, `noir`, `rouge`) et polices `Inter` & `Plus Jakarta Sans`
- Création et enrichissement de `/data/config.json` (atouts, histoire, piliers, horaires, coordonnées)
- Création et enrichissement de `/data/menu.json` (badges par plat populaire, spécialités béninoises, prix FCFA)
- Création de `/lib/whatsapp.js` (liens wa.me et commandes pré-remplies)
- Téléchargement et optimisation WebP des 6 images dans `/public/images/` (toutes < 40 Ko, conformes au seuil de 200 Ko)
- Découpage et développement des composants modulaires dans `/components` :
  - `Header` (navigation responsive avec menu burger mobile 360px)
  - `Hero` (voile sombre à 60 %, slogan, boutons CTA, 4 atouts)
  - `PlatsPhares` (section `#menu-phares`, cartes dynamiques, badges lus depuis `menu.json`, liens WhatsApp)
  - `Histoire` (section `#histoire`, récit Madina, 3 piliers terroir/recettes/fait maison, cadre photo)
  - `HorairesAdresse` (section `#contact-info`, horaires 11h-22h et adresse à Madina)
  - `BandeauWhatsApp` (bannière CTA pour réservation/commande)
  - `Footer` (mention corrigée "Djougou", copyright dynamique)
  - `BoutonWhatsAppFlottant` (accès rapide WhatsApp permanent)
  - `Icons` (icônes SVG inline sans dépendance externe)
- Assemblage de `/app/page.js` et `/app/layout.js`
- Compilation de production Next.js validée avec succès (`npm run build`)

## Notes importantes
- **Navigation temporaire :** Dans le composant `Header`, les liens pointent pour l'instant vers les ancres de la page d'accueil (`#menu-phares`, `#histoire`, `#contact-info`). Ces liens devront passer vers `/menu` et `/contact` lorsque ces pages seront développées.

## Tâche en cours
- Page d'accueil terminée, en attente de validation utilisateur avant commit

## Prochaines tâches
1. Page Menu (`/app/menu/page.js`)
2. Page Contact (`/app/contact/page.js`)
3. Finitions : SEO, performance, test mobile
