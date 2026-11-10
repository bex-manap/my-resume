import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { education, experiences, shortPeriod } from "../content";

/*
 * Career timeline, newest at the top.
 * The career line runs through every job; university runs on a parallel
 * side line (it overlapped with DrinkIt) and merges into the career line at Binance.
 * While the experience list scrolls by, the role being read is highlighted.
 */

type Entry = {
  target: string; // id of the element this entry links to
  title: string;
  org: string;
  period: string;
  logo?: string;
  kind: "work" | "study";
};

const entries: Entry[] = [
  ...experiences.map(
    (e): Entry => ({
      target: `job-${e.id}`,
      title: e.role,
      org: e.company,
      period: shortPeriod(e.period),
      logo: e.logo,
      kind: "work",
    }),
  ),
  {
    target: "education",
    title: education[0].degree,
    org: education[0].institution.split(" - ")[0],
    period: shortPeriod(education[0].year),
    kind: "study",
  },
];

const jobTargets = entries.filter((e) => e.kind === "work").map((e) => e.target);

/** The last job whose top has passed 45% of the viewport is the one being read. */
function useActiveJob() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.45;
      let current: string | null = null;
      for (const id of jobTargets) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      const list = document.getElementById(jobTargets[jobTargets.length - 1]);
      if (list && list.getBoundingClientRect().bottom < 0) current = null;
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return active;
}

type Lines = { career: string; study: string; w: number; h: number };

/** Position of an element relative to a positioned ancestor, ignoring transforms. */
function offsetWithin(el: HTMLElement, root: HTMLElement) {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = el;
  while (node && node !== root) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x, y };
}

export function CareerTimeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [lines, setLines] = useState<Lines | null>(null);
  const active = useActiveJob();

  // Layout offsets, not bounding rects, so transforms never skew the lines.
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () => {
      const pts = dotRefs.current.map((el) => {
        const p = offsetWithin(el!, list);
        return { x: p.x + el!.offsetWidth / 2, y: p.y + el!.offsetHeight / 2 };
      });
      const work = pts.filter((_, i) => entries[i].kind === "work");
      const study = pts[entries.findIndex((e) => e.kind === "study")];
      const binance = pts[entries.findIndex((e) => e.org === "Binance")];
      const lastWork = work[work.length - 1];

      // Side line rises from the university dot and bends into the career line
      // just below Binance, the first role after graduation.
      const mergeY = binance.y + (lastWork.y - binance.y) * 0.42;
      const bend = 34;
      setLines({
        career: `M${work[0].x} ${work[0].y} L${lastWork.x} ${lastWork.y}`,
        study: `M${study.x} ${study.y} L${study.x} ${mergeY + bend} C${study.x} ${mergeY + bend * 0.35}, ${binance.x} ${mergeY + bend * 0.65}, ${binance.x} ${mergeY}`,
        w: list.offsetWidth,
        h: list.offsetHeight,
      });
    };
    measure();
    document.fonts?.ready.then(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(list);
    return () => ro.disconnect();
  }, []);

  return (
    <nav className="pt-tl" aria-label="Career timeline">
      <ol className="pt-tl-list" ref={listRef}>
        {lines && (
          <svg
            className="pt-tl-lines"
            width={lines.w}
            height={lines.h}
            viewBox={`0 0 ${lines.w} ${lines.h}`}
            aria-hidden="true"
          >
            <path d={lines.career} />
            <path d={lines.study} className="pt-tl-study" />
          </svg>
        )}
        {entries.map((e, i) => {
          const isActive = active === e.target;
          const isLive = i === 0;
          return (
            <li
              key={e.target}
              className="pt-tl-item"
              data-kind={e.kind}
              data-active={isActive}
              data-live={isLive}
            >
              <a href={`#${e.target}`} aria-current={isActive ? "true" : undefined}>
                <span className="pt-tl-rail">
                  {isLive && <span className="pt-tl-tail" aria-hidden="true" />}
                  <span
                    className="pt-tl-dot"
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                  >
                    {e.logo ? (
                      <img src={e.logo} alt="" />
                    ) : e.kind === "study" ? (
                      <GraduationCap size={16} aria-hidden="true" />
                    ) : (
                      <Briefcase size={15} aria-hidden="true" />
                    )}
                  </span>
                </span>
                <span className="pt-tl-text">
                  <span className="pt-tl-org">{e.org}</span>
                  <span className="pt-tl-title">{e.title}</span>
                  <span className="pt-tl-period">{e.period}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
