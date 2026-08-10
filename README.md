# Ege Tekin — Portfolio

Personal portfolio for Ege Tekin, a Freiburg-based software engineer working across full-stack products, research software, and interactive systems.

**Live site:** [ege-tekin-portfolio.w1b.chatgpt.site](https://ege-tekin-portfolio.w1b.chatgpt.site)

## Overview

The site is a single-page professional portfolio built around verifiable work rather than decorative mock projects. It includes:

- four selected case studies;
- a reverse-chronological project index;
- experience and education at Fraunhofer ISE, the University of Freiburg, and Akdeniz University;
- freelance services, languages, and contact details;
- a privacy-safe public edition of the YKS score-volatility paper.

## Selected work

- **Regex → AIGER** — a Python compiler from regular-expression constraints to ASCII AIGER circuits.
- **Ege Image Studio** — a tested Next.js prototype for structured reference and prompt workflows.
- **Dishes Helper** — a TypeScript pairwise decision game deployed on Vercel.
- **YKS Score Volatility** — reproducible research into year-dependent score conversion outcomes.

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
  globals.css     Visual system and responsive layouts
  layout.tsx      Metadata and document shell
  page.tsx        Portfolio content and page structure
public/
  ege-tekin-portrait-large.jpg
  ege-tekin-yks-score-volatility.pdf
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
