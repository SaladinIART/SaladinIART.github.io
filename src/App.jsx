import profileImage from "../images/profile.png";
import heroImage from "../images/banner.jpg";
import dashboardImage from "../images/nexus-aluminium-dashboard.png";
import { architectureFlow, latestProject, projects, skillGroups } from "./data";

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
            <p className="eyebrow">Latest build: NEXUS Aluminium Profile Decision Demo</p>
            <h1>Salbotics Solutions</h1>
            <p className="lead">
              Industrial automation and IIoT portfolio focused on turning machine data into
              decision-ready systems for manufacturing teams, from factory floor signals to
              executive dashboards.
            </p>
            <div className="actions">
              <a className="button button-primary" href="#latest">
                View latest project
              </a>
              <a className="button button-secondary" href={latestProject.repo}>
                Open GitHub repo
              </a>
              <a className="button button-secondary" href="mailto:solehuddin@salbotics.uk">
                Contact me
              </a>
            </div>
            <div className="stats">
              <article>
                <strong>Newest project</strong>
                <span>Runnable aluminium extrusion decision demo with live alerts</span>
              </article>
              <article>
                <strong>Primary stack</strong>
                <span>Modbus TCP, MQTT, Python, TimescaleDB, FastAPI, Svelte, Grafana</span>
              </article>
              <article>
                <strong>Demo surfaces</strong>
                <span>Executive web app, Grafana decision board, API docs, and runbooks</span>
              </article>
            </div>
          </div>
          <div className="hero-visual">
            <img src={profileImage} alt="Muhamad Solehuddin bin Muhamad Yusuf" />
            <div className="hero-card">
              <p className="eyebrow">Architecture flow</p>
              <h2>Factory floor to decision desk</h2>
              <div className="flow">
                {architectureFlow.map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
            </div>
          </div>
          <img className="hero-background" src={heroImage} alt="" />
        </section>

        <section className="section latest-project" id="latest">
          <div className="section-heading">
            <p className="eyebrow">{latestProject.label}</p>
            <h2>{latestProject.title}</h2>
          </div>
          <div className="latest-layout">
            <figure className="dashboard-shot">
              <img src={dashboardImage} alt="Grafana Aluminium Profile Decision Board" />
              <figcaption>Grafana decision board showing quench quality hold, alerts, and business risk.</figcaption>
            </figure>
            <div className="latest-copy">
              <p>{latestProject.summary}</p>
              <p className="scenario">{latestProject.scenario}</p>
              <div className="chip-row">
                {latestProject.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <ul className="list">
                {latestProject.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <a className="button button-primary latest-button" href={latestProject.repo}>
                Open latest repository
              </a>
            </div>
          </div>
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
                industrial automation, IIoT architecture, and AI-assisted digital transformation
                for manufacturing environments.
              </p>
              <p>
                His work focuses on turning machine data into resilient operational systems that
                are useful for engineering teams, operators, and business stakeholders.
              </p>
            </article>
            <article className="panel panel-accent">
              <h3>What I build</h3>
              <ul className="list">
                <li>Industrial telemetry pipelines from machine interface to dashboard</li>
                <li>Edge-to-cloud architectures using open protocols and containerized services</li>
                <li>Alerting and decision surfaces for quality, maintenance, and business impact</li>
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
                I am positioning my work toward IIoT integration, industrial platform engineering,
                and digital transformation projects that improve productivity and human capability
                in factory environments.
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
