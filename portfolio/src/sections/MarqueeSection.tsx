import { useEffect, useRef, useState } from 'react';
import { marqueeRowOne, marqueeRowTwo } from '../data/skills';

const Tile = ({ label, index }: { label: string; index: number }) => {
  const filled = index % 3 === 0;
  return (
    <div
      className={`flex h-[110px] shrink-0 items-center justify-center rounded-2xl px-10 sm:h-[140px] sm:px-14 ${
        filled ? 'contact-button' : 'border-2 border-[#D7E2EA]/15 bg-[#141414]'
      }`}
    >
      <span
        className={`whitespace-nowrap font-semibold uppercase tracking-tight ${filled ? 'text-white' : 'hero-heading'}`}
        style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}
      >
        {label}
      </span>
    </div>
  );
};

const Row = ({ items, translate }: { items: string[]; translate: number }) => {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="flex w-max gap-3" style={{ transform: `translateX(${translate}px)`, willChange: 'transform' }}>
      {tripled.map((label, i) => (
        <Tile key={`${label}-${i}`} label={label} index={i} />
      ))}
    </div>
  );
};

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Technologies"
      className="flex flex-col gap-3 overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="-ml-[60%]">
        <Row items={marqueeRowOne} translate={offset - 200} />
      </div>
      <div className="-ml-[60%]">
        <Row items={marqueeRowTwo} translate={-(offset - 200)} />
      </div>
    </section>
  );
};
