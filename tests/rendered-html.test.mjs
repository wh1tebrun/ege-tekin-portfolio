import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const stylesUrl = new URL("../app/globals.css", import.meta.url);
const layoutUrl = new URL("../app/layout.tsx", import.meta.url);
const paperUrl = new URL("../public/ege-tekin-yks-score-volatility.pdf", import.meta.url);

function dataBlock(source, markers, label) {
  const marker = markers.find((candidate) => source.includes(candidate));
  assert.ok(marker, `${label} declaration is missing`);

  const start = source.indexOf(marker);
  const end = source.indexOf("\n];", start);
  assert.ok(end > start, `${label} data is incomplete`);
  return source.slice(start, end);
}

function assertInOrder(source, markers, label) {
  let cursor = -1;
  for (const marker of markers) {
    const next = source.indexOf(marker, cursor + 1);
    assert.ok(next > cursor, `${label} is missing or out of order: ${marker}`);
    cursor = next;
  }
}

test("presents a verified executive résumé without marketing slogans", async () => {
  const [page, layout] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(layoutUrl, "utf8"),
  ]);

  assert.match(page, /Résumé · August 2026/);
  assert.match(page, /<h1 id="page-title">Ege Tekin<\/h1>/);
  assert.match(page, /Software Engineer · Freiburg, Germany/);
  assert.match(page, /University of Freiburg/);
  assert.match(page, /B\.Sc\. Computer Science \(Informatik\)/);
  assert.match(page, /Oct 2023 – Sep 2026/);
  assert.match(page, /Fraunhofer ISE/);
  assert.match(page, /Interconnection &amp; Encapsulation/);
  assert.match(page, /peel testing/i);
  assert.match(page, /Apr 2026 – Apr 2027/);
  assert.match(page, /Akdeniz University/);
  assert.match(page, /Medicine · Admitted · Starts Sep 2026/);
  assert.match(page, /5,493/);
  assert.match(page, /medical technology/i);
  assert.match(page, /Available for freelance websites, web applications, and product prototypes\./i);

  for (const language of [
    '["Turkish", "Native"]',
    '["English", "C2"]',
    '["German", "C2"]',
    '["French", "B1"]',
  ]) {
    assert.ok(page.includes(language), `Missing verified language level: ${language}`);
  }

  assert.match(layout, /Ege Tekin — Software Engineer/);
  assert.match(layout, /<html lang="en">/);
  assert.match(layout, /applicationName:\s*"Ege Tekin Portfolio"/);
  assert.match(layout, /authors:\s*\[\{ name: "Ege Tekin" \}\]/);
  assert.match(layout, /creator:\s*"Ege Tekin"/);
  assert.match(layout, /alternates:\s*\{ canonical: "\/" \}/);
  assert.match(layout, /locale:\s*"en_US"/);
  assert.match(layout, /siteName:\s*"Ege Tekin"/);
  assert.equal(
    (layout.match(/alt: "Ege Tekin — Software Engineer\. Freiburg, 2026\."/g) || []).length,
    2,
    "Open Graph and X metadata must use the executive résumé preview description",
  );

  assert.doesNotMatch(page, /I build clear, reliable software for real-world problems\./);
  assert.doesNotMatch(page, /Software for complex, real-world work\.|Evidence over decoration\./);
  assert.doesNotMatch(page, /Incoming Medicine|Incoming Medical Student|Academic year 2026\/27/);
  assert.doesNotMatch(page, /MedTech developer|Medical Software Engineer/i);
});

test("uses a document-first résumé information architecture", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /<main className="resume section-shell" id="main-content" tabIndex=\{-1\}>/);
  assert.equal((page.match(/<h1/g) || []).length, 1);
  assert.equal((page.match(/className="masthead anchor-target"/g) || []).length, 1);

  assertInOrder(
    page,
    [
      'id="page-title">Ege Tekin',
      'id="summary-title">Profile',
      'id="experience-title">Experience',
      'id="education-title">Education',
      'id="work-title">Selected work',
      'id="archive-title">Additional work',
      'id="skills-title">Technical profile',
      'id="contact-title">Contact',
    ],
    "Résumé section",
  );

  for (const anchor of ["top", "background", "work", "project-index", "contact"]) {
    assert.ok(page.includes(`id="${anchor}"`), `Missing preserved section anchor: #${anchor}`);
  }

  assert.doesNotMatch(page, /AnchorNavigation|className="site-header"|<nav\b/);
  assert.doesNotMatch(page, /className="hero|hero-|className="credibility/);
});

test("keeps exactly four selected projects in newest-first order", async () => {
  const page = await readFile(pageUrl, "utf8");
  const selectedData = dataBlock(
    page,
    ["const selectedProjects: SelectedProject[] = [", "const selectedProjects = ["],
    "Selected projects",
  );

  assert.equal(
    (selectedData.match(/\n\s+title:\s*"/g) || []).length,
    4,
    "Selected work must contain exactly four projects",
  );
  assertInOrder(
    selectedData,
    ["Ege Image Studio", "Regex → AIGER", "YKS Score Volatility", "Dishes Helper"],
    "Selected project",
  );
  assertInOrder(
    selectedData,
    ["Aug 2026", "Apr 2026", "Feb 2026", "Mar 2024"],
    "Selected project date",
  );
});

test("keeps twelve additional projects newest-first without repeating selected work", async () => {
  const page = await readFile(pageUrl, "utf8");
  const additionalData = dataBlock(
    page,
    ["const additionalProjects = [", "const projectIndex = ["],
    "Additional projects",
  );

  assert.equal(
    (additionalData.match(/\n\s+title:\s*"/g) || []).length,
    12,
    "Additional projects must contain exactly twelve non-selected projects",
  );
  assertInOrder(
    additionalData,
    [
      "Freiburg–Konstanz",
      "WG Cup — 2D Football",
      "ROSE",
      "Delusions of Grandeur",
      "EGE Fitness Fan Page",
      "Egelingo",
      "Terminal Blocks",
      "Geo Heatmap CLI",
      "Country Quiz",
      "Asteroid Defense",
      "Python Coursework",
      "Balloon Game",
    ],
    "Additional project",
  );

  for (const selectedTitle of [
    "Ege Image Studio",
    "Regex → AIGER",
    "YKS Score Volatility",
    "Dishes Helper",
  ]) {
    assert.ok(
      !additionalData.includes(selectedTitle),
      `Selected project is duplicated in additional projects: ${selectedTitle}`,
    );
    assert.equal(
      page.split(`title: "${selectedTitle}"`).length - 1,
      1,
      `Selected project data is duplicated: ${selectedTitle}`,
    );
  }

  assert.match(page, /12 projects · Oct 2022 – May 2026/);
  assert.doesNotMatch(page, /16 projects · Oct 2022 – Aug 2026/);
});

test("connects every verified project, publication, contact, and profile link", async () => {
  const page = await readFile(pageUrl, "utf8");

  for (const url of [
    "https://github.com/wh1tebrun/string-to-aiger",
    "https://github.com/wh1tebrun/ege-image-studio",
    "https://github.com/wh1tebrun/dishes",
    "https://github.com/wh1tebrun/bisiklet",
    "https://github.com/wh1tebrun/football-game",
    "https://github.com/wh1tebrun/rose",
    "https://github.com/wh1tebrun/delusions-of-grandeur-case-study",
    "https://github.com/wh1tebrun/calisthenics",
    "https://github.com/wh1tebrun/language",
    "https://github.com/wh1tebrun/terminal-blocks",
    "https://github.com/wh1tebrun/geo-heatmap-cli",
    "https://github.com/wh1tebrun/asteroid-defense",
    "https://github.com/wh1tebrun/python",
    "https://github.com/wh1tebrun/game",
    "https://dishes-helper.vercel.app/",
    "https://country-fawn.vercel.app/",
    "https://www.youtube.com/watch?v=mxrglnKJKCQ",
    "https://www.linkedin.com/in/tekinege/",
    "https://github.com/wh1tebrun",
    "mailto:ege.tekin@web.de",
    "/ege-tekin-yks-score-volatility.pdf",
  ]) {
    assert.ok(page.includes(url), `Missing verified link: ${url}`);
  }

  assert.match(page, /Year-Dependent YKS Score Volatility and Unfair Outcomes/);
  assert.doesNotMatch(page, /Private build/);
  assert.doesNotMatch(page, /github\.com\/wh1tebrun\/python-foundations/);
  assert.doesNotMatch(page, /github\.com\/freiburg-missing-semester-course\/project-wh1tebrun/);
  assert.doesNotMatch(page, /github\.com\/wh1tebrun\/dog/);
  assert.doesNotMatch(page, /VitalLoop|GridScope|FocusFlow/);
});

test("preserves accessibility, anchor offsets, and print behavior", async () => {
  const [page, styles] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(stylesUrl, "utf8"),
  ]);

  assert.match(page, /className="skip-link" href="#main-content"/);
  assert.match(page, /alt="Portrait of Ege Tekin"/);
  assert.match(page, /<address>/);
  assert.match(page, /<time[^>]*dateTime=/);
  assert.match(page, /<details className="archive anchor-target" id="project-index">/);
  assert.match(page, /<summary>/);
  assert.match(page, /className="sr-only">Area: <\/span>/);
  assert.equal(
    (page.match(/target="_blank"/g) || []).length,
    (page.match(/rel="noreferrer"/g) || []).length,
  );

  assert.match(styles, /:focus-visible/);
  assert.match(styles, /min-height:\s*44px/);
  assert.match(styles, /\.anchor-target\s*\{[\s\S]*?scroll-margin-top:/);
  assert.doesNotMatch(styles, /scroll-padding-top:/);
  assert.match(styles, /@media \(max-width: 768px\)/);
  assert.match(styles, /@media print/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
});

test("uses the restrained executive résumé visual system", async () => {
  const [page, styles, layout] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(stylesUrl, "utf8"),
    readFile(layoutUrl, "utf8"),
  ]);
  const source = `${page}\n${styles}`;

  for (const token of [
    /--page:\s*#e9e8e3/i,
    /--paper:\s*#fffefa/i,
    /--ink:\s*#171717/i,
    /--muted:\s*#626262/i,
    /--rule:\s*#bdbcb7/i,
    /--accent:\s*#1647d4/i,
    /--shell:\s*min\(1000px,\s*calc\(100vw - 64px\)\)/i,
    /--sans:\s*"Manrope Variable"/i,
  ]) {
    assert.match(styles, token);
  }

  assert.match(styles, /body\s*\{[\s\S]*?font-size:\s*16px/);
  assert.match(styles, /\.identity h1\s*\{[\s\S]*?font-size:\s*clamp\(2\.75rem,\s*5vw,\s*3\.25rem\)/);
  assert.match(layout, /@fontsource-variable\/manrope\/wght\.css/);
  assert.doesNotMatch(styles, /#f3f1ea|#14243a|#0f6b63|#842f3e/i);
  assert.doesNotMatch(source, /project-card|project-grid|stack-list|button-primary|availability-note/);
  assert.doesNotMatch(styles, /translateY\(-3px\)|animation:\s*reveal/i);
  assert.doesNotMatch(layout, /headers\(\)/);
});

test("ships the privacy-safe public YKS paper", async () => {
  const paper = await readFile(paperUrl);

  assert.ok(paper.length > 100_000, "Public paper PDF is unexpectedly small");
  assert.equal(paper.subarray(0, 4).toString(), "%PDF");
});
