# Script de deploiement vers Hostinger

$FTP_HOST = "ftp.matricxconsulting.com"
$FTP_USER = "contact@Matricxconsulting.com"
$FTP_PASS = "matricx@2025"
$REMOTE_DIR = "/public_html"
$LOCAL_DIR = ".\dist"

Write-Host "Debut du deploiement sur Hostinger..." -ForegroundColor Cyan

# Etape 1: Build du projet
Write-Host "`nConstruction du projet..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Erreur lors du build!" -ForegroundColor Red
    exit 1
}

Write-Host "Build reussi!" -ForegroundColor Green

# Etape 2: Verifier si WinSCP est installe
$winscpPath = "C:\Program Files (x86)\WinSCP\WinSCP.com"

if (Test-Path $winscpPath) {
    Write-Host "`nUpload via WinSCP..." -ForegroundColor Yellow
    
    # Creer un script WinSCP temporaire
    $scriptContent = @"
option batch abort
option confirm off
open ftp://$FTP_USER`:$FTP_PASS@$FTP_HOST/
cd $REMOTE_DIR
lcd $LOCAL_DIR
put *
put ..\.htaccess
exit
"@
    
    $scriptPath = ".\winscp-script.txt"
    $scriptContent | Out-File -FilePath $scriptPath -Encoding ASCII
    
    & $winscpPath /script=$scriptPath
    
    Remove-Item $scriptPath
    
    Write-Host "`nDeploiement termine!" -ForegroundColor Green
    Write-Host "Verifiez votre site sur https://matricxconsulting.com" -ForegroundColor Cyan
}
else {
    Write-Host "`nWinSCP n'est pas installe." -ForegroundColor Yellow
    Write-Host "`nOptions de deploiement:" -ForegroundColor Cyan
    Write-Host "`n1. Installer WinSCP:" -ForegroundColor White
    Write-Host "   Telechargez sur: https://winscp.net/eng/download.php" -ForegroundColor Gray
    Write-Host "   Puis relancez ce script" -ForegroundColor Gray
    
    Write-Host "`n2. Utiliser FileZilla (manuel):" -ForegroundColor White
    Write-Host "   Host: $FTP_HOST" -ForegroundColor Gray
    Write-Host "   User: $FTP_USER" -ForegroundColor Gray
    Write-Host "   Pass: $FTP_PASS" -ForegroundColor Gray
    Write-Host "   Port: 21" -ForegroundColor Gray
    Write-Host "   Uploadez le contenu de 'dist' vers '$REMOTE_DIR'" -ForegroundColor Gray
    Write-Host "   N'oubliez pas le fichier .htaccess" -ForegroundColor Gray
    
    Write-Host "`n3. Utiliser le module PowerShell POSH-FTP:" -ForegroundColor White
    Write-Host "   Install-Module -Name Posh-SSH" -ForegroundColor Gray
}
