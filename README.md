# HRA DEV - Site Web Professionnel

Site web moderne pour HRA DEV, une entreprise de développement web et mobile.

## Technologies utilisées

- React avec TypeScript
- Vite comme bundler
- Tailwind CSS pour le styling
- Framer Motion pour les animations

## Fonctionnalités

- Design responsive et moderne
- Animations fluides
- Sections : Accueil, À propos, Services, Portfolio, Contact
- Formulaire de contact
- Profil du fondateur

## Installation locale

```bash
# Cloner le repository
git clone <votre-repo-url>

# Accéder au dossier du projet
cd hra-dev-website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Déploiement sur Netlify

### Option 1 : Déploiement automatique depuis GitHub

1. Connectez-vous à votre compte [Netlify](https://www.netlify.com/)
2. Cliquez sur "New site from Git"
3. Sélectionnez GitHub comme fournisseur Git
4. Autorisez Netlify à accéder à vos repositories
5. Sélectionnez le repository de ce projet
6. Configurez les options de build:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Cliquez sur "Deploy site"

### Option 2 : Déploiement manuel

1. Construisez le projet localement:
   ```bash
   npm run build
   ```
2. Déployez le dossier `dist` sur Netlify:
   - Connectez-vous à votre compte Netlify
   - Glissez-déposez le dossier `dist` dans la zone de dépôt de Netlify

### Configuration

Le fichier `netlify.toml` est déjà configuré avec les paramètres nécessaires:
- Commande de build: `npm run build`
- Dossier de publication: `dist`
- Redirection pour le routage SPA
- Versions de Node.js et npm recommandées

## Variables d'environnement

Si vous avez besoin de variables d'environnement pour votre projet, créez un fichier `.env` à la racine du projet et ajoutez-les dans les paramètres de votre site Netlify dans la section "Site settings > Build & deploy > Environment".

## Personnalisation

Pour personnaliser le site:
- Modifiez les composants React dans le dossier `src/components/`
- Ajustez les styles dans `src/index.css`
- Modifiez les couleurs dans `tailwind.config.js`

## Contact

Pour toute question ou assistance, contactez:
- Email: hra.deve@gmail.com
- Téléphone: +216 29 833 609 