import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/Buttons';
import { Cube, Pyramid, Ring, Sphere } from '../components/Shapes';
import { photos, profile } from '../data/profile';

export const AboutSection = () => (
  <section
    id="about"
    className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
  >
    <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="pointer-events-none absolute left-[1%] top-[4%] w-[90px] sm:left-[2%] sm:w-[130px] md:left-[4%] md:w-[170px]">
      <Sphere className="h-auto w-full" />
    </FadeIn>
    <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="pointer-events-none absolute bottom-[8%] left-[3%] w-[80px] sm:left-[6%] sm:w-[110px] md:left-[10%] md:w-[150px]">
      <Pyramid className="h-auto w-full" />
    </FadeIn>
    <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="pointer-events-none absolute right-[1%] top-[4%] w-[90px] sm:right-[2%] sm:w-[130px] md:right-[4%] md:w-[170px]">
      <Cube className="h-auto w-full" />
    </FadeIn>
    <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="pointer-events-none absolute bottom-[8%] right-[3%] w-[90px] sm:right-[6%] sm:w-[130px] md:right-[10%] md:w-[170px]">
      <Ring className="h-auto w-full" />
    </FadeIn>

    <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>
        <AnimatedText
          text={profile.about}
          className="max-w-[580px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
        <div className="w-full max-w-sm" aria-label="Personal photo">
          <FadeIn as="figure" delay={0.08} y={32} className="group relative overflow-hidden rounded-[28px] border border-[#D7E2EA]/20 bg-[#141414] p-2 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:rounded-[36px] sm:p-3">
            <img
              src={photos.portrait}
              alt="Apurbo in a traditional embroidered outfit"
              className="aspect-[4/5] w-full rounded-[20px] object-cover object-[center_38%] transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:rounded-[28px]"
              loading="lazy"
            />
          </FadeIn>
        </div>
        <FadeIn delay={0.1} y={20}>
          <p className="text-center text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-base">
            {profile.education} · {profile.location}
          </p>
        </FadeIn>
      </div>
      <ContactButton href="#contact">Contact Me</ContactButton>
    </div>
  </section>
);
