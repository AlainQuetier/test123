# IA & Environnement

Site éducatif sur l'impact environnemental de l'intelligence artificielle.

## Démarrage

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Déploiement sur GitHub Pages

1. Modifier le `basePath` dans `next.config.js` avec le nom de votre repository
2. Modifier la `homepage` dans `package.json` avec votre URL GitHub Pages
3. Pusher sur la branche main pour déclencher le déploiement automatique

## Configuration GitHub Pages

1. Aller dans Settings > Pages de votre repository
2. Sélectionner "GitHub Actions" comme source
3. Le site sera automatiquement déployé à chaque push sur main

## Structure du projet

- `pages/` - Pages Next.js
- `components/ui/` - Composants UI réutilisables
- `styles/` - Fichiers CSS
- `lib/` - Utilitaires
- `.github/workflows/` - Configuration GitHub Actions