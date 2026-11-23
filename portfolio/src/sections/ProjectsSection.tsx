import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { useRef } from 'react';
import { FadeIn } from '../components/FadeIn';
import { GhostButton } from '../components/Buttons';
import { experiments, featuredProjects, type Project } from '../data/projects';

type CardProps = {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

const Visual = ({ project }: { project: Project }) => {
  return (
    <div
      className="group relative aspect-video min-h-[180px] overflow-hidden rounded-[32px] bg-[#141414] sm:rounded-[40px] md:rounded-[48px]"
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.imageAlt || `${project.name} live project preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      ) : (
        <div className="flex h-full min-h-[180px] items-center justify-center border border-[#D7E2EA]/10 px-4 text-center text-xs uppercase tracking-[0.18em] text-[#D7E2EA]/40">
          Screenshot not added
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, index, total, progress }: CardProps) => {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.article
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full max-w-6xl origin-top rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4 md:mb-8">
          <div className="flex items-end gap-4 sm:gap-6">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 110px)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="pb-1 md:pb-2">
              <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {project.category}
                {project.status ? ` · ${project.status}` : ''}
              </p>
              <h3 className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1.25rem, 2.6vw, 2.25rem)' }}>
                {project.name}
                <span className="block text-[0.55em] font-light normal-case tracking-normal text-[#D7E2EA]/70">
                  {project.subtitle}
                </span>
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.liveUrl ? (
              <GhostButton href={project.liveUrl} external>
                Live Preview <ArrowUpRight size={16} aria-hidden="true" />
              </GhostButton>
            ) : (
              <span className="inline-flex items-center rounded-full border border-[#D7E2EA]/30 px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/50 sm:px-8 sm:py-3 sm:text-sm">
                Coming Soon
              </span>
            )}
            {project.githubUrl && (
              <GhostButton href={project.githubUrl} external>
                <Github size={16} aria-hidden="true" /> View Code
                <span className="sr-only"> for {project.name} on GitHub</span>
              </GhostButton>
            )}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[2fr_3fr] md:gap-6">
          <div className="flex flex-col gap-4 rounded-[32px] border border-[#D7E2EA]/15 p-5 sm:rounded-[40px] sm:p-7 md:rounded-[48px]">
            {project.role && (
              <p className="text-xs font-medium uppercase tracking-widest text-[#E879F9]">My role: {project.role}</p>
            )}
            <p className="font-light leading-relaxed text-[#D7E2EA]" style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}>
              {project.summary}
            </p>
            <ul className="hidden flex-col gap-2 text-sm font-light text-[#D7E2EA]/75 sm:flex">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B600A8]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-auto flex flex-wrap gap-1.5" aria-label="Tech stack">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-full border border-[#D7E2EA]/25 px-2.5 py-0.5 text-xs text-[#D7E2EA]/80">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <Visual project={project} />
        </div>
      </motion.article>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-4 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef}>
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            total={featuredProjects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-6xl">
        <FadeIn>
          <h3 className="mb-6 text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60">Experiments</h3>
        </FadeIn>
        <ul className="grid gap-4 md:grid-cols-2">
          {experiments.map((item, i) => (
            <FadeIn as="li" key={item.name} delay={i * 0.1}>
              <a
                href={item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-3 rounded-[32px] border border-[#D7E2EA]/20 p-6 transition-colors duration-200 hover:border-[#D7E2EA]/60 sm:p-8"
              >
                <span className="flex items-center justify-between gap-4">
                  <span className="text-xl font-medium uppercase text-[#D7E2EA] sm:text-2xl">{item.name}</span>
                  <ArrowUpRight
                    className="shrink-0 text-[#D7E2EA]/60 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
                <span className="font-light leading-relaxed text-[#D7E2EA]/70">{item.description}</span>
                <span className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#D7E2EA]/25 px-2.5 py-0.5 text-xs text-[#D7E2EA]/80">
                      {tag}
                    </span>
                  ))}
                </span>
              </a>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
};
