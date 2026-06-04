import logoHorizontal from "../images/brand/salbotics-logo-2026-05-10/optimized/salbotics-horizontal.png";
import logoMark from "../images/brand/salbotics-logo-2026-05-10/optimized/salbotics-monogram.png";
import { scenes } from "./scenes";
import {
  about,
  approach,
  build,
  consult,
  contact,
  contactSection,
  footer,
  hero,
  how,
  lab,
  nav,
} from "./data";

// Injects a verbatim SVG vignette. display:contents on the mount keeps the inner
// <figure class="scene"> as a direct grid/flow child (see styles.css).
function Scene({ sceneKey }) {
  const html = scenes[sceneKey];
  if (!html) return null;
  return <div className="scene-mount" dangerouslySetInnerHTML={{ __html: html }} />;
}

function AboutParagraph({ text, emphasis }) {
  const phrase = emphasis.find((e) => text.includes(e));
  if (!phrase) return <p>{text}</p>;
  const [before, after] = text.split(phrase);
  return (
    <p>
      {before}
      <strong>{phrase}</strong>
      {after}
    </p>
  );
}

function Header() {
  return (
    <header>
      <div className="wrap topbar">
        <a className="brand" href="#top" aria-label="Salbotics Solutions, top of page">
          <img src={logoHorizontal} width="520" height="130" alt="Salbotics Solutions" />
        </a>
        <nav aria-label="Page sections">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
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
          <a
            key={cta.label}
            className={`btn ${cta.variant === "primary" ? "btn-primary" : "btn-ghost"}`}
            href={cta.href}
          >
            {cta.label}
          </a>
        ))}
      </div>
      <Scene sceneKey={hero.sceneKey} />
    </div>
  );
}

// #how — gallery of plain-language explainer scenes (primary first).
// To ship just one later, drop the others from `how.scenes` in data.js.
function HowItWorks() {
  const ordered = [...how.scenes].sort((a, b) =>
    a.key === how.primary ? -1 : b.key === how.primary ? 1 : 0,
  );
  return (
    <section id="how">
      <div className="wrap">
        <p className="sec-label">{how.label}</p>
        <h2>{how.title}</h2>
        <p className="sec-intro">{how.intro}</p>
        <div className="explainers">
          {ordered.map((s) => (
            <figure className="explainer" key={s.key}>
              <Scene sceneKey={s.key} />
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Consult() {
  return (
    <section id="consult">
      <div className="wrap">
        <p className="sec-label">{consult.label}</p>
        <h2>{consult.title}</h2>
        <p className="sec-intro">{consult.intro}</p>

        <div className="consult-grid">
          <article className="offer-card offer-free">
            <span className="offer-tag">free</span>
            <h3>{consult.freeCall.title}</h3>
            <ul className="list">
              {consult.freeCall.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="cta-row">
              <a className="btn btn-primary" href={consult.cta.href}>
                {consult.cta.label}
              </a>
              <a className="btn btn-ghost" href={consult.ctaAlt.href}>
                {consult.ctaAlt.label}
              </a>
            </div>
          </article>

          <article className="offer-card offer-roadmap">
            <span className="offer-tag offer-tag-paid">paid roadmap</span>
            <h3>{consult.roadmap.title}</h3>
            <p className="offer-sub">{consult.roadmap.subtitle}</p>
            <ul className="list">
              {consult.roadmap.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        </div>
        <p className="svc-note">{consult.note}</p>

        <div className="principles principles-compact">
          {approach.principles.map((p) => (
            <div className="principle" key={p.title}>
              <div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Build() {
  return (
    <section id="build">
      <div className="wrap">
        <p className="sec-label">{build.label}</p>
        <h2>{build.title}</h2>
        <p className="sec-intro">{build.intro}</p>
        <div className="svc">
          {build.options.map((o) => (
            <div className="svc-row" key={o.title}>
              <div>
                <div className="svc-head">
                  <h3>{o.title}</h3>
                  <span className="svc-rate">{o.timeline}</span>
                </div>
                <p className="svc-who">
                  <strong>For</strong> {o.who}
                </p>
                <p className="svc-out">
                  <strong>You get</strong> {o.out}
                </p>
              </div>
              <p className="svc-pricing">Pricing shared after a free scope call.</p>
            </div>
          ))}
        </div>
        <p className="svc-note">{build.pricingNote}</p>
      </div>
    </section>
  );
}

function Lab() {
  return (
    <section id="lab">
      <div className="wrap">
        <div className="lab-band">
          <p className="sec-label">{lab.label}</p>
          <h2>{lab.title}</h2>
          <p className="sub">{lab.body}</p>
          <a className="btn btn-primary" href={lab.link.href} rel="noopener">
            {lab.link.label}
          </a>
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
            {about.body.map((text, i) => (
              <AboutParagraph key={i} text={text} emphasis={about.emphasis} />
            ))}
            <p className="recruiter-note">
              {about.recruiter.note}{" "}
              <a href={about.recruiter.href} rel="noopener">
                {about.recruiter.linkLabel}
              </a>
            </p>
          </div>
          <div className="readout" role="list" aria-label="Field record figures">
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
          <div className="contact-rows" style={{ maxWidth: "44rem" }}>
            {contactSection.prompts.map((prompt) => (
              <div className="crow" key={prompt.k}>
                <span className="k">{prompt.k}</span>
                <span style={{ color: "var(--ink-soft)" }}>{prompt.text}</span>
              </div>
            ))}
          </div>
          <div className="contact-rows" style={{ marginTop: "1.6rem" }}>
            {contactSection.channels.map((channel) => (
              <div className="crow" key={channel.k}>
                <span className="k">{channel.k}</span>
                <a href={channel.href} rel="noopener">
                  {channel.label}
                </a>
              </div>
            ))}
          </div>
          <p className="trust-line">
            <strong>{contact.identity}</strong>
            <span> · {contact.responseTime}</span>
          </p>
        </div>
      </div>
    </section>
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
    <>
      <Header />
      <main id="top">
        <Hero />
        <HowItWorks />
        <Consult />
        <Build />
        <Lab />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
