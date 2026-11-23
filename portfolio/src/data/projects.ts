// Project content is based on each repository's README and source.
// Keep it truthful: only list what is implemented.

export type Project = {
  name: string;
  subtitle: string;
  category: string;
  status?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl: string;
  image?: string;
  imageAlt?: string;
  role?: string;
  accent: [string, string];
};

export const featuredProjects: Project[] = [
  {
    name: 'AddaRoom',
    subtitle: 'Real-time hangout & watch party platform',
    category: 'Personal · Open source',
    summary:
      'A registration-free hangout app for 2–6 friends: voice and video, screen sharing with shared audio, and a floating live chat overlay on top of the shared screen.',
    highlights: [
      'Voice & video over LiveKit SFU, with noise suppression and active speaker detection',
      'Server-enforced room capacities (2, 3, 4, 6) and host controls',
      'Ephemeral chat and reactions over WebRTC data channels, nothing stored',
      'Live network stats: RTT, packet loss, jitter, bitrate, FPS',
      'Tests for room creation, capacity limits, host security and token checks',
    ],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'LiveKit', 'PostgreSQL', 'Drizzle', 'Supabase', 'Vitest'],
    liveUrl: 'https://adda-room-gtg.vercel.app/',
    githubUrl: 'https://github.com/apurbooooo/AddaRoom',
    image: '/images/projects/addaroom.webp',
    imageAlt: 'AddaRoom landing page with its private room preview interface',
    accent: ['#B600A8', '#7621B0'],
  },
  {
    name: 'TraceLens',
    subtitle: 'Mobile camera tracing tool',
    category: 'Personal · PWA',
    summary:
      'A mobile-first web app that overlays a reference image on the live camera feed, so you can trace it onto paper under your phone.',
    highlights: [
      'Drag, pinch-to-zoom and two-finger rotate, with lock, flip and fit-to-screen',
      'Opacity, brightness, contrast, grayscale, invert and a pencil-sketch mode',
      'Rear/front camera switching, flashlight when the device supports it',
      'Screen Wake Lock, fullscreen, installable PWA with an offline shell',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Zustand', 'Canvas 2D', 'getUserMedia'],
    liveUrl: 'https://tracelens.apurbocode.workers.dev/',
    githubUrl: 'https://github.com/apurbooooo/TraceLens',
    image: '/images/projects/tracelens.webp',
    imageAlt: 'TraceLens page for uploading an image and tracing with a camera',
    accent: ['#7621B0', '#3B5BDB'],
  },
  {
    name: 'PROHOR',
    subtitle: 'Inclusive maternal & child healthcare platform',
    category: 'Hackathon · Team of 5',
    status: 'Hackathon MVP',
    role: 'Built the wellness & diary features',
    summary:
      'A hackathon concept for an accessible maternal and child healthcare platform for Bangladesh. I built the Shusthota wellness module inside our team repo.',
    highlights: [
      'Energy, mood, activity and rest check-ins plus diary entries',
      'API endpoints /api/wellness and /api/diary with Supabase persistence',
      'Tested with two test accounts: data persisted across sessions and stayed isolated per user',
      'Also worked on planning for the Shonket module',
    ],
    stack: ['TypeScript', 'REST APIs', 'Supabase', 'PostgreSQL'],
    liveUrl: 'https://prohor-ma.vercel.app/',
    githubUrl: 'https://github.com/iamomor/prahor-mvp',
    image: '/images/projects/prohor.webp',
    imageAlt: 'PROHOR maternal care platform landing page',
    accent: ['#BE4C00', '#B600A8'],
  },
  {
    name: 'CoverGen',
    subtitle: 'Assignment cover page generator',
    category: 'Personal · Utility',
    status: 'Working app',
    summary:
      'A browser tool for university students to fill in course and student details and export a formatted assignment cover page.',
    highlights: [
      'Four cover templates with live A4 preview',
      'Export to editable DOCX, or to PDF through the print dialog',
      'University logo upload, multiple students, custom fonts and sizes',
      'Optional auto-save of drafts in the browser, light and dark mode',
    ],
    stack: ['React 19', 'Vite', 'JavaScript', 'docx', 'IndexedDB'],
    liveUrl: 'https://cover-gen-forstudents.vercel.app/',
    githubUrl: '',
    image: '/images/projects/covergen.webp',
    imageAlt: 'CoverGen assignment cover editor and live document preview',
    accent: ['#3B5BDB', '#7621B0'],
  },
];

export type Experiment = {
  name: string;
  description: string;
  tags: string[];
  repo: string;
};

export const experiments: Experiment[] = [
  {
    name: 'Spider-Man Terminal',
    description:
      'A themed terminal setup for Arch Linux: Kitty, a custom dashboard, Fastfetch, a red-and-black color scheme and an ASCII logo.',
    tags: ['Linux', 'Kitty', 'Fastfetch', 'Dotfiles'],
    repo: 'https://github.com/apurbooooo/spiderman-terminal',
  },
];
