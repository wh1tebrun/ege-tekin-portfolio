"use client";

import { useRef, useState } from "react";
import styles from "./isabelle-proof-demo.module.css";

type ProofView = "semantics" | "constructors" | "composition";

const views: Array<{ id: ProofView; index: string; label: string }> = [
  { id: "semantics", index: "01", label: "Semantics" },
  { id: "constructors", index: "02", label: "Constructors" },
  { id: "composition", index: "03", label: "Proof composition" },
];

const constructorProofs = [
  ["ε", "implements_eps", "Base case"],
  ["a", "implements_char", "Base case"],
  ["r · s", "implements_concat", "Language split"],
  ["r | s", "implements_union", "Branch equivalence"],
  ["r*", "implements_star", "Chunk decomposition"],
] as const;

export function IsabelleProofDemo() {
  const [activeView, setActiveView] = useState<ProofView>("composition");
  const instanceId = "isabelle-proof-explorer";
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  function selectAndFocus(index: number) {
    setActiveView(views[index].id);
    tabs.current[index]?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let target: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      target = (index + 1) % views.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      target = (index - 1 + views.length) % views.length;
    } else if (event.key === "Home") {
      target = 0;
    } else if (event.key === "End") {
      target = views.length - 1;
    }

    if (target !== null) {
      event.preventDefault();
      selectAndFocus(target);
    }
  }

  const panelId = `${instanceId}-panel`;

  return (
    <section className={styles.demo} aria-label="Isabelle HOL proof architecture explorer">
      <header className={styles.header}>
        <div>
          <p>Regex_To_NFA · Isabelle2025-2</p>
          <h4>One semantic contract, composed through five Thompson constructors.</h4>
        </div>
        <dl aria-label="Verified project metrics">
          <div><dt>25</dt><dd>theories</dd></div>
          <div><dt>167</dt><dd>lemmas &amp; theorems</dd></div>
          <div><dt>0</dt><dd>admitted proofs</dd></div>
        </dl>
      </header>

      <div className={styles.tabs} role="tablist" aria-label="Proof architecture views">
        {views.map((view, index) => {
          const selected = view.id === activeView;

          return (
            <button
              type="button"
              role="tab"
              id={`${instanceId}-${view.id}-tab`}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveView(view.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              ref={(element) => { tabs.current[index] = element; }}
              key={view.id}
            >
              <span>{view.index}</span>{view.label}
            </button>
          );
        })}
      </div>

      <div
        className={styles.panel}
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${instanceId}-${activeView}-tab`}
        tabIndex={0}
      >
        {activeView === "semantics" ? (
          <div className={styles.semantics}>
            <div className={styles.codeWindow}>
              <p><span aria-hidden="true" />Regex_Semantics.thy</p>
              <pre><code>{`datatype 'a regex =
    REps
  | RChar 'a
  | RConcat "'a regex" "'a regex"
  | RUnion "'a regex" "'a regex"
  | RStar "'a regex"

implements A r ⟷
  (∀w. accepts A w ⟷ matches r w)`}</code></pre>
            </div>
            <div className={styles.explanation}>
              <p>Formal scope</p>
              <h5>Language equivalence—not a vague test oracle.</h5>
              <p>
                Inductive regex semantics and epsilon-NFA runs meet at one reusable
                <code> implements </code> relation. The proof deliberately stops before parser,
                Python-source, circuit, and AIGER refinement claims.
              </p>
            </div>
          </div>
        ) : null}

        {activeView === "constructors" ? (
          <ol className={styles.constructors} aria-label="Verified Thompson constructors">
            {constructorProofs.map(([symbol, theorem, method], index) => (
              <li key={theorem}>
                <span>0{index + 1}</span>
                <strong>{symbol}</strong>
                <code>{theorem}</code>
                <small>{method}</small>
                <i aria-label="proved">proved</i>
              </li>
            ))}
          </ol>
        ) : null}

        {activeView === "composition" ? (
          <div className={styles.composition}>
            <div className={styles.expression}>
              <span>Worked nested expression</span>
              <strong>(a | bc)*</strong>
              <small>Thompson_Examples.thy</small>
            </div>
            <ol className={styles.proofChain}>
              <li><code>implements_char</code><span>a · b · c</span></li>
              <li><code>implements_concat</code><span>bc</span></li>
              <li><code>implements_union</code><span>a | bc</span></li>
              <li><code>implements_star</code><span>(a | bc)*</span></li>
            </ol>
            <div className={styles.result}>
              <span>Machine-checked conclusion</span>
              <code>accepts example_nested_nfa w ⟷ matches example_nested_regex w</code>
              <strong>example_nested_language_correct</strong>
            </div>
          </div>
        ) : null}
      </div>

      <footer>
        <span>3,685 theory lines</span>
        <span>Epsilon · Character · Concat · Union · Star</span>
        <span>Complete session build</span>
      </footer>
    </section>
  );
}
