> Mise à jour : le site comporte désormais 13 sujets et Farmasi est une section du nouveau service. Voir `PICQTURES-FORME.md`. Le compte rendu ci-dessous décrit la version précédente.

# Refonte PICQ’TURES — livraison locale

Accueil immersif avec défilement natif, 12 sujets, indicateur réel du sujet proche du centre et espaces de description réservés. Aucun changement d’image par sujet, aucun blocage de molette ou de gestes tactiles. Les résumés de navigation sont séparés des contenus complets pour ne pas embarquer les 12 pages dans le JavaScript de l’accueil.

## Routes créées

- `/accompagnement/clarifier-ses-priorites`
- `/accompagnement/faire-avancer-son-projet`
- `/accompagnement/developper-sa-visibilite`
- `/accompagnement/trouver-de-nouveaux-clients`
- `/accompagnement/choisir-ses-outils`
- `/accompagnement/simplifier-son-organisation`
- `/accompagnement/trouver-le-bon-professionnel`
- `/accompagnement/comparer-avant-acheter`
- `/accompagnement/preparer-ses-deplacements`
- `/accompagnement/organiser-un-evenement`
- `/accompagnement/trouver-le-cadeau-adapte`
- `/accompagnement/concretiser-un-projet-personnel`

- `/offres`
- `/a-propos`
- `/immobilier`

`/progressive-pulse` redirige vers `/immobilier`. `/picqtures` conserve son alias vers l’accueil mis à jour. Farmasi reste à `/farmasi`, sans modification de ses fichiers.

## Images et logo

La photographie et le logo fournis par l’utilisateur sont intégrés dans `public/images/picqtures-background.png` et `public/images/picqtures-logo.png`. La photo est l’unique fond fixe de l’accueil, avec le même fichier sur mobile et un voile sombre constant. Le logo conserve sa version originale sur les pages claires ; il est affiché en monochrome clair sur l’accueil sombre. Aucune ressource visuelle ne manque désormais.

## Vérifications

- Compilation de production et TypeScript réussis.
- 12 pages d’accompagnement générées statiquement, avec un titre SEO et une description propres.
- Un seul H1 sur chacune des 16 pages nouvelles ou refondues ; aucun lien vide.
- Accès HTTP direct : 200 sur les 12 sujets, l’accueil, Offres, À propos, Immobilier et Farmasi.
- Actualisation d’une page d’accompagnement et navigation précédent/suivant du navigateur vérifiées.
- Retour à l’accueil au niveau du sujet consulté ; indicateur du sujet actif vérifié.
- Menu mobile : ouverture, Échap, focus initial et restitution au déclencheur vérifiés.
- Rendu contrôlé à 1440 px et 375 px, sans débordement horizontal ; console sans erreur lors du parcours testé.
- Aucune nouvelle bibliothèque d’animation, aucune vidéo et aucun téléchargement de photographie externe.
- Offres : 79 € et 249 € HT/mois ; 48 h et 24 h calendaires pour la première réponse ; engagement 12 mois, paiement mensuel.
- Coordonnées, WhatsApp, espace client, liens Farmasi, ressources et liens légaux conservés.
- Aucun déploiement effectué.

## Points à vérifier hors du projet

Les documents contractuels externes n’ont pas été modifiés. Leur cohérence avec les deux offres et leur accès public restent à vérifier ; le lien des conditions générales renvoyait auparavant à une connexion. Aucun sitemap n’était présent dans le projet.

## Fichiers principaux

`app/page.tsx`, `app/home.module.css`, `app/_components/`, `app/_lib/`, `app/accompagnement/[slug]/page.tsx`, `app/offres/page.tsx`, `app/a-propos/page.tsx`, `app/immobilier/page.tsx`, `app/progressive-pulse/page.tsx`, `app/layout.tsx`, `app/globals.css`.
