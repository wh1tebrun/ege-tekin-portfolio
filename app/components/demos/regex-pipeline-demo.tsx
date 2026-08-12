"use client";

import { useState } from "react";
import styles from "./regex-pipeline-demo.module.css";

type StageId = "regex" | "ast" | "nfa" | "latches" | "aiger";

type StageContent = {
  eyebrow: string;
  title: string;
  description: string;
  codeLabel: string;
  code: string;
  facts: string[];
};

type VerifiedExample = {
  id: string;
  label: string;
  pattern: string;
  artifact: string;
  latchCount: number;
  verification: string;
  stages: Record<StageId, StageContent>;
};

export type RegexPipelineDemoProps = {
  className?: string;
};

const pipelineStages: Array<{ id: StageId; label: string }> = [
  { id: "regex", label: "Regex" },
  { id: "ast", label: "Parser / AST" },
  { id: "nfa", label: "NFA state" },
  { id: "latches", label: "Latch circuit" },
  { id: "aiger", label: "AIGER (.aag)" },
];

const verifiedExamples: VerifiedExample[] = [
  {
    id: "repeated-pair",
    label: "Repeated pair",
    pattern: "(bc)*",
    artifact: "aag 39 3 7 1 29",
    latchCount: 7,
    verification: "7 / 7 recorded traces matched the reference semantics",
    stages: {
      regex: {
        eyebrow: "01 · Source expression",
        title: "A pair that can repeat indefinitely.",
        description:
          "The empty word is accepted, as are bc, bcbc, and longer repetitions. No candidate-length bound is baked into the sequential circuit.",
        codeLabel: "input.regex",
        code: "(bc)*",
        facts: ["Alphabet {b, c}", "Kleene star", "Unbounded sequence"],
      },
      ast: {
        eyebrow: "02 · Parser output",
        title: "A star node wraps one concatenation.",
        description:
          "The typed tree preserves the repetition operator and the order of the two characters for later automaton construction.",
        codeLabel: "ast.txt",
        code: "Star\n└─ Concat\n   ├─ Char(\"b\")\n   └─ Char(\"c\")",
        facts: ["Root Star", "Child Concat", "Two character leaves"],
      },
      nfa: {
        eyebrow: "03 · Automaton state",
        title: "The automaton loops back after every complete pair.",
        description:
          "The state vector distinguishes the boundary before b from the intermediate position waiting for c, while epsilon closure preserves empty-word acceptance.",
        codeLabel: "transition.model",
        code: "start / accept ──b──▶ waiting_for_c\nwaiting_for_c ──c──▶ start / accept\n\ninvalid character ──▶ dead state",
        facts: ["Looping language", "Empty word accepted", "Dead-state handling"],
      },
      latches: {
        eyebrow: "04 · Sequential backend",
        title: "Seven latches encode the running match state.",
        description:
          "The compiler lowers the transition relation once, stores the live automaton configuration in latches, and updates it on every clocked character step.",
        codeLabel: "sequential.netlist",
        code: "inputs      3\nlatches     7\noutputs     1\nand gates  29\n\nstate'  := δ(state, char)\nresult  := end ∧ accepting(state)",
        facts: ["6 NFA-state latches", "1 protocol guard", "3 stream inputs"],
      },
      aiger: {
        eyebrow: "05 · Serialized artifact",
        title: "A compact latch-based AIGER artifact.",
        description:
          "The real generated header exposes six state latches plus a persistent protocol-valid latch. Recorded traces compare its final output against the Python reference evaluator.",
        codeLabel: "S002_sequential.aag",
        code: "aag 39 3 7 1 29\n    │ │ │ │  └─ AND gates\n    │ │ │ └──── outputs\n    │ │ └────── latches\n    │ └──────── inputs\n    └────────── max variable index",
        facts: ["ASCII .aag", "479-byte artifact", "7 / 7 aigsim traces"],
      },
    },
  },
  {
    id: "branching-pairs",
    label: "Branching pairs",
    pattern: "ab|bc",
    artifact: "aag 56 4 11 1 41",
    latchCount: 11,
    verification: "8 / 8 recorded traces matched the reference semantics",
    stages: {
      regex: {
        eyebrow: "01 · Source expression",
        title: "One language, two possible pairs.",
        description:
          "The compiler receives a regular expression and derives a character alphabet before any circuit structure is created.",
        codeLabel: "input.regex",
        code: "ab|bc",
        facts: ["Alphabet {a, b, c}", "Union", "Two accepted words"],
      },
      ast: {
        eyebrow: "02 · Parser output",
        title: "Alternation stays explicit in the tree.",
        description:
          "Parsing turns the source into typed nodes, so concatenation and alternation can be lowered systematically rather than interpreted as text.",
        codeLabel: "ast.txt",
        code: "Union\n├─ Concat\n│  ├─ Char(\"a\")\n│  └─ Char(\"b\")\n└─ Concat\n   ├─ Char(\"b\")\n   └─ Char(\"c\")",
        facts: ["Typed AST", "Two Concat branches", "Deterministic parse"],
      },
      nfa: {
        eyebrow: "03 · Automaton state",
        title: "The NFA carries the possible matches forward.",
        description:
          "At each step, the active-state vector is advanced by the current character. Epsilon closure is compiled into the transition relation.",
        codeLabel: "transition.model",
        code: "active₀  = ε-closure(start)\nactiveₜ₊₁ = step(activeₜ, charₜ)\nacceptₜ   = activeₜ ∩ final ≠ ∅",
        facts: ["State vector", "Character input", "Acceptance output"],
      },
      latches: {
        eyebrow: "04 · Sequential backend",
        title: "Eleven latches remember the active NFA states.",
        description:
          "Unlike a bounded combinational unrolling, this backend keeps automaton state in AIGER latches. The same transition circuit is reused on every input step.",
        codeLabel: "sequential.netlist",
        code: "inputs      4\nlatches    11\noutputs     1\nand gates  41\n\nnext_state := δ(state, char)\naccepted   := end ∧ final(state)",
        facts: ["11 state latches", "41 AND gates", "Reusable transition logic"],
      },
      aiger: {
        eyebrow: "05 · Serialized artifact",
        title: "The result is a sequential ASCII AIGER model.",
        description:
          "The header records inputs, latches, outputs, and AND gates. The checked-in artifact can be simulated with aigsim and used in the repository’s validation workflow.",
        codeLabel: "S001_sequential.aag",
        code: "aag 56 4 11 1 41\n    │ │  │  │  └─ AND gates\n    │ │  │  └──── outputs\n    │ │  └─────── latches\n    │ └────────── inputs\n    └──────────── max variable index",
        facts: ["ASCII .aag", "677-byte artifact", "External simulation"],
      },
    },
  },
  {
    id: "intersection",
    label: "Intersection",
    pattern: "(a|b)*&a*",
    artifact: "aag 62 3 13 1 46",
    latchCount: 13,
    verification: "7 / 7 recorded traces matched the reference semantics",
    stages: {
      regex: {
        eyebrow: "01 · Source expression",
        title: "Intersection combines two language constraints.",
        description:
          "The expression accepts only words that belong to both languages: any a-or-b word on the left, and only-a words on the right.",
        codeLabel: "input.regex",
        code: "(a|b)*&a*",
        facts: ["Alphabet {a, b}", "Intersection", "Accepted language a*"],
      },
      ast: {
        eyebrow: "02 · Parser output",
        title: "Two subtrees meet at an intersection node.",
        description:
          "Keeping intersection explicit lets the compiler construct the product behaviour while preserving the structure of both operands.",
        codeLabel: "ast.txt",
        code: "Intersection\n├─ Star\n│  └─ Union(Char(\"a\"), Char(\"b\"))\n└─ Star\n   └─ Char(\"a\")",
        facts: ["Product construction", "Two Star operands", "One shared alphabet"],
      },
      nfa: {
        eyebrow: "03 · Automaton state",
        title: "A product state tracks both operands together.",
        description:
          "Every character advances both component state sets. Acceptance requires the final configuration to satisfy both sides of the intersection.",
        codeLabel: "transition.model",
        code: "productₜ      = leftₜ × rightₜ\nproductₜ₊₁    = step(productₜ, charₜ)\naccept_product = accept_left ∧ accept_right",
        facts: ["Product state", "Shared character input", "Conjunctive acceptance"],
      },
      latches: {
        eyebrow: "04 · Sequential backend",
        title: "Thirteen latches hold the product configuration.",
        description:
          "The richer state space produces a larger sequential circuit, but it still reuses one transition network instead of copying it for a fixed word length.",
        codeLabel: "sequential.netlist",
        code: "inputs      3\nlatches    13\noutputs     1\nand gates  46\n\nproduct' := δ(left × right, char)\nresult   := end ∧ accept(left) ∧ accept(right)",
        facts: ["13 state latches", "46 AND gates", "Product semantics"],
      },
      aiger: {
        eyebrow: "05 · Serialized artifact",
        title: "The product becomes a sequential AIGER model.",
        description:
          "This generated artifact was exercised through recorded traces; selected sequential models in the project were additionally explored with rIC3.",
        codeLabel: "sequential_intersection.aag",
        code: "aag 62 3 13 1 46\n    │ │  │  │  └─ AND gates\n    │ │  │  └──── outputs\n    │ │  └─────── latches\n    │ └────────── inputs\n    └──────────── max variable index",
        facts: ["ASCII .aag", "828-byte artifact", "Selected rIC3 checks"],
      },
    },
  },
];

export function RegexPipelineDemo({ className }: RegexPipelineDemoProps) {
  const [exampleId, setExampleId] = useState(verifiedExamples[0].id);
  const [stageId, setStageId] = useState<StageId>("latches");
  const headingId = "regex-pipeline-title";
  const panelId = "regex-pipeline-stage";

  const example =
    verifiedExamples.find((candidate) => candidate.id === exampleId) ?? verifiedExamples[0];
  const content = example.stages[stageId];
  const rootClassName = [styles.demo, className].filter(Boolean).join(" ");

  return (
    <section className={rootClassName} aria-labelledby={headingId}>
      <header className={styles.header}>
        <div>
          <p className={styles.windowLabel} aria-hidden="true">
            <span /> <span /> <span /> regex-to-aiger / sequential_backend.py
          </p>
          <p className={styles.kicker}>Compiler walkthrough · sequential latch backend</p>
          <h4 id={headingId}>From language semantics to persistent circuit state.</h4>
        </div>
        <p className={styles.guidance}>
          Fixed examples from generated repository artifacts. Choose an expression, then inspect
          how its state becomes latches instead of a bounded combinational unrolling.
        </p>
      </header>

      <div className={styles.examplePicker} role="group" aria-label="Choose a verified example">
        {verifiedExamples.map((candidate) => {
          const selected = candidate.id === example.id;

          return (
            <button
              className={styles.exampleButton}
              data-selected={selected ? "true" : undefined}
              key={candidate.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setExampleId(candidate.id)}
            >
              <span>{candidate.label}</span>
              <code>{candidate.pattern}</code>
            </button>
          );
        })}
      </div>

      <div className={styles.pipeline} role="group" aria-label="Compilation stages">
        {pipelineStages.map((stage, index) => {
          const active = stage.id === stageId;

          return (
            <button
              className={styles.stageButton}
              data-active={active ? "true" : undefined}
              key={stage.id}
              type="button"
              aria-controls={panelId}
              aria-current={active ? "step" : undefined}
              onClick={() => setStageId(stage.id)}
            >
              <span className={styles.stageIndex}>{String(index + 1).padStart(2, "0")}</span>
              <span>{stage.label}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.stagePanel} id={panelId} key={`${example.id}-${stageId}`}>
        <div className={styles.stageCopy}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h5>{content.title}</h5>
          <p>{content.description}</p>

          <ul className={styles.facts} aria-label="Stage facts">
            {content.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>

        <div className={styles.codePanel}>
          <div className={styles.codeHeader}>
            <span>{content.codeLabel}</span>
            <span aria-hidden="true">{example.pattern}</span>
          </div>
          <pre>
            <code>{content.code}</code>
          </pre>
        </div>
      </div>

      <footer className={styles.footer}>
        <span>{example.verification}</span>
        <span>{example.latchCount} latches · {example.artifact}</span>
      </footer>
    </section>
  );
}
