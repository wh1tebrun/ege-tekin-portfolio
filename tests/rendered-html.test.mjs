import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const stylesUrl = new URL("../app/globals.css", import.meta.url);
const layoutUrl = new URL("../app/layout.tsx", import.meta.url);
const anchorNavigationUrl = new URL("../app/anchor-navigation.tsx", import.meta.url);
const paperUrl = new URL("../public/ege-tekin-yks-score-volatility.pdf", import.meta.url);

function dataBlock(source, marker, label) {
  const start = source.indexOf(marker);
  const end = source.indexOf("\n];", start);

  assert.ok(start >= 0 && end > start, `${label} data is missing`);
  return source.slice(start, end);
}

test("uses the Calm Precision positioning and verified background", async () => {
  const [page, layout] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(layoutUrl, "utf8"),
  ]);

  assert.match(page, /Software Engineer · Freiburg, Germany/);
  assert.match(page, /Software for complex, real-world work\./);
  assert.match(page, /Evidence over decoration\./);
  assert.match(page, /University of Freiburg/);
  assert.match(page, /B\.Sc\. Computer Science \(Informatik\)/);
  assert.match(page, /Oct 2023 – Sep 2026/);
  assert.match(page, /Fraunhofer ISE/);
  assert.match(page, /Interconnection &amp; Encapsulation/);
  assert.match(page, /peel testing/i);
  assert.match(page, /Apr 2026 – Apr 2027/);
  assert.match(page, /Akdeniz University/);
  assert.match(page, /Education · Admitted/);
  assert.match(page, /Medicine · Starts Sep 2026/);
  assert.match(page, /Admitted to the Medicine program/);
  assert.match(page, /5,493/);

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
  assert.match(layout, /authors:\s*\[\{ name: "Ege Tekin" \}\]/);
  assert.match(layout, /creator:\s*"Ege Tekin"/);
  assert.match(layout, /alternates:\s*\{ canonical: "\/" \}/);
  assert.match(layout, /locale:\s*"en_US"/);
  assert.match(layout, /siteName:\s*"Ege Tekin"/);

  assert.doesNotMatch(page, /I build clear, reliable software for real-world problems\./);
  assert.doesNotMatch(page, /Incoming Medicine|Incoming Medical Student|Academic year 2026\/27/);
  assert.doesNotMatch(page, /MedTech developer|Medical Software Engineer/i);
});

test("features the strongest work and connects every verified public link", async () => {
  const page = await readFile(pageUrl, "utf8");
  const featuredData = dataBlock(page, "const featuredProjects:", "Featured projects");

  for (const title of [
    "Regex → AIGER",
    "Ege Image Studio",
    "Dishes Helper",
    "YKS Score Volatility",
  ]) {
    assert.ok(featuredData.includes(`title: "${title}"`), `Missing featured project: ${title}`);
  }
  assert.equal(
    (featuredData.match(/\n\s+title:\s*"/g) || []).length,
    4,
    "Selected work must contain exactly four featured projects",
  );

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
    assert.ok(page.includes(url), `Missing portfolio link: ${url}`);
  }

  assert.doesNotMatch(page, /Private build/);
  assert.doesNotMatch(page, /github\.com\/wh1tebrun\/python-foundations/);
  assert.doesNotMatch(page, /github\.com\/freiburg-missing-semester-course\/project-wh1tebrun/);
  assert.doesNotMatch(page, /github\.com\/wh1tebrun\/dog/);
  assert.doesNotMatch(page, /VitalLoop|GridScope|FocusFlow/);
});

test("keeps twelve non-featured projects in chronological archive order", async () => {
  const page = await readFile(pageUrl, "utf8");
  const archiveData = dataBlock(page, "const projectArchive = [", "Project archive");
  let cursor = -1;

  assert.equal(
    (archiveData.match(/\n\s+title:\s*"/g) || []).length,
    12,
    "Project archive must contain exactly twelve non-featured projects",
  );

  for (const marker of [
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
  ]) {
    const next = archiveData.indexOf(marker, cursor + 1);
    assert.ok(next > cursor, `${marker} is missing or out of chronological order`);
    cursor = next;
  }

  for (const featuredTitle of [
    "Regex → AIGER",
    "Ege Image Studio",
    "Dishes Helper",
    "YKS Score Volatility",
  ]) {
    assert.ok(
      !archiveData.includes(featuredTitle),
      `Featured project is duplicated in the archive: ${featuredTitle}`,
    );
    assert.equal(
      page.split(`title: "${featuredTitle}"`).length - 1,
      1,
      `Featured project data is duplicated: ${featuredTitle}`,
    );
  }
});

test("preserves the Calm Precision information architecture and accessibility", async () => {
  const [page, styles, anchorNavigation] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(stylesUrl, "utf8"),
    readFile(anchorNavigationUrl, "utf8"),
  ]);

  assert.match(page, /className="skip-link" href="#main-content"/);
  assert.match(page, /<AnchorNavigation \/>/);
  assert.match(anchorNavigation, /scrollIntoView/);
  assert.match(anchorNavigation, /prefers-reduced-motion: reduce/);
  assert.match(anchorNavigation, /window\.history\.pushState/);
  assert.match(page, /<main id="main-content" tabIndex=\{-1\}>/);
  assert.match(page, /aria-label="Primary navigation"/);

  for (const target of ["#work", "#background", "#project-index", "#contact"]) {
    assert.ok(page.includes(`href="${target}"`), `Missing navigation target: ${target}`);
  }

  const sectionMarkers = [
    'id="top" aria-labelledby="hero-title"',
    'aria-label="Education, research, and future direction"',
    'id="work" aria-labelledby="work-title"',
    'id="background" aria-labelledby="background-title"',
    'aria-labelledby="archive-title"',
    'id="contact" aria-labelledby="contact-title"',
  ];
  let sectionCursor = -1;
  for (const marker of sectionMarkers) {
    const next = page.indexOf(marker, sectionCursor + 1);
    assert.ok(next > sectionCursor, `Section is missing or out of order: ${marker}`);
    sectionCursor = next;
  }

  assert.match(page, /<details className="archive anchor-target" id="project-index">/);
  assert.match(page, /12 more projects · Oct 2022 – May 2026/);
  assert.equal((page.match(/<h1/g) || []).length, 1);
  assert.match(page, /alt="Portrait of Ege Tekin"/);
  assert.match(page, /<time dateTime=/);
  assert.match(page, /aria-label="Languages"/);
  assert.match(page, /aria-label="Experience and education"/);
  assert.match(page, /className="sr-only">Area: <\/span>/);
  assert.equal(
    (page.match(/target="_blank"/g) || []).length,
    (page.match(/rel="noreferrer"/g) || []).length,
  );

  assert.match(styles, /:focus-visible/);
  assert.match(styles, /min-height:\s*44px/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
});

test("implements the Calm Precision visual system and rejects the prior concept", async () => {
  const [page, styles, layout] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(stylesUrl, "utf8"),
    readFile(layoutUrl, "utf8"),
  ]);
  const source = `${page}\n${styles}`;

  for (const token of [
    /--ivory:\s*#f3f1ea/i,
    /--paper:\s*#fbfaf6/i,
    /--navy:\s*#14243a/i,
    /--teal:\s*#0f6b63/i,
    /--shell:\s*min\(1200px,\s*calc\(100vw - 64px\)\)/i,
    /--serif:\s*"Newsreader Variable"/i,
    /--sans:\s*"Manrope Variable"/i,
  ]) {
    assert.match(styles, token);
  }

  assert.match(styles, /body\s*\{[\s\S]*?font-size:\s*17px/);
  assert.match(styles, /\.hero h1\s*\{[\s\S]*?font-size:\s*clamp\(3\.25rem,\s*5\.8vw,\s*4\.25rem\)/);
  assert.match(layout, /@fontsource-variable\/manrope\/wght\.css/);
  assert.match(layout, /@fontsource-variable\/newsreader\/wght\.css/);
  assert.match(styles, /@media \(max-width: 1100px\)/);
  assert.match(styles, /@media \(max-width: 768px\)/);
  assert.match(styles, /\.anchor-target\s*\{[\s\S]*?scroll-margin-top:/);
  assert.doesNotMatch(styles, /scroll-padding-top:/);
  assert.doesNotMatch(styles, /#f4f2ed|#17202a|#842f3e/i);
  assert.doesNotMatch(layout, /headers\(\)/);
  assert.doesNotMatch(page, /ProjectVisual|concept-(?:circuit|studio|decision|research)|<svg/);

  for (const legacy of [
    "system-orbit",
    "orbit-one",
    "orbit-two",
    "system-card",
    "mock-window",
    "mock-toolbar",
    "mock-interface",
    "mock-sidebar",
    "mock-canvas",
    "profile-strip",
    "coming-soon",
    "ET / PATH 01",
    "FREIBURG → ANTALYA",
    "CODE ↔ CARE",
  ]) {
    assert.ok(!source.includes(legacy), `Legacy concept remains: ${legacy}`);
  }
});

test("ships the privacy-safe public YKS paper", async () => {
  const paper = await readFile(paperUrl);

  assert.ok(paper.length > 100_000, "Public paper PDF is unexpectedly small");
  assert.equal(paper.subarray(0, 4).toString(), "%PDF");
});
