# 🚀 Guide de déploiement Netlify - MatriCx Consulting

## ✅ Étapes de déploiement

### 1️⃣ **Préparation locale (déjà fait)**
- ✅ Fichier `netlify.toml` configuré
- ✅ Redirections SPA (`public/_redirects`)
- ✅ Headers de sécurité (`public/_headers`) 
- ✅ PWA optimisé pour production
- ✅ Build testé avec succès

### 2️⃣ **Déploiement sur Netlify**

#### Méthode A : Script automatique (Recommandé)
```powershell
# Windows PowerShell
.\deploy.ps1

# Ou Git Bash/Linux
./deploy.sh
```

#### Méthode B : Manuel Git
1. **Push votre code sur GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Configuration Netlify complète"
   git push origin main
   ```

2. **Connecter à Netlify**
   - Aller sur [netlify.com](https://netlify.com)
   - "Add new site" > "Import an existing project"
   - Connecter votre repository GitHub/GitLab
   - Sélectionner le repo `MatricxConsulting`

3. **Configuration automatique**
   - Build command: `npm run build` (configuré dans netlify.toml)
   - Publish directory: `dist` (configuré dans netlify.toml)  
   - Node version: `20` (configuré dans netlify.toml)
   - NPM flags: `--include=dev` (pour installer TypeScript)

#### Méthode B : Drag & Drop
1. **Build local**
   ```bash
   npm run build
   ```

2. **Upload du dossier `dist`**
   - Glisser-déposer le dossier `dist` sur netlify.com
   - ⚠️ Moins pratique pour les mises à jour

### 3️⃣ **Configuration post-déploiement**

#### Variables d'environnement
Dans Netlify Dashboard > Site settings > Environment variables:
```
NODE_ENV=production
VITE_PWA_ENABLED=true
VITE_BASE_URL=https://votre-site.netlify.app
VITE_CALENDLY_URL=https://calendly.com/consultingmatricx/30min
```

#### Nom de domaine personnalisé (optionnel)
- Site settings > Domain management
- Add custom domain
- Suivre les instructions DNS

### 4️⃣ **Vérifications post-déploiement**

#### ✅ Checklist fonctionnelle
- [ ] Site accessible sur l'URL Netlify
- [ ] Toutes les pages se chargent (/, /about, /services, /contact, /blog)
- [ ] React Router fonctionne (pas d'erreur 404 sur les routes)
- [ ] PWA installable (icône + dans le navigateur)
- [ ] Chatbot fonctionne
- [ ] Lien Calendly fonctionne
- [ ] Formulaire de contact (si configuré)
- [ ] Images s'affichent correctement

#### 🔒 Sécurité et performance
- [ ] HTTPS automatique activé
- [ ] Headers de sécurité appliqués
- [ ] Cache des assets configuré
- [ ] Service Worker fonctionnel

### 5️⃣ **Mises à jour automatiques**

Avec Git connecté :
- Chaque `git push` → Build automatique sur Netlify
- Previews automatiques pour les PR
- Rollback facile depuis le dashboard

## 📋 **Fichiers créés pour Netlify**

```
📁 Projet
├── netlify.toml              # Configuration principale
├── .netlifyignore           # Fichiers à ignorer
├── .env.production          # Variables de production
└── public/
    ├── _redirects           # Redirections SPA
    ├── _headers             # Headers HTTP
    ├── robots.txt           # SEO robots
    └── sitemap.xml          # Plan du site
```

## 🚨 **Résolution de problèmes**

### Build échoue
```bash
# Vérifier le build en local
npm run build

# Vérifier TypeScript
npx tsc --version

# Si erreur TypeScript, vérifier les types
npm run lint

# Vérifier que TypeScript est installé
npm list typescript
```

### Erreur 404 sur les routes
- Vérifier que `_redirects` est dans `public/`
- Vérifier la configuration SPA dans `netlify.toml`

### PWA ne s'installe pas
- Vérifier les icônes dans `public/`
- Contrôler le manifest dans les DevTools
- Vérifier HTTPS activé

### Calendly ne fonctionne pas
- Vérifier l'URL dans les variables d'environnement
- Contrôler la CSP dans `_headers`

## 🎯 **URL de production**
Après déploiement, votre site sera disponible sur :
`https://[nom-du-site].netlify.app`

## 📞 **Support**
En cas de problème, les logs sont disponibles dans :
Netlify Dashboard > Deploys > [Build] > Deploy log