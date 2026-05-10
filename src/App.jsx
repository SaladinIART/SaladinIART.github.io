import { useEffect, useState } from "react";
import logoHorizontal from "../images/brand/salbotics-logo-2026-05-10/salbotics-horizontal-white-bg.png";
import logoMark from "../images/brand/salbotics-logo-2026-05-10/salbotics-monogram-color-white-bg.png";
import dashboardImage from "../images/nexus-aluminium-dashboard.png";
import profileImage from "../images/profile.png";
import {
  capabilities,
  contact,
  contactPrompts,
  navItems,
  proofAssets,
  serviceOffers,
  techStack,
  workSteps,
} from "./data";

const routes = new Set(navItems.map((item) => item.path));

function getPath() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  return routes.has(path) ? path : "/";
}

function App() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onPopState = () => setPath(getPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function navigate(nextPath) {
    if (nextPath === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const Page = {
    "/": HomePage,
    "/services": ServicesPage,
    "/proof": ProofPage,
    "/freelance": FreelancePage,
    "/contact": ContactPage,
  }[path];

  return (
    <div className="site-shell">
      <Header path={path} onNavigate={navigate} />
      <main className="page">
        <Page onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

function Header({ path, onNavigate }) {
  return (
    <header className="topbar">
      <button className="brand" type="button" onClick={() => onNavigate("/")}>
        <img src={logoMark} alt="" />
        <span>
          <strong>Salbotics Solutions</strong>
          <small>Freelance IIoT Consultant</small>
        </span>
      </button>
      <nav className="nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            key={item.path}
            className={path === item.path ? "active" : ""}
            type="button"
            onClick={() => onNavigate(item.path)}
          >
            <span className="nav-label-full">{item.label}</span>
            <span className="nav-label-short">
              {item.path === "/freelance" ? "Profile" : item.label}
            </span>
          </button>
        ))}
      </nav>
    </header>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div>
        <strong>Salbotics Solutions</strong>
        <span>Practical digital transformation for factories and small businesses.</span>
      </div>
      <div className="footer-links">
        <button type="button" onClick={() => onNavigate("/proof")}>
          Proof
        </button>
        <button type="button" onClick={() => onNavigate("/contact")}>
          Contact
        </button>
      </div>
    </footer>
  );
}

function HomePage({ onNavigate }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>Salbotics Solutions</h1>
          <p className="title-line">Freelance IIoT Consultant</p>
          <p className="lead">
            I help factories and small businesses turn messy operations into visible, measurable
            systems through scoped sprints, industrial proof assets, and documented handover.
          </p>
          <div className="actions">
            <button className="button button-primary" type="button" onClick={() => onNavigate("/contact")}>
              Contact for interview or scoped work
            </button>
            <button className="button button-secondary" type="button" onClick={() => onNavigate("/proof")}>
              Review proof
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <img className="hero-logo" src={logoHorizontal} alt="Salbotics Solutions" />
          <div className="signal-panel">
            <span>Open to roles</span>
            <strong>Full-time, contract, and freelance opportunities</strong>
          </div>
        </div>
      </section>

      <section className="split-band">
        <PathCard
          title="For businesses"
          text="Start with a focused sprint: energy visibility, SME operations digitization, or a clean lead funnel."
          action="View services"
          onClick={() => onNavigate("/services")}
        />
        <PathCard
          title="For recruiters"
          text="Review industrial systems, IIoT, software delivery, documentation, and practical OT/IT capability."
          action="View freelance profile"
          onClick={() => onNavigate("/freelance")}
        />
      </section>

      <section className="section">
        <SectionIntro
          label="Quick proof"
          title="Evidence before promises."
          text="NEXUS and factory energy monitoring work show the current capability. SOL is kept as future roadmap, not a product claim."
        />
        <div className="proof-strip">
          {proofAssets.slice(0, 2).map((asset) => (
            <ProofMini key={asset.title} asset={asset} />
          ))}
          <article className="panel roadmap-note">
            <span>Future roadmap</span>
            <h3>SOL - Salbotics Operations Layer</h3>
            <p>
              A planned operations layer direction for future product work. It is not offered as a
              finished product today.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

function ServicesPage({ onNavigate }) {
  return (
    <>
      <PageHero
        title="Scoped sprints for visible operations."
        text="Current Salbotics work is service-first: short, practical engagements with clear scope, price range, handover, and boundaries."
        action="Start a conversation"
        onAction={() => onNavigate("/contact")}
      />
      <section className="offers">
        {serviceOffers.map((offer) => (
          <article className="offer" key={offer.title}>
            <div>
              <h2>{offer.title}</h2>
              <p>{offer.buyer}</p>
            </div>
            <dl className="offer-meta">
              <div>
                <dt>Typical range</dt>
                <dd>{offer.range}</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>{offer.timeline}</dd>
              </div>
            </dl>
            <p className="outcome">{offer.outcome}</p>
            <ul className="list">
              {offer.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="section process-band">
        <SectionIntro
          label="Working style"
          title="Sprints, not vague transformation."
          text="The work moves through a written scope and handover so the result can survive after the sprint."
        />
        <div className="step-row">
          {workSteps.map((step, index) => (
            <span key={step}>
              {index + 1}. {step}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

function ProofPage({ onNavigate }) {
  return (
    <>
      <PageHero
        title="Proof assets built around industrial visibility."
        text="These projects show system thinking, not finished SaaS claims: telemetry, dashboards, alerts, documentation, and handover discipline."
        action="View profile"
        onAction={() => onNavigate("/freelance")}
      />
      <section className="proof-feature">
        <figure>
          <img src={dashboardImage} alt="NEXUS dashboard proof for aluminium decision support" />
          <figcaption>NEXUS dashboard proof asset: aluminium decision visibility and alert context.</figcaption>
        </figure>
        <div className="stack-panel">
          <h2>Factory floor to decision desk</h2>
          <p>
            The strongest public proof is the ability to connect machine signals, data services,
            dashboards, and written runbooks into one explainable system.
          </p>
          <div className="chip-row">
            {techStack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="cards-grid">
        {proofAssets.map((asset) => (
          <article className="panel proof-card" key={asset.title}>
            <span>{asset.label}</span>
            <h2>{asset.title}</h2>
            <strong>{asset.maturity}</strong>
            <p>{asset.summary}</p>
            <ul className="list">
              {asset.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <a className="text-link" href={asset.link}>
              {asset.cta}
            </a>
          </article>
        ))}
      </section>
    </>
  );
}

function FreelancePage({ onNavigate }) {
  return (
    <>
      <PageHero
        title="Freelance IIoT Consultant. Industrial Systems Engineer."
        text="Open to full-time roles, contract work, and scoped freelance projects across industrial automation, OT/IT integration, dashboards, APIs, and documentation-heavy delivery."
        action="Contact for interview"
        onAction={() => onNavigate("/contact")}
      />
      <section className="profile-layout">
        <img src={profileImage} alt="Muhamad Solehuddin bin Muhamad Yusuf" />
        <div className="profile-copy">
          <h2>Role fit</h2>
          <p>
            I connect factory realities to software systems: machine data, operational dashboards,
            alerts, API services, DevOps workflows, and clear handover documentation.
          </p>
          <div className="capability-list">
            {capabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <SectionIntro
          label="How I work"
          title="AI-assisted, architecture-owned, proof-led."
          text="AI can accelerate drafting, scaffolding, and review. The engineering responsibility remains human: domain fit, architecture, verification, and handover."
        />
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact for interviews, scoped work, or practical collaboration."
        text="Use email or LinkedIn. Share enough context so the first reply can be useful."
        action="Email Solehuddin"
        href={`mailto:${contact.email}`}
      />
      <section className="contact-layout">
        <article className="contact-card">
          <h2>Direct channels</h2>
          <ul className="contact-list">
            <li>
              <strong>Email</strong>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <strong>LinkedIn</strong>
              <a href={contact.linkedin}>solehuddin-muhamad</a>
            </li>
            <li>
              <strong>GitHub</strong>
              <a href={contact.github}>github.com/SaladinIART</a>
            </li>
          </ul>
        </article>
        <div className="prompt-grid">
          {contactPrompts.map((prompt) => (
            <article className="panel" key={prompt.title}>
              <h3>{prompt.title}</h3>
              <p>{prompt.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function PageHero({ title, text, action, onAction, href }) {
  const content = href ? (
    <a className="button button-primary" href={href}>
      {action}
    </a>
  ) : (
    <button className="button button-primary" type="button" onClick={onAction}>
      {action}
    </button>
  );

  return (
    <section className="page-hero">
      <h1>{title}</h1>
      <p>{text}</p>
      {content}
    </section>
  );
}

function SectionIntro({ label, title, text }) {
  return (
    <div className="section-intro">
      <span>{label}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function PathCard({ title, text, action, onClick }) {
  return (
    <article className="path-card">
      <h2>{title}</h2>
      <p>{text}</p>
      <button className="text-button" type="button" onClick={onClick}>
        {action}
      </button>
    </article>
  );
}

function ProofMini({ asset }) {
  return (
    <article className="panel proof-mini">
      <span>{asset.label}</span>
      <h3>{asset.title}</h3>
      <p>{asset.summary}</p>
    </article>
  );
}

export default App;
