# Salbotics.uk Implementation Plan

Last updated: 2026-05-10

## Objective

Implement the business revamp defined in:

- `docs/information-architecture.md`
- `docs/copy-guardrails.md`
- `docs/checkpoints/2026-05-10-salbotics-uk-business-revamp.md`

Do not rediscover positioning. Use those files as source of truth.

## Technical Direction

Keep the current stack:

- React 18
- Vite 5
- GitHub Pages deployment
- Static assets under `images/`

Do not add a backend.

Prefer a small custom router based on `window.location.pathname` over adding `react-router-dom`, unless implementation complexity grows.

Required routes:

- `/`
- `/services`
- `/proof`
- `/freelance`
- `/contact`

Clean URLs must work on GitHub Pages. Add a `404.html` fallback strategy during implementation so direct visits to nested routes load the React app.

## Implementation Sequence

1. Create structured site data.
   - Put page copy, offers, proof cards, nav items, links, and contact details in a dedicated data module.
   - Keep copy consistent with `docs/copy-guardrails.md`.

2. Replace the single-page anchor app with a routed app shell.
   - Shared header/nav.
   - Shared footer.
   - Active route state.
   - Mobile nav behavior.
   - Route fallback to Home or a lightweight Not Found view.

3. Build the five pages.
   - Home: positioning, CTA, visitor paths, quick proof, SOL future-roadmap note.
   - Services: three sprint offers, price ranges, work process, boundaries.
   - Proof: NEXUS, Factory Energy Monitor, selected supporting proof, SOL as planned roadmap only.
   - Freelance: recruiter-safe profile, role fit, availability, selected proof links.
   - Contact: email + LinkedIn, prompts for recruiters/businesses/collaborators.

4. Apply the Salbotics visual system.
   - Palette: `#020617`, `#0D9488`, `#F59E0B`, `#F1F5F9`.
   - Use logo assets from `images/brand/salbotics-logo-2026-05-10/`.
   - Use `images/nexus-aluminium-dashboard.png` as proof visual.
   - Keep cards at 8px radius or less.
   - Keep the interface business-oriented, dense enough to scan, and not SaaS-hype.

5. Update metadata and deployment fallback.
   - Update `index.html` title and description.
   - Preserve `public/CNAME` and root `CNAME`.
   - Add `404.html` generation/copy path for GitHub Pages direct-route support.
   - Prefer `npm ci` in CI only if package-lock remains valid.

6. Verify.
   - `npm run build`
   - `npm run preview`
   - Browser-check desktop and mobile widths.
   - Direct-visit checks for all routes.
   - Link checks for email, LinkedIn, GitHub proof links.

## Acceptance Criteria

- Home clearly says Salbotics Solutions + Freelance IIoT Consultant.
- Recruiter can see role fit and availability in under one minute.
- Business buyer can understand the three current offers and price ranges.
- NEXUS and Factory Energy Monitor are framed as proof assets.
- SOL / MES-ERP is future roadmap only.
- No WhatsApp is published in v1.
- No claims of guaranteed savings, compliance, SaaS availability, or production-ready SOL.
- Clean URLs work on GitHub Pages.
- Build passes.

## Implementation Commit Plan

Use small commits:

1. `refactor: add routed site shell`
2. `feat: add Salbotics business pages`
3. `style: apply Salbotics visual system`
4. `build: support GitHub Pages clean routes`
5. `docs: mark implementation checkpoint complete`

If doing all in one pass, still keep changes grouped in the final summary.

## QA Checklist

- `/`
- `/services`
- `/proof`
- `/freelance`
- `/contact`
- direct refresh on each route
- mobile nav at ~390px width
- desktop layout at ~1440px width
- all buttons and links visible
- no text overflow in nav/buttons/cards
- no SOL/MES-ERP overclaim
- `npm run build` passes
