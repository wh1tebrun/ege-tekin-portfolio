import Image from "next/image";

type ProjectLink = {
  label: string;
  href: string;
};

type SelectedProject = {
  index: string;
  title: string;
  date: string;
  dateISO: string;
  type: string;
  headline: string;
  description: string;
  stack: string;
  layout: "wide" | "media-left" | "media-right";
  image: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
  links: ProjectLink[];
  fullTitle?: string;
};

const selectedProjects: SelectedProject[] = [
  {
    index: "01",
    title: "Ege Image Studio",
    date: "Aug 2026",
    dateISO: "2026-08",
    type: "Independent project · Product prototype",
    headline: "A structured workspace for reference-driven image workflows.",
    description:
      "A tested Next.js workspace for organizing image references, assigning roles, refining prompts, and reviewing deterministic mock outputs through a replaceable architecture.",
    stack: "Next.js · React · TypeScript · Vitest · Playwright",
    layout: "wide",
    image: {
      src: "/projects/ege-image-studio.webp",
      alt: "Ege Image Studio interface showing image references, a prompt workspace, and output review panels",
      caption: "Reference organization and prompt refinement workspace.",
      width: 1600,
      height: 1000,
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/wh1tebrun/ege-image-studio",
      },
    ],
  },
  {
    index: "02",
    title: "Regex → AIGER",
    date: "Apr 2026",
    dateISO: "2026-04",
    type: "Bachelor’s thesis · Formal methods",
    headline: "Compiling regular expressions into verifiable hardware circuits.",
    description:
      "A Python pipeline that compiles fixed-string and regular-expression constraints into bounded or sequential ASCII AIGER circuits, with simulation, fuzzing, and cross-backend validation.",
    stack: "Python · AIGER · Automata · Model checking",
    layout: "media-left",
    image: {
      src: "/projects/regex-aiger.webp",
      alt: "Regex to AIGER tooling showing a regular-expression compilation pipeline and generated circuit output",
      caption: "Compilation pipeline from regular-expression constraints to ASCII AIGER.",
      width: 1600,
      height: 1000,
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/wh1tebrun/string-to-aiger",
      },
    ],
  },
  {
    index: "03",
    title: "YKS Score Volatility",
    fullTitle:
      "Year-Dependent YKS Score Volatility and Unfair Outcomes Under the Bavarian Grade Conversion Formula",
    date: "Feb 2026",
    dateISO: "2026-02",
    type: "Independent research · Data analysis",
    headline: "How year-to-year YKS volatility affects German NC admissions.",
    description:
      "An analysis of public 2021–2022 Computer Engineering admissions data examining how comparable national ranks can produce different German grade-conversion outcomes.",
    stack: "Python · pandas · Matplotlib · LaTeX",
    layout: "media-right",
    image: {
      src: "/projects/yks-volatility.webp",
      alt: "Chart comparing YKS rank-to-score relationships across 2021 and 2022 admission data",
      caption: "Rank-to-score comparison from the published analysis.",
      width: 1600,
      height: 1000,
    },
    links: [
      { label: "Paper", href: "/ege-tekin-yks-score-volatility.pdf" },
    ],
  },
  {
    index: "04",
    title: "Dishes Helper",
    date: "Mar 2024",
    dateISO: "2024-03",
    type: "Independent project · Web application",
    headline: "Turning an overwhelming menu into one clear choice.",
    description:
      "A pairwise decision tool that guides users from a 99-dish catalogue to one choice. Built with strict TypeScript, tested with Vitest, and deployed on Vercel.",
    stack: "TypeScript · Vite · Vitest · Vercel",
    layout: "media-left",
    image: {
      src: "/projects/dishes-helper.webp",
      alt: "Dishes Helper landing page with game setup controls for candidate count and dietary preferences",
      caption: "Game setup before the pairwise selection flow begins.",
      width: 1600,
      height: 1000,
    },
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

function ProjectShowcase({ project }: { project: SelectedProject }) {
  return (
    <article className={`project-showcase project-showcase--${project.layout}`}>
      <header className="project-showcase-header">
        <p className="project-overline">
          <span>Project {project.index}</span>
          <time dateTime={project.dateISO}>{project.date}</time>
          <span>{project.type}</span>
        </p>
        <h3>{project.title}</h3>
        <p className="project-deck">{project.headline}</p>
        {project.fullTitle ? <p className="project-full-title">{project.fullTitle}</p> : null}
      </header>

      <div className="project-showcase-layout">
        <figure className="project-media">
          <div className="project-image-frame">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1100px) 72vw, 720px"
            />
          </div>
          <figcaption>{project.image.caption}</figcaption>
        </figure>

        <div className="project-notes">
          <p>{project.description}</p>
          <dl>
            <div><dt>Role / type</dt><dd>{project.type}</dd></div>
            <div><dt>Technology</dt><dd>{project.stack}</dd></div>
          </dl>
          <div className="entry-links">
            {project.links.map((link) => (
              <ExternalLink link={link} project={project.title} key={link.href} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <main className="resume section-shell" id="main-content" tabIndex={-1}>
        <section className="masthead anchor-target" id="top" aria-labelledby="page-title">
          <div className="identity">
            <p className="document-label">Résumé · August 2026</p>
            <h1 id="page-title">Ege Tekin</h1>
            <p className="role">Software Engineering · Applied Research · Medical Technology</p>
            <p className="location">Freiburg, Germany</p>
          </div>

          <div className="masthead-aside">
            <dl className="context-block" aria-label="Current position and next step">
              <div>
                <dt>Currently</dt>
                <dd><strong>Fraunhofer ISE</strong><span>Freiburg</span></dd>
              </div>
              <div>
                <dt>Next</dt>
                <dd><strong>Medicine</strong><span>Sep 2026</span></dd>
              </div>
            </dl>
            <Image
              className="headshot"
              src="/ege-tekin-portrait-large.jpg"
              alt="Portrait of Ege Tekin"
              width={144}
              height={176}
              priority
            />
            <address className="masthead-links">
              <a href="mailto:ege.tekin@web.de">Email <span aria-hidden="true">↗</span></a>
              <a aria-label="GitHub profile (opens in a new tab)" href="https://github.com/wh1tebrun" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a aria-label="LinkedIn profile (opens in a new tab)" href="https://www.linkedin.com/in/tekinege/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </address>
          </div>
        </section>

        <section className="summary" aria-labelledby="summary-title">
          <h2 className="section-label" data-index="01" id="summary-title">Profile</h2>
          <div>
            <p className="summary-lead">
              I build software at the intersection of engineering and applied research.
            </p>
            <p className="summary-supporting">
              I&apos;m completing a B.Sc. in Computer Science at the University of Freiburg and
              working in applied photovoltaic R&amp;D at Fraunhofer ISE. I have been admitted to
              Akdeniz University&apos;s Medicine program, beginning Sep 2026, with a long-term
              direction in medical technology.
            </p>
          </div>
        </section>

        <section className="resume-section anchor-target" id="background" aria-labelledby="experience-title">
          <h2 className="section-label" data-index="02" id="experience-title">Experience</h2>
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
          <h2 className="section-label" data-index="03" id="education-title">Education</h2>
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
          <h2 className="section-label" data-index="04" id="work-title">Selected work</h2>
          <div className="section-content selected-work">
            {selectedProjects.map((project) => (
              <ProjectShowcase project={project} key={project.title} />
            ))}
          </div>
        </section>

        <section className="resume-section archive-section" aria-labelledby="archive-title">
          <h2 className="section-label" data-index="05" id="archive-title">Archive &amp; capabilities</h2>
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
            <div className="profile-lines" aria-labelledby="skills-title">
              <h3 className="subsection-title" id="skills-title">Technical profile</h3>
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
          </div>
        </section>

        <section className="resume-section contact anchor-target" id="contact" aria-labelledby="contact-title">
          <h2 className="section-label" data-index="06" id="contact-title">Contact</h2>
          <div className="section-content contact-content">
            <div>
              <p className="contact-lead">Let&apos;s build something useful.</p>
              <p>Available for freelance websites, web applications, and product prototypes.</p>
            </div>
            <div className="contact-links">
              <a className="email-link" href="mailto:ege.tekin@web.de">ege.tekin@web.de</a>
              <a aria-label="GitHub profile (opens in a new tab)" href="https://github.com/wh1tebrun" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a aria-label="LinkedIn profile (opens in a new tab)" href="https://www.linkedin.com/in/tekinege/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
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
