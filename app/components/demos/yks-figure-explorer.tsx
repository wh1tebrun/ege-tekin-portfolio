"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./yks-figure-explorer.module.css";

const figures = [
  {
    id: "rank-stability",
    index: "01",
    label: "Rank stability",
    title: "Matched programs: rank stability",
    src: "/projects/yks/rank-stability.png",
    alt: "Published scatter plot comparing matched-program admission ranks in 2021 and 2022 on logarithmic axes, with an equality diagonal",
    note:
      "Both axes show rank on a logarithmic scale. The diagonal marks equal rank in both years, so distance from that line makes program-level movement visible.",
  },
  {
    id: "score-volatility",
    index: "02",
    label: "Score volatility",
    title: "Matched programs: score volatility",
    src: "/projects/yks/score-volatility.png",
    alt: "Published scatter plot comparing matched-program admission scores in 2021 and 2022, with an equality diagonal",
    note:
      "The same matched programs are compared by score. Departures from the equality line expose how the score scale changes between exam years.",
  },
  {
    id: "grade-gap",
    index: "03",
    label: "Converted-grade gap",
    title: "Illustrative converted-grade gap",
    src: "/projects/yks/grade-gap.png",
    alt: "Published histogram of illustrative converted-grade differences between 2022 and 2021 across matched programs",
    note:
      "The histogram summarizes the illustrative converted-grade difference. Zero marks no change; the spread shows the direction and magnitude of the gap.",
  },
] as const;

export function YksFigureExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const instanceId = "yks-figure-explorer";
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeFigure = figures[activeIndex];

  function selectAndFocus(index: number) {
    setActiveIndex(index);
    tabs.current[index]?.focus();
  }

  function handleTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % figures.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + figures.length) % figures.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = figures.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      selectAndFocus(nextIndex);
    }
  }

  const titleId = `${instanceId}-title`;
  const scopeId = `${instanceId}-scope`;
  const tabId = `${instanceId}-tab-${activeFigure.id}`;
  const panelId = `${instanceId}-panel`;

  return (
    <section className={styles.explorer} aria-labelledby={titleId} aria-describedby={scopeId}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Published figure explorer</p>
          <h4 id={titleId}>Read the paper through three figures.</h4>
        </div>
        <p className={styles.scope} id={scopeId}>
          Raw point-level data is not embedded here. This viewer switches between published
          figures; it does not calculate, filter, or generate values.
        </p>
      </header>

      <div className={styles.tabs} role="tablist" aria-label="Published YKS figures">
        {figures.map((figure, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              className={styles.tab}
              id={`${instanceId}-tab-${figure.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              key={figure.id}
            >
              <span>{figure.index}</span>
              {figure.label}
            </button>
          );
        })}
      </div>

      <div
        className={styles.panel}
        id={panelId}
        role="tabpanel"
        aria-labelledby={tabId}
        tabIndex={0}
      >
        <div className={styles.figureBody} key={activeFigure.id}>
          <figure className={styles.figure}>
            <div className={styles.imageFrame}>
              <Image
                src={activeFigure.src}
                alt={activeFigure.alt}
                fill
                sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1180px) 78vw, 900px"
              />
            </div>
            <figcaption>
              <span>Published figure {activeFigure.index}</span>
              <strong>{activeFigure.title}</strong>
            </figcaption>
          </figure>

          <aside className={styles.readingNote} aria-label="Figure reading note">
            <span>Reading note</span>
            <p>{activeFigure.note}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
