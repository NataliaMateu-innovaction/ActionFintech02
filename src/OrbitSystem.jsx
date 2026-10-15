import { useEffect, useRef } from "react";

// Ecosystem diagram: the core sends a data pulse along the axis to each module in turn,
// and the module lights up when it arrives. On mobile only the cards light up in sequence;
// with reduced motion the diagram stays static.
const GAP = 0.8;     // seconds between pulses
const TRAVEL = 1.1;  // seconds a pulse takes from the core to a module
const LIT = 1.4;     // seconds a module stays lit after the pulse arrives
const DELAY = 1.6;   // wait for the entrance animation before the first pulse

const ease = x => (x < .5 ? 2 * x * x : 1 - (-2 * x + 2) ** 2 / 2);

export function OrbitSystem({ items }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    const svg = root.querySelector(".orbit-links");
    const core = root.querySelector(".orbit-core");
    const nodes = [...root.querySelectorAll(".orbit-node")];
    const links = [...root.querySelectorAll(".orbit-link")];
    const pulses = [...root.querySelectorAll(".orbit-pulse")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let routes = [];
    let frame = 0;
    let start = 0;

    // Elbow route per module: core edge -> along the horizontal axis -> up/down to the card.
    const layout = () => {
      const box = root.getBoundingClientRect();
      const c = core.getBoundingClientRect();
      const cy = box.height / 2;
      svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
      routes = nodes.map((node, i) => {
        const r = node.getBoundingClientRect();
        const x = r.left - box.left + r.width / 2;
        const top = r.top - box.top;
        const y = top + r.height / 2 < cy ? top + r.height : top;
        const x0 = x < box.width / 2 ? c.left - box.left : c.right - box.left;
        links[i].setAttribute("d", `M${x.toFixed(1)} ${cy.toFixed(1)}V${y.toFixed(1)}`);
        return { x0, x, cy, y, run: Math.abs(x - x0), rise: Math.abs(y - cy) };
      });
    };

    const at = ({ x0, x, cy, y, run, rise }, p) => {
      const d = p * (run + rise);
      return d <= run ? [x0 + Math.sign(x - x0) * d, cy] : [x, cy + Math.sign(y - cy) * (d - run)];
    };

    const tick = now => {
      const t = (now - start) / 1000;
      const cycle = GAP * nodes.length;
      nodes.forEach((node, i) => {
        const phase = t < 0 ? -1 : (((t - i * GAP) % cycle) + cycle) % cycle;
        const p = phase / TRAVEL;
        const traveling = phase >= 0 && p <= 1;
        if (traveling && routes[i]) {
          const [x, y] = at(routes[i], ease(p));
          pulses[i].setAttribute("transform", `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
        }
        pulses[i].style.opacity = traveling ? Math.min(1, p * 8, (1 - p) * 8 + .25).toFixed(2) : "0";
        const lit = phase >= TRAVEL - .08 && phase < TRAVEL + LIT;
        node.classList.toggle("is-hit", lit);
        links[i].classList.toggle("is-lit", phase >= 0 && phase < TRAVEL + LIT);
      });
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      nodes.forEach(node => node.classList.remove("is-hit"));
      links.forEach(link => link.classList.remove("is-lit"));
      pulses.forEach(pulse => (pulse.style.opacity = "0"));
    };
    const play = () => {
      if (frame || reduce.matches) return;
      if (!start) start = performance.now() + DELAY * 1000;
      frame = requestAnimationFrame(tick);
    };

    layout();
    const resize = new ResizeObserver(layout);
    resize.observe(root);
    // Only animate while the diagram is on screen.
    const view = new IntersectionObserver(([entry]) => (entry.isIntersecting ? play() : stop()), { threshold: .15 });
    view.observe(root);
    const onMotion = () => (reduce.matches ? stop() : layout());
    reduce.addEventListener("change", onMotion);

    const hover = i => () => links[i].classList.add("is-hover");
    const leave = i => () => links[i].classList.remove("is-hover");
    const handlers = nodes.map((node, i) => [hover(i), leave(i)]);
    nodes.forEach((node, i) => { node.addEventListener("pointerenter", handlers[i][0]); node.addEventListener("pointerleave", handlers[i][1]); });

    return () => {
      stop();
      resize.disconnect();
      view.disconnect();
      reduce.removeEventListener("change", onMotion);
      nodes.forEach((node, i) => { node.removeEventListener("pointerenter", handlers[i][0]); node.removeEventListener("pointerleave", handlers[i][1]); });
    };
  }, []);

  return <div ref={ref} className="orbit-system reveal" aria-label="Sistema modular conectado">
    <svg className="orbit-links" aria-hidden="true" focusable="false">
      {items.map((item, i) => <path key={item} className="orbit-link" pathLength="1" style={{ "--i": i }} />)}
      {items.map(item => <g key={item} className="orbit-pulse"><circle className="halo" r="12" /><circle r="4.5" /></g>)}
    </svg>
    <div className="orbit-core"><img src="/assets/action-fintech-logo.png" width="206" height="75" alt="Action Fintech" /><span>financial infrastructure</span></div>
    {items.map((item, i) => <div key={item} className={`orbit-node node-${i + 1}`} style={{ "--i": i }}><span>{String(i + 1).padStart(2, "0")}</span>{item}</div>)}
  </div>;
}
