# GitHub Pages Deployment Guide

## Overview
This website is configured to automatically deploy to GitHub Pages at **usabestcable.com** whenever changes are pushed to the `main` branch.

## How It Works

### Automatic Deployment
- Every push to the `main` branch triggers an automatic build and deployment
- GitHub Actions workflow (`.github/workflows/deploy.yml`) handles the entire process
- Built files are deployed to GitHub Pages
- Changes appear live at usabestcable.com within 2-3 minutes

### Workflow Steps
1. Code is pushed to the `main` branch
2. GitHub Actions automatically:
   - Checks out the code
   - Installs dependencies
   - Builds the production version
   - Deploys to GitHub Pages
3. Site updates at usabestcable.com

## Manual Deployment

To manually trigger a deployment:
1. Go to [Actions](https://github.com/universalwifisupport/UNIVERSAL/actions)
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"
4. Select the `main` branch
5. Click "Run workflow"

## Custom Domain Setup

The custom domain **usabestcable.com** is configured via:
- `public/CNAME` file (contains the domain name)
- DNS settings pointing to GitHub Pages

### DNS Configuration Required
Ensure your DNS provider has these records:
```
Type: A
Host: @
Value: 185.199.108.153
```
```
Type: A
Host: @
Value: 185.199.109.153
```
```
Type: A
Host: @
Value: 185.199.110.153
```
```
Type: A
Host: @
Value: 185.199.111.153
```
```
Type: CNAME
Host: www
Value: universalwifisupport.github.io
```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment Status

You can check the deployment status:
- [GitHub Actions](https://github.com/universalwifisupport/UNIVERSAL/actions)
- Look for the "Deploy to GitHub Pages" workflow

## Troubleshooting

### Site not updating?
1. Check [Actions tab](https://github.com/universalwifisupport/UNIVERSAL/actions) for failed builds
2. Ensure you pushed to the `main` branch
3. Wait 2-3 minutes for deployment to complete
4. Clear browser cache (Ctrl+F5)

### 404 Error?
1. Verify `CNAME` file exists in `public/` folder
2. Check GitHub Pages settings are set to "GitHub Actions"
3. Verify DNS records are correct

### Build Failing?
1. Check the workflow logs in Actions tab
2. Test build locally with `npm run build`
3. Ensure all dependencies are in package.json

## GitHub Pages Settings

In your repository settings:
1. Go to Settings → Pages
2. Source should be set to: **GitHub Actions**
3. Custom domain: **usabestcable.com**
4. Enforce HTTPS: ✅ Enabled

## Important Files

- `.github/workflows/deploy.yml` - Deployment workflow
- `public/CNAME` - Custom domain configuration
- `vite.config.ts` - Build configuration
- `package.json` - Dependencies and scripts

## First Time Setup

If this is your first deployment:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/universalwifisupport/UNIVERSAL.git
   git push -u origin main
   ```

2. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"
   - Custom domain will be automatically configured from CNAME file

3. **Wait for deployment:**
   - Check Actions tab for workflow progress
   - First deployment may take 5-10 minutes
   - Subsequent deployments take 2-3 minutes

4. **Verify:**
   - Visit https://usabestcable.com
   - Site should load with SSL certificate

## Support

For issues with:
- **Code/Build**: Check GitHub Actions logs
- **Domain**: Verify DNS settings with your provider
- **SSL**: GitHub Pages automatically provides SSL for custom domains
