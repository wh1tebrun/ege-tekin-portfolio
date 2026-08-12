"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./image-studio-demo.module.css";

const concepts = [
  {
    name: "The Boardroom",
    shortName: "Boardroom",
    subject: "Ege · period executive",
    palette: "Walnut · tobacco · charcoal",
    paletteBackground: "linear-gradient(135deg, #151311 0 34%, #6e4128 34% 67%, #b78a5d 67%)",
    light: "Low-key tungsten",
    lightBackground: "radial-gradient(circle at 68% 32%, #e7b36f, #65452f 30%, #171513 72%)",
    accent: "#d58a54",
    prompt:
      "Cinematic 1940s crime-drama portrait of Ege in a dark three-piece suit, seated in a wood-paneled office, symmetrical framing, hands raised, warm tungsten practicals, restrained film grain.",
    direction: "Period tailoring, controlled symmetry, warm dramatic restraint.",
    subjectSrc: "/projects/image-studio/subject-boardroom.webp",
    subjectBackgroundSize: "auto 124%",
    subjectBackgroundPosition: "center top",
    src: "/projects/image-studio/boardroom.webp",
    width: 900,
    height: 1125,
    objectPosition: "center 42%",
    alt: "Cinematic portrait of Ege Tekin in a dark suit, seated in a wood-paneled office with both hands raised",
  },
  {
    name: "Clear Skies",
    shortName: "Cockpit",
    subject: "Ege · cockpit pilot",
    palette: "Sky · graphite · signal lime",
    paletteBackground: "linear-gradient(135deg, #8fd0f5 0 42%, #202a33 42% 72%, #c8ef22 72%)",
    light: "Clear noon daylight",
    lightBackground: "radial-gradient(circle at 34% 24%, #ffffff, #9ed8fa 29%, #425866 72%)",
    accent: "#8fd0f5",
    prompt:
      "Photoreal cockpit portrait of Ege wearing an aviation headset, dark sunglasses and a high-visibility vest, clear blue sky, candid documentary framing, crisp natural daylight.",
    direction: "Candid aviation realism, clean daylight, confident documentary tone.",
    subjectSrc: "/projects/image-studio/subject-cockpit.webp",
    subjectBackgroundSize: "auto 122%",
    subjectBackgroundPosition: "center top",
    src: "/projects/image-studio/cockpit.webp",
    width: 737,
    height: 918,
    objectPosition: "center 44%",
    alt: "Portrait of Ege Tekin in an aircraft cockpit wearing sunglasses, a headset and a high-visibility vest",
  },
  {
    name: "Number 10",
    shortName: "No. 10",
    subject: "Ege · Türkiye captain",
    palette: "Crimson · ivory · black",
    paletteBackground: "linear-gradient(135deg, #180202 0 30%, #b4000b 30% 72%, #eee3cc 72%)",
    light: "Crimson stadium rim",
    lightBackground: "radial-gradient(circle at 68% 38%, #fff0d6, #ff271b 18%, #260002 68%)",
    accent: "#f23a30",
    prompt:
      "High-impact sports poster of Ege as Türkiye captain, number 10, three-quarter back pose, intense crimson energy, cinematic stadium rim light, premium editorial finish.",
    direction: "Heroic sports composition, explosive energy, premium poster finish.",
    subjectSrc: "/projects/image-studio/subject-number-10.webp",
    subjectBackgroundSize: "auto 114%",
    subjectBackgroundPosition: "center top",
    src: "/projects/image-studio/number-10.webp",
    width: 900,
    height: 1350,
    objectPosition: "center 42%",
    alt: "Sports poster of Ege Tekin wearing a red Türkiye number 10 football jersey against an energetic red background",
  },
] as const;

export function ImageStudioDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prompt, setPrompt] = useState<string>(concepts[0].prompt);
  const [status, setStatus] = useState("Ready to generate");
  const [phase, setPhase] = useState<"empty" | "running" | "ready">("empty");
  const timers = useRef<number[]>([]);
  const concept = concepts[activeIndex];
  const isRunning = phase === "running";

  useEffect(() => {
    return () => timers.current.forEach((timer) => window.clearTimeout(timer));
  }, []);

  function selectConcept(index: number) {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
    setActiveIndex(index);
    setPrompt(concepts[index].prompt);
    setStatus("Brief loaded");
    setPhase("empty");
  }

  function runShowcase() {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
    setPhase("running");
    setStatus("Reading references");

    const finish = () => {
      setStatus("Representative output ready");
      setPhase("ready");
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stepOne = reducedMotion ? 240 : 480;
    const stepTwo = reducedMotion ? 460 : 960;
    const finishAt = reducedMotion ? 700 : 1_620;

    timers.current.push(
      window.setTimeout(() => setStatus("Refining prompt"), stepOne),
      window.setTimeout(() => setStatus("Composing preview"), stepTwo),
      window.setTimeout(finish, finishAt),
    );
  }

  function updatePrompt(value: string) {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
    setPrompt(value);

    if (phase !== "empty") {
      setPhase("empty");
      setStatus("Prompt changed");
    }
  }

  const demoStyle = {
    "--studio-accent": concept.accent,
  } as CSSProperties;

  return (
    <section
      className={styles.demo}
      style={demoStyle}
      aria-label="Ege Image Studio showcase simulation"
    >
      <div className={styles.toolbar}>
        <p>
          <span className={styles.statusDot} aria-hidden="true" />
          Showcase simulation · representative outputs · no API call
        </p>
        <span aria-live="polite" aria-atomic="true">{status}</span>
      </div>

      <div className={styles.workspace}>
        <div className={styles.references} aria-label="Reference roles">
          <p className={styles.panelLabel}>01 · References</p>
          <div className={styles.referenceGrid}>
            <div className={styles.referencePortrait}>
              <span
                className={styles.referencePortraitImage}
                aria-hidden="true"
                style={{
                  backgroundImage: `url(${concept.subjectSrc})`,
                  backgroundPosition: concept.subjectBackgroundPosition,
                  backgroundSize: concept.subjectBackgroundSize,
                }}
              />
              <span className={styles.referenceMeta}>
                <small>Subject</small>
                <strong>{concept.subject}</strong>
              </span>
            </div>
            <div
              className={styles.referencePalette}
              style={{ background: concept.paletteBackground }}
            >
              <span className={styles.referenceMeta}>
                <small>Palette</small>
                <strong>{concept.palette}</strong>
              </span>
            </div>
            <div
              className={styles.referenceLight}
              style={{ background: concept.lightBackground }}
            >
              <span className={styles.referenceMeta}>
                <small>Light</small>
                <strong>{concept.light}</strong>
              </span>
            </div>
          </div>
          <p className={styles.referenceNote}>{concept.direction}</p>
        </div>

        <div className={styles.promptPanel}>
          <label htmlFor="studio-prompt">02 · Prompt workspace</label>
          <textarea
            id="studio-prompt"
            value={prompt}
            onChange={(event) => updatePrompt(event.target.value)}
            rows={5}
          />
          <div className={styles.samples} aria-label="Representative briefs">
            {concepts.map((sample, index) => (
              <button
                type="button"
                aria-label={`Load ${sample.name} brief`}
                aria-pressed={activeIndex === index}
                onClick={() => selectConcept(index)}
                key={sample.name}
              >
                <span>0{index + 1}</span>
                {sample.shortName}
              </button>
            ))}
          </div>
          <button
            className={styles.runButton}
            type="button"
            onClick={runShowcase}
            disabled={isRunning || prompt.trim().length === 0}
            aria-controls="studio-review"
          >
            {isRunning ? "Generating preview…" : phase === "ready" ? "Generate again" : "Generate preview"}
          </button>
        </div>

        <figure className={styles.output}>
          <p className={styles.panelLabel}>03 · Review</p>
          <div
            className={styles.outputFrame}
            data-state={phase}
            id="studio-review"
            aria-busy={isRunning}
          >
            {phase === "ready" ? (
              <Image
                className={styles.generatedImage}
                src={concept.src}
                alt={concept.alt}
                width={concept.width}
                height={concept.height}
                sizes="(max-width: 720px) 72vw, 320px"
                style={{ objectPosition: concept.objectPosition }}
              />
            ) : (
              <div className={styles.outputPlaceholder}>
                <span className={styles.placeholderMark} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <strong>{isRunning ? status : "No output yet"}</strong>
                <small>
                  {isRunning
                    ? "Building a representative preview from the brief."
                    : "Run the brief to compose a representative preview."}
                </small>
                {isRunning ? <span className={styles.progressTrack} aria-hidden="true"><i /></span> : null}
              </div>
            )}
          </div>
          <figcaption>
            {phase === "ready"
              ? `${concept.name} · representative project output`
              : isRunning
                ? `${concept.name} · generation in progress`
                : `${concept.name} · awaiting generation`}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
