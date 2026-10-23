# PROGRESS.md - Recette d'Afrique (Djougou)

## Phase en cours : Phase 1 - Vitrine

## Résumé
Site vitrine du restaurant Recette d'Afrique, Djougou (Bénin).
Stack : Next.js (App Router), Tailwind CSS.
Infos du restaurant : /data/config.json
Plats et prix (FCFA) : /data/menu.json
Photos : /public/images

## Informations du restaurant
- Nom : Recette d'Afrique
- Adresse : Quartier madina, Djougou
- Téléphone : +229 97 00 00 00
- WhatsApp : +229 97 00 00 00 (22997000000)
- Horaires : tous les jours, 11h - 22h
- Facebook : facebook.com/recettedafrique
- Instagram : instagram.com/recettedafrique

## Tâches terminées
- Initialisation des fondations Next.js (App Router) et Tailwind CSS (sans page codée)
- Création de la structure des dossiers : `/components`, `/data`, `/public/images`, `/design`, `/lib`
- Configuration de `tailwind.config.js` avec les couleurs nommées (`blanc`, `gris-clair`, `noir`, `rouge`) respectant la règle 60-30-10
- Création de `/data/config.json` (Recette d'Afrique, Djougou, Madina, horaires, contacts)
- Création de `/data/menu.json` (3 catégories : Plats, Boissons, Desserts, spécialités béninoises avec prix en FCFA)
- Création de `/lib/whatsapp.js` (générateur de lien direct wa.me et commandes pré-remplies)

## Tâche en cours
- Fondations validées, prêt pour la phase suivante

## Prochaines tâches
1. Intégration du design Stitch
2. Pages : accueil, menu, contact
3. Bouton commande WhatsApp
4. Finitions : SEO, performance, test mobile (360px)
