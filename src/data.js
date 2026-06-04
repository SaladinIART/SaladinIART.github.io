// Content for the consultation-first Salbotics site (Revision 2).
// Plain language, advisory-led. Prices intentionally omitted (shared after a free scope call).
// SVG vignettes live in scenes.js (illustration, not copy).

export const contact = {
  whatsapp: "https://wa.me/60175988578",
  whatsappLabel: "+60 17-598 8578",
  email: "solehuddin@salbotics.uk",
  site: "https://salbotics.uk",
  siteLabel: "salbotics.uk",
  github: "https://github.com/SaladinIART",
  githubLabel: "github.com/SaladinIART",
  linkedin: "https://www.linkedin.com/in/solehuddin-muhamad-b67068132/",
  linkedinLabel: "linkedin.com/in/solehuddin-muhamad",
  identity: "Salbotics Solutions · Penang, Malaysia · remote-friendly",
  responseTime: "Replies within 1 business day",
};

export const nav = [
  { label: "How it works", href: "#how" },
  { label: "Consultation", href: "#consult" },
  { label: "When you build", href: "#build" },
  { label: "Free lessons", href: "#lab" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  kicker: "Digital transformation advisor · factories & small businesses",
  title: "Know what to fix, when to build, and what to skip — before you spend.",
  sub:
    "Most digital-transformation money is wasted on tools nobody asked for. Salbotics is a " +
    "consultation-first practice: we sit with your messy reality and leave you with a clear, " +
    "prioritized plan. I translate between the factory floor and the software world, so " +
    "non-technical owners can make confident decisions.",
  ctas: [
    { label: "Book a free intro call", href: "#consult", variant: "primary" },
    { label: "See how it works", href: "#how", variant: "ghost" },
  ],
  sceneKey: "pipeline",
};

export const how = {
  label: "how it works",
  title: "See it before you read a word of code.",
  intro:
    "Plain-language pictures of what we actually do — and why measuring beats guessing. " +
    "No buzzwords required.",
  // `primary` renders by default; swap by changing primary or rendering the gallery.
  primary: "messyToMeasured",
  scenes: [
    { key: "messyToMeasured", caption: "From scattered paper, chats, and guesswork to one clear screen you trust." },
    { key: "decisionMap", caption: "The conversation itself: where you are → what to fix first → build or wait → spend wisely." },
    { key: "costOfNotMeasuring", caption: "A rising bill with no clear source becomes a simple picture of where the money goes." },
    { key: "howItWorksSimple", caption: "We connect what you already have to a screen you actually read. That's it." },
  ],
};

export const consult = {
  label: "start here",
  title: "Consultation first. Tools later — if at all.",
  intro:
    "Every engagement starts with a free, no-pressure conversation. If a paid roadmap makes " +
    "sense, you'll know exactly what you're getting before anything starts.",
  freeCall: {
    title: "Free 30-minute intro call",
    points: [
      "Tell me the messy operation you want visible.",
      "I ask the questions that surface the real problem.",
      "You leave with honest direction — even if that's “don't spend yet.”",
    ],
  },
  roadmap: {
    title: "Digital Transformation Readiness Roadmap",
    subtitle: "the paid deliverable, if you want to go further",
    points: [
      "A plain-language picture of where you are today.",
      "What to fix first — ranked by impact, not by what's trendy.",
      "When to build vs. when to wait, and what to never automate.",
      "Budget guardrails so you don't overspend on tools you won't use.",
      "Honest cautions on AI and vendor lock-in.",
      "A written plan your team can act on without me.",
    ],
  },
  note: "Pricing is shared after the free scope call — once we both know the size of the work.",
  cta: { label: "Start on WhatsApp", href: "https://wa.me/60175988578" },
  ctaAlt: { label: "Or email me", href: "mailto:solehuddin@salbotics.uk" },
};

export const approach = {
  label: "how I work",
  principles: [
    { title: "Plain language first", body: "I explain everything in words you already use. If you can't follow it, I haven't done my job." },
    { title: "Proof before spend", body: "Nothing gets built until a simple measurement shows it's worth it." },
    { title: "Handover that survives", body: "You get a written plan and instructions, so you're never dependent on me." },
    { title: "Honest about AI", body: "AI speeds up the work, but a human owns the decision. I'll tell you where it doesn't belong." },
  ],
};

export const build = {
  label: "when you're ready to build",
  title: "And when the plan says “build,” here's how.",
  intro:
    "Optional, hands-on delivery — only after the roadmap shows it's worth it. Each is scoped " +
    "in writing before anything starts.",
  options: [
    {
      title: "Factory Energy Visibility",
      timeline: "2-4 weeks",
      who: "factories and workshops where the energy bill is rising but the source is unclear.",
      out: "machine or zone-level visibility, a readable dashboard, and a baseline cost map.",
    },
    {
      title: "SME Ops Digitization",
      timeline: "1-2 weeks",
      who: "small businesses running jobs through chat messages, paper, or someone's memory.",
      out: "a simple intake flow, a status tracker, and a one-page report — so work becomes visible.",
    },
    {
      title: "Starter Website + Lead Funnel",
      timeline: "about 1 week",
      who: "small businesses and early ventures that need a clean, trustworthy public front door.",
      out: "a brochure site with a clear offer and contact path, deployed without agency overhead.",
    },
  ],
  pricingNote: "No fixed price list — pricing is shared after a free scope call.",
};

export const lab = {
  label: "giving back",
  title: "Free lessons: the AI Harness Lab.",
  body:
    "Beyond client work, I publish free, beginner-friendly material on working calmly with AI — " +
    "turning experiments into repeatable workflows instead of rabbit holes. Built for non-coders, " +
    "domain experts, and curious builders. It's my contribution back to the community.",
  link: {
    label: "Open the AI Harness Lab →",
    href: "https://saladiniart.github.io/salbotics-ai-harness-lab/",
  },
};

export const about = {
  label: "about",
  title: "I speak both factory and software.",
  body: [
    "Factories and small businesses run on two languages: the floor — machines, wiring, daily reality — and the office — apps, data, dashboards. Most tech people speak only one. Salbotics was built to bridge the two.",
    "I'm Muhamad Solehuddin. I learned the floor first: at Alumac Industries I designed and ran a live power-monitoring system across 17 machines, owning the decisions end to end. The software came the same way — built, deployed, documented, and shared in the open.",
    "That's why a consultation with me sounds different: operational language for owners, technical depth when it's needed, and a written plan for whoever comes next.",
  ],
  emphasis: ["Salbotics was built to bridge the two."],
  readout: [
    { k: "machines", v: "17", d: "on one live power-monitoring system I designed and ran" },
    { k: "stations", v: "07", d: "simulated end to end in a full demo platform" },
    { k: "users", v: "51", d: "on a delivered Microsoft 365 rollout" },
  ],
  recruiter: {
    note: "Hiring, or want to check the technical depth behind the advice?",
    linkLabel: "See the code on GitHub →",
    href: "https://github.com/SaladinIART",
  },
};

export const contactSection = {
  label: "contact",
  title: "Bring the messy operation. Leave with it visible.",
  sub:
    "Start with a free call or a quick message — whichever's easier. Share enough context so " +
    "the first reply can be a useful one.",
  prompts: [
    { k: "BUSINESS", text: "Your business type, the messy operation you want visible, rough size, and a preferred timeline." },
    { k: "RECRUITER", text: "The role, location or remote expectation, core stack, and hiring timeline." },
    { k: "COLLAB", text: "What you want to build, test, or review, plus the practical outcome you need." },
  ],
  channels: [
    { k: "WHATSAPP", label: contact.whatsappLabel, href: contact.whatsapp },
    { k: "EMAIL", label: contact.email, href: `mailto:${contact.email}` },
    { k: "LINKEDIN", label: contact.linkedinLabel, href: contact.linkedin },
    { k: "GITHUB", label: contact.githubLabel, href: contact.github },
    { k: "SITE", label: contact.siteLabel, href: contact.site },
  ],
};

export const footer = {
  name: "Salbotics Solutions",
  right: "floor → desk · 2026",
};
