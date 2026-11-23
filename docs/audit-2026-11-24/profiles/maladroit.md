# Le maladroit — audit PICQ’TURES

Base : `7133677174eaf6bbb1d5d73f98082d4f58b52e4b`. Tests CUA dans le site local `http://127.0.0.1:4173` et inspection du composant partagé `app/_components/service-contact.tsx`. Aucun mail envoyé. Gravités : P0 critique, P1 majeur, P2 modéré, P3 mineur.

## M-01 — P2 — Un nom et un sujet composés seulement d’espaces sont acceptés

**Statut : reproduit dans le navigateur pour la validation ; déclenchement mailto constaté, ouverture de la messagerie non vérifiée.**

Étapes exactes :
1. Ouvrir `/offres` et atteindre « Parlons de votre besoin ».
2. Saisir trois espaces dans « Nom et prénom ».
3. Saisir `audit@example.test` dans « Votre adresse e-mail ».
4. Remplacer « Sujet de votre demande » par trois espaces.
5. Laisser le message vide et cliquer « Ouvrir ma messagerie ».

Attendu : demander un nom et un sujet contenant au moins un caractère autre qu’un espace ; garder les données saisies et afficher une erreur près des champs.

Observé : avant soumission, les deux champs ont `validity.valid = true` et `validity.valueMissing = false`. Au clic, le navigateur d’audit tente la navigation `mailto:` (refusée par sa politique de protocoles HTTP/HTTPS). La seule contrainte du code est `required`, sans `trim()` ni validation métier. Le message optionnel est remplacé par le texte par défaut. Ce défaut n’établit ni envoi effectif, ni panne du client mail.

Impact : préparation d’un message avec identité et sujet vides visuellement ; qualité des demandes dégradée. Pas de compromission ni perte de données établie.

Preuves : composant partagé, lignes 19–24 (lecture brute de FormData), 29 et 32 (`required` uniquement) ; test CUA des propriétés de validité.

Correction proposée : normaliser par `trim()` les champs nom/sujet/email à la soumission, rejeter nom/sujet vides après normalisation avec un message explicite et un focus sur le champ ; conserver la compatibilité emojis/accents.

## Cas exécutés sans bug confirmé

| Cas | Données et geste | Résultat observé |
| --- | --- | --- |
| Formulaire vide | `/offres`, clic sans remplir nom/e-mail | Soumission bloquée ; nom `validity.valueMissing=true`, message natif « Please fill out this field ». |
| Mauvais format e-mail | Nom/sujet renseignés, e-mail `pas-un-email`, clic | E-mail `typeMismatch=true`, `validity.valid=false` ; pas de mailto déclenché lors de ce cas. |
| Emojis et accents | `/a-propos`, nom `Julien 🧑‍💼 É🚀` | Saisie conservée, valide. |
| Sujet de 5 000 caractères | Remplir le sujet par `é` répété 5 000 fois | Longueur conservée 5 000, valide, `maxLength=-1`. Aucun plantage visible. Pas de clic mailto. |
| Message de 5 000 caractères | Sujet « Essai long », message `é` répété 5 000 fois | Longueur conservée 5 000, valide, pas de débordement horizontal de page (`scrollWidth <= innerWidth`). Pas de clic mailto. |
| Tableau collé en texte | `Entreprise\tMontant\tDate\nExemple\t150,00 €\t24/11/2026\n😀\t500\t2026-11-24` | Tabulations et retours conservés dans le textarea ; pas de plantage. |
| Encodage mailto | Exécution isolée du gestionnaire TSX transpilé, fenêtre/FormData simulées, aucune navigation | Retours à la ligne réels dans le corps ; `encodeURIComponent`/`decodeURIComponent` conservent emojis, accents et tableau. |

## Observation à vérifier, pas un bug de livraison établi

**Non vérifié : compatibilité des très longs mailto.** Aucun champ n’a de limite de longueur. Le calcul pur avec un message de 5 000 `é` produit une URL mailto de 30 170 caractères. Certains clients pourraient ne pas traiter un tel lien ; aucun échec de client mail n’a été observé ici. Ne pas classer cela comme panne confirmée. Recommandation : prévoir une copie du texte préparé comme solution de secours, et afficher un message utile si le brouillon est trop long pour le lien. Éviter de tronquer silencieusement la demande.

## Limites

Le protocole mailto est bloqué par le navigateur d’audit. Aucun contournement n’a été tenté. La messagerie système et l’envoi final restent non testés. Le site n’a pas de paiement, d’API de formulaire ou d’enregistrement serveur dans ce dépôt. Aucun P0 ou P1 confirmé pour ce profil.
