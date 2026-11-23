# Rejeu — Le maladroit

Rejeu CUA après correctif du formulaire partagé, site local `http://127.0.0.1:4173/a-propos`. Aucun clic sur un lien mailto, aucun e-mail envoyé. Composant testé dans le navigateur réel.

| Scénario | Étapes | Attendu | Observé | Verdict |
| --- | --- | --- | --- | --- |
| Espaces seuls | Nom = trois espaces, e-mail `audit@example.test`, sujet = trois espaces, message vide ; clic « Préparer mon message » | Erreur sans préparer de brouillon | Alerte « Renseignez votre nom, votre adresse e-mail et le sujet de votre demande. Les espaces seuls ne suffisent pas. » ; aucun élément `role=status` | PASS — M-01 réglé |
| Nom avec emojis, sujet et tableau | Nom `  Julien 🧑‍💼 É🚀  `, sujet `  Essai tableau & émojis  ` ; tableau avec tabulations, dates, €, 😀 ; préparation | Espaces extérieurs retirés, contenu préservé, aperçu et lien prêts | Sujet aperçu/lien `Essai tableau & émojis`. Corps du lien décodé = salutation, tableau intégral avec tabulations/retours réels, puis `Julien 🧑‍💼 É🚀` et adresse e-mail. Longueur lien 304. Aucune alerte. | PASS |
| Modifier après préparation | À partir du brouillon court, changer le message | Ancien aperçu retiré | `role=status` passe à 0 ; aucun champ à copier présent jusqu’à nouvelle préparation | PASS |
| Message de 5 000 caractères | Message `é` répété 5 000 fois, nom avec emojis, préparation | Texte complet et solution manuelle, sans lien URL géant | Statut « Ce message est long : copiez le sujet et le texte ci-dessous dans votre messagerie. » ; textarea lecture seule de 5 054 caractères comprenant exactement 5 000 `é`, salutation, identité et e-mail. Lien `mailto:julien@picqtures.fr` sans sujet/corps long. Pas de débordement horizontal. | PASS |
| Retour à un message court | Remplacer le message long par le tableau puis préparer | Nouveau lien court conforme | Sujet `Essai tableau & émojis`, tableau et emojis présents dans le corps décodé, lien de 304 caractères | PASS |

Données exactes du tableau :

```text
Entreprise\tMontant\tDate
Exemple\t150,00 €\t24/11/2026
😀\t500\t2026-11-24
```

Les séquences `\t` ci-dessus représentent les tabulations effectivement conservées. Aucun passage par le client de messagerie n’est vérifié. Le test constate la préparation et le contenu des liens/aperçus uniquement.

Note d’exécution : le premier clic après rechargement n’avait pas encore révélé l’alerte ; une lecture du DOM n’a trouvé aucun statut/alerte, puis un second clic sur le bouton actif a produit le rejet attendu. Les saisies étaient conservées. Le champ de formulaire est initialement désactivé avant hydratation, constaté dans l’arbre d’accessibilité.
