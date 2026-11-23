export type SkillGroup = {
  name: string;
  description: string;
  items: string[];
  status: 'Working with' | 'Familiar with' | 'Currently learning' | 'Daily use';
};

export const skillGroups: SkillGroup[] = [
  {
    name: 'Frontend',
    status: 'Working with',
    description:
      'Responsive, mobile-first interfaces with component-driven React, typed with TypeScript and styled with Tailwind.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    name: 'Backend & APIs',
    status: 'Working with',
    description:
      'REST endpoints, API integrations and server logic in Node.js, plus the input validation and auth checks around them.',
    items: ['Node.js', 'REST APIs', 'API integration'],
  },
  {
    name: 'Databases',
    status: 'Working with',
    description:
      'Database-backed features with PostgreSQL and Supabase, including per-user data isolation and persistence testing.',
    items: ['PostgreSQL', 'Supabase', 'Drizzle ORM'],
  },
  {
    name: 'Languages & Tools',
    status: 'Familiar with',
    description:
      'Coursework and practice languages, plus the everyday tooling I use for development, debugging and collaboration.',
    items: ['Java', 'Python', 'C', 'C++', 'Git', 'GitHub', 'Docker', 'VS Code'],
  },
  {
    name: 'Operating Systems & Linux',
    status: 'Daily use',
    description:
      'Arch Linux is my primary environment. I have explored several distributions and build practical experience with Linux fundamentals, terminal workflows, package management, system configuration and troubleshooting.',
    items: [
      'Arch Linux',
      'CachyOS',
      'Fedora',
      'Kali Linux',
      'Linux Fundamentals',
      'Command Line & Terminal',
      'System Configuration',
      'Package Management',
      'Troubleshooting',
    ],
  },
  {
    name: 'Cybersecurity',
    status: 'Currently learning',
    description:
      'Learning cybersecurity fundamentals through ongoing exploration. Kali Linux has given me basic familiarity with some security tools.',
    items: [
      'Kali Linux Tools (Basic Familiarity)',
      'Cybersecurity Fundamentals',
      'Security Learning & Exploration',
    ],
  },
];

// Short words for the scrolling marquee rows.
export const marqueeRowOne = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Supabase',
  'Tailwind CSS', 'WebRTC', 'REST APIs', 'PWA', 'Git',
];

export const marqueeRowTwo = [
  'Linux', 'Docker', 'Java', 'Python', 'C++', 'Cybersecurity',
  'Networking', 'Kali Linux', 'DevOps', 'Debugging',
];
