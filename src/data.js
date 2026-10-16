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
  { label: "PLC Learning Hub", href: "https://salbotics.uk/salbotics-plc-learning-hub/" },
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
  "simulated-study": "Simulated study",
  "working-practice": "Working practice",
};

export const projects = [
  {
    slug: "factory-energy-monitor",
    title: "Factory Energy Visibility",
    status: "deployed",
    engineeringAreas: ["Industrial data", "Edge systems", "Operations visibility"],
    summary:
      "An anonymized manufacturing deployment that brought machine-level energy signals into durable data services, dashboards, and operational reporting.",
    boundary: "Field-deployed manufacturing system.",
    objective:
      "Operational energy information existed at equipment level but was difficult to collect, retain, and interpret consistently for manufacturing decisions.",
    result:
      "Deployed in a manufacturing environment: repeatable edge services, historical records, and operator-facing dashboards.",
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
    title: "NEXUS OPC UA and IIoT Condition Assessment",
    status: "validated-demo",
    engineeringAreas: ["OPC UA / IIoT", "Data quality", "Condition assessment"],
    summary:
      "A simulated furnace exposed over read-only OPC UA and traced through MQTT, TimescaleDB, FastAPI and Grafana, to tell a steady process apart from frozen, unreliable or disconnected data.",
    boundary: "Simulated equipment; the software and protocol path is verified by tests and CI.",
    objective:
      "When a simulated equipment reading stops changing, decide whether the process is stable, acquisition is frozen, the data is unreliable or the connection is lost — and trace accepted data through the whole monitoring stack.",
    decisions: [
      "Extended the existing NEXUS pipeline instead of starting a separate OPC UA lab, so the new path feeds the same MQTT contract, database and dashboards.",
      "Kept the OPC UA connection read-only (browse, read and subscribe), leaving setpoint writes outside the demonstration.",
      "Made IIoT-Telemetry-Stack the single canonical NEXUS repository while preserving the earlier aluminium-demo repository.",
    ],
    result:
      "62 automated cases pass (53 unit and 9 local OPC UA/MQTT integration), and a successful CI run traced one acknowledged sample to its exact database row, API response and Grafana datasource value.",
    resultPoints: [
      "Six scenarios are retained as raw traces with a hash manifest: normal, steady, frozen, bad, uncertain and process fault.",
      "Equipment state and data quality are reported separately; Bad, Uncertain or stale readings are suppressed rather than converted to zero.",
    ],
    aiRole:
      "AI agents, mainly Codex, implemented the typed model, freshness logic, subscriptions and reconnection, the MQTT bridge, the tests and the report. I set the scope and accepted results only with retained test and CI evidence.",
    contribution: [
      "I selected a read-only OPC UA extension for NEXUS and directed AI-assisted implementation, using retained tests and CI evidence to distinguish equipment condition from data-quality and communication problems.",
    ],
    evidence: [
      "Simulated equipment; the software and protocol path is verified by tests and CI.",
      "Browser demo that replays output recorded from the pipeline, with a visible notice whenever the data is sample data.",
    ],
    limitations: [
      "Fictional furnace and teaching model: no physical furnace, field data, calibrated digital twin or predictive-maintenance accuracy.",
      "The CI trace checks one retained sample path; it does not prove sustained throughput, exactly-once delivery, browser rendering or production readiness.",
      "The OPC UA teaching endpoint is loopback-only and unsecured; no certificate or trust management is claimed.",
      "The hosted browser demo replays recorded output; it is not a live connection to equipment.",
    ],
    technologies: ["Python", "OPC UA", "MQTT", "TimescaleDB", "FastAPI", "Grafana", "Docker", "GitHub Actions"],
    images: [
      {
        src: "/images/projects/nexus-decision-board.png",
        alt: "NEXUS Grafana decision board showing a synthetic fault scenario, alerts, holds, and recommended actions",
        caption:
          "The same NEXUS stack on its Modbus path: a synthetic fault becomes prioritised actions on the decision board.",
      },
    ],
    links: [
      { label: "Try the live demo (browser, simulated equipment)", href: "https://salbotics.uk/IIoT-Telemetry-Stack/" },
      { label: "Condition-assessment report", href: "https://github.com/SaladinIART/IIoT-Telemetry-Stack/blob/e297d46c947cdac7ce6f39c3703411c9b37a566f/docs/opcua/CONDITION_ASSESSMENT.md" },
      { label: "Release test summary (62 cases)", href: "https://github.com/SaladinIART/IIoT-Telemetry-Stack/blob/e297d46c947cdac7ce6f39c3703411c9b37a566f/docs/opcua/evidence/release-verification/tests_summary.json" },
      { label: "Successful CI run", href: "https://github.com/SaladinIART/IIoT-Telemetry-Stack/actions/runs/38737854129" },
      { label: "Exact-row verification", href: "https://github.com/SaladinIART/IIoT-Telemetry-Stack/blob/e297d46c947cdac7ce6f39c3703411c9b37a566f/docs/opcua/evidence/ci-38737854129/verification.json" },
      { label: "Retained scenario traces", href: "https://github.com/SaladinIART/IIoT-Telemetry-Stack/tree/e297d46c947cdac7ce6f39c3703411c9b37a566f/docs/opcua/evidence/2026-10-15-run-02" },
      { label: "GitHub repository", href: "https://github.com/SaladinIART/IIoT-Telemetry-Stack" },
    ],
    sceneKey: "opcuaCondition",
  },
  {
    slug: "bocobot-condition-routing",
    title: "BocoBot Condition Assessment and Warehouse Routing Study",
    status: "simulated-study",
    engineeringAreas: ["Signal analysis", "Condition assessment", "Route planning"],
    summary:
      "A study motivated by a small line-following robot: what shifted, noisy or missing sensor data can and cannot reveal, plus a Dijkstra and A* comparison on an invented warehouse graph.",
    boundary: "Synthetic data and an invented graph; no new physical robot measurements.",
    objective:
      "Use a small line-following robot to understand what signal changes can reveal and what they cannot identify, and how route choices depend on a declared graph and heuristic.",
    decisions: [
      "Kept my BocoBot, and the alignment and deviation behaviour I had seen on it, at the centre of the study instead of dismissing a small kit as irrelevant.",
      "Used synthetic observations and software studies under a no-new-hardware constraint, rather than waiting for a powered measurement session.",
      "Treated warehouse routing as a separate abstraction on an invented graph, not as a claim about the physical robot.",
    ],
    result:
      "30 synthetic runs across six scenarios were assessed; the routing implementation passed 20 tests, and an independent review checked path costs for all 256 ordered node pairs.",
    resultPoints: [
      "Bias, sensor offset and their combination produce identical observations, so the study reports them as indistinguishable instead of guessing a physical cause.",
      "Independent review found that reversed sample order could be called NORMAL and that extra false alerts were scored as correct; both were fixed without changing a threshold.",
    ],
    aiRole:
      "The synthetic generator, signal assessor, scoring, report and routing code were produced in AI sessions and independently reviewed by Codex.",
    contribution: [
      "I used my BocoBot experience to frame a synthetic condition-assessment and routing study, directed AI-assisted implementation, and retained independent review findings and the limits of what the data could establish.",
    ],
    evidence: ["Synthetic data and an invented graph; no new physical robot measurements."],
    limitations: [
      "No newly measured robot traces, physical causal diagnosis or calibrated dynamics; the alignment behaviour is my own observation, not a measured finding.",
      "Scenarios and assessor were written in the same study, and evaluation seeds had already been inspected.",
      "Routing uses an invented graph and costs: no robot travel times, localisation, ROS 2 or physical warehouse integration.",
      "The study source and results are not yet published; the linked repository is the existing robot source.",
    ],
    technologies: ["Python", "Synthetic data", "Signal analysis", "Dijkstra", "A*", "Unit testing"],
    images: [],
    links: [
      { label: "Existing robot source (study results not yet published)", href: "https://github.com/SaladinIART/PicoClaw_LineRobo" },
    ],
    sceneKey: "bocobotStudy",
  },
  {
    slug: "plc-asset-vision-checks",
    title: "PLC Sequence Verification and Asset Vision Checks",
    status: "simulated-study",
    engineeringAreas: ["PLC logic", "Verification", "Machine vision"],
    summary:
      "Two bounded software checks: an educational PLC training model against declared start, stop, fault and emergency sequences, and Asset Vision's QR decoder against known sample frames.",
    boundary: "An educational software model and synthetic frames; no physical PLC or camera.",
    objective:
      "Check whether an educational controller follows its declared sequence and restart behaviour, and whether the existing QR decoder returns the expected identities on simple sample images.",
    decisions: [
      "Verified my existing PLC learning software and Asset Vision project instead of buying hardware or starting a new prototype.",
      "Kept every claim to what software can show: no physical PLC, wiring or commissioning is implied.",
      "Deferred the heavier object-detection path and kept the QR decoding check separate from detection.",
    ],
    result:
      "PLC: four training-model traces, with all 18 declared checks matching. Asset Vision: five clean sample frames, with 5/5 expected QR payloads decoded.",
    resultPoints: [
      "The traces covered normal timing, conflicting START/STOP inputs with fault reset, stop/restart, and emergency/restart.",
      "The emergency trace showed the trainer resumes automatically once the input clears — recorded as behaviour that needs a design decision, not as safe machine operation.",
    ],
    aiRole:
      "Claude Code prepared the predictions, runners and trace and image checks; Codex independently reviewed and reproduced the retained results.",
    contribution: [
      "I prioritized software-based verification of my PLC learning model and Asset Vision project, using AI-assisted trace and QR checks with independent review, while keeping physical PLC and object-detection claims outside the evidence.",
    ],
    evidence: ["An educational software model and synthetic frames; no physical PLC or camera."],
    limitations: [
      "Educational Python model: no vendor PLC runtime, wired I/O, commissioning or certified safety function; only the declared default-timer cases were checked.",
      "The QR frames are generated, clean and easy; they support a decoding check, not real-world read rates or defect detection.",
      "No object detection, live camera, ROS 2, dashboard or complete inspection pipeline was verified.",
      "The detailed verification records are not published; the links show the checked source code.",
    ],
    technologies: ["Python", "PLC sequence logic", "Test specifications", "OpenCV", "pyzbar", "QR codes"],
    images: [],
    links: [
      { label: "Source: PLC training engine", href: "https://github.com/SaladinIART/salbotics-plc-learning-hub/blob/fb4bb4137c3459c09fac3947c05a5b8602384ed3/plc_engine.py" },
      { label: "Source: Asset Vision QR decoder", href: "https://github.com/SaladinIART/asset-vision/blob/bda8c796516d79110ecc6050d91719a90c2ea427/asset_vision/qrtools.py" },
      { label: "Asset Vision sample images", href: "https://github.com/SaladinIART/asset-vision/tree/bda8c796516d79110ecc6050d91719a90c2ea427/samples" },
    ],
    sceneKey: "plcVision",
  },
  {
    slug: "ai-assisted-engineering-workflow",
    title: "AI-Assisted Engineering Workflow",
    status: "working-practice",
    engineeringAreas: ["Requirements", "Implementation review", "Evidence management"],
    summary:
      "How I run AI coding agents on engineering work: bounded task briefs, acceptance criteria, cross-model review, and failed results kept on record before anything is accepted.",
    boundary: "A documented working practice; no productivity or model-ranking claim.",
    objective:
      "Make AI-assisted engineering work resumable and checkable, through bounded briefs, retained failures, explicit corrections and independent acceptance.",
    decisions: [
      "Split the roles: Claude Code implements bounded checkpoints, Codex prepares task contracts and reviews independently, and no two agents duplicate the same task.",
      "Used small checkpoints and shared documents so any tool or model can resume without relying on hidden chat memory.",
      "Kept failed results and asked for re-review instead of accepting an AI's own claim that the work was complete.",
    ],
    result:
      "A retained example chain — task brief, CHANGES_REQUESTED review, revision, regression checks and a final COMPLETE decision — shows a real defect being caught and fixed.",
    resultPoints: [
      "In the BocoBot assessor, review caught reversed sample order being accepted as NORMAL and over-permissive scoring; the fix added input-order checks and exact-set scoring without changing thresholds.",
      "The same discipline removed untested claims from NEXUS, such as a Kubernetes chart that had never been tested, instead of leaving them in place.",
    ],
    aiRole:
      "Agents wrote briefs, code, tests, reports and review records within their assignments. I set the scope, chose the tools and decided what was accepted.",
    contribution: [
      "I coordinate AI-assisted engineering through bounded briefs, evidence requirements and cross-model review, retaining failed checks and corrections before accepting a result.",
    ],
    evidence: ["A documented working practice; no productivity or model-ranking claim."],
    limitations: [
      "The documents are an advisory coordination protocol, not enforced access control or automatic agent-to-agent communication.",
      "AI review is not the same as industrial team experience, and no time saving or model ranking is claimed.",
      "The specific review records are private; the links are sanitized teaching materials based on the same practice.",
    ],
    technologies: ["Claude Code", "Codex", "Git", "Checkpoint plans", "Review protocols"],
    images: [],
    links: [
      { label: "Workflow teaching materials", href: "https://github.com/SaladinIART/salbotics-ai-harness-lab/tree/da4cd05673ced1a50c3a4edbc256ec68af03b533/episodes/02-lessons-from-real-projects" },
      { label: "Checkpoint review worksheet", href: "https://github.com/SaladinIART/salbotics-ai-harness-lab/blob/da4cd05673ced1a50c3a4edbc256ec68af03b533/episodes/02-lessons-from-real-projects/worksheets/checkpoint-review-sheet.md" },
      { label: "Handoff checklist", href: "https://github.com/SaladinIART/salbotics-ai-harness-lab/blob/da4cd05673ced1a50c3a4edbc256ec68af03b533/episodes/02-lessons-from-real-projects/worksheets/handoff-checklist.md" },
    ],
    sceneKey: "aiWorkflow",
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
    "I'm Muhamad Solehuddin, an Automation and Robotics engineering technologist based in Penang. My background spans production-equipment maintenance, CAD/CAM, manufacturing digitization, industrial communications, and engineering software.",
    "I am most useful where the physical process and the digital system meet: tracing a signal from equipment to a dashboard, turning an operational problem into a testable model, or building a practical prototype that a manufacturing team can evaluate.",
    "From October 2025 to August 2026, I worked as a Freelance Systems Engineer through Salbotics Solutions, building documented, self-directed IIoT and manufacturing-data demonstrations. These portfolio projects are not presented as client deployments. Salbotics is now my personal engineering lab for evidence-led work in automation, IIoT, MES, machine vision, process improvement, and robotics.",
  ],
  emphasis: ["physical process and the digital system meet", "personal engineering lab"],
  readout: [
    { k: "foundation", v: "B.Eng.Tech", d: "Automation and Robotics (Hons), UniKL Malaysia France Institute" },
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
