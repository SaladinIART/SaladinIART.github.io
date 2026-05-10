export const contact = {
  email: "solehuddin@salbotics.uk",
  linkedin: "https://www.linkedin.com/in/solehuddin-muhamad-b67068132/",
  github: "https://github.com/SaladinIART",
};

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Proof", path: "/proof" },
  { label: "Freelance Profile", path: "/freelance" },
  { label: "Contact", path: "/contact" },
];

export const serviceOffers = [
  {
    title: "Factory Energy Visibility Sprint",
    buyer: "Factories, workshops, and plants where the energy bill is rising but the source is unclear.",
    outcome:
      "Machine or zone-level visibility, a readable dashboard, a baseline cost map, and a next-step roadmap.",
    range: "RM 2,500-6,000",
    timeline: "2-4 weeks",
    deliverables: [
      "Site or remote workflow review",
      "Energy visibility setup using existing meters or practical sensor options",
      "Dashboard for phone or browser review",
      "Written handover and next-step monitoring roadmap",
    ],
  },
  {
    title: "SME Ops Digitization Sprint",
    buyer: "Small businesses running jobs through chat messages, paper, spreadsheets, or someone's memory.",
    outcome:
      "A simple intake flow, tracker, reporting view, and handover so operations become visible.",
    range: "RM 800-2,500",
    timeline: "1-2 weeks",
    deliverables: [
      "Customer or internal intake flow",
      "Status tracker with owner, dates, notes, and IDs",
      "One-page report for open, late, and completed work",
      "Written instructions for staff handover",
    ],
  },
  {
    title: "Starter Website + Lead Funnel",
    buyer: "Small service businesses, freelancers, and early ventures that need a clean public front door.",
    outcome:
      "A brochure site with a clear offer page and contact path, deployed without agency overhead.",
    range: "RM 500-1,500",
    timeline: "About 1 week",
    deliverables: [
      "One to five page static website",
      "Clear offer and contact path",
      "Cloudflare or GitHub Pages deployment",
      "Update notes for future copy and asset changes",
    ],
  },
];

export const workSteps = [
  "Discovery",
  "Scope memo",
  "Build sprint",
  "Handover",
  "Follow-up",
];

export const proofAssets = [
  {
    label: "Flagship IIoT proof",
    title: "NEXUS - Aluminium Profile Decision Demo",
    maturity: "Runnable demo and architecture proof",
    summary:
      "A full-stack IIoT proof asset that turns aluminium line telemetry into dashboards, alerts, and management actions.",
    details: [
      "Modbus TCP simulator for seven aluminium production stations",
      "MQTT, Python services, TimescaleDB, FastAPI, Svelte, and Grafana",
      "QUALITY_HOLD_QUENCH scenario for quality, delay, and business-risk visibility",
      "Documented scale path from Docker Compose to multi-site deployment",
    ],
    link: "https://github.com/SaladinIART/salbotics-iiot-aluminium-demo",
    cta: "Open NEXUS repository",
  },
  {
    label: "Real-world lineage",
    title: "Factory Energy Monitor",
    maturity: "Factory energy visibility experience and rebuilt proof",
    summary:
      "Energy monitoring work rooted in practical industrial visibility, later rebuilt as a portfolio-friendly stack.",
    details: [
      "Machine and zone energy visibility patterns",
      "Management-oriented cost mapping",
      "Industrial meter and Modbus-style data collection experience",
      "Dashboard-first reporting for operations review",
    ],
    link: "https://github.com/SaladinIART/factory-energy-monitor",
    cta: "Open energy monitor repository",
  },
  {
    label: "Supporting proof",
    title: "Edge Telemetry Platform",
    maturity: "Infrastructure and telemetry demonstration",
    summary:
      "A compact edge telemetry stack showing API service design, database persistence, health probes, and deployment thinking.",
    details: [
      "FastAPI service and PostgreSQL persistence",
      "Container and Kubernetes operating patterns",
      "Metrics and health-check discipline",
      "Reproducible engineering documentation",
    ],
    link: "https://github.com/SaladinIART/edge-telemetry-platform",
    cta: "Open telemetry repository",
  },
];

export const capabilities = [
  "Industrial automation and IIoT architecture",
  "OT/IT integration using open protocols",
  "Python, FastAPI, dashboards, and data pipelines",
  "Docker, CI/CD, runbooks, and handover documentation",
  "Operational workflows for SMEs using practical tools",
  "AI-assisted engineering with human architecture ownership",
];

export const techStack = [
  "Modbus TCP",
  "MQTT",
  "Python",
  "FastAPI",
  "TimescaleDB",
  "React / Svelte",
  "Grafana",
  "Docker",
  "GitHub Actions",
];

export const contactPrompts = [
  {
    title: "Recruiters",
    text: "Share the role title, location or remote expectation, core stack, and hiring timeline.",
  },
  {
    title: "Businesses",
    text: "Share your business type, the messy operation you want visible, rough size, and preferred timeline.",
  },
  {
    title: "Collaborators",
    text: "Share what you want to build, test, or review, plus the practical outcome you need.",
  },
];
