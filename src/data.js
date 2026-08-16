export const contact = {
  email: "saladiniart@gmail.com",
  site: "https://salbotics.uk",
  siteLabel: "salbotics.uk",
  github: "https://github.com/SaladinIART",
  githubLabel: "github.com/SaladinIART",
  linkedin: "https://www.linkedin.com/in/solehuddin-muhamad-b67068132/",
  linkedinLabel: "linkedin.com/in/solehuddin-muhamad-b67068132",
  resume: "/resume/muhamad-solehuddin-manufacturing-automation.pdf",
  resumeLabel: "Manufacturing Automation recruiter CV (PDF)",
  identity: "Muhamad Solehuddin · Penang, Malaysia",
};

export const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  kicker: "Muhamad Solehuddin · Manufacturing Automation Engineer",
  title: "Practical engineering from machine signals to manufacturing decisions.",
  sub:
    "I build and study systems that make factory work more visible, traceable, and reliable — " +
    "combining hands-on equipment knowledge with industrial data, software, automation, and robotics.",
  ctas: [
    { label: "Explore engineering projects", href: "/projects", variant: "primary" },
    { label: "Download recruiter CV", href: contact.resume, variant: "ghost", download: true },
    { label: "View GitHub", href: contact.github, variant: "ghost", external: true },
  ],
  sceneKey: "pipeline",
};

export const projectStatusLabels = {
  deployed: "Deployed",
  "validated-demo": "Validated demo",
  prototype: "Prototype",
  "engineering-concept": "Engineering concept",
  "in-development": "In development",
};

export const projects = [
  {
    slug: "factory-energy-monitor",
    title: "Factory Energy Visibility",
    status: "deployed",
    engineeringAreas: ["Industrial data", "Edge systems", "Operations visibility"],
    summary:
      "An anonymized manufacturing deployment that brought machine-level energy signals into durable data services, dashboards, and operational reporting.",
    problem:
      "Operational energy information existed at equipment level but was difficult to collect, retain, and interpret consistently for manufacturing decisions.",
    constraints: [
      "Industrial meters and serial communication links required practical field troubleshooting.",
      "Edge services had to recover cleanly and preserve useful records over time.",
      "The public case study must remove site identity, commercial figures, and operational details.",
    ],
    contribution: [
      "Developed the edge-to-dashboard data path and the supporting operational views.",
      "Integrated industrial signals, data storage, reporting, and service documentation.",
      "Diagnosed faults across field communication, edge services, databases, and dashboards.",
    ],
    architecture: [
      "Industrial power meters and Modbus RTU / RS-485",
      "Edge Linux devices and Python services",
      "PostgreSQL data storage",
      "Node-RED dashboards and operational reporting",
    ],
    evidence: [
      "Field-deployed manufacturing system.",
      "Repeatable edge services, historical records, and operator-facing dashboards.",
      "Public presentation intentionally removes customer, site-count, and expenditure details.",
    ],
    limitations: [
      "The public portfolio cannot reproduce the original production environment.",
      "No customer identity, exact deployment scale, or commercial outcome is published.",
    ],
    technologies: ["Python", "Modbus RTU", "RS-485", "PostgreSQL", "Node-RED", "Linux"],
    images: [
      {
        src: "/images/projects/factory-energy-architecture.svg",
        alt: "An anonymized architecture showing energy meters, edge services, historical storage, and dashboards",
        caption:
          "Sanitized system lineage: equipment readings move through resilient edge collection into historical storage and decision-facing views.",
      },
    ],
    links: [],
    sceneKey: "energy",
  },
  {
    slug: "nexus-iiot",
    title: "NEXUS Industrial IIoT",
    status: "validated-demo",
    engineeringAreas: ["Industrial integration", "Time-series data", "Decision support"],
    summary:
      "A reproducible aluminium-process demonstration connecting equipment signals, time-series storage, APIs, dashboards, alerts, and decision support.",
    problem:
      "Demonstrate how equipment events can move through a maintainable industrial data architecture and become useful operational information.",
    constraints: [
      "The demonstration uses simulated process data rather than a live production connection.",
      "Each service must remain understandable, replaceable, and runnable on a local development machine.",
    ],
    contribution: [
      "Designed the end-to-end equipment, messaging, storage, API, dashboard, and alerting architecture.",
      "Implemented local deployment, health checks, technical documentation, and repeatable demonstrations.",
      "Created decision-oriented views instead of treating data collection as the final outcome.",
    ],
    architecture: [
      "Simulated process stations and Modbus signals",
      "MQTT event transport",
      "TimescaleDB historian",
      "FastAPI services",
      "Svelte and Grafana decision views",
      "Docker Compose deployment",
    ],
    evidence: [
      "Runnable multi-service demonstration.",
      "Documented architecture and Windows demonstration workflow.",
      "Dashboard, asset-state, alert, and fault-scenario evidence.",
    ],
    limitations: [
      "This is a learning and portfolio demonstration, not a production control system.",
      "Process values, events, and stations are simulated.",
    ],
    technologies: ["Python", "FastAPI", "MQTT", "TimescaleDB", "Svelte", "Grafana", "Docker"],
    images: [
      {
        src: "/images/projects/nexus-decision-board.png",
        alt: "NEXUS Grafana decision board showing a synthetic fault scenario, alerts, holds, and recommended actions",
        caption:
          "Synthetic decision-board scenario: equipment and quality events are translated into prioritized operational actions.",
      },
      {
        src: "/images/projects/nexus-floor-overview.png",
        alt: "NEXUS browser dashboard showing the state of simulated aluminium-process assets",
        caption:
          "The browser view exposes simulated asset state from the same messaging, historian, and API pipeline.",
      },
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/SaladinIART/salbotics-iiot-aluminium-demo",
      },
    ],
    sceneKey: "nexus",
  },
  {
    slug: "mes-erp",
    title: "MES / ERP Manufacturing Flow",
    status: "validated-demo",
    engineeringAreas: ["Production flow", "Traceability", "Manufacturing software"],
    summary:
      "A sanitized learning system connecting production orders, material state, work execution, and reporting across a manufacturing information flow.",
    problem:
      "Show how business orders, manufacturing execution, material movements, and traceability records relate without exposing a private operational system.",
    constraints: [
      "All organizations, orders, products, and transactions must be synthetic.",
      "The public companion must demonstrate concepts without claiming production MES certification.",
    ],
    contribution: [
      "Mapped the order-to-production information flow and the boundaries between ERP and MES responsibilities.",
      "Built a sanitized demonstration and supporting architecture documentation.",
      "Emphasized status visibility, traceable events, and maintainable handover.",
    ],
    architecture: [
      "Synthetic customer and production orders",
      "Material and work-execution state",
      "Traceability events",
      "Operational reporting and documented process flow",
    ],
    evidence: [
      "Sanitized public companion demonstration.",
      "Documented manufacturing-information-flow diagram.",
      "Repeatable local learning workflow.",
    ],
    limitations: [
      "Not deployed as a production MES or ERP product.",
      "No real customer, material, production, or financial records are included.",
    ],
    technologies: ["Manufacturing workflows", "Traceability", "APIs", "SQL", "Documentation"],
    images: [
      {
        src: "/images/projects/mes-erp-flow.svg",
        alt: "A synthetic factory order flowing from order intake through planning, execution, quality, and reporting",
        caption:
          "Public learning flow: synthetic orders connect planning and material context to work execution, quality, output, and dashboards.",
      },
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/SaladinIART/salbotics-mes-erp-demo",
      },
    ],
    sceneKey: "edge",
  },
  {
    slug: "asset-vision",
    title: "Asset Vision",
    status: "prototype",
    engineeringAreas: ["Computer vision", "ROS 2", "Inspection software"],
    summary:
      "A hardware-independent inspection prototype combining asset identity, visual detection, local records, a browser dashboard, and typed ROS 2 interfaces.",
    problem:
      "Explore a repeatable inspection workflow that connects visual evidence, asset identity, application services, and robotics interfaces without requiring dedicated hardware.",
    constraints: [
      "The core workflow must run with supplied sample images.",
      "ROS 2 integration must remain separated from the application service boundary.",
      "Prototype results must not be described as production inspection accuracy.",
    ],
    contribution: [
      "Built the vision, identity, API, local-record, and dashboard workflow.",
      "Defined typed ROS 2 messages, services, and node boundaries for later robotic integration.",
      "Added automated tests and a hardware-independent sample mode.",
    ],
    architecture: [
      "Sample or camera image input",
      "Visual detection and identity decoding",
      "FastAPI application service",
      "SQLite records and browser dashboard",
      "ROS 2 message, service, and node interfaces",
    ],
    evidence: [
      "Working sample-mode inspection path.",
      "Dashboard screenshot and architecture diagram.",
      "Automated application and ROS-interface tests.",
    ],
    limitations: [
      "No production inspection accuracy, cycle-time, or hardware validation claim.",
      "Physical camera, lighting, and robot-cell integration remain future work.",
    ],
    technologies: ["Python", "FastAPI", "OpenCV", "YOLO", "SQLite", "ROS 2"],
    images: [
      {
        src: "/images/projects/asset-vision-dashboard.png",
        alt: "Asset Vision sample-mode dashboard with a QR-tagged item, inventory states, and recent detections",
        caption:
          "Working sample-mode dashboard: visual identity, presence state, local records, and inspection evidence are visible together.",
      },
      {
        src: "/images/projects/asset-vision-architecture.svg",
        alt: "Asset Vision architecture connecting camera input, perception, asset state, web services, and ROS 2 interfaces",
        caption:
          "Architecture boundary between the plain-Python inspection workflow, shared data, and ROS 2 perception nodes.",
      },
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/SaladinIART/asset-vision",
      },
    ],
    sceneKey: "compressor",
  },
  {
    slug: "tube-preparation-concept",
    title: "Tube Preparation Automation Concept",
    status: "engineering-concept",
    engineeringAreas: ["Process improvement", "CAD", "Automation trade study"],
    summary:
      "A sanitized modular concept exploring measurement, identification, labelling, inspection, and kitting as an engineering decision study.",
    notice:
      "Sanitized personal concept: every public input and geometry is invented or generalized. This work is unvalidated and unaffiliated with any employer, customer, or production line.",
    problem:
      "Explore how a repetitive preparation workflow could be decomposed into measurable modules before choosing between manual aids, partial automation, or a larger automated cell.",
    constraints: [
      "All public inputs and workflow descriptions are invented or generalized.",
      "Concept selection must consider safety, maintainability, verification, and staged proof rather than automation novelty.",
    ],
    contribution: [
      "Decomposed the workflow into modular preparation, identification, inspection, and kitting functions.",
      "Created alternative architectures, trade-study documentation, and selected concept CAD.",
      "Defined an offline proof path before any production recommendation.",
    ],
    architecture: [
      "Generic material input and verification",
      "Feed and measurement concept",
      "Identification and labelling concept",
      "Guarded separation and distributed inspection",
      "Output handling and kitting concept",
    ],
    evidence: [
      "Sanitized functional decomposition and alternative-architecture trade study.",
      "Public-safe concept views showing system boundaries and validation questions, not build geometry.",
      "Invented or generalized inputs only; no production baseline has been measured.",
    ],
    limitations: [
      "Unvalidated engineering concept, not a production-ready machine.",
      "Unaffiliated with any employer, customer, or production line.",
      "No throughput, quality, cost-saving, or qualification claim is made.",
    ],
    technologies: ["FreeCAD", "Process decomposition", "Trade studies", "Risk framing", "Concept validation"],
    images: [
      {
        src: "/images/projects/tube-preparation-modular-concept.svg",
        alt: "A sanitized functional concept connecting generic material verification, measurement, identification, guarded separation, inspection, and kitting",
        caption:
          "Public-safe functional flow: generic preparation is decomposed into modules and verification gates before any mechanism or automation level is selected.",
      },
      {
        src: "/images/projects/tube-preparation-inspection-concept.svg",
        alt: "A sanitized distributed inspection concept with independent checks and pass, hold, or controlled-stop decisions",
        caption:
          "Conceptual inspection boundary: independent evidence informs a traceable disposition. Optics, tolerances, calibration, safety, and reject handling remain validation questions.",
      },
    ],
    links: [],
    sceneKey: "messyToMeasured",
  },
  {
    slug: "amr-process-lab",
    title: "AMR Process Lab",
    status: "in-development",
    engineeringAreas: ["Intralogistics", "Discrete-event thinking", "Process analytics"],
    summary:
      "A private browser-based process simulator for fictional assembly-kit flow between virtual storage and assembly stations using one mobile robot.",
    notice:
      "Private work in progress: every job, resource, parameter, and event is synthetic. There is no public source, interactive demo, verified performance result, or autonomous-navigation claim yet.",
    problem:
      "Demonstrate how material-delivery timing, finite buffers, and shared resources influence queues, utilization, throughput, and lead time.",
    constraints: [
      "Every job, station, parameter, and event is fictional.",
      "The first version is a process visualization, not a physics or navigation simulator.",
      "Source and interactive evidence remain private until deterministic verification is complete.",
    ],
    contribution: [
      "Defined the initial one-robot, virtual-storage, and assembly-station scenario.",
      "Prioritized process analytics and reproducible comparison over visual complexity.",
      "Planned deterministic tests for event ordering, queue capacity, and kit conservation.",
    ],
    architecture: [
      "Synthetic assembly-kit order generator",
      "Virtual storage retrieval station",
      "Single mobile-robot resource",
      "Finite assembly-station buffers",
      "Event history, KPI calculation, and scenario comparison",
    ],
    evidence: [
      "Defined problem statement, event lifecycle, KPI set, and verification roadmap.",
      "Public roadmap diagram only; no public source code, simulator, or performance result yet.",
    ],
    limitations: [
      "In development; behavior and KPIs are not yet verified.",
      "Not a claim of autonomous navigation, warehouse control, or production readiness.",
    ],
    technologies: ["React", "TypeScript", "Process simulation", "Data visualization", "Deterministic testing"],
    images: [
      {
        src: "/images/projects/amr-process-lab-roadmap.svg",
        alt: "A private AMR process simulator roadmap showing fictional orders, virtual storage, one mobile robot, finite buffers, event history, and process metrics",
        caption:
          "Planned synthetic scenario and evidence path. Animated movement will visualize process state; it will not simulate physics, localization, navigation, or safety behavior.",
      },
    ],
    links: [],
    sceneKey: "decisionMap",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export const capabilities = {
  label: "engineering focus",
  title: "A practical manufacturing-automation toolkit.",
  intro:
    "The common thread is disciplined problem solving: understand the physical process, model the information flow, build the smallest useful proof, and document its limits.",
  areas: [
    {
      title: "Equipment and process",
      detail: "Troubleshooting, maintenance foundations, CAD/CAM, process observation, bottleneck framing, and improvement concepts.",
    },
    {
      title: "Industrial connectivity",
      detail: "Modbus RTU/TCP, RS-485, MQTT, edge devices, PLC concepts, equipment telemetry, and resilient data paths.",
    },
    {
      title: "Manufacturing software",
      detail: "Python, APIs, SQL, time-series data, dashboards, MES/ERP learning systems, Docker, testing, and technical runbooks.",
    },
    {
      title: "Robotics and vision",
      detail: "ROS 2 interfaces, computer-vision prototypes, mobile-robot concepts, process simulation, and evidence-led validation.",
    },
  ],
};

export const method = {
  label: "working method",
  title: "Evidence before claims.",
  intro:
    "Every portfolio item states what is deployed, demonstrated, prototyped, conceptual, or still in development.",
  steps: [
    { title: "Observe", body: "Define the physical workflow, users, constraints, failure modes, and decision that matters." },
    { title: "Model", body: "Translate the process into signals, states, interfaces, data, and measurable acceptance criteria." },
    { title: "Build", body: "Create the smallest safe proof that can answer the engineering question." },
    { title: "Validate", body: "Test repeatability, record limitations, and separate evidence from assumptions." },
  ],
};

export const about = {
  label: "about",
  title: "Hands-on manufacturing experience, extended through software and automation.",
  body: [
    "I'm Muhamad Solehuddin, an Industrial Automation and Robotics engineering technologist based in Penang. My background spans production-equipment maintenance, CAD/CAM, manufacturing digitization, industrial communications, and engineering software.",
    "I am most useful where the physical process and the digital system meet: tracing a signal from equipment to a dashboard, turning an operational problem into a testable model, or building a practical prototype that a manufacturing team can evaluate.",
    "Salbotics is now my personal engineering lab — a home for documented, evidence-led work in automation, IIoT, MES, machine vision, process improvement, and robotics.",
  ],
  emphasis: ["physical process and the digital system meet", "personal engineering lab"],
  readout: [
    { k: "foundation", v: "B.Eng.Tech", d: "Industrial Automation and Robotics Technology" },
    { k: "practice", v: "OT → IT", d: "equipment, industrial data, software, and decisions" },
    { k: "standard", v: "Proof", d: "clear evidence, limitations, and reproducible documentation" },
  ],
};

export const contactSection = {
  label: "contact",
  title: "Discuss engineering work, systems, and practical manufacturing problems.",
  sub:
    "For technical conversations, collaboration, or project verification, the links below provide a direct route to my work and background.",
  channels: [
    { k: "EMAIL", label: contact.email, href: `mailto:${contact.email}` },
    { k: "LINKEDIN", label: contact.linkedinLabel, href: contact.linkedin },
    { k: "GITHUB", label: contact.githubLabel, href: contact.github },
    { k: "PORTFOLIO", label: contact.siteLabel, href: contact.site },
    { k: "RESUME", label: contact.resumeLabel, href: contact.resume },
  ],
};

export const footer = {
  name: "Salbotics Engineering Lab",
  right: "equipment → evidence → improvement · 2026",
};
