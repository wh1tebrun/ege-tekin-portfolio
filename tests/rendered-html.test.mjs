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

test("presents the verified v2 identity, direction, and background", async () => {
  const [page, layout] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(layoutUrl, "utf8"),
  ]);

  assert.match(page, /Résumé · August 2026/);
  assert.match(page, /<h1 id="page-title">Ege Tekin<\/h1>/);
  assert.match(
    page,
    /<p className="role">\s*<span>Software Engineering · Applied Research<span className="sr-only"> · <\/span><\/span>\s*<span>Medical Technology<\/span>\s*<\/p>/,
  );
  assert.match(page, /<p className="location">Freiburg, Germany<\/p>/);
  assert.match(
    page,
    /<dt>Currently<\/dt>\s*<dd><strong>Fraunhofer ISE<\/strong><span>Freiburg<\/span><\/dd>/,
  );
  assert.match(
    page,
    /<dt>Next<\/dt>\s*<dd><strong>Medicine<\/strong><span>Sep 2026<\/span><\/dd>/,
  );
  assert.match(
    page,
    /<p className="summary-lead">\s*I build software at the intersection of engineering and applied research\.\s*<\/p>/,
  );
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

  assert.match(layout, /Ege Tekin — Software Engineering & Applied Research/);
  assert.match(layout, /<html lang="en">/);
  assert.match(layout, /applicationName:\s*"Ege Tekin Portfolio"/);
  assert.match(layout, /authors:\s*\[\{ name: "Ege Tekin" \}\]/);
  assert.match(layout, /creator:\s*"Ege Tekin"/);
  assert.match(layout, /alternates:\s*\{ canonical: "\/" \}/);
  assert.match(layout, /locale:\s*"en_US"/);
  assert.match(layout, /siteName:\s*"Ege Tekin"/);
  assert.equal(
    (layout.match(/alt: "Ege Tekin — Software Engineering, Applied Research, and Medical Technology\. Freiburg, 2026\."/g) || []).length,
    2,
    "Open Graph and X metadata must use the v2 editorial preview description",
  );

  assert.doesNotMatch(page, /I build clear, reliable software for real-world problems\./);
  assert.doesNotMatch(page, /Software for complex, real-world work\.|Evidence over decoration\./);
  assert.doesNotMatch(page, /Incoming Medicine|Incoming Medical Student|Academic year 2026\/27/);
  assert.doesNotMatch(page, /MedTech developer|Medical Software Engineer/i);
});

test("uses a seven-section editorial résumé information architecture", async () => {
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
      'id="work-title">Featured work',
      'id="archive-title">Project archive',
      'id="skills-title">Capabilities',
      'id="contact-title">Contact',
    ],
    "Résumé section",
  );

  for (const anchor of ["top", "background", "work", "project-index", "contact"]) {
    assert.ok(page.includes(`id="${anchor}"`), `Missing preserved section anchor: #${anchor}`);
  }

  for (const [index, id, label] of [
    ["01", "summary-title", "Profile"],
    ["02", "experience-title", "Experience"],
    ["03", "education-title", "Education"],
    ["04", "work-title", "Featured work"],
    ["05", "archive-title", "Project archive"],
    ["06", "skills-title", "Capabilities"],
    ["07", "contact-title", "Contact"],
  ]) {
    assert.ok(
      page.includes(`data-index="${index}" id="${id}">${label}`),
      `Missing section index ${index} for ${label}`,
    );
  }
  assert.equal((page.match(/data-index="0[1-7]"/g) || []).length, 7);
  assert.match(
    page,
    /<section className="resume-section capabilities-section" aria-labelledby="skills-title">/,
  );
  assert.doesNotMatch(page, /Selected work|Archive &amp; capabilities|Technical profile/);

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

test("keeps all twelve archive projects chronological while curating seven for the initial view", async () => {
  const page = await readFile(pageUrl, "utf8");
  const additionalData = dataBlock(
    page,
    ["const additionalProjects = [", "const projectIndex = ["],
    "Additional projects",
  );
  const primaryArchiveData = dataBlock(
    page,
    ["const primaryArchiveTitles = ["],
    "Primary archive titles",
  );
  const primaryTitles = [...primaryArchiveData.matchAll(/\n\s+"([^"]+)",?/g)].map(
    (match) => match[1],
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

  assert.deepEqual(
    primaryTitles,
    [
      "Freiburg–Konstanz",
      "WG Cup — 2D Football",
      "ROSE",
      "Delusions of Grandeur",
      "EGE Fitness Fan Page",
      "Egelingo",
      "Terminal Blocks",
    ],
    "The initial archive view must contain the seven curated projects in chronological order",
  );
  assert.equal(new Set(primaryTitles).size, 7, "Curated archive titles must be unique");
  for (const title of primaryTitles) {
    assert.ok(additionalData.includes(`title: "${title}"`), `Unknown curated project: ${title}`);
  }
  assertInOrder(additionalData, primaryTitles, "Curated archive project");
  assert.match(
    page,
    /const primaryArchiveProjects = archiveProjects\.filter\(\(project\) =>\s*primaryArchiveTitles\.includes\(project\.title\),\s*\);/,
  );
  assert.match(
    page,
    /const remainingArchiveProjects = archiveProjects\.filter\(\s*\(project\) => !primaryArchiveTitles\.includes\(project\.title\),\s*\);/,
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

  assert.match(page, /<ArchiveGroups projects=\{primaryArchiveProjects\} idPrefix="archive-primary" \/>/);
  assert.match(page, /<ArchiveGroups projects=\{remainingArchiveProjects\} idPrefix="archive-earlier" \/>/);
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
  assert.match(page, /<address\b/);
  assert.match(page, /<time[^>]*dateTime=/);
  assert.match(
    page,
    /<section className="resume-section archive-section anchor-target" id="project-index" aria-labelledby="archive-title">/,
  );
  assert.match(page, /<section className="archive archive-primary" aria-label="Curated project archive">/);
  const expansionTag = page.match(/<details className="archive-expansion"[^>]*>/)?.[0];
  assert.ok(expansionTag, "The full archive must use a native details disclosure");
  assert.doesNotMatch(expansionTag, /\sopen(?:=|\s|>)/, "The full archive must be closed by default");
  assert.match(
    page,
    /<summary>\s*<span>View full archive<\/span>\s*<span>\{remainingArchiveProjects\.length\} earlier projects · Oct 2022 – Jun 2024 <i aria-hidden="true">\+<\/i><\/span>\s*<\/summary>/,
  );
  assert.match(page, /<div className="archive-expansion-content">/);
  assert.match(page, /className="sr-only">Area: <\/span>/);
  assert.equal(
    (page.match(/target="_blank"/g) || []).length,
    (page.match(/rel="noreferrer"/g) || []).length,
  );
  assert.equal((page.match(/profile \(opens in a new tab\)/g) || []).length, 4);

  assert.match(styles, /:focus-visible/);
  assert.match(styles, /min-height:\s*44px/);
  assert.match(styles, /\.anchor-target\s*\{[\s\S]*?scroll-margin-top:/);
  assert.doesNotMatch(styles, /scroll-padding-top:/);
  assert.match(styles, /@media \(max-width: 768px\)/);
  assert.match(styles, /@media print/);
  assert.match(styles, /@media print\s*\{[\s\S]*?#skills-title::before\s*\{\s*content:\s*"05";/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
});

test("uses the v2 editorial typography and restrained résumé visual system", async () => {
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
    /--muted:\s*#565656/i,
    /--rule:\s*#bdbcb7/i,
    /--rule-light:\s*#e7e5df/i,
    /--accent:\s*#1647d4/i,
    /--shell:\s*min\(1120px,\s*calc\(100vw - 48px\)\)/i,
    /--font-instrument:\s*"Instrument Serif"/i,
    /--serif:\s*var\(--font-instrument\),\s*Georgia/i,
    /--sans:\s*"Manrope Variable"/i,
  ]) {
    assert.match(styles, token);
  }

  assert.match(styles, /body\s*\{[\s\S]*?font-size:\s*16px/);
  assert.match(styles, /body\s*\{[\s\S]*?overflow-x:\s*clip;[\s\S]*?line-height:\s*1\.6/);
  assert.match(styles, /\.entry-description\s*\{[\s\S]*?font-size:\s*15px;[\s\S]*?line-height:\s*1\.7;/);
  assert.match(styles, /\.project-notes > p\s*\{[\s\S]*?font-size:\s*15px;[\s\S]*?line-height:\s*1\.74;/);
  assert.match(styles, /\.archive-project strong\s*\{[\s\S]*?font-size:\s*16px;[\s\S]*?line-height:\s*1\.4;/);
  assert.match(styles, /\.archive-project p\s*\{[\s\S]*?font-size:\s*13px;[\s\S]*?line-height:\s*1\.6;/);
  assert.match(styles, /\.capability-groups dd\s*\{[\s\S]*?font-size:\s*14px;[\s\S]*?line-height:\s*1\.68;/);
  assert.match(styles, /\.identity h1\s*\{[\s\S]*?font-family:\s*var\(--serif\);[\s\S]*?font-size:\s*clamp\(4\.5rem,\s*8\.6vw,\s*6\.5rem\)/);
  assert.match(layout, /@fontsource-variable\/manrope\/wght\.css/);
  assert.match(layout, /@fontsource\/instrument-serif/);
  assert.doesNotMatch(styles, /#f3f1ea|#14243a|#0f6b63|#842f3e/i);
  assert.doesNotMatch(source, /project-card|project-grid|stack-list|button-primary|availability-note/);
  assert.doesNotMatch(styles, /translateY\(-3px\)|animation:\s*reveal/i);
  assert.doesNotMatch(layout, /headers\(\)/);
});

test("uses screenshot-led project showcases across responsive and print layouts", async () => {
  const [page, styles] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(stylesUrl, "utf8"),
  ]);
  const selectedData = dataBlock(
    page,
    ["const selectedProjects: SelectedProject[] = [", "const selectedProjects = ["],
    "Selected projects",
  );
  const screenshots = [
    [
      "/projects/ege-image-studio.webp",
      "Reference organization and prompt refinement workspace.",
    ],
    [
      "/projects/regex-aiger.webp",
      "Compilation pipeline from regular-expression constraints to ASCII AIGER.",
    ],
    [
      "/projects/yks-volatility.webp",
      "Rank-to-score comparison from the published analysis.",
    ],
    [
      "/projects/dishes-helper.webp",
      "Game setup before the pairwise selection flow begins.",
    ],
  ];

  assert.match(page, /function ProjectShowcase\(\{ project \}/);
  assert.equal(
    (page.match(/<ProjectShowcase project=\{project\} key=\{project\.title\} \/>/g) || []).length,
    1,
    "Selected work must render through ProjectShowcase",
  );
  assert.match(page, /<figure className="project-media">/);
  assert.match(page, /src=\{project\.image\.src\}/);
  assert.match(page, /alt=\{project\.image\.alt\}/);
  assert.match(page, /<figcaption>\{project\.image\.caption\}<\/figcaption>/);
  assert.equal((selectedData.match(/\n\s+image:\s*\{/g) || []).length, 4);

  for (const [src, caption] of screenshots) {
    assert.ok(selectedData.includes(`src: "${src}"`), `Missing screenshot: ${src}`);
    assert.ok(selectedData.includes(`caption: "${caption}"`), `Missing caption for ${src}`);

    const image = await readFile(new URL(`../public${src}`, import.meta.url));
    assert.ok(image.length > 20_000, `Screenshot is unexpectedly small: ${src}`);
    assert.equal(image.subarray(0, 4).toString(), "RIFF", `Invalid WebP header: ${src}`);
    assert.equal(image.subarray(8, 12).toString(), "WEBP", `Invalid WebP format: ${src}`);
  }

  for (const selector of [
    ".project-showcase",
    ".project-showcase-layout",
    ".project-media",
    ".project-image-frame",
    ".project-notes",
  ]) {
    assert.ok(styles.includes(selector), `Missing showcase style: ${selector}`);
  }

  assert.match(
    styles,
    /\.masthead\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0, 1fr\) minmax\(350px, 400px\);/,
  );
  assert.match(
    styles,
    /\.project-showcase-layout\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0, 7fr\) minmax\(230px, 5fr\);/,
  );
  assert.match(
    styles,
    /@media \(max-width: 1020px\)\s*\{[\s\S]*?\.masthead\s*\{[\s\S]*?grid-template-columns:\s*1fr;[\s\S]*?\.project-showcase-layout,[\s\S]*?\.project-showcase--media-right \.project-showcase-layout\s*\{[\s\S]*?grid-template-columns:\s*1fr;[\s\S]*?\.project-showcase--media-right \.project-media,[\s\S]*?grid-column:\s*1;[\s\S]*?grid-row:\s*auto;/,
  );
  assert.match(
    styles,
    /@media \(max-width: 768px\)\s*\{[\s\S]*?\.summary,[\s\S]*?\.resume-section\s*\{[\s\S]*?grid-template-columns:\s*1fr;[\s\S]*?\.project-image-frame img\s*\{[\s\S]*?width:\s*100%;[\s\S]*?\.archive-expansion > summary\s*\{[\s\S]*?flex-direction:\s*column;[\s\S]*?\.archive-row\s*\{[\s\S]*?grid-template-columns:\s*1fr auto;[\s\S]*?\.capability-groups\s*\{[\s\S]*?grid-template-columns:\s*1fr;/,
  );
  assert.match(
    styles,
    /@media \(max-width: 480px\)\s*\{[\s\S]*?\.masthead-aside\s*\{[\s\S]*?grid-template-columns:\s*1fr 116px;[\s\S]*?\.cv-entry\s*\{[\s\S]*?grid-template-columns:\s*1fr;[\s\S]*?\.project-notes dl > div\s*\{[\s\S]*?grid-template-columns:\s*1fr;[\s\S]*?\.archive-expansion > summary > span:last-child\s*\{[\s\S]*?white-space:\s*normal;/,
  );
  assert.match(
    styles,
    /@media print\s*\{[\s\S]*?\.project-media,[\s\S]*?\{\s*display:\s*none;[\s\S]*?\.masthead::before,\s*\.masthead::after\s*\{\s*display:\s*none;[\s\S]*?\.project-showcase-layout\s*\{\s*display:\s*block;/,
  );
  assert.match(
    styles,
    /@media \(prefers-reduced-motion: reduce\)\s*\{[\s\S]*?animation:\s*none !important;[\s\S]*?transition-duration:\s*0\.01ms !important;[\s\S]*?\.scroll-progress\s*\{\s*display:\s*none !important;/,
  );

  assert.match(page, /<div className="scroll-progress" aria-hidden="true" \/>/);
  assert.match(
    styles,
    /@supports \(animation-timeline: view\(\)\)\s*\{[\s\S]*?\.project-showcase\s*\{[\s\S]*?animation:\s*editorial-entry linear both;[\s\S]*?animation-timeline:\s*view\(\);/,
  );
  assert.doesNotMatch(page, /ProjectSpecimen|project-specimen|specimen-(?:studio|circuit|research|decision)|masthead-folio|Folio 01/);
  assert.doesNotMatch(styles, /\.project-specimen|\.specimen-(?:studio|circuit|research|decision)|\.masthead-folio/);
  assert.doesNotMatch(page, /<(?:svg|canvas)\b/i);
  assert.doesNotMatch(page, /src="https?:\/\//i);
});

test("ships the privacy-safe public YKS paper", async () => {
  const paper = await readFile(paperUrl);

  assert.ok(paper.length > 100_000, "Public paper PDF is unexpectedly small");
  assert.equal(paper.subarray(0, 4).toString(), "%PDF");
});
