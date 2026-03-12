# Quick Reference Card

## 🚀 Deploy Changes

### Option 1: Using PowerShell Script (Windows)
```powershell
.\deploy.ps1
```

### Option 2: Using Bash Script (Mac/Linux)
```bash
./deploy.sh
```

### Option 3: Manual
```bash
git add .
git commit -m "Your message"
git push origin main
```

---

## 🔗 Important Links

- **Live Site**: https://usabestcable.com
- **GitHub Repo**: https://github.com/universalwifisupport/UNIVERSAL
- **Deployment Status**: https://github.com/universalwifisupport/UNIVERSAL/actions
- **Repository Settings**: https://github.com/universalwifisupport/UNIVERSAL/settings/pages

---

## 💻 Local Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview

# Run tests
npm test

# Lint code
npm run lint
```

---

## ⚡ Deployment Time

- **Automatic**: Deploys on every push to `main`
- **Duration**: 2-3 minutes
- **Check Status**: GitHub Actions tab

---

## 🔧 Configuration Files

- `.github/workflows/deploy.yml` - Deployment automation
- `public/CNAME` - Custom domain (usabestcable.com)
- `vite.config.ts` - Build configuration

---

## 📋 First Time Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Deploy to GitHub:**
   ```bash
   .\deploy.ps1
   # or
   ./deploy.sh
   ```

3. **Wait & verify:**
   - Check Actions tab
   - Visit https://usabestcable.com

---

## 🆘 Troubleshooting

### Site not updating?
1. Check Actions tab for errors
2. Wait 2-3 minutes
3. Clear cache (Ctrl+F5)

### Build failing?
1. Check workflow logs
2. Test locally: `npm run build`
3. Fix errors and push again

### Domain not working?
1. Verify CNAME file
2. Check DNS settings
3. GitHub Pages should be set to "GitHub Actions"

---

## 📞 DNS Settings

Your domain `usabestcable.com` needs these DNS records:

**A Records:**
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**CNAME Record:**
- Host: `www`
- Value: `universalwifisupport.github.io`

---

## ✅ Checklist After Changes

- [ ] Test locally (`npm run dev`)
- [ ] Build successfully (`npm run build`)
- [ ] Commit with clear message
- [ ] Push to `main` branch
- [ ] Check Actions tab
- [ ] Verify live site in 2-3 minutes

---

For detailed documentation, see [DEPLOYMENT.md](DEPLOYMENT.md)
