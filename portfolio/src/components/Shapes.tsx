// Small decorative geometric shapes for the About section corners.
type ShapeProps = { className?: string };

export const Cube = ({ className }: ShapeProps) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="cube-a" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#B600A8" />
        <stop offset="1" stopColor="#7621B0" />
      </linearGradient>
    </defs>
    <polygon points="100,20 170,60 100,100 30,60" fill="#D7E2EA" fillOpacity="0.85" />
    <polygon points="30,60 100,100 100,180 30,140" fill="url(#cube-a)" />
    <polygon points="170,60 100,100 100,180 170,140" fill="#18011F" />
  </svg>
);

export const Ring = ({ className }: ShapeProps) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="ring-a" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#BE4C00" />
        <stop offset="1" stopColor="#B600A8" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="62" fill="none" stroke="url(#ring-a)" strokeWidth="30" />
  </svg>
);

export const Pyramid = ({ className }: ShapeProps) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="pyr-a" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#D7E2EA" />
        <stop offset="1" stopColor="#646973" />
      </linearGradient>
    </defs>
    <polygon points="100,20 30,170 100,140" fill="url(#pyr-a)" />
    <polygon points="100,20 170,170 100,140" fill="#7621B0" />
  </svg>
);

export const Sphere = ({ className }: ShapeProps) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
    <defs>
      <radialGradient id="sph-a" cx="35%" cy="30%" r="75%">
        <stop offset="0" stopColor="#FFD9B8" />
        <stop offset="0.35" stopColor="#BE4C00" />
        <stop offset="1" stopColor="#18011F" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="75" fill="url(#sph-a)" />
  </svg>
);
