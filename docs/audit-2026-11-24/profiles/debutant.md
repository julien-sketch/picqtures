# Audit « Le débutant »

Date : 24 novembre 2026. Référence : commit `7133677174eaf6bbb1d5d73f98082d4f58b52e4b`. Tests CUA sur `http://127.0.0.1:4173/`, onglet 7. Aucun message envoyé, aucun paiement ni service externe utilisé. Application laissée inchangée.

## DÉB-01 — Page inconnue sans chemin de récupération

- Gravité : **P2 — modéré**. Le retour arrière du navigateur reste disponible ; ce n’est pas un blocage critique.
- Preuve : **exécuté dans le navigateur**, confirmé par l’absence de `app/not-found.tsx` dans le dépôt.
- Étapes exactes : ouvrir l’accueil ; ouvrir « Les offres » ; saisir `http://127.0.0.1:4173/contact` (chemin erroné plausible) dans l’adresse.
- Attendu : réponse 404 avec explication en français et au moins un lien de retour à l’accueil ou aux offres.
- Observé : page Next par défaut, uniquement les titres « 404 » et « This page could not be found. ». Aucun logo, lien, navigation ou contact. L’arbre d’accessibilité ne contient aucun contrôle.
- Conséquence : **Inférence** : un visiteur arrivant depuis un ancien lien ou ayant saisi une mauvaise adresse doit comprendre seul qu’il peut revenir en arrière ou modifier l’adresse. Aucun abandon utilisateur réel n’a été mesuré.
- Correction suggérée : ajouter une page 404 en français avec liens accueil/offres/contact ; conserver le statut HTTP 404.

## Tests qui ont réussi

1. Accueil → « Les offres » : page chargée, tarifs Essentiel 79 € HT/mois et Entreprise 249 € HT/mois visibles dans l’arbre d’accessibilité ; engagement 12 mois, bénéficiaires, délais de première réponse et modalités de mission ponctuelle explicités.
2. Logo de la page offres → accueil : retour réussi.
3. Bouton « Service suivant » : passe du service 23 (« Trouver un spectacle ou une sortie ») au 24 (« Faire face à un imprévu ») ; lien « Découvrir ce service » actualisé vers la bonne ancre.
4. Clavier sur la région carrousel : `Home` sélectionne le service 1, `End` le service 26 ; annonce et lien « Découvrir ce service » actualisés.
5. Service 26 → « Découvrir ce service » : ouvre `/accompagnement/prendre-soin-de-sa-forme`, avec contenu, explication du rôle, contact e-mail/WhatsApp et formulaire.
6. Navigateur Retour depuis `/contact` : retrouve correctement la page offres.

## Friction à tester auprès de visiteurs, non comptée comme bug

**Inférence** : le carrousel d’accueil commence au service 23 sur 26, orienté sortie/spectacle, et ne présente pas de vue globale ou de recherche. Un dirigeant cherchant un sujet professionnel doit parcourir les cartes pour repérer son besoin. Le titre annonce bien les besoins professionnels et personnels ; le design peut être intentionnel. Recommandation facultative : tester une liste compacte « Tous les sujets ». Aucun résultat de conversion ni abandon n’est déduit.

## Limites

Le parcours mailto n’a pas été actionné pour ne pas ouvrir/envoyer de message externe. Le comportement d’un poste sans messagerie configurée n’a pas été vérifié par ce profil. Le site vitrine n’expose aucun paiement, authentification, enregistrement serveur ou parcours d’identifiants clients dans ce dépôt ; ils ne sont pas testés ici. Aucun P0/P1 constaté par ce profil. Le rendu 404 est une observation locale, pas une mesure de disponibilité de production.
