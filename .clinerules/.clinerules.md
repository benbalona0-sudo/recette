Projet : site du restaurant RECETTES D'AFRIQUE, Djougou (Bénin).
Stack : Next.js (App Router), Tailwind CSS, JavaScript/TypeScript.
Règles :
- Mobile-first obligatoire. Tester d'abord en 360px de large.
- Tout le texte visible est en français.
- Composants petits et réutilisables dans /components.
- Données du menu dans /data/menu.json, jamais écrites en dur dans les composants.
- Images optimisées (next/image, format webp), aucune image de plus de 200 Ko.
- Ne jamais ajouter de dépendance sans me demander.
- Travailler en mode Plan d'abord : proposer le plan, attendre ma validation, puis exécuter.
- Une tâche à la fois. Après chaque tâche, résumer ce qui a été fait.
- Commits Git clairs après chaque étape validée.
- Palette stricte, règle 60-30-10 : blanc #FFFFFF (60 %), noir #111111 (30 %), rouge #D62828 (10 %). Le rouge sert uniquement aux boutons d'action, prix et petits accents. Aucune autre couleur dans l'interface. Définir ces couleurs comme variables dans tailwind.config (blanc, noir, rouge) et ne jamais écrire de code couleur en dur dans les composants.