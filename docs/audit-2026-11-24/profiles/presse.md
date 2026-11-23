# Audit — Le pressé

Date : 24 novembre 2026. Base : `7133677174eaf6bbb1d5d73f98082d4f58b52e4b`.
Environnement : aperçu Next.js local annoncé par sites-preview, `http://127.0.0.1:4173/`, Chrome cloud via CUA.
Aucune modification de l’application. Aucune transaction ou envoi de message.

## Bugs confirmés dans le navigateur

### PRESSE-01 — Le retour navigateur perd le service sélectionné — P2 modéré
- Étapes exactes : ouvrir `/` ; le carrousel indique « Trouver un spectacle ou une sortie », 23/26 ; double-cliquer sur « Service suivant » ; observer « Réaliser un projet personnel », 25/26 ; cliquer sur « Découvrir ce service » ; attendre la page `/accompagnement/concretiser-un-projet-personnel` ; utiliser Retour navigateur.
- Attendu : retrouver le service 25/26 à partir duquel on est parti afin de poursuivre la comparaison.
- Observé : retour sur « Trouver un spectacle ou une sortie », 23/26. La sélection est réinitialisée à l’état initial.
- Preuve exécutée : snapshots CUA avant navigation (service 25/26) et après Retour (service 23/26). Le code confirme `useState(Math.min(INITIAL, count - 1))`, INITIAL=22, sans conservation dans URL ou autre état persistant.
- Impact : perte de position de navigation parmi 26 entrées, aucune perte financière ni de données serveur.

### PRESSE-02 — Un rechargement efface le brouillon de contact — P2 modéré
- Étapes exactes : ouvrir `/a-propos` ; remplir Nom et prénom avec « Test Pressé », Votre adresse e-mail avec « test@example.invalid », Votre message avec « Brouillon de test local à conserver lors du rechargement. » ; recharger la page.
- Attendu : conserver le brouillon ou avertir avant sa perte.
- Observé : nom, e-mail et message sont vides ; sujet revenu à « Échanger avec Julien » ; aucun avertissement avant rechargement.
- Preuve exécutée : snapshot CUA avec valeurs puis snapshot après reload avec champs vides. Le formulaire ne possède pas de sauvegarde de brouillon dans le code inspecté.
- Impact : rédaction à refaire. Gravité limitée au brouillon local, car aucun enregistrement serveur n’existe sur ce site.

## Scénarios exécutés sans bug constaté

| Scénario | Exécution et résultat |
| --- | --- |
| Double clic navigation carrousel | Un double clic sur Service suivant passe de 23 à 25 ; deux déplacements cohérents, page utilisable. |
| Ouverture simultanée dix onglets | Dix nouveaux onglets créés puis navigation en parallèle vers `/` ; les dix renvoient le titre PICQ’TURES et le contenu visible de l’accueil. Tous les onglets supplémentaires fermés ensuite. Ce test ne mesure pas la capacité de production sous charge. |
| Navigation service | Découvrir ce service ouvre la page correspondant au service sélectionné. |
| Rechargement page | `/a-propos` continue de s’afficher après reload ; seul le brouillon est perdu. |

## Limites et non applicable

- Paiement, Retour pendant paiement, enregistrement serveur : non applicables dans ce dépôt. Le formulaire construit une URL mailto ; il n’y a ni backend de sauvegarde ni tunnel de paiement ici.
- Double clic sur « Ouvrir ma messagerie » : tentative réelle après saisie de données fictives, bloquée par la politique du navigateur cloud (seuls http/https autorisés). Le résultat côté client mail et les éventuels brouillons multiples sont **non vérifiés**, pas classés comme bug confirmé. Aucun contournement tenté. Aucune remise ou réception d’e-mail vérifiée.
- Pas de bug P0 critique ou P1 majeur confirmé par ce profil.
