# Prendre soin de sa forme — livraison

## Routes et fichiers

- Nouvelle page : `/accompagnement/prendre-soin-de-sa-forme`.
- `/farmasi` redirige vers `/accompagnement/prendre-soin-de-sa-forme#farmasi`.
- 13 sujets dans `app/_lib/topics.ts` et `app/_lib/topic-links.ts` ; compteur et navigation calculés depuis ces listes.
- Page éditoriale : `app/_components/health-accompaniment.tsx` et modèle `app/accompagnement/[slug]/page.tsx`.
- Navigation : accueil, `site-header.tsx`, `site-footer.tsx`, `topic-explorer.tsx`.
- Styles ajoutés dans `app/home.module.css`, sans changement du fond immersif.
- Nouveau sitemap : `app/sitemap.ts`, sans indexer la route de redirection Farmasi.
- Ancien layout Farmasi simplifié : suppression du document HTML imbriqué et des métadonnées provisoires.

## Contenus retirés de l’affichage

Ancienne page « performance nutritionnelle », chiffres et graphiques sans source, promesses cognitives ou de performance, protocoles et routines imposés, packs commerciaux non vérifiés, notes éditoriales et témoignages sans preuve d’authenticité identifiable.

## Références confirmées sur la boutique officielle

Les trois liens ci-dessous ont été ouverts dans le navigateur et leurs titres et codes produit vérifiés. Leurs photos officielles ont été copiées dans `public/images/farmasi-*.webp` ; les anciens visuels illustratifs sont conservés dans les ressources sans être utilisés pour ces fiches.

- [Aloe Glow Mango — 1002123](https://www.fr.farmasi.com/marionjulien/product-detail/aloe-glow-mango?pid=1002123)
- [Nutriplus Café Instantané Soluble Mélange de Chicorée — 9000850](https://www.fr.farmasi.com/marionjulien/product-detail/nutriplus-cafe-instantane-soluble-melange-de-chicoree?pid=9000850)
- [Nutriplus Serenity Thé Noir — 1000809](https://www.fr.farmasi.com/marionjulien/product-detail/nutriplus-serenity-the-noir?pid=1000809)

Descriptions neutres ; aucun prix, format chiffré, ingrédient, certification, valeur nutritionnelle ou bénéfice de santé ajouté. Le lien NutriShake reste un accès au catalogue, sans présenter un produit précis comme un repas complet.

Liens conservés : boutique `fr.farmasi.com/marionjulien`, catégories NutriShake/soins/parfums, `julien@picqtures.fr`, `julien@picqtures.fr`, WhatsApp et réseaux existants. Les ressources produit originales ne sont pas supprimées. Les anciennes listes de souhaits associées à des packs non vérifiés ne sont plus promues.

## Points restant à vérifier

Le statut commercial exact de Julien et une éventuelle rémunération sur les ventes ne sont pas documentés dans le projet. Seule l’activité commerciale Farmasi est indiquée, comme demandé ; aucun titre de professionnel de santé, statut indépendant de la marque ou commission n’est inventé.

Les achats de produits restent facultatifs et distincts des abonnements. Les tarifs et conditions des pages Offres ne sont pas modifiés. Aucun formulaire n’existait : les contacts par courriel sont préremplis avec le sujet et une indication demande de ne pas transmettre d’informations médicales détaillées.

Aucun déploiement effectué.

## Vérifications réalisées

- Compilation de production, TypeScript et contrôle des différences réussis.
- HTML généré : 13 sujets, fond unique, H1 unique, liens et ancres non vides, anciens contenus inadaptés absents.
- Redirection `/farmasi` et arrivée sur `#farmasi` vérifiées dans le navigateur ; photos des trois produits chargées.
- Page ouverte directement, FAQ dépliée, liens internes testés, contact prérempli vérifié sans envoi.
- Rendu à 1440 et 375 px contrôlé ; aucun débordement horizontal à 375 px.
- Menu mobile : nouveau sujet 13 accessible, navigation et fermeture du panneau vérifiées.
- Retour à l’accueil : indicateur 13 / 13 ; même arrière-plan photographique.
- Console sans erreur pendant le parcours testé.
- Sitemap ajouté et route de redirection exclue ; offres et tarifs existants inchangés.
