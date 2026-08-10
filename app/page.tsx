const projects = [
  {
    number: "01",
    title: "GridScope",
    type: "Energy analytics · Full-stack",
    description:
      "An energy-data dashboard concept for exploring measurements, comparing time periods, and turning dense signals into a clear visual story.",
    technologies: ["React", "NestJS", "PostgreSQL", "Recharts"],
    visual: "energy",
    featured: true,
  },
  {
    number: "02",
    title: "FocusFlow",
    type: "Team workspace · Product",
    description:
      "A calm project workspace for organizing tasks, tracking progress, and keeping team updates in one understandable place.",
    technologies: ["React", "NestJS", "TypeScript", "WebSockets"],
    visual: "flow",
  },
  {
    number: "03",
    title: "PaperTrail",
    type: "Research tools · Search",
    description:
      "A research-library concept that makes papers, notes, and tags easier to collect, connect, and find again.",
    technologies: ["React", "NestJS", "REST API", "PostgreSQL"],
    visual: "paper",
  },
  {
    number: "04",
    title: "Freiburg Routes",
    type: "Mobility · Data visualization",
    description:
      "A city route-planning prototype focused on useful information, saved places, and a more legible journey from A to B.",
    technologies: ["React", "NestJS", "OpenStreetMap", "PostGIS"],
    visual: "routes",
  },
  {
    number: "05",
    title: "EdgeCore",
    type: "Hardware architecture · Systems concept",
    description:
      "A hardware–software co-design concept for a compact edge-computing node, mapping sensor input, memory, processing, and software interfaces into one understandable system.",
    technologies: ["RISC-V", "SystemVerilog", "C/C++", "FPGA"],
    visual: "architecture",
  },
];

const capabilities = [
  ["01", "Software Engineering", "TypeScript · APIs · Testing"],
  ["02", "Full-Stack Development", "React / Next.js · NestJS · PostgreSQL"],
  ["03", "Hardware & Systems", "Computer architecture · Embedded systems · HW/SW interfaces"],
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
              <small>Software &amp; Systems</small>
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
              Software · Full-stack · Hardware architecture
            </p>
            <h1 id="hero-title">
              I build software—and <em>think in systems.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m Ege Tekin, a Computer Science graduate from the University of
              Freiburg with two years of working-student experience at Fraunhofer ISE.
              I&apos;m interested in full-stack software engineering and the architecture
              where software meets hardware.
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
                <dt>02 years</dt>
                <dd>Fraunhofer ISE</dd>
              </div>
              <div>
                <dt>Graduate</dt>
                <dd>University of Freiburg</dd>
              </div>
              <div>
                <dt>System view</dt>
                <dd>Software + hardware architecture</dd>
              </div>
            </dl>
          </div>

          <div className="hero-system" aria-hidden="true">
            <div className="system-orbit orbit-one" />
            <div className="system-orbit orbit-two" />
            <div className="system-card">
              <div className="system-card-top">
                <span>ET / SYSTEM 01</span>
                <span className="system-status">ONLINE</span>
              </div>
              <div className="system-core">
                <span className="core-ring" />
                <span className="core-label">IDEA</span>
              </div>
              <div className="system-path">
                <span>Interface</span>
                <i />
                <span>Backend</span>
                <i />
                <span>Hardware</span>
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
            <div className="coordinate coordinate-a">47.999° N</div>
            <div className="coordinate coordinate-b">SOFTWARE ↔ HARDWARE</div>
          </div>
        </section>

        <div className="profile-strip" aria-label="Profile summary">
          <div className="section-shell strip-inner">
            <span>Software engineering</span>
            <i aria-hidden="true" />
            <span>Full-stack systems</span>
            <i aria-hidden="true" />
            <span>Hardware architecture</span>
            <i aria-hidden="true" />
            <span>Applied research</span>
          </div>
        </div>

        <section className="projects section-shell" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="section-label">01 / Selected work</p>
            <div>
              <h2 id="projects-title">Ideas made tangible.</h2>
              <p>
                Five concept projects spanning interfaces, backend systems, data, and
                hardware-aware engineering.
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
                    <span>{project.number} / Concept project</span>
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
                    <span className="coming-soon">Case study soon ↗</span>
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
                <h2 id="experience-title">Research mindset.<br />System view.</h2>
                <p>
                  Academic foundations and two years inside an applied-research
                  environment shape how I approach technical work.
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
                    Two years as a working student alongside my Computer Science
                    studies—experiencing how careful technical work fits into a wider,
                    interdisciplinary research environment.
                  </p>
                </div>
                <div className="timeline-detail">
                  <strong>Working Student</strong>
                  <span>2 years</span>
                </div>
              </article>

              <article className="timeline-card">
                <div className="timeline-index">02</div>
                <div className="timeline-main">
                  <p className="timeline-type">Education</p>
                  <h3>University of Freiburg</h3>
                  <p>
                    Graduated in Computer Science (Informatik), building a broad
                    foundation for understanding software from interface to system.
                  </p>
                </div>
                <div className="timeline-detail">
                  <strong>Computer Science</strong>
                  <span>Graduate</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about section-shell" id="about" aria-labelledby="about-title">
          <div className="about-lead">
            <p className="section-label">03 / About me</p>
            <h2 id="about-title">
              From interface<br />to architecture.
            </h2>
          </div>
          <div className="about-copy">
            <p className="about-intro">
              My background connects Computer Science with professional experience in
              applied research. My current direction spans software engineering,
              full-stack products, and hardware architecture—especially the interfaces
              where those layers meet.
            </p>
            <p>
              I care about maintainable code, purposeful interfaces, and understanding
              a system beyond a single layer. The projects above are concept pieces;
              real case studies will replace them as this portfolio grows.
            </p>
          </div>

          <div className="capability-list" aria-label="Focus areas">
            {capabilities.map(([number, title, detail]) => (
              <div className="capability" key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-inner">
            <p className="section-label">04 / Contact</p>
            <h2 id="contact-title">Have a problem worth engineering?</h2>
            <p>
              I&apos;m interested in thoughtful software, full-stack systems, hardware
              architecture, and teams that care about the details. Contact links will
              be connected in the next iteration.
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
          <p>Software / Full-stack / Hardware architecture</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
