# FoodlyApp

## Technologies utilisées

- React
- Vite
- Redux & Redux Toolkit
- React Router DOM
- Bootstrap
- AOS (Animate On Scroll)
- Atropos (3D parallex)

---

Une application web moderne de livraison de nourriture développée avec React, Vite et Redux.

## Fonctionnalités

- Liste et détails des restaurants
- Menu dynamique avec filtrage
- Panier d'achat avec Redux
- Design responsive
- Déploiement avec Vite

## Structure du projet

```
front_end/
  public/           # Fichiers statiques (images, menu_data.json, etc.)
  src/
	 assets/         # Images et icônes
	 componants/     # Composants React
	 redux/          # Slices Redux et store
	 styles/         # Fichiers CSS
	 App.jsx         # Composant principal
	 main.jsx        # Point d'entrée
  package.json      # Dépendances et scripts du projet
  vite.config.js    # Configuration Vite
```

## Pour commencer

1. **Installer les dépendances**

   npm install

   ```

   ```

2. **Lancer le serveur de développement**

   npm run dev

   ```

   ```

3. **Construire pour la production**

   npm run build

   ```

   ```

4. **Déployer**

   npm run deploy

   ```

   ```

## Remarques

- Si vous déployez dans un sous-répertoire, configurez l'option `base` dans `vite.config.js` et `basename` dans React Router.
- Les fichiers statiques doivent être placés dans le dossier `public` et référencés avec `import.meta.env.BASE_URL`.
- ⚠️ J'utilise une API avec une limite d'utilisation. Après un certain temps, il se peut que la liste des restaurants et des menus ne s'affiche plus temporairement.
