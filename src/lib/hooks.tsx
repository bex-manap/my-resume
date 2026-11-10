import { useEffect, useState, type ReactNode } from "react";
import { splitFigures } from "../content";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/** Cycles through words. Screen readers get the full list once, not the animation. */
export function useRotation(length: number, intervalMs = 2600) {
  const reduced = usePrefersReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduced || length < 2) return;
    const t = setInterval(() => setI((p) => (p + 1) % length), intervalMs);
    return () => clearInterval(t);
  }, [reduced, length, intervalMs]);
  return reduced ? 0 : i;
}

/** Renders text with numeric figures wrapped so a design can mark them. */
export function WithFigures({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <>
      {splitFigures(text).map((part, i) =>
        part.figure ? (
          <span key={i} className={className}>
            {part.text}
          </span>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </>
  );
}

/** Sets the page background so overscroll and the area behind the page match the design. */
export function usePageBackground(color: string) {
  useEffect(() => {
    const prevHtml = document.documentElement.style.background;
    const prevBody = document.body.style.background;
    document.documentElement.style.background = color;
    document.body.style.background = color;
    return () => {
      document.documentElement.style.background = prevHtml;
      document.body.style.background = prevBody;
    };
  }, [color]);
}

export function ExternalLink({
  href,
  className,
  children,
  label,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  label?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
