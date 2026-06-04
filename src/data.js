// Content for the single-page Salbotics site.
// Layout/structure mirrors the bentenstudios.com/salbotics reference; copy is the
// canonical Salbotics narrative. SVG vignettes live in scenes.js (illustration, not copy).

export const contact = {
  email: "solehuddin@salbotics.uk",
  site: "https://salbotics.uk",
  siteLabel: "salbotics.uk",
  github: "https://github.com/SaladinIART",
  githubLabel: "github.com/SaladinIART",
  linkedin: "https://www.linkedin.com/in/solehuddin-muhamad-b67068132/",
  linkedinLabel: "linkedin.com/in/solehuddin-muhamad",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Proof", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  kicker: "Practical digital transformation · factories and small businesses",
  title: "From the factory floor to the decision desk.",
  sub:
    "Salbotics turns messy operations into visible, measurable systems: scoped " +
    "sprints, industrial proof assets, and documented handover that survives " +
    "after the work is done. Every engagement runs on a written scope, a clear " +
    "price range, and defined boundaries.",
  ctas: [
    { label: "View services", href: "#services", variant: "primary" },
    { label: "See the proof", href: "#work", variant: "ghost" },
    { label: "Start a conversation", href: `mailto:${contact.email}`, variant: "ghost" },
  ],
  sceneKey: "pipeline",
};

export const services = {
  label: "services",
  title: "Scoped sprints for visible operations.",
  intro:
    "Service-first work: short, practical engagements with a clear scope, a " +
    "price range stated in the scope memo before anything starts, written handover, and defined " +
    "boundaries. Start with the sprint that matches the operation you want visible.",
  offers: [
    {
      title: "Factory Energy Visibility Sprint",
      rate: "2-4 weeks",
      who:
        "factories, workshops, and plants where the energy bill is rising but the source is unclear.",
      out:
        "machine or zone-level visibility, a readable dashboard, a baseline cost map, and a next-step roadmap.",
      includes: [
        "Site or remote workflow review",
        "Energy visibility setup using existing meters or practical sensor options",
        "Dashboard for phone or browser review",
        "Written handover and next-step monitoring roadmap",
      ],
    },
    {
      title: "SME Ops Digitization Sprint",
      rate: "1-2 weeks",
      who:
        "small businesses running jobs through chat messages, paper, spreadsheets, or someone's memory.",
      out:
        "a simple intake flow, tracker, reporting view, and handover so operations become visible.",
      includes: [
        "Customer or internal intake flow",
        "Status tracker with owner, dates, notes, and IDs",
        "One-page report for open, late, and completed work",
        "Written instructions for staff handover",
      ],
    },
    {
      title: "Starter Website + Lead Funnel",
      rate: "about 1 week",
      who:
        "small service businesses, freelancers, and early ventures that need a clean public front door.",
      out:
        "a brochure site with a clear offer page and contact path, deployed without agency overhead.",
      includes: [
        "One to five page static website",
        "Clear offer and contact path",
        "Cloudflare or GitHub Pages deployment",
        "Update notes for future copy and asset changes",
      ],
    },
  ],
  note:
    "Every sprint moves through a written scope memo and ends with handover, " +
    "so the result survives after the engagement. To begin: share your business " +
    "type, the messy operation you want visible, a rough size, and a preferred " +
    "timeline.",
};

export const work = {
  label: "the work",
  title: "Each system, shown working. Source open.",
  intro:
    "Every project below is drawn as it runs, so you can see what it does before " +
    "reading a line of code. The full source, architecture notes, and runbooks " +
    "are one click away.",
  projects: [
    {
      sceneKey: "nexus",
      reverse: false,
      title: "NEXUS · aluminium line decision support",
      stack: "Modbus simulation · MQTT · TimescaleDB · FastAPI · SvelteKit · Grafana",
      body:
        "A complete IIoT platform: seven simulated aluminium production stations " +
        "stream telemetry through MQTT into a time-series database, and the " +
        "dashboard turns it into alerts, quality holds, and recommended actions " +
        "for management. Built end to end, with a documented path from a single " +
        "server to multi-site deployment.",
      links: [
        { label: "source + architecture →", href: "https://github.com/SaladinIART/IIoT-Telemetry-Stack" },
        { label: "runnable demo →", href: "https://github.com/SaladinIART/salbotics-iiot-aluminium-demo" },
      ],
    },
    {
      sceneKey: "energy",
      reverse: true,
      title: "Factory Energy Monitor",
      stack: "Python · Modbus · MQTT · time-series storage · Grafana",
      body:
        "The pattern proven on a live factory floor: RX380 power meters read over " +
        "Modbus, streamed through MQTT, stored as time series, and shown as a " +
        "dashboard that tells you which machine, which zone, and which shift is " +
        "driving the bill. Rising tariffs make the invisible expensive; this makes " +
        "it visible.",
      links: [
        { label: "source + setup guide →", href: "https://github.com/SaladinIART/factory-energy-monitor" },
      ],
    },
    {
      sceneKey: "edge",
      reverse: false,
      title: "Edge Telemetry Platform",
      stack: "FastAPI · PostgreSQL · Docker · Kubernetes",
      body:
        "A compact edge-computing stack that shows operating discipline, not just " +
        "code: API service design, database persistence, health probes, autoscaling " +
        "under load, and reproducible documentation. The boring parts done properly, " +
        "because the boring parts are what production runs on.",
      links: [
        { label: "source + load tests →", href: "https://github.com/SaladinIART/edge-telemetry-platform" },
      ],
    },
    {
      sceneKey: "compressor",
      reverse: true,
      title: "File Compressor",
      stack: "Python · desktop + command line",
      body:
        "A small utility that does one job well: batch compression for PDF and " +
        "image files, packaged for desktop and command line. Small on purpose. " +
        "Clean packaging and sensible defaults show the same care as the large " +
        "systems.",
      links: [
        { label: "source + releases →", href: "https://github.com/SaladinIART/Salbotics-filecompressor" },
      ],
    },
  ],
};

export const approach = {
  label: "approach",
  title: "Quiet methods. Visible results.",
  principles: [
    {
      idx: "01",
      title: "Sprints, not vague transformation",
      body:
        "Short, scoped engagements with a written scope, a clear price range, and defined boundaries. The work is sized so the result arrives while the question is still warm.",
    },
    {
      idx: "02",
      title: "Handover that survives",
      body:
        "Every engagement ends with written instructions, runbooks, and a next-step roadmap, so the system keeps working after the engagement ends. Dependence is not a deliverable.",
    },
    {
      idx: "03",
      title: "Proof before claims",
      body:
        "The projects above are runnable and open. Nothing on this page is described as a finished product unless it runs. Telemetry, dashboards, alerts, and documentation, demonstrated rather than promised.",
    },
    {
      idx: "04",
      title: "AI-augmented, human-owned",
      body:
        "AI accelerates drafting, scaffolding, and review, which keeps engagements fast and estimates honest. Architecture, verification, and responsibility never leave human hands.",
    },
  ],
};

export const about = {
  label: "about",
  title: "Built where the two worlds meet.",
  body: [
    "Factories run on two languages. The production floor speaks in ladder logic, registers, and runtimes. The office speaks in APIs, databases, and dashboards. Most engineering practices speak one. Salbotics was founded on speaking both.",
    "The practice is led by Muhamad Solehuddin, an engineer who learned the floor first: at Alumac Industries he designed and ran a real-time power monitoring system across 17 factory machines, in a department of two engineers with no senior architect above them. The architecture decisions were his to make and his to defend. The software side followed the same way: built, deployed, documented, and published in the open.",
    "That history shapes how engagements run today: operational language for factory managers, technical language for developers, and written handover for whoever comes next.",
  ],
  // bold fragments to emphasise within the matching paragraph above
  emphasis: ["Salbotics was founded on speaking both."],
  readout: [
    { k: "machines", v: "17", d: "on one production power monitoring system" },
    { k: "stations", v: "07", d: "simulated end to end in the NEXUS platform" },
    { k: "users", v: "51", d: "on a delivered Microsoft 365 Power Platform rollout" },
  ],
};

export const contactSection = {
  label: "contact",
  title: "Bring the messy operation. Leave with it visible.",
  sub:
    "Use email or LinkedIn, and share enough context so the first reply can " +
    "be a useful one.",
  prompts: [
    { k: "BUSINESS", text: "Share your business type, the messy operation you want visible, a rough size, and a preferred timeline." },
    { k: "RECRUITER", text: "Share the role title, location or remote expectation, core stack, and hiring timeline." },
    { k: "COLLAB", text: "Share what you want to build, test, or review, plus the practical outcome you need." },
  ],
  channels: [
    { k: "EMAIL", label: contact.email, href: `mailto:${contact.email}` },
    { k: "SITE", label: contact.siteLabel, href: contact.site },
    { k: "GITHUB", label: contact.githubLabel, href: contact.github },
    { k: "LINKEDIN", label: contact.linkedinLabel, href: contact.linkedin },
  ],
};

export const footer = {
  name: "Salbotics Solutions",
  right: "floor → desk · 2026",
};
