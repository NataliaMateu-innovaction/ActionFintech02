// Animated product hero (12 s loop, 3:2). Plays muted in a loop; with reduced motion
// it stays on the poster (first frame). Files: /assets/{name}.webm, .mp4 and -poster.jpg.
export function HeroVideo({ name, label }) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return <video className="product-art product-video" autoPlay={!reduceMotion} loop muted playsInline preload="auto" poster={`/assets/${name}-poster.jpg`} width="1536" height="1024" aria-label={label}>
    <source src={`/assets/${name}.webm`} type="video/webm" />
    <source src={`/assets/${name}.mp4`} type="video/mp4" />
  </video>;
}
