# Salbotics.uk Business Revamp Checkpoints

Last updated: 2026-05-10

## Goal

Transform `salbotics.uk` from a portfolio-first site into a recruiter-safe business landing site for Salbotics Solutions.

Primary positioning:

- Muhamad Solehuddin as **Freelance IIoT Consultant**
- Salbotics Solutions as a practical digital transformation / industrial systems service
- Open to full-time, contract, and freelance opportunities
- NEXUS and other projects are proof assets, not the whole business identity
- SOL / MES-ERP is future roadmap only, not a current product claim

## Locked Decisions

- Repo strategy: use dedicated website repo `SaladinIART.github.io`
- Local target folder: `solehuddin-founder-hub/salbotics-website`
- Site structure: 5-page balanced site
  - Home
  - Services
  - Proof
  - Freelance Profile
  - Contact
- URL style: clean URLs
- Primary CTA: hire / interview / contact
- Visible offers:
  - Factory Energy Visibility Sprint
  - SME Ops Digitization Sprint
  - Starter Website + Lead Funnel
- Pricing: show typical RM ranges
- Contact channels: email + LinkedIn
- Tone: grounded, proof-led
- Visual direction: Salbotics logo palette + dashboard proof visuals
- SOL visibility: future roadmap only

## Checkpoint 1 - Repo Centralization

Master list:

- Source: `C:\solehuddin_portfolio\SaladinIART.github.io`
- Destination: `C:\Users\salbot01\Salbotics\solehuddin-founder-hub\salbotics-website`
- Preserve `.git`, remotes, branch history, `public/CNAME`, source files, and lockfile
- Verify clean state after move

Acceptance:

- `git status --short` is clean
- `git remote -v` points to `https://github.com/SaladinIART/SaladinIART.github.io.git`
- `public/CNAME` still contains `salbotics.uk`

Status:

- Completed on 2026-05-10.

## Checkpoint 2 - Claude Handoff Setup

Master list:

- Add repo-local `CLAUDE.md`
- Point Claude to this checkpoint file first
- Include warning: do not overclaim SOL/MES-ERP readiness
- Include warning: no implementation before user approval

Acceptance:

- Claude can understand goal, positioning, page map, and guardrails from local docs alone

Status:

- Completed on 2026-05-10.

## Checkpoint 3 - Brand Assets

Master list:

- Logo assets:
  `SoleBrain/_raw_docs/brand-assets/salbotics-logo-2026-05-10`
- Palette:
  - Dark Navy `#020617`
  - Trust Teal `#0D9488`
  - Checkpoint Amber `#F59E0B`
  - Mist White `#F1F5F9`
- Proof visuals:
  - NEXUS dashboard / Grafana screenshots
  - Architecture diagrams if useful

Acceptance:

- Selected logo and proof images are copied or referenced clearly
- No mystery asset names remain

Status:

- Completed on 2026-05-10.

Implementation notes:

- Copied the Salbotics logo set into `images/brand/salbotics-logo-2026-05-10/`.
- Added `images/brand/salbotics-logo-2026-05-10/README.md` with filename meanings, palette, and usage cautions.
- Existing NEXUS proof visual remains available at `images/nexus-aluminium-dashboard.png`.

## Checkpoint 4 - Information Architecture

Master list:

- Home: positioning, CTA, quick proof
- Services: 3 sprint offers + price ranges
- Proof: NEXUS, Factory Energy Monitor, selected portfolio evidence
- Freelance Profile: recruiter-safe skills, availability, role fit
- Contact: email + LinkedIn

Acceptance:

- Client path and recruiter path are both clear
- Site does not feel like a finished SaaS product launch

Status:

- Completed on 2026-05-10.

Implementation notes:

- Added `docs/information-architecture.md`.
- Locked the global nav, route map, page jobs, primary CTAs, proof placement, service offer boundaries, and recruiter-safe profile framing.
- Confirmed the implementation handoff should keep `/`, `/services`, `/proof`, `/freelance`, and `/contact` as the five public routes.

## Checkpoint 5 - Copy Guardrails

Master list:

Use:

- "Freelance IIoT Consultant"
- "practical digital transformation"
- "industrial systems"
- "scoped sprints"
- "proof assets"
- "future roadmap"

Avoid:

- claiming SOL is available
- implying MES-ERP is production-ready
- sounding like a competitor to future employers
- "AI revolution" style hype
- legal/compliance guarantees

Acceptance:

- Copy is truthful, grounded, and recruiter-safe

Status:

- Pending.

## Checkpoint 6 - Future Implementation Plan

Master list:

- React + Vite remains acceptable
- Clean URLs require GitHub Pages fallback
- Build should pass with `npm run build`
- Direct visits to `/services`, `/proof`, `/freelance`, `/contact` must work
- Mobile nav must be tested

Acceptance:

- Implementation can begin from this checkpoint without rediscovering decisions

Status:

- Pending.
