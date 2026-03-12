#!/usr/bin/env pwsh
# Deploy to GitHub Pages
# This script helps you push your changes to GitHub

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Universal WiFi Support Deployment" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    git branch -M main
    git remote add origin https://github.com/universalwifisupport/UNIVERSAL.git
    Write-Host "Git initialized!" -ForegroundColor Green
    Write-Host ""
}

# Get commit message
Write-Host "Enter commit message (or press Enter for default):" -ForegroundColor Yellow
$commitMessage = Read-Host
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update website: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

Write-Host ""
Write-Host "Staging changes..." -ForegroundColor Yellow
git add .

Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "$commitMessage"

Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "==================================" -ForegroundColor Green
Write-Host "Deployment Initiated!" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your changes are being deployed to:" -ForegroundColor Cyan
Write-Host "https://usabestcable.com" -ForegroundColor White
Write-Host ""
Write-Host "Check deployment status at:" -ForegroundColor Cyan
Write-Host "https://github.com/universalwifisupport/UNIVERSAL/actions" -ForegroundColor White
Write-Host ""
Write-Host "The site will be live in 2-3 minutes!" -ForegroundColor Green
Write-Host ""
