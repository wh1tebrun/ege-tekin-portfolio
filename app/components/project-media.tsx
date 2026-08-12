import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./project-media.module.css";

type ProjectMediaProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  fit?: "cover" | "contain";
  position?: string;
  aspectRatio?: string;
  frame?: "paper" | "screen" | "none";
  background?: string;
  priority?: boolean;
};

export function ProjectMedia({
  src,
  alt,
  width,
  height,
  caption,
  fit = "cover",
  position = "50% 50%",
  aspectRatio,
  frame = "screen",
  background = "#ece9e2",
  priority = false,
}: ProjectMediaProps) {
  return (
    <figure className={styles.figure}>
      <div
        className={`${styles.frame} ${styles[frame]}`}
        style={
          {
            "--media-fit": fit,
            "--media-position": position,
            "--media-ratio": aspectRatio ?? `${width} / ${height}`,
            "--media-background": background,
          } as CSSProperties
        }
      >
        <Image
          className={styles.image}
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1180px) 78vw, 920px"
          priority={priority}
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
