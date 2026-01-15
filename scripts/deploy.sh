#!/bin/bash
# Script de déploiement automatique vers Netlify

echo "🚀 Déploiement MatriCx Consulting vers Netlify"
echo "============================================="

echo "📋 1. Vérification du build local..."
npm run build:netlify

if [ $? -eq 0 ]; then
    echo "✅ Build local réussi !"
    
    echo "📤 2. Push vers Git..."
    git add .
    git commit -m "Deploy: Configuration Netlify optimisée - $(date '+%Y-%m-%d %H:%M')"
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo "✅ Code pushé avec succès !"
        echo "🌐 Votre site sera disponible dans quelques minutes sur Netlify"
        echo "📊 Suivez le déploiement sur https://app.netlify.com"
    else
        echo "❌ Erreur lors du push Git"
        exit 1
    fi
else
    echo "❌ Erreur lors du build. Vérifiez les erreurs ci-dessus."
    exit 1
fi

echo "✨ Déploiement terminé !"