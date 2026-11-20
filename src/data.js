export const contact = {
  email: "saladiniart@gmail.com",
  site: "https://salbotics.uk",
  siteLabel: "salbotics.uk",
  github: "https://github.com/SaladinIART",
  githubLabel: "github.com/SaladinIART",
  linkedin: "https://www.linkedin.com/in/solehuddin-muhamad-b67068132/",
  linkedinLabel: "linkedin.com/in/solehuddin-muhamad-b67068132",
  resume: "/resume/muhamad-solehuddin-robotics-automation.pdf",
  resumeLabel: "Robotics & Automation CV (PDF)",
  identity: "Muhamad Solehuddin · Penang, Malaysia",
};

export const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Open Labs", href: "/labs" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  kicker: "Muhamad Solehuddin · Robotics & Automation Systems Engineer",
  title: "I find the real cause when machines stop, and build tools that help teams fix them faster.",
  sub:
    "I've worked in manufacturing since 2016: maintaining production lines, testing machines and monitoring " +
    "factory equipment. Here you'll find my projects, and free labs where anyone can practise the same " +
    "fault-finding method.",
  ctas: [
    { label: "See my work", href: "/projects", variant: "primary" },
    { label: "Open Labs", href: "/labs", variant: "ghost" },
    { label: "Download CV", href: contact.resume, variant: "ghost", download: true },
  ],
  sceneKey: "pipeline",
};

const troubleshootingLab = "https://github.com/SaladinIART/salbotics-plc-troubleshooting-lab";

export const labs = {
  label: "open labs",
  title: "Free labs you can use today.",
  intro:
    "Learning material I build and share in the open. No sign-up and no cost: use it to learn, teach or practise.",
  items: [
    {
      slug: "plc-troubleshooting-lab",
      name: "PLC Troubleshooting Lab",
      tag: "New",
      what:
        "A virtual factory line with seven realistic breakdowns. Follow each one from what the operator saw to " +
        "the real cause and the fix, with screenshots at every step.",
      who: "Maintenance newcomers, students, and anyone curious how a stopped line gets fixed.",
      href: troubleshootingLab,
      cta: "Open the lab on GitHub",
      caseStudy: "/projects/plc-troubleshooting-lab",
    },
    {
      slug: "plc-learning-hub",
      name: "PLC Learning Hub",
      what:
        "Plain-language lessons on PLCs, operator screens (HMI) and SCADA, from the basics up, in your browser.",
      who: "Beginners and students starting in industrial automation.",
      href: "https://salbotics.uk/salbotics-plc-learning-hub/",
      cta: "Open the hub",
    },
    {
      slug: "ai-harness-lab",
      name: "AI Harness Lab",
      what:
        "Beginner-friendly guides for working with AI coding assistants in a repeatable, checkable way: clear " +
        "task briefs, reviews and handover checklists.",
      who: "Engineers and learners starting to use AI tools on real work.",
      href: "https://salbotics.uk/salbotics-ai-harness-lab/",
      cta: "Open the lab",
    },
  ],
};

export const projectStatusLabels = {
  deployed: "Deployed",
  "validated-demo": "Validated demo",
  prototype: "Prototype",
  "engineering-concept": "Engineering concept",
  "in-development": "In development",
  "simulated-study": "Simulated study",
  "open-lab": "Open lab",
  "working-practice": "Working practice",
};

export const projects = [
  {
    slug: "plc-troubleshooting-lab",
    title: "PLC Troubleshooting Lab",
    status: "open-lab",
    engineeringAreas: ["Troubleshooting", "PLC and HMI", "Teaching"],
    summary:
      "A free virtual factory line with seven realistic breakdowns, each written up step by step: what the operator " +
      "saw, what the machine's own data showed, the real cause, and the fix.",
    boundary:
      "A virtual plant on free software; not any company's program. Ingredients, recipes and numbers are invented.",
    objective:
      "Show my fault-finding method in a way anyone can check, and turn it into something newcomers can practise " +
      "on, using only free tools.",
    decisions: [
      "Rebuilt the kind of line I maintained (a weighing and batching line) as a virtual plant, because the real programs belong to the companies I worked for.",
      "Based the seven faults on the kinds of work I did in maintenance: a broken sensor cable, a replaced module set to the wrong address, an overloaded conveyor, a jammed gate, a broken output wire, a bad program change and a wrong screen setting.",
      "Wrote every fault as a short story in plain words, so recruiters and newcomers can follow it, with the technical detail kept for those who want it.",
    ],
    result:
      "Seven illustrated breakdowns with 29 screenshots from the running system, and 37 automated tests that check a full batch and every fault.",
    resultPoints: [
      "Runs end to end on an ordinary laptop with free software: the PLC program (OpenPLC), the operator screens (FUXA) and a plant simulator.",
      "A newcomer guide and a glossary, so the method can be learned, not just admired.",
      "The real plant conditions behind the faults (corrosion, dust, humidity, worn belts and motors) are written up on their own page.",
    ],
    aiRole:
      "Built with AI coding assistants under my direction: I designed the plant and the faults from my maintenance experience, and checked each fault on the running system before it was written up.",
    contribution: [
      "I designed the plant, chose and reproduced the faults, and set the step-by-step method from my own maintenance experience.",
    ],
    evidence: [
      "Public repository with the PLC program, simulator, operator screens, fault write-ups and tests.",
      "Screenshots taken from the running system for every fault.",
    ],
    limitations: [
      "A simulated plant: no physical PLC, wiring or machines.",
      "Not any employer's program or line; it shows the method, not a specific site.",
      "Free software only, so vendor tools (Omron, Keyence and others) look different on a real line.",
    ],
    technologies: ["OpenPLC", "IEC 61131-3 Structured Text", "FUXA HMI", "Modbus TCP", "Python", "Automated tests"],
    images: [
      {
        src: "/images/projects/plc-lab-f3-trip.png",
        alt: "The maintenance screen of the virtual plant at the moment a conveyor trips",
        caption: "Fault 3: a conveyor keeps tripping. Resetting isn't fixing: the lab traces what made it trip.",
      },
      {
        src: "/images/projects/plc-lab-f1-signal-fault.png",
        alt: "Operator screen showing a silo weight of minus 5000 kg after a sensor cable fault",
        caption: "Fault 1: a silo suddenly 'weighs' minus 5 000 kg. A strange number often means a broken signal.",
      },
      {
        src: "/images/projects/plc-lab-f7-monitoring.png",
        alt: "OpenPLC monitoring page showing the values the PLC program actually holds",
        caption: "Fault 7: checking the PLC's own values before believing the screen.",
      },
      {
        src: "/images/projects/plc-lab-f3-after-repair.png",
        alt: "Maintenance screen after the repair, with the conveyor running normally",
        caption: "After the repair: the cause removed and the fix proved on the running system.",
      },
    ],
    links: [
      { label: "Open the lab on GitHub", href: troubleshootingLab },
      { label: "Example: the conveyor that keeps tripping", href: `${troubleshootingLab}/blob/main/faults/F3-vfd-trip.md` },
      { label: "Newcomer guide", href: `${troubleshootingLab}/blob/main/docs/START_HERE.md` },
    ],
  },
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
    evidence: ["Simulated equipment; the software and protocol path is verified by tests and CI."],
    limitations: [
      "Fictional furnace and teaching model: no physical furnace, field data, calibrated digital twin or predictive-maintenance accuracy.",
      "The CI trace checks one retained sample path; it does not prove sustained throughput, exactly-once delivery, browser rendering or production readiness.",
      "The OPC UA teaching endpoint is loopback-only and unsecured; no certificate or trust management is claimed.",
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
  label: "what I do",
  title: "Troubleshooting first, then the systems around it.",
  intro:
    "The common thread is finding the real cause before changing anything, then building the simplest tool that " +
    "helps the next person find it faster.",
  areas: [
    {
      title: "Troubleshooting and maintenance",
      detail:
        "Fault-finding across mechanical, electrical, sensor, PLC and communication problems; preventive and " +
        "corrective maintenance of motors, drives, sensors and conveyors; proving every fix.",
    },
    {
      title: "PLC and controls",
      detail:
        "Reading and editing PLC programs online (Omron, Keyence, IEC 61131-3 Structured Text), operator screen " +
        "changes, and machine test-line checks.",
    },
    {
      title: "Machine data and monitoring",
      detail:
        "Bringing machine signals into dashboards: Modbus, RS-485, MQTT, OPC UA, edge devices and databases, " +
        "built to keep recording through network drops.",
    },
    {
      title: "Robotics, vision and software",
      detail:
        "Mobile robot design (CAD, electronics, firmware), ROS 2 interfaces, machine-vision prototypes, Python, " +
        "and AI-assisted development with independent review.",
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
    "Since October 2025 I have run Salbotics Solutions part-time as my robotics and automation R&D lab: open learning material, documented demonstrations, and robot design work. The projects on this site are demonstrations, not client deployments. Since July 2026 I have also worked as a contract test technician in electronics manufacturing in Penang.",
  ],
  emphasis: ["physical process and the digital system meet", "robotics and automation R&D lab"],
  readout: [
    { k: "foundation", v: "B.Tech", d: "Bachelor of Technology (Industrial Automation and Robotics), UniKL Malaysia France Institute" },
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
