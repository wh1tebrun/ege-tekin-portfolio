"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import styles from "./route-game-demo.module.css";

const ROUTE_DURATION_MS = 22_000;
const STEERING_STEP = 9;
const MIN_RIDER_POSITION = 18;
const MAX_RIDER_POSITION = 82;

const ROUTE_STAGES = [
  { title: "Freiburg Departure", background: "freiburg-im-breisgau.webp" },
  { title: "Kirchzarten Valley", background: "kirchzarten-valley.webp" },
  { title: "Hinterzarten Climb", background: "hinterzarten-climb.webp" },
  { title: "Titisee Lakeside", background: "titisee-lakeside.webp" },
  { title: "Löffingen Plateau", background: "loeffingen-heights.webp" },
  { title: "Donaueschingen", background: "donaueschingen-source.webp" },
  { title: "Geisingen Fields", background: "geisingen-fields.webp" },
  { title: "Hegau Crossing", background: "engen-hegau.webp" },
  { title: "Radolfzell Shore", background: "radolfzell-shoreline.webp" },
  { title: "Konstanz Arrival", background: "konstanz-arrival.webp" },
] as const;

type RiderPose = "normal" | "left" | "right";
type PlaybackState = "idle" | "running" | "paused" | "complete";

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

export function RouteGameDemo() {
  const demoRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef(0);
  const poseTimerRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [riderPosition, setRiderPosition] = useState(50);
  const [riderPose, setRiderPose] = useState<RiderPose>("normal");
  const [inView, setInView] = useState(false);
  const [playbackState, setPlaybackState] = useState<PlaybackState>("idle");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const isComplete = progress >= 1;
  const isRouteActive = playbackState === "running" && inView;
  const progressPercent = Math.round(progress * 100);
  const routePosition = progress * ROUTE_STAGES.length;
  const activeStageIndex = Math.min(ROUTE_STAGES.length - 1, Math.floor(routePosition));
  const activeStage = ROUTE_STAGES[activeStageIndex];
  const stageProgress = isComplete ? 1 : routePosition - activeStageIndex;

  useEffect(() => {
    const demo = demoRef.current;
    if (!demo) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry?.isIntersecting ?? false),
      { threshold: 0.35 },
    );

    observer.observe(demo);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setPrefersReducedMotion(motionQuery.matches);
      if (motionQuery.matches) {
        setPlaybackState((currentState) =>
          currentState === "running" ? "paused" : currentState,
        );
      }
    };

    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);
    return () => motionQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!isRouteActive || progressRef.current >= 1) return;

    let animationFrame = 0;
    let previousTime: number | null = null;
    let isActive = true;

    const advanceRoute = (currentTime: number) => {
      if (!isActive) return;
      if (previousTime === null) previousTime = currentTime;

      const elapsed = Math.min(80, currentTime - previousTime);
      previousTime = currentTime;
      const nextProgress = Math.min(1, progressRef.current + elapsed / ROUTE_DURATION_MS);
      progressRef.current = nextProgress;
      setProgress(nextProgress);

      if (nextProgress < 1) {
        animationFrame = window.requestAnimationFrame(advanceRoute);
      } else {
        setPlaybackState("complete");
      }
    };

    animationFrame = window.requestAnimationFrame(advanceRoute);
    return () => {
      isActive = false;
      window.cancelAnimationFrame(animationFrame);
    };
  }, [isRouteActive]);

  useEffect(() => () => {
    if (poseTimerRef.current !== null) window.clearTimeout(poseTimerRef.current);
  }, []);

  const showSteeringPose = useCallback((pose: Exclude<RiderPose, "normal">) => {
    setRiderPose(pose);
    if (poseTimerRef.current !== null) window.clearTimeout(poseTimerRef.current);
    poseTimerRef.current = window.setTimeout(() => setRiderPose("normal"), 520);
  }, []);

  const steer = useCallback((direction: -1 | 1) => {
    setRiderPosition((currentPosition) =>
      clamp(
        currentPosition + direction * STEERING_STEP,
        MIN_RIDER_POSITION,
        MAX_RIDER_POSITION,
      ),
    );
    showSteeringPose(direction < 0 ? "left" : "right");
  }, [showSteeringPose]);

  function handleKeyboardSteering(event: KeyboardEvent<HTMLElement>) {
    if ((event.target as HTMLElement).tagName === "BUTTON") return;
    const key = event.key.toLowerCase();

    if (key === "a" || key === "arrowleft") {
      event.preventDefault();
      steer(-1);
    }

    if (key === "d" || key === "arrowright") {
      event.preventDefault();
      steer(1);
    }

    if (key === "home") {
      event.preventDefault();
      setRiderPosition(MIN_RIDER_POSITION);
      showSteeringPose("left");
    }

    if (key === "end") {
      event.preventDefault();
      setRiderPosition(MAX_RIDER_POSITION);
      showSteeringPose("right");
    }
  }

  function resetRoute() {
    progressRef.current = 0;
    setProgress(0);
    setRiderPosition(50);
    setRiderPose("normal");
  }

  function restartRoute() {
    resetRoute();
    setPlaybackState("idle");
  }

  function togglePlayback() {
    if (playbackState === "running") {
      setPlaybackState("paused");
      return;
    }

    if (playbackState === "complete") resetRoute();
    setPlaybackState("running");
  }

  const playbackLabel = playbackState === "running"
    ? "Pause"
    : playbackState === "paused"
      ? "Resume"
      : playbackState === "complete"
        ? "Start again"
        : "Start";

  const sceneStyle = {
    "--background-position": `${stageProgress * 100}%`,
    "--road-shift": `${progress * -180}rem`,
    "--rider-position": `${riderPosition}%`,
  } as CSSProperties;

  return (
    <section
      className={styles.demo}
      ref={demoRef}
      aria-label="Small playable Freiburg to Konstanz cycling preview"
      aria-describedby="route-game-demo-instructions"
      data-running={isRouteActive ? "true" : "false"}
      data-started={playbackState === "idle" ? "false" : "true"}
    >
      <div className={styles.miniBar}>
        <p aria-live="polite" aria-atomic="true">
          <span>{isComplete ? "Arrived" : `Stage ${activeStageIndex + 1} / ${ROUTE_STAGES.length}`}</span>
          <strong>{activeStage.title}</strong>
        </p>
        <div
          className={styles.progressTrack}
          role="progressbar"
          aria-label="Freiburg to Konstanz route progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progressPercent}
          aria-valuetext={`${progressPercent}% — ${activeStage.title}`}
        >
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
        <em>{progressPercent}%</em>
      </div>

      <div
        className={styles.scene}
        style={sceneStyle}
        role="slider"
        aria-label="Melissa steering position"
        aria-valuemin={MIN_RIDER_POSITION}
        aria-valuemax={MAX_RIDER_POSITION}
        aria-valuenow={riderPosition}
        aria-valuetext={`${riderPosition}% across the road`}
        aria-keyshortcuts="A D ArrowLeft ArrowRight Home End"
        onKeyDown={handleKeyboardSteering}
        tabIndex={0}
      >
        <div
          className={styles.background}
          style={{
            backgroundImage: `url("/projects/freiburg-konstanz/backgrounds/${activeStage.background}")`,
          }}
          key={activeStage.background}
          aria-hidden="true"
        />
        <div className={styles.speedWash} aria-hidden="true" />
        <div className={styles.road} aria-hidden="true">
          <span className={styles.roadEdge} />
          <span className={styles.roadStripe} />
        </div>
        <div
          className={styles.rider}
          data-pose={isComplete ? "victory" : riderPose}
          aria-hidden="true"
        >
          <span className={styles.riderSprite} />
        </div>
        {isComplete ? <div className={styles.arrived} aria-hidden="true">Konstanz!</div> : null}
      </div>

      <footer className={styles.controls}>
        <p id="route-game-demo-instructions">
          {prefersReducedMotion
            ? "Motion is off by default. Start when ready, then steer with A / D or the arrow keys."
            : "Start the route, then steer with A / D or the arrow keys. Home / End jump to the road edges."}
        </p>
        <div aria-label="Route and steering controls">
          <button type="button" onClick={togglePlayback} aria-label={`${playbackLabel} route animation`}>
            {playbackLabel}
          </button>
          <button type="button" onClick={() => steer(-1)} aria-label="Steer left">
            <span aria-hidden="true">←</span><kbd>A</kbd>
          </button>
          <button type="button" onClick={() => steer(1)} aria-label="Steer right">
            <kbd>D</kbd><span aria-hidden="true">→</span>
          </button>
          <button className={styles.restart} type="button" onClick={restartRoute}>
            Restart
          </button>
        </div>
      </footer>
    </section>
  );
}
