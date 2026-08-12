import Image from "next/image";
import AnchorNavigation from "./anchor-navigation";
import { FeaturedWork } from "./components/featured-work";
import { ImageStudioDemo } from "./components/demos/image-studio-demo";
import { IsabelleProofDemo } from "./components/demos/isabelle-proof-demo";
import { YksFigureExplorer } from "./components/demos/yks-figure-explorer";
import { ProjectArchive } from "./components/project-archive";
import { contactLinks, languages } from "./content";

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

function InstitutionMark({ src }: { src: string }) {
  return (
    <span className="institution-mark" aria-hidden="true">
      <Image src={src} alt="" width={72} height={72} />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <AnchorNavigation />
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <nav className="folio-nav" aria-label="Portfolio navigation">
          <a className="monogram" href="#top" aria-label="Ege Tekin, back to top">ET</a>
          <div>
            <a href="#background">Background</a>
            <a href="#work">Work</a>
            <a href="#project-index">Archive</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="folio" id="main-content" tabIndex={-1}>
        <section className="hero anchor-target" id="top" aria-labelledby="page-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="document-label">Software · Research · Freiburg</p>
              <h1 id="page-title">Ege Tekin</h1>
              <p className="hero-role">Computer scientist building useful software and moving toward medical technology.</p>
              <p className="hero-summary">
                Computer Science student at the University of Freiburg, working student at
                Fraunhofer ISE, and software developer based in Freiburg.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href="#work">View selected work <span aria-hidden="true">↓</span></a>
                <a href={contactLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)">GitHub <ExternalArrow /></a>
                <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile (opens in a new tab)">LinkedIn <ExternalArrow /></a>
              </div>
            </div>

            <div className="hero-portrait-wrap">
              <div className="hero-registration" aria-hidden="true">
                <span>01 · SOFTWARE</span>
                <i />
                <span>02 · RESEARCH</span>
                <i />
                <span>03 · MEDICINE</span>
              </div>
              <figure className="hero-portrait">
                <Image
                  src="/ege-tekin-portrait-large.jpg"
                  alt="Portrait of Ege Tekin in a navy suit"
                  width={480}
                  height={600}
                  priority
                />
                <figcaption><span>Freiburg</span><span>2026</span></figcaption>
              </figure>
            </div>
          </div>

          <div className="credibility-strip" aria-label="Current affiliations">
            <div>
              <InstitutionMark src="/institutions/fraunhofer-ise.png" />
              <span><small>Working student</small><strong>Fraunhofer ISE</strong></span>
            </div>
            <div>
              <InstitutionMark src="/institutions/university-of-freiburg.png" />
              <span><small>B.Sc. Computer Science</small><strong>University of Freiburg</strong></span>
            </div>
            <p><small>Based in</small><strong>Freiburg, Germany</strong></p>
          </div>
        </section>

        <section className="folio-section profile-section" aria-labelledby="profile-title">
          <div className="section-rail">
            <span>01</span>
            <h2 id="profile-title">Profile</h2>
          </div>
          <div className="section-body profile-body">
            <p className="profile-statement">
              I like work that makes a complicated system feel direct.
            </p>
            <div className="profile-columns">
              <p>
                My projects range from formal-methods tooling and frontend products to browser
                games and data-driven research. I care about clear models, durable code, and
                interfaces that explain themselves.
              </p>
              <dl className="coordinates">
                <div><dt>Now</dt><dd>Software engineering &amp; photovoltaic R&amp;D</dd></div>
                <div><dt>Next</dt><dd>Medicine · starts Sep 2026</dd></div>
                <div><dt>Direction</dt><dd>Medical technology</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="folio-section experience-section anchor-target" id="background" aria-labelledby="experience-title">
          <div className="section-rail">
            <span>02</span>
            <h2 id="experience-title">Experience</h2>
          </div>
          <div className="section-body">
            <article className="institution-entry">
              <header>
                <div className="institution-name">
                  <InstitutionMark src="/institutions/fraunhofer-ise.png" />
                  <div>
                    <p>Applied photovoltaic research</p>
                    <h3>Fraunhofer ISE</h3>
                    <strong>Working Student · Interconnection &amp; Encapsulation</strong>
                  </div>
                </div>
                <p className="institution-meta">
                  <span>Freiburg, Germany</span>
                  <span><time dateTime="2026-04">Apr 2026</time> – <time dateTime="2027-04">Apr 2027</time></span>
                </p>
              </header>
              <div className="entry-grid">
                <p className="entry-lead">
                  Supporting applied R&amp;D where laboratory evidence, material behaviour, and
                  engineering documentation meet.
                </p>
                <ul className="entry-points">
                  <li>Hands-on peel testing and structured experimental work</li>
                  <li>Result documentation and evaluation within the team workflow</li>
                  <li>Work across laboratory and software-supported engineering processes</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="folio-section education-section" aria-labelledby="education-title">
          <div className="section-rail">
            <span>03</span>
            <h2 id="education-title">Education</h2>
          </div>
          <div className="section-body education-timeline">
            <article className="education-entry">
              <InstitutionMark src="/institutions/university-of-freiburg.png" />
              <div>
                <p>Freiburg, Germany · <time dateTime="2023-10">Oct 2023</time> – <time dateTime="2026-09">Sep 2026</time></p>
                <h3>University of Freiburg</h3>
                <strong>B.Sc. Computer Science (Informatik)</strong>
                <span>Software engineering · Algorithms · Formal methods · Computer systems</span>
              </div>
            </article>
            <div className="education-bridge" aria-hidden="true"><span>Freiburg</span><i /><span>Antalya</span></div>
            <article className="education-entry">
              <InstitutionMark src="/institutions/akdeniz-university.png" />
              <div>
                <p>Antalya, Türkiye · <time dateTime="2026-09">Sep 2026</time></p>
                <h3>Akdeniz University</h3>
                <strong>Medicine · Admitted</strong>
                <span>Ranked 5,493rd nationally in Türkiye&apos;s university entrance examination</span>
              </div>
            </article>
          </div>
        </section>

        <section className="folio-section work-section anchor-target" id="work" aria-labelledby="work-title">
          <div className="section-rail">
            <span>04</span>
            <h2 id="work-title">Selected work</h2>
          </div>
          <div className="section-body selected-work">
            <FeaturedWork />
          </div>
        </section>

        <section className="folio-section lab-section" aria-labelledby="lab-title">
          <div className="section-rail">
            <span>05</span>
            <h2 id="lab-title">Research &amp; experiments</h2>
          </div>
          <div className="section-body lab-body">
            <article className="lab-feature research-feature">
              <header>
                <p>Independent research · Feb 2026</p>
                <h3>YKS Score Volatility</h3>
                <span>One consistent viewing field for three published figures.</span>
              </header>
              <YksFigureExplorer />
              <a className="lab-link" href="/ege-tekin-yks-score-volatility.pdf">Read the paper <span aria-hidden="true">→</span></a>
            </article>

            <article className="lab-feature studio-feature">
              <header>
                <p>Product experiment · Aug 2026</p>
                <h3>Ege Image Studio</h3>
                <span>A simulated reference-to-output workflow; the review starts intentionally empty.</span>
              </header>
              <ImageStudioDemo />
              <a className="lab-link" href="https://github.com/wh1tebrun/ege-image-studio" target="_blank" rel="noreferrer" aria-label="Ege Image Studio source (opens in a new tab)">Source <ExternalArrow /></a>
            </article>

            <article className="lab-feature proof-feature">
              <header>
                <p>Formal verification · Jul–Aug 2026</p>
                <h3>Regex-to-NFA Verification</h3>
                <span>A machine-checked Isabelle/HOL proof of language correctness for the Thompson core.</span>
              </header>
              <IsabelleProofDemo />
              <div className="proof-summary">
                <p>
                  The development formalizes regex and epsilon-NFA semantics, then proves
                  compositional language equivalence for epsilon, characters, concatenation,
                  union, and Kleene star. Its scope is deliberately precise: it verifies the
                  mathematical Thompson construction, not the Python implementation or the full
                  AIGER pipeline.
                </p>
                <dl>
                  <div><dt>Role</dt><dd>Formalization, proof architecture &amp; documentation</dd></div>
                  <div><dt>Stack</dt><dd>Isabelle/HOL · Isar · Automata · Formal semantics</dd></div>
                </dl>
              </div>
              <a
                className="lab-link"
                href="https://gitlab.uni-freiburg.de/et130/regex-to-nfa-isabelle"
                target="_blank"
                rel="noreferrer"
                aria-label="Private University of Freiburg GitLab repository for Regex-to-NFA Verification (opens in a new tab)"
              >
                University GitLab · access required <ExternalArrow />
              </a>
            </article>
          </div>
        </section>

        <section className="folio-section archive-section anchor-target" id="project-index" aria-labelledby="archive-title">
          <div className="section-rail">
            <span>06</span>
            <h2 id="archive-title">Project archive</h2>
          </div>
          <div className="section-body">
            <div className="archive-intro">
              <p>A chronological index of games, tools, websites, experiments, and coursework.</p>
              <span>Live buttons appear only where a working deployment is verified.</span>
            </div>
            <ProjectArchive />
          </div>
        </section>

        <section className="folio-section capabilities-section" aria-labelledby="capabilities-title">
          <div className="section-rail">
            <span>07</span>
            <h2 id="capabilities-title">Capabilities</h2>
          </div>
          <div className="section-body capability-grid">
            <article data-mark="{}"><h3>Web &amp; product</h3><p>TypeScript, React, Next.js, Vite, testing, responsive interfaces</p></article>
            <article data-mark="[]"><h3>Research &amp; systems</h3><p>Python, AIGER, automata, SAT workflows, data analysis, C++20</p></article>
            <article data-mark="+"><h3>Interactive software</h3><p>C#, MonoGame, Unity, Canvas, Three.js, deterministic simulation</p></article>
            <article data-mark="Aa"><h3>Languages</h3><p>{languages.map(([language, level]) => `${language} (${level})`).join(" · ")}</p></article>
          </div>
        </section>

        <section className="folio-section contact-section anchor-target" id="contact" aria-labelledby="contact-title">
          <div className="section-rail">
            <span>08</span>
            <h2 id="contact-title">Contact</h2>
          </div>
          <div className="section-body contact-body">
            <div>
              <p className="contact-kicker">Have a useful problem?</p>
              <h3>Let&apos;s build something people enjoy using.</h3>
              <p>Open to software engineering opportunities, freelance products, and technical collaborations.</p>
            </div>
            <address>
              <a className="email-link" href={contactLinks.email}>ege.tekin@web.de <span aria-hidden="true">→</span></a>
              <a href={contactLinks.github} target="_blank" rel="noreferrer">GitHub <ExternalArrow /></a>
              <a href={contactLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalArrow /></a>
            </address>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Ege Tekin · Freiburg, Germany</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  );
}
