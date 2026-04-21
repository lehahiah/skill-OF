# AIPD - repères pratiques pour les organismes de formation

## 1. Quand une AIPD doit être envisagée

L'analyse d'impact relative à la protection des données (AIPD) est prévue par l'article 35 du RGPD. Elle s'impose lorsque le traitement est susceptible d'engendrer un **risque élevé** pour les droits et libertés des personnes.

Pour raisonner, mobiliser :
- les critères issus des lignes directrices européennes ;
- les listes CNIL des traitements pour lesquels une AIPD est requise ou non ;
- le contexte réel du traitement.

## 2. Situations OF où la vigilance doit être renforcée

Une AIPD peut devenir nécessaire, par exemple, en présence de :
- surveillance systématique à grande échelle ;
- traitement de données sensibles à grande échelle ;
- proctoring ou surveillance intrusive d'examens ;
- profilage ou scoring ayant des effets significatifs ;
- usage d'IA ou de biométrie dans des processus sensibles ;
- croisement de plusieurs sources pour évaluer des personnes vulnérables.

Ne pas écrire qu'une AIPD est automatiquement requise pour tout traitement RH ou tout traitement de handicap dans un OF. Il faut qualifier le niveau de risque, l'échelle, la systématicité et les garanties existantes.

## 3. Méthode attendue dans la skill

Quand l'utilisateur décrit un traitement potentiellement risqué :
1. décrire précisément le traitement ;
2. identifier les données, personnes concernées, outils et destinataires ;
3. repérer les critères de risque élevé ;
4. conclure : AIPD manifestement requise / à analyser plus finement / a priori non requise ;
5. proposer un plan de travail ou une trame d'AIPD.

## 4. Points juridiques à ne pas déformer

- Le DPO doit être consulté **s'il est désigné**.
- L'absence d'AIPD obligatoire n'exonère pas d'une analyse de conformité.
- Une AIPD doit être préparée avant la mise en œuvre du traitement risqué.

## 5. Trame courte d'analyse à produire

```text
Traitement concerné
Finalité
Personnes concernées
Catégories de données
Outils et flux
Critères de risque élevé repérés
Mesures existantes
Mesures complémentaires proposées
Conclusion sur la nécessité d'une AIPD

Méthodologie d’Évaluation des Risques et Détermination de l’Obligation d’AIPD

L'Analyse d'Impact relative à la Protection des Données (AIPD) constitue la pierre angulaire du principe d’Accountability. Conformément aux cadres réglementaires européens, cette "obligation de rendre compte" impose au responsable de traitement de mettre en œuvre des mécanismes internes et des procédures documentées pour démontrer, à tout moment, la conformité de ses opérations. Cette étape de pré-évaluation est un impératif stratégique : elle permet d’ancrer la protection de la vie privée dès la conception (Privacy by Design) et de prévenir des risques juridiques et financiers majeurs. En tant qu'expert, je rappelle que l’absence de documentation sur le seuil de risque est, en soi, une faille de conformité susceptible de sanctions.


--------------------------------------------------------------------------------


1. Fondements et Cadre de Référence de l’Évaluation

L'évaluation repose sur la détection du "risque élevé", pivot juridique déclenchant l'obligation de l'Article 35 du RGPD.

1.1. Les piliers réglementaires (RGPD & CNIL)

Le cadre s'appuie sur l'Art. 35 du RGPD et les délibérations CNIL n° 2018-326 et 2018-327. La méthodologie poursuit trois objectifs indissociables :

* Identifier les caractéristiques intrinsèques du traitement susceptibles de porter atteinte aux libertés.
* Évaluer la gravité et la probabilité des risques pour les droits des personnes.
* Traiter les risques via des mesures techniques et organisationnelles proportionnées.

1.2. Identification des acteurs clés et responsabilités

La décision de lancer une AIPD n'est pas une simple appréciation technique ; elle engage la responsabilité juridique de l'entité.

Acteur	Rôle et Responsabilités Mandatées
Responsable de Traitement	Pilotage légal. Il assume la responsabilité ultime de la réalisation de l'analyse et du choix des mesures d'atténuation.
DPO (Expert Conseil)	Mandat de surveillance indépendante. Il conseille sur la nécessité de l'AIPD, vérifie sa qualité et doit formellement valider le niveau de risque résiduel.
RSSI / Sécurité IT	Évaluateur des menaces sur la disponibilité, l'intégrité et la confidentialité (DIC). Il propose les solutions de chiffrement ou de filtrage.
Sous-traitants	Obligation de coopération. Ils fournissent la documentation technique sur les outils qu'ils opèrent pour le compte du responsable.
Instances (CSE)	Consultation obligatoire pour tout traitement impactant les conditions de travail ou la surveillance des salariés.
Personnes Concernées	Consultation ponctuelle. Recommandée pour évaluer l'acceptabilité sociale et les attentes en matière de vie privée.

1.3. Définition du "Risque Élevé"

Le "Risque Élevé" n'est pas une probabilité mathématique, mais une évaluation contextuelle de l'impact potentiel sur les droits fondamentaux. Il se manifeste lorsque le traitement, par sa nature ou sa portée, peut entraîner des dommages physiques, matériels ou moraux (discrimination, usurpation d'identité, perte financière). Note cruciale : Le renforcement de la sécurité informatique n'annule jamais l'obligation légale de réaliser une AIPD si les critères de risque élevé sont réunis initialement.

Le cadre étant posé, l'analyse doit maintenant passer par le filtre impératif des listes de conformité systématiques.


--------------------------------------------------------------------------------


2. Premier Filtre : Listes de Conformité de la CNIL ("Blacklist" et "Whitelist")

L'autorité de contrôle nationale fournit des repères objectifs pour sécuriser juridiquement le dossier. Ce passage est une étape de "décision rapide" pour stabiliser la stratégie de conformité.

2.1. Analyse de la "Blacklist" (AIPD obligatoire par délibération)

La CNIL liste 14 types d'opérations exigeant une AIPD systématique. Pour chaque type, le facteur de risque dominant justifie l'obligation :

1. Santé (Établissements) : Soins hospitaliers ou médico-sociaux (Données sensibles + Personnes vulnérables).
2. Données génétiques : Analyse de l'ADN de populations fragiles (Données sensibles + Vulnérabilité).
3. Profilage RH : Gestion des carrières et recrutement (Évaluation/Scoring + Personnes vulnérables).
4. Surveillance constante : Monitoring continu de l'activité des employés (Surveillance systématique + Vulnérabilité).
5. Alertes sanitaires/sociales : Signalements de santé publique (Données sensibles + Évaluation).
6. Alertes professionnelles (Whistleblowing) : Recueil des signalements de manquements (Évaluation + Risque de représailles).
7. Entrepôts de données de santé : Registres ou bases de recherche (Données sensibles + Grande échelle).
8. Profilage avec exclusion contractuelle : Refus d'assurance ou de prêt (Décision automatisée + Exclusion d'un droit).
9. Gestion mutualisée des manquements : Fichiers de "mauvais payeurs" ou fraudeurs (Décision automatisée + Croisement de données).
10. Profilage via sources externes : Enrichissement de profils par des tiers (Croisement de données + Scoring).
11. Biométrie : Reconnaissance faciale ou digitale de personnes vulnérables (élèves, patients) (Données sensibles + Vulnérabilité).
12. Logement social : Attribution et gestion des baux (Évaluation + Vulnérabilité économique).
13. Accompagnement médico-social : Suivi des personnes fragiles (Données sensibles + Évaluation).
14. Géolocalisation à grande échelle : Suivi des déplacements (Surveillance systématique + Grande échelle).

2.2. Examen de la "Whitelist" (Exonération)

La délibération 2019-118 définit les traitements exonérés (ex: gestion des salaires standard, registre des visiteurs). Attention : un traitement est réellement dispensé d'AIPD uniquement s'il ne présente aucun risque élevé, c'est-à-dire s'il ne remplit aucun (zéro) des critères de risque du G29/CEPD.

2.3. Synthèse de l'Orientation Immédiate

Règle de décision : Si le traitement figure sur la liste obligatoire, l'AIPD est lancée sans délai. S'il figure sur la liste d'exonération, la conformité est présumée mais doit rester documentée au registre. Pour tout traitement ne figurant dans aucune liste, il est impératif d'appliquer les critères d'évaluation du CEPD.


--------------------------------------------------------------------------------


3. Second Filtre : Évaluation selon les 9 Critères du CEPD

Pour les traitements non listés, le barème universel du CEPD permet de quantifier la probabilité de risque élevé selon quatre axes : nature, portée, contexte et finalités.

3.1. Grille d'Analyse des Critères de Risque

Critère	"So What?" – Analyse d'Impact sur les Libertés
1. Évaluation / Scoring	Profilage prédictif (ex: solvabilité). Risque de discrimination financière ou exclusion sociale.
2. Décision automatisée	Effet juridique sans intervention humaine. Risque d'erreur algorithmique sans recours simple.
3. Surveillance systématique	Observation constante (ex: RFID, caméras). Atteinte à l'anonymat dans l'espace public.
4. Données sensibles	Santé, opinions, biométrie (ex: compteurs intelligents révélant le mode de vie). Risque d'interférence grave dans l'intimité.
5. Grande échelle	Analyse massive. Impact démultiplié par 4 facteurs : nombre de sujets, volume, durée, et étendue géographique.
6. Croisement de données	Combinaison de fichiers. Risque de ré-identification et dépassement des attentes de l'individu.
7. Personnes vulnérables	Enfants, employés, demandeurs d'asile. Déséquilibre de pouvoir rendant l'opposition ou le consentement quasi-impossibles.
8. Usage innovant	IoT, IA, drones. Conséquences sociales souvent imprévisibles et non maîtrisées.
9. Exclusion d'un droit	Blocage d'accès à un contrat ou service. Atteinte directe à la liberté contractuelle ou économique.

3.2. Règle de Cumul et Seuil de Déclenchement

La règle standard stipule que le cumul de 2 critères rend l'AIPD obligatoire. Toutefois, un seul critère peut suffire selon le contexte (ex: surveillance biométrique à grande échelle). Notez que plus le nombre de critères est élevé, plus l'obligation est stricte, indépendamment de la robustesse des mesures de sécurité prévues.

L'émergence des technologies d'intelligence artificielle impose une vigilance particulière au sein de ces critères, car elles fusionnent souvent innovation, scoring et vulnérabilité.


--------------------------------------------------------------------------------


4. Focus Spécifique : Intelligence Artificielle et Systèmes Algorithmiques

Les recommandations CNIL de juillet 2025 précisent que les modèles d'IA, par leur capacité de mémorisation, traitent intrinsèquement des données personnelles si leur entraînement s'est basé sur celles-ci.

4.1. Qualification du Risque IA et Responsabilités

La CNIL clarifie en 2025 la distinction entre les concepteurs de modèles (responsables de la sécurité du développement) et les intégrateurs/réutilisateurs (responsables de l'usage final). Un point de vigilance majeur concerne l'Open Source, pilier du développement actuel, qui nécessite un audit de provenance des données d'entraînement.

4.2. Critères d'AIPD appliqués à l'IA

L'AIPD est virtuellement obligatoire pour tout projet d'IA car les critères "Innovation technologique" et "Évaluation/Scoring" sont quasi-systématiquement réunis. L'expert préconisera la mise en œuvre de filtres robustes encapsulant le système pour empêcher l'extraction de données mémorisées.

4.3. Recommandations Sectorielles (Stratégie 2025-2028)

* Éducation : Priorité absolue aux droits des mineurs ; l'IA ne doit pas devenir un outil de prédiction limitant les parcours scolaires.
* Santé : Co-régulation avec les autorités de santé pour valider les modèles de diagnostic.
* Travail : Consultation impérative des instances représentatives pour tout outil d'IA impactant le recrutement ou la performance.


--------------------------------------------------------------------------------


5. Protocole de Formalisation et Outils d'Aide à la Décision

La qualité de la documentation est la preuve de la bonne foi du responsable de traitement en cas de contrôle.

5.1. Structure Type d'une AIPD

Pour être opposable, l'analyse doit comporter quatre piliers :

1. Description détaillée : Flux de données, finalités et acteurs.
2. Nécessité et Proportionnalité : Démonstration que le traitement est le moins intrusif possible.
3. Gestion des risques : Analyse DIC (Disponibilité, Intégrité, Confidentialité).
4. Mesures d’atténuation : Garanties techniques (anonymisation, chiffrement) et organisationnelles.

5.2. Sélection des Outils (Avril 2026)

* Logiciel PIA (CNIL) : Version mise à jour en avril 2026, offrant une base de connaissances didactique et des outils de visualisation des risques.
* Modèle Standardisé du CEPD : Issu de la Déclaration de Helsinki (2025), ce "méta-template" vise à simplifier la conformité pour les PME et harmoniser les pratiques européennes. Il est soumis à consultation publique jusqu'en juin 2026.
* Projet PANAME : Pour les audits d'IA, cet outil développé avec l'ANSSI, le programme de recherche iPoP et le PEReN permet de vérifier si un modèle mémorise indûment des données personnelles.

5.3. Issue de l'Évaluation et Consultation Préalable

L'AIPD débouche sur deux scénarios :

* Risque résiduel acceptable : Le traitement peut démarrer sous surveillance du DPO.
* Risque résiduel élevé : Si les mesures ne suffisent pas à ramener le risque à un niveau modéré, la consultation préalable de la CNIL est légalement obligatoire. Le traitement est suspendu pendant le délai d'instruction (2 mois prolongeables).

Cette méthodologie est un processus itératif qui doit être revu à chaque évolution technologique pour garantir une protection pérenne des individus.

```

## Références à privilégier

- RGPD - article 35.
- CNIL - AIPD : cas requis ou non requis.
- Outil PIA de la CNIL.
