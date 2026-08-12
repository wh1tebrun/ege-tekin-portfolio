# Ege Tekin — Portfolio

Personal portfolio for Ege Tekin, a Freiburg-based software engineer working across full-stack products, research software, and interactive systems.

**Live site:** [ege-tekin-portfolio.w1b.chatgpt.site](https://ege-tekin-portfolio.w1b.chatgpt.site)

## Overview

The site is a single-page professional portfolio built around verifiable work rather than decorative mock projects. It includes:

- five selected projects with small, embedded interactive explanations;
- a reverse-chronological project index;
- experience and education at Fraunhofer ISE, the University of Freiburg, and Akdeniz University;
- freelance services, languages, and contact details;
- a privacy-safe public edition of the YKS score-volatility paper.

## Selected work

- **Ege Image Studio** — a tested Next.js prototype with separate subject references, three scenario-based briefs, and an honest empty-to-generated showcase simulation.
- **Freiburg–Konstanz** — a browser cycling game, represented by a keyboard/touch micro-scene using the game’s staged backgrounds and Melissa sprite animation.
- **Regex → AIGER** — a Python compiler explained through fixed, verified pipeline artifacts.
- **YKS Score Volatility** — research presented through three authentic published figures.
- **Dishes Helper** — an immediately playable four-choice version of the real winner-stays mechanic using a small selection of original project photographs.

The portfolio demos are intentionally honest about their boundaries: the Image Studio view does not call a model, the compiler view does not run Python in the browser, and the YKS viewer does not fabricate missing point-level data.

> **Local asset review:** the Freiburg game art and Dishes photographs are included in this working branch at the owner’s request, but their source repositories do not yet document sufficient reuse rights. Keep this version local until provenance or replacement licenses are recorded.

## Stack

- React 19
- TypeScript
- vinext
- semantic HTML and custom CSS
- Node.js test runner
- Cloudflare Worker-compatible deployment through Sites

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm ci
npm run dev
```

The development server prints the local URL after startup.

## Validation

```bash
npm test
npm run lint
```

`npm test` creates a production build and verifies the portfolio content, public links, chronology, accessibility hooks, responsive design contracts, and paper asset.

## Project structure

```text
app/
  components/     Project exhibition, media contract, and client demos
  globals.css     Résumé visual system and responsive page shell
  layout.tsx      Metadata and document shell
  page.tsx        Résumé, archive, and contact structure
public/
  ege-tekin-portrait-large.jpg
  ege-tekin-yks-score-volatility.pdf
  projects/       Published figures and project-owned mock outputs
  og.png
tests/
  rendered-html.test.mjs
```

## Paper privacy note

The original course submission for the YKS research project contained individual ÖSYM result documents. The public PDF in this repository was rebuilt from the LaTeX source with those documents and third-party identifying information removed. The aggregate analysis and figures are unchanged.

## Contact

- [GitHub](https://github.com/wh1tebrun)
- [LinkedIn](https://www.linkedin.com/in/tekinege/)
- [ege.tekin@web.de](mailto:ege.tekin@web.de)
