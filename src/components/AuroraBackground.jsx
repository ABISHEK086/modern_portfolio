import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.background = `radial-gradient(500px circle at ${e.clientX}px ${e.clientY}px, hsl(var(--primary) / 0.06), transparent 70%)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[hsl(var(--background))]">
      <div className="absolute top-[-10%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-[hsl(var(--primary)/0.14)] blur-[110px] animate-drift-1" />
      <div className="absolute bottom-[-15%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-[hsl(200,100%,50%,0.10)] blur-[110px] animate-drift-2" />

      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      />

      <svg className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-overlay">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background))_100%)]" />
    </div>
  );
}