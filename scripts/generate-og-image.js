import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputImage = path.join(__dirname, 'src', 'images', 'logomatricx.png');
const outputDir = path.join(__dirname, 'public');

async function generateOGImage() {
  console.log('🖼️  Génération de l\'image Open Graph...\n');

  try {
    // Créer un canvas 1200x630 avec gradient bleu
    const width = 1200;
    const height = 630;

    // Créer un fond dégradé (approximation avec Sharp)
    const background = Buffer.from(
      `<svg width="${width}" height="${height}">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1E3A8A;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="${width}" height="${height}" fill="url(#grad)"/>
        <text x="50%" y="85%" text-anchor="middle" fill="white" font-size="48" font-family="Montserrat, sans-serif" font-weight="bold">
          MatriCx Consulting
        </text>
        <text x="50%" y="92%" text-anchor="middle" fill="white" font-size="24" font-family="Montserrat, sans-serif" opacity="0.9">
          Cabinet de conseil en expérience client
        </text>
      </svg>`
    );

    // Charger le logo et le redimensionner
    const logo = await sharp(inputImage)
      .resize(400, 400, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    // Composer l'image finale
    await sharp(background)
      .composite([
        {
          input: logo,
          top: 80,
          left: Math.floor((width - 400) / 2)
        }
      ])
      .png()
      .toFile(path.join(outputDir, 'og-image.png'));

    console.log('✅ og-image.png (1200x630) - Image pour réseaux sociaux');
    console.log('🎉 Image Open Graph générée avec succès !\n');
  } catch (error) {
    console.error('❌ Erreur:', error);
  }
}

generateOGImage();
