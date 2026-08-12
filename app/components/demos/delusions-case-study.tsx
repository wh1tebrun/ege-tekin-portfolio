import Image from "next/image";
import styles from "./delusions-case-study.module.css";

const contributionAreas = [
  ["Persistence", "Save/load, checkpoints, player state, and cooldowns"],
  ["Gameplay", "Enemy spawning and behaviour across maps"],
  ["HUD feedback", "Weapon and shield cooldown visibility"],
  ["Integration", "Regression fixes and release-focused QA"],
] as const;

const gameplayFrames = [
  {
    src: "/projects/delusions-of-grandeur/checkpoint-map.png",
    alt: "Two players facing each other across a symmetrical checkpoint arena in Delusions of Grandeur.",
    label: "Checkpoint map",
    caption: "A two-player arena with independent HUD state, a shared timer, and a visible checkpoint.",
  },
  {
    src: "/projects/delusions-of-grandeur/in-game.png",
    alt: "Two players navigating platforms and enemies during a Delusions of Grandeur encounter.",
    label: "Core encounter",
    caption: "Co-op platforming under enemy pressure, with pickups and per-player combat feedback.",
  },
  {
    src: "/projects/delusions-of-grandeur/endboss-fight.png",
    alt: "Two players fighting The Progenitor amid red arena hazards in Delusions of Grandeur.",
    label: "Final encounter",
    caption: "The Progenitor boss fight combines a shared objective, timed hazards, and split player state.",
  },
] as const;

export function DelusionsCaseStudy() {
  return (
    <section className={styles.caseStudy} aria-labelledby="delusions-record-title">
      <header className={styles.header}>
        <div>
          <p>Public engineering record</p>
          <h4 id="delusions-record-title">One shared game, four recurring responsibilities.</h4>
        </div>
        <span>C# / MonoGame</span>
      </header>

      <ol className={styles.areas}>
        {contributionAreas.map(([title, description], index) => (
          <li key={title}>
            <span aria-hidden="true">0{index + 1}</span>
            <div>
              <strong>{title}</strong>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.gameplayRecord}>
        <div className={styles.gameplayHeading}>
          <p>Gameplay record</p>
          <span>Authentic final-build captures</span>
        </div>
        <div className={styles.gallery}>
          {gameplayFrames.map((frame, index) => (
            <figure className={index === 0 ? styles.galleryLead : undefined} key={frame.src}>
              <div className={styles.frame}>
                <Image
                  alt={frame.alt}
                  height={1390}
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 70vw" : "(max-width: 768px) 100vw, 35vw"}
                  src={frame.src}
                  width={2557}
                />
              </div>
              <figcaption>
                <strong>{frame.label}</strong>
                <span>{frame.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className={styles.releaseRecord}>
        <div>
          <strong>30</strong>
          <span>automated releases</span>
        </div>
        <div className={styles.releaseTicks} aria-hidden="true">
          {Array.from({ length: 30 }, (_, index) => <i key={index} />)}
        </div>
        <p>Windows and Linux artifacts produced throughout the team project.</p>
      </div>

      <footer>
        <span>Six-person team</span>
        <span>Nov 2024 – Feb 2025</span>
        <span>Public case study only</span>
      </footer>
    </section>
  );
}
