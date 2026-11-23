import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/Buttons';
import { links, profile } from '../data/profile';

export const ContactSection = () => {
  const primary = links.email
    ? { href: `mailto:${links.email}`, label: 'Email me', external: false }
    : { href: links.github, label: 'Find me on GitHub', external: true };

  const socials = [
    { label: 'GitHub', href: links.github, icon: Github },
    { label: 'LinkedIn', href: links.linkedin, icon: Linkedin },
    { label: 'Email', href: links.email ? `mailto:${links.email}` : '', icon: Mail },
  ].filter((item) => item.href);

  return (
    <section id="contact" className="flex flex-col items-center px-5 pb-10 pt-24 sm:px-8 md:px-10 md:pt-32">
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Let&apos;s talk
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p
          className="mt-8 max-w-[560px] text-center font-light leading-relaxed text-[#D7E2EA]/80"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        >
          Open to internships, junior developer roles and freelance projects. If you have something in mind, reach out.
        </p>
      </FadeIn>
      <FadeIn delay={0.3} className="mt-12">
        <ContactButton href={primary.href} external={primary.external}>
          {primary.label} <ArrowUpRight size={18} aria-hidden="true" />
        </ContactButton>
      </FadeIn>

      <ul className="mt-12 flex gap-6">
        {socials.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm uppercase tracking-widest text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
            >
              <Icon size={18} aria-hidden="true" /> {label}
            </a>
          </li>
        ))}
      </ul>

      <footer className="mt-24 flex w-full flex-wrap justify-between gap-2 border-t border-[#D7E2EA]/15 pt-6 text-xs uppercase tracking-widest text-[#D7E2EA]/50">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </section>
  );
};
