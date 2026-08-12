import { archiveProjects } from "../content";
import type { ArchiveProject, ProjectLink } from "../content";
import styles from "./project-archive.module.css";

type ArchiveGroup = {
  year: string;
  projects: ArchiveProject[];
};

function groupProjectsByYear(projects: ArchiveProject[]): ArchiveGroup[] {
  const groups = new Map<string, ArchiveProject[]>();

  [...projects]
    .sort((left, right) => right.dateISO.localeCompare(left.dateISO))
    .forEach((project) => {
      const currentProjects = groups.get(project.year) ?? [];
      currentProjects.push(project);
      groups.set(project.year, currentProjects);
    });

  return Array.from(groups, ([year, groupedProjects]) => ({
    year,
    projects: groupedProjects,
  }));
}

function isExternalLink(href: string) {
  return href.startsWith("https://") || href.startsWith("http://");
}

function ArchiveLink({ link, project }: { link: ProjectLink; project: string }) {
  const external = isExternalLink(link.href);

  return (
    <a
      href={link.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={external ? `${link.label} for ${project} (opens in a new tab)` : undefined}
    >
      {link.label}
      <span aria-hidden="true">{external ? "↗" : "→"}</span>
    </a>
  );
}

function ArchiveRow({ project }: { project: ArchiveProject }) {
  return (
    <li className={styles.row} data-theme={project.theme}>
      <article className={styles.rowArticle} aria-labelledby={`archive-${project.id}`}>
        <div className={styles.rowMain}>
          <span className={styles.stamp} aria-hidden="true">
            <span className={styles.stampCore} />
          </span>

          <time className={styles.date} dateTime={project.dateISO}>{project.date}</time>

          <div className={styles.copy}>
            <h4 id={`archive-${project.id}`}>{project.title}</h4>
            <p>{project.description}</p>
          </div>

          <span className={styles.area}>{project.area}</span>
          <span className={styles.stack}>{project.stack}</span>

          <div className={styles.links} aria-label={`${project.title} links`}>
            {project.links.map((link) => (
              <ArchiveLink link={link} project={project.title} key={`${project.id}-${link.href}`} />
            ))}
          </div>
        </div>

      </article>
    </li>
  );
}

export function ProjectArchive() {
  const groups = groupProjectsByYear(archiveProjects);

  return (
    <div className={styles.archive}>
      {groups.map((group) => (
        <section
          className={styles.group}
          aria-labelledby={`archive-year-${group.year}`}
          key={group.year}
        >
          <h3 id={`archive-year-${group.year}`}>{group.year}</h3>
          <ol className={styles.list}>
            {group.projects.map((project) => (
              <ArchiveRow project={project} key={project.id} />
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
