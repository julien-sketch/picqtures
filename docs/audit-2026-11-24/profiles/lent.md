# Audit — Le lent

Date : 24 novembre 2026. Base : `7133677174eaf6bbb1d5d73f98082d4f58b52e4b`.
Périmètre : site vitrine local, `http://127.0.0.1:4173/`. Aucun paiement, compte ou service externe soumis.

## Résultat exécuté

- Le site local s’ouvre dans Chrome via CUA. Accueil puis `/a-propos` répondent et rendent leur contenu. Contrôle desktop effectué à 1363 × 936 px.
- Accueil : `document.documentElement.scrollWidth = 1348`, `clientWidth = 1348` ; aucun débordement horizontal constaté à cette largeur.
- Page À propos : DOM du formulaire réellement inspecté. `action = null`, `method = null`. Champs nom, email, sujet et message nommés, bouton `type=submit` actif.
- Aucune API documentée du navigateur disponible pour modifier la taille du viewport, le débit, couper la connexion ou désactiver JavaScript. Ces conditions n’ont donc **pas été simulées**. Les défauts ci-dessous liés à ces conditions reposent sur inspection source + DOM, pas sur une reproduction réseau bridée.

## LENT-01 — P1 majeur — Repli du formulaire transmet les données dans l’URL si le JavaScript ne s’exécute pas

**Statut : défaut établi par source et DOM ; scénario JavaScript indisponible non rejoué dans le navigateur.**

Étapes de reproduction pour un navigateur autorisant ce réglage :
1. Désactiver JavaScript pour l’origine locale, puis ouvrir `/a-propos` (ou une page service).
2. Remplir nom `Test Lent`, email `lent@example.com`, sujet `Test` et message `Demande de test`.
3. Appuyer sur « Ouvrir ma messagerie ».

Attendu : le site propose un repli de contact explicite ou désactive l’action indisponible ; aucune donnée de la demande n’est ajoutée à une URL HTTP.

Observé dans le DOM : formulaire HTML sans `action` ni `method`, bouton de soumission actif et champs `name` présents. Source : seul `onSubmit` React appelle `preventDefault()` puis crée le lien `mailto:`. En l’absence d’exécution JS, le repli natif HTML est donc un GET vers la page courante avec les valeurs du formulaire dans la query. La présence dans l’historique est une conséquence du GET ; enregistrement dans les logs ou outils tiers = risque non vérifié, pas une fuite observée.

Preuves : `app/_components/service-contact.tsx:19-34`, inspection CUA DOM sur `/a-propos`.

Correction conseillée : rendre le formulaire indisponible avant hydratation et offrir un lien mailto direct en repli ; ou fournir une soumission réellement sûre sans JS. Ne pas ajouter de backend fictif.

## LENT-02 — P2 modéré — La majorité des services n’a aucun accès de repli sans JavaScript

**Statut : inspection source ; coupure JavaScript non simulée.**

Étapes :
1. Charger `/` avec les scripts applicatifs indisponibles (échec réseau/JS désactivé).
2. Essayer de trouver « Créer son entreprise » ou « Se faire connaître » depuis l’accueil.
3. Cliquer les flèches du carrousel.

Attendu : une liste de liens vers tous les services reste utilisable.

Observé source : état initial bloqué à l’index 22 ; seules 7 cartes autour de cet index ont une opacité non nulle et ne sont pas `aria-hidden`. Les 19 autres sont invisibles, non cliquables et leurs liens ont `tabIndex=-1`. Les deux flèches sont des boutons dont le déplacement dépend exclusivement de `onClick` React. Aucune liste `noscript` ou alternative statique n’est rendue.

Preuves : `app/_components/topic-explorer.tsx:18`, `:38`, `:73-92`; `app/page.tsx`.

Correction conseillée : liste de services accessible via lien/bouton et rendue côté serveur, ou repli `noscript`.

## LENT-03 — P2 modéré — Les liens Offres et À propos disparaissent de l’accueil mobile sans remplacement

**Statut : inspection CSS + structure ; viewport téléphone non simulé.**

Étapes :
1. Ouvrir l’accueil à une largeur inférieure ou égale à 600 CSS px.
2. Chercher les tarifs ou une présentation de Julien depuis la navigation.

Attendu : navigation ou menu permettant d’accéder aux offres et à la page À propos.

Observé source : `@media (max-width: 600px)` applique `.home > header > nav { display: none; }`. Le composant SiteHeader ne rend aucun menu mobile. Le footer de l’accueil ne comporte que mentions légales/conditions. Le visiteur doit d’abord passer par une page service pour trouver les offres, ou connaître l’URL.

Preuves : `app/home-carousel.module.css` bloc mobile ; `app/_components/site-header.tsx` ; `app/_components/site-footer.tsx` ; `app/page.tsx`.

Correction conseillée : conserver Les offres/À propos visibles ou fournir un menu mobile accessible.

## Scénarios non applicables ou non vérifiés

- Délais de paiement, reconnexion à un compte et enregistrement serveur : aucun de ces parcours dans ce dépôt.
- Hors ligne après première visite : aucun service worker/offline déclaré dans ce dépôt ; comportement exact navigateur non testé.
- Réseau bridé, basculement hors ligne en cours de saisie, smartphone iOS/Android, clavier virtuel et reprise réseau : non exécutés faute de contrôle documenté.
- Pas de P0 critique démontré par ce profil. LENT-01 est majeur, sans preuve d’exploitation réelle.
