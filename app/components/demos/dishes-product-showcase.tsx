import { DishesMiniDemo } from "./dishes-mini-demo";
import styles from "./dishes-product-showcase.module.css";

export function DishesProductShowcase() {
  return (
    <section className={styles.showcase} aria-label="Dishes Helper product preview">
      <div className={styles.browser}>
        <div className={styles.browserBar} aria-hidden="true">
          <span className={styles.trafficLights}>
            <i />
            <i />
            <i />
          </span>
          <span className={styles.address}>dishes-helper.vercel.app</span>
          <span className={styles.browserAction}>↗</span>
        </div>

        <div className={styles.screen}>
          {/* A plain image keeps the real product capture reliable in both the
              vinext preview and the hosted static build. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/dishes-helper-full.png"
            alt="Complete Dishes Helper landing page, with the headline Less scrolling. More choosing. beside the full game setup panel"
            width={1920}
            height={1080}
            decoding="async"
          />
          <span className={styles.screenLabel}>Existing product interface</span>
        </div>
      </div>

      <details className={styles.mechanic}>
        <summary>
          <span>
            <small>Interactive preview</small>
            Try the decision mechanic
          </span>
          <span className={styles.disclosure} aria-hidden="true">+</span>
        </summary>
        <div className={styles.demoWrap}>
          <p className={styles.previewNote}>Simplified mechanic preview</p>
          <DishesMiniDemo />
        </div>
      </details>
    </section>
  );
}
