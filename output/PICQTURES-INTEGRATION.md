# Intégration des contenus PICQ’TURES

Les 11 pages d’accompagnement et la page immobilier ont été actualisées dans le projet existant. Aucun déploiement effectué. Les adresses existantes cohérentes ont été conservées, conformément à la consigne ; les adresses proposées restent accessibles par redirection permanente directe.

## Pages retenues

| Page | Adresse proposée | Adresse canonique conservée |
|---|---|---|
| Faire avancer son entreprise | `/accompagnement/projet-entreprise` | `/accompagnement/faire-avancer-son-projet` |
| Développer son activité | `/accompagnement/developpement-activite` | `/accompagnement/developper-sa-visibilite` |
| Simplifier son organisation | `/accompagnement/organisation-outils` | `/accompagnement/simplifier-son-organisation` |
| Trouver un professionnel | `/accompagnement/recherche-prestataire` | `/accompagnement/trouver-le-bon-professionnel` |
| Comparer avant d’acheter | `/accompagnement/comparaison-achats` | `/accompagnement/comparer-avant-acheter` |
| Mieux gérer son budget | `/accompagnement/organisation-budget` | `/accompagnement/mieux-gerer-son-budget` |
| Préparer ses déplacements | `/accompagnement/deplacements-sejours` | `/accompagnement/preparer-ses-deplacements` |
| Organiser un événement | `/accompagnement/organisation-evenement` | `/accompagnement/organiser-un-evenement` |
| Préparer ses cadeaux et anniversaires | `/accompagnement/cadeaux-anniversaires` | `/accompagnement/trouver-le-cadeau-adapte` |
| Concrétiser ses projets personnels | `/accompagnement/projets-personnels` | `/accompagnement/concretiser-un-projet-personnel` |
| Prendre soin de sa forme | `/accompagnement/prendre-soin-de-sa-forme` | `/accompagnement/prendre-soin-de-sa-forme` |
| Outil de suivi immobilier | `/solutions/suivi-dossier-immobilier` | `/immobilier` |

## Redirections permanentes

Les autres anciens sujets rejoignent directement la page regroupée et son ancre. Les paramètres de requête sont conservés. Pas de chaîne de redirections.

| Ancienne adresse ou alias | Destination |
|---|---|
| `/accompagnement/creer-son-entreprise` | `/accompagnement/faire-avancer-son-projet#creation-entreprise` |
| `/accompagnement/mieux-presenter-son-activite` | `/accompagnement/developper-sa-visibilite#presentation-activite` |
| `/accompagnement/trouver-de-nouveaux-clients` | `/accompagnement/developper-sa-visibilite#prospection` |
| `/accompagnement/entretenir-ses-relations-clients` | `/accompagnement/developper-sa-visibilite#relations-clients` |
| `/accompagnement/developper-son-reseau-professionnel` | `/accompagnement/developper-sa-visibilite#reseau-professionnel` |
| `/accompagnement/choisir-ses-outils` | `/accompagnement/simplifier-son-organisation#logiciels` |
| `/accompagnement/comparer-des-devis` | `/accompagnement/comparer-avant-acheter#devis` |
| `/accompagnement/faire-des-economies` | `/accompagnement/mieux-gerer-son-budget#economies` |
| `/accompagnement/choisir-du-materiel` | `/accompagnement/comparer-avant-acheter#materiel` |
| `/accompagnement/trouver-un-vehicule` | `/accompagnement/comparer-avant-acheter#vehicule` |
| `/accompagnement/organiser-un-sejour` | `/accompagnement/preparer-ses-deplacements#sejours` |
| `/accompagnement/trouver-un-lieu` | `/accompagnement/organiser-un-evenement#lieux` |
| `/accompagnement/preparer-une-attention-d-anniversaire` | `/accompagnement/trouver-le-cadeau-adapte#anniversaires` |
| `/accompagnement/trouver-un-spectacle-ou-une-sortie` | `/accompagnement/concretiser-un-projet-personnel#sorties-spectacles` |
| `/accompagnement/faire-face-a-un-imprevu` | `/accompagnement/concretiser-un-projet-personnel#imprevus` |
| `/accompagnement/clarifier-ses-priorites` | `/accompagnement/faire-avancer-son-projet#projet-professionnel` |
| `/accompagnement/projet-entreprise` | `/accompagnement/faire-avancer-son-projet` |
| `/accompagnement/developpement-activite` | `/accompagnement/developper-sa-visibilite` |
| `/accompagnement/organisation-outils` | `/accompagnement/simplifier-son-organisation` |
| `/accompagnement/recherche-prestataire` | `/accompagnement/trouver-le-bon-professionnel` |
| `/accompagnement/comparaison-achats` | `/accompagnement/comparer-avant-acheter` |
| `/accompagnement/organisation-budget` | `/accompagnement/mieux-gerer-son-budget` |
| `/accompagnement/deplacements-sejours` | `/accompagnement/preparer-ses-deplacements` |
| `/accompagnement/organisation-evenement` | `/accompagnement/organiser-un-evenement` |
| `/accompagnement/cadeaux-anniversaires` | `/accompagnement/trouver-le-cadeau-adapte` |
| `/accompagnement/projets-personnels` | `/accompagnement/concretiser-un-projet-personnel` |
| `/solutions/suivi-dossier-immobilier` | `/immobilier` |
| `/progressive-pulse` | `/immobilier` |
| `/farmasi` | `/accompagnement/prendre-soin-de-sa-forme#farmasi` |

## Principaux fichiers

- `app/_lib/accompaniments.json` : textes et métadonnées des 11 accompagnements.
- `app/_lib/topics.ts` : types et catalogue des pages regroupées.
- `app/_lib/topic-links.ts` : 26 sujets et destinations avec ancres.
- `app/_lib/service-redirects.json` et `next.config.ts` : redirections permanentes.
- `app/accompagnement/[slug]/page.tsx` : modèle commun, H1, sections, CTA, liens associés et canoniques.
- `app/_components/service-hero.tsx`, `accompaniment-terms.tsx`, `health-accompaniment.tsx` : introduction, modalités et sélection commerciale Farmasi séparée.
- `app/immobilier/page.tsx` : Progressive Pulse, mises à jour effectuées par l’agent, démonstration par e-mail.
- `app/_components/site-header.tsx`, `topic-explorer.tsx`, `app/page.tsx` : liens directs vers les sections, retrait de l’accès public Espace client, consigne de défilement et compteur calculé.
- `app/services.module.css`, `app/home.module.css` : lecture responsive, marges des ancres et ajouts discrets à l’accueil.
- `app/sitemap.ts` : uniquement les pages canoniques, sans ancres ni routes redirigées.
- `scripts/verify-services.mjs` : vérification HTTP reproductible.

## Vérifications réalisées

- Compilation de production réussie, vérification des types intégrée.
- 12 pages accessibles en HTTP 200 ; accès direct et actualisation contrôlés.
- 26 liens de l’accueil et leurs ancres valides.
- Textes fournis présents dans le HTML rendu, un seul H1 par page.
- Titres SEO, méta-descriptions et URL canoniques contrôlés.
- Contacts e-mail avec sujet prérempli, liens associés et retour accueil contrôlés. Aucun e-mail envoyé.
- 29 redirections HTTP 308 contrôlées, destinations directes et paramètres conservés.
- Sitemap canonique contrôlé.
- Revue des composants React : rendu serveur des contenus, composants partagés, liens descriptifs et focus visibles.

## Limites et points à confirmer

- Le rendu visuel desktop/mobile et les interactions clavier n’ont pas pu être confirmés dans un navigateur : connexion du navigateur intégré au serveur local expirée, puis autorisation de contrôle Chrome expirée. Les règles responsive et les marges d’ancres sont présentes, mais cela ne remplace pas une inspection visuelle.
- La commande `npm run lint` demande de configurer ESLint : aucune configuration n’est installée dans ce dépôt. Pas de migration d’outillage dans cette tâche.
- Le contact existant est un lien e-mail, sans formulaire. Le sujet est prérempli et reste modifiable dans la messagerie du visiteur. La délivrabilité n’est pas testée.
- Les liens Farmasi existants sont réutilisés ; aucune caractéristique produit nouvelle n’est ajoutée. Leur disponibilité commerciale actuelle reste à confirmer sur la boutique.
- Les mentions légales, la confidentialité et les CGV pointent toujours vers le domaine externe de l’application historique, comme avant. Ces documents et leurs conditions n’ont pas été réécrits.
- Les tarifs et engagements de la page des offres sont inchangés. Aucun compte, aucune donnée ni application externe n’a été modifié.
