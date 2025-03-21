#Page de gestion de patients - Polo

 Développée avec HTML, CSS (Tailwind CSS) et JavaScript.

## Structure du Projet

```
/
├── css/                    # Fichiers CSS compilés
│   ├── style.css           # CSS principal (Tailwind CSS compilé)
│   └── components.css      # CSS des composants réutilisables
├── src/                    # Code source
│   ├── assets/             # Ressources statiques
│   │   └── images/         # Images utilisées dans l'application
│   ├── js/                 # Fichiers JavaScript
│   │   └── main.js         # Script principal de l'application
│   └── index.html          # Page HTML principale
├── tailwind/               # Configuration Tailwind
│   └── input.css           # Fichier source CSS pour Tailwind
├── tailwind.config.js      # Configuration de Tailwind CSS
└── postcss.config.js       # Configuration de PostCSS
```

## Organisation du Code

### HTML

Le fichier `index.html` est organisé en sections:
- Header avec logo et profil utilisateur
- Sidebar de navigation (adaptative pour mobile et desktop)
- Contenu principal avec titres, boutons d'action et grille de patients

### CSS

- `style.css`: Styles générés par Tailwind CSS
- `components.css`: Styles spécifiques pour les composants réutilisables

### JavaScript

- `main.js`: Gère toutes les fonctionnalités de l'application:
  - Initialisation du menu mobile
  - Gestion des menus déroulants
  - Affichage dynamique des cartes de patients
  - Gestion des boutons d'action

## Comment exécuter le projet

### Prérequis
- Node.js et npm installés

### Installation
1. Cloner le dépôt
2. Installer les dépendances: `npm install`

### Développement
- Lancer le serveur de développement: `npm run dev`
- Compiler les styles: `npm run build:css`

### Production
- Construire le projet: `npm run build`

## Notes techniques

- L'application utilise les classes utilitaires de Tailwind CSS pour le style
- Les données des patients sont chargées dynamiquement depuis JavaScript
- Le design est adaptatif pour s'adapter aux écrans de toutes tailles
- Les composants sont définis de manière modulaire pour faciliter leur réutilisation 