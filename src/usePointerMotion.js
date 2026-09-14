import { useEffect } from "react";

const selector = ".solution, .product-art, .orbit-node, .credit-cycle li, .payments-management article";

export function usePointerMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let dispose = () => {};
    const configure = () => {
      dispose();
      if (!preference.matches) return;
      const surfaces = [...document.querySelectorAll(selector)];
      surfaces.forEach(el => el.classList.add("pointer-surface"));
      let active = null;
      let frame = 0;
      let point = null;
      const resetSurface = () => {
        if (!active) return;
        active.classList.remove("pointer-active");
        ["--tilt-x", "--tilt-y", "--light-x", "--light-y"].forEach(name => active.style.removeProperty(name));
        active = null;
      };
      const reset = () => {
        cancelAnimationFrame(frame);
        frame = 0;
        point = null;
        resetSurface();
      };
      const update = () => {
        frame = 0;
        if (!point) return;
        const surface = point.target instanceof Element ? point.target.closest(selector) : null;
        if (surface !== active) { resetSurface(); active = surface; }
        if (!active) return;
        const rect = active.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (point.x - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (point.y - rect.top) / rect.height));
        const depth = active.matches(".product-art") ? 6 : 3;
        active.style.setProperty("--tilt-x", `${(0.5 - y) * depth}deg`);
        active.style.setProperty("--tilt-y", `${(x - 0.5) * depth}deg`);
        active.style.setProperty("--light-x", `${x * 100}%`);
        active.style.setProperty("--light-y", `${y * 100}%`);
        active.classList.add("pointer-active");
      };
      const move = event => {
        if (event.pointerType === "touch") return;
        point = { target: event.target, x: event.clientX, y: event.clientY };
        if (!frame) frame = requestAnimationFrame(update);
      };
      document.addEventListener("pointermove", move, { passive: true });
      document.documentElement.addEventListener("pointerleave", reset);
      window.addEventListener("blur", reset);
      window.addEventListener("scroll", reset, { passive: true });
      dispose = () => {
        reset();
        surfaces.forEach(el => el.classList.remove("pointer-surface"));
        document.removeEventListener("pointermove", move);
        document.documentElement.removeEventListener("pointerleave", reset);
        window.removeEventListener("blur", reset);
        window.removeEventListener("scroll", reset);
      };
    };
    configure();
    preference.addEventListener("change", configure);
    return () => { dispose(); preference.removeEventListener("change", configure); };
  }, []);
}
