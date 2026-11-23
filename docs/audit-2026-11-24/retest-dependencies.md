# Rejeu indépendant — Le curieux

Date : 24 novembre 2026. Réalisé après correctifs du responsable, sans modification du code par cet auditeur.

## CUR-01 — Dépendances critiques : corrigé dans l'arbre local résolu

### Étapes rejouées

1. Depuis `/workspace/scratch/96633a0f04ab/picqtures`, lancer `npm audit --json` et enregistrer sa sortie.
2. Lancer `npm ls next sharp postcss nanoid source-map-js --all --json`.
3. Lancer `npm ls --all --json` ; inspecter récursivement les propriétés `problems`, `invalid`, `extraneous` et `error`.
4. Lire les versions de tous les chemins concernés dans `package-lock.json`, y compris une éventuelle copie imbriquée de PostCSS.

### Attendu

Aucune vulnérabilité connue signalée par npm au moment du test. Versions corrigées présentes dans l'arbre effectif, aucune dépendance invalide ni copie vulnérable restante de PostCSS.

### Observé

- `npm audit --json` : **code de sortie 0**, aucune vulnérabilité : info 0, low 0, moderate 0, high 0, critical 0, total 0.
- Les deux commandes `npm ls` : **code de sortie 0**.
- Inspection récursive de l'arbre complet : **aucune propriété de problème/invalid/extraneous/error**.
- Arbre et verrou cohérents :

| Paquet | Avant | Après |
| --- | --- | --- |
| Next | 15.5.15 | 15.5.29 |
| sharp | 0.34.5 | 0.35.5 |
| PostCSS | 8.5.3 + copie Next 8.4.31 | 8.5.23, dédupliqué |
| nanoid | version affectée signalée par npm | 3.3.20 |
| source-map-js | version affectée signalée par npm | 1.2.4 |

### Preuves

- Avant : `/workspace/scratch/96633a0f04ab/audit-dependencies-before.json`
- Après : `/workspace/scratch/96633a0f04ab/audit-dependencies-after.json`
- Arbre ciblé : `/workspace/scratch/96633a0f04ab/audit-dependency-tree-after.json`
- Arbre complet : `/workspace/scratch/96633a0f04ab/audit-full-tree-after.json`

### Portée de la conclusion

La dépendance critique détectée est remplacée dans l'installation et le verrou locaux. Ce contrôle ne constitue pas une preuve de l'absence universelle de vulnérabilités ; il vérifie le signal npm connu et les versions corrigées. Aucun exploit exécuté. Le build et le contrôle navigateur du responsable restent des validations distinctes. Aucun déploiement en production n'est attesté ici.

## CUR-02 — 404 anglaise sans retour

Non rejouée dans cette passe limitée aux dépendances ; conserver son statut du rapport initial tant qu'aucun correctif UI n'est testé.
