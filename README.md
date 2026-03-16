# Salbotics Solutions Portfolio

React portfolio for Muhamad Solehuddin bin Muhamad Yusuf, built with Vite and intended to deploy from GitHub Pages.

## Run locally in VS Code

If you use PowerShell:

```powershell
cd C:\solehuddin_portfolio\SaladinIART.github.io
npm.cmd install
npm.cmd run dev
```

Open `http://127.0.0.1:4000`.

If you use Command Prompt or Git Bash, regular `npm install` and `npm run dev` are fine.

## Change the portfolio photo

Replace `images/profile.png` with your new image and keep the same filename.

If you also want a new banner background, replace `images/banner.jpg`.

## Add or update projects

Edit `src/data.js`.

- `projects` controls the project cards on the homepage.
- `skillGroups` controls the skills section.
- `architectureFlow` controls the featured architecture tags.

After editing, save the file and refresh the browser while `npm run dev` is running.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow in `.github/workflows/deploy-pages.yml`.

Recommended steps:

1. Push the repo to GitHub.
2. In GitHub, open `Settings > Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main`. The workflow will build and publish the site.

## Custom domain

The repo includes `public/CNAME` with `salbotics.uk`.

After GitHub Pages is enabled, add your custom domain in GitHub Pages settings and point your Cloudflare DNS records at GitHub Pages.
