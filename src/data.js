export const skillGroups = [
  {
    title: "Industrial",
    items: [
      "Industrial automation and PLC integration",
      "Industrial Internet of Things architecture",
      "Modbus TCP, MQTT, and machine telemetry systems",
      "Machine state modeling and factory signal interpretation",
    ],
  },
  {
    title: "Software",
    items: [
      "Python systems development and data services",
      "FastAPI and JSON-based service contracts",
      "Structured ingestion, retry logic, and testable pipelines",
      "Documentation for reproducible deployments",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "Dockerized stack deployment and local platform simulation",
      "Linux-based edge environments and industrial data workflows",
      "Message broker integration and service orchestration",
      "Scalable edge-to-cloud telemetry patterns",
    ],
  },
  {
    title: "Data and Visualization",
    items: [
      "PostgreSQL and TimescaleDB for time-series storage",
      "Grafana dashboards for machine insight and monitoring",
      "Telemetry analytics for state, events, and trends",
      "Data engineering for manufacturing systems",
    ],
  },
  {
    title: "AI & Digital Transformation",
    items: [
      "Expert prompt engineering for IIoT system design and architecture",
      "AI-assisted telemetry pipeline design and optimization",
      "LLM-driven rapid prototyping of industrial data workflows",
      "Digital transformation strategy for manufacturing environments",
    ],
  },
];

export const architectureFlow = [
  "RX380 Modbus meter",
  "Modbus TCP collector",
  "MQTT broker",
  "Python ingestion service",
  "TimescaleDB",
  "Grafana dashboard",
];

export const projects = [
  {
    label: "Featured build",
    title: "NEXUS — IIoT Telemetry Stack",
    summary:
      "A full-stack industrial IoT monitoring platform built for manufacturing environments. Eight integrated layers from field data collection to ML-based anomaly detection, scalable from a single Docker host to multi-site Kubernetes deployment.",
    details: [
      "Modbus TCP data collection → MQTT → FastAPI → TimescaleDB pipeline",
      "Three-layer alerting: threshold rules, statistical baselines, ML anomaly detection",
      "Svelte 5 frontend with Grafana dashboards for real-time machine insight",
      "Scales from local Docker Compose to Kubernetes with autoscaling and health probes",
    ],
    link: "https://github.com/SaladinIART/IIoT-Telemetry-Stack",
    cta: "Open repository",
  },
  {
    label: "Real-world deployment",
    title: "Factory Energy Monitor",
    summary:
      "A machine energy monitoring system originally deployed across 25 locations at a Malaysian manufacturer, where it became the department standard for production-line cost reporting — built in response to rising TNB tariffs and Malaysia's EECA 2024 energy compliance mandate.",
    details: [
      "Modbus TCP data collection from RX380 power meters on IRIV Cytron industrial PCs",
      "Monthly energy cost dashboard used by management — RM30K–65K/month visibility",
      "EECA 2024 context: mandatory energy audits for facilities consuming >21,600 GJ/year",
      "Dockerized open-source version with 4-zone simulated factory load profiles and RM cost tracking",
    ],
    link: "https://github.com/SaladinIART/factory-energy-monitor",
    cta: "Open repository",
  },
  {
    label: "Infrastructure",
    title: "Edge Telemetry Platform",
    summary:
      "A compact edge-computing telemetry stack demonstrating Kubernetes operations on local hardware — persistent storage, autoscaling, health probes, Prometheus metrics, and secrets management on a single Windows 11 machine.",
    details: [
      "Three-tier architecture: simulator → FastAPI → PostgreSQL, fully containerized",
      "Kubernetes (Minikube) with HPA autoscaling, configmaps, and persistent volumes",
      "Prometheus metrics endpoint and health probe integration",
      "Reproducible deployment designed for Windows 11 development environments",
    ],
    link: "https://github.com/SaladinIART/edge-telemetry-platform",
    cta: "Open repository",
  },
  {
    label: "Robotics",
    title: "PicoClaw Line Robot",
    summary:
      "An AI-assisted line-following robot architecture on Raspberry Pi Pico W — combining embedded control, distributed telemetry logging, and topological track mapping without GPS or cameras.",
    details: [
      "Three-layer architecture: robot control, data logging, AI advisory (planned)",
      "Recovery system: detects line loss, reverses, searches, and resumes autonomously",
      "Topological mapping — robot learns track patterns from repeated runs",
      "Docker-backed telemetry services with MQTT and SQLite for driving analytics",
    ],
    link: "https://github.com/SaladinIART/PicoClaw_LineRobo",
    cta: "Open repository",
  },
];
