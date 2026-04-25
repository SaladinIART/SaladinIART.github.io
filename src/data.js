export const latestProject = {
  label: "Latest flagship project",
  title: "NEXUS - Aluminium Profile Decision Demo",
  repo: "https://github.com/SaladinIART/salbotics-iiot-aluminium-demo",
  summary:
    "A self-contained IIoT monitoring platform for an aluminium extrusion line, built from Modbus register reads through MQTT, Python services, TimescaleDB, FastAPI, Svelte, Grafana, alerts, and CI/CD.",
  scenario:
    "QUALITY_HOLD_QUENCH: quench flow drops below spec, exit temperature rises beyond the T5/T6 window, and the dashboard turns raw telemetry into management actions.",
  highlights: [
    "Seven-station aluminium line simulator: furnace, press, quench, cooling, stretcher, saw, and ageing",
    "REST API and Svelte executive dashboard for browser-based factory visibility",
    "Grafana Aluminium Profile Decision Board with quality holds, alert state, and business-risk views",
    "Three-layer alerting: threshold rules, statistical baseline, and ML anomaly detection with IsolationForest",
    "Scale path from single-host Docker Compose to multi-site Docker and Kubernetes Helm deployment",
  ],
  stack: [
    "Modbus TCP",
    "MQTT / Mosquitto",
    "Python 3.13",
    "FastAPI",
    "TimescaleDB",
    "Svelte 5",
    "Grafana",
    "Docker Compose",
    "Helm",
    "GitHub Actions",
  ],
};

export const skillGroups = [
  {
    title: "Industrial",
    items: [
      "Industrial automation and PLC integration",
      "Aluminium extrusion process modeling",
      "Modbus TCP, MQTT, and machine telemetry systems",
      "ISA-95 topic hierarchy and factory asset semantics",
    ],
  },
  {
    title: "Software",
    items: [
      "Python services for collection, ingestion, and alerting",
      "FastAPI REST and server-sent event streams",
      "Svelte and Vite frontend delivery",
      "Typed contracts, tests, and architecture decision records",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "Docker Compose for single-command local deployment",
      "Kubernetes and Helm scale path for multi-site operations",
      "Mosquitto now, EMQX cluster path for larger deployments",
      "CI/CD with GitHub Actions on every push",
    ],
  },
  {
    title: "Data and Visualization",
    items: [
      "TimescaleDB hypertables, views, and decision-board queries",
      "Grafana dashboards for quality, business, and station risk",
      "Executive KPI views for OEE, alerts, assets, and production signals",
      "Alert deduplication, routing, and acknowledgement workflows",
    ],
  },
  {
    title: "AI and Decision Support",
    items: [
      "IsolationForest anomaly detection for offline industrial alerts",
      "Statistical baselines layered with deterministic thresholds",
      "Structured agentic scaffold with architecture ownership",
      "Decision surfaces designed for managers, operators, and engineers",
    ],
  },
];

export const architectureFlow = [
  "7-station Modbus sim",
  "MQTT topics",
  "Python collectors",
  "TimescaleDB",
  "FastAPI + SSE",
  "Svelte executive view",
  "Grafana decision board",
];

export const projects = [
  {
    label: "Latest build",
    title: "NEXUS - Aluminium Profile Decision Demo",
    summary:
      "A runnable aluminium extrusion decision demo that turns simulated machine signals into live dashboards, alerts, and executive actions.",
    details: [
      "Modbus TCP simulator covering seven aluminium production stations",
      "MQTT, Python ingestion, TimescaleDB views, FastAPI, Svelte, and Grafana",
      "QUALITY_HOLD_QUENCH scenario for quality, delay, and business-risk visibility",
      "Deployable with Docker Compose, with documented paths to Tier 2 and Tier 3 scale",
    ],
    link: "https://github.com/SaladinIART/salbotics-iiot-aluminium-demo",
    cta: "Open repository",
  },
  {
    label: "Real-world deployment",
    title: "Factory Energy Monitor",
    summary:
      "A machine energy monitoring system originally deployed across production locations at a Malaysian manufacturer, then rebuilt as a portfolio-friendly open-source stack.",
    details: [
      "Modbus TCP data collection from industrial power meters",
      "Monthly energy cost dashboard for management visibility",
      "Factory-load simulation with RM cost tracking",
      "Dockerized open-source version for reproducible demonstration",
    ],
    link: "https://github.com/SaladinIART/factory-energy-monitor",
    cta: "Open repository",
  },
  {
    label: "Infrastructure",
    title: "Edge Telemetry Platform",
    summary:
      "A compact edge-computing telemetry stack demonstrating local Kubernetes operations, persistent storage, health probes, metrics, and secrets management.",
    details: [
      "Three-tier architecture: simulator, FastAPI service, and PostgreSQL",
      "Kubernetes with autoscaling, configmaps, and persistent volumes",
      "Prometheus metrics endpoint and health probe integration",
      "Reproducible Windows 11 development environment",
    ],
    link: "https://github.com/SaladinIART/edge-telemetry-platform",
    cta: "Open repository",
  },
  {
    label: "Robotics",
    title: "PicoClaw Line Robot",
    summary:
      "An AI-assisted line-following robot architecture on Raspberry Pi Pico W with embedded control, telemetry logging, and topological track mapping.",
    details: [
      "Three-layer architecture: robot control, data logging, and AI advisory",
      "Recovery behavior for line loss, reverse, search, and resume",
      "Topological mapping from repeated runs",
      "Docker-backed telemetry services with MQTT and SQLite",
    ],
    link: "https://github.com/SaladinIART/PicoClaw_LineRobo",
    cta: "Open repository",
  },
];
