const projects = [
  {
    number: "01",
    title: "VitalLoop",
    type: "MedTech · Connected monitoring concept",
    description:
      "A non-diagnostic prototype that turns simulated wearable data into clear timelines, threshold alerts, and structured handoff notes.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "WebSockets"],
    visual: "health",
    featured: true,
  },
  {
    number: "02",
    title: "GridScope",
    type: "Research data · Full-stack concept",
    description:
      "A dashboard concept for exploring measurements, comparing time periods, and turning dense research data into a clear visual story.",
    technologies: ["React", "NestJS", "PostgreSQL", "Recharts"],
    visual: "energy",
  },
  {
    number: "03",
    title: "FocusFlow",
    type: "Web application · Product concept",
    description:
      "A calm project workspace for organizing tasks, tracking progress, and keeping team updates in one understandable place.",
    technologies: ["React", "NestJS", "TypeScript", "WebSockets"],
    visual: "flow",
  },
];

const capabilities = [
  ["01", "Web & App Development", "Responsive websites · Full-stack applications · APIs"],
  ["02", "MVPs & Prototypes", "Focused builds from idea to a working product"],
  ["03", "MedTech & Systems", "Healthcare software · Data tools · HW/SW interfaces"],
];

const languages = [
  ["Turkish", "Native"],
  ["English", "C2"],
  ["German", "C2"],
  ["French", "B1"],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Ege Tekin, back to top">
            <span className="brand-mark">ET</span>
            <span className="brand-copy">
              <strong>Ege Tekin</strong>
              <small>Full-stack · MedTech</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#projects">Work</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a className="nav-contact" href="#contact">
              Contact <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="signal-dot" aria-hidden="true" />
              Full-stack developer · MedTech direction
            </p>
            <h1 id="hero-title">
              I build full-stack products—and explore <em>where technology meets medicine.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m completing a B.Sc. in Computer Science at the University of
              Freiburg, working at Fraunhofer ISE, and beginning Medicine at Akdeniz
              University in September 2026. I build web and app products today while
              working toward the intersection of software and healthcare.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View selected work <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-secondary" href="#about">
                More about me
              </a>
            </div>

            <dl className="hero-facts" aria-label="Profile highlights">
              <div>
                <dt>B.Sc. candidate</dt>
                <dd>University of Freiburg</dd>
              </div>
              <div>
                <dt>Working student</dt>
                <dd>Fraunhofer ISE · Since Apr 2026</dd>
              </div>
              <div>
                <dt>Incoming Medicine</dt>
                <dd>Akdeniz University · Sep 2026</dd>
              </div>
            </dl>
          </div>

          <div className="hero-system" aria-hidden="true">
            <div className="system-orbit orbit-one" />
            <div className="system-orbit orbit-two" />
            <div className="system-card">
              <div className="system-card-top">
                <span>ET / PATH 01</span>
                <span className="system-status">ONLINE</span>
              </div>
              <div className="system-core">
                <span className="core-ring" />
                <span className="core-label">BUILD</span>
              </div>
              <div className="system-path">
                <span>Software</span>
                <i />
                <span>Research</span>
                <i />
                <span>Medicine</span>
              </div>
              <div className="system-meter">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="coordinate coordinate-a">FREIBURG → ANTALYA</div>
            <div className="coordinate coordinate-b">CODE ↔ CARE</div>
          </div>
        </section>

        <div className="profile-strip" aria-label="Profile summary">
          <div className="section-shell strip-inner">
            <span>Full-stack development</span>
            <i aria-hidden="true" />
            <span>Applied research</span>
            <i aria-hidden="true" />
            <span>Medicine 2026</span>
            <i aria-hidden="true" />
            <span>MedTech direction</span>
          </div>
        </div>

        <section className="projects section-shell" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="section-label">01 / Selected work</p>
            <div>
              <h2 id="projects-title">Ideas made tangible.</h2>
              <p>
                Three independent concepts showing the kind of full-stack products I
                want to build. Each will be replaced by a real case study as it is ready.
              </p>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.featured ? "project-featured" : ""}`}
                key={project.title}
              >
                <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
                  <div className="mock-window">
                    <div className="mock-toolbar">
                      <span />
                      <span />
                      <span />
                      <b>{project.number}</b>
                    </div>
                    <div className="mock-interface">
                      <div className="mock-sidebar">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="mock-canvas">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.number} / Independent concept</span>
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-bottom">
                    <ul aria-label={`${project.title} technologies`}>
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    <span className="coming-soon">Details coming soon ↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience" id="experience" aria-labelledby="experience-title">
          <div className="section-shell">
            <div className="section-heading section-heading-light">
              <p className="section-label">02 / Background</p>
              <div>
                <h2 id="experience-title">Computer Science.<br />Research. Medicine.</h2>
                <p>
                  A technical foundation, current experience in applied research, and
                  the next chapter in medicine.
                </p>
              </div>
            </div>

            <div className="timeline">
              <article className="timeline-card">
                <div className="timeline-index">01</div>
                <div className="timeline-main">
                  <p className="timeline-type">Experience</p>
                  <h3>Fraunhofer Institute for Solar Energy Systems ISE</h3>
                  <p>
                    Working in the Interconnection &amp; Encapsulation team, an applied
                    R&amp;D environment focused on photovoltaic module interconnection,
                    encapsulation technologies, and prototypes.
                  </p>
                </div>
                <div className="timeline-detail">
                  <strong>Working Student</strong>
                  <span>Apr 2026 — Apr 2027 contract</span>
                </div>
              </article>

              <article className="timeline-card">
                <div className="timeline-index">02</div>
                <div className="timeline-main">
                  <p className="timeline-type">Education</p>
                  <h3>University of Freiburg</h3>
                  <p>
                    Completing a B.Sc. in Computer Science (Informatik), building a
                    broad foundation across software, algorithms, and computer systems.
                  </p>
                </div>
                <div className="timeline-detail">
                  <strong>B.Sc. Computer Science</strong>
                  <span>Oct 2023 — Sep 2026 expected</span>
                </div>
              </article>

              <article className="timeline-card">
                <div className="timeline-index">03</div>
                <div className="timeline-main">
                  <p className="timeline-type">Next chapter</p>
                  <h3>Akdeniz University</h3>
                  <p>
                    Admitted to Medicine and preparing to begin in September 2026,
                    with a long-term interest in connecting computing, engineering,
                    and healthcare. Ranked 5,493rd nationally in Türkiye&apos;s university
                    entrance examination.
                  </p>
                </div>
                <div className="timeline-detail">
                  <strong>Incoming Medical Student</strong>
                  <span>Academic year 2026/27</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about section-shell" id="about" aria-labelledby="about-title">
          <div className="about-lead">
            <p className="section-label">03 / About me</p>
            <h2 id="about-title">
              Technology, with<br />a wider context.
            </h2>
          </div>
          <div className="about-copy">
            <p className="about-intro">
              Computer Science gives me the technical foundation, Fraunhofer ISE gives
              me experience in applied research, and Medicine will add a clinical
              perspective. My long-term direction is MedTech.
            </p>
            <p>
              Along the way, I enjoy building useful websites, web apps, and product
              prototypes. I value clear interfaces, maintainable software, and practical
              solutions over unnecessary complexity.
            </p>
          </div>

          <div className="capability-list" aria-label="Services and focus areas">
            {capabilities.map(([number, title, detail]) => (
              <div className="capability" key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{detail}</p>
              </div>
            ))}
          </div>

          <div className="language-panel">
            <p className="section-label">Languages</p>
            <dl className="language-list">
              {languages.map(([language, level]) => (
                <div key={language}>
                  <dt>{language}</dt>
                  <dd>{level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-inner">
            <p className="section-label">04 / Contact</p>
            <h2 id="contact-title">Need a focused developer for your next web or app project?</h2>
            <p>
              I&apos;m interested in selected freelance and collaborative projects—from
              focused websites to full-stack product prototypes. Contact links will be
              connected in the next iteration.
            </p>
            <div className="contact-links" aria-label="Contact links coming soon">
              <span>Email <small>ADD LINK</small></span>
              <span>LinkedIn <small>ADD LINK</small></span>
              <span>GitHub <small>ADD LINK</small></span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <p>© 2026 Ege Tekin</p>
          <p>Full-stack development / MedTech direction</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
