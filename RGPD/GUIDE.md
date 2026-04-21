# Guide d'utilisation - Skill RGPD pour organismes de formation

## Ce que fait cette skill

Cette skill transforme Claude en assistant RGPD opérationnel spécialisé pour les organismes de formation, CFA et formateurs indépendants.

Elle ne se contente pas d'expliquer le RGPD en général. Elle aide à produire, relire, corriger ou adapter des livrables concrets en lien avec l'activité réelle d'un organisme de formation, par exemple :

- un registre des traitements ;
- une politique de confidentialité ;
- des clauses d'information ;
- un clausier de sous-traitance ou de prestation ;
- une procédure de gestion des violations de données ;
- une procédure de suppression et d'archivage ;
- une charte informatique ;
- des supports de sensibilisation ;
- une analyse des outils numériques utilisés ;
- une aide à l'articulation entre RGPD et exigences Qualiopi.

La skill s'appuie sur deux types de contenus :

- des **fichiers de référence** dans `references/`, qui servent de garde-fous méthodologiques et juridiques ;
- des **templates** dans `templates/`, qui servent de base de rédaction et d'adaptation.

---

## Installation

**Pré-requis :** un compte Claude.ai. Une formule Pro est recommandée pour les documents longs ou les analyses complexes.

### Étapes

1. Téléchargez le fichier `rgpd-of.skill` depuis ce dossier.
2. Dans Claude, ouvrez **Paramètres -> Skills**.
3. Cliquez sur **+**, puis **Create skill**, puis **Upload a skill**.
4. Importez le fichier `.skill`.
5. Activez la skill dans votre liste.

La skill devient ensuite disponible dans vos conversations dès que votre demande concerne le RGPD, les données personnelles, la conformité documentaire ou l'usage des outils numériques dans un organisme de formation.

---

## Comment déclencher la skill

La skill s'active automatiquement lorsqu'elle reconnaît un sujet RGPD lié à un organisme de formation.

Si vous souhaitez forcer son déclenchement, vous pouvez aussi commencer votre message par :

```text
/skill rgpd-of
