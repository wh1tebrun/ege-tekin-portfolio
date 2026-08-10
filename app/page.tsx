import Image from "next/image";

import AnchorNavigation from "./anchor-navigation";

type ProjectLink = {
  label: string;
  href: string;
};

type FeaturedProject = {
  index: string;
  title: string;
  date: string;
  dateISO: string;
  category: string;
  headline: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  fullTitle?: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    index: "01",
    title: "Ege Image Studio",
    date: "Aug 2026",
    dateISO: "2026-08",
    category: "Independent build · Product prototype",
    headline: "A structured workspace for reference-driven image workflows.",
    description:
      "A tested Next.js prototype for organizing references, assigning roles, refining prompts, and reviewing deterministic mock outputs through a replaceable ports-and-adapters architecture.",
    stack: ["Next.js", "React", "TypeScript", "Vitest", "Playwright"],
    links: [
      {
        label: "View source",
        href: "https://github.com/wh1tebrun/ege-image-studio",
      },
    ],
  },
  {
    index: "02",
    title: "Regex → AIGER",
    date: "Apr 2026",
    dateISO: "2026-04",
    category: "Bachelor’s thesis · Formal methods",
    headline: "Compiling regular expressions into verifiable hardware circuits.",
    description:
      "A Python pipeline that translates fixed-string and regular-expression constraints into bounded or sequential ASCII AIGER circuits, validated through simulation, fuzzing, and cross-backend checks.",
    stack: ["Python", "AIGER", "Automata", "Model checking"],
    links: [
      {
        label: "View source",
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
    category: "Independent research · Data analysis",
    headline: "How year-to-year YKS volatility affects German NC admissions.",
    description:
      "An analysis of public 2021–2022 Computer Engineering admissions data showing how comparable national ranks can produce different scores and converted outcomes under the Bavarian formula.",
    stack: ["Python", "pandas", "Matplotlib", "LaTeX"],
    links: [
      { label: "Read paper", href: "/ege-tekin-yks-score-volatility.pdf" },
    ],
  },
  {
    index: "04",
    title: "Dishes Helper",
    date: "Mar 2024",
    dateISO: "2024-03",
    category: "Independent build · Shipped web product",
    headline: "Turning an overwhelming menu into one clear choice.",
    description:
      "A fast pairwise decision game that guides users from a 99-dish catalogue to one winner, built with strict TypeScript, tested with Vitest, and deployed on Vercel.",
    stack: ["TypeScript", "Vite", "Vitest", "Vercel"],
    links: [
      { label: "Open live site", href: "https://dishes-helper.vercel.app/" },
      { label: "View source", href: "https://github.com/wh1tebrun/dishes" },
    ],
  },
];

const projectArchive = [
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
      <AnchorNavigation />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Ege Tekin, back to top">
            <strong>Ege Tekin</strong>
            <span>Software Engineer</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#background">About</a>
            <a href="#project-index">Archive</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero section-shell anchor-target" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer · Freiburg, Germany</p>
            <h1 id="hero-title">Software for complex, real-world work.</h1>
            <p className="hero-intro">
              Computer Science, applied research, and a long-term direction toward
              healthcare technology—brought together through useful, well-made software.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-secondary" href="mailto:ege.tekin@web.de">
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="availability-note">
              <span aria-hidden="true" /> Available for selected freelance web and app projects.
            </p>
          </div>

          <figure className="hero-portrait">
            <Image
              src="/ege-tekin-portrait-large.jpg"
              alt="Portrait of Ege Tekin"
              fill
              priority
              sizes="(max-width: 768px) calc(100vw - 40px), 390px"
            />
            <figcaption>
              <span>Based in Freiburg</span>
              <span>Working across software &amp; research</span>
            </figcaption>
          </figure>
        </section>

        <section className="credibility" aria-label="Education, research, and future direction">
          <div className="section-shell credibility-grid">
            <div>
              <span className="credibility-number">01</span>
              <p>B.Sc. Computer Science</p>
              <strong>University of Freiburg</strong>
            </div>
            <div>
              <span className="credibility-number">02</span>
              <p>Applied photovoltaic R&amp;D</p>
              <strong>Fraunhofer ISE</strong>
            </div>
            <div>
              <span className="credibility-number">03</span>
              <p>Medicine · Starts Sep 2026</p>
              <strong>Akdeniz University</strong>
            </div>
          </div>
        </section>

        <section className="work section-shell anchor-target" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="section-kicker">Selected work</p>
            <div>
              <h2 id="work-title">Evidence over decoration.</h2>
              <p>Understand the problem, choose the right level of complexity, and make the result dependable.</p>
            </div>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <header className="project-card-header">
                  <span>{project.index}</span>
                  <time dateTime={project.dateISO}>{project.date}</time>
                </header>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                {project.fullTitle ? <p className="project-full-title">{project.fullTitle}</p> : null}
                <p className="project-headline">{project.headline}</p>
                <p className="project-description">{project.description}</p>
                <ul className="stack-list" aria-label={`${project.title} technology stack`}>
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  {project.links.map((link) => (
                    <ExternalLink link={link} project={project.title} key={link.href} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="background section-shell anchor-target" id="background" aria-labelledby="background-title">
          <div className="about-copy">
            <p className="section-kicker">About</p>
            <h2 id="background-title">Technical depth, practical execution.</h2>
            <p className="about-lead">
              I enjoy turning ambiguous ideas into maintainable software—especially when
              product thinking, technical depth, and real-world usefulness meet.
            </p>
            <p>
              I&apos;m completing a B.Sc. in Computer Science at the University of Freiburg
              and working in applied photovoltaic R&amp;D at Fraunhofer ISE. I have been
              admitted to Akdeniz University&apos;s Medicine program, beginning Sep 2026, and
              plan to build toward the intersection of software and medicine.
            </p>
            <dl className="languages" aria-label="Languages">
              {languages.map(([language, level]) => (
                <div key={language}>
                  <dt>{language}</dt>
                  <dd>{level}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="timeline" aria-label="Experience and education">
            <p className="section-kicker">Experience &amp; education</p>
            <article>
              <div className="timeline-meta">
                <time dateTime="2026-09">Sep 2026</time>
                <span>Education · Admitted</span>
              </div>
              <div>
                <h3>Akdeniz University</h3>
                <strong>Medicine</strong>
                <p>Admitted to the Medicine program. Ranked 5,493rd nationally in Türkiye&apos;s university entrance examination.</p>
              </div>
            </article>
            <article>
              <div className="timeline-meta">
                <span>Apr 2026 – Apr 2027</span>
                <span>Experience · Current</span>
              </div>
              <div>
                <h3>Fraunhofer ISE</h3>
                <strong>Working Student · Interconnection &amp; Encapsulation</strong>
                <p>Supporting applied photovoltaic R&amp;D through hands-on peel testing and structured experimental work.</p>
              </div>
            </article>
            <article>
              <div className="timeline-meta">
                <span>Oct 2023 – Sep 2026</span>
                <span>Education · In progress</span>
              </div>
              <div>
                <h3>University of Freiburg</h3>
                <strong>B.Sc. Computer Science (Informatik)</strong>
                <p>Software engineering, algorithms, formal methods, and computer systems.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="archive-section section-shell" aria-labelledby="archive-title">
          <details className="archive anchor-target" id="project-index">
            <summary>
              <span>
                <span className="section-kicker">Project archive</span>
                <strong id="archive-title">View the complete chronological record</strong>
              </span>
              <span className="archive-summary-meta">
                12 more projects · Oct 2022 – May 2026 <i aria-hidden="true">+</i>
              </span>
            </summary>

            <div className="archive-content">
              {projectArchive.map((group) => (
                <section className="year-group" aria-labelledby={`year-${group.year}`} key={group.year}>
                  <h3 id={`year-${group.year}`}>{group.year}</h3>
                  <ol>
                    {group.projects.map((project) => (
                      <li className="archive-row" key={`${project.date}-${project.title}`}>
                        <time dateTime={project.dateISO}>
                          <span className="sr-only">Date: </span>
                          {project.date}
                        </time>
                        <div className="archive-project-copy">
                          <strong>{project.title}</strong>
                          <p>{project.description}</p>
                        </div>
                        <span className="archive-area">
                          <span className="sr-only">Area: </span>
                          {project.area}
                        </span>
                        <span className="archive-stack">
                          <span className="sr-only">Stack: </span>
                          {project.stack}
                        </span>
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
        </section>

        <section className="contact section-shell anchor-target" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="section-kicker">Available for freelance</p>
            <h2 id="contact-title">Have a useful product to build?</h2>
            <p>
              I build focused websites, web applications, and product prototypes. Send a
              short note with the problem, scope, and timeline.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:ege.tekin@web.de">
              ege.tekin@web.de <span aria-hidden="true">↗</span>
            </a>
            <div>
              <a href="https://www.linkedin.com/in/tekinege/" target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="https://github.com/wh1tebrun" target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <p>© 2026 Ege Tekin</p>
          <p>Software engineering · Applied research · MedTech direction</p>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  );
}
