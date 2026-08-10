import Image from "next/image";

import AnchorNavigation from "./anchor-navigation";

type ProjectLink = {
  label: string;
  href: string;
};

type FeaturedProject = {
  index: string;
  title: string;
  headline: string;
  date: string;
  dateISO: string;
  category: string;
  role: string;
  description: string;
  stack: string[];
  visual: "circuit" | "studio" | "decision" | "research";
  links: ProjectLink[];
  fullTitle?: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    index: "01",
    title: "Regex → AIGER",
    headline: "Compiling regular expressions into verifiable hardware circuits.",
    date: "Apr 2026",
    dateISO: "2026-04",
    category: "Formal methods",
    role: "Bachelor’s thesis",
    description:
      "I designed a Python pipeline that translates fixed-string and regular-expression constraints into bounded or sequential ASCII AIGER circuits. Simulation, fuzzing, and cross-backend checks validate the generated logic.",
    stack: ["Python", "AIGER", "Automata", "Model checking"],
    visual: "circuit",
    links: [
      {
        label: "View source",
        href: "https://github.com/wh1tebrun/string-to-aiger",
      },
    ],
  },
  {
    index: "02",
    title: "Ege Image Studio",
    headline: "A structured workspace for reference-driven image workflows.",
    date: "Aug 2026",
    dateISO: "2026-08",
    category: "Product prototype",
    role: "Independent build",
    description:
      "A tested Next.js prototype for organizing image references, assigning roles, refining prompts, and reviewing deterministic mock outputs. Its ports-and-adapters structure keeps future model, storage, and authentication integrations replaceable.",
    stack: ["Next.js", "React", "TypeScript", "Vitest", "Playwright"],
    visual: "studio",
    links: [
      {
        label: "View source",
        href: "https://github.com/wh1tebrun/ege-image-studio",
      },
    ],
  },
  {
    index: "03",
    title: "Dishes Helper",
    headline: "Turning an overwhelming menu into one clear choice.",
    date: "Mar 2024",
    dateISO: "2024-03",
    category: "Shipped web product",
    role: "Independent build",
    description:
      "Users choose a dish set and dietary preference, then move through pairwise comparisons until one winner remains. The game is built with strict TypeScript, tested with Vitest, and deployed on Vercel.",
    stack: ["TypeScript", "Vite", "Vitest", "Vercel"],
    visual: "decision",
    links: [
      { label: "Open live site", href: "https://dishes-helper.vercel.app/" },
      { label: "View source", href: "https://github.com/wh1tebrun/dishes" },
    ],
  },
  {
    index: "04",
    title: "YKS Score Volatility",
    fullTitle:
      "Year-Dependent YKS Score Volatility and Unfair Outcomes Under the Bavarian Grade Conversion Formula",
    headline: "How year-to-year YKS volatility affects German NC admissions.",
    date: "Feb 2026",
    dateISO: "2026-02",
    category: "Research project",
    role: "Data analysis & paper",
    description:
      "I analyzed public 2021–2022 Computer Engineering admissions data to show how comparable national ranks can produce different scores—and therefore different converted outcomes under the Bavarian formula.",
    stack: ["Python", "pandas", "Matplotlib", "LaTeX"],
    visual: "research",
    links: [
      { label: "Read paper", href: "/ege-tekin-yks-score-volatility.pdf" },
    ],
  },
];

const projectIndex = [
  {
    year: "2026",
    projects: [
      {
        date: "Aug 2026",
        dateISO: "2026-08",
        title: "Ege Image Studio",
        description:
          "Reference-role and prompt workflows for a privacy-conscious image-studio prototype.",
        area: "Product",
        stack: "Next.js · TypeScript",
        links: [
          { label: "GitHub", href: "https://github.com/wh1tebrun/ege-image-studio" },
        ],
      },
      {
        date: "May 2026",
        dateISO: "2026-05",
        title: "Freiburg–Konstanz",
        description:
          "A ten-stage browser cycling game built around lane changes, traffic avoidance, stamina management, and collectible-driven scoring.",
        area: "Game",
        stack: "React · TypeScript",
        links: [{ label: "GitHub", href: "https://github.com/wh1tebrun/bisiklet" }],
      },
      {
        date: "May 2026",
        dateISO: "2026-05",
        title: "WG Cup — 2D Football",
        description:
          "A local two-player pixel-art football game with character stats and fixed-timestep physics.",
        area: "Game",
        stack: "Canvas · JavaScript",
        links: [
          { label: "GitHub", href: "https://github.com/wh1tebrun/football-game" },
        ],
      },
      {
        date: "Apr 2026",
        dateISO: "2026-04",
        title: "Regex → AIGER",
        description:
          "A compiler from regular-expression constraints to testable ASCII AIGER circuits.",
        area: "Research",
        stack: "Python · AIGER",
        links: [
          { label: "GitHub", href: "https://github.com/wh1tebrun/string-to-aiger" },
        ],
      },
      {
        date: "Feb 2026",
        dateISO: "2026-02",
        title: "YKS Score Volatility",
        description:
          "A reproducible analysis of year-dependent scores and Bavarian grade conversion outcomes.",
        area: "Research",
        stack: "Python · LaTeX",
        links: [
          { label: "Paper", href: "/ege-tekin-yks-score-volatility.pdf" },
        ],
      },
    ],
  },
  {
    year: "2025",
    projects: [
      {
        date: "Jul 2025",
        dateISO: "2025-07",
        title: "Delusions of Grandeur",
        description:
          "A six-person university action game with complementary roles, pathfinding, and a boss encounter.",
        area: "Team game",
        stack: "C# · MonoGame",
        links: [{ label: "GitHub", href: "https://github.com/wh1tebrun/dog" }],
      },
      {
        date: "Feb 2025",
        dateISO: "2025-02",
        title: "ROSE",
        description:
          "A customizable 3D romantic-story template with shareable URL-based experiences.",
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
        date: "Oct 2024",
        dateISO: "2024-10",
        title: "EGE Fitness Fan Page",
        description:
          "A responsive fan page bringing short videos, photography, quotes, and training content together.",
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
        description:
          "A four-language vocabulary platform with lessons, streaks, quests, gems, and local progress.",
        area: "Learning",
        stack: "HTML · CSS · JavaScript",
        links: [{ label: "GitHub", href: "https://github.com/wh1tebrun/language" }],
      },
      {
        date: "Mar 2024",
        dateISO: "2024-03",
        title: "Country Quiz",
        description:
          "A geography game with continent filters plus flag, map, and capital-city modes.",
        area: "Game",
        stack: "HTML · CSS · JavaScript",
        links: [{ label: "Live", href: "https://country-fawn.vercel.app/" }],
      },
      {
        date: "Mar 2024",
        dateISO: "2024-03",
        title: "Dishes Helper",
        description:
          "A winner-stays decision game for narrowing a 99-dish catalogue to one choice.",
        area: "Product",
        stack: "TypeScript · Vite",
        links: [
          { label: "Live", href: "https://dishes-helper.vercel.app/" },
          { label: "GitHub", href: "https://github.com/wh1tebrun/dishes" },
        ],
      },
    ],
  },
  {
    year: "2022",
    projects: [
      {
        date: "Oct 2022 – Jun 2023",
        dateISO: "2023-06",
        title: "Balloon Game",
        description:
          "A vertical-survival Unity game built around hazards, movement, shooting, and collectible abilities.",
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

const services = [
  {
    title: "Websites",
    description: "Clear, responsive sites designed for credibility and conversion.",
  },
  {
    title: "Web applications",
    description: "Focused interfaces, workflows, and APIs built around real product needs.",
  },
  {
    title: "MVPs & prototypes",
    description: "Fast, testable builds that turn an idea into something people can use.",
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

function ProjectVisual({ type }: { type: FeaturedProject["visual"] }) {
  if (type === "circuit") {
    return (
      <div className="concept-visual concept-circuit" aria-hidden="true">
        <div className="concept-label">Compiler pipeline</div>
        <div className="circuit-expression">/ab(c|d)*/</div>
        <div className="circuit-flow">
          <span>Regex</span><i>→</i><span>NFA</span><i>→</i><span>AIG</span>
        </div>
        <div className="circuit-output">
          <span>aag 14 4 0 2 10</span>
          <span>22 12 16</span>
          <span>24 18 20</span>
        </div>
      </div>
    );
  }

  if (type === "studio") {
    return (
      <div className="concept-visual concept-studio" aria-hidden="true">
        <div className="concept-label">Reference workflow</div>
        <div className="studio-references">
          <span><b>01</b> Identity</span>
          <span><b>02</b> Composition</span>
          <span><b>03</b> Style</span>
        </div>
        <div className="studio-prompt">
          <small>Prompt structure</small>
          <span /><span /><span className="short" />
        </div>
        <div className="studio-output">Deterministic mock output</div>
      </div>
    );
  }

  if (type === "decision") {
    return (
      <div className="concept-visual concept-decision" aria-hidden="true">
        <div className="concept-label">Pairwise decision path</div>
        <div className="decision-round">
          <span>Pasta</span><b>or</b><span>Sushi</span>
        </div>
        <div className="decision-line"><i /></div>
        <div className="decision-round decision-final">
          <span>Sushi</span><b>or</b><span>Tacos</span>
        </div>
        <div className="decision-winner">One clear choice</div>
      </div>
    );
  }

  return (
    <div className="concept-visual concept-research" aria-hidden="true">
      <div className="concept-label">Rank-to-score comparison</div>
      <svg viewBox="0 0 560 260" role="presentation">
        <path className="chart-grid" d="M62 24V220H536M62 73H536M62 122H536M62 171H536" />
        <path className="chart-line chart-line-a" d="M62 181C128 168 176 141 238 134S348 87 414 78 486 58 536 39" />
        <path className="chart-line chart-line-b" d="M62 205C126 191 183 176 238 158S350 126 414 112 490 93 536 72" />
        <circle className="chart-dot-a" cx="414" cy="78" r="5" />
        <circle className="chart-dot-b" cx="414" cy="112" r="5" />
      </svg>
      <div className="chart-legend"><span>2021 score curve</span><span>2022 score curve</span></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <AnchorNavigation />
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Ege Tekin, back to top">
            <span className="brand-avatar" aria-hidden="true">
              <Image
                src="/ege-tekin-portrait-large.jpg"
                alt=""
                width={56}
                height={56}
                sizes="40px"
              />
            </span>
            <span className="brand-copy">
              <strong>Ege Tekin</strong>
              <small>Software Engineer</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a className="nav-secondary" href="#project-index">Project index</a>
            <a className="nav-secondary" href="#background">Background</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="availability" href="mailto:ege.tekin@web.de">
            <span aria-hidden="true" /> Available for freelance
          </a>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero section-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer · Freiburg, Germany</p>
            <h1 id="hero-title">I build clear, reliable software for real-world problems.</h1>
            <p className="hero-intro">
              I&apos;m completing a B.Sc. in Computer Science at the University of Freiburg
              and working in applied photovoltaic R&amp;D at Fraunhofer ISE. I have been
              admitted to Akdeniz University&apos;s Medicine program, beginning Sep 2026. I&apos;m
              building toward a career at the intersection of software, research, and healthcare.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View selected work <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-quiet" href="mailto:ege.tekin@web.de">
                Discuss a project <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="hero-availability">
              <span aria-hidden="true" /> Available for selected freelance web and app projects.
            </p>
          </div>

          <aside className="hero-profile" aria-label="Ege Tekin profile summary">
            <figure className="hero-portrait">
              <Image
                src="/ege-tekin-portrait-large.jpg"
                alt="Portrait of Ege Tekin"
                fill
                priority
                sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) 40vw, 390px"
              />
            </figure>
            <dl className="profile-facts">
              <div><dt>Education</dt><dd>Computer Science · Freiburg</dd></div>
              <div><dt>Research</dt><dd>Fraunhofer ISE</dd></div>
              <div><dt>Admission</dt><dd>Medicine · Akdeniz · Starts Sep 2026</dd></div>
            </dl>
          </aside>
        </section>

        <div className="proof-strip" aria-label="Professional focus">
          <div className="section-shell proof-strip-inner">
            <span>Full-stack products</span><i aria-hidden="true" />
            <span>Research software</span><i aria-hidden="true" />
            <span>Interactive systems</span><i aria-hidden="true" />
            <span>MedTech direction</span>
          </div>
        </div>

        <section className="work section-shell" aria-labelledby="work-title">
          <div className="section-intro anchor-target" id="work">
            <p className="section-kicker">Selected work</p>
            <div>
              <h2 id="work-title">Depth where it matters. Clarity everywhere else.</h2>
              <p>Four projects that show how I approach technical systems, product decisions, research, and delivery.</p>
            </div>
          </div>

          <div className="featured-list">
            {featuredProjects.map((project) => (
              <article className="featured-project" key={project.title}>
                <div className="project-meta">
                  <span>{project.index}</span>
                  <time dateTime={project.dateISO}>{project.date}</time>
                  <span>{project.category}</span>
                </div>

                <div className="project-copy">
                  <p className="project-role">{project.role}</p>
                  <h3>{project.title}</h3>
                  {project.fullTitle ? <p className="project-full-title">{project.fullTitle}</p> : null}
                  <p className="project-headline">{project.headline}</p>
                  <p className="project-description">{project.description}</p>
                  <ul className="stack-list" aria-label={`${project.title} technology stack`}>
                    {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  <div className="project-actions">
                    {project.links.map((link) => (
                      <ExternalLink link={link} project={project.title} key={link.href} />
                    ))}
                  </div>
                </div>

                <ProjectVisual type={project.visual} />
              </article>
            ))}
          </div>
        </section>

        <section className="project-index section-shell" aria-labelledby="index-title">
          <div className="section-intro section-intro-compact anchor-target" id="project-index">
            <p className="section-kicker">Project index</p>
            <div>
              <h2 id="index-title">A chronological record of what I build.</h2>
              <p>Products, research, games, and experiments—ordered by first development date.</p>
            </div>
          </div>

          <div className="index-ledger">
            <div className="index-header" aria-hidden="true">
              <span>Date</span><span>Project</span><span>Area</span><span>Stack</span><span>Links</span>
            </div>
            {projectIndex.map((group) => (
              <section className="year-group" aria-labelledby={`year-${group.year}`} key={group.year}>
                <h3 id={`year-${group.year}`}>{group.year}</h3>
                <ol>
                  {group.projects.map((project) => (
                    <li className="index-row" key={`${project.date}-${project.title}`}>
                      <time dateTime={project.dateISO}><span className="sr-only">Date: </span>{project.date}</time>
                      <div className="index-project-copy">
                        <strong><span className="sr-only">Project: </span>{project.title}</strong>
                        <p>{project.description}</p>
                      </div>
                      <span className="index-area"><span className="sr-only">Area: </span>{project.area}</span>
                      <span className="index-stack"><span className="sr-only">Stack: </span>{project.stack}</span>
                      <div className="index-links">
                        <span className="sr-only">Links: </span>
                        {project.links.length ? project.links.map((link) => (
                          <ExternalLink link={link} project={project.title} key={link.href} />
                        )) : <span aria-label="No public link available">—</span>}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
          <p className="index-note">
            Links are shown where a public repository or live demo is available. Team work is labelled explicitly.
          </p>
        </section>

        <section className="background" aria-labelledby="background-title">
          <div className="section-shell">
            <div className="section-intro section-intro-dark anchor-target" id="background">
              <p className="section-kicker">Experience &amp; education</p>
              <div>
                <h2 id="background-title">A path from computer science and applied research into medicine.</h2>
                <p>A deliberate path across technical depth, hands-on research, and healthcare.</p>
              </div>
            </div>

            <div className="background-ledger">
              <article>
                <time dateTime="2026-09">Sep 2026</time>
                <div>
                  <p className="entry-type">Education · Admitted</p>
                  <h3>Akdeniz University</h3>
                  <strong>Medicine</strong>
                  <p>Admitted to the Medicine program, beginning in Sep 2026. Ranked 5,493rd nationally in Türkiye&apos;s university entrance examination.</p>
                </div>
              </article>

              <article>
                <span className="entry-date">Apr 2026 – Apr 2027</span>
                <div>
                  <p className="entry-type">Experience · Current</p>
                  <h3>Fraunhofer ISE</h3>
                  <strong>Working Student · Interconnection &amp; Encapsulation</strong>
                  <p>Support applied photovoltaic R&amp;D through hands-on peel testing and structured experimental work.</p>
                </div>
              </article>

              <article>
                <span className="entry-date">Oct 2023 – Sep 2026</span>
                <div>
                  <p className="entry-type">Education · In progress</p>
                  <h3>University of Freiburg</h3>
                  <strong>B.Sc. Computer Science (Informatik)</strong>
                  <p>Completing a broad foundation in software engineering, algorithms, formal methods, and computer systems.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="profile section-shell" aria-labelledby="profile-title">
          <div className="profile-story anchor-target" id="profile">
            <p className="section-kicker">Profile</p>
            <h2 id="profile-title">Technical depth, practical execution.</h2>
            <p className="profile-lead">
              I enjoy turning ambiguous ideas into maintainable software—especially when a project combines product thinking, technical depth, and real-world usefulness.
            </p>
            <p>
              Long term, I want to work at the intersection of software and medicine. Today, I&apos;m available for selected web, app, and product-prototype projects.
            </p>
          </div>

          <div className="services" aria-labelledby="services-title">
            <p className="minor-heading" id="services-title">What I can help with</p>
            <ol>
              {services.map((service, index) => (
                <li key={service.title}>
                  <span>0{index + 1}</span>
                  <div><h3>{service.title}</h3><p>{service.description}</p></div>
                </li>
              ))}
            </ol>
          </div>

          <div className="language-block">
            <p className="minor-heading">Languages</p>
            <dl>
              {languages.map(([language, level]) => (
                <div key={language}><dt>{language}</dt><dd>{level}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-inner anchor-target" id="contact">
            <p className="section-kicker">Contact</p>
            <h2 id="contact-title">Have a useful product to build?</h2>
            <p>I&apos;m available for selected freelance websites, web applications, and product prototypes. Send me a short note with the problem, scope, and timeline.</p>
            <a className="contact-email" href="mailto:ege.tekin@web.de">
              ege.tekin@web.de <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-secondary">
              <a href="https://www.linkedin.com/in/tekinege/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a href="https://github.com/wh1tebrun" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
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
