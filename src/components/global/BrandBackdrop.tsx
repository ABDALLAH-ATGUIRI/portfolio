import { useEffect } from "react";

const NODES = [
  [8, 18],
  [18, 42],
  [32, 22],
  [46, 58],
  [62, 28],
  [74, 64],
  [88, 36],
  [94, 72],
] as const;

const LINKS: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
  [2, 4],
  [3, 4],
  [4, 5],
  [4, 6],
  [5, 7],
  [6, 7],
];

/** Fixed brand field: navy canvas, a slow violet/cyan wash, and a quiet node mesh. */
export function BrandBackdrop() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let frame = 0;
    const update = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      document.documentElement.style.setProperty("--brand-scroll", progress.toFixed(3));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="brand-backdrop" aria-hidden="true">
      <div className="brand-backdrop-glow" />
      <svg className="brand-constellation" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {LINKS.map(([from, to]) => (
          <line
            key={`${from}-${to}`}
            x1={NODES[from][0]}
            y1={NODES[from][1]}
            x2={NODES[to][0]}
            y2={NODES[to][1]}
          />
        ))}
        {NODES.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="0.55" />
        ))}
      </svg>
    </div>
  );
}
