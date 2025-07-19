# HRA DEV - Site Web

Site web moderne et responsive pour HRA DEV, une agence de développement web et mobile.

## Technologies utilisées

- React
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Hero Icons

## Fonctionnalités

- Design responsive (mobile, tablette, desktop)
- Navigation fluide avec défilement et ancrage
- Animations à l'entrée des sections
- Formulaire de contact fonctionnel
- Interface moderne avec la couleur principale violet (#6C2BD9)

## Structure du site

- **Hero / Accueil** - Présentation de l'entreprise avec slogan
- **À propos** - Description de l'équipe et des valeurs
- **Services** - Liste des services proposés avec icônes
- **Portfolio** - Présentation des projets réalisés
- **Contact** - Formulaire de contact et coordonnées

## Installation et démarrage

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Construction pour la production
npm run build
```

## Déploiement

Ce site est prêt à être déployé sur Vercel ou Netlify.

### Déploiement sur Vercel

```bash
npm install -g vercel
vercel
```

### Déploiement sur Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

## Personnalisation

- Couleur principale : modifiez la valeur `primary` dans `tailwind.config.js`
- Contenu : modifiez les textes dans les composants respectifs
- Images : remplacez ou ajoutez des images dans le dossier `public` 