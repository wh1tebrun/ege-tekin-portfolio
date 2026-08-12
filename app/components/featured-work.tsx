import type { ReactNode } from "react";
import { selectedProjects, type ProjectLink, type SelectedProject } from "../content";
import { DelusionsCaseStudy } from "./demos/delusions-case-study";
import { DishesProductShowcase } from "./demos/dishes-product-showcase";
import { RegexPipelineDemo } from "./demos/regex-pipeline-demo";
import { RouteGameDemo } from "./demos/route-game-demo";
import styles from "./featured-work.module.css";

function ProjectLinks({ links, project }: { links: ProjectLink[]; project: string }) {
  return (
    <div className={styles.links}>
      {links.map((link) => {
        const external = link.href.startsWith("http");

        return (
          <a
            href={link.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            aria-label={external ? `${link.label} for ${project} (opens in a new tab)` : undefined}
            key={link.href}
          >
            {link.label} {external ? <span aria-hidden="true">↗</span> : null}
          </a>
        );
      })}
    </div>
  );
}

function ProjectArticle({ project, children }: { project: SelectedProject; children: ReactNode }) {
  const headingId = `featured-project-${project.index}`;

  return (
    <article
      className={`${styles.project} ${styles[project.theme]}`}
      data-layout={project.layout}
      data-theme={project.theme}
      data-project={project.index}
      aria-labelledby={headingId}
    >
      <div className={styles.watermark} aria-hidden="true">{project.index}</div>
      <header className={styles.projectHeader}>
        <p className={styles.overline}>
          <span>Project {project.index}</span>
          <time dateTime={project.dateISO}>{project.date}</time>
          <span>{project.context}</span>
        </p>
        <h3 id={headingId}>{project.title}</h3>
        <p className={styles.deck}>{project.headline}</p>
      </header>

      <div className={styles.experience}>{children}</div>

      <div className={styles.notes} aria-label={`${project.title} project notes`}>
        <p>{project.description}</p>
        <dl>
          <div>
            <dt>My contribution</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Technology</dt>
            <dd>{project.stack}</dd>
          </div>
        </dl>
        <ProjectLinks links={project.links} project={project.title} />
      </div>
    </article>
  );
}

const demos: Record<SelectedProject["id"], ReactNode> = {
  "regex-aiger": <RegexPipelineDemo />,
  "dishes-helper": <DishesProductShowcase />,
  "freiburg-konstanz": <RouteGameDemo />,
  "delusions-of-grandeur": <DelusionsCaseStudy />,
};

export function FeaturedWork() {
  return (
    <div className={styles.exhibition}>
      <header className={styles.exhibitionIntro}>
        <p>Selected work · curated sequence</p>
        <h3>Selected projects. Each with its own room.</h3>
        <p>
          Formal methods opens into product decisions, an arcade road trip, and team-scale game
          engineering. Each selected case study uses a small, honest interaction to explain the
          work.
        </p>
      </header>

      {selectedProjects.map((project) => (
        <ProjectArticle project={project} key={project.id}>
          {demos[project.id]}
        </ProjectArticle>
      ))}
    </div>
  );
}
