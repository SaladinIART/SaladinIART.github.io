import profileImage from "../images/profile.png";
import heroImage from "../images/banner.jpg";

const skillGroups = [
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

const projects = [
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

const architectureFlow = [
  "Machine simulator",
  "Modbus TCP collector",
  "MQTT transport",
  "Python ingestion service",
  "TimescaleDB",
  "Grafana dashboards",
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#hero">
          <span className="brand-mark">S</span>
          <div>
            <strong>Salbotics Solutions</strong>
            <span>Industrial systems portfolio</span>
          </div>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="page">
        <section className="hero" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">Industrial automation, IIoT, and platform engineering</p>
            <h1>Bridging factory systems with modern software infrastructure.</h1>
            <p className="lead">
              I design practical telemetry stacks, automation integrations, and software-enabled
              workflows that help manufacturing teams move from isolated machines to usable
              operational insight.
            </p>
            <div className="actions">
              <a className="button button-primary" href="#projects">
                View featured work
              </a>
              <a className="button button-secondary" href="mailto:solehuddin@salbotics.uk">
                Contact me
              </a>
              <a className="button button-secondary" href="https://github.com/SaladinIART">
                GitHub
              </a>
            </div>
            <div className="stats">
              <article>
                <strong>Core focus</strong>
                <span>IIoT architecture, telemetry, and automation integration</span>
              </article>
              <article>
                <strong>Primary stack</strong>
                <span>Modbus TCP, MQTT, Python, Docker, Grafana, PostgreSQL</span>
              </article>
              <article>
                <strong>Direction</strong>
                <span>Industrial systems engineering under Salbotics Solutions</span>
              </article>
            </div>
          </div>
          <div className="hero-visual">
            <img src={profileImage} alt="Muhamad Solehuddin bin Muhamad Yusuf" />
            <div className="hero-card">
              <p className="eyebrow">Featured architecture</p>
              <h2>IIoT telemetry stack</h2>
              <div className="flow">
                {architectureFlow.map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
            </div>
          </div>
          <img className="hero-background" src={heroImage} alt="" />
        </section>

        <section className="section section-grid" id="about">
          <div className="section-heading">
            <p className="eyebrow">Professional profile</p>
            <h2>Industrial systems engineering with a software delivery mindset.</h2>
          </div>
          <div className="grid-two">
            <article className="panel">
              <p>
                Muhamad Solehuddin bin Muhamad Yusuf is a systems engineer specializing in
                industrial automation, IIoT architecture, and digital transformation for
                manufacturing environments.
              </p>
              <p>
                His work focuses on turning machine data into resilient operational systems that are
                usable by engineering teams, operators, and business stakeholders.
              </p>
            </article>
            <article className="panel panel-accent">
              <h3>What I build</h3>
              <ul className="list">
                <li>Industrial telemetry pipelines from machine interface to dashboard</li>
                <li>Edge-to-cloud architectures using open protocols and containerized services</li>
                <li>Automation-focused software systems designed for reliability</li>
                <li>Documentation-first engineering assets that teams can deploy and extend</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>Skills grouped around industrial delivery, not just tooling.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="panel" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section featured-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Portfolio pieces built around industrial visibility and practical delivery.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="panel project-card" key={project.title}>
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="list">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <a className="text-link" href={project.link}>
                  {project.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Vision and contact</p>
            <h2>Building practical Industry 4.0 systems under Salbotics Solutions.</h2>
          </div>
          <div className="grid-two">
            <article className="panel">
              <p>
                I am positioning my work toward industrial platform engineering, robotics-adjacent
                systems, and digital transformation projects that improve productivity and human
                capability in factory environments.
              </p>
              <p>
                I am especially interested in practical OT-IT integration, telemetry architectures,
                and the engineering patterns that make modern industrial systems maintainable over
                time.
              </p>
            </article>
            <article className="panel panel-accent">
              <h3>Let&apos;s connect</h3>
              <ul className="contact-list">
                <li>
                  <strong>Email</strong>
                  <a href="mailto:solehuddin@salbotics.uk">solehuddin@salbotics.uk</a>
                </li>
                <li>
                  <strong>GitHub</strong>
                  <a href="https://github.com/SaladinIART">github.com/SaladinIART</a>
                </li>
                <li>
                  <strong>LinkedIn</strong>
                  <a href="https://www.linkedin.com/in/solehuddin-muhamad-b67068132/">
                    solehuddin-muhamad
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
