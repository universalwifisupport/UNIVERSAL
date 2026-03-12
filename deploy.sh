#!/bin/bash
# Deploy to GitHub Pages
# This script helps you push your changes to GitHub

echo "=================================="
echo "Universal WiFi Support Deployment"
echo "=================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
    git branch -M main
    git remote add origin https://github.com/universalwifisupport/UNIVERSAL.git
    echo "Git initialized!"
    echo ""
fi

# Get commit message
echo "Enter commit message (or press Enter for default):"
read commitMessage
if [ -z "$commitMessage" ]; then
    commitMessage="Update website: $(date '+%Y-%m-%d %H:%M')"
fi

echo ""
echo "Staging changes..."
git add .

echo "Committing changes..."
git commit -m "$commitMessage"

echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "=================================="
echo "Deployment Initiated!"
echo "=================================="
echo ""
echo "Your changes are being deployed to:"
echo "https://usabestcable.com"
echo ""
echo "Check deployment status at:"
echo "https://github.com/universalwifisupport/UNIVERSAL/actions"
echo ""
echo "The site will be live in 2-3 minutes!"
echo ""
