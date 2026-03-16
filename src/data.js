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
];

export const architectureFlow = [
  "Machine simulator",
  "Modbus TCP collector",
  "MQTT transport",
  "Python ingestion service",
  "TimescaleDB",
  "Grafana dashboards",
];

export const projects = [
  {
    label: "Featured build",
    title: "IIoT Monitoring Pipeline",
    summary:
      "A portfolio-grade telemetry platform that simulates the flow from machine signals to dashboards using Modbus TCP, MQTT, Python services, TimescaleDB, and Grafana.",
    details: [
      "Machine simulator exposing operational data over Modbus TCP",
      "Python collector normalizing telemetry and event payloads",
      "MQTT broker decoupling field collection from ingestion services",
      "Time-series storage and dashboards for machine state visibility",
    ],
    link: "https://github.com/SaladinIART",
    cta: "View source profile",
  },
  {
    label: "Robotics",
    title: "PicoClaw Line Robot",
    summary:
      "A practical robotics project that highlights hardware-software integration, disciplined repository structure, and clear documentation for future learning work.",
    details: [
      "Embedded robotics experimentation",
      "Readable documentation for technical and non-technical audiences",
      "Strong base for broader ROS2-oriented exploration",
    ],
    link: "https://github.com/SaladinIART/PicoClaw_LineRobo",
    cta: "Open repository",
  },
  {
    label: "Next direction",
    title: "Salbotics Solutions",
    summary:
      "The long-term direction is toward industrial platform engineering, robotics-adjacent infrastructure, and practical technology that improves productivity in factory environments.",
    details: [
      "Industrial AI and smart manufacturing platforms",
      "Scalable factory telemetry architectures",
      "Autonomous industrial monitoring systems",
    ],
    link: "https://www.linkedin.com/in/solehuddin-muhamad-b67068132/",
    cta: "Connect on LinkedIn",
  },
];
