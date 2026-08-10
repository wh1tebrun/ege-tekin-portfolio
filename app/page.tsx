import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Regex → AIGER",
    stage: "Apr 2026 · Bachelor’s thesis",
    type: "Formal methods · Circuit generation",
    description:
      "A Python compiler pipeline that translates regular expressions into bounded or sequential AIGER circuits, backed by simulation, benchmarks, and model-checking artifacts.",
    technologies: ["Python", "AIGER", "Model checking"],
    visual: "architecture",
    links: [
      {
        label: "GitHub ↗",
        href: "https://github.com/wh1tebrun/string-to-aiger",
      },
    ],
    featured: true,
  },
  {
    number: "02",
    title: "YKS Score Volatility",
    stage: "Feb 2026 · Research project",
    type: "Education data · Admissions analysis",
    description:
      "A Python analysis of public 2021–2022 Computer Engineering admissions data, showing how comparable ranks can map to different YKS scores and year-dependent outcomes under the Bavarian conversion formula.",
    technologies: ["Python", "pandas", "Matplotlib", "LaTeX"],
    visual: "paper",
    links: [
      {
        label: "GitHub ↗",
        href: "https://github.com/freiburg-missing-semester-course/project-wh1tebrun",
      },
    ],
  },
  {
    number: "03",
    title: "Dishes Helper",
    stage: "Mar 2024 · Web game",
    type: "Decision game · Product experience",
    description:
      "A TypeScript web game that reduces choice overload by letting users compare a filtered set of dishes pair by pair until one winner remains.",
    technologies: ["TypeScript", "Vite", "Vitest", "Vercel"],
    visual: "health",
    links: [
      { label: "Live demo ↗", href: "https://dishes-helper.vercel.app/" },
      { label: "GitHub ↗", href: "https://github.com/wh1tebrun/dishes" },
    ],
  },
];

const archiveProjects = [
  {
    date: "Aug 2026",
    dateISO: "2026-08",
    title: "Ege Image Studio",
    kind: "Product prototype · Next.js / TypeScript",
    description:
      "A private image-workflow prototype with reference roles, editable prompt flows, deterministic mock generation, and automated browser tests.",
    status: "Private build",
  },
  {
    date: "May 2026",
    dateISO: "2026-05",
    title: "RideQuest",
    kind: "Browser game · React / TypeScript",
    description:
      "A ten-stage cycling arcade game from Freiburg to Konstanz with traffic avoidance, collectibles, stamina, scoring, and locally saved progress.",
    status: "Private build",
  },
  {
    date: "May 2026",
    dateISO: "2026-05",
    title: "WG Cup — 2D Football",
    kind: "Browser game · Canvas / JavaScript",
    description:
      "A local two-player football game with character selection, keyboard controls, shooting, collision physics, and first-to-three scoring.",
    status: "Private build",
  },
  {
    date: "Jul 2025",
    dateISO: "2025-07",
    title: "Delusions of Grandeur",
    kind: "Team game project · MonoGame / C#",
    description:
      "A team-built action game with distinct combat roles, animated enemies, item systems, checkpoints, tiled maps, custom shaders, and a boss encounter.",
    links: [
      { label: "GitHub ↗", href: "https://github.com/wh1tebrun/dog" },
    ],
  },
  {
    date: "Feb 2025",
    dateISO: "2025-02",
    title: "ROSE",
    kind: "Interactive story · Three.js / JavaScript",
    description:
      "A customizable 3D story experience that stores names, colors, and messages locally and creates shareable links from the same settings.",
    status: "Private build",
  },
  {
    date: "Oct 2024",
    dateISO: "2024-10",
    title: "EGE Fitness Fan Page",
    kind: "Responsive website · HTML / CSS / JavaScript",
    description:
      "A mobile-friendly fan page with curated shorts, an accessible information dialog, a lightbox, and a responsive Swiper gallery.",
    status: "Private build",
  },
  {
    date: "Sep 2024",
    dateISO: "2024-09",
    title: "Egelingo",
    kind: "Learning platform · HTML / CSS / JavaScript",
    description:
      "A four-language learning site with subject-based lessons, XP, streaks, quests, achievements, a shop, and local progress tracking.",
    status: "Private build",
  },
  {
    date: "Mar 2024",
    dateISO: "2024-03",
    title: "Country Quiz",
    kind: "Quiz game · HTML / CSS / JavaScript",
    description:
      "A geography game for practicing flags, map locations, and capital cities across selectable continents, with a leaderboard view.",
    links: [{ label: "Live demo ↗", href: "https://country-fawn.vercel.app/" }],
  },
  {
    date: "Jun 2023",
    dateISO: "2023-06",
    title: "Balloon Game",
    kind: "Arcade game · Unity / C#",
    description:
      "A survival game built around climbing through obstacles, avoiding birds, and using movement, cloud-breaking, acceleration, and shooting abilities.",
    links: [
      { label: "Video demo ↗", href: "https://www.youtube.com/watch?v=mxrglnKJKCQ" },
    ],
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
            <span className="brand-mark" aria-hidden="true">
              <Image
                src="/ege-tekin-portrait.jpg"
                alt=""
                width={384}
                height={384}
                sizes="38px"
              />
            </span>
            <span className="brand-copy">
              <strong>Ege Tekin</strong>
              <small>Software · Research · Medicine</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#projects">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
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
              Full-stack developer · MedTech focus
            </p>
            <h1 id="hero-title">
              I build practical software and explore <em>how technology can support medicine.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m completing a B.Sc. in Computer Science at the University of
              Freiburg and working in photovoltaic R&amp;D at Fraunhofer ISE. I have
              been admitted to study Medicine at Akdeniz University, beginning in Sep
              2026.
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
                <dt>B.Sc. Computer Science</dt>
                <dd>University of Freiburg · Oct 2023 – Sep 2026</dd>
              </div>
              <div>
                <dt>Working Student</dt>
                <dd>Fraunhofer ISE · Apr 2026 – Apr 2027</dd>
              </div>
              <div>
                <dt>Medicine · Admitted</dt>
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
            <span>Medicine · Admitted</span>
            <i aria-hidden="true" />
            <span>MedTech focus</span>
          </div>
        </div>

        <section className="projects section-shell" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="section-label">01 / Selected work</p>
            <div>
              <h2 id="projects-title">Research, systems, and playful builds.</h2>
              <p>
                Selected research, software, and game projects, with source code and
                live demos where available.
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
                    <span>{project.number} / {project.stage}</span>
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
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a
                          className="coming-soon"
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          key={link.href}
                          aria-label={`${link.label.replace(" ↗", "")} for ${project.title}`}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="experiment-index" aria-labelledby="experiments-title">
            <div className="experiment-heading">
              <p className="section-label">Project archive</p>
              <div>
                <h3 id="experiments-title">More projects</h3>
                <p>
                  Additional web, game, and graphics projects from my GitHub archive,
                  ordered from newest to oldest by their first commit.
                </p>
              </div>
            </div>
            <ul className="experiment-list">
              {archiveProjects.map((project) => (
                <li key={project.title}>
                  <time dateTime={project.dateISO}>{project.date}</time>
                  <div className="experiment-copy">
                    <strong>{project.title}</strong>
                    <p>{project.description}</p>
                  </div>
                  <small>{project.kind}</small>
                  <div className="experiment-links">
                    {project.links?.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                        {link.label}
                      </a>
                    ))}
                    {project.status ? <span>{project.status}</span> : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="experience" id="experience" aria-labelledby="experience-title">
          <div className="section-shell">
            <div className="section-heading section-heading-light">
              <p className="section-label">02 / Background</p>
              <div>
                <h2 id="experience-title">Computer Science.<br />Research. Medicine.</h2>
                <p>
                  My current path across technical education, applied research, and
                  medicine, ordered from newest to oldest.
                </p>
              </div>
            </div>

            <div className="timeline">
              <article className="timeline-card">
                <div className="timeline-index">01</div>
                <div className="timeline-main">
                  <p className="timeline-type">Education · Admitted</p>
                  <h3>Akdeniz University</h3>
                  <p>
                    Admitted to the Medicine program, beginning in Sep 2026. Ranked
                    5,493rd nationally in Türkiye&apos;s university entrance examination.
                  </p>
                </div>
                <div className="timeline-detail">
                  <strong>Medicine</strong>
                  <span>Sep 2026</span>
                </div>
              </article>

              <article className="timeline-card">
                <div className="timeline-index">02</div>
                <div className="timeline-main">
                  <p className="timeline-type">Experience · Current</p>
                  <h3>Fraunhofer Institute for Solar Energy Systems ISE</h3>
                  <p>
                    Contribute to applied photovoltaic R&amp;D in the Interconnection &amp;
                    Encapsulation team, with hands-on work in peel testing.
                  </p>
                </div>
                <div className="timeline-detail">
                  <strong>Working Student</strong>
                  <span>Apr 2026 – Apr 2027</span>
                </div>
              </article>

              <article className="timeline-card">
                <div className="timeline-index">03</div>
                <div className="timeline-main">
                  <p className="timeline-type">Education · In progress</p>
                  <h3>University of Freiburg</h3>
                  <p>
                    Completing a B.Sc. in Computer Science (Informatik), with a broad
                    foundation across software, algorithms, and computer systems.
                  </p>
                </div>
                <div className="timeline-detail">
                  <strong>B.Sc. Computer Science</strong>
                  <span>Oct 2023 – Sep 2026</span>
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
              Computer Science gives me the technical foundation, and Fraunhofer ISE
              gives me experience in applied research. I have been admitted to study
              Medicine beginning in Sep 2026, with a long-term focus on MedTech.
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
              focused websites to full-stack product prototypes. If you have a useful
              idea to build, tell me what you have in mind.
            </p>
            <div className="contact-links" aria-label="Contact links">
              <a href="mailto:ege.tekin@web.de">
                Email <small>ege.tekin@web.de ↗</small>
              </a>
              <a href="https://www.linkedin.com/in/tekinege/" target="_blank" rel="noreferrer">
                LinkedIn <small>tekinege ↗</small>
              </a>
              <a href="https://github.com/wh1tebrun" target="_blank" rel="noreferrer">
                GitHub <small>wh1tebrun ↗</small>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <p>© 2026 Ege Tekin</p>
          <p>Full-stack development / MedTech focus</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
