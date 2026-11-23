# Audit PICQ’TURES — 24 novembre 2026

**8 constats regroupés : 1 dépendance classée critique, 1 défaut majeur du formulaire, 6 défauts modérés. Les trois premiers points du tableau sont corrigés dans cette branche.**

Le classement critique décrit la sévérité des avis de sécurité concernant la version installée. Aucune exploitation, compromission ou fuite réelle n’a été démontrée. **Inférence :** les conséquences d’une soumission sans JavaScript et les deux défauts sous conditions mobile/JavaScript indisponible sont déduits du code et du DOM ; ces conditions n’ont pas été simulées dans le navigateur disponible.

## Périmètre et méthode

- Source : `julien-sketch/picqtures`, base `7133677174eaf6bbb1d5d73f98082d4f58b52e4b` ; projet Vercel `picqtures` associé aux domaines picqtures.fr et www.picqtures.fr.
- Site lancé en local via le service d’aperçu à `http://127.0.0.1:4173/`. Un adaptateur de lancement hors dépôt traduit les options du lanceur pour Next.js ; il ne change pas le comportement du site.
- Cinq sous-agents exécutés en parallèle : pressé, maladroit, lent, curieux, débutant. Rapports détaillés dans `profiles/`.
- Tests actifs sur la copie locale avec données fictives. Aucun paiement, compte client réel, e-mail envoyé ou modification de production.
- Ce dépôt est un site vitrine : pas d’API, d’authentification, de base clients, de sauvegarde serveur ou de tunnel de paiement. Le contact prépare un e-mail via `mailto:`. L’application externe de gestion des clients n’est pas couverte.
- P0 critique : correction de sécurité prioritaire. P1 majeur : parcours/confidentialité sérieusement affectés sous une condition donnée. P2 modéré : navigation/saisie dégradée avec possibilité de poursuivre. P3 mineur : défaut cosmétique.

## Liste fusionnée, triée par gravité

| ID | Gravité | Constat | Niveau de preuve | Statut |
| --- | --- | --- | --- | --- |
| A01 | P0 | Next.js et dépendances installées concernés par des avis critiques/élevés | npm audit et avis éditeur ; exploit non tenté | Corrigé, audit rejoué à 0 |
| A02 | P1 | Formulaire susceptible de soumettre les données en GET si JavaScript absent | Source + DOM ; scénario sans JS non exécuté | Corrigé, rendu serveur testé |
| A03 | P2 | Nom et sujet uniquement composés d’espaces acceptés | Reproduit dans le navigateur | Corrigé, rejeu navigateur et tests automatisés |
| A04 | P2 | Rechargement efface le brouillon sans avertissement | Reproduit dans le navigateur | Ouvert |
| A05 | P2 | Retour navigateur réinitialise la position du carrousel | Reproduit dans le navigateur | Ouvert |
| A06 | P2 | Navigation Offres/À propos masquée sur l’accueil mobile | CSS et structure ; téléphone non simulé | Ouvert |
| A07 | P2 | Sans JavaScript, 19 services sur 26 n’ont aucun accès de repli depuis l’accueil | Source ; JavaScript indisponible non simulé | Ouvert |
| A08 | P2 | Mauvais chemin : page 404 anglaise sans retour vers le site | Reproduit par deux profils dans le navigateur | Ouvert |

### A01 — Dépendances de sécurité

**Étapes :** sur la version de base, exécuter `npm ci`, puis `npm audit --json` et `npm ls next sharp postcss nanoid source-map-js`.

**Attendu :** absence d’avis critiques ou élevés connus dans l’arbre livré.

**Observé :** cinq paquets signalés : Next.js 15.5.15, sharp 0.34.5, PostCSS, nanoid et source-map-js. Next est classé critique, les quatre autres élevés au niveau de l’agrégat npm. Les préconditions de chaque avis diffèrent ; toutes ne sont pas présentes dans ce site. L’avis GHSA-2464-fhr4-w9xw concerne notamment l’optimisation d’images sur Linux glibc. Aucun exploit n’a été tenté.

**Correction :** Next 15.5.29 ; sharp 0.35.5 via le verrou ; PostCSS 8.5.23, avec override ciblé dans Next pour sa copie transitive ; nanoid 3.3.20 ; source-map-js 1.2.4. Même version majeure de Next. Le verrou est conservé.

**Rejeu :** installation propre rejouée avec `npm ci` ; `npm audit --json` retourne 0 vulnérabilité ; `npm ls --all --json` retourne sans erreur ni dépendance invalide. Compilation de production réussie. Les JSON avant/après sont joints. Cette preuve atteste la correction des versions signalées, sans constituer un test d’exploitation ni une garantie générale de sécurité.

**Sources éditeur :**
- https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw
- https://github.com/vercel/next.js/releases/tag/v15.5.29

### A02 — Soumission native avant chargement de JavaScript

**Étapes de reproduction à rejouer dans un navigateur disposant du réglage :** désactiver JavaScript, ouvrir `/a-propos`, saisir un nom, un e-mail, un sujet et un message fictifs, soumettre le formulaire.

**Attendu :** proposer un contact de repli ou désactiver la fonction indisponible, sans ajout des données à une URL HTTP.

**Observé source/DOM avant correction :** formulaire sans `action` ni `method` ; champs nommés actifs ; le seul `preventDefault` appartient au gestionnaire React. **Inférence :** sans JavaScript, le comportement HTML natif est un GET vers la page courante comprenant les valeurs dans l’URL. L’enregistrement éventuel par un journal ou un outil tiers est un risque non vérifié.

**Correction :** champs et bouton désactivés dans le rendu serveur jusqu’à l’hydratation ; action explicite `mailto:` et méthode POST ; message `noscript` avec contact direct ; la préparation devient une action locale sans navigation et affiche le texte complet. Le lien d’ouverture de messagerie est distinct.

**Rejeu :** test du rendu serveur : fieldset désactivé, action mailto, méthode POST et repli noscript. Dans le navigateur, formulaire initialement désactivé observé puis utilisable après chargement ; préparation/double clic conservent l’URL `/a-propos`, sans données dans sa query. La coupure de JavaScript et une connexion réellement bridée restent non exécutées.

### A03 — Espaces acceptés comme identité et sujet

**Étapes :** ouvrir `/offres`, saisir trois espaces dans nom et sujet, `audit@example.test` comme e-mail, laisser le message optionnel vide et soumettre.

**Attendu :** erreur explicite, pas de préparation d’un e-mail sans identité ni sujet.

**Observé avant :** champs considérés valides par `required` ; tentative de navigation mailto. L’ouverture du client mail est bloquée par le navigateur d’audit, aucun mail envoyé.

**Correction :** normalisation par `trim()` des valeurs obligatoires ; refus des valeurs vides avec alerte ; conservation des caractères accentués et emojis. Une modification retire l’aperçu précédent pour éviter d’envoyer une ancienne version.

**Rejeu :** tests automatisés des valeurs vides/espaces ; rejeu navigateur détaillé dans `retest-formulaire.md`.

### A04 — Brouillon perdu lors d’un rechargement

**Étapes :** `/a-propos`, remplir le nom « Test Pressé », l’e-mail `test@example.invalid` et le message « Brouillon de test local à conserver lors du rechargement. », puis recharger.

**Attendu :** avertissement avant perte ou récupération du brouillon.

**Observé :** champs remis à vide et sujet par défaut ; aucun avertissement.

**Gravité :** P2, rédaction à refaire. **Statut :** ouvert. Recommandation : avertissement de sortie ou brouillon explicite avec gestion de sa durée et de sa suppression ; ne pas conserver silencieusement des demandes potentiellement sensibles.

### A05 — Sélection du carrousel perdue au retour

**Étapes :** accueil, double clic sur « Service suivant » pour passer de 23 à 25, « Découvrir ce service », puis Retour navigateur.

**Attendu :** retrouver la carte 25 pour continuer la comparaison.

**Observé :** retour à la carte 23, état initial codé en dur.

**Gravité :** P2. **Statut :** ouvert. Recommandation : mémoriser le sujet dans l’URL ou l’historique de navigation.

### A06 — Offres et À propos inaccessibles directement depuis l’accueil mobile

**Étapes à rejouer sur téléphone :** ouvrir l’accueil avec une largeur <=600 CSS px ; chercher les offres ou la présentation de Julien.

**Attendu :** liens visibles ou menu mobile utilisable.

**Observé source :** `.home > header > nav { display: none; }` dans la media query ; pas de menu de remplacement et footer limité aux liens légaux. Il faut passer par une page service ou connaître l’URL.

**Gravité :** P2. **Statut :** ouvert ; constat CSS/structure, pas test sur téléphone. Recommandation : navigation mobile visible et accessible au clavier.

### A07 — Services indisponibles sans scripts

**Étapes à rejouer :** charger l’accueil sans JavaScript, chercher « Créer son entreprise » puis utiliser les flèches.

**Attendu :** accès à une liste de tous les sujets indépendamment du carrousel.

**Observé source :** état initial 23/26, 19 cartes cachées et non cliquables, boutons dépendants de React, aucune liste statique de repli.

**Gravité :** P2. **Statut :** ouvert ; inspection source. Recommandation : liste de liens rendue côté serveur, accessible aussi lorsque les scripts échouent.

### A08 — 404 sans issue

**Étapes :** ouvrir `/contact` ou `/accompagnement/ce-service-nexiste-pas`.

**Attendu :** message français et liens vers l’accueil, les offres et le contact.

**Observé :** écran Next « 404 / This page could not be found » sans navigation ni logo.

**Gravité :** P2. **Statut :** ouvert. Recommandation : `app/not-found.tsx` avec retour vers les pages utiles.

## Vérifications et améliorations complémentaires

- Dix vrais onglets ouverts en parallèle : tous affichent l’accueil. Cela ne mesure pas la capacité de production sous charge.
- Double clic carrousel : avance cohérente de deux cartes. Navigation, retour au logo, Home/End clavier et ouverture du service 26 : réussis.
- Formulaire vide et mauvais e-mail : validation native active.
- Emojis, accents, tableau collé et champs de 5 000 caractères : acceptés sans plantage observé.
- Slug inconnu : 404 ; paramètres `userId`, `subject`, `next` : ignorés dans les pages testées ; ancienne route : redirection interne correcte. Pas de preuve de faille d’autorisation dans ces observations ; les contrôles entre comptes ne s’appliquent pas à ce dépôt.
- URL mailto de plus de 30 000 caractères calculée avant correction pour 5 000 `é` : risque de compatibilité non vérifié côté client mail. Amélioration ajoutée : au-delà d’un seuil conservateur de 1 800 caractères, pas d’URL contenant le corps ; le sujet et le message complets sont disponibles à copier, sans troncature. Pour les messages courts aussi, le texte reste récupérable si aucune messagerie n’est configurée.
- Tests automatisés : `npm run test:contact`, cinq tests couvrant espaces, encodage, longs contenus, texte optionnel par défaut et rendu serveur sûr.
- Build : `PICQTURES_NEXT_DIR=.next-audit npm run build`, réussi, vérification TypeScript et 24 pages générées. Les fichiers de configuration générés pour ce répertoire temporaire ne font pas partie du correctif.

## Limites

Débit bridé, perte réseau, fonctionnement hors ligne, viewport téléphone, clavier virtuel et ouverture/envoi final de la messagerie non exécutés : aucune commande documentée disponible pour ces réglages et le protocole mailto est bloqué dans le navigateur d’audit. Pas d’émulation prétendue, pas de paiement ni de modifications de données réelles. Les corrections restent sur une branche séparée ; aucun déploiement de production n’est attesté par ce rapport.
