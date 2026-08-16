import { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from "react-router";
import logoMark from "../images/brand/salbotics-logo-2026-05-10/optimized/salbotics-monogram.png";
import { scenes } from "./scenes";
import {
  about,
  capabilities,
  contact,
  contactSection,
  footer,
  getProjectBySlug,
  hero,
  method,
  nav,
  projects,
  projectStatusLabels,
} from "./data";

function Scene({ sceneKey }) {
  const html = scenes[sceneKey];
  if (!html) return null;
  return <div className="scene-mount" dangerouslySetInnerHTML={{ __html: html }} />;
}

function SiteLink({ href, children, ...props }) {
  const useAnchor = /^(https?:|mailto:)/.test(href) || href.endsWith(".pdf");
  if (useAnchor) {
    return (
      <a href={href} rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}

function ScrollToPage() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return null;
}

const siteUrl = "https://salbotics.uk";
const defaultSocialImage = `${siteUrl}/images/projects/asset-vision-dashboard.png`;

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const slug = pathname.startsWith("/projects/") ? pathname.split("/")[2] : null;
    const project = slug ? getProjectBySlug(slug) : null;
    const isProjectsIndex = pathname === "/projects";
    const isHome = pathname === "/";

    const title = project
      ? `${project.title} | Muhamad Solehuddin`
      : isProjectsIndex
        ? "Engineering Projects | Muhamad Solehuddin"
        : isHome
          ? "Muhamad Solehuddin | Manufacturing Automation Engineer"
          : "Page Not Found | Salbotics Engineering Lab";
    const description = project
      ? project.summary
      : isProjectsIndex
        ? "Explore deployed systems, validated demonstrations, prototypes, engineering concepts, and private work in progress across manufacturing automation."
        : isHome
          ? "Muhamad Solehuddin's manufacturing automation engineering portfolio: practical work in process improvement, IIoT, MES, machine vision, robotics, and industrial software."
          : "The requested Salbotics Engineering Lab portfolio page could not be found.";
    const canonicalPath = isHome ? "/" : pathname.replace(/\/$/, "");
    const canonical = `${siteUrl}${canonicalPath}`;
    const socialImage =
      project?.slug === "nexus-iiot"
        ? `${siteUrl}/images/projects/nexus-decision-board.png`
        : project?.slug === "asset-vision"
          ? `${siteUrl}/images/projects/asset-vision-dashboard.png`
          : defaultSocialImage;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", socialImage);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", socialImage);
    setMeta('meta[name="robots"]', "content", isHome || isProjectsIndex || project ? "index, follow" : "noindex, nofollow");

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);
  }, [pathname]);

  return null;
}

function Header() {
  const { pathname } = useLocation();

  return (
    <header>
      <div className="wrap topbar">
        <Link className="brand" to="/" aria-label="Salbotics engineering portfolio, home">
          <img src={logoMark} width="80" height="80" alt="" />
          <span className="brand-copy">
            <strong>Salbotics</strong>
            <small>Engineering Lab</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  aria-current={
                    item.href === "/projects" && pathname.startsWith("/projects")
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="wrap hero">
      <p className="kicker">{hero.kicker}</p>
      <h1>{hero.title}</h1>
      <p className="sub">{hero.sub}</p>
      <div className="cta-row">
        {hero.ctas.map((cta) => (
          <SiteLink
            key={cta.label}
            className={`btn ${cta.variant === "primary" ? "btn-primary" : "btn-ghost"}`}
            href={cta.href}
            download={cta.download || undefined}
          >
            {cta.label}
          </SiteLink>
        ))}
      </div>
      <Scene sceneKey={hero.sceneKey} />
    </div>
  );
}

function ProjectPreview({ project, index = 0 }) {
  return (
    <article className={`work-row ${index % 2 ? "rev" : ""}`}>
      <Scene sceneKey={project.sceneKey} />
      <div className="work-copy">
        <div className="svc-head">
          <h3>{project.title}</h3>
          <span className={`status-badge status-${project.status}`}>
            {projectStatusLabels[project.status]}
          </span>
        </div>
        <span className="stack">{project.engineeringAreas.join(" · ")}</span>
        <p>{project.summary}</p>
        <p>
          <strong>Evidence boundary:</strong> {project.evidence[0]}
        </p>
        <div className="work-links">
          <Link to={`/projects/${project.slug}`}>View case study →</Link>
        </div>
      </div>
    </article>
  );
}

function ProjectsPreview() {
  return (
    <section id="projects">
      <div className="wrap">
        <p className="sec-label">selected engineering work</p>
        <h2>Projects across the manufacturing stack.</h2>
        <p className="sec-intro">
          Each project is labelled by its actual maturity and separates working evidence from
          assumptions and future work.
        </p>
        {projects.map((project, index) => (
          <ProjectPreview project={project} index={index} key={project.slug} />
        ))}
        <div className="cta-row">
          <Link className="btn btn-primary" to="/projects">
            Open projects index
          </Link>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities">
      <div className="wrap">
        <p className="sec-label">{capabilities.label}</p>
        <h2>{capabilities.title}</h2>
        <p className="sec-intro">{capabilities.intro}</p>
        <div className="svc">
          {capabilities.areas.map((area) => (
            <div className="svc-row" key={area.title}>
              <div className="svc-head">
                <h3>{area.title}</h3>
              </div>
              <p className="svc-who">{area.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="method">
      <div className="wrap">
        <p className="sec-label">{method.label}</p>
        <h2>{method.title}</h2>
        <p className="sec-intro">{method.intro}</p>
        <div className="principles">
          {method.steps.map((step, index) => (
            <div className="principle" key={step.title}>
              <span className="idx">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <p className="sec-label">{about.label}</p>
        <h2>{about.title}</h2>
        <div className="about-grid">
          <div className="about-body">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="readout" role="list" aria-label="Engineering profile">
            {about.readout.map((row) => (
              <div role="listitem" key={row.k}>
                <span className="k">{row.k}</span>
                <span className="v">{row.v}</span>
                <span className="d">{row.d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-band">
          <p className="sec-label">{contactSection.label}</p>
          <h2>{contactSection.title}</h2>
          <p className="sub">{contactSection.sub}</p>
          <div className="contact-rows">
            {contactSection.channels.map((channel) => (
              <div className="crow" key={channel.k}>
                <span className="k">{channel.k}</span>
                <a href={channel.href} rel="noopener noreferrer">
                  {channel.label}
                </a>
              </div>
            ))}
          </div>
          <p className="trust-line">
            <strong>{contact.identity}</strong>
            <span> · Personal engineering portfolio</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div id="top">
      <Hero />
      <ProjectsPreview />
      <Capabilities />
      <Method />
      <About />
      <Contact />
    </div>
  );
}

function ProjectsIndexPage() {
  return (
    <div id="top">
      <div className="wrap hero">
        <p className="kicker">Engineering project index</p>
        <h1>Evidence, architecture, and limitations in one place.</h1>
        <p className="sub">
          Deployed work, validated demonstrations, prototypes, concepts, and work in progress are
          kept visibly distinct.
        </p>
        <div className="cta-row">
          <Link className="btn btn-ghost" to="/">
            Back to portfolio
          </Link>
        </div>
      </div>
      <section aria-labelledby="project-index-title">
        <div className="wrap">
          <p className="sec-label">all projects</p>
          <h2 id="project-index-title">Manufacturing systems from equipment to information.</h2>
          {projects.map((project, index) => (
            <ProjectPreview project={project} index={index} key={project.slug} />
          ))}
        </div>
      </section>
    </div>
  );
}

function CaseList({ items }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function CaseSection({ label, title, children }) {
  return (
    <section>
      <div className="wrap">
        <p className="sec-label">{label}</p>
        <h2>{title}</h2>
        <div className="sec-intro">{children}</div>
      </div>
    </section>
  );
}

function EvidenceGallery({ images, projectTitle }) {
  if (images.length === 0) return null;

  return (
    <section aria-labelledby="project-evidence-gallery">
      <div className="wrap">
        <p className="sec-label">visual evidence</p>
        <h2 id="project-evidence-gallery">Screenshots and system views</h2>
        <p className="sec-intro">
          Selected evidence from {projectTitle}. Captions distinguish working output from
          architecture and synthetic scenarios.
        </p>
        <div className="evidence-gallery">
          {images.map((image) => (
            <figure className="evidence-figure" key={image.src}>
              <a href={image.src} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={image.alt} loading="eager" decoding="sync" />
              </a>
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCaseStudyPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <NotFoundPage title="Project not found" />;
  }

  return (
    <article id="top">
      <div className="wrap hero">
        <p className="kicker">
          {projectStatusLabels[project.status]} · {project.engineeringAreas.join(" · ")}
        </p>
        <h1>{project.title}</h1>
        <p className="sub">{project.summary}</p>
        <div className="cta-row">
          <Link className="btn btn-ghost" to="/projects">
            Back to projects
          </Link>
        </div>
        {project.notice && (
          <aside className="case-notice" aria-label="Project evidence boundary">
            <strong>Evidence boundary</strong>
            <p>{project.notice}</p>
          </aside>
        )}
        <Scene sceneKey={project.sceneKey} />
      </div>

      <EvidenceGallery images={project.images} projectTitle={project.title} />

      <CaseSection label="problem" title="The engineering question">
        <p>{project.problem}</p>
      </CaseSection>

      <CaseSection label="constraints" title="Boundaries that shaped the work">
        <CaseList items={project.constraints} />
      </CaseSection>

      <CaseSection label="contribution" title="What I designed and built">
        <CaseList items={project.contribution} />
      </CaseSection>

      <CaseSection label="architecture" title="System flow">
        <div className="principles">
          {project.architecture.map((item, index) => (
            <div className="principle" key={item}>
              <span className="idx">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item}</h3>
              </div>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection label="evidence" title="What can be verified">
        <CaseList items={project.evidence} />
      </CaseSection>

      <CaseSection label="limitations" title="What this project does not claim">
        <CaseList items={project.limitations} />
      </CaseSection>

      <CaseSection label="technologies" title="Tools and engineering areas">
        <div className="cta-row">
          {project.technologies.map((technology) => (
            <span className="tech-chip" key={technology}>
              {technology}
            </span>
          ))}
        </div>
        {project.links.length > 0 && (
          <div className="work-links">
            {project.links.map((link) => (
              <a href={link.href} rel="noopener noreferrer" key={link.href}>
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </CaseSection>
    </article>
  );
}

function NotFoundPage({ title = "Page not found" }) {
  return (
    <div className="wrap hero" id="top">
      <p className="kicker">404 · safe route</p>
      <h1>{title}.</h1>
      <p className="sub">
        The requested portfolio page does not exist. Use the project index to continue browsing
        verified work.
      </p>
      <div className="cta-row">
        <Link className="btn btn-primary" to="/projects">
          Open project index
        </Link>
        <Link className="btn btn-ghost" to="/">
          Return home
        </Link>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <img src={logoMark} width="80" height="80" alt="Salbotics monogram" />
        <span>{footer.name}</span>
        <span className="right">{footer.right}</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RouteMetadata />
      <ScrollToPage />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsIndexPage />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
