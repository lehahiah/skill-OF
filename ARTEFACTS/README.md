# ARTEFACTS

Ce dossier contient des artefacts conçus pour les organismes de formation.

Ils peuvent servir d'outils d'aide a l'analyse, a la redaction, a la pedagogie ou a l'appropriation de certains cadres conventionnels et reglementaires.

## Artefacts actuellement disponibles

### Positionnement CCN-IDCC1516.tsx
Outil de positionnement salarial par rapport aux marches de la convention collective des organismes de formation.

Cet artefact permet de travailler sur le classement ou le positionnement d'un emploi au regard de la CCN IDCC 1516, dans une logique pedagogique, preparatoire ou d'aide a l'analyse.

### Prose.html
Assistant d'ecriture polyvalent.

Cet artefact peut etre utilise pour :
- l'aide a la redaction
- la reformulation
- l'assistance podcast
- la reformulation juridique
- la reformulation pedagogique

Il peut servir de base de travail pour produire un texte plus clair, plus professionnel ou mieux adapte a un contexte donne.

### bloom-smart-app.tsx
Outil d'analyse et de reecriture d'objectifs pedagogiques.

Cet artefact aide a retravailler des objectifs de formation, notamment pour les rendre plus clairs, plus operationnels et mieux articules avec une logique de type Bloom / SMART.

## Formats presents dans ce dossier

Ce dossier contient deux types de formats :

- des fichiers `.html`
- des fichiers `.tsx`

Ils ne s'utilisent pas exactement de la meme facon.

## Utiliser un artefact dans Claude

Vous pouvez importer un artefact dans une conversation Claude pour demander a Claude de :
- expliquer le fonctionnement du fichier
- modifier son contenu
- adapter son interface
- corriger le code
- transformer l'outil pour votre propre usage

### Etapes

- ouvrez une conversation Claude
- cliquez sur `+`
- ajoutez le fichier souhaite
- importez le fichier `.html` ou `.tsx`
- donnez ensuite votre demande a Claude

### Exemples de demandes

Pour `Positionnement CCN-IDCC1516.tsx` :
- "adapte ce quiz pour un usage RH en organisme de formation"
- "simplifie les questions pour un premier niveau de sensibilisation"
- "ajoute une introduction pedagogique sur la CCN IDCC 1516"

Pour `Prose.html` :
- "adapte cet assistant d'ecriture a un usage juridique"
- "cree une version orientee reformulation LinkedIn"
- "ajoute un mode podcast avec un ton plus oral"

Pour `bloom-smart-app.tsx` :
- "ajoute une aide pour detecter les verbes trop flous"
- "cree une version specialisee organisme de formation"
- "propose une reecriture plus operationnelle des objectifs"

## Utiliser un artefact HTML en local

Les fichiers `.html` peuvent generalement etre ouverts directement dans un navigateur.

### Exemple
`Prose.html`

### Etapes
- telechargez le fichier
- ouvrez-le dans votre navigateur
- testez l'interface
- adaptez ensuite le contenu si besoin

Ce mode convient bien pour un outil autonome ou un prototype simple.

## Utiliser un artefact TSX en local

Les fichiers `.tsx` sont des composants React en TypeScript.

Ils ne sont pas faits pour etre ouverts directement par double-clic comme un fichier HTML.

### Exemples
- `Positionnement CCN-IDCC1516.tsx`
- `bloom-smart-app.tsx`

### Pour les utiliser en local
Il faut en general :
- un projet React
- un environnement TypeScript
- un outil de developpement adapte, par exemple Next.js, Vite ou un projet React equivalent

### Usage recommande
Si vous ne souhaitez pas manipuler un projet React vous-meme :
- importez d'abord le fichier dans Claude
- demandez a Claude de vous l'expliquer
- demandez ensuite une adaptation
- ou demandez une conversion en version HTML si cela est pertinent

## Faut-il ajouter une API ?

Pas systematiquement.

### Aucun ajout d'API necessaire
Vous n'avez pas besoin d'ajouter d'API si :
- vous utilisez simplement le fichier dans Claude comme base de travail
- vous l'importez pour le faire lire, corriger ou adapter
- l'artefact reste dans un usage local sans appel a un service externe

### Ajout d'API possible ou necessaire
Une API peut devenir necessaire si vous voulez utiliser l'artefact hors Claude avec des fonctions d'assistance IA actives.

C'est surtout le cas pour un outil comme `Prose.html` si vous souhaitez qu'il envoie de vraies requetes a un modele externe pour :
- reformuler automatiquement
- generer un texte
- produire une version podcast
- proposer une reecriture juridique ou pedagogique

Dans ce cas, il faut en general :
- connecter l'artefact a un service IA
- utiliser une cle API ou une architecture serveur adaptee
- prevoir une integration technique securisee

## Important - securite

N'inserez jamais une cle API en clair directement dans un fichier HTML, TSX ou JavaScript cote navigateur.

Pour un usage externe, privilegiez :
- un backend
- une variable d'environnement
- un proxy securise

## Conseils d'usage selon les fichiers

### Positionnement CCN-IDCC1516.tsx
A utiliser pour :
- une premiere approche du positionnement
- un support de sensibilisation RH
- un outil preparatoire avant analyse approfondie

Point de vigilance :
cet outil ne remplace pas l'analyse complete d'un poste, des missions reelles, du degre d'autonomie, de technicite et des criteres conventionnels applicables.

### Prose.html
A utiliser pour :
- gagner du temps en redaction
- reformuler un texte selon plusieurs registres
- travailler une trame ecrite, juridique, pedagogique ou orale

Point de vigilance :
les textes generes ou reformules doivent toujours etre relus, surtout en contexte juridique, contractuel, RH ou reglementaire.

### bloom-smart-app.tsx
A utiliser pour :
- analyser la qualite d'un objectif pedagogique
- rendre un objectif plus clair et observable
- aider a la reecriture dans un cadre formation

Point de vigilance :
un objectif pedagogique pertinent depend aussi du contexte, du public, du niveau vise, des modalites d'evaluation et du dispositif de formation.

## Public concerne

Ces artefacts peuvent etre utiles a :
- des organismes de formation
- des CFA
- des responsables qualite
- des responsables pedagogiques
- des formateurs
- des equipes administratives
- des consultants ou prestataires du secteur

## Avertissement

Ces artefacts sont fournis comme supports de travail, prototypes ou outils d'appui.

Ils doivent etre testes, relus et adaptes avant toute utilisation en situation reelle, en particulier lorsqu'ils portent sur :
- des enjeux juridiques
- des enjeux conventionnels
- des decisions RH
- des contenus pedagogiques engageant la conformite ou la qualite

## Formaswift

Ces artefacts s'inscrivent dans la demarche de Formaswift :
mettre l'IA au service d'usages concrets, utiles et structures pour les organismes de formation, avec une attention particuliere portee a la fiabilite, a la pedagogie et a la validation humaine.
