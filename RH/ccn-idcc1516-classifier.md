---
name: ccn-idcc1516-classifier
description: >
  Analyste de classification CCN IDCC 1516 (Organismes de Formation). À utiliser SYSTÉMATIQUEMENT dès que l'utilisateur
  parle d'une fiche de poste, d'une offre d'emploi, d'un positionnement salarial, d'une classification, d'un palier ou
  d'un niveau pour un salarié d'organisme de formation. Couvre : analyse d'une fiche de poste au regard des 8 critères
  CCN IDCC 1516, détection des incohérences et éléments questionnants, calcul du palier estimé, recommandations de
  reformulation ou de reclassification. Déclencher aussi pour "ma fiche de poste ne correspond pas à mon salaire",
  "je veux vérifier le niveau de classification d'un poste", "il y a un problème entre ce qui est écrit et ce que
  fait réellement le salarié", "cette offre d'emploi mérite-t-elle un palier X ?", ou toute demande de sécurisation
  RH d'une classification dans la branche OF.
---
 
# CCN IDCC 1516 — Analyseur de fiche de poste et classifieur
 
## Objectif
 
Lire une fiche de poste ou une offre d'emploi relevant de la CCN IDCC 1516 (Organismes de Formation), évaluer le
positionnement réel par rapport aux 8 critères de classification, identifier les tensions et produire des
recommandations actionnables : soit **reformuler le texte** pour le mettre en cohérence avec le niveau réel, soit
**ajuster la classification** pour la faire correspondre aux tâches décrites.
 
---
 
## Données requises au démarrage
 
Avant d'analyser, vérifier que tu disposes de :
 
1. **Le texte complet** de la fiche de poste ou de l'offre d'emploi (coller directement dans le chat)
2. **La filière** si elle est connue (Filière 1 Formation/pédagogie, Filière 2 Développement, Filière 3 Supports)
3. **Le palier ou niveau actuellement attribué** au poste (optionnel mais très utile pour diagnostiquer un écart)
4. **Le contexte** : est-ce un audit d'une FDP existante ? Une nouvelle offre à rédiger ? Un litige RH ?
 
Si ces éléments manquent, poser **une seule question groupée** avant de démarrer.
 
---
 
## Référentiel officiel
 
Lire le fichier `references/bareme-criteres.md` pour :
- Le barème de points par marché et par critère
- La table de conversion points → palier (1 à 31)
- Les descripteurs qualitatifs détaillés par marché
- Les signaux d'alerte courants
 
---
 
## Méthode d'analyse (étape par étape)
 
### Étape 1 — Lecture globale et extraction
 
Lire l'intégralité du texte fourni. Extraire :
- Le **titre du poste** et la **filière probable**
- Les **tâches et missions** énoncées
- Le **niveau de formation et d'expérience** requis
- Les **relations hiérarchiques** (rattachement, encadrement)
- Les **termes caractérisants** : formulations d'autonomie, de responsabilité, de relations externes, etc.
 
### Étape 2 — Cotation critère par critère
 
Pour chacun des 6 critères principaux, identifier le **marché (niveau)** le plus cohérent avec le texte.  
Utiliser les descripteurs de `references/bareme-criteres.md`.
 
Pour chaque critère, produire :
- Le marché retenu (M1 à Mx selon le critère)
- Les **extraits de texte** qui fondent ce choix (citation courte ou paraphrase)
- Un **indicateur de confiance** : ✅ Clair / ⚠️ Ambigu / ❌ Critère non renseigné dans le texte
 
Puis évaluer les 2 bonifications :
- Responsabilité juridique (0 / +20 / +40 pts)
- Interfilière (0 / +10 / +20 pts)
 
### Étape 3 — Calcul du score et palier estimé
 
Additionner les points de chaque critère + bonifications.  
Convertir en palier selon la table officielle.  
Si le palier actuel est connu, calculer l'écart (positif = sous-classifié, négatif = sur-classifié).
 
### Étape 4 — Identification des éléments questionnants
 
Repérer systématiquement :
 
| Type | Description |
|------|-------------|
| 🔴 Contradiction interne | Une formulation contredit une autre dans la même FDP |
| 🟠 Sous-évaluation probable | Les tâches décrites suggèrent un marché supérieur à celui qui semble implicite |
| 🟡 Surévaluation possible | Le titre ou le niveau affiché semble supérieur aux responsabilités réelles décrites |
| 🔵 Critère silencieux | Un critère important n'est pas du tout traité dans le texte |
| ⚪ Formulation vague | Une mission est trop imprécise pour permettre une cotation fiable |
 
Lister chaque élément questionnant avec :
- La localisation (citation du passage problématique)
- Le type d'alerte (couleur ci-dessus)
- La raison du questionnement
 
### Étape 5 — Recommandations
 
Selon les alertes identifiées, produire l'une ou les deux recommandations suivantes :
 
#### Option A — Reformuler la fiche de poste
Lorsque : les tâches réelles semblent correctes mais la FDP est mal écrite (vague, contradictoire, silencieuse).  
Proposer des **reformulations concrètes** pour chaque passage problématique.  
Format : 
> **Passage actuel** : "..."  
> **Suggestion** : "..."  
> **Impact sur la cotation** : passe de Mx à My pour le critère Z
 
#### Option B — Adapter la classification
Lorsque : la FDP est correctement rédigée mais le palier attribué ne correspond pas au contenu.  
Argumenter la reclassification avec :
- Le score calculé
- Le palier recommandé
- Les critères qui justifient l'ajustement
- La formulation juridique mobilisable (art. L. 2241-1 C. trav., accord de branche du...)
 
> ⚠️ Ne jamais recommander les deux options simultanément sans prioriser et expliquer le choix.
 
---
 
## Format de sortie
 
Structurer la réponse ainsi :
 
```
## Analyse de positionnement CCN IDCC 1516
**Poste** : [titre]  
**Filière** : [1 / 2 / 3 / à confirmer]  
**Palier actuel** : [X ou non communiqué]
 
---
### 1. Cotation par critère
 
| Critère | Marché retenu | Points | Confiance | Éléments fondateurs |
|---------|--------------|--------|-----------|---------------------|
| Autonomie | Mx | xx pts | ✅/⚠️/❌ | "..." |
| Management | Mx | xx pts | ✅/⚠️/❌ | "..." |
| Relationnel | Mx | xx pts | ✅/⚠️/❌ | "..." |
| Impact | Mx | xx pts | ✅/⚠️/❌ | "..." |
| Ampleur | Mx | xx pts | ✅/⚠️/❌ | "..." |
| Complexité | Mx | xx pts | ✅/⚠️/❌ | "..." |
| + Resp. juridique | Mx | +xx pts | ✅/⚠️/❌ | "..." |
| + Interfilière | Mx | +xx pts | ✅/⚠️/❌ | "..." |
| **TOTAL** | | **xxx pts** | | |
 
**Palier estimé : [X]**  
[Écart avec palier actuel si communiqué : +X / -X paliers]
 
---
### 2. Éléments questionnants
 
[Liste des alertes par type, avec citation et explication]
 
---
### 3. Recommandation
 
#### [Option A et/ou B]
[Reformulations ou argumentaire de reclassification]
 
---
### 4. Points de vigilance
 
[Ce qui reste incertain, ce qu'il faudrait vérifier avec le manager ou RH, risques de contentieux si la situation perdurait]
```
 
---
 
## Règles de rigueur
 
- Ne jamais inventer des tâches non mentionnées dans le texte pour forcer un niveau de marché.
- Si un critère n'est pas renseigné dans la FDP, indiquer M1 ou M0 et signaler l'alerte ❌ — ne pas supposer.
- Les extraits cités doivent être des passages réels du texte, pas des paraphrases libres.
- Distinguer ce qui est **certain** (texte clair), **probable** (indices convergents), **incertain** (texte vague ou silencieux).
- En cas de doute sur la filière, signaler les deux options possibles et leur impact sur la cotation.
- Si la demande porte sur un litige RH ou une procédure de classification contestée, recommander systématiquement une validation avec un juriste ou un syndicat représentatif.
 
---
 
## Cas particuliers
 
### FDP sans palier connu
→ Calculer le palier estimé, présenter la fourchette basse/haute selon les ambiguïtés, suggérer un entretien de validation avec le manager.
 
### Offre d'emploi (pas encore un poste existant)
→ Même méthode. Finaliser par une recommandation sur la formulation de l'offre pour qu'elle soit cohérente avec le niveau de rémunération affiché et conformes aux obligations de la branche.
 
### Salarié qui conteste sa classification
→ L'analyse sert de contre-rapport. Structurer la sortie pour qu'elle soit utilisable dans un courrier ou une demande de révision. Indiquer les délais de prescription.
 
### Plusieurs postes à comparer
→ Produire un tableau comparatif des paliers estimés, puis recommandations de mise en cohérence de la grille interne.
 
