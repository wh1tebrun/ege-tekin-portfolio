import Image from "next/image";

type ProjectLink = {
  label: string;
  href: string;
};

type SelectedProject = {
  title: string;
  date: string;
  dateISO: string;
  type: string;
  description: string;
  stack: string;
  links: ProjectLink[];
  fullTitle?: string;
};

const selectedProjects: SelectedProject[] = [
  {
    title: "Ege Image Studio",
    date: "Aug 2026",
    dateISO: "2026-08",
    type: "Independent project · Product prototype",
    description:
      "A tested Next.js workspace for organizing image references, assigning roles, refining prompts, and reviewing deterministic mock outputs through a replaceable architecture.",
    stack: "Next.js · React · TypeScript · Vitest · Playwright",
    links: [
      {
        label: "Source",
        href: "https://github.com/wh1tebrun/ege-image-studio",
      },
    ],
  },
  {
    title: "Regex → AIGER",
    date: "Apr 2026",
    dateISO: "2026-04",
    type: "Bachelor’s thesis · Formal methods",
    description:
      "A Python pipeline that compiles fixed-string and regular-expression constraints into bounded or sequential ASCII AIGER circuits, with simulation, fuzzing, and cross-backend validation.",
    stack: "Python · AIGER · Automata · Model checking",
    links: [
      {
        label: "Source",
        href: "https://github.com/wh1tebrun/string-to-aiger",
      },
    ],
  },
  {
    title: "YKS Score Volatility",
    fullTitle:
      "Year-Dependent YKS Score Volatility and Unfair Outcomes Under the Bavarian Grade Conversion Formula",
    date: "Feb 2026",
    dateISO: "2026-02",
    type: "Independent research · Data analysis",
    description:
      "An analysis of public 2021–2022 Computer Engineering admissions data examining how comparable national ranks can produce different German grade-conversion outcomes.",
    stack: "Python · pandas · Matplotlib · LaTeX",
    links: [
      { label: "Paper", href: "/ege-tekin-yks-score-volatility.pdf" },
    ],
  },
  {
    title: "Dishes Helper",
    date: "Mar 2024",
    dateISO: "2024-03",
    type: "Independent project · Web application",
    description:
      "A pairwise decision tool that guides users from a 99-dish catalogue to one choice. Built with strict TypeScript, tested with Vitest, and deployed on Vercel.",
    stack: "TypeScript · Vite · Vitest · Vercel",
    links: [
      { label: "Live", href: "https://dishes-helper.vercel.app/" },
      { label: "Source", href: "https://github.com/wh1tebrun/dishes" },
    ],
  },
];

const projectIndex = [
  {
    year: "2026",
    projects: [
      {
        date: "May 2026",
        dateISO: "2026-05",
        title: "Freiburg–Konstanz",
        description: "A ten-stage browser cycling game with traffic, stamina, and scoring systems.",
        area: "Game",
        stack: "React · TypeScript",
        links: [{ label: "GitHub", href: "https://github.com/wh1tebrun/bisiklet" }],
      },
      {
        date: "May 2026",
        dateISO: "2026-05",
        title: "WG Cup — 2D Football",
        description: "A local two-player football game with character stats and fixed-timestep physics.",
        area: "Game",
        stack: "Canvas · JavaScript",
        links: [
          { label: "GitHub", href: "https://github.com/wh1tebrun/football-game" },
        ],
      },
    ],
  },
  {
    year: "2025",
    projects: [
      {
        date: "Feb 2025",
        dateISO: "2025-02",
        title: "ROSE",
        description: "A customizable 3D romantic-story template with shareable URL experiences.",
        area: "Interactive",
        stack: "Three.js · JavaScript",
        links: [{ label: "GitHub", href: "https://github.com/wh1tebrun/rose" }],
      },
    ],
  },
  {
    year: "2024",
    projects: [
      {
        date: "Nov 2024 – Feb 2025",
        dateISO: "2024-11",
        title: "Delusions of Grandeur",
        description: "A six-person university action game covering gameplay and integration work.",
        area: "Team game",
        stack: "C# · MonoGame",
        links: [
          {
            label: "Case study",
            href: "https://github.com/wh1tebrun/delusions-of-grandeur-case-study",
          },
        ],
      },
      {
        date: "Oct 2024",
        dateISO: "2024-10",
        title: "EGE Fitness Fan Page",
        description: "A responsive fan page combining short videos, photography, and training content.",
        area: "Website",
        stack: "HTML · CSS · JavaScript",
        links: [
          { label: "GitHub", href: "https://github.com/wh1tebrun/calisthenics" },
        ],
      },
      {
        date: "Sep 2024",
        dateISO: "2024-09",
        title: "Egelingo",
        description: "A four-language vocabulary platform with lessons, streaks, quests, and gems.",
        area: "Learning",
        stack: "HTML · CSS · JavaScript",
        links: [{ label: "GitHub", href: "https://github.com/wh1tebrun/language" }],
      },
      {
        date: "Jul 2024",
        dateISO: "2024-07",
        title: "Terminal Blocks",
        description: "A dependency-free falling-block terminal game with a testable core.",
        area: "Game",
        stack: "C++20 · CMake",
        links: [
          { label: "GitHub", href: "https://github.com/wh1tebrun/terminal-blocks" },
        ],
      },
      {
        date: "Jun 2024",
        dateISO: "2024-06",
        title: "Geo Heatmap CLI",
        description: "A CLI that turns geographic point data into deterministic ASCII density maps.",
        area: "Tool",
        stack: "C++20 · CMake",
        links: [
          { label: "GitHub", href: "https://github.com/wh1tebrun/geo-heatmap-cli" },
        ],
      },
      {
        date: "Mar 2024",
        dateISO: "2024-03",
        title: "Country Quiz",
        description: "A geography game with flag, map, capital-city, and continent modes.",
        area: "Game",
        stack: "HTML · CSS · JavaScript",
        links: [{ label: "Live", href: "https://country-fawn.vercel.app/" }],
      },
    ],
  },
  {
    year: "2023",
    projects: [
      {
        date: "Dec 2023",
        dateISO: "2023-12",
        title: "Asteroid Defense",
        description: "A tested Python arcade game with deterministic logic and collision handling.",
        area: "Game",
        stack: "Python · Pygame",
        links: [
          { label: "GitHub", href: "https://github.com/wh1tebrun/asteroid-defense" },
        ],
      },
      {
        date: "Oct 2023 – Feb 2024",
        dateISO: "2023-10",
        title: "Python Coursework",
        description: "A sheet-by-sheet archive of university programming exercises.",
        area: "Coursework",
        stack: "Python",
        links: [{ label: "GitHub", href: "https://github.com/wh1tebrun/python" }],
      },
    ],
  },
  {
    year: "2022",
    projects: [
      {
        date: "Oct 2022 – Jun 2023",
        dateISO: "2022-10",
        title: "Balloon Game",
        description: "A vertical-survival Unity game with hazards, shooting, and abilities.",
        area: "Game",
        stack: "Unity · C#",
        links: [
          { label: "Demo", href: "https://www.youtube.com/watch?v=mxrglnKJKCQ" },
          { label: "Early source", href: "https://github.com/wh1tebrun/game" },
        ],
      },
    ],
  },
];

const languages = [
  ["Turkish", "Native"],
  ["English", "C2"],
  ["German", "C2"],
  ["French", "B1"],
];

function ExternalLink({ link, project }: { link: ProjectLink; project: string }) {
  return (
    <a
      className="text-link"
      href={link.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${link.label} for ${project} (opens in a new tab)`}
    >
      {link.label} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <main className="resume section-shell" id="main-content" tabIndex={-1}>
        <section className="masthead anchor-target" id="top" aria-labelledby="page-title">
          <div className="identity">
            <p className="document-label">Résumé · August 2026</p>
            <h1 id="page-title">Ege Tekin</h1>
            <p className="role">Software Engineer · Freiburg, Germany</p>
          </div>

          <div className="masthead-aside">
            <Image
              className="headshot"
              src="/ege-tekin-portrait.jpg"
              alt="Portrait of Ege Tekin"
              width={92}
              height={92}
              priority
            />
            <address>
              <a href="mailto:ege.tekin@web.de">ege.tekin@web.de</a>
              <a href="https://github.com/wh1tebrun" target="_blank" rel="noreferrer">github.com/wh1tebrun</a>
              <a href="https://www.linkedin.com/in/tekinege/" target="_blank" rel="noreferrer">linkedin.com/in/tekinege</a>
            </address>
          </div>
        </section>

        <section className="summary" aria-labelledby="summary-title">
          <h2 className="section-label" id="summary-title">Profile</h2>
          <div>
            <p>
              Software engineer working across full-stack products, systems software, and applied
              research. Computer Science at the University of Freiburg; Medicine at Akdeniz
              University from Sep 2026, with a long-term direction in medical technology.
            </p>
          </div>
        </section>

        <section className="resume-section anchor-target" id="background" aria-labelledby="experience-title">
          <h2 className="section-label" id="experience-title">Experience</h2>
          <div className="section-content">
            <article className="cv-entry">
              <div className="entry-date">Apr 2026 – Apr 2027</div>
              <div>
                <header className="entry-heading">
                  <div>
                    <h3>Fraunhofer ISE</h3>
                    <p>Working Student · Interconnection &amp; Encapsulation</p>
                  </div>
                  <span>Freiburg, Germany</span>
                </header>
                <p className="entry-description">
                  Supporting applied photovoltaic R&amp;D through hands-on peel testing and
                  structured experimental work.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="resume-section" aria-labelledby="education-title">
          <h2 className="section-label" id="education-title">Education</h2>
          <div className="section-content">
            <article className="cv-entry">
              <time className="entry-date" dateTime="2026-09">Sep 2026</time>
              <div>
                <header className="entry-heading">
                  <div>
                    <h3>Akdeniz University</h3>
                    <p>Medicine · Admitted · Starts Sep 2026</p>
                  </div>
                  <span>Antalya, Türkiye</span>
                </header>
                <p className="entry-description">
                  Ranked 5,493rd nationally in Türkiye&apos;s university entrance examination.
                </p>
              </div>
            </article>
            <article className="cv-entry">
              <div className="entry-date">Oct 2023 – Sep 2026</div>
              <div>
                <header className="entry-heading">
                  <div>
                    <h3>University of Freiburg</h3>
                    <p>B.Sc. Computer Science (Informatik) · In progress</p>
                  </div>
                  <span>Freiburg, Germany</span>
                </header>
                <p className="entry-description">
                  Coursework in software engineering, algorithms, formal methods, and computer systems.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="resume-section anchor-target" id="work" aria-labelledby="work-title">
          <h2 className="section-label" id="work-title">Selected work</h2>
          <div className="section-content">
            {selectedProjects.map((project) => (
              <article className="cv-entry project-entry" key={project.title}>
                <time className="entry-date" dateTime={project.dateISO}>{project.date}</time>
                <div>
                  <header className="entry-heading project-heading">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.type}</p>
                    </div>
                    <div className="entry-links">
                      {project.links.map((link) => (
                        <ExternalLink link={link} project={project.title} key={link.href} />
                      ))}
                    </div>
                  </header>
                  {project.fullTitle ? <p className="project-full-title">{project.fullTitle}</p> : null}
                  <p className="entry-description">{project.description}</p>
                  <p className="technology-line"><span>Technology</span>{project.stack}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section archive-section" aria-labelledby="archive-title">
          <h2 className="section-label" id="archive-title">Additional work</h2>
          <div className="section-content">
            <details className="archive anchor-target" id="project-index">
              <summary>
                <span>Chronological project archive</span>
                <span>12 projects · Oct 2022 – May 2026 <i aria-hidden="true">+</i></span>
              </summary>

              <div className="archive-content">
                {projectIndex.map((group) => (
                  <section className="year-group" aria-labelledby={`year-${group.year}`} key={group.year}>
                    <h3 id={`year-${group.year}`}>{group.year}</h3>
                    <ol>
                      {group.projects.map((project) => (
                        <li className="archive-row" key={`${project.date}-${project.title}`}>
                          <time dateTime={project.dateISO}>{project.date}</time>
                          <div className="archive-project">
                            <strong>{project.title}</strong>
                            <p>{project.description}</p>
                          </div>
                          <span className="archive-area">
                            <span className="sr-only">Area: </span>{project.area}
                          </span>
                          <span className="archive-stack">{project.stack}</span>
                          <div className="archive-links">
                            {project.links.map((link) => (
                              <ExternalLink link={link} project={project.title} key={link.href} />
                            ))}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </section>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="resume-section" aria-labelledby="skills-title">
          <h2 className="section-label" id="skills-title">Technical profile</h2>
          <div className="section-content profile-lines">
            <dl>
              <div>
                <dt>Web &amp; product</dt>
                <dd>TypeScript, React, Next.js, Vite, testing, responsive interfaces</dd>
              </div>
              <div>
                <dt>Research &amp; systems</dt>
                <dd>Python, AIGER, automata, model checking, data analysis, C++20</dd>
              </div>
              <div>
                <dt>Interactive software</dt>
                <dd>C#, MonoGame, Unity, Canvas, Three.js</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>{languages.map(([language, level]) => `${language} (${level})`).join(" · ")}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="resume-section contact anchor-target" id="contact" aria-labelledby="contact-title">
          <h2 className="section-label" id="contact-title">Contact</h2>
          <div className="section-content contact-content">
            <p>Available for freelance websites, web applications, and product prototypes.</p>
            <a className="email-link" href="mailto:ege.tekin@web.de">ege.tekin@web.de</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <p>© 2026 Ege Tekin</p>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  );
}
