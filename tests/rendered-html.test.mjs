import assert from "node:assert/strict";
import { stat } from "node:fs/promises";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

function assertInOrder(source, values, message) {
  let cursor = -1;
  for (const value of values) {
    const next = source.indexOf(value, cursor + 1);
    assert.ok(next > cursor, `${message}: ${value}`);
    cursor = next;
  }
}

test("keeps the verified identity, chronology, institutions, and section architecture", async () => {
  const page = await read("app/page.tsx");

  for (const fact of [
    "Ege Tekin",
    "Fraunhofer ISE",
    "Apr 2026",
    "Apr 2027",
    "University of Freiburg",
    "Oct 2023",
    "Sep 2026",
    "Akdeniz University",
    "Ranked 5,493rd nationally",
    "/institutions/fraunhofer-ise.png",
    "/institutions/university-of-freiburg.png",
    "/institutions/akdeniz-university.png",
  ]) {
    assert.ok(page.includes(fact), `Missing verified portfolio fact: ${fact}`);
  }

  assertInOrder(
    page,
    [
      ">Profile</h2>",
      ">Experience</h2>",
      ">Education</h2>",
      ">Selected work</h2>",
      ">Research &amp; experiments</h2>",
      ">Project archive</h2>",
      ">Capabilities</h2>",
      ">Contact</h2>",
    ],
    "Portfolio section is missing or out of order",
  );
});

test("uses one content source for exactly four selected projects in the curated sequence", async () => {
  const [content, featured] = await Promise.all([
    read("app/content.ts"),
    read("app/components/featured-work.tsx"),
  ]);

  assert.equal((content.match(/index: "0[1-4]"/g) ?? []).length, 4);
  assertInOrder(
    content,
    ["Regex → AIGER", "Dishes Helper", "Freiburg–Konstanz", "Delusions of Grandeur"],
    "Selected project is missing or out of order",
  );
  assert.match(featured, /selectedProjects\.map/);
  assert.match(featured, /curated sequence/);
  assert.doesNotMatch(featured, /title="|Bachelor’s thesis/);
});

test("foregrounds real sequential latch artifacts and separates validation claims", async () => {
  const regex = await read("app/components/demos/regex-pipeline-demo.tsx");

  assert.match(regex, /sequential latch backend/);
  assert.match(regex, /useState<StageId>\("latches"\)/);
  assert.match(regex, /aag 39 3 7 1 29/);
  assert.match(regex, /aag 56 4 11 1 41/);
  assert.match(regex, /aag 62 3 13 1 46/);
  assert.match(regex, /6 NFA-state latches/);
  assert.match(regex, /1 protocol guard/);
  assert.match(regex, /selected sequential models[\s\S]*rIC3/);
  assert.doesNotMatch(regex, /Maximum candidate length|L = 0|bounded backend/);
  assert.doesNotMatch(regex, /<input|<textarea/);
});

test("standardizes all YKS figures in one responsive viewing frame", async () => {
  const [explorer, css] = await Promise.all([
    read("app/components/demos/yks-figure-explorer.tsx"),
    read("app/components/demos/yks-figure-explorer.module.css"),
  ]);

  assert.equal((explorer.match(/\/projects\/yks\//g) ?? []).length, 3);
  assert.match(explorer, /role="tablist"/);
  assert.doesNotMatch(explorer, /style=\{\{ aspectRatio/);
  assert.match(css, /\.imageFrame\s*\{[\s\S]*?aspect-ratio:\s*16\s*\/\s*10/);
  assert.match(css, /object-fit:\s*contain/);
  assert.match(css, /@container yks-explorer/);
});

test("keeps interactive demonstrations honest and user controlled", async () => {
  const [studio, route, dishes, isabelle, delusions] = await Promise.all([
    read("app/components/demos/image-studio-demo.tsx"),
    read("app/components/demos/route-game-demo.tsx"),
    read("app/components/demos/dishes-product-showcase.tsx"),
    read("app/components/demos/isabelle-proof-demo.tsx"),
    read("app/components/demos/delusions-case-study.tsx"),
  ]);

  assert.match(studio, /Showcase simulation · representative outputs · no API call/);
  assert.match(studio, /No output yet/);
  assert.match(studio, /Reading references/);
  assert.match(studio, /Representative output ready/);

  assert.match(route, /"Start"/);
  assert.match(route, /"Pause"/);
  assert.match(route, /"Resume"/);
  assert.match(route, /Home End/);
  assert.match(route, /prefers-reduced-motion/);
  assert.match(route, /data-running/);

  assert.match(dishes, /\/projects\/dishes-helper-full\.png/);
  assert.match(dishes, /Try the decision mechanic/);
  assert.match(dishes, /Simplified mechanic preview/);

  assert.match(isabelle, /25/);
  assert.match(isabelle, /167/);
  assert.match(isabelle, /0/);
  assert.match(isabelle, /example_nested_language_correct/);
  assert.match(isabelle, /isabelle-proof-explorer/);

  assert.equal((delusions.match(/\/projects\/delusions-of-grandeur\//g) ?? []).length, 3);
  assert.match(delusions, /Authentic final-build captures/);
  assert.match(delusions, /30/);
});

test("retains twelve themed archive entries and only verified live-app destinations", async () => {
  const [content, archive, css] = await Promise.all([
    read("app/content.ts"),
    read("app/components/project-archive.tsx"),
    read("app/components/project-archive.module.css"),
  ]);

  assert.equal((content.match(/^ {4}id: /gm) ?? []).length, 16);
  assert.equal((content.match(/^ {4}area: /gm) ?? []).length, 12);
  for (const live of [
    "https://rose-wheat.vercel.app/",
    "https://ege-fitness.com/",
    "https://www.egelingo.com/",
    "https://country-fawn.vercel.app/",
  ]) {
    assert.ok(content.includes(live), `Missing verified live app: ${live}`);
  }
  assert.equal((content.match(/label: "Open live app"/g) ?? []).length, 5);
  assert.match(content, /label: "Read paper"/);
  assert.match(content, /label: "Watch demo"/);
  assert.match(content, /label: "Source-only archive"/);
  assert.match(content, /https:\/\/github\.com\/wh1tebrun\/delusions-of-grandeur/);
  assert.match(archive, /data-theme=\{project\.theme\}/);
  assert.match(archive, /sort\(\(left, right\) => right\.dateISO/);
  for (const theme of ["studio", "football", "research", "rose", "fitness", "language", "terminal", "geo", "country", "asteroid", "python", "balloon"]) {
    assert.ok(css.includes(`[data-theme="${theme}"]`), `Missing archive theme: ${theme}`);
  }
});

test("ships local research, portrait, institution, and interaction assets", async () => {
  const assets = [
    ["public/ege-tekin-portrait-large.jpg", 100_000],
    ["public/ege-tekin-yks-score-volatility.pdf", 100_000],
    ["public/projects/yks/rank-stability.png", 50_000],
    ["public/projects/yks/score-volatility.png", 50_000],
    ["public/projects/yks/grade-gap.png", 10_000],
    ["public/projects/dishes-helper.webp", 40_000],
    ["public/projects/dishes-helper-full.png", 80_000],
    ["public/projects/image-studio/boardroom.webp", 50_000],
    ["public/projects/freiburg-konstanz/backgrounds/freiburg-im-breisgau.webp", 100_000],
    ["public/projects/freiburg-konstanz/player/melissa-normal.webp", 40_000],
    ["public/projects/delusions-of-grandeur/checkpoint-map.png", 500_000],
    ["public/projects/delusions-of-grandeur/in-game.png", 600_000],
    ["public/projects/delusions-of-grandeur/endboss-fight.png", 500_000],
    ["public/institutions/fraunhofer-ise.png", 5_000],
    ["public/institutions/university-of-freiburg.png", 20_000],
    ["public/institutions/akdeniz-university.png", 15_000],
  ];

  for (const [path, minimumSize] of assets) {
    const info = await stat(new URL(`../${path}`, import.meta.url));
    assert.ok(info.size > minimumSize, `${path} is missing or unexpectedly small`);
  }
});

test("provides responsive, accessible, reduced-motion, and print foundations", async () => {
  const [page, globals, featured, archive] = await Promise.all([
    read("app/page.tsx"),
    read("app/globals.css"),
    read("app/components/featured-work.module.css"),
    read("app/components/project-archive.module.css"),
  ]);

  assert.match(page, /className="skip-link" href="#main-content"/);
  assert.match(page, /<time dateTime="2026-04">/);
  assert.match(page, /id="work"/);
  assert.match(page, /id="project-index"/);
  assert.match(page, /id="contact"/);
  assert.match(page, /Regex-to-NFA Verification/);
  assert.match(page, /University GitLab · access required/);
  assert.match(globals, /scrollbar-gutter:\s*stable/);
  assert.match(globals, /\.site-header\s*\{[\s\S]*?position:\s*sticky/);
  assert.match(globals, /\.section-rail h2\s*\{[\s\S]*?white-space:\s*nowrap/);
  assert.match(globals, /@media \(max-width: 900px\)/);
  assert.match(globals, /@media \(forced-colors: active\)/);
  assert.match(globals, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(globals, /@media print/);
  assert.match(featured, /container:\s*project-demo/);
  assert.match(archive, /@container project-archive/);
});
