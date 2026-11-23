import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/Buttons';
import { Orb } from '../components/Orb';
import { photos, profile } from '../data/profile';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const HeroSection = () => (
  <section className="relative flex h-screen min-h-[560px] flex-col" style={{ overflowX: 'clip' }}>
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <img
        src={photos.beach}
        alt=""
        className="h-full w-full object-cover object-[center_58%] opacity-40 [filter:brightness(0.8)_saturate(0.8)] [mask-image:linear-gradient(to_bottom,black_0%,black_78%,transparent_100%)]"
      />
    </div>
    <FadeIn as="nav" delay={0} y={-20} className="relative z-20" aria-label="Main">
      <ul className="flex justify-between px-6 pt-6 md:px-10 md:pt-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </FadeIn>

    <div className="overflow-hidden">
      <FadeIn delay={0.15} y={40}>
        <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[12vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[12.5vw] md:-mt-2 md:text-[13.5vw] lg:text-[14vw]">
          Hi, i&apos;m {profile.displayName}
        </h1>
      </FadeIn>
    </div>

    <div className="absolute left-1/2 top-1/2 z-10 w-[240px] -translate-x-1/2 -translate-y-1/2 sm:bottom-[6%] sm:top-auto sm:w-[300px] sm:translate-y-0 md:w-[360px] lg:w-[420px]">
      <FadeIn delay={0.6} y={30}>
      <div className="relative">
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
      >
        <Orb />
      </Magnet>
      </div>
      </FadeIn>
    </div>

    <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
      <FadeIn delay={0.35} y={20}>
        <p
          className="max-w-[170px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[240px] md:max-w-[300px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {profile.headline}. {profile.tagline}.
        </p>
      </FadeIn>
      <FadeIn delay={0.5} y={20}>
        <ContactButton href="#contact">Contact Me</ContactButton>
      </FadeIn>
    </div>
  </section>
);
