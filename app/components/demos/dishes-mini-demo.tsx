"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./dishes-mini-demo.module.css";

type Dish = {
  id: string;
  name: string;
  image: string;
  width: number;
  height: number;
};

const dishes: readonly Dish[] = [
  { id: "hummus", name: "Hummus", image: "/projects/dishes/hummus.jpg", width: 1200, height: 630 },
  { id: "carbonara", name: "Pasta carbonara", image: "/projects/dishes/pasta-carbonara.jpg", width: 1200, height: 900 },
  { id: "tiramisu", name: "Tiramisu", image: "/projects/dishes/tiramisu.jpg", width: 808, height: 564 },
  { id: "poke", name: "Poke", image: "/projects/dishes/poke.jpg", width: 1200, height: 1800 },
  { id: "pizza", name: "Pizza Napoletana", image: "/projects/dishes/pizza-napoletana.jpg", width: 1280, height: 755 },
  { id: "ramen", name: "Tonkotsu ramen", image: "/projects/dishes/tonkotsu-ramen.jpg", width: 1500, height: 1000 },
  { id: "gyoza", name: "Gyoza", image: "/projects/dishes/gyoza.jpg", width: 1170, height: 780 },
  { id: "guacamole", name: "Guacamole", image: "/projects/dishes/guacamole.jpg", width: 1500, height: 999 },
] as const;

const ROUND_SIZE = 4;

function createSession(seed: number) {
  const pool = [...dishes];
  let state = seed || 1;

  for (let index = pool.length - 1; index > 0; index -= 1) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const swapIndex = state % (index + 1);
    [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
  }

  return pool.slice(0, ROUND_SIZE);
}

export function DishesMiniDemo() {
  // Keep the server render and first client render identical. Fresh randomness
  // is introduced only after the visitor explicitly starts a new round.
  const [session, setSession] = useState<readonly Dish[]>(() => createSession(0x454745));
  const [champion, setChampion] = useState<Dish>(() => session[0]);
  const [challengerIndex, setChallengerIndex] = useState(1);
  const [complete, setComplete] = useState(false);

  const challenger = session[challengerIndex] ?? null;
  const totalComparisons = session.length - 1;
  const completedComparisons = complete ? totalComparisons : challengerIndex - 1;

  function choose(dish: Dish) {
    if (!challenger || complete) return;

    const nextIndex = challengerIndex + 1;
    setChampion(dish);

    if (nextIndex >= session.length) {
      setComplete(true);
      return;
    }

    setChallengerIndex(nextIndex);
  }

  function newRound() {
    const values = new Uint32Array(1);
    window.crypto.getRandomValues(values);
    const nextSession = createSession(values[0] ?? Date.now());
    setSession(nextSession);
    setChampion(nextSession[0]);
    setChallengerIndex(1);
    setComplete(false);
  }

  return (
    <section className={styles.demo} aria-label="Dishes Helper four-choice preview">
      <header className={styles.header}>
        <p>Dishes Helper · four-choice round</p>
        <span>Choose one. The winner stays.</span>
      </header>

      <div className={styles.game}>
        <div className={styles.progressRow}>
          <p aria-live="polite">
            {complete ? "Decision complete" : `Choice ${challengerIndex} of ${totalComparisons}`}
          </p>
          <div
            className={styles.progress}
            role="progressbar"
            aria-label="Decision progress"
            aria-valuemin={0}
            aria-valuemax={totalComparisons}
            aria-valuenow={completedComparisons}
          >
            <span
              style={{
                transform: `scaleX(${completedComparisons / totalComparisons})`,
              }}
            />
          </div>
          <button type="button" onClick={newRound}>New round</button>
        </div>

        {complete ? (
          <div className={styles.result} aria-live="polite">
            <div className={styles.resultImage}>
              <Image
                src={champion.image}
                alt=""
                width={champion.width}
                height={champion.height}
                sizes="(max-width: 580px) calc(100vw - 64px), 320px"
              />
            </div>
            <div>
              <p className={styles.step}>Your winner</p>
              <h4>{champion.name}</h4>
              <p>Four dishes, three quick choices.</p>
              <button type="button" onClick={newRound}>Play another round</button>
            </div>
          </div>
        ) : challenger ? (
          <div className={styles.matchup}>
            <p className={styles.question}>Which one would you rather eat?</p>
            <div className={styles.cards}>
              {[champion, challenger].map((dish, index) => (
                <button type="button" onClick={() => choose(dish)} key={`${dish.id}-${index}`}>
                  <span className={styles.cardImage}>
                    <Image
                      src={dish.image}
                      alt=""
                      width={dish.width}
                      height={dish.height}
                      sizes="(max-width: 580px) calc(100vw - 64px), (max-width: 1000px) 42vw, 420px"
                    />
                  </span>
                  <span className={styles.cardCopy}>
                    <small>{index === 0 ? "Current favourite" : "New challenger"}</small>
                    <strong>{dish.name}</strong>
                    <em>Choose <span aria-hidden="true">↗</span></em>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
