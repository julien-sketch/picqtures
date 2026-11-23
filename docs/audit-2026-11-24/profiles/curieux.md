# Audit — Le curieux

Date : 24 novembre 2026 (Europe/Paris). Base : `7133677174eaf6bbb1d5d73f98082d4f58b52e4b`.
Tests actifs exclusivement locaux. Aucun exploit destructeur, aucune donnée client, aucun service externe métier appelé.

## CUR-01 — Dépendances avec avis de sécurité critiques

- Gravité : **P0 — correction de sécurité prioritaire**, au niveau de la dépendance. Présence d'une version affectée confirmée ; exploitabilité de ce déploiement **non démontrée**. Ne pas présenter cela comme un piratage réussi.
- Étapes exactes : depuis le dépôt à la base indiquée, `npm ci --no-audit --no-fund`, puis `npm audit --json`. Examiner aussi `package-lock.json` : Next 15.5.15 et sharp 0.34.5.
- Attendu : aucune dépendance couverte par un avis critique connu dans la chaîne servie.
- Observé : audit npm retourne code 1, 5 paquets vulnérables agrégés : Next (critical), nanoid, postcss, sharp, source-map-js (high). Le correctif recommandé pour Next est **15.5.29**, patch sans saut majeur.
- Preuve enregistrée : `/workspace/scratch/96633a0f04ab/audit-dependencies-before.json` (rapport npm complet).
- Avis primaire vérifié : https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw : exécution de code potentielle dans la chaîne d'optimisation SVG sur Linux glibc, Next affecté >=10 <=15.5.27 ; contournement publié sharp >=0.35.5. Le site utilise `next/image` ; aucune tentative d'exploitation effectuée. Pas d'upload ni d'hôte distant autorisé configuré, donc ne pas affirmer que l'attaque est directement possible dans cette configuration.
- Source primaire pour version : https://github.com/vercel/next.js/releases/tag/v15.5.29 (correctifs additionnels du 3 novembre 2026).
- Correction recommandée : Next 15.5.29, actualiser le verrou des transitives et PostCSS, relancer audit ; contrôler version sharp >=0.35.5 ; build + parcours normaux + images après patch.
- Limites : les avis nécessitant Windows, middleware/auth, Server Actions ou serveur custom ne sont pas présumés applicables (pas ces composants dans le repo). La gravité P0 est celle de la maintenance de la chaîne vulnérable, pas un constat de compromission exploitable.

## CUR-02 — Une adresse inconnue mène à une impasse anglaise sans retour

- Gravité : **P2 — modéré** (ergonomie, pas fuite).
- Reproduction exécutée dans Chrome via CUA : ouvrir `http://127.0.0.1:4173/accompagnement/compte-autre-client?id=2&token=expire`.
- Attendu : page française d'erreur avec retour accueil et moyen de contact.
- Observé : titre « 404: This page could not be found. », seulement H1 « 404 » et H2 anglais, aucun lien de navigation/contact dans l'arbre d'accessibilité.
- Conséquence : visiteur arrivé via favori/lien périmé bloqué sans voie de reprise dans le site.
- Correction suggérée : `app/not-found.tsx` en français avec lien accueil/offres/contact.

## Contrôles exécutés sans anomalie observée

1. CUA, ouvrir `/accompagnement/comparer-avant-acheter?userId=2&subject=%3Cscript%3Ealert(1)%3C/script%3E&next=https%3A%2F%2Fexample.com` : page publique normale, sujet du formulaire fixé par la page, aucun contenu d'autre client, pas de redirection externe ni script affiché/exécuté observé. Source : le composant ignore searchParams, lookup slug via liste finie puis notFound.
2. CUA, ouvrir `/accompagnement/creer-son-entreprise?next=https%3A%2F%2Fexample.com` : redirection vers `/accompagnement/faire-avancer-son-projet?next=https%3A%2F%2Fexample.com#creation-entreprise`. Paramètre conservé mais inerte ; destination interne attendue.
3. Test Node de l'algorithme mailto avec `A &bcc=other@example.com`, CRLF + Bcc, balises script et emoji : URL garde exactement deux paramètres subject/body, valeurs intactes après décodage. Encodage séparé empêche ici d'ajouter un paramètre bcc via `&`. Cela ne teste pas le comportement de chaque logiciel mail face aux CRLF.
4. Inspection des fichiers suivis : aucun fichier env/pem/key/credentials identifié, aucune clé Supabase/Stripe/Resend trouvée dans l'app. GTM public n'est pas un secret.
5. Pas de API, route handler, auth, DB, espace client ni paiement dans ce dépôt. Le lien CLIENT est une constante externe non utilisée en accès public.

## Non applicables / limites

- IDOR entre comptes, saut d'étapes de paiement, tokens d'invitation expirés : non applicables au code vitrine ; application externe non auditée.
- Entêtes de production non vérifiés. L'accès shell à 127.0.0.1:4173 refusé tient à la séparation hôte shell/hôte preview ; CUA local fonctionne et ce refus n'est pas un bug du site.
- Aucun test de charge ou payload d'exploitation volontairement destructeur.
