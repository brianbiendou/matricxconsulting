# Guide de génération des icônes PWA pour MatriCx Consulting

## Icônes nécessaires

Votre PWA a besoin des icônes suivantes dans le dossier `/public` :

### Icônes PWA principales
- `pwa-64x64.png` (64x64 pixels)
- `pwa-192x192.png` (192x192 pixels)
- `pwa-512x512.png` (512x512 pixels)
- `maskable-icon-512x512.png` (512x512 pixels avec safe zone)

### Icônes Apple
- `apple-touch-icon.png` (180x180 pixels)

### Favicons
- `favicon.ico` (16x16, 32x32, 48x48 multi-size)
- `favicon-16x16.png` (16x16 pixels)
- `favicon-32x32.png` (32x32 pixels)

### Microsoft
- `mstile-150x150.png` (150x150 pixels)

### Images pour partage social (optionnel)
- `og-image.png` (1200x630 pixels) - Pour Open Graph/Facebook/Twitter
- `screenshot-mobile.png` (540x720 pixels) - Capture d'écran mobile
- `screenshot-desktop.png` (1280x720 pixels) - Capture d'écran desktop

## Option 1 : Utiliser un générateur en ligne (RECOMMANDÉ)

### Sites recommandés :
1. **PWA Asset Generator** - https://www.pwabuilder.com/imageGenerator
   - Téléversez votre logo `src/images/logomatricx.png`
   - Téléchargez tous les formats générés
   - Placez les fichiers dans `/public`

2. **Favicon Generator** - https://realfavicongenerator.net/
   - Téléversez votre logo
   - Configurez les couleurs (theme: #1E3A8A, background: #ffffff)
   - Téléchargez et extrayez dans `/public`

3. **Maskable.app** - https://maskable.app/editor
   - Créez l'icône maskable pour Android
   - Exportez en 512x512
   - Renommez en `maskable-icon-512x512.png`

## Option 2 : Utiliser un script Node.js

Installez le package pour générer les icônes automatiquement :

```bash
npm install --save-dev pwa-asset-generator
```

Puis exécutez :

```bash
npx pwa-asset-generator src/images/logomatricx.png public --background "#ffffff" --favicon --maskable --padding "10%" --type png
```

## Option 3 : Manuellement avec un éditeur d'image

Si vous utilisez Photoshop, GIMP, ou Figma :
1. Ouvrez `src/images/logomatricx.png`
2. Créez chaque taille avec un fond blanc
3. Pour les icônes maskables, ajoutez 10% de padding
4. Exportez en PNG de haute qualité
5. Placez dans `/public`

## Vérification

Après avoir généré toutes les icônes :

1. Vérifiez que tous les fichiers sont dans `/public`
2. Lancez le serveur de développement : `npm run dev`
3. Ouvrez DevTools > Application > Manifest
4. Vérifiez qu'il n'y a pas d'erreurs d'icônes manquantes

## Test PWA

Pour tester votre PWA :
1. Build de production : `npm run build`
2. Servez localement : `npm run preview`
3. Ouvrez Chrome DevTools
4. Onglet "Application" > "Manifest"
5. Onglet "Service Workers"
6. Lighthouse > Audit PWA

## Notes importantes

- **Maskable icons** : Gardez les éléments importants dans les 80% centraux
- **Favicon** : Utilisez un design simplifié pour les petites tailles
- **Safe zone** : Pour les icônes maskables, évitez le texte près des bords
- **Format** : PNG avec transparence ou fond blanc selon le contexte
