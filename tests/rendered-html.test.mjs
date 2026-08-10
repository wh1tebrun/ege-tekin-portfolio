import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const stylesUrl = new URL("../app/globals.css", import.meta.url);
const layoutUrl = new URL("../app/layout.tsx", import.meta.url);
const anchorNavigationUrl = new URL("../app/anchor-navigation.tsx", import.meta.url);
const paperUrl = new URL("../public/ege-tekin-yks-score-volatility.pdf", import.meta.url);

test("uses the professional positioning and verified background", async () => {
  const [page, layout] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(layoutUrl, "utf8"),
  ]);

  assert.match(page, /Software Engineer · Freiburg, Germany/);
  assert.match(page, /I build clear, reliable software for real-world problems\./);
  assert.match(page, /University of Freiburg/);
  assert.match(page, /Fraunhofer ISE/);
  assert.match(page, /Interconnection &amp; Encapsulation/);
  assert.match(page, /peel testing/i);
  assert.match(page, /Apr 2026 – Apr 2027/);
  assert.match(page, /Oct 2023 – Sep 2026/);
  assert.match(page, /Akdeniz University/);
  assert.match(page, /Sep 2026/);
  assert.match(page, /Starts Sep 2026/);
  assert.match(page, /5,493/);
  assert.match(layout, /Ege Tekin — Software Engineer/);
  assert.match(layout, /<html lang="en">/);

  assert.doesNotMatch(page, /Incoming Medicine|Incoming Medical Student|Academic year 2026\/27/);
  assert.doesNotMatch(page, /MedTech developer|Medical Software Engineer/i);
});

test("features the strongest work and connects verified public repositories", async () => {
  const page = await readFile(pageUrl, "utf8");

  for (const title of [
    "Regex → AIGER",
    "Ege Image Studio",
    "Dishes Helper",
    "YKS Score Volatility",
  ]) {
    assert.ok(page.includes(title), `Missing featured project: ${title}`);
  }

  for (const url of [
    "https://github.com/wh1tebrun/string-to-aiger",
    "https://github.com/wh1tebrun/ege-image-studio",
    "https://github.com/wh1tebrun/dishes",
    "https://github.com/wh1tebrun/bisiklet",
    "https://github.com/wh1tebrun/language",
    "https://github.com/wh1tebrun/calisthenics",
    "https://github.com/wh1tebrun/rose",
    "https://github.com/wh1tebrun/terminal-blocks",
    "https://github.com/wh1tebrun/geo-heatmap-cli",
    "https://github.com/wh1tebrun/delusions-of-grandeur-case-study",
    "https://github.com/wh1tebrun/asteroid-defense",
    "https://github.com/wh1tebrun/python",
    "https://github.com/wh1tebrun/game",
    "https://github.com/wh1tebrun/football-game",
    "https://dishes-helper.vercel.app/",
    "https://country-fawn.vercel.app/",
  ]) {
    assert.ok(page.includes(url), `Missing portfolio link: ${url}`);
  }

  assert.doesNotMatch(page, /Private build/);
  assert.match(page, /\/ege-tekin-yks-score-volatility\.pdf/);
  assert.doesNotMatch(page, /github\.com\/freiburg-missing-semester-course\/project-wh1tebrun/);
  assert.doesNotMatch(page, /github\.com\/wh1tebrun\/dog/);
  assert.doesNotMatch(page, /VitalLoop|GridScope|FocusFlow/);
});

test("keeps the project index chronologically ordered", async () => {
  const page = await readFile(pageUrl, "utf8");
  const start = page.indexOf("const projectIndex = [");
  const end = page.indexOf("\n];", start);

  assert.ok(start >= 0 && end > start, "Project index data is missing");
  const indexData = page.slice(start, end);
  let cursor = -1;

  for (const marker of [
    "Ege Image Studio",
    "Freiburg–Konstanz",
    "WG Cup — 2D Football",
    "Regex → AIGER",
    "YKS Score Volatility",
    "ROSE",
    "Delusions of Grandeur",
    "EGE Fitness Fan Page",
    "Egelingo",
    "Terminal Blocks",
    "Geo Heatmap CLI",
    "Country Quiz",
    "Dishes Helper",
    "Asteroid Defense",
    "Python Coursework",
    "Balloon Game",
  ]) {
    const next = indexData.indexOf(marker, cursor + 1);
    assert.ok(next > cursor, `${marker} is missing or out of order`);
    cursor = next;
  }
});

test("preserves semantic navigation and accessibility", async () => {
  const [page, anchorNavigation] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(anchorNavigationUrl, "utf8"),
  ]);

  assert.match(page, /className="skip-link" href="#main-content"/);
  assert.match(page, /<AnchorNavigation \/>/);
  assert.match(anchorNavigation, /scrollIntoView/);
  assert.match(anchorNavigation, /prefers-reduced-motion: reduce/);
  assert.match(anchorNavigation, /window\.history\.pushState/);
  assert.match(page, /<main id="main-content" tabIndex=\{-1\}>/);
  assert.match(page, /aria-label="Primary navigation"/);

  for (const target of ["#work", "#project-index", "#background", "#contact"]) {
    assert.ok(page.includes(`href="${target}"`), `Missing navigation target: ${target}`);
  }

  assert.equal((page.match(/<h1/g) || []).length, 1);
  assert.match(page, /alt="Portrait of Ege Tekin"/);
  assert.match(page, /<time dateTime=/);
  assert.equal(
    (page.match(/target="_blank"/g) || []).length,
    (page.match(/rel="noreferrer"/g) || []).length,
  );
});

test("implements the editorial design system and removes the previous concept", async () => {
  const [page, styles] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(stylesUrl, "utf8"),
  ]);
  const source = `${page}\n${styles}`;

  for (const token of [
    /--canvas:\s*#f4f2ed/i,
    /--surface:\s*#fcfbf8/i,
    /--ink:\s*#17202a/i,
    /--muted:\s*#5f6870/i,
    /--line:\s*#d9d6cf/i,
    /--navy:\s*#19304d/i,
    /--accent:\s*#842f3e/i,
  ]) {
    assert.match(styles, token);
  }

  assert.match(styles, /@media \(max-width: 1100px\)/);
  assert.match(styles, /@media \(max-width: 768px\)/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /min-height: 44px/);
  assert.match(styles, /\.background :focus-visible/);
  assert.match(page, /className="sr-only">Area: <\/span>/);
  assert.doesNotMatch(await readFile(layoutUrl, "utf8"), /headers\(\)/);
  assert.match(styles, /\.anchor-target\s*\{[\s\S]*scroll-margin-top:/);
  assert.doesNotMatch(styles, /scroll-padding-top:/);

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
