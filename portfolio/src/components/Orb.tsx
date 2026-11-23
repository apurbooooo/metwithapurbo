// Abstract geometric hero visual (replaces a portrait).
export const Orb = () => (
  <div className="orb-float relative aspect-square w-full" aria-hidden="true">
    <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full overflow-visible">
      <defs>
        <radialGradient id="orb-core" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#F5D0FF" />
          <stop offset="22%" stopColor="#B600A8" />
          <stop offset="58%" stopColor="#7621B0" />
          <stop offset="88%" stopColor="#18011F" />
          <stop offset="100%" stopColor="#0C0C0C" />
        </radialGradient>
        <radialGradient id="orb-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7621B0" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7621B0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="orb-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#BE4C00" />
          <stop offset="50%" stopColor="#B600A8" />
          <stop offset="100%" stopColor="#D7E2EA" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="200" fill="url(#orb-glow)" />
      <circle cx="200" cy="200" r="120" fill="url(#orb-core)" />
      <g fill="none" stroke="#D7E2EA" strokeOpacity="0.14" strokeWidth="1">
        <ellipse cx="200" cy="200" rx="120" ry="40" />
        <ellipse cx="200" cy="200" rx="120" ry="80" />
        <ellipse cx="200" cy="200" rx="40" ry="120" />
        <ellipse cx="200" cy="200" rx="80" ry="120" />
      </g>
      <g className="orb-ring" style={{ transformOrigin: '200px 200px' }}>
        <ellipse
          cx="200"
          cy="200"
          rx="185"
          ry="58"
          fill="none"
          stroke="url(#orb-ring)"
          strokeWidth="3"
          transform="rotate(-24 200 200)"
        />
        <circle cx="368" cy="128" r="7" fill="#BE4C00" />
      </g>
    </svg>
  </div>
);
