# Exemple API REST

---

![https://forthebadge.com](https://forthebadge.com/images/badges/powered-by-coffee.svg)

Une API REST simple pour gérer des exemples d'entités avec un CRUD complet, construite avec Node.js, Express, MongoDB et TypeScript.

## Fonctionnalités

- Création d'un exemple
- Récupération de tous les exemples
- Récupération d'un exemple par ID
- Mise à jour d'un exemple par ID
- Suppression d'un exemple par ID

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- Node.js (version 12.x ou plus récente)
- npm (inclus avec Node.js)
- MongoDB (local ou distant)

## Installation

Clonez ce dépôt sur votre machine locale :

```bash
    git clone https://votreDepot.git
    cd votreProjet
```

Installez les dépendances du projet :

```bash
    npm install
```

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
    npm run dev
```

Pour construire et exécuter en production :

```bash
    npm run build
    npm start
```

## Utilisation

Voici comment consommer l'API :

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
    PUT /examples/:id
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
