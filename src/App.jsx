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
  labs,
  method,
  nav,
  projects,
  projectStatusLabels,
} from "./data";
import { getNoteBySlug, noteEvidenceLabels, notes, notesSection } from "./notes";

// The Notes link appears only when at least one note is visible (published, or a draft in dev).
const navItems = notes.length
  ? [nav[0], { label: "Notes", href: "/notes" }, ...nav.slice(1)]
  : nav;

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
const defaultSocialImage = `${siteUrl}/images/projects/nexus-decision-board.png`;

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
    const noteSlug = pathname.startsWith("/notes/") ? pathname.split("/")[2] : null;
    const note = noteSlug ? getNoteBySlug(noteSlug) : null;
    const isProjectsIndex = pathname === "/projects";
    const isLabs = pathname.replace(/\/$/, "") === "/labs";
    const isNotesIndex = pathname.replace(/\/$/, "") === "/notes" && notes.length > 0;
    const isHome = pathname === "/";

    const title = project
      ? `${project.title} | Muhamad Solehuddin`
      : note
        ? `${note.number}: ${note.title} | Salbotics Engineering Notes`
        : isNotesIndex
          ? "Engineering Notes | Salbotics Engineering Lab"
          : isProjectsIndex
            ? "Engineering Projects | Muhamad Solehuddin"
            : isLabs
              ? "Open Labs | Salbotics Engineering Lab"
              : isHome
                ? "Muhamad Solehuddin | Robotics & Automation Systems Engineer"
                : "Page Not Found | Salbotics Engineering Lab";
    const description = project
      ? project.summary
      : note
        ? note.shortAnswer
        : isNotesIndex
          ? notesSection.sub
          : isProjectsIndex
            ? "Selected engineering projects by Muhamad Solehuddin: a public PLC troubleshooting lab, OPC UA and IIoT condition assessment, signal and routing studies, PLC and vision verification, AI-assisted engineering workflow, and a deployed factory energy system."
            : isLabs
              ? labs.intro
              : isHome
                ? "Muhamad Solehuddin, robotics and automation systems engineer: finding the real cause when machines stop, with projects and free open labs for troubleshooting, PLCs and industrial data."
                : "The requested Salbotics Engineering Lab portfolio page could not be found.";
    const canonicalPath = isHome ? "/" : pathname.replace(/\/$/, "");
    const canonical = `${siteUrl}${canonicalPath}`;
    const socialImage = note
      ? new URL(note.figure.src, siteUrl).href
      : project?.slug === "nexus-iiot"
        ? `${siteUrl}/images/projects/nexus-decision-board.png`
        : defaultSocialImage;
    const indexable =
      isHome || isProjectsIndex || isLabs || project || isNotesIndex || (note && note.published);

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", socialImage);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", socialImage);
    setMeta('meta[name="robots"]', "content", indexable ? "index, follow" : "noindex, nofollow");

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
            {navItems.map((item) => (
              <li key={item.href}>
                {/^https?:/.test(item.href) ? (
                  // Separate static site served from the same domain (not an app route)
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <Link
                    to={item.href}
                    aria-current={
                      ["/projects", "/notes", "/labs"].includes(item.href) &&
                      pathname.startsWith(item.href)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                  </Link>
                )}
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

function ProjectVisual({ project }) {
  if (project.sceneKey && scenes[project.sceneKey]) return <Scene sceneKey={project.sceneKey} />;
  const image = project.images[0];
  if (!image) return null;
  return (
    <figure className="scene project-shot">
      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
    </figure>
  );
}

function ProjectPreview({ project, index = 0 }) {
  return (
    <article className={`work-row ${index % 2 ? "rev" : ""}`}>
      <ProjectVisual project={project} />
      <div className="work-copy">
        <div className="svc-head">
          <h3>{project.title}</h3>
          <span className={`status-badge status-${project.status}`}>
            {projectStatusLabels[project.status]}
          </span>
        </div>
        <span className="stack">{project.engineeringAreas.join(" · ")}</span>
        <p>{project.summary}</p>
        <dl className="odr">
          <div>
            <dt>Objective</dt>
            <dd>{project.objective ?? project.problem}</dd>
          </div>
          <div>
            <dt>{project.decisions ? "Key decision" : "My role"}</dt>
            <dd>{project.decisions ? project.decisions[0] : project.contribution[0]}</dd>
          </div>
          <div>
            <dt>Result</dt>
            <dd>{project.result}</dd>
          </div>
        </dl>
        <p className="boundary">
          <strong>Evidence boundary:</strong> {project.boundary ?? project.evidence[0]}
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
        <h2>Selected projects: objective, decision, result.</h2>
        <p className="sec-intro">
          Each project states the question, the decision I made, and what the evidence shows —
          labelled by its actual maturity, with simulated work kept visibly distinct.
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

function LabCards() {
  return (
    <ul className="lab-list">
      {labs.items.map((lab) => (
        <li className="lab-card" key={lab.slug}>
          <span className="note-card-head">
            <strong className="note-card-title">{lab.name}</strong>
            {lab.tag && <span className="lab-tag">{lab.tag}</span>}
          </span>
          <span className="note-card-answer">{lab.what}</span>
          <span className="lab-who">
            <strong>For:</strong> {lab.who}
          </span>
          <span className="work-links">
            <a href={lab.href} rel="noopener noreferrer">
              {lab.cta} →
            </a>
            {lab.caseStudy && <Link to={lab.caseStudy}>How I built it →</Link>}
          </span>
        </li>
      ))}
    </ul>
  );
}

function OpenLabsStrip() {
  return (
    <section id="labs">
      <div className="wrap">
        <p className="sec-label">{labs.label}</p>
        <h2>{labs.title}</h2>
        <p className="sec-intro">{labs.intro}</p>
        <LabCards />
      </div>
    </section>
  );
}

function LabsPage() {
  return (
    <div id="top">
      <div className="wrap hero">
        <p className="kicker">Salbotics open labs</p>
        <h1>{labs.title}</h1>
        <p className="sub">{labs.intro}</p>
      </div>
      <section aria-labelledby="labs-list-title">
        <div className="wrap">
          <p className="sec-label">all labs</p>
          <h2 id="labs-list-title">Pick one and start.</h2>
          <LabCards />
        </div>
      </section>
    </div>
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
      <OpenLabsStrip />
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
        <h1>Selected projects: objective, decision, result.</h1>
        <p className="sub">
          An open troubleshooting lab, four engineering studies and one field deployment. Each is
          labelled by what it really is: deployed, demonstrated, simulated or working practice.
        </p>
        <div className="cta-row">
          <Link className="btn btn-ghost" to="/">
            Back to portfolio
          </Link>
        </div>
      </div>
      <section aria-labelledby="project-index-title">
        <div className="wrap">
          <p className="sec-label">selected projects</p>
          <h2 id="project-index-title">From equipment signals to verified engineering decisions.</h2>
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
        {project.sceneKey && <Scene sceneKey={project.sceneKey} />}
      </div>

      <EvidenceGallery images={project.images} projectTitle={project.title} />

      <CaseSection label="objective" title="What I set out to answer">
        <p>{project.objective ?? project.problem}</p>
      </CaseSection>

      {project.decisions ? (
        <CaseSection label="decisions" title="Decisions I made">
          <CaseList items={project.decisions} />
        </CaseSection>
      ) : (
        <>
          <CaseSection label="constraints" title="Boundaries that shaped the work">
            <CaseList items={project.constraints} />
          </CaseSection>
          <CaseSection label="contribution" title="What I designed and built">
            <CaseList items={project.contribution} />
          </CaseSection>
        </>
      )}

      <CaseSection label="result" title="Result">
        <p className="result-lead">{project.result}</p>
        {project.resultPoints && <CaseList items={project.resultPoints} />}
      </CaseSection>

      <CaseSection label="evidence" title="Evidence you can inspect">
        <CaseList items={project.evidence} />
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

      {project.aiRole && (
        <CaseSection label="process" title="How AI was used">
          <p>{project.aiRole}</p>
          <CaseList items={project.contribution} />
        </CaseSection>
      )}

      {project.architecture && (
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
      )}

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
      </CaseSection>
    </article>
  );
}

function NoteMeta({ note }) {
  return (
    <dl className="note-meta">
      <div>
        <dt>Note</dt>
        <dd>
          {note.number} · {note.version} · {note.date}
        </dd>
      </div>
      <div>
        <dt>Project</dt>
        <dd>{note.project}</dd>
      </div>
      <div>
        <dt>Evidence</dt>
        <dd>
          <span className={`evidence-chip evidence-${note.evidence}`}>
            {noteEvidenceLabels[note.evidence]}
          </span>
        </dd>
      </div>
      <div>
        <dt>Status</dt>
        <dd>{note.buildStatus}</dd>
      </div>
    </dl>
  );
}

function DraftBanner({ note }) {
  if (note.published) return null;
  return (
    <aside className="draft-banner" role="note">
      <strong>Draft, not published.</strong> Visible only in local preview until it passes review and
      is approved.
    </aside>
  );
}

function NotesIndexPage() {
  if (notes.length === 0) return <NotFoundPage />;

  return (
    <div id="top">
      <div className="wrap hero">
        <p className="kicker">{notesSection.kicker}</p>
        <h1>{notesSection.title}</h1>
        <p className="sub">{notesSection.sub}</p>
      </div>
      <section aria-labelledby="notes-index-title">
        <div className="wrap">
          <p className="sec-label">all notes</p>
          <h2 id="notes-index-title">Latest first</h2>
          <ul className="note-list">
            {notes.map((note) => (
              <li key={note.slug}>
                <Link className="note-card" to={`/notes/${note.slug}`}>
                  <span className="note-card-head">
                    <span className="note-num">{note.number}</span>
                    <span className={`evidence-chip evidence-${note.evidence}`}>
                      {noteEvidenceLabels[note.evidence]}
                    </span>
                    {!note.published && <span className="draft-chip">Draft</span>}
                  </span>
                  <strong className="note-card-title">{note.title}</strong>
                  <span className="note-card-answer">{note.shortAnswer}</span>
                  <span className="note-card-foot">
                    {note.project} · {note.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="note-licence">
            <a href={notesSection.licenceHref} rel="noopener noreferrer">
              CC BY 4.0
            </a>{" "}
            · {notesSection.licence}
          </p>
        </div>
      </section>
    </div>
  );
}

function NotePage() {
  const { slug } = useParams();
  const note = getNoteBySlug(slug);

  if (!note) return <NotFoundPage title="Note not found" />;

  return (
    <article id="top" className="note">
      <div className="wrap hero">
        <DraftBanner note={note} />
        <p className="kicker">
          {note.number} · {note.tags.join(" · ")}
        </p>
        <h1>{note.title}</h1>
        <NoteMeta note={note} />
        <aside className="case-notice" aria-label="Short answer">
          <strong>Short answer</strong>
          <p>{note.shortAnswer}</p>
        </aside>
        <div className="cta-row">
          <Link className="btn btn-ghost" to="/notes">
            All notes
          </Link>
        </div>
      </div>

      <CaseSection label="the question" title="What I set out to check">
        {note.question.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </CaseSection>

      <section aria-label="Figure">
        <div className="wrap">
          <figure className="evidence-figure note-figure">
            <a href={note.figure.src} target="_blank" rel="noopener noreferrer">
              <img src={note.figure.src} alt={note.figure.alt} loading="eager" decoding="async" />
            </a>
            <figcaption>{note.figure.caption}</figcaption>
          </figure>
        </div>
      </section>

      <CaseSection label="method" title="How I checked it">
        <CaseList items={note.method} />
      </CaseSection>

      <CaseSection label="result" title="Result">
        <div className="note-table-wrap">
          <table className="note-table">
            <thead>
              <tr>
                <th scope="col">Quantity</th>
                <th scope="col">Value</th>
                <th scope="col">Evidence</th>
              </tr>
            </thead>
            <tbody>
              {note.results.map((row) => (
                <tr key={row.quantity}>
                  <th scope="row">{row.quantity}</th>
                  <td>{row.value}</td>
                  <td>{row.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {note.meaning.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </CaseSection>

      <CaseSection label="decision" title="What I changed because of it">
        <CaseList items={note.changes} />
        {note.changesNote && <p>{note.changesNote}</p>}
      </CaseSection>

      <CaseSection label="limitations" title="What could make this wrong">
        <CaseList items={note.limits} />
      </CaseSection>

      <CaseSection label="next test" title="Proposed next measurements">
        {note.nextTestIntro && <p>{note.nextTestIntro}</p>}
        <ol className="list note-steps">
          {note.nextTest.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </CaseSection>

      {note.sources?.length > 0 && (
        <CaseSection label="sources" title="Sources">
          <ul className="list">
            {note.sources.map((source) => (
              <li key={source.label}>
                {source.href ? (
                  <a href={source.href} rel="noopener noreferrer">
                    {source.label}
                  </a>
                ) : (
                  source.label
                )}
                {source.detail && `: ${source.detail}`}
              </li>
            ))}
          </ul>
        </CaseSection>
      )}

      {note.tryIt && (
        <CaseSection label="files" title="Try it yourself">
          <p>{note.tryIt}</p>
        </CaseSection>
      )}

      <CaseSection label="changes" title="Changes to this note">
        <CaseList items={note.changelog} />
        <p className="note-licence">
          <a href={notesSection.licenceHref} rel="noopener noreferrer">
            CC BY 4.0
          </a>{" "}
          · {notesSection.licence}
        </p>
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
          <Route path="/labs" element={<LabsPage />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudyPage />} />
          <Route path="/notes" element={<NotesIndexPage />} />
          <Route path="/notes/:slug" element={<NotePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
