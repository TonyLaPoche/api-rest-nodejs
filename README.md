# Exemple API REST

---

![https://forthebadge.com](https://forthebadge.com/images/badges/powered-by-coffee.svg)

Une API REST simple pour gérer des exemples d'entités avec un CRUD complet, construite avec Node.js, Express, MongoDB et TypeScript.

## L'entité

L'entité générable/manipulable sur cette api est un simple objet contenant 2 clés (name, description).

### Schéma (exemple)

- name : `string (min: 3 & max: 30 length)`, `non nullable`, `obligatoire`
- description : `string (max: 300 length)`, `nullable`,  `facultatif`

```json
    {
        "name":"Nom d'un exemple",
        "description": "Description, lorem ipsum dolor sit amet..."
    }
```

## Fonctionnalités

- Création d'un exemple (**POST**)
- Récupération de tous les exemples (**GET**)
- Récupération d'un exemple par son ID (**GET**)
- Mise à jour d'un exemple par son ID (**PATCH**)
- Suppression d'un exemple par son ID (**DELETE**)
- Suppression de la liste complète des exemples (purge) (**DELETE**)

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- Node.js (version 12.x ou supérieur)
- npm (inclus avec Node.js) | yarn
- MongoDB (local ou distant)

## Installation

Clonez ce dépôt sur votre machine locale :

```bash
    git clone https://votreDepot.git
    cd votreProjet
```

Installez les dépendances du projet :

```bash
    yarn install
```

ou

```bash
    npm install
```

## Configurez les variables d'environnement

Créez un fichier .env à la racine du projet et ajoutez les configurations nécessaires :

```bash
    PORT=3000
    MONGODB_URI=votre_chaine_de_connexion_mongodb
```

## Démarrage de l'API

Pour lancer l'API en mode développement, exécutez :

```bash
    yarn dev
```

```bash
    npm run dev
```

Pour construire et exécuter en production :

```bash
    yarn build
    yarn start
```

## Utilisation

Voici comment consommer l'API :

*à titre personnel j'ai effectués mes essaies via le logiciel **POSTMAN**.  
Les exemples ci-dessous font référence à un traitement en local avec le port 3000. `localhost:3000/[ENDPOINT]`*

- Retrouver la liste des Endpoints dans le fichier `src/routes/index.ts`

### Créer un exemple

```bash
    POST /examples
    {
    "name": "Nom de l'exemple",
    "description": "Description de l'exemple"
    }
```

### Récupérer tous les exemples

```bash
    GET /examples
```

### Récupérer un exemple par ID

```bash
    GET /examples/:id
```

### Mettre à jour un exemple par ID

```bash
    PATCH /examples/:id
    {
    "name": "Nouveau nom",
    "description": "Nouvelle description"
    }
```

### Supprimer un exemple par ID

```bash
    DELETE /examples/:id
```

### Contribution

Les contributions sont les bienvenues ! Pour contribuer, veuillez forker le dépôt, créer une branche pour votre fonctionnalité ou correction, puis soumettre une pull request.

![https://forthebadge.com](https://forthebadge.com/images/badges/not-a-bug-a-feature.svg)

### Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

![https://forthebadge.com](https://forthebadge.com/images/badges/powered-by-electricity.svg)
![https://forthebadge.com](https://forthebadge.com/images/badges/built-by-developers.svg)
![https://forthebadge.com](https://forthebadge.com/images/badges/made-with-typescript.svg)


#### mot de la fin | remerciement

Je suis extrêmement reconnaissant envers mes mentors, qui m'ont soutenu et qui ont eu un regard critique et constructif sur mon travail. Ces personnes sont une véritable source d'inspiration et de motivation pour mon travail en tant que développeur.

- Alex : https://www.linkedin.com/in/alexandre-caldato/
- Cyril : https://www.linkedin.com/in/cchapon/
- Cindy : https://www.linkedin.com/in/cindy-bajoni/
- Alann : https://www.linkedin.com/in/alann-sapone/
