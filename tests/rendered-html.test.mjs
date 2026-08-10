import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const stylesUrl = new URL("../app/globals.css", import.meta.url);

test("uses real featured work and removes the mock concepts", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /Regex → AIGER/);
  assert.match(page, /Dishes Helper/);
  assert.match(page, /Year-Dependent YKS Score Volatility/);
  assert.match(page, /github\.com\/wh1tebrun\/string-to-aiger/);
  assert.match(page, /dishes-helper\.vercel\.app/);
  assert.doesNotMatch(page, /VitalLoop|GridScope|FocusFlow/);
});

test("publishes the supplied profile and contact details", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /University of Freiburg/);
  assert.match(page, /Apr 2026 — Apr 2027 contract/);
  assert.match(page, /peel\s*testing/);
  assert.match(page, /Academic year 2026\/27/);
  assert.match(page, /ege\.tekin@web\.de/);
  assert.match(page, /linkedin\.com\/in\/tekinege/);
  assert.match(page, /github\.com\/wh1tebrun/);
});

test("keeps the portfolio responsive and motion-accessible", async () => {
  const styles = await readFile(stylesUrl, "utf8");

  assert.match(styles, /@media \(max-width: 760px\)/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /\.experiment-list/);
  assert.match(styles, /:focus-visible/);
});
