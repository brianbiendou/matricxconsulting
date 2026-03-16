# Script PowerShell de déploiement automatique vers Netlify
Write-Host "🚀 Déploiement MatriCx Consulting vers Netlify" -ForegroundColor Green
Write-Host "============================================="

Write-Host "📋 1. Vérification du build local..." -ForegroundColor Yellow
$buildResult = npm run build:netlify
$buildExitCode = $LASTEXITCODE

if ($buildExitCode -eq 0) {
    Write-Host "✅ Build local réussi !" -ForegroundColor Green
    
    Write-Host "📤 2. Push vers Git..." -ForegroundColor Yellow
    git add .
    $commitMessage = "Deploy: Configuration Netlify optimisée - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    git commit -m $commitMessage
    git push origin main
    
    $gitExitCode = $LASTEXITCODE
    if ($gitExitCode -eq 0) {
        Write-Host "✅ Code pushé avec succès !" -ForegroundColor Green
        Write-Host "🌐 Votre site sera disponible dans quelques minutes sur Netlify" -ForegroundColor Cyan
        Write-Host "📊 Suivez le déploiement sur https://app.netlify.com" -ForegroundColor Cyan
    } else {
        Write-Host "❌ Erreur lors du push Git" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "❌ Erreur lors du build. Vérifiez les erreurs ci-dessus." -ForegroundColor Red
    exit 1
}

Write-Host "✨ Déploiement terminé !" -ForegroundColor Magenta