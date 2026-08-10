"use client";

import { useEffect } from "react";

function getHashTarget(hash: string) {
  if (!hash.startsWith("#") || hash.length === 1) {
    return null;
  }

  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}

function scrollToHash(hash: string, behavior: ScrollBehavior) {
  getHashTarget(hash)?.scrollIntoView({ behavior, block: "start" });
}

export default function AnchorNavigation() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const preferredBehavior = (): ScrollBehavior =>
      reducedMotion.matches ? "auto" : "smooth";

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const origin = event.target;
      if (!(origin instanceof Element)) {
        return;
      }

      const link = origin.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) {
        return;
      }

      const destination = new URL(link.href, window.location.href);
      const target = getHashTarget(destination.hash);
      if (
        !target ||
        destination.pathname !== window.location.pathname ||
        destination.search !== window.location.search
      ) {
        return;
      }

      event.preventDefault();
      if (window.location.hash !== destination.hash) {
        window.history.pushState(null, "", destination.hash);
      }
      target.scrollIntoView({ behavior: preferredBehavior(), block: "start" });

      if (link.classList.contains("skip-link") && target instanceof HTMLElement) {
        target.focus({ preventScroll: true });
      }
    };

    const handleHashChange = () => {
      scrollToHash(window.location.hash, preferredBehavior());
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("hashchange", handleHashChange);

    const initialScrollFrame = window.requestAnimationFrame(() => {
      scrollToHash(window.location.hash, "auto");
    });

    return () => {
      window.cancelAnimationFrame(initialScrollFrame);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null;
}
