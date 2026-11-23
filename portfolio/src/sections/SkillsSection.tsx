import { FadeIn } from '../components/FadeIn';
import { skillGroups } from '../data/skills';

export const SkillsSection = () => (
  <section
    id="skills"
    className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
  >
    <FadeIn y={40}>
      <h2
        className="mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Skills
      </h2>
    </FadeIn>

    <ul className="mx-auto max-w-5xl">
      {skillGroups.map((group, i) => (
        <FadeIn
          as="li"
          key={group.name}
          delay={i * 0.1}
          className="flex items-start gap-5 border-t border-[rgba(12,12,12,0.15)] py-8 last:border-b sm:gap-8 sm:py-10 md:gap-12 md:py-12"
        >
          <span
            className="shrink-0 font-black leading-none tabular-nums"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="flex flex-col gap-2 pt-1 sm:gap-3 md:pt-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {group.name}
              </h3>
              <span className="rounded-full border border-[#0C0C0C]/25 px-3 py-0.5 text-[0.7rem] font-medium uppercase tracking-widest text-[#0C0C0C]/70 sm:text-xs">
                {group.status}
              </span>
            </div>
            <p
              className="max-w-2xl font-light leading-relaxed opacity-60"
              style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
            >
              {group.description}
            </p>
            <ul className="mt-1 flex flex-wrap gap-2" aria-label={`${group.name} technologies`}>
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-[#0C0C0C] px-3 py-1 text-xs font-medium text-white sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </ul>
  </section>
);
