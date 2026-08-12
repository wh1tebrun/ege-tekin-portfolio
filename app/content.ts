export type ProjectLink = {
  label: string;
  href: string;
};

export type SelectedProject = {
  id: "regex-aiger" | "dishes-helper" | "freiburg-konstanz" | "delusions-of-grandeur";
  index: string;
  title: string;
  date: string;
  dateISO: string;
  context: string;
  headline: string;
  description: string;
  role: string;
  stack: string;
  theme: "compiler" | "dishes" | "route" | "delusions";
  layout: "wide" | "visual-right" | "visual-left";
  links: ProjectLink[];
};

export type ArchiveProject = {
  id:
    | "ege-image-studio"
    | "wg-cup"
    | "yks-score-volatility"
    | "rose"
    | "ege-fitness"
    | "egelingo"
    | "terminal-blocks"
    | "geo-heatmap-cli"
    | "country-quiz"
    | "asteroid-defense"
    | "python-coursework"
    | "balloon-game";
  theme:
    | "studio"
    | "football"
    | "research"
    | "rose"
    | "fitness"
    | "language"
    | "terminal"
    | "geo"
    | "country"
    | "asteroid"
    | "python"
    | "balloon";
  year: string;
  date: string;
  dateISO: string;
  title: string;
  description: string;
  area: string;
  stack: string;
  links: ProjectLink[];
};

export const contactLinks = {
  email: "mailto:ege.tekin@web.de",
  github: "https://github.com/wh1tebrun",
  linkedin: "https://www.linkedin.com/in/tekinege/",
} as const;

export const selectedProjects: SelectedProject[] = [
  {
    id: "regex-aiger",
    index: "01",
    title: "Regex → AIGER",
    date: "Apr 2026",
    dateISO: "2026-04",
    context: "Bachelor project · Formal methods",
    headline: "Compiling regular expressions into circuits that verification tools can inspect.",
    description:
      "A Python prototype compiler for bounded combinational and sequential latch-based ASCII AIGER circuits, checked through reference evaluation, deterministic fuzzing, external simulation, and bounded SAT artifacts.",
    role: "Compiler design, implementation & validation",
    stack: "Python · Regex ASTs · Automata · AIGER · SAT",
    theme: "compiler",
    layout: "wide",
    links: [{ label: "Source", href: "https://github.com/wh1tebrun/string-to-aiger" }],
  },
  {
    id: "dishes-helper",
    index: "02",
    title: "Dishes Helper",
    date: "Mar 2024",
    dateISO: "2024-03",
    context: "Independent project · Web application",
    headline: "A simple decision game for reaching one clear food choice.",
    description:
      "A static TypeScript application that narrows a 99-dish catalogue through winner-stays comparisons, with a pure game engine, semantic UI, responsive image pipeline, and automated quality checks.",
    role: "Product design & frontend engineering",
    stack: "TypeScript · Vite · Vitest · Semantic HTML · Vercel",
    theme: "dishes",
    layout: "visual-right",
    links: [
      { label: "Open live app", href: "https://dishes-helper.vercel.app/" },
      { label: "Source", href: "https://github.com/wh1tebrun/dishes" },
    ],
  },
  {
    id: "freiburg-konstanz",
    index: "03",
    title: "Freiburg–Konstanz",
    date: "May 2026",
    dateISO: "2026-05",
    context: "Independent project · Browser game",
    headline: "A warm, ten-stage cycling arcade across the Black Forest.",
    description:
      "A browser game with deterministic time-sliced simulation, seeded traffic and pickups, keyboard and touch controls, near-miss scoring, and defensive local progression.",
    role: "Game design, simulation & frontend development",
    stack: "React · TypeScript · Vite · Vitest",
    theme: "route",
    layout: "visual-left",
    links: [
      { label: "Play demo", href: "https://wh1tebrun.github.io/freiburg-konstanz/" },
      { label: "Source", href: "https://github.com/wh1tebrun/freiburg-konstanz" },
    ],
  },
  {
    id: "delusions-of-grandeur",
    index: "04",
    title: "Delusions of Grandeur",
    date: "Nov 2024 – Feb 2025",
    dateISO: "2024-11",
    context: "University project · Six-person team",
    headline: "Shipping gameplay systems inside a fast-moving MonoGame codebase.",
    description:
      "My work covered save/load and checkpoint state, enemy spawning and behaviour, weapon and shield cooldown feedback, integration fixes, and release-focused QA.",
    role: "Gameplay systems, persistence & integration",
    stack: "C# · MonoGame · .NET 8 · JSON persistence",
    theme: "delusions",
    layout: "wide",
    links: [
      {
        label: "Case study",
        href: "https://github.com/wh1tebrun/delusions-of-grandeur-case-study",
      },
    ],
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    id: "ege-image-studio",
    theme: "studio",
    year: "2026",
    date: "Aug 2026",
    dateISO: "2026-08",
    title: "Ege Image Studio",
    description: "A reference-driven image-workflow prototype with an honest simulated pipeline.",
    area: "Product",
    stack: "Next.js · React · TypeScript",
    links: [{ label: "GitHub", href: "https://github.com/wh1tebrun/ege-image-studio" }],
  },
  {
    id: "wg-cup",
    theme: "football",
    year: "2026",
    date: "May 2026",
    dateISO: "2026-05",
    title: "WG Cup — 2D Football",
    description: "A local two-player football game with character stats and fixed-timestep physics.",
    area: "Game",
    stack: "Canvas · JavaScript",
    links: [{ label: "GitHub", href: "https://github.com/wh1tebrun/football-game" }],
  },
  {
    id: "yks-score-volatility",
    theme: "research",
    year: "2026",
    date: "Feb 2026",
    dateISO: "2026-02",
    title: "YKS Score Volatility",
    description: "A research paper on year-dependent YKS outcomes under German grade conversion.",
    area: "Research",
    stack: "Python · pandas · Matplotlib · LaTeX",
    links: [{ label: "Read paper", href: "/ege-tekin-yks-score-volatility.pdf" }],
  },
  {
    id: "rose",
    theme: "rose",
    year: "2025",
    date: "Feb 2025",
    dateISO: "2025-02",
    title: "ROSE",
    description: "A customizable 3D romantic-story template with shareable URL experiences.",
    area: "Interactive",
    stack: "Three.js · JavaScript",
    links: [
      { label: "Open live app", href: "https://rose-wheat.vercel.app/" },
      { label: "GitHub", href: "https://github.com/wh1tebrun/rose" },
    ],
  },
  {
    id: "ege-fitness",
    theme: "fitness",
    year: "2024",
    date: "Oct 2024",
    dateISO: "2024-10",
    title: "EGE Fitness Fan Page",
    description: "A responsive fan page combining short videos, photography, and training content.",
    area: "Website",
    stack: "HTML · CSS · JavaScript",
    links: [
      { label: "Open live app", href: "https://ege-fitness.com/" },
      { label: "GitHub", href: "https://github.com/wh1tebrun/calisthenics" },
    ],
  },
  {
    id: "egelingo",
    theme: "language",
    year: "2024",
    date: "Sep 2024",
    dateISO: "2024-09",
    title: "Egelingo",
    description: "A four-language vocabulary platform with lessons, streaks, quests, and gems.",
    area: "Learning",
    stack: "HTML · CSS · JavaScript",
    links: [
      { label: "Open live app", href: "https://www.egelingo.com/" },
      { label: "GitHub", href: "https://github.com/wh1tebrun/language" },
    ],
  },
  {
    id: "terminal-blocks",
    theme: "terminal",
    year: "2024",
    date: "Jul 2024",
    dateISO: "2024-07",
    title: "Terminal Blocks",
    description: "A dependency-free falling-block terminal game with a testable core.",
    area: "Game",
    stack: "C++20 · CMake",
    links: [{ label: "GitHub", href: "https://github.com/wh1tebrun/terminal-blocks" }],
  },
  {
    id: "geo-heatmap-cli",
    theme: "geo",
    year: "2024",
    date: "Jun 2024",
    dateISO: "2024-06",
    title: "Geo Heatmap CLI",
    description: "A CLI that turns geographic point data into deterministic ASCII density maps.",
    area: "Tool",
    stack: "C++20 · CMake",
    links: [{ label: "GitHub", href: "https://github.com/wh1tebrun/geo-heatmap-cli" }],
  },
  {
    id: "country-quiz",
    theme: "country",
    year: "2024",
    date: "Mar 2024",
    dateISO: "2024-03",
    title: "Country Quiz",
    description: "A geography game with flag, map, capital-city, and leader modes, filterable by continent.",
    area: "Game",
    stack: "HTML · CSS · JavaScript",
    links: [{ label: "Open live app", href: "https://country-fawn.vercel.app/" }],
  },
  {
    id: "asteroid-defense",
    theme: "asteroid",
    year: "2023",
    date: "Dec 2023",
    dateISO: "2023-12",
    title: "Asteroid Defense",
    description: "A tested Python arcade game with deterministic logic and collision handling.",
    area: "Game",
    stack: "Python · Pygame",
    links: [{ label: "GitHub", href: "https://github.com/wh1tebrun/asteroid-defense" }],
  },
  {
    id: "python-coursework",
    theme: "python",
    year: "2023",
    date: "Oct 2023 – Feb 2024",
    dateISO: "2023-10",
    title: "Python Coursework",
    description: "A sheet-by-sheet archive of university programming exercises.",
    area: "Coursework",
    stack: "Python",
    links: [{ label: "GitHub", href: "https://github.com/wh1tebrun/python" }],
  },
  {
    id: "balloon-game",
    theme: "balloon",
    year: "2022",
    date: "Oct 2022 – Jun 2023",
    dateISO: "2022-10",
    title: "Balloon Game",
    description: "A vertical-survival Unity game with hazards, shooting, and abilities.",
    area: "Game",
    stack: "Unity · C#",
    links: [
      { label: "Watch demo", href: "https://www.youtube.com/watch?v=mxrglnKJKCQ" },
      { label: "GitHub", href: "https://github.com/wh1tebrun/game" },
    ],
  },
];

export const languages = [
  ["Turkish", "Native"],
  ["English", "C2"],
  ["German", "C2"],
  ["French", "B1"],
] as const;
