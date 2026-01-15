import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputImage = path.join(__dirname, 'src', 'images', 'ongleticone.png'); // Nouvelle icône pour toutes les icônes
const faviconImage = path.join(__dirname, 'src', 'images', 'ongleticone.png'); // Icône spéciale pour navigateur et PWA
const outputDir = path.join(__dirname, 'public');

// Créer le dossier public s'il n'existe pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const sizes = [
  // PWA Icons (utilise logomatricx.png)
  { name: 'pwa-64x64.png', size: 64, padding: 8, useFavicon: false },
  { name: 'pwa-192x192.png', size: 192, padding: 24, useFavicon: false },
  { name: 'pwa-512x512.png', size: 512, padding: 64, useFavicon: false },
  { name: 'maskable-icon-512x512.png', size: 512, padding: 51, useFavicon: false }, // 10% padding pour maskable
  
  // Apple Touch Icon (utilise logomatricx.png)
  { name: 'apple-touch-icon.png', size: 180, padding: 22, useFavicon: false },
  
  // Favicons (utilise iconelogo.png)
  { name: 'favicon-16x16.png', size: 16, padding: 2, useFavicon: true },
  { name: 'favicon-32x32.png', size: 32, padding: 4, useFavicon: true },
  
  // Microsoft (utilise logomatricx.png)
  { name: 'mstile-150x150.png', size: 150, padding: 15, useFavicon: false },
];

async function generateIcons() {
  console.log('🎨 Génération des icônes PWA...\n');

  try {
    for (const icon of sizes) {
      const outputPath = path.join(outputDir, icon.name);
      const iconSize = icon.size - (icon.padding * 2);
      
      // Choisir la bonne image source selon le type d'icône
      const sourceImage = icon.useFavicon ? faviconImage : inputImage;
      const iconType = icon.useFavicon ? '(favicon spécial)' : '(logo complet)';

      await sharp(sourceImage)
        .resize(iconSize, iconSize, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .extend({
          top: icon.padding,
          bottom: icon.padding,
          left: icon.padding,
          right: icon.padding,
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .png()
        .toFile(outputPath);

      console.log(`✅ ${icon.name} (${icon.size}x${icon.size}) ${iconType}`);
    }

    // Générer favicon.ico multi-taille avec iconelogo.png
    await sharp(faviconImage)
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .toFile(path.join(outputDir, 'favicon.ico'));
    
    console.log('✅ favicon.ico (favicon spécial)\n');
    console.log('🎉 Toutes les icônes ont été générées avec succès !');
    console.log(`📁 Emplacement : ${outputDir}\n`);
    console.log('📝 Prochaines étapes :');
    console.log('   1. Vérifiez les icônes dans /public');
    console.log('   2. Lancez : npm run dev');
    console.log('   3. Testez avec Chrome DevTools > Application > Manifest');
  } catch (error) {
    console.error('❌ Erreur lors de la génération des icônes:', error);
  }
}

generateIcons();
