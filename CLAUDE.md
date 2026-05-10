# Salbotics Website - Claude Entry Point

Read first:

1. `docs/checkpoints/2026-05-10-salbotics-uk-business-revamp.md`
2. `README.md`
3. `package.json`

## Current Mission

This repo powers `https://salbotics.uk`.

The next planned work is to transform the site from a portfolio-first page into a recruiter-safe business landing site for Salbotics Solutions.

Primary positioning:

- Muhamad Solehuddin as **Freelance IIoT Consultant**
- Salbotics Solutions as practical digital transformation / industrial systems service
- Open to full-time, contract, and freelance opportunities
- NEXUS and other projects as proof assets
- SOL / MES-ERP as future roadmap only, not a current product claim

## Guardrails

- Do not start website implementation unless Solehuddin explicitly asks.
- Do not overclaim SOL, MES-ERP, NEXUS, or any demo as a finished SaaS/product.
- Keep recruiter wording safe: freelance/contract/open-to-roles, not a conflict-heavy founder pitch.
- Keep the tone grounded, proof-led, and business-oriented.
- Preserve `public/CNAME` and `CNAME` for `salbotics.uk`.
- This is a standalone git repo nested inside `solehuddin-founder-hub`; commit website changes here unless told otherwise.

## Useful Commands

```powershell
npm run build
git status --short
git remote -v
```
