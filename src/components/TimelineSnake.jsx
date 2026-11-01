import React, { useEffect, useRef } from "react";

const TimelineSnake = () => {
  const pathAuraRef = useRef(null);
  const pathBodyRef = useRef(null);
  const pathBellyRef = useRef(null);
  const pathDorsalRef = useRef(null);
  const headGroupRef = useRef(null);
  const tonguePathRef = useRef(null);
  const scaleRingsRef = useRef([]);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const length = 165;
    const numPoints = 28;
    const baseX = 50;
    const wavelength = 90;
    const k = (2 * Math.PI) / wavelength;
    const freq = 1.35; // natural slithering frequency (cycles/sec)
    const omega = 2 * Math.PI * freq;
    const ringCount = 8;

    let animId;
    let startTime = performance.now();

    const updateFrame = () => {
      const now = performance.now();
      const t = (now - startTime) / 1000;

      const pts = [];
      for (let i = 0; i <= numPoints; i++) {
        const frac = i / numPoints; // 0 at tail tip, 1 at head
        const y = 12 + frac * length;
        const d = (1.0 - frac) * length;

        // Organic biological envelope:
        // Tail whips gently (amp ~6), midbody contracts strongly (amp ~18), head leads with ~11
        const env = Math.sin(frac * Math.PI);
        const amp = 6 + 13 * Math.pow(env, 0.75);

        // Sinusoidal wave propagating backwards down spine
        const phase = d * k - omega * t;
        const x = baseX + amp * Math.sin(phase);

        // Instantaneous tangent angle (dx/dy)
        const dx_dy = amp * k * Math.cos(phase);
        const angle = Math.atan(dx_dy);

        pts.push({ x, y, angle });
      }

      // Construct ultra-smooth quadratic Bezier spine path
      let dStr = `M ${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const midX = (pts[i].x + pts[i + 1].x) / 2;
        const midY = (pts[i].y + pts[i + 1].y) / 2;
        dStr += ` Q ${pts[i].x.toFixed(1)},${pts[i].y.toFixed(1)} ${midX.toFixed(1)},${midY.toFixed(1)}`;
      }
      const last = pts[pts.length - 1];
      dStr += ` L ${last.x.toFixed(1)},${last.y.toFixed(1)}`;

      // Update spine paths directly via DOM for optimal 60 FPS hardware acceleration
      if (pathAuraRef.current) pathAuraRef.current.setAttribute("d", dStr);
      if (pathBodyRef.current) pathBodyRef.current.setAttribute("d", dStr);
      if (pathBellyRef.current) pathBellyRef.current.setAttribute("d", dStr);
      if (pathDorsalRef.current) pathDorsalRef.current.setAttribute("d", dStr);

      // Position & rotate anatomical snake head to match spine tangent
      if (headGroupRef.current) {
        const headAngleDeg = ((last.angle * 180) / Math.PI).toFixed(1);
        headGroupRef.current.setAttribute(
          "transform",
          `translate(${last.x.toFixed(1)}, ${last.y.toFixed(1)}) rotate(${-headAngleDeg})`
        );
      }

      // Animate tongue flicking rhythmically
      if (tonguePathRef.current) {
        const tongueCycle = Math.sin(t * omega * 2.5);
        const tongueLen = tongueCycle > 0.2 ? (16 + 6 * tongueCycle).toFixed(1) : "13";
        const tongueFork = tongueCycle > 0.2 ? (parseFloat(tongueLen) + 4).toFixed(1) : "15";
        tonguePathRef.current.setAttribute(
          "d",
          `M 0,11 L 0,${tongueLen} L -3.5,${tongueFork} M 0,${tongueLen} L 3.5,${tongueFork}`
        );
      }

      // Position scale rings along undulating spine
      for (let r = 0; r < ringCount; r++) {
        const ringEl = scaleRingsRef.current[r];
        if (ringEl) {
          const idx = Math.floor(3 + r * ((numPoints - 6) / ringCount));
          const pt = pts[idx];
          const ringAngleDeg = ((pt.angle * 180) / Math.PI).toFixed(1);
          ringEl.setAttribute("cx", pt.x.toFixed(1));
          ringEl.setAttribute("cy", pt.y.toFixed(1));
          ringEl.setAttribute(
            "transform",
            `rotate(${-ringAngleDeg}, ${pt.x.toFixed(1)}, ${pt.y.toFixed(1)})`
          );
        }
      }

      animId = requestAnimationFrame(updateFrame);
    };

    animId = requestAnimationFrame(updateFrame);

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  const ringCount = 8;
  const ringColors = [
    "#f43f85",
    "#e879f9",
    "#c084fc",
    "#a855f7",
    "#818cf8",
    "#60a5fa",
    "#38bdf8",
    "#22d3ee",
  ];

  return (
    <div className="timeline-snake-track" aria-hidden="true">
      <div className="timeline-snake-runner">
        <svg
          viewBox="0 0 100 230"
          width="90"
          height="205"
          className="drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]"
          style={{ overflow: "visible" }}
        >
          <defs>
            {/* Multi-Tone Neon Serpent Skin Gradient */}
            <linearGradient id="serpentSkinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f43f85" />
              <stop offset="28%" stopColor="#c084fc" />
              <stop offset="55%" stopColor="#818cf8" />
              <stop offset="82%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>

            {/* Ventral Underbelly Contrast Gradient */}
            <linearGradient id="serpentBellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fda4af" />
              <stop offset="30%" stopColor="#e9d5ff" />
              <stop offset="65%" stopColor="#c7d2fe" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>

            {/* Venomous Glowing Eyes */}
            <radialGradient id="serpentEyeVenom" cx="45%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#22d3ee" />
              <stop offset="90%" stopColor="#0284c7" />
            </radialGradient>

            {/* Soft Ambient Glow Filter */}
            <filter id="serpentAmbientGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g filter="url(#serpentAmbientGlow)">
            {/* Luminous Outer Aura */}
            <path
              ref={pathAuraRef}
              d="M 50,12 Q 35,45 50,85 Q 65,125 50,165"
              fill="none"
              stroke="url(#serpentSkinGrad)"
              strokeWidth="16"
              strokeLinecap="round"
              opacity="0.35"
            />

            {/* Main Serpentine S-Curved Body */}
            <path
              ref={pathBodyRef}
              d="M 50,12 Q 35,45 50,85 Q 65,125 50,165"
              fill="none"
              stroke="url(#serpentSkinGrad)"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Ventral Underbelly Contrast Line */}
            <path
              ref={pathBellyRef}
              d="M 50,12 Q 35,45 50,85 Q 65,125 50,165"
              fill="none"
              stroke="url(#serpentBellyGrad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Dorsal Scale Ridge Chevron Dash */}
            <path
              ref={pathDorsalRef}
              d="M 50,12 Q 35,45 50,85 Q 65,125 50,165"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="4,4"
              opacity="0.9"
            />

            {/* Scale Rings along spine */}
            <g>
              {Array.from({ length: ringCount }).map((_, i) => (
                <ellipse
                  key={i}
                  ref={(el) => (scaleRingsRef.current[i] = el)}
                  cx="50"
                  cy={30 + i * 16}
                  rx={(3.5 + 2 * Math.sin((i / ringCount) * Math.PI)).toFixed(1)}
                  ry="1.8"
                  fill={ringColors[i]}
                />
              ))}
            </g>

            {/* Anatomical Snake Head Leading Downward */}
            <g ref={headGroupRef} transform="translate(50, 165)">
              {/* Flared Temporal Cheeks / Head Hood */}
              <path
                d="M 0,-10 C -12,-16 -14,-4 -7,4 C -3,8 0,11 0,11 C 0,11 3,8 7,4 C 14,-4 12,-16 0,-10 Z"
                fill="#0e7490"
                stroke="#22d3ee"
                strokeWidth="1.8"
              />

              {/* Crown Scale Plate */}
              <polygon
                points="0,-7 -4,-1 0,4 4,-1"
                fill="#915eff"
                stroke="#ffffff"
                strokeWidth="0.8"
              />

              {/* Left Eye (Glowing Cyan) */}
              <ellipse cx="-7" cy="-2" rx="2" ry="2.6" fill="url(#serpentEyeVenom)" />
              <circle cx="-7" cy="-2" r="0.8" fill="#ffffff" />

              {/* Right Eye (Glowing Cyan) */}
              <ellipse cx="7" cy="-2" rx="2" ry="2.6" fill="url(#serpentEyeVenom)" />
              <circle cx="7" cy="-2" r="0.8" fill="#ffffff" />

              {/* Nostril Pits on Snout */}
              <circle cx="-1.8" cy="8" r="0.7" fill="#082f49" />
              <circle cx="1.8" cy="8" r="0.7" fill="#082f49" />

              {/* Forked Tongue Flicking Out */}
              <path
                ref={tonguePathRef}
                d="M 0,11 L 0,17 L -3.5,21 M 0,17 L 3.5,21"
                fill="none"
                stroke="#f43f85"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default TimelineSnake;
