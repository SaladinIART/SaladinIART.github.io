import logoHorizontal from "../images/brand/salbotics-logo-2026-05-10/optimized/salbotics-horizontal.png";
import logoMark from "../images/brand/salbotics-logo-2026-05-10/optimized/salbotics-monogram.png";
import { scenes } from "./scenes";
import {
  about,
  approach,
  contactSection,
  footer,
  hero,
  nav,
  services,
  work,
} from "./data";

// Injects a verbatim SVG vignette. display:contents on the mount keeps the inner
// <figure class="scene"> as a direct grid child of its row (see styles.css).
function Scene({ sceneKey }) {
  const html = scenes[sceneKey];
  if (!html) return null;
  return <div className="scene-mount" dangerouslySetInnerHTML={{ __html: html }} />;
}

// Renders a paragraph, bolding any emphasis phrase found within it.
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

function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <p className="sec-label">{services.label}</p>
        <h2>{services.title}</h2>
        <p className="sec-intro">{services.intro}</p>

        <div className="svc">
          {services.offers.map((offer) => (
            <div className="svc-row" key={offer.title}>
              <div>
                <div className="svc-head">
                  <h3>{offer.title}</h3>
                  <span className="svc-rate">{offer.rate}</span>
                </div>
                <p className="svc-who">
                  <strong>For</strong> {offer.who}
                </p>
                <p className="svc-out">
                  <strong>You get</strong> {offer.out}
                </p>
              </div>
              <ul className="svc-inc">
                {offer.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="svc-note">{services.note}</p>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <p className="sec-label">{work.label}</p>
        <h2>{work.title}</h2>
        <p className="sec-intro">{work.intro}</p>

        {work.projects.map((project) => (
          <div className={`work-row${project.reverse ? " rev" : ""}`} key={project.title}>
            <Scene sceneKey={project.sceneKey} />
            <div className="work-copy">
              <h3>{project.title}</h3>
              <span className="stack">{project.stack}</span>
              <p>{project.body}</p>
              <div className="work-links">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} rel="noopener">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}

        <p style={{ marginTop: "3rem", color: "var(--ink-soft)", maxWidth: "62ch" }}>
          The full body of work lives at{" "}
          <a href="https://github.com/SaladinIART" rel="noopener">
            github.com/SaladinIART
          </a>
          . These projects show system thinking, not finished product claims. SOL, the
          Salbotics Operations Layer, is a planned direction for future product work and is
          not offered as a finished product today.
        </p>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach">
      <div className="wrap">
        <p className="sec-label">{approach.label}</p>
        <h2>{approach.title}</h2>
        <div className="principles">
          {approach.principles.map((p) => (
            <div className="principle" key={p.idx}>
              <span className="idx">{p.idx}</span>
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
        <Services />
        <Work />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
