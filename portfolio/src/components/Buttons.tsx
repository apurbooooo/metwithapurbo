import type { ReactNode } from 'react';

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

const externalProps = { target: '_blank', rel: 'noopener noreferrer' };

export const ContactButton = ({ href, children, external, className = '' }: LinkButtonProps) => (
  <a
    href={href}
    {...(external ? externalProps : {})}
    className={`contact-button inline-flex items-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
  >
    {children}
  </a>
);

export const GhostButton = ({ href, children, external, className = '' }: LinkButtonProps) => (
  <a
    href={href}
    {...(external ? externalProps : {})}
    className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-8 sm:py-3 sm:text-sm ${className}`}
  >
    {children}
  </a>
);
